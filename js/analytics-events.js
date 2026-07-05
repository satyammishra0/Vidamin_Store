/**
 * Ultra Fitness Gym – Analytics Event Tracking
 * Tracks all WhatsApp CTA clicks and phone call clicks via Google Analytics (gtag).
 * Auto-detects button location from DOM context so no manual markup is required.
 */
(function () {
  'use strict';

  /* ──────────────────────────────────────────────
   *  LOCATION DETECTION HELPERS
   * ────────────────────────────────────────────── */

  /**
   * Walk up the DOM tree to find the nearest semantic section / named landmark.
   * Returns a human-readable location string.
   */
  function detectLocation(el) {
    // 1. Honour an explicit data-location attribute on the element itself
    if (el.dataset && el.dataset.location) {
      return el.dataset.location;
    }

    // 2. Check for known structural IDs / class patterns on ancestors
    var sectionMap = [
      // [selector, label]
      ['#exit-popup',               'Exit Intent Popup'],
      ['[id="claim-exit-discount"]', 'Exit Intent Popup'], // self
      ['.top-trial-bar',            'Top Announcement Bar'],
      ['nav',                       'Navigation'],
      ['header',                    'Header'],
      ['footer',                    'Footer'],
      // Sections by heading text
    ];

    var ancestor = el.parentElement;
    while (ancestor && ancestor !== document.body) {
      // Check class / id patterns
      for (var i = 0; i < sectionMap.length; i++) {
        try {
          if (ancestor.matches(sectionMap[i][0])) {
            return sectionMap[i][1];
          }
        } catch (e) { /* ignore invalid selectors */ }
      }

      // Check if the ancestor itself is #claim-exit-discount (self-identified)
      if (ancestor.id === 'exit-popup' || ancestor.id === 'exitPopup') {
        return 'Exit Intent Popup';
      }

      ancestor = ancestor.parentElement;
    }

    // 3. Try to find the nearest <section> and read its heading
    ancestor = el.parentElement;
    while (ancestor && ancestor !== document.body) {
      if (ancestor.tagName === 'SECTION' || ancestor.tagName === 'MAIN' ||
          ancestor.tagName === 'FOOTER' || ancestor.tagName === 'NAV' ||
          ancestor.tagName === 'HEADER') {

        // Look for a heading inside this block
        var heading = ancestor.querySelector('h1, h2, h3, h4');
        if (heading) {
          var text = heading.textContent.trim().replace(/\s+/g, ' ');
          // Truncate long headings
          return text.length > 40 ? text.substring(0, 40) + '…' : text;
        }

        // Fall back to element type
        var tag = ancestor.tagName.toLowerCase();
        if (tag === 'footer') return 'Footer';
        if (tag === 'nav') return 'Navigation';
        if (tag === 'header') return 'Header';
        if (tag === 'main') return 'Main Content';
      }
      ancestor = ancestor.parentElement;
    }

    // 4. Position-based fallback using the button's vertical position
    var rect = el.getBoundingClientRect();
    var scrollY = window.scrollY || window.pageYOffset;
    var absTop = rect.top + scrollY;
    var docHeight = document.documentElement.scrollHeight;

    if (absTop < 200) return 'Top Bar';
    if (absTop < docHeight * 0.25) return 'Hero Section';
    if (absTop > docHeight * 0.85) return 'Footer';

    return 'Page Body';
  }

  /**
   * Get clean button text, stripping icon characters.
   */
  function getButtonText(el) {
    // Clone node, remove <i> and <svg> children, read text
    var clone = el.cloneNode(true);
    clone.querySelectorAll('i, svg, span.sr-only').forEach(function (n) { n.remove(); });
    return clone.textContent.trim().replace(/\s+/g, ' ') || el.getAttribute('aria-label') || 'CTA Button';
  }

  /* ──────────────────────────────────────────────
   *  SAFE GTAG WRAPPER
   * ────────────────────────────────────────────── */
  function fireEvent(eventName, params) {
    if (typeof gtag === 'function') {
      gtag('event', eventName, params);
    } else {
      // Queue for when gtag loads (unlikely but safe)
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: eventName, eventParams: params });
    }
    // Optional: console.debug for local testing (remove in production)
    // console.debug('[UFG Analytics]', eventName, params);
  }

  /* ──────────────────────────────────────────────
   *  WHATSAPP CLICK TRACKING
   *  Matches all links pointing to wa.me/919455606100
   * ────────────────────────────────────────────── */
  function initWhatsAppTracking() {
    // Select all anchor tags whose href contains wa.me/919455606100
    var waBtns = document.querySelectorAll('a[href*="wa.me/919455606100"]');

    waBtns.forEach(function (btn) {
      // Skip the developer credit link (Satyam Mishra – wa.me/919005948007)
      // already filtered by the selector above, but be extra safe
      if (btn.href.indexOf('919005948007') !== -1) return;

      btn.addEventListener('click', function (e) {
        var location = detectLocation(this);
        var text     = getButtonText(this);

        // Special label for exit popup button
        if (this.id === 'claim-exit-discount') {
          location = 'Exit Intent Popup';
          text = 'Claim Exit Discount';
        }

        // Special label for announcement bar
        if (this.classList.contains('cta') && this.closest('.top-trial-bar')) {
          location = 'Top Announcement Bar';
        }

        fireEvent('whatsapp_click', {
          page_title:      document.title,
          page_path:       window.location.pathname,
          button_location: location,
          button_text:     text
        });
      });
    });
  }

  /* ──────────────────────────────────────────────
   *  PHONE CALL CLICK TRACKING
   *  Matches all tel: links
   * ────────────────────────────────────────────── */
  function initPhoneTracking() {
    var telBtns = document.querySelectorAll('a[href^="tel:"]');

    telBtns.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        var location = detectLocation(this);
        var text     = getButtonText(this);

        fireEvent('cta_click', {
          cta_type:    'call',
          location:    location,
          button_text: text,
          phone:       this.getAttribute('href').replace('tel:', ''),
          page:        window.location.pathname
        });
      });
    });
  }

  /* ──────────────────────────────────────────────
   *  INIT ON DOM READY
   * ────────────────────────────────────────────── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initWhatsAppTracking();
      initPhoneTracking();
    });
  } else {
    // DOM already parsed (script loaded late / defer)
    initWhatsAppTracking();
    initPhoneTracking();
  }

})();
