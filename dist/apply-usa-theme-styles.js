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

// Function to apply USA theme styles throughout the site
function applyUSAThemeStyles(filePath) {
    console.log(`Applying USA theme styles to ${filePath}...`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Update body class for global styles
    content = content.replace(/<body[^>]*class="[^"]*"[^>]*>/g, '<body class="bg-usa-off-white text-usa-blue">');
    
    // Update hero sections with USA gradients
    content = content.replace(/class="hero-section[^"]*"/g, 'class="hero-section bg-gradient-usa text-usa-white py-20 text-center"');
    
    // Update main headings with USA blue
    content = content.replace(/<h1[^>]*class="[^"]*"[^>]*>/g, '<h1 class="text-usa-blue text-4xl font-bold mb-6">');
    content = content.replace(/<h2[^>]*class="[^"]*"[^>]*>/g, '<h2 class="text-usa-blue text-3xl font-bold mb-4">');
    content = content.replace(/<h3[^>]*class="[^"]*"[^>]*>/g, '<h3 class="text-usa-blue text-2xl font-bold mb-3">');
    
    // Update buttons with USA theme
    content = content.replace(/<a[^>]*class="[^"]*btn[^"]*"[^>]*>/g, (match) => {
        if (match.includes('primary') || match.includes('Join Now') || match.includes('Learn More')) {
            return match.replace(/class="[^"]*"/, 'class="bg-usa-blue text-usa-white px-6 py-3 rounded-md hover:bg-usa-blue-dark focus:ring-2 focus:ring-usa-blue shadow-usa transition duration-200 font-semibold"');
        } else {
            return match.replace(/class="[^"]*"/, 'class="bg-usa-red text-usa-white px-6 py-3 rounded-md hover:bg-usa-red-dark focus:ring-2 focus:ring-usa-red shadow-usa transition duration-200 font-semibold"');
        }
    });
    
    // Update service cards with USA theme
    content = content.replace(/<div class="card[^>]*>/g, '<div class="bg-usa-white border-usa border-usa-blue shadow-usa-lg rounded-lg p-6 hover:shadow-usa-glow transition duration-300">');
    
    // Update card titles
    content = content.replace(/<h3[^>]*class="[^"]*text-[^"]*"[^>]*>/g, '<h3 class="text-usa-blue text-xl font-bold mb-2">');
    
    // Update card content with lighter blue for better readability
    content = content.replace(/<p[^>]*class="[^"]*text-[^"]*"[^>]*>/g, '<p class="text-usa-blue-300 mb-4">');
    
    // Update links with USA red
    content = content.replace(/<a[^>]*class="[^"]*text-[^"]*"[^>]*>/g, '<a href="#" class="text-usa-red hover:text-usa-red-dark font-semibold transition duration-200">');
    
    // Update navigation with USA theme
    content = content.replace(/<nav[^>]*class="[^"]*navbar[^"]*"[^>]*>/g, '<nav class="bg-usa-blue text-usa-white p-4 shadow-usa">');
    
    // Update navigation links
    content = content.replace(/<a[^>]*class="[^"]*hover:bg-[^"]*"[^>]*>/g, '<a href="#" class="hover:bg-usa-blue-dark px-3 py-2 rounded transition duration-200 text-usa-white">');
    
    // Update form inputs with USA theme
    content = content.replace(/<input[^>]*class="[^"]*"[^>]*>/g, '<input class="border-usa border-usa-blue text-usa-blue px-4 py-2 rounded-md focus:ring-2 focus:ring-usa-blue focus:outline-none w-full"');
    content = content.replace(/<textarea[^>]*class="[^"]*"[^>]*>/g, '<textarea class="border-usa border-usa-blue text-usa-blue px-4 py-2 rounded-md focus:ring-2 focus:ring-usa-blue focus:outline-none w-full"');
    content = content.replace(/<select[^>]*class="[^"]*"[^>]*>/g, '<select class="border-usa border-usa-blue text-usa-blue px-4 py-2 rounded-md focus:ring-2 focus:ring-usa-blue focus:outline-none w-full"');
    
    // Update form labels
    content = content.replace(/<label[^>]*class="[^"]*"[^>]*>/g, '<label class="text-usa-blue font-semibold mb-2 block">');
    
    // Update error messages
    content = content.replace(/<p[^>]*class="[^"]*error[^"]*"[^>]*>/g, '<p class="text-usa-red-100 mt-1 text-sm">');
    
    // Update sections with proper spacing and USA theme
    content = content.replace(/<section[^>]*class="[^"]*section[^"]*"[^>]*>/g, '<section class="py-16 bg-usa-off-white">');
    
    // Update testimonials with USA theme
    content = content.replace(/<div[^>]*class="[^"]*testimonial[^"]*"[^>]*>/g, '<div class="bg-usa-white border-usa border-usa-red shadow-usa-lg rounded-lg p-6 text-center">');
    
    // Update footer with USA theme
    content = content.replace(/<footer[^>]*class="[^"]*"[^>]*>/g, '<footer class="bg-usa-blue text-usa-white py-8">');
    
    // Update footer links
    content = content.replace(/<a[^>]*class="[^"]*footer[^"]*"[^>]*>/g, '<a href="#" class="text-usa-white hover:text-usa-red transition duration-200">');
    
    // Update icons with USA theme
    content = content.replace(/<div[^>]*class="[^"]*w-16 h-16[^"]*"[^>]*>/g, '<div class="w-16 h-16 bg-usa-red rounded-full flex items-center justify-center mb-6 mx-auto shadow-usa">');
    content = content.replace(/<svg[^>]*class="[^"]*w-10 h-10[^"]*"[^>]*>/g, '<svg class="w-10 h-10 text-usa-white" fill="currentColor" viewBox="0 0 24 24">');
    
    // Update gradients for featured sections
    content = content.replace(/<div[^>]*class="[^"]*featured[^"]*"[^>]*>/g, '<div class="bg-gradient-usa-accent text-usa-white p-6 rounded-lg shadow-usa-lg">');
    
    // Update call-to-action sections
    content = content.replace(/<div[^>]*class="[^"]*cta[^"]*"[^>]*>/g, '<div class="bg-gradient-usa text-usa-white p-8 rounded-lg text-center shadow-usa-lg">');
    
    // Update pricing cards
    content = content.replace(/<div[^>]*class="[^"]*pricing[^"]*"[^>]*>/g, '<div class="bg-usa-white border-usa border-usa-blue shadow-usa-lg rounded-lg p-8 text-center hover:shadow-usa-glow transition duration-300">');
    
    // Update pricing titles
    content = content.replace(/<h4[^>]*class="[^"]*price[^"]*"[^>]*>/g, '<h4 class="text-usa-blue text-2xl font-bold mb-2">');
    
    // Update pricing amounts
    content = content.replace(/<span[^>]*class="[^"]*amount[^"]*"[^>]*>/g, '<span class="text-usa-red text-3xl font-bold">');
    
    // Update feature lists
    content = content.replace(/<ul[^>]*class="[^"]*features[^"]*"[^>]*>/g, '<ul class="space-y-2">');
    content = content.replace(/<li[^>]*class="[^"]*feature[^"]*"[^>]*>/g, '<li class="text-usa-blue-300 flex items-center">');
    
    // Update checkmarks
    content = content.replace(/<span[^>]*class="[^"]*check[^"]*"[^>]*>/g, '<span class="text-usa-red mr-2">✓</span>');
    
    // Update breadcrumbs
    content = content.replace(/<nav[^>]*class="[^"]*breadcrumb[^"]*"[^>]*>/g, '<nav class="text-usa-blue-300 mb-4">');
    content = content.replace(/<a[^>]*class="[^"]*breadcrumb[^"]*"[^>]*>/g, '<a href="#" class="text-usa-blue hover:text-usa-red transition duration-200">');
    
    // Update alerts and notifications
    content = content.replace(/<div[^>]*class="[^"]*alert[^"]*"[^>]*>/g, '<div class="bg-usa-red-100 border-usa border-usa-red text-usa-red p-4 rounded-lg mb-4">');
    content = content.replace(/<div[^>]*class="[^"]*success[^"]*"[^>]*>/g, '<div class="bg-usa-blue-100 border-usa border-usa-blue text-usa-blue p-4 rounded-lg mb-4">');
    
    // Update tables with USA theme
    content = content.replace(/<table[^>]*class="[^"]*"[^>]*>/g, '<table class="w-full border-usa border-usa-blue rounded-lg overflow-hidden">');
    content = content.replace(/<th[^>]*class="[^"]*"[^>]*>/g, '<th class="bg-usa-blue text-usa-white px-4 py-2 text-left">');
    content = content.replace(/<td[^>]*class="[^"]*"[^>]*>/g, '<td class="border-usa border-usa-blue px-4 py-2 text-usa-blue">');
    
    // Update modals and overlays
    content = content.replace(/<div[^>]*class="[^"]*modal[^"]*"[^>]*>/g, '<div class="bg-usa-white border-usa border-usa-blue shadow-usa-lg rounded-lg p-6 max-w-md mx-auto">');
    content = content.replace(/<div[^>]*class="[^"]*overlay[^"]*"[^>]*>/g, '<div class="bg-usa-blue bg-opacity-50 fixed inset-0 flex items-center justify-center">');
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Applied USA theme styles to ${filePath}`);
}

// Function to update JavaScript components with USA theme
function updateJSComponentsUSA() {
    console.log('Updating JavaScript components with USA theme...');
    
    let content = fs.readFileSync('js/components.js', 'utf8');
    
    // Update navbar with USA theme
    content = content.replace(/<nav class="navbar[^"]*">/g, '<nav class="bg-usa-blue text-usa-white p-4 shadow-usa">');
    
    // Update navigation links
    content = content.replace(/class="text-[^"]*hover:text-[^"]*"/g, 'class="text-usa-white hover:text-usa-red px-3 py-2 rounded transition duration-200"');
    
    // Update footer with USA theme
    content = content.replace(/<footer[^>]*class="[^"]*"[^>]*>/g, '<footer class="bg-usa-blue text-usa-white py-8">');
    
    // Update footer links
    content = content.replace(/<a[^>]*class="[^"]*footer[^"]*"[^>]*>/g, '<a href="#" class="text-usa-white hover:text-usa-red transition duration-200">');
    
    fs.writeFileSync('js/components.js', content);
    console.log('✅ Updated JavaScript components with USA theme');
}

// Update all files
console.log('🇺🇸 Applying USA theme styles throughout the entire site...\n');

// Update JavaScript components first
updateJSComponentsUSA();

// Update all HTML files
htmlFiles.forEach(filePath => {
    if (fs.existsSync(filePath)) {
        applyUSAThemeStyles(filePath);
    } else {
        console.log(`⚠️  File not found: ${filePath}`);
    }
});

console.log('\n🎉 USA theme styles applied throughout the entire site!');
console.log('\n📝 Styles Applied:');
console.log('• Global: bg-usa-off-white text-usa-blue');
console.log('• Hero sections: bg-gradient-usa text-usa-white');
console.log('• Headings: text-usa-blue with proper sizing');
console.log('• Buttons: bg-usa-blue/usa-red with hover states and focus rings');
console.log('• Cards: bg-usa-white with usa-blue borders and shadows');
console.log('• Navigation: bg-usa-blue text-usa-white');
console.log('• Forms: border-usa-blue with focus rings');
console.log('• Icons: bg-usa-red with white icons');
console.log('• Testimonials: usa-red themed cards');
console.log('• Footer: bg-usa-blue text-usa-white');
console.log('\n🎨 Complete USA Patriotic Theme Applied!');
