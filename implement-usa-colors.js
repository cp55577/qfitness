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

// Function to implement USA colors throughout the site
function implementUSAColors(filePath) {
    console.log(`Implementing USA colors in ${filePath}...`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Update color classes to use new usa- prefix
    content = content.replace(/primary-blue/g, 'usa-blue');
    content = content.replace(/primary-red/g, 'usa-red');
    content = content.replace(/primary-red-dark/g, 'usa-red-dark');
    content = content.replace(/secondary-blue/g, 'usa-blue-light');
    content = content.replace(/secondary-red/g, 'usa-red-light');
    content = content.replace(/accent-blue/g, 'usa-blue-dark');
    content = content.replace(/accent-red/g, 'usa-red-dark');
    
    // Update standard color classes
    content = content.replace(/blue-600/g, 'usa-blue-600');
    content = content.replace(/red-600/g, 'usa-red-600');
    content = content.replace(/red-700/g, 'usa-red-700');
    content = content.replace(/red-100/g, 'usa-red-100');
    
    // Update background colors
    content = content.replace(/bg-primary-blue/g, 'bg-usa-blue');
    content = content.replace(/bg-primary-red/g, 'bg-usa-red');
    content = content.replace(/bg-primary-red-dark/g, 'bg-usa-red-dark');
    content = content.replace(/bg-blue-600/g, 'bg-usa-blue-600');
    content = content.replace(/bg-red-600/g, 'bg-usa-red-600');
    content = content.replace(/bg-red-700/g, 'bg-usa-red-700');
    content = content.replace(/bg-red-100/g, 'bg-usa-red-100');
    
    // Update text colors
    content = content.replace(/text-primary-blue/g, 'text-usa-blue');
    content = content.replace(/text-primary-red/g, 'text-usa-red');
    content = content.replace(/text-primary-red-dark/g, 'text-usa-red-dark');
    content = content.replace(/text-blue-600/g, 'text-usa-blue-600');
    content = content.replace(/text-red-600/g, 'text-usa-red-600');
    content = content.replace(/text-red-700/g, 'text-usa-red-700');
    
    // Update hover states
    content = content.replace(/hover:bg-primary-red-dark/g, 'hover:bg-usa-red-dark');
    content = content.replace(/hover:bg-primary-blue-dark/g, 'hover:bg-usa-blue-dark');
    content = content.replace(/hover:text-primary-red-dark/g, 'hover:text-usa-red-dark');
    content = content.replace(/hover:text-primary-blue-dark/g, 'hover:text-usa-blue-dark');
    content = content.replace(/hover:bg-red-700/g, 'hover:bg-usa-red-700');
    content = content.replace(/hover:text-red-700/g, 'hover:text-usa-red-700');
    
    // Update border colors
    content = content.replace(/border-primary-blue/g, 'border-usa-blue');
    content = content.replace(/border-primary-red/g, 'border-usa-red');
    content = content.replace(/border-blue-600/g, 'border-usa-blue-600');
    content = content.replace(/border-red-600/g, 'border-usa-red-600');
    
    // Update focus rings
    content = content.replace(/focus:ring-primary-blue/g, 'focus:ring-usa-blue');
    content = content.replace(/focus:ring-primary-red/g, 'focus:ring-usa-red');
    content = content.replace(/focus:ring-blue-600/g, 'focus:ring-usa-blue-600');
    content = content.replace(/focus:ring-red-600/g, 'focus:ring-usa-red-600');
    
    // Update shadows
    content = content.replace(/shadow-usa/g, 'shadow-usa');
    content = content.replace(/shadow-usa-lg/g, 'shadow-usa-lg');
    content = content.replace(/shadow-usa-glow/g, 'shadow-usa-glow');
    
    // Update gradients
    content = content.replace(/bg-gradient-usa/g, 'bg-gradient-usa');
    content = content.replace(/bg-gradient-usa-reverse/g, 'bg-gradient-usa-reverse');
    content = content.replace(/bg-gradient-usa-accent/g, 'bg-gradient-usa-accent');
    
    // Update legacy green mappings to use usa-red
    content = content.replace(/bg-primary-green/g, 'bg-usa-red');
    content = content.replace(/bg-primary-green-dark/g, 'bg-usa-red-dark');
    content = content.replace(/text-primary-green/g, 'text-usa-red');
    content = content.replace(/text-primary-green-dark/g, 'text-usa-red-dark');
    content = content.replace(/hover:bg-primary-green-dark/g, 'hover:bg-usa-red-dark');
    content = content.replace(/hover:text-primary-green-dark/g, 'hover:text-usa-red-dark');
    
    // Update green classes to usa-red
    content = content.replace(/bg-green-100/g, 'bg-usa-red-100');
    content = content.replace(/bg-green-200/g, 'bg-usa-red-200');
    content = content.replace(/bg-green-300/g, 'bg-usa-red-300');
    content = content.replace(/bg-green-400/g, 'bg-usa-red-400');
    content = content.replace(/bg-green-500/g, 'bg-usa-red-500');
    content = content.replace(/bg-green-600/g, 'bg-usa-red-600');
    content = content.replace(/bg-green-700/g, 'bg-usa-red-700');
    content = content.replace(/bg-green-800/g, 'bg-usa-red-800');
    content = content.replace(/bg-green-900/g, 'bg-usa-red-900');
    
    content = content.replace(/text-green-100/g, 'text-usa-red-100');
    content = content.replace(/text-green-200/g, 'text-usa-red-200');
    content = content.replace(/text-green-300/g, 'text-usa-red-300');
    content = content.replace(/text-green-400/g, 'text-usa-red-400');
    content = content.replace(/text-green-500/g, 'text-usa-red-500');
    content = content.replace(/text-green-600/g, 'text-usa-red-600');
    content = content.replace(/text-green-700/g, 'text-usa-red-700');
    content = content.replace(/text-green-800/g, 'text-usa-red-800');
    content = content.replace(/text-green-900/g, 'text-usa-red-900');
    
    // Update border green classes
    content = content.replace(/border-green-100/g, 'border-usa-red-100');
    content = content.replace(/border-green-200/g, 'border-usa-red-200');
    content = content.replace(/border-green-300/g, 'border-usa-red-300');
    content = content.replace(/border-green-400/g, 'border-usa-red-400');
    content = content.replace(/border-green-500/g, 'border-usa-red-500');
    content = content.replace(/border-green-600/g, 'border-usa-red-600');
    content = content.replace(/border-green-700/g, 'border-usa-red-700');
    content = content.replace(/border-green-800/g, 'border-usa-red-800');
    content = content.replace(/border-green-900/g, 'border-usa-red-900');
    
    // Update hover green classes
    content = content.replace(/hover:bg-green-100/g, 'hover:bg-usa-red-100');
    content = content.replace(/hover:bg-green-200/g, 'hover:bg-usa-red-200');
    content = content.replace(/hover:bg-green-300/g, 'hover:bg-usa-red-300');
    content = content.replace(/hover:bg-green-400/g, 'hover:bg-usa-red-400');
    content = content.replace(/hover:bg-green-500/g, 'hover:bg-usa-red-500');
    content = content.replace(/hover:bg-green-600/g, 'hover:bg-usa-red-600');
    content = content.replace(/hover:bg-green-700/g, 'hover:bg-usa-red-700');
    content = content.replace(/hover:bg-green-800/g, 'hover:bg-usa-red-800');
    content = content.replace(/hover:bg-green-900/g, 'hover:bg-usa-red-900');
    
    content = content.replace(/hover:text-green-100/g, 'hover:text-usa-red-100');
    content = content.replace(/hover:text-green-200/g, 'hover:text-usa-red-200');
    content = content.replace(/hover:text-green-300/g, 'hover:text-usa-red-300');
    content = content.replace(/hover:text-green-400/g, 'hover:text-usa-red-400');
    content = content.replace(/hover:text-green-500/g, 'hover:text-usa-red-500');
    content = content.replace(/hover:text-green-600/g, 'hover:text-usa-red-600');
    content = content.replace(/hover:text-green-700/g, 'hover:text-usa-red-700');
    content = content.replace(/hover:text-green-800/g, 'hover:text-usa-red-800');
    content = content.replace(/hover:text-green-900/g, 'hover:text-usa-red-900');
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Implemented USA colors in ${filePath}`);
}

// Function to update JavaScript components
function updateJSComponents() {
    console.log('Updating JavaScript components with USA colors...');
    
    let content = fs.readFileSync('js/components.js', 'utf8');
    
    // Update color classes in JavaScript
    content = content.replace(/primary-blue/g, 'usa-blue');
    content = content.replace(/primary-red/g, 'usa-red');
    content = content.replace(/primary-red-dark/g, 'usa-red-dark');
    content = content.replace(/primary-green/g, 'usa-red');
    content = content.replace(/primary-green-dark/g, 'usa-red-dark');
    content = content.replace(/text-blue-600/g, 'text-usa-blue-600');
    content = content.replace(/text-red-600/g, 'text-usa-red-600');
    content = content.replace(/hover:text-blue-700/g, 'hover:text-usa-blue-700');
    content = content.replace(/hover:text-red-700/g, 'hover:text-usa-red-700');
    
    fs.writeFileSync('js/components.js', content);
    console.log('✅ Updated JavaScript components with USA colors');
}

// Update all files
console.log('🇺🇸 Implementing USA color scheme throughout the entire site...\n');

// Update JavaScript components first
updateJSComponents();

// Update all HTML files
htmlFiles.forEach(filePath => {
    if (fs.existsSync(filePath)) {
        implementUSAColors(filePath);
    } else {
        console.log(`⚠️  File not found: ${filePath}`);
    }
});

console.log('\n🎉 USA color scheme implemented throughout the entire site!');
console.log('\n📝 Changes applied:');
console.log('• Updated all color classes to use usa- prefix');
console.log('• Converted primary-blue → usa-blue');
console.log('• Converted primary-red → usa-red');
console.log('• Converted all green classes → usa-red classes');
console.log('• Updated JavaScript components');
console.log('• Applied consistent USA patriotic theme site-wide');
console.log('\n🎨 New USA Color Classes Available:');
console.log('• bg-usa-blue, bg-usa-red, bg-usa-white');
console.log('• text-usa-blue, text-usa-red, text-usa-white');
console.log('• border-usa-blue, border-usa-red, border-usa-white');
console.log('• shadow-usa, shadow-usa-lg, shadow-usa-glow, shadow-usa-red-glow');
console.log('• bg-gradient-usa, bg-gradient-usa-reverse, bg-gradient-usa-accent');
