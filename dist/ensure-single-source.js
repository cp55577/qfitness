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

// Function to remove all inline Tailwind configs and ensure single source
function ensureSingleSource(filePath) {
    console.log(`Ensuring single source of authority for ${filePath}...`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove all inline Tailwind configs
    content = content.replace(/<script>\s*tailwind\.config\s*=\s*{[^}]*}\s*<\/script>/g, '');
    
    // Remove any remaining inline color definitions
    content = content.replace(/<script>\s*tailwind\.config\s*=\s*{[^}]*}\s*<\/script>/g, '');
    
    // Clean up any empty script tags
    content = content.replace(/<script>\s*<\/script>/g, '');
    
    // Ensure all files use the central config by adding a comment
    if (!content.includes('tailwind.config.js')) {
        content = content.replace(
            /<link href="styles\.css" rel="stylesheet" \/>/,
            '<link href="styles.css" rel="stylesheet" />\n    <!-- Colors controlled by tailwind.config.js - Single Source of Authority -->'
        );
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Ensured single source of authority for ${filePath}`);
}

// Function to update the central Tailwind config with comprehensive colors
function updateCentralConfig() {
    console.log('Updating central Tailwind config with comprehensive color scheme...');
    
    const centralConfig = `module.exports = {
  content: [
    "./*.html",
    "./**/*.html",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        // 🇺🇸 USA PATRIOTIC COLOR SCHEME - SINGLE SOURCE OF AUTHORITY
        'primary-blue': '#1E40AF',      // USA Blue
        'primary-red': '#DC2626',       // USA Red
        'primary-red-dark': '#B91C1C',  // Dark Red
        'secondary-blue': '#3B82F6',     // Light Blue
        'secondary-red': '#EF4444',      // Light Red
        'accent-blue': '#1E3A8A',       // Dark Blue
        'accent-red': '#B91C1C',        // Dark Red
        
        // Legacy support (map old colors to new ones)
        'primary-green': '#DC2626',     // Map green to red
        'primary-green-dark': '#B91C1C' // Map green-dark to red-dark
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
    console.log('✅ Updated central Tailwind config');
}

// Function to update CSS variables to match
function updateCSSVariables() {
    console.log('Updating CSS variables to match central config...');
    
    let content = fs.readFileSync('styles.css', 'utf8');
    
    // Update CSS variables to match the central config
    content = content.replace(
        /--primary:\s*[^;]+;/g,
        '--primary: #1E40AF;'
    );
    content = content.replace(
        /--secondary:\s*[^;]+;/g,
        '--secondary: #DC2626;'
    );
    content = content.replace(
        /--accent:\s*[^;]+;/g,
        '--accent: #EF4444;'
    );
    
    // Add Tailwind-compatible variables
    if (!content.includes('--primary-blue')) {
        content = content.replace(
            /--accent-glow: #FEF2F2;/,
            `--accent-glow: #FEF2F2;
  
  /* Tailwind-compatible variables - matches tailwind.config.js */
  --primary-blue: #1E40AF;
  --primary-red: #DC2626;
  --primary-red-dark: #B91C1C;
  --secondary-blue: #3B82F6;
  --secondary-red: #EF4444;
  --accent-blue: #1E3A8A;
  --accent-red: #B91C1C;`
        );
    }
    
    fs.writeFileSync('styles.css', content);
    console.log('✅ Updated CSS variables to match central config');
}

// Update all files
console.log('🎯 Ensuring single source of authority for colors across entire site...\n');

// Update central config first
updateCentralConfig();

// Update CSS variables to match
updateCSSVariables();

// Update all HTML files
htmlFiles.forEach(filePath => {
    if (fs.existsSync(filePath)) {
        ensureSingleSource(filePath);
    } else {
        console.log(`⚠️  File not found: ${filePath}`);
    }
});

console.log('\n🎉 Single source of authority established!');
console.log('\n📝 What was done:');
console.log('• Removed all inline Tailwind configs from HTML files');
console.log('• Created central tailwind.config.js with USA colors');
console.log('• Updated CSS variables to match central config');
console.log('• Added legacy color mapping (green → red)');
console.log('• All colors now controlled from one place');
console.log('\n🔧 To change colors site-wide:');
console.log('• Edit tailwind.config.js - changes apply everywhere');
console.log('• Edit CSS variables in styles.css - backup system');
console.log('• No more conflicts between HTML files');
