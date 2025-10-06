// Simple test version of components
console.log('Test components loading...');

// Function to get the correct path prefix based on current location
function getPathPrefix() {
    const path = window.location.pathname;
    console.log('Current path:', path);
    if (path.includes('/about/') || path.includes('/services/') || path.includes('/membership/') || path.includes('/community/')) {
        return '../';
    }
    return '';
}

const pathPrefix = getPathPrefix();
console.log('Path prefix:', pathPrefix);

// Simple navbar for testing
const testNavbar = `
<nav class="navbar">
    <div class="container">
        <div class="flex justify-between items-center">
            <a href="${pathPrefix}index.html" class="navbar-brand">Q Fitness</a>
            <div class="hidden md:flex space-x-8">
                <a href="${pathPrefix}about/michael-quarto.html">About</a>
                <a href="${pathPrefix}contact.html">Contact</a>
            </div>
        </div>
    </div>
</nav>
`;

// Auto-load components
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, updating navbar...');
    
    // Load navbar
    const navbarContainer = document.querySelector('nav');
    if (navbarContainer) {
        console.log('Found navbar container, updating...');
        navbarContainer.outerHTML = testNavbar;
    } else {
        console.log('No navbar container found');
    }
});
