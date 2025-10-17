#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// List of all HTML files to update
const htmlFiles = [
    'index.html',
    'about/michael-quarto.html',
    'about/the-gym.html',
    'community/blog.html',
    'community/testimonials.html',
    'contact.html',
    'faq.html',
    'membership/membership-rates.html',
    'membership/schedule-bookings.html',
    'services/group-classes.html',
    'services/personal-training.html'
];

// Modern typography improvements
const typographyUpdates = [
    // Hero section improvements
    {
        find: /class="text-5xl md:text-6xl font-bold/g,
        replace: 'class="text-6xl md:text-7xl font-black tracking-tight leading-tight'
    },
    {
        find: /class="text-4xl font-bold/g,
        replace: 'class="text-5xl font-black tracking-tight'
    },
    {
        find: /class="text-3xl font-bold/g,
        replace: 'class="text-4xl font-black tracking-tight'
    },
    {
        find: /class="text-2xl font-bold/g,
        replace: 'class="text-3xl font-black tracking-tight'
    },
    
    // Paragraph improvements
    {
        find: /class="text-xl text-gray-600/g,
        replace: 'class="text-2xl text-gray-700 font-light leading-relaxed'
    },
    {
        find: /class="text-lg text-gray-600/g,
        replace: 'class="text-xl text-gray-700 font-light leading-relaxed'
    },
    {
        find: /class="text-gray-600/g,
        replace: 'class="text-gray-700 font-light leading-relaxed'
    },
    
    // Button improvements
    {
        find: /class="inline-block bg-primary-green hover:bg-primary-green-dark text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300 transform hover:scale-105/g,
        replace: 'class="inline-block bg-primary-green hover:bg-primary-green-dark text-white font-semibold py-5 px-10 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl tracking-wide'
    },
    
    // Link improvements
    {
        find: /class="text-primary-green hover:text-primary-green-dark font-semibold/g,
        replace: 'class="text-primary-green hover:text-primary-green-dark font-bold text-lg tracking-wide transition-all duration-200 hover:tracking-wider'
    },
    
    // Hero paragraph improvements
    {
        find: /class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/g,
        replace: 'class="text-2xl md:text-3xl mb-12 max-w-4xl mx-auto text-white font-light leading-relaxed tracking-wide'
    },
    
    // Section heading improvements
    {
        find: /class="text-center mb-12"/g,
        replace: 'class="text-center mb-16"'
    },
    {
        find: /class="text-center mb-8"/g,
        replace: 'class="text-center mb-12"'
    },
    {
        find: /class="text-center mb-6"/g,
        replace: 'class="text-center mb-8"'
    }
];

function updateFile(filePath) {
    try {
        if (!fs.existsSync(filePath)) {
            console.log(`⚠️  File not found: ${filePath}`);
            return false;
        }

        let content = fs.readFileSync(filePath, 'utf8');
        let hasChanges = false;

        // Apply all typography updates
        typographyUpdates.forEach(update => {
            const newContent = content.replace(update.find, update.replace);
            if (newContent !== content) {
                content = newContent;
                hasChanges = true;
            }
        });

        if (hasChanges) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`✅ Updated: ${filePath}`);
            return true;
        } else {
            console.log(`⏭️  No changes needed: ${filePath}`);
            return false;
        }
    } catch (error) {
        console.error(`❌ Error updating ${filePath}:`, error.message);
        return false;
    }
}

console.log('🎨 Modernizing typography across all pages...\n');

let updatedCount = 0;
let totalFiles = htmlFiles.length;

htmlFiles.forEach(filePath => {
    if (updateFile(filePath)) {
        updatedCount++;
    }
});

console.log(`\n✨ Typography modernization complete!`);
console.log(`📊 Updated ${updatedCount} out of ${totalFiles} files`);
console.log(`\n🚀 Your site now has modern typography across all pages!`);
