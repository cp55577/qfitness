const fs = require('fs');
const path = require('path');

// List of all HTML files to update
const htmlFiles = [
    'about/the-gym.html',
    'contact.html',
    'faq.html',
    'membership/membership-rates.html',
    'membership/schedule-bookings.html',
    'services/personal-training.html',
    'services/group-classes.html',
    'community/testimonials.html',
    'community/blog.html'
];

// Function to update a single HTML file
function updateHtmlFile(filePath) {
    console.log(`Updating ${filePath}...`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove load-navbar.js references
    content = content.replace(/<script src="[^"]*load-navbar\.js"><\/script>\s*/g, '');
    content = content.replace(/<script src="\.\.\/load-navbar\.js"><\/script>\s*/g, '');
    
    // Replace navbar section with placeholder
    const navbarRegex = /<!-- Navbar -->[\s\S]*?<\/nav>/;
    content = content.replace(navbarRegex, '    <!-- Navbar will be loaded by JavaScript -->\n    <nav class="navbar"></nav>');
    
    // Replace footer section with placeholder
    const footerRegex = /<!-- Footer -->[\s\S]*?<\/footer>/;
    content = content.replace(footerRegex, '    <!-- Footer will be loaded by JavaScript -->\n    <footer></footer>');
    
    // Add components.js script before Flowbite
    const flowbiteRegex = /<!-- Flowbite JS -->\s*<script src="https:\/\/cdn\.jsdelivr\.net\/npm\/flowbite@2\.2\.1\/dist\/flowbite\.min\.js"><\/script>/;
    const replacement = '    <!-- Components JS -->\n    <script src="../js/components.js"></script>\n    \n    <!-- Flowbite JS -->\n    <script src="https://cdn.jsdelivr.net/npm/flowbite@2.2.1/dist/flowbite.min.js"></script>';
    content = content.replace(flowbiteRegex, replacement);
    
    // Fix paths for root-level files
    if (!filePath.includes('/')) {
        content = content.replace('src="../js/components.js"', 'src="js/components.js"');
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Updated ${filePath}`);
}

// Update all files
console.log('🚀 Updating all HTML files for GitHub Pages compatibility...\n');

htmlFiles.forEach(filePath => {
    if (fs.existsSync(filePath)) {
        updateHtmlFile(filePath);
    } else {
        console.log(`⚠️  File not found: ${filePath}`);
    }
});

console.log('\n🎉 All files updated! Your site is now GitHub Pages compatible.');
console.log('\n📝 Next steps:');
console.log('1. Test the pages locally');
console.log('2. Commit and push to GitHub');
console.log('3. Enable GitHub Pages in repository settings');
