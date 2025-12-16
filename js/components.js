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
<nav class="navbar">
    <div class="container">
        <div class="flex justify-between items-center">
            <a href="${pathPrefix}index.html" class="navbar-brand flex items-center p-0">
                <img src="${pathPrefix}images/new_logo.png" alt="Q Fitness Logo" class="h-24 w-24">
            </a>
            <span style="color: #ffffff !important; font-size: 16px; font-weight: normal; position: absolute; left: 150px; top: 60%; transform: translateY(-50%); font-family: 'Times New Roman', serif; font-style: italic; letter-spacing: 1px;">est. 1994</span>
            
            <!-- Desktop Navigation -->
            <nav class="hidden md:flex space-x-3" role="navigation" aria-label="Main navigation">
                <!-- About Us Dropdown -->
                <div class="relative group">
                    <button 
                        class="text-gray-700 hover:text-primary-green px-3 py-2 rounded-md transition duration-200 font-medium"
                        aria-expanded="false"
                        aria-haspopup="true"
                        aria-controls="about-menu"
                        id="about-button"
                    >
                        About Us
                    </button>
                    <div 
                        id="about-menu"
                        class="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                        role="menu"
                        aria-labelledby="about-button"
                    >
                        <a href="${pathPrefix}about/michael-quarto.html" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 michael-quarto-link" role="menuitem">Michael (Founder)</a>
                        <a href="${pathPrefix}about/andrew.html" class="block px-4 py-2 text-gray-700 hover:bg-gray-100" role="menuitem">Andrew (Trainer)</a>
                        <a href="${pathPrefix}about/the-gym.html" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 the-gym-link" role="menuitem">The Gym</a>
                    </div>
                </div>
                
                <!-- Services Dropdown -->
                <div class="relative group">
                    <button 
                        class="text-gray-700 hover:text-primary-green px-3 py-2 rounded-md transition duration-200 font-medium"
                        aria-expanded="false"
                        aria-haspopup="true"
                        aria-controls="services-menu"
                        id="services-button"
                    >
                        Services
                    </button>
                    <div 
                        id="services-menu"
                        class="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                        role="menu"
                        aria-labelledby="services-button"
                    >
                        <a href="${pathPrefix}services/personal-training.html" class="block px-4 py-2 text-gray-700 hover:bg-gray-100" role="menuitem">Personal Training</a>
                        <a href="${pathPrefix}services/group-classes.html" class="block px-4 py-2 text-gray-700 hover:bg-gray-100" role="menuitem">Group Classes</a>
                    </div>
                </div>
                
                <!-- Membership Dropdown -->
                <div class="relative group">
                    <button 
                        class="text-gray-700 hover:text-primary-green px-3 py-2 rounded-md transition duration-200 font-medium"
                        aria-expanded="false"
                        aria-haspopup="true"
                        aria-controls="membership-menu"
                        id="membership-button"
                    >
                        Membership
                    </button>
                    <div 
                        id="membership-menu"
                        class="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                        role="menu"
                        aria-labelledby="membership-button"
                    >
                        <a href="${pathPrefix}membership/membership-rates.html" class="block px-4 py-2 text-gray-700 hover:bg-gray-100" role="menuitem">Rates</a>
                        <a href="${pathPrefix}membership/schedule-bookings.html" class="block px-4 py-2 text-gray-700 hover:bg-gray-100" role="menuitem">Schedule</a>
                    </div>
                </div>
                
                <!-- Testimonials -->
                <a href="${pathPrefix}community/testimonials.html" class="text-gray-700 hover:text-primary-green px-3 py-2 rounded-md transition duration-200 font-medium">Testimonials</a>
                
                <!-- Contact -->
                <a href="${pathPrefix}contact.html" class="text-gray-700 hover:text-primary-green px-3 py-2 rounded-md transition duration-200 font-medium">Contact</a>
                
                <!-- FAQ -->
                <a href="${pathPrefix}faq.html" class="text-gray-700 hover:text-primary-green px-3 py-2 rounded-md transition duration-200 font-medium">FAQ</a>
                
                <!-- Store -->
                <a href="https://www.customcreationsnow.com/search?type=product%2Ccollection&q=Q+fitness" target="_blank" rel="noopener noreferrer" class="text-gray-700 hover:text-primary-green px-3 py-2 rounded-md transition duration-200 font-medium">Store</a>
                
                <!-- Join Now CTA -->
                <a href="${pathPrefix}membership/membership-rates.html" class="btn-primary-green ml-4">
                    Join Now
                </a>
            </nav>
            
            <!-- Mobile menu button -->
            <button type="button" class="md:hidden" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>
    </div>
</nav>
`;

const footer = `
<footer class="bg-gray-900 text-white py-12">
    <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div class="col-span-1 md:col-span-2">
                <h3 class="text-2xl font-bold mb-4" style="color: #ffffff !important; text-shadow: 1px 1px 2px rgba(0,0,0,0.5) !important; -webkit-text-fill-color: #ffffff !important;">Q Fitness</h3>
                <p class="text-white mb-6">West Chester's premier 24/7 fitness destination. Join our community and unlock your potential!</p>
                <a href="${pathPrefix}contact.html" class="btn-primary-green inline-block text-center">
                    Send Us A Message
                </a>
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
                <div class="space-y-2 text-white mb-4">
                    <p><a href="https://www.google.com/maps/search/?api=1&query=1306+Wilmington+Pike+West+Chester+PA+19382" target="_blank" rel="noopener noreferrer" class="text-white hover:text-primary-green transition duration-300 underline">1306 Wilmington Pike</a></p>
                    <p><a href="https://www.google.com/maps/search/?api=1&query=1306+Wilmington+Pike+West+Chester+PA+19382" target="_blank" rel="noopener noreferrer" class="text-white hover:text-primary-green transition duration-300 underline">West Chester, PA 19382</a></p>
                    <p>Phone: <a href="tel:610-574-2300" class="text-white hover:text-primary-green transition duration-300 underline">610-574-2300</a></p>
                    <p>Call or Text</p>
                </div>
                <div class="mt-4">
                    <h5 class="text-md font-semibold mb-3" style="color: #ffffff !important; text-shadow: 1px 1px 2px rgba(0,0,0,0.5) !important; -webkit-text-fill-color: #ffffff !important;">Follow Us</h5>
                    <div class="flex gap-4 footer-social-links">
                        <a href="https://www.facebook.com/pages/Q-FITNESS-24-HOUR-GYM/134716939884246" target="_blank" rel="noopener noreferrer" class="footer-social-link text-white hover:text-primary-green transition duration-300" aria-label="Facebook">
                            <svg class="w-6 h-6 footer-social-icon" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </a>
                        <a href="https://www.youtube.com/@QFITNESS24HRGYM" target="_blank" rel="noopener noreferrer" class="footer-social-link text-white hover:text-primary-green transition duration-300" aria-label="YouTube">
                            <svg class="w-6 h-6 footer-social-icon" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                        </a>
                    </div>
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
