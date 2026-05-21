const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');

const headerMatch = indexHtml.match(/([\s\S]*?)<!-- MAIN CONTENT START -->/);
const footerMatch = indexHtml.match(/<!-- FOOTER START -->([\s\S]*)/);

if (!headerMatch || !footerMatch) {
    console.error("Could not find header or footer");
    process.exit(1);
}

const headerTemplate = headerMatch[1].replace(/<title>.*?<\/title>/, '<title>__TITLE__ | Ultra Fitness</title> <link rel="icon" type="image/x-icon" href="./assets/image.ico">');
const footerTemplate = footerMatch[0];

const pages = [
    {
        filename: 'ultrafitness-gym.html',
        title: 'Headquarters',
        content: `
    <main class="flex-grow pt-32 pb-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 class="font-heading text-4xl md:text-5xl font-black text-white mb-6 text-center">ULTRA FITNESS <span class="text-brand-500">HEADQUARTERS</span></h1>
            <div class="glass-card overflow-hidden mb-12">
                <img src="./assets/Ufg_main_building.jpeg" alt="HQ Interior" class="w-full h-96 object-cover">
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 class="text-2xl font-bold mb-4">Our Flagship Location</h2>
                    <p class="text-gray-400 mb-6">Experience the pinnacle of fitness at our headquarters located at Rajdhani Marg, Shuklaganj. Equipped with state-of-the-art machines, premium facilities, and top-tier trainers, this is where champions are forged.</p>
                    <ul class="space-y-4 text-gray-300 mb-8">
                        <li><i class="fas fa-check text-brand-500 mr-2"></i> Over 10,000 sqft of workout space</li>
                        <li><i class="fas fa-check text-brand-500 mr-2"></i> Elite Hammer Strength Equipment</li>
                        <li><i class="fas fa-check text-brand-500 mr-2"></i> Dedicated Powerlifting & Crossfit Zones</li>
                        <li><i class="fas fa-check text-brand-500 mr-2"></i> Luxury Locker Rooms & Sauna</li>
                    </ul>
                    <a href="https://wa.me/919455606100" class="btn-glow inline-block text-white px-8 py-3 rounded-full font-bold uppercase tracking-wide">Join HQ Now</a>
                </div>
                <div class="glass-card p-4">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d57135.01190069179!2d80.3746033!3d26.4899332!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c3f713db7ef85%3A0x7b876868a0d0f79e!2sUltra%20fitness%20gym!5e0!3m2!1sen!2sin!4v1778341112207!5m2!1sen!2sin" width="100%" height="400" style="border:0; border-radius: 1rem;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </main>
        `
    },
    {
        filename: 'branch-gym.html',
        title: 'Branch Location',
        content: `
    <main class="flex-grow pt-32 pb-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 class="font-heading text-4xl md:text-5xl font-black text-white mb-6 text-center">ULTRA FITNESS <span class="text-brand-500">HAIBATPUR</span></h1>
            <div class="glass-card overflow-hidden mb-12">
                <img src="./assets/Ufg_2nd_building.jpeg.jpeg" alt="Branch Interior" class="w-full h-96 object-cover">
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 class="text-2xl font-bold mb-4">Premium Fitness Near You</h2>
                    <p class="text-gray-400 mb-6">Our Subhash Nagar Shuklaganj offers the same relentless commitment to excellence in a modern, dark-themed environment. Perfect for those looking for intense workouts with top-of-the-line cardio and strength equipment.</p>
                    <ul class="space-y-4 text-gray-300 mb-8">
                        <li><i class="fas fa-check text-brand-500 mr-2"></i> Advanced Cardio Deck</li>
                        <li><i class="fas fa-check text-brand-500 mr-2"></i> Comprehensive Free Weights Area</li>
                        <li><i class="fas fa-check text-brand-500 mr-2"></i> Specialized Group Classes</li>
                        <li><i class="fas fa-check text-brand-500 mr-2"></i> Personal Training Available</li>
                    </ul>
                    <a href="https://wa.me/919455606100" class="btn-glow inline-block text-white px-8 py-3 rounded-full font-bold uppercase tracking-wide">Join Branch Now</a>
                </div>
                <div class="glass-card p-4">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57131.17835026631!2d80.32671704863283!3d26.497646100000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c3f65c045e68d%3A0xe6319938a6f7d7a!2sUltra%20Fitness%20Gyms!5e0!3m2!1sen!2sin!4v1778341133958!5m2!1sen!2sin" width="100%" height="400" style="border:0; border-radius: 1rem;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </main>
        `
    },
    {
        filename: 'franchise.html',
        title: 'Franchise Opportunities',
        content: `
    <main class="flex-grow pt-32 pb-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h1 class="font-heading text-4xl md:text-5xl font-black text-white mb-4">OWN AN <span class="text-brand-500">ULTRA FITNESS</span></h1>
                <p class="text-gray-400 max-w-2xl mx-auto text-lg">Partner with a proven business model in the booming fitness industry. Bring premium, aesthetic-driven gyms to your city.</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <div class="glass-card overflow-hidden">
                    <img src="./assets/own_franchise.jpg" alt="Franchise Meeting" class="w-full h-full object-cover min-h-[400px]">
                </div>
                <div class="glass-card p-8">
                    <h3 class="text-2xl font-bold mb-6 border-b border-gray-700 pb-4">Franchise Inquiry Form</h3>
                    <form action="#" method="POST" class="space-y-6">
                        <div>
                            <label class="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                            <input type="text" class="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="John Doe">
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-400 mb-2">Phone</label>
                                <input type="tel" class="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="+91...">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input type="email" class="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="john@example.com">
                            </div>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-400 mb-2">City of Interest</label>
                            <input type="text" class="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="Your City">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-400 mb-2">Investment Capital Available</label>
                            <select class="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors">
                                <option>₹50L - ₹1Cr</option>
                                <option>₹1Cr - ₹2Cr</option>
                                <option>₹2Cr+</option>
                            </select>
                        </div>
                        <button type="button" class="btn-glow w-full text-white px-6 py-4 rounded-lg font-bold uppercase tracking-wide">Submit Inquiry</button>
                    </form>
                </div>
            </div>
        </div>
    </main>
        `
    },
    {
        filename: 'diet-workout.html',
        title: 'Diet & Workout Guide',
        content: `
    <main class="flex-grow pt-32 pb-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 class="font-heading text-4xl md:text-5xl font-black text-white mb-6 text-center">NUTRITION & <span class="text-brand-500">TRAINING</span></h1>
            <p class="text-center text-gray-400 max-w-2xl mx-auto mb-12">Achieve your dream physique with our scientifically backed diet plans and intense workout routines designed for maximum muscle hypertrophy and fat loss.</p>
            
            <div class="glass-card overflow-hidden mb-16">
                <img src="./assets/nutrition_workout.jpg" alt="Diet and Workout" class="w-full h-[500px] object-cover">
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div class="glass-card p-8">
                    <h3 class="text-3xl font-black text-white mb-6 border-b border-brand-500 inline-block pb-2">DIET PLANS</h3>
                    <p class="text-gray-400 mb-6">Nutrition accounts for 70% of your results. Whether your goal is bulking, cutting, or maintenance, we provide precise macronutrient guidance.</p>
                    <ul class="space-y-6">
                        <li class="bg-gray-900 p-4 rounded-xl border border-gray-800">
                            <h4 class="font-bold text-xl text-white mb-2">Lean Bulking</h4>
                            <p class="text-sm text-gray-400">High protein, moderate carbs, healthy fats. Focus on clean calories to build muscle with minimal fat gain.</p>
                        </li>
                        <li class="bg-gray-900 p-4 rounded-xl border border-gray-800">
                            <h4 class="font-bold text-xl text-white mb-2">Shredding (Fat Loss)</h4>
                            <p class="text-sm text-gray-400">Caloric deficit with high protein to preserve muscle mass. Strategic carb cycling included.</p>
                        </li>
                    </ul>
                </div>
                
                <div class="glass-card p-8">
                    <h3 class="text-3xl font-black text-white mb-6 border-b border-brand-500 inline-block pb-2">WORKOUT ROUTINES</h3>
                    <p class="text-gray-400 mb-6">Train with intensity and purpose. Our progressive overload programs are designed to push you past your limits.</p>
                    <ul class="space-y-6">
                        <li class="bg-gray-900 p-4 rounded-xl border border-gray-800">
                            <h4 class="font-bold text-xl text-white mb-2">Push / Pull / Legs (PPL)</h4>
                            <p class="text-sm text-gray-400">6 days a week routine for optimal muscle frequency and recovery. Best for intermediate to advanced lifters.</p>
                        </li>
                        <li class="bg-gray-900 p-4 rounded-xl border border-gray-800">
                            <h4 class="font-bold text-xl text-white mb-2">Upper / Lower Split</h4>
                            <p class="text-sm text-gray-400">4 days a week focusing on heavy compound movements. Great for building foundational strength.</p>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div class="mt-12 text-center">
                <a href="https://wa.me/919455606100" class="btn-glow inline-block text-white px-8 py-4 rounded-full font-bold uppercase tracking-wide text-lg">Get Customized Plan</a>
            </div>
        </div>
    </main>
        `
    },
    {
        filename: 'vidamin-store.html',
        title: 'Vidamin Store',
        content: `
    <main class="flex-grow pt-32 pb-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 class="font-heading text-4xl md:text-5xl font-black text-white mb-4 text-center"><span class="text-brand-500">VIDAMIN</span> STORE</h1>
            <p class="text-center text-gray-400 max-w-2xl mx-auto mb-12">Fuel your performance with premium, authentic supplements. Your one-stop shop for peak physical results.</p>
            
            <div class="glass-card overflow-hidden mb-16 relative">
                <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                <img src="./assets/vidamin_store.jpg" alt="Vidamin Store" class="w-full h-[600px] object-cover">
                <div class="absolute bottom-10 left-10 z-20">
                    <h2 class="text-4xl font-black text-white drop-shadow-lg">AUTHENTIC SUPPLEMENTS</h2>
                    <p class="text-xl text-gray-200 mt-2">100% Genuine Brands • Best Prices</p>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="glass-card p-6 text-center hover:-translate-y-2 transition-transform">
                    <div class="w-20 h-20 mx-auto bg-gray-900 rounded-full flex items-center justify-center mb-6 border border-gray-700">
                        <i class="fas fa-prescription-bottle-alt text-3xl text-brand-500"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Whey Protein</h3>
                    <p class="text-gray-400 text-sm mb-6">Fast-absorbing isolate and concentrate blends for maximum muscle recovery.</p>
                    <a href="https://wa.me/919455606100" class="text-brand-500 font-bold hover:text-white transition-colors">Inquire Now <i class="fas fa-arrow-right ml-1"></i></a>
                </div>
                
                <div class="glass-card p-6 text-center hover:-translate-y-2 transition-transform">
                    <div class="w-20 h-20 mx-auto bg-gray-900 rounded-full flex items-center justify-center mb-6 border border-gray-700">
                        <i class="fas fa-bolt text-3xl text-brand-500"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Pre-Workouts</h3>
                    <p class="text-gray-400 text-sm mb-6">Explosive energy, sharp focus, and skin-tearing pumps for your hardest sessions.</p>
                    <a href="https://wa.me/919455606100" class="text-brand-500 font-bold hover:text-white transition-colors">Inquire Now <i class="fas fa-arrow-right ml-1"></i></a>
                </div>
                
                <div class="glass-card p-6 text-center hover:-translate-y-2 transition-transform">
                    <div class="w-20 h-20 mx-auto bg-gray-900 rounded-full flex items-center justify-center mb-6 border border-gray-700">
                        <i class="fas fa-pills text-3xl text-brand-500"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-3">Vitamins & BCAAs</h3>
                    <p class="text-gray-400 text-sm mb-6">Essential micronutrients and amino acids to support overall health and endurance.</p>
                    <a href="https://wa.me/919455606100" class="text-brand-500 font-bold hover:text-white transition-colors">Inquire Now <i class="fas fa-arrow-right ml-1"></i></a>
                </div>
            </div>
        </div>
    </main>
        `
    },
    {
        filename: 'nut-cut-peanut-butter.html',
        title: 'Nut Cut Peanut Butter',
        content: `
    <main class="flex-grow pt-32 pb-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div class="order-2 lg:order-1">
                    <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
                        <span class="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                        <span class="text-sm font-medium tracking-wider text-gray-300 uppercase">Premium Nutrition</span>
                    </div>
                    <h1 class="font-heading text-5xl md:text-6xl font-black text-white mb-6">NUT CUT <br><span class="text-brand-500">PEANUT BUTTER</span></h1>
                    <p class="text-xl text-gray-300 mb-8 font-light leading-relaxed">
                        The ultimate high-protein, all-natural peanut butter crafted specifically for athletes and fitness enthusiasts. No added sugar, no palm oil, just pure gains.
                    </p>
                    
                    <ul class="space-y-4 mb-10 text-gray-400">
                        <li class="flex items-center"><i class="fas fa-check-circle text-brand-500 mr-3 text-xl"></i> 30g Protein per 100g</li>
                        <li class="flex items-center"><i class="fas fa-check-circle text-brand-500 mr-3 text-xl"></i> 100% Roasted Peanuts</li>
                        <li class="flex items-center"><i class="fas fa-check-circle text-brand-500 mr-3 text-xl"></i> Zero Trans Fat</li>
                        <li class="flex items-center"><i class="fas fa-check-circle text-brand-500 mr-3 text-xl"></i> Rich in Healthy Fats & Fiber</li>
                    </ul>
                    
                    <div class="flex gap-4">
                        <a href="https://wa.me/919455606100" class="btn-glow text-white px-8 py-4 rounded-full font-bold uppercase tracking-wide text-lg shadow-[0_0_20px_rgba(239,68,68,0.4)]">Order Now</a>
                    </div>
                </div>
                
                <div class="order-1 lg:order-2 glass-card p-4 rounded-3xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                    <img src="./assets/nut_cut_store.jpg" alt="Nut Cut Peanut Butter" class="w-full h-auto rounded-2xl shadow-2xl">
                </div>
            </div>
        </div>
    </main>
        `
    },
    {
        filename: 'namit-gupta.html',
        title: 'Namit Gupta - Founder',
        content: `
    <main class="flex-grow pt-32 pb-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                <div class="lg:col-span-5 relative group">
                    <div class="absolute -inset-1 bg-gradient-to-r from-brand-500 to-red-900 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    <img src="./assets/model1.jpg" alt="Namit Gupta" class="relative w-full rounded-3xl shadow-2xl object-cover h-[700px]">
                </div>
                
                <div class="lg:col-span-7">
                    <h4 class="text-brand-500 font-bold tracking-widest uppercase mb-2">Founder & Master Coach</h4>
                    <h1 class="font-heading text-5xl md:text-7xl font-black text-white mb-6">NAMIT <span class="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">GUPTA</span></h1>
                    
                    <div class="w-20 h-1 bg-brand-500 mb-8"></div>
                    
                    <p class="text-xl text-gray-300 mb-6 font-light leading-relaxed">
                        "Fitness is not just about lifting weights; it's an aesthetic pursuit, a discipline, and a lifestyle that demands absolute dedication."
                    </p>
                    
                    <p class="text-gray-400 mb-8 leading-relaxed">
                        As the visionary behind Ultra Fitness, Namit Gupta has revolutionized the local fitness landscape by introducing premium, dark-aesthetic training facilities combined with world-class equipment. With years of experience in bodybuilding and nutrition, Namit provides expert guidance that transforms not just physiques, but mindsets.
                    </p>
                    
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">
                        <div class="glass-card p-4 text-center">
                            <h3 class="text-3xl font-black text-white mb-1">10+</h3>
                            <p class="text-sm text-brand-500 font-bold uppercase">Years Exp</p>
                        </div>
                        <div class="glass-card p-4 text-center">
                            <h3 class="text-3xl font-black text-white mb-1">2</h3>
                            <p class="text-sm text-brand-500 font-bold uppercase">Locations</p>
                        </div>
                        <div class="glass-card p-4 text-center">
                            <h3 class="text-3xl font-black text-white mb-1">500+</h3>
                            <p class="text-sm text-brand-500 font-bold uppercase">Transformations</p>
                        </div>
                    </div>
                    
                    <div class="flex gap-4">
                        <a href="https://wa.me/919455606100" class="btn-glow text-white px-8 py-4 rounded-full font-bold uppercase tracking-wide">Train with Namit</a>
                        <a href="https:https://www.instagram.com/ultra_fitness_gyms/" target="_blank" class="glass-card w-14 h-14 flex items-center justify-center rounded-full hover:bg-brand-500 transition-colors text-xl"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </main>
        `
    }
];

pages.forEach(page => {
    const fullHtml = headerTemplate.replace('__TITLE__', page.title) + page.content + footerTemplate;
    fs.writeFileSync(page.filename, fullHtml);
    console.log(`Created ${page.filename}`);
});
