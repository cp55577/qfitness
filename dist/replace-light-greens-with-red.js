const fs = require('fs');
const path = require('path');

// List of all HTML files to update
const htmlFiles = [
    'index.html',
    'about/michael-quarto.html',
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

// Function to replace light greens with red in HTML files
function replaceLightGreensWithRed(filePath) {
    console.log(`Replacing light greens with red in ${filePath}...`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace green background classes with dark red equivalents (definitely not pink)
    content = content.replace(/bg-green-100/g, 'bg-red-800');
    content = content.replace(/bg-green-200/g, 'bg-red-800');
    content = content.replace(/bg-green-300/g, 'bg-red-800');
    content = content.replace(/bg-green-400/g, 'bg-red-800');
    content = content.replace(/bg-green-500/g, 'bg-red-800');
    content = content.replace(/bg-green-600/g, 'bg-red-900');
    content = content.replace(/bg-green-700/g, 'bg-red-900');
    content = content.replace(/bg-green-800/g, 'bg-red-900');
    content = content.replace(/bg-green-900/g, 'bg-red-900');
    
    // Replace green text classes with dark red equivalents (definitely not pink)
    content = content.replace(/text-green-100/g, 'text-red-800');
    content = content.replace(/text-green-200/g, 'text-red-800');
    content = content.replace(/text-green-300/g, 'text-red-800');
    content = content.replace(/text-green-400/g, 'text-red-800');
    content = content.replace(/text-green-500/g, 'text-red-800');
    content = content.replace(/text-green-600/g, 'text-red-900');
    content = content.replace(/text-green-700/g, 'text-red-900');
    content = content.replace(/text-green-800/g, 'text-red-900');
    content = content.replace(/text-green-900/g, 'text-red-900');
    
    // Replace green border classes with dark red equivalents (definitely not pink)
    content = content.replace(/border-green-100/g, 'border-red-800');
    content = content.replace(/border-green-200/g, 'border-red-800');
    content = content.replace(/border-green-300/g, 'border-red-800');
    content = content.replace(/border-green-400/g, 'border-red-800');
    content = content.replace(/border-green-500/g, 'border-red-800');
    content = content.replace(/border-green-600/g, 'border-red-900');
    content = content.replace(/border-green-700/g, 'border-red-900');
    content = content.replace(/border-green-800/g, 'border-red-900');
    content = content.replace(/border-green-900/g, 'border-red-900');
    
    // Replace hover green classes with dark red equivalents (definitely not pink)
    content = content.replace(/hover:bg-green-100/g, 'hover:bg-red-800');
    content = content.replace(/hover:bg-green-200/g, 'hover:bg-red-800');
    content = content.replace(/hover:bg-green-300/g, 'hover:bg-red-800');
    content = content.replace(/hover:bg-green-400/g, 'hover:bg-red-800');
    content = content.replace(/hover:bg-green-500/g, 'hover:bg-red-800');
    content = content.replace(/hover:bg-green-600/g, 'hover:bg-red-900');
    content = content.replace(/hover:bg-green-700/g, 'hover:bg-red-900');
    content = content.replace(/hover:bg-green-800/g, 'hover:bg-red-900');
    content = content.replace(/hover:bg-green-900/g, 'hover:bg-red-900');
    
    content = content.replace(/hover:text-green-100/g, 'hover:text-red-800');
    content = content.replace(/hover:text-green-200/g, 'hover:text-red-800');
    content = content.replace(/hover:text-green-300/g, 'hover:text-red-800');
    content = content.replace(/hover:text-green-400/g, 'hover:text-red-800');
    content = content.replace(/hover:text-green-500/g, 'hover:text-red-800');
    content = content.replace(/hover:text-green-600/g, 'hover:text-red-900');
    content = content.replace(/hover:text-green-700/g, 'hover:text-red-900');
    content = content.replace(/hover:text-green-800/g, 'hover:text-red-900');
    content = content.replace(/hover:text-green-900/g, 'hover:text-red-900');
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Replaced light greens with red in ${filePath}`);
}

// Function to update CSS file
function updateCSSFile() {
    console.log('Updating CSS file to replace green with red...');
    
    let content = fs.readFileSync('styles.css', 'utf8');
    
    // Replace green CSS rules with red equivalents
    content = content.replace(/\.bg-green-500, \.bg-green-600, \.bg-green-700, \.bg-green-800, \.bg-green-900/g, '.bg-red-500, .bg-red-600, .bg-red-700, .bg-red-800, .bg-red-900');
    content = content.replace(/\.border-green-500, \.border-green-600, \.border-green-700, \.border-green-800, \.border-green-900/g, '.border-red-500, .border-red-600, .border-red-700, .border-red-800, .border-red-900');
    content = content.replace(/\.hover\\:text-green-500:hover, \.hover\\:text-green-600:hover, \.hover\\:text-green-700:hover, \.hover\\:text-green-800:hover, \.hover\\:text-green-900:hover/g, '.hover\\:text-red-500:hover, .hover\\:text-red-600:hover, .hover\\:text-red-700:hover, .hover\\:text-red-800:hover, .hover\\:text-red-900:hover');
    content = content.replace(/\.hover\\:bg-green-100:hover, \.hover\\:bg-green-200:hover, \.hover\\:bg-green-300:hover, \.hover\\:bg-green-400:hover, \.hover\\:bg-green-500:hover, \.hover\\:bg-green-600:hover, \.hover\\:bg-green-700:hover, \.hover\\:bg-green-800:hover, \.hover\\:bg-green-900:hover/g, '.hover\\:bg-red-100:hover, .hover\\:bg-red-200:hover, .hover\\:bg-red-300:hover, .hover\\:bg-red-400:hover, .hover\\:bg-red-500:hover, .hover\\:bg-red-600:hover, .hover\\:bg-red-700:hover, .hover\\:bg-red-800:hover, .hover\\:bg-red-900:hover');
    
    fs.writeFileSync('styles.css', content);
    console.log('✅ Updated CSS file with red equivalents');
}

// Update all files
console.log('🔴 Replacing light greens with red throughout the website...\n');

// Update CSS file first
updateCSSFile();

// Update all HTML files
htmlFiles.forEach(filePath => {
    if (fs.existsSync(filePath)) {
        replaceLightGreensWithRed(filePath);
    } else {
        console.log(`⚠️  File not found: ${filePath}`);
    }
});

console.log('\n🎉 All light greens replaced with red!');
console.log('\n📝 Changes applied:');
console.log('• bg-green-100 → bg-red-800 (dark red backgrounds, definitely not pink)');
console.log('• text-green-* → text-red-800/900 (dark red text colors)');
console.log('• border-green-* → border-red-800/900 (dark red borders)');
console.log('• hover:bg-green-* → hover:bg-red-800/900 (dark red hover states)');
console.log('• CSS rules updated to use dark red equivalents');
console.log('• All light green elements now use dark red colors (no pink!)');
