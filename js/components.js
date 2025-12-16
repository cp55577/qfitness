// Pure JavaScript components for GitHub Pages
// Function to get the correct path prefix based on current location
function getPathPrefix() {
    const path = window.location.pathname;
    if (path.includes('/about/') || path.includes('/services/') || path.includes('/membership/') || path.includes('/community/')) {
        return '../';
    }
    return '';
}

const pathPrefix = getPathPrefix();

const navbar = `
<nav class="navbar fixed top-0 left-0 right-0 z-50 bg-primary-blue shadow-lg backdrop-blur-sm bg-opacity-95">
    <div class="container mx-auto px-4">
        <div class="flex justify-between items-center h-20">
            <!-- Logo and Brand -->
            <div class="flex items-center space-x-3">
                <a href="${pathPrefix}index.html" class="navbar-brand flex items-center group">
                    <img src="${pathPrefix}images/new_logo.png" alt="Q Fitness Logo" class="h-16 w-16 transition-transform duration-300 group-hover:scale-105">
                </a>
                <span class="hidden sm:block text-white text-sm font-normal italic font-serif tracking-wide opacity-90">est. 1994</span>
            </div>
            
            <!-- Desktop Navigation -->
            <nav class="hidden lg:flex items-center space-x-1" role="navigation" aria-label="Main navigation">
                <!-- About Us Dropdown -->
                <div class="relative group">
                    <button 
                        class="nav-link text-white hover:text-primary-green px-4 py-2.5 rounded-md transition-all duration-200 font-semibold text-sm tracking-wide relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary-green focus:ring-offset-2 focus:ring-offset-primary-blue"
                        aria-expanded="false"
                        aria-haspopup="true"
                        aria-controls="about-menu"
                        id="about-button"
                    >
                        <span class="relative z-10">About Us</span>
                        <span class="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-200"></span>
                    </button>
                    <div 
                        id="about-menu"
                        class="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible scale-95 pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-300 ease-out origin-top-left z-50 overflow-hidden"
                        role="menu"
                        aria-labelledby="about-button"
                    >
                        <div class="py-2">
                            <a href="${pathPrefix}about/michael-quarto.html" class="block px-5 py-3 text-sm text-gray-800 hover:bg-primary-green hover:text-white transition-all duration-150 michael-quarto-link font-medium" role="menuitem">
                                <span class="flex items-center">
                                    <span>Michael (Founder)</span>
                                </span>
                            </a>
                            <a href="${pathPrefix}about/andrew.html" class="block px-5 py-3 text-sm text-gray-800 hover:bg-primary-green hover:text-white transition-all duration-150 font-medium" role="menuitem">
                                <span class="flex items-center">
                                    <span>Andrew (Trainer)</span>
                                </span>
                            </a>
                            <a href="${pathPrefix}about/the-gym.html" class="block px-5 py-3 text-sm text-gray-800 hover:bg-primary-green hover:text-white transition-all duration-150 the-gym-link font-medium" role="menuitem">
                                <span class="flex items-center">
                                    <span>The Gym</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                
                <!-- Services Dropdown -->
                <div class="relative group">
                    <button 
                        class="nav-link text-white hover:text-primary-green px-4 py-2.5 rounded-md transition-all duration-200 font-semibold text-sm tracking-wide relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary-green focus:ring-offset-2 focus:ring-offset-primary-blue"
                        aria-expanded="false"
                        aria-haspopup="true"
                        aria-controls="services-menu"
                        id="services-button"
                    >
                        <span class="relative z-10">Services</span>
                        <span class="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-200"></span>
                    </button>
                    <div 
                        id="services-menu"
                        class="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible scale-95 pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-300 ease-out origin-top-left z-50 overflow-hidden"
                        role="menu"
                        aria-labelledby="services-button"
                    >
                        <div class="py-2">
                            <a href="${pathPrefix}services/personal-training.html" class="block px-5 py-3 text-sm text-gray-800 hover:bg-primary-green hover:text-white transition-all duration-150 font-medium" role="menuitem">
                                <span class="flex items-center">
                                    <span>Personal Training</span>
                                </span>
                            </a>
                            <a href="${pathPrefix}services/group-classes.html" class="block px-5 py-3 text-sm text-gray-800 hover:bg-primary-green hover:text-white transition-all duration-150 font-medium" role="menuitem">
                                <span class="flex items-center">
                                    <span>Group Classes</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                
                <!-- Membership Dropdown -->
                <div class="relative group">
                    <button 
                        class="nav-link text-white hover:text-primary-green px-4 py-2.5 rounded-md transition-all duration-200 font-semibold text-sm tracking-wide relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary-green focus:ring-offset-2 focus:ring-offset-primary-blue"
                        aria-expanded="false"
                        aria-haspopup="true"
                        aria-controls="membership-menu"
                        id="membership-button"
                    >
                        <span class="relative z-10">Membership</span>
                        <span class="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-200"></span>
                    </button>
                    <div 
                        id="membership-menu"
                        class="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible scale-95 pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-300 ease-out origin-top-left z-50 overflow-hidden"
                        role="menu"
                        aria-labelledby="membership-button"
                    >
                        <div class="py-2">
                            <a href="${pathPrefix}membership/membership-rates.html" class="block px-5 py-3 text-sm text-gray-800 hover:bg-primary-green hover:text-white transition-all duration-150 font-medium" role="menuitem">
                                <span class="flex items-center">
                                    <span>Rates</span>
                                </span>
                            </a>
                            <a href="${pathPrefix}membership/schedule-bookings.html" class="block px-5 py-3 text-sm text-gray-800 hover:bg-primary-green hover:text-white transition-all duration-150 font-medium" role="menuitem">
                                <span class="flex items-center">
                                    <span>Schedule</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                
                <!-- Testimonials -->
                <a href="${pathPrefix}community/testimonials.html" class="nav-link text-white hover:text-primary-green px-4 py-2.5 rounded-md transition-all duration-200 font-semibold text-sm tracking-wide relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary-green focus:ring-offset-2 focus:ring-offset-primary-blue">
                    <span class="relative z-10">Testimonials</span>
                    <span class="absolute inset-0 bg-white opacity-0 hover:opacity-5 transition-opacity duration-200"></span>
                </a>
                
                <!-- Contact -->
                <a href="${pathPrefix}contact.html" class="nav-link text-white hover:text-primary-green px-4 py-2.5 rounded-md transition-all duration-200 font-semibold text-sm tracking-wide relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary-green focus:ring-offset-2 focus:ring-offset-primary-blue">
                    <span class="relative z-10">Contact</span>
                    <span class="absolute inset-0 bg-white opacity-0 hover:opacity-5 transition-opacity duration-200"></span>
                </a>
                
                <!-- FAQ -->
                <a href="${pathPrefix}faq.html" class="nav-link text-white hover:text-primary-green px-4 py-2.5 rounded-md transition-all duration-200 font-semibold text-sm tracking-wide relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary-green focus:ring-offset-2 focus:ring-offset-primary-blue">
                    <span class="relative z-10">FAQ</span>
                    <span class="absolute inset-0 bg-white opacity-0 hover:opacity-5 transition-opacity duration-200"></span>
                </a>
            </nav>
            
            <!-- Mobile menu button -->
            <button 
                type="button" 
                class="lg:hidden text-white hover:text-primary-green p-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-green focus:ring-offset-2 focus:ring-offset-primary-blue" 
                data-drawer-target="drawer-navigation" 
                data-drawer-show="drawer-navigation"
                aria-label="Toggle navigation menu"
            >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>
    </div>
</nav>
<div class="h-20"></div>
`;

const footer = `
<footer class="bg-gray-900 text-white py-12">
    <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div class="col-span-1 md:col-span-2">
                <h3 class="text-2xl font-bold mb-4" style="color: #ffffff !important; text-shadow: 1px 1px 2px rgba(0,0,0,0.5) !important; -webkit-text-fill-color: #ffffff !important;">Q Fitness</h3>
                <p class="text-white mb-4">West Chester's premier 24/7 fitness destination. Join our community and unlock your potential!</p>
            </div>
            
            <div>
                <h4 class="text-lg font-semibold mb-4" style="color: #ffffff !important; text-shadow: 1px 1px 2px rgba(0,0,0,0.5) !important; -webkit-text-fill-color: #ffffff !important;">Quick Links</h4>
                <ul class="space-y-2">
                    <li><a href="${pathPrefix}about/the-gym.html" class="text-white hover:text-primary-green transition duration-300">About Us</a></li>
                    <li><a href="${pathPrefix}services/personal-training.html" class="text-white hover:text-primary-green transition duration-300">Services</a></li>
                    <li><a href="${pathPrefix}membership/membership-rates.html" class="text-white hover:text-primary-green transition duration-300">Membership</a></li>
                    <li><a href="${pathPrefix}contact.html" class="text-white hover:text-primary-green transition duration-300">Contact</a></li>
                </ul>
            </div>
            
            <div>
                <h4 class="text-lg font-semibold mb-4" style="color: #ffffff !important; text-shadow: 1px 1px 2px rgba(0,0,0,0.5) !important; -webkit-text-fill-color: #ffffff !important;">Contact Info</h4>
                <div class="space-y-2 text-white">
                    <p>1306 Wilmington Pike</p>
                    <p>West Chester, PA 19380</p>
                    <p>Phone: (610) 918-9200</p>
                    <p>Email: info@qfitness.com</p>
                </div>
            </div>
        </div>
        
            <div class="border-t border-gray-700 mt-8 pt-8 text-center">
                <p class="text-gray-400">&copy; 2025 Q Fitness. All rights reserved.</p>
            </div>
    </div>
</footer>
`;

// Auto-load components
document.addEventListener('DOMContentLoaded', function() {
    // Load navbar
    const navbarContainer = document.querySelector('nav');
    if (navbarContainer) {
        navbarContainer.outerHTML = navbar;
    }
    
    // Load footer
    const footerContainer = document.querySelector('footer');
    if (footerContainer) {
        footerContainer.outerHTML = footer;
    }
});
