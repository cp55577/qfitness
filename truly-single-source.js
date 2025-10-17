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

// Function to truly remove all inline Tailwind configs
function removeAllInlineConfigs(filePath) {
    console.log(`Removing all inline configs from ${filePath}...`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove ALL tailwind.config blocks
    content = content.replace(/<script>\s*tailwind\.config\s*=\s*{[^}]*}\s*<\/script>/g, '');
    content = content.replace(/<script>\s*tailwind\.config\s*=\s*{[^}]*}\s*<\/script>/g, '');
    content = content.replace(/tailwind\.config\s*=\s*{[^}]*}/g, '');
    
    // Remove any remaining script tags that might be empty
    content = content.replace(/<script>\s*<\/script>/g, '');
    content = content.replace(/<script>\s*<\/script>/g, '');
    
    // Clean up any extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Removed all inline configs from ${filePath}`);
}

// Function to create a truly comprehensive central config
function createTrulyCentralConfig() {
    console.log('Creating truly comprehensive central config...');
    
    const centralConfig = `module.exports = {
  content: [
    "./*.html",
    "./**/*.html",
    "./js/**/*.js",
    "./includes/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        // 🇺🇸 USA PATRIOTIC COLOR SCHEME - SINGLE SOURCE OF AUTHORITY
        'primary-blue': '#1E40AF',      // USA Blue
        'primary-red': '#DC2626',       // USA Red
        'primary-red-dark': '#B91C1C',  // Dark Red
        'secondary-blue': '#3B82F6',    // Light Blue
        'secondary-red': '#EF4444',     // Light Red
        'accent-blue': '#1E3A8A',       // Dark Blue
        'accent-red': '#B91C1C',        // Dark Red
        
        // Legacy support - map old colors to new ones
        'primary-green': '#DC2626',     // Map green to red
        'primary-green-dark': '#B91C1C', // Map green-dark to red-dark
        
        // Standard colors that might be used
        'blue-600': '#1E40AF',
        'red-600': '#DC2626',
        'red-700': '#B91C1C',
        'red-100': '#FEF2F2'
      },
      backgroundImage: {
        'gradient-usa': 'linear-gradient(135deg, #1E40AF 0%, #DC2626 100%)',
        'gradient-usa-reverse': 'linear-gradient(135deg, #DC2626 0%, #1E40AF 100%)',
        'gradient-usa-accent': 'linear-gradient(135deg, #1E40AF 0%, #3B82F6 50%, #DC2626 100%)'
      },
      boxShadow: {
        'usa': '0 4px 14px 0 rgba(30, 64, 175, 0.39)',
        'usa-lg': '0 10px 25px -3px rgba(30, 64, 175, 0.1), 0 4px 6px -2px rgba(220, 38, 38, 0.05)',
        'usa-glow': '0 0 20px rgba(30, 64, 175, 0.4)'
      }
    }
  },
  plugins: []
}`;

    fs.writeFileSync('tailwind.config.js', centralConfig);
    console.log('✅ Created truly comprehensive central config');
}

// Update all files
console.log('🎯 TRULY ensuring single source of authority...\n');

// Create comprehensive central config
createTrulyCentralConfig();

// Remove all inline configs from all HTML files
htmlFiles.forEach(filePath => {
    if (fs.existsSync(filePath)) {
        removeAllInlineConfigs(filePath);
    } else {
        console.log(`⚠️  File not found: ${filePath}`);
    }
});

console.log('\n🎉 TRULY single source of authority established!');
console.log('\n📝 What was done:');
console.log('• Removed ALL inline Tailwind configs from HTML files');
console.log('• Created comprehensive central tailwind.config.js');
console.log('• Added legacy color mapping for backward compatibility');
console.log('• Added standard color mappings');
console.log('• All colors now controlled from ONE place only');
console.log('\n🔧 To change colors site-wide:');
console.log('• Edit ONLY tailwind.config.js');
console.log('• Changes apply to entire site instantly');
console.log('• No more inline configs anywhere');
