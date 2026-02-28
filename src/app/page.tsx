"use client";

import React from 'react';

export default function Home() {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name') as string;
        const phone = formData.get('phone') as string;
        const message = formData.get('message') as string;

        if (name?.trim() && phone?.trim() && message?.trim()) {
            alert('Thank you! We will contact you soon.');
            (e.target as HTMLFormElement).reset();
        } else {
            alert('Please fill in all fields.');
        }
    };

    return (
        <>

            <header className="fixed top-0 w-full bg-white shadow-lg z-50">
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex-shrink-0">
                            <h2 className="text-xl font-bold text-gold">Juria New Star Restaurant</h2>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-8">
                                <a href="#home"
                                    className="text-gray-700 hover:text-gold px-3 py-2 text-sm font-medium transition-colors">Home</a>
                                <a href="#about"
                                    className="text-gray-700 hover:text-gold px-3 py-2 text-sm font-medium transition-colors">About</a>
                                <a href="#menu"
                                    className="text-gray-700 hover:text-gold px-3 py-2 text-sm font-medium transition-colors">Menu</a>
                                <a href="#location"
                                    className="text-gray-700 hover:text-gold px-3 py-2 text-sm font-medium transition-colors">Location</a>
                                <a href="#contact"
                                    className="text-gray-700 hover:text-gold px-3 py-2 text-sm font-medium transition-colors">Contact</a>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <a href="tel:6000133844"
                                className="bg-gold hover:bg-gold-dark text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">Call
                                Now</a>
                        </div>
                        <div className="md:hidden">
                            <button className="text-gray-700 hover:text-gold focus:outline-none focus:text-gold">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                            </button>
                        </div>
                    </div>
                </nav>
            </header>

            <main>
                <section id="hero" className="bg-gradient-to-br from-amber-50 to-orange-100 py-20 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <img data-ai="generate" data-slot="hero-main"
                            data-prompt="Elegant restaurant interior with warm lighting, wooden tables, and traditional Indian decor elements, welcoming atmosphere"
                            data-ar="16:9"
                            src="https://cdn.ailandingpage.ai/ai-landingpage/user-generate/edea7215-144c-463a-9b21-c1aa20cee4a3/edea7215-144c-463a-9b21-c1aa20cee4a3/hero/hero-main-f24d62762d56492d8e4439b980dc303c.png"
                            alt="Juria New Star Restaurant interior" width="1200" height="675"
                            className="w-full max-w-2xl mx-auto rounded-2xl object-cover shadow-lg mb-8" loading="eager"
                            decoding="async" fetchPriority="high" />
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">Welcome to Juria New Star Restaurant</h1>
                        <p className="text-xl md:text-2xl text-gray-600 mb-8">Taste that feels like home</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#menu"
                                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">View
                                Menu</a>
                            <a href="tel:6000133844"
                                className="bg-transparent border-2 border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">Call
                                Now</a>
                        </div>
                    </div>
                </section>
                <section id="about" className="py-16 px-4 bg-white">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">About Us</h2>
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <img data-ai="generate" data-slot="about-restaurant"
                                    data-prompt="Professional chef in clean white uniform preparing traditional Indian food in a modern hygienic kitchen"
                                    data-ar="4:3"
                                    src="https://cdn.ailandingpage.ai/ai-landingpage/user-generate/edea7215-144c-463a-9b21-c1aa20cee4a3/edea7215-144c-463a-9b21-c1aa20cee4a3/about/about-restaurant-b778ef3f8b4b45f99ec13d46acb160c7.png"
                                    alt="Our professional kitchen and chef" width="800" height="600"
                                    className="w-full rounded-2xl object-cover shadow-sm" loading="lazy" decoding="async"
                                    fetchPriority="auto" />
                            </div>
                            <div className="space-y-4">
                                <p className="text-lg text-gray-600 leading-relaxed">At Juria New Star Restaurant, we pride
                                    ourselves on serving authentic, delicious food prepared with the freshest ingredients. Our
                                    commitment to quality, hygiene, and exceptional service has made us a beloved dining
                                    destination in Juria, Nagaon, Assam.</p>
                                <p className="text-lg text-gray-600 leading-relaxed">Every dish is crafted with care by our
                                    experienced chefs, ensuring that each meal feels like a warm embrace from home. We believe
                                    that great food brings people together, and we're honored to be part of your special
                                    moments.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="menu" className="py-16 px-4 bg-gray-50">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Our Menu</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div
                                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <img data-ai="generate" data-slot="menu-biryani"
                                    data-prompt="Delicious chicken biryani with aromatic basmati rice, tender chicken pieces, garnished with fried onions and herbs"
                                    data-ar="4:3"
                                    src="https://cdn.ailandingpage.ai/ai-landingpage/user-generate/edea7215-144c-463a-9b21-c1aa20cee4a3/edea7215-144c-463a-9b21-c1aa20cee4a3/menu/menu-biryani-01d4b4d33e9149c492624fa5f83b68e0.png"
                                    alt="Chicken Biryani" width="400" height="300" className="w-full h-48 object-cover"
                                    loading="lazy" decoding="async" fetchPriority="auto" />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Chicken Biryani</h3>
                                    <p className="text-gray-600 mb-4">Aromatic basmati rice layered with tender chicken and
                                        traditional spices</p>
                                    <button onClick={() => { alert('Call 6000133844 to place your order') }}
                                        className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-full font-medium transition-colors duration-300">Order
                                        Now</button>
                                </div>
                            </div>
                            <div
                                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <img data-ai="generate" data-slot="menu-thali"
                                    data-prompt="Traditional Indian vegetarian thali with dal, sabzi, roti, rice, and various accompaniments arranged on a steel plate"
                                    data-ar="4:3"
                                    src="https://cdn.ailandingpage.ai/ai-landingpage/user-generate/edea7215-144c-463a-9b21-c1aa20cee4a3/edea7215-144c-463a-9b21-c1aa20cee4a3/menu/menu-thali-180dd61db9ec460686bb77cd3aaf0b6d.png"
                                    alt="Veg Thali" width="400" height="300" className="w-full h-48 object-cover" loading="lazy"
                                    decoding="async" fetchPriority="auto" />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Veg Thali</h3>
                                    <p className="text-gray-600 mb-4">Complete vegetarian meal with dal, sabzi, roti, rice, and
                                        accompaniments</p>
                                    <button onClick={() => { alert('Call 6000133844 to place your order') }}
                                        className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-full font-medium transition-colors duration-300">Order
                                        Now</button>
                                </div>
                            </div>
                            <div
                                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <img data-ai="generate" data-slot="menu-butter-chicken"
                                    data-prompt="Creamy butter chicken curry with tender chicken pieces in rich tomato-based sauce, garnished with cream and herbs"
                                    data-ar="4:3"
                                    src="https://cdn.ailandingpage.ai/ai-landingpage/user-generate/edea7215-144c-463a-9b21-c1aa20cee4a3/edea7215-144c-463a-9b21-c1aa20cee4a3/menu/menu-butter-chicken-aeccf107659848dab2bfe6f8f9045812.png"
                                    alt="Butter Chicken" width="400" height="300" className="w-full h-48 object-cover"
                                    loading="lazy" decoding="async" fetchPriority="auto" />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Butter Chicken</h3>
                                    <p className="text-gray-600 mb-4">Creamy tomato-based curry with tender chicken pieces and rich
                                        spices</p>
                                    <button onClick={() => { alert('Call 6000133844 to place your order') }}
                                        className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-full font-medium transition-colors duration-300">Order
                                        Now</button>
                                </div>
                            </div>
                            <div
                                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <img data-ai="generate" data-slot="menu-paneer"
                                    data-prompt="Fresh paneer curry with cottage cheese cubes in aromatic spiced gravy, garnished with fresh coriander"
                                    data-ar="4:3"
                                    src="https://cdn.ailandingpage.ai/ai-landingpage/user-generate/edea7215-144c-463a-9b21-c1aa20cee4a3/edea7215-144c-463a-9b21-c1aa20cee4a3/menu/menu-paneer-1a26b07936cd4151919f45a52e615eeb.png"
                                    alt="Paneer Curry" width="400" height="300" className="w-full h-48 object-cover" loading="lazy"
                                    decoding="async" fetchPriority="auto" />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Paneer Curry</h3>
                                    <p className="text-gray-600 mb-4">Fresh cottage cheese cooked in aromatic spices and rich gravy
                                    </p>
                                    <button onClick={() => { alert('Call 6000133844 to place your order') }}
                                        className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-full font-medium transition-colors duration-300">Order
                                        Now</button>
                                </div>
                            </div>
                            <div
                                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <img data-ai="generate" data-slot="menu-roti"
                                    data-prompt="Fresh tandoori roti bread with charred spots from tandoor oven, served on a traditional plate"
                                    data-ar="4:3"
                                    src="https://cdn.ailandingpage.ai/ai-landingpage/user-generate/edea7215-144c-463a-9b21-c1aa20cee4a3/edea7215-144c-463a-9b21-c1aa20cee4a3/menu/menu-roti-dfc7b6b18f0844cb8d2079b4b65b59d3.png"
                                    alt="Tandoori Roti" width="400" height="300" className="w-full h-48 object-cover" loading="lazy"
                                    decoding="async" fetchPriority="auto" />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Tandoori Roti</h3>
                                    <p className="text-gray-600 mb-4">Fresh wheat bread baked in traditional tandoor for authentic
                                        taste</p>
                                    <button onClick={() => { alert('Call 6000133844 to place your order') }}
                                        className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-full font-medium transition-colors duration-300">Order
                                        Now</button>
                                </div>
                            </div>
                            <div
                                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <img data-ai="generate" data-slot="menu-fried-rice"
                                    data-prompt="Colorful vegetable fried rice with mixed vegetables, perfectly seasoned and garnished with spring onions"
                                    data-ar="4:3"
                                    src="https://cdn.ailandingpage.ai/ai-landingpage/user-generate/edea7215-144c-463a-9b21-c1aa20cee4a3/edea7215-144c-463a-9b21-c1aa20cee4a3/menu/menu-fried-rice-342bd5d54e654da8922c2ef8f20a982b.png"
                                    alt="Fried Rice" width="400" height="300" className="w-full h-48 object-cover" loading="lazy"
                                    decoding="async" fetchPriority="auto" />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Fried Rice</h3>
                                    <p className="text-gray-600 mb-4">Perfectly seasoned rice stir-fried with fresh vegetables and
                                        aromatic spices</p>
                                    <button onClick={() => { alert('Call 6000133844 to place your order') }}
                                        className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-full font-medium transition-colors duration-300">Order
                                        Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="features" className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Experience the difference that quality, care, and
                                dedication make in every aspect of our service</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center group">
                                <div className="mb-6">
                                    <img data-ai="generate" data-slot="features-fresh"
                                        data-prompt="Fresh organic vegetables and ingredients arranged beautifully, vibrant colors, clean and appetizing presentation"
                                        data-ar="1:1"
                                        src="https://cdn.ailandingpage.ai/ai-landingpage/user-generate/edea7215-144c-463a-9b21-c1aa20cee4a3/edea7215-144c-463a-9b21-c1aa20cee4a3/features/features-fresh-c538c446f83c4980a2b97cf4642be78b.png"
                                        alt="Fresh Ingredients" width="120" height="120"
                                        className="w-20 h-20 mx-auto rounded-full object-cover shadow-lg group-hover:scale-110 transition-transform duration-300"
                                        loading="lazy" decoding="async" fetchPriority="auto" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Fresh Ingredients</h3>
                                <p className="text-gray-600 leading-relaxed">We source only the freshest, locally grown ingredients
                                    to ensure every dish bursts with natural flavors and nutritional value</p>
                            </div>
                            <div className="text-center group">
                                <div className="mb-6">
                                    <img data-ai="generate" data-slot="features-hygiene"
                                        data-prompt="Clean modern restaurant kitchen with stainless steel surfaces, professional chefs in white uniforms, hygienic food preparation"
                                        data-ar="1:1"
                                        src="https://cdn.ailandingpage.ai/ai-landingpage/user-generate/edea7215-144c-463a-9b21-c1aa20cee4a3/edea7215-144c-463a-9b21-c1aa20cee4a3/features/features-hygiene-9daf164b0b9440a2a0b1609d99ef1146.png"
                                        alt="Hygienic Kitchen" width="120" height="120"
                                        className="w-20 h-20 mx-auto rounded-full object-cover shadow-lg group-hover:scale-110 transition-transform duration-300"
                                        loading="lazy" decoding="async" fetchPriority="auto" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Hygienic Kitchen</h3>
                                <p className="text-gray-600 leading-relaxed">Our kitchen maintains the highest standards of
                                    cleanliness and food safety, ensuring your health and peace of mind with every meal</p>
                            </div>
                            <div className="text-center group">
                                <div className="mb-6">
                                    <img data-ai="generate" data-slot="features-price"
                                        data-prompt="Affordable restaurant pricing concept, value for money, coins and rupee symbols, budget-friendly dining illustration"
                                        data-ar="1:1"
                                        src="https://cdn.ailandingpage.ai/ai-landingpage/user-generate/edea7215-144c-463a-9b21-c1aa20cee4a3/edea7215-144c-463a-9b21-c1aa20cee4a3/features/features-price-d68233f06308480fa6a3385625ec81f4.png"
                                        alt="Affordable Price" width="120" height="120"
                                        className="w-20 h-20 mx-auto rounded-full object-cover shadow-lg group-hover:scale-110 transition-transform duration-300"
                                        loading="lazy" decoding="async" fetchPriority="auto" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Affordable Price</h3>
                                <p className="text-gray-600 leading-relaxed">Enjoy exceptional quality food at prices that won't
                                    strain your budget - great taste shouldn't cost a fortune</p>
                            </div>
                            <div className="text-center group">
                                <div className="mb-6">
                                    <img data-ai="generate" data-slot="features-service"
                                        data-prompt="Friendly restaurant staff serving customers with warm smiles, excellent customer service, welcoming atmosphere"
                                        data-ar="1:1"
                                        src="https://cdn.ailandingpage.ai/ai-landingpage/user-generate/edea7215-144c-463a-9b21-c1aa20cee4a3/edea7215-144c-463a-9b21-c1aa20cee4a3/features/features-service-a7f2735d21604948b85bbbcd18070a16.png"
                                        alt="Friendly Service" width="120" height="120"
                                        className="w-20 h-20 mx-auto rounded-full object-cover shadow-lg group-hover:scale-110 transition-transform duration-300"
                                        loading="lazy" decoding="async" fetchPriority="auto" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">Friendly Service</h3>
                                <p className="text-gray-600 leading-relaxed">Our warm and welcoming staff treats every guest like
                                    family, ensuring your dining experience is memorable and enjoyable</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="location" className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Location</h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Visit us at our convenient location in the heart
                                of Juria, Nagaon, Assam</p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="bg-white p-8 rounded-2xl shadow-lg">
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">Visit Us Today</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start space-x-4">
                                            <div className="flex-shrink-0">
                                                <svg className="w-6 h-6 text-amber-600 mt-1" fill="none" stroke="currentColor"
                                                    viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                                                    </path>
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900">Address</h4>
                                                <p className="text-gray-600">Juria, Nagaon, Assam</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-4">
                                            <div className="flex-shrink-0">
                                                <svg className="w-6 h-6 text-amber-600 mt-1" fill="none" stroke="currentColor"
                                                    viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
                                                    </path>
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900">Phone</h4>
                                                <a href="tel:6000133844"
                                                    className="text-amber-600 hover:text-amber-700 font-medium transition-colors duration-200">6000133844</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <p className="text-gray-600 leading-relaxed">We're conveniently located in the heart of
                                            Juria, making it easy for you to enjoy our delicious food. Come visit us for an
                                            unforgettable dining experience!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="bg-white p-4 rounded-2xl shadow-lg">
                                    <img data-ai="generate" data-slot="location-map"
                                        data-prompt="Google Maps view of Juria, Nagaon, Assam location with restaurant marker, street view, clear geographical layout"
                                        data-ar="16:9"
                                        src="https://cdn.ailandingpage.ai/ai-landingpage/user-generate/edea7215-144c-463a-9b21-c1aa20cee4a3/edea7215-144c-463a-9b21-c1aa20cee4a3/location/location-map-b455264b66464af38cd95eca77c90a5f.png"
                                        alt="Juria New Star Restaurant Location Map" width="800" height="450"
                                        className="w-full rounded-xl object-cover" loading="lazy" decoding="async"
                                        fetchPriority="auto" />
                                    <div className="mt-4 text-center">
                                        <a href="https://maps.google.com/?q=Juria,+Nagaon,+Assam" target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-6 py-3 bg-amber-600 text-white font-medium rounded-lg hover:bg-amber-700 transition-colors duration-200">
                                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14">
                                                </path>
                                            </svg>
                                            Open in Google Maps
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="contact" className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Have questions or want to make a reservation?
                                We'd love to hear from you!</p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div className="space-y-8">
                                <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl">
                                    <img data-ai="generate" data-slot="contact-info"
                                        data-prompt="Restaurant contact and communication concept, phone, email, customer service, warm and welcoming atmosphere"
                                        data-ar="16:9"
                                        src="https://cdn.ailandingpage.ai/ai-landingpage/user-generate/edea7215-144c-463a-9b21-c1aa20cee4a3/edea7215-144c-463a-9b21-c1aa20cee4a3/contact/contact-info-ddea9f0c0ea64007b3471a26c939c5a7.png"
                                        alt="Contact Juria New Star Restaurant" width="600" height="338"
                                        className="w-full rounded-xl object-cover mb-6" loading="lazy" decoding="async"
                                        fetchPriority="auto" />
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-4">
                                            <div
                                                className="flex-shrink-0 w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor"
                                                    viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
                                                    </path>
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900">Phone</h4>
                                                <a href="tel:6000133844"
                                                    className="text-amber-600 hover:text-amber-700 font-medium text-lg transition-colors duration-200">6000133844</a>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <div
                                                className="flex-shrink-0 w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor"
                                                    viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                                                    </path>
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900">Address</h4>
                                                <p className="text-gray-600">Juria, Nagaon, Assam</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-6 pt-6 border-t border-amber-200">
                                        <p className="text-gray-600 leading-relaxed">Call us directly or fill out the contact form,
                                            and we'll get back to you as soon as possible. We're here to make your dining
                                            experience exceptional!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-8 rounded-2xl">
                                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h3>
                                <form id="contactForm" onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                                        <input type="text" id="name" name="name" required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200"
                                            placeholder="Your full name" />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                                        <input type="tel" id="phone" name="phone" required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200"
                                            placeholder="Your phone number" />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message
                                            *</label>
                                        <textarea id="message" name="message" rows={5} required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200 resize-vertical"
                                            placeholder="Tell us how we can help you..."></textarea>
                                    </div>
                                    <button type="submit"
                                        className="w-full bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-amber-700 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                </section>
                <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-100">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Ready to Experience Authentic Flavors?
                        </h2>
                        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">Don't wait any longer! Call us now to place your
                            order or visit our restaurant in Juria, Nagaon for an unforgettable dining experience.</p>

                        <div className="mb-12">
                            <img data-ai="generate" data-slot="cta-final"
                                data-prompt="Warm, inviting restaurant interior with golden lighting, wooden tables, and a welcoming atmosphere that makes people want to visit"
                                data-ar="16:9"
                                src="https://cdn.ailandingpage.ai/ai-landingpage/user-generate/edea7215-144c-463a-9b21-c1aa20cee4a3/edea7215-144c-463a-9b21-c1aa20cee4a3/cta/cta-final-b463f8f159e040ee9c6b7fda51d76ab8.png"
                                alt="Juria New Star Restaurant interior" width="1200" height="675"
                                className="w-full max-w-3xl mx-auto rounded-2xl object-cover shadow-lg" loading="lazy"
                                decoding="async" fetchPriority="auto" />
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                            <a href="tel:6000133844"
                                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-3">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
                                    </path>
                                </svg>
                                Call Now: 6000133844
                            </a>

                            <div className="text-center">
                                <p className="text-lg font-semibold text-gray-900 mb-1">Visit Us Today</p>
                                <p className="text-gray-700">Juria, Nagaon, Assam</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Juria New Star Restaurant?</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-sm font-medium text-gray-700">Fresh Ingredients</span>
                                </div>

                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z">
                                            </path>
                                        </svg>
                                    </div>
                                    <span className="text-sm font-medium text-gray-700">Hygienic Kitchen</span>
                                </div>

                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-2">
                                        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1">
                                            </path>
                                        </svg>
                                    </div>
                                    <span className="text-sm font-medium text-gray-700">Affordable Price</span>
                                </div>

                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-2">
                                        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
                                            </path>
                                        </svg>
                                    </div>
                                    <span className="text-sm font-medium text-gray-700">Friendly Service</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-800 text-white">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="col-span-1 md:col-span-2">
                            <h3 className="text-xl font-bold text-gold mb-4">Juria New Star Restaurant</h3>
                            <p className="text-gray-300 mb-2">Taste that feels like home</p>
                            <p className="text-gray-300 mb-2">Juria, Nagaon, Assam</p>
                            <p className="text-gray-300">Phone: <a href="tel:6000133844"
                                className="text-gold hover:underline">6000133844</a></p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><a href="#home" className="text-gray-300 hover:text-gold transition-colors">Home</a></li>
                                <li><a href="#about" className="text-gray-300 hover:text-gold transition-colors">About</a></li>
                                <li><a href="#menu" className="text-gray-300 hover:text-gold transition-colors">Menu</a></li>
                                <li><a href="#location" className="text-gray-300 hover:text-gold transition-colors">Location</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Contact</h4>
                            <ul className="space-y-2">
                                <li><a href="tel:6000133844" className="text-gray-300 hover:text-gold transition-colors">Call Us</a>
                                </li>
                                <li><a href="#contact" className="text-gray-300 hover:text-gold transition-colors">Contact Form</a>
                                </li>
                                <li className="text-gray-300">Order Online</li>
                                <li className="text-gray-300">Reservations</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-700 text-center">
                        <p className="text-gray-300">© 2026 Juria New Star Restaurant. All rights reserved.</p>
                    </div>
                </div>
            </footer>


        </>
    );
}
