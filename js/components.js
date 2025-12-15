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
            <nav class="hidden md:flex space-x-8" role="navigation" aria-label="Main navigation">
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
                        <a href="${pathPrefix}about/michael-quarto.html" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 michael-quarto-link" role="menuitem">Michael Quarto (founder)</a>
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
                
                <!-- Community Dropdown -->
                <div class="relative group">
                    <button 
                        class="text-gray-700 hover:text-primary-green px-3 py-2 rounded-md transition duration-200 font-medium"
                        aria-expanded="false"
                        aria-haspopup="true"
                        aria-controls="community-menu"
                        id="community-button"
                    >
                        Community
                    </button>
                    <div 
                        id="community-menu"
                        class="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                        role="menu"
                        aria-labelledby="community-button"
                    >
                        <a href="${pathPrefix}community/testimonials.html" class="block px-4 py-2 text-gray-700 hover:bg-gray-100" role="menuitem">Testimonials</a>
                        <a href="${pathPrefix}community/blog.html" class="block px-4 py-2 text-gray-700 hover:bg-gray-100" role="menuitem">Blog</a>
                    </div>
                </div>
                
                <!-- Contact -->
                <a href="${pathPrefix}contact.html" class="text-gray-700 hover:text-primary-green px-3 py-2 rounded-md transition duration-200 font-medium">Contact</a>
                
                <!-- FAQ -->
                <a href="${pathPrefix}faq.html" class="text-gray-700 hover:text-primary-green px-3 py-2 rounded-md transition duration-200 font-medium">FAQ</a>
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
