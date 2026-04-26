/*  ---------------------------------------------------
  Template Name: Gym
  Description:  Gym Fitness HTML Template
  Author: Colorlib
  Author URI: https://colorlib.com
  Version: 1.0
  Created: Colorlib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Canvas Menu
    $(".canvas-open").on('click', function () {
        $(".offcanvas-menu-wrapper").addClass("show-offcanvas-menu-wrapper");
        $(".offcanvas-menu-overlay").addClass("active");
    });

    $(".canvas-close, .offcanvas-menu-overlay").on('click', function () {
        $(".offcanvas-menu-wrapper").removeClass("show-offcanvas-menu-wrapper");
        $(".offcanvas-menu-overlay").removeClass("active");
    });

    // Search model
    $('.search-switch').on('click', function () {
        $('.search-model').fadeIn(400);
    });

    $('.search-close-switch').on('click', function () {
        $('.search-model').fadeOut(400, function () {
            $('#search-input').val('');
        });
    });

    //Masonary
    $('.gallery').masonry({
        itemSelector: '.gs-item',
        columnWidth: '.grid-sizer',
        gutter: 10
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
        Carousel Slider
    --------------------*/
    var hero_s = $(".hs-slider");
    hero_s.owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        dots: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: false
    });

    /*------------------
        Team Slider
    --------------------*/
    $(".ts-slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        dotsEach: 2,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            320: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            }
        }
    });

    /*------------------
        Testimonial Slider
    --------------------*/
    $(".ts_slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true
    });

    /*------------------
        Image Popup
    --------------------*/
    $('.image-popup').magnificPopup({
        type: 'image'
    });

    /*------------------
        Video Popup
    --------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    /*------------------
        Barfiller
    --------------------*/
    $('#bar1').barfiller({
        barColor: '#ffffff',
        duration: 2000
    });
    $('#bar2').barfiller({
        barColor: '#ffffff',
        duration: 2000
    });
    $('#bar3').barfiller({
        barColor: '#ffffff',
        duration: 2000
    });

    $('.table-controls ul li').on('click', function () {
        var tsfilter = $(this).data('tsfilter');
        $('.table-controls ul li').removeClass('active');
        $(this).addClass('active');

        if (tsfilter == 'all') {
            $('.class-timetable').removeClass('filtering');
            $('.ts-meta').removeClass('show');
        } else {
            $('.class-timetable').addClass('filtering');
        }
        $('.ts-meta').each(function () {
            $(this).removeClass('show');
            if ($(this).data('tsmeta') == tsfilter) {
                $(this).addClass('show');
            }
        });
    });

})(jQuery);
// --- NEW MODERN REDESIGN INJECTIONS ---
(function() {
    // 1. Inject Fonts
    $('head').append('<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&family=Inter:wght@300;400;600&display=swap" rel="stylesheet">');
    
    // 2. Inject AOS (Animate on Scroll)
    $('head').append('<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">');
    $.getScript("https://unpkg.com/aos@2.3.1/dist/aos.js", function() {
        setTimeout(function() {
            AOS.init({
                duration: 1000,
                once: true,
                offset: 50
            });
        }, 500);
    });

    // 3. Add AOS attributes to existing elements
    $(document).ready(function() {
        $('.section-title').attr('data-aos', 'fade-up');
        $('.cs-item').attr('data-aos', 'zoom-in').attr('data-aos-delay', '100');
        $('.class-item').attr('data-aos', 'fade-up').attr('data-aos-delay', '200');
        $('.ps-item').attr('data-aos', 'flip-left').attr('data-aos-delay', '300');
        $('.ts-item').attr('data-aos', 'fade-up');
        $('.hs-item h1').attr('data-aos', 'zoom-out').attr('data-aos-delay', '200');
    });

    // 4. Inject Vanta.js or Three.js for 3D Background
    $('body').prepend('<div id="vanta-bg" style="position:fixed; z-index:-1; width:100%; height:100%; top:0; left:0;"></div>');
    $.getScript("https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js", function() {
        $.getScript("https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js", function() {
            VANTA.WAVES({
                el: "#vanta-bg",
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x0a0a0a,
                shininess: 35.00,
                waveHeight: 20.00,
                waveSpeed: 0.50,
                zoom: 0.9
            });
        });
    });

    // 5. Add custom CSS for the new modern look
    var customCSS = `
        body, p, a, span { font-family: 'Inter', sans-serif !important; }
        h1, h2, h3, h4, h5, h6 { font-family: 'Outfit', sans-serif !important; text-transform: uppercase; letter-spacing: 1px; }
        
        body { background: transparent !important; }
        .classes-section, .choseus-section, .pricing-section, .team-section, .gallery-section, .footer-section, .banner-section {
            background: rgba(10, 10, 10, 0.4) !important;
            backdrop-filter: blur(8px) !important;
            border-top: 1px solid rgba(255,255,255,0.03);
        }

        .primary-btn {
            background: linear-gradient(45deg, #00f2fe, #4facfe) !important;
            border: none !important;
            border-radius: 30px !important;
            box-shadow: 0 4px 15px rgba(79, 172, 254, 0.4);
            transition: all 0.3s ease !important;
            color: #fff !important;
            text-transform: uppercase;
            font-weight: 800;
            letter-spacing: 2px;
        }
        .primary-btn:hover {
            transform: translateY(-3px) scale(1.05);
            box-shadow: 0 8px 25px rgba(0, 242, 254, 0.6);
            color: #fff !important;
        }

        /* Glassmorphism Cards */
        .cs-item, .class-item .ci-text, .ps-item, .ts-item, .fs-about, .fs-widget {
            background: rgba(20, 20, 20, 0.6) !important;
            backdrop-filter: blur(15px);
            border: 1px solid rgba(255, 255, 255, 0.05) !important;
            border-radius: 20px;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
            overflow: hidden;
            padding: 20px;
        }
        
        .ps-item { transform: none !important; } /* remove old skew */
        .ci-text:after { display: none !important; } /* remove old angled shape */
        
        .cs-item:hover, .class-item:hover .ci-text, .ps-item:hover {
            transform: translateY(-10px) rotateX(5deg) rotateY(5deg) !important;
            box-shadow: 0 15px 35px rgba(0,0,0,0.5), 0 0 20px rgba(0, 242, 254, 0.2);
            border-color: rgba(0, 242, 254, 0.5) !important;
        }

        .section-title span {
            background: -webkit-linear-gradient(#00f2fe, #4facfe);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: 800;
            letter-spacing: 2px;
        }

        .nav-menu ul li a:after {
            background: linear-gradient(45deg, #00f2fe, #4facfe) !important;
        }
        .nav-menu ul li.active>a, .nav-menu ul li:hover>a {
            color: #00f2fe !important;
            text-shadow: 0 0 10px rgba(0, 242, 254, 0.5);
        }

        .hs-item { background-attachment: fixed !important; }
        .hero-section { position: relative; }
        .hero-section::after {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.3));
            z-index: 0;
            pointer-events: none;
        }
        .hi-text { z-index: 1; position: relative; }
        .hi-text h1 strong {
            color: #00f2fe !important;
            text-shadow: 0 0 20px rgba(0, 242, 254, 0.5);
        }
        
        .header-section {
            background: rgba(10, 10, 10, 0.8) !important;
            backdrop-filter: blur(15px);
            border-bottom: 1px solid rgba(255,255,255,0.05);
            padding-top: 15px !important;
            padding-bottom: 15px !important;
            position: fixed;
            width: 100%;
            z-index: 999;
            transition: all 0.3s ease;
        }

        /* 3D floating effect for images */
        img {
            transition: transform 0.5s ease;
        }
        .class-item:hover img {
            transform: scale(1.1) rotateZ(1deg);
        }
        
        /* General cleanup */
        .choseus-section { padding-top: 80px; }
        .logo img { 
            height: 60px; 
            width: auto; 
            border-radius: 10px; 
            box-shadow: 0 0 15px rgba(0, 242, 254, 0.3);
            border: 1px solid rgba(0, 242, 254, 0.2);
        }
        
        /* Particle canvas */
        .vanta-canvas { filter: saturate(2) hue-rotate(10deg); }
    `;
    $('head').append('<style>' + customCSS + '</style>');

    // 6. Make it mine - Personalization
    $(document).ready(function() {
        document.title = "Satyam's Premium Gym & Fitness";
        $('.fa-logo a, .logo a').html('<h2 style="color: #fff; font-family: \'Outfit\', sans-serif; font-weight: 800; letter-spacing: 2px; text-transform: uppercase;">Satyam<span style="color: #00f2fe;">Fit</span></h2>');
    });

})();
