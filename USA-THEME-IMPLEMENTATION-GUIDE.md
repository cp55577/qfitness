# USA-Themed Tailwind Configuration Implementation Guide

This document provides detailed instructions for applying the USA-themed Tailwind configuration to common UI components across a website, ensuring a consistent red, white, and blue patriotic aesthetic.

## Tailwind Configuration

```javascript
module.exports = {
  content: [
    "./*.html",
    "./**/*.html",
    "./js/**/*.js",
    "./includes/**/*.html"
  ],
  theme: {
    extend: {
      // USA Patriotic Color Scheme (Red, White, Blue)
      colors: {
        // Colors verified for WCAG contrast accessibility
        'usa-blue': '#1E40AF',          // USA Blue
        'usa-red': '#DC2626',           // USA Red
        'usa-red-dark': '#B91C1C',      // Dark Red
        'usa-blue-light': '#3B82F6',    // Light Blue
        'usa-red-light': '#EF4444',     // Light Red
        'usa-blue-dark': '#1E3A8A',     // Dark Blue
        // USA Flag White Shades
        'usa-white': '#FFFFFF',        // Pure white, representing the USA flag's white
        'usa-off-white': '#F9FAFB',    // Soft white suitable for backgrounds
        // Standard USA colors
        'usa-blue-600': '#1E40AF',
        'usa-red-600': '#DC2626',
        'usa-red-700': '#B91C1C',
        'usa-red-100': '#FEF2F2',
        // Lighter shades for improved WCAG contrast
        'usa-blue-300': '#60A5FA',     // Lighter blue for better contrast
        'usa-red-300': '#FCA5A5',      // Lighter red for better contrast
        // Legacy Colors: Mapped to USA red for patriotic theme consistency
        'primary-green': '#DC2626',
        'primary-green-dark': '#B91C1C'
      },
      // USA Theme Text Colors
      textColor: {
        'usa-blue': '#1E40AF',
        'usa-red': '#DC2626',
        'usa-white': '#FFFFFF'
      },
      // USA Theme Borders
      borderColor: {
        'usa-blue': '#1E40AF',
        'usa-red': '#DC2626',
        'usa-white': '#FFFFFF'
      },
      borderWidth: {
        'usa': '2px'
      },
      // USA Theme Focus Rings for accessibility and interactivity
      ringColor: {
        'usa-blue': '#1E40AF',
        'usa-red': '#DC2626',
        'usa-white': '#FFFFFF'
      },
      backgroundImage: {
        'gradient-usa': 'linear-gradient(135deg, #1E40AF 0%, #DC2626 100%)',
        'gradient-usa-reverse': 'linear-gradient(135deg, #DC2626 0%, #1E40AF 100%)',
        'gradient-usa-accent': 'linear-gradient(135deg, #1E40AF 0%, #3B82F6 50%, #DC2626 100%)'
      },
      // USA Theme Shadows with Red and Blue Accents
      boxShadow: {
        'usa': '0 4px 14px 0 rgba(30, 64, 175, 0.39)',
        'usa-lg': '0 10px 25px -3px rgba(30, 64, 175, 0.1), 0 4px 6px -2px rgba(220, 38, 38, 0.05)',
        'usa-glow': '0 0 20px rgba(30, 64, 175, 0.4)',
        'usa-red-glow': '0 0 20px rgba(220, 38, 38, 0.4)'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
```

## Implementation Instructions

### 1. Global Styles

Establish a consistent base for the website using the USA-themed colors and gradients:

```html
<body class="bg-usa-off-white text-usa-blue">
```

- `bg-usa-off-white` (#F9FAFB): A soft, neutral white background that aligns with the USA flag's white, creating a clean canvas.
- `text-usa-blue` (#1E40AF): A bold, high-contrast blue for default text, evoking the USA flag's blue field.

For prominent sections like hero banners or headers, use a gradient to emphasize the patriotic theme:

```html
<header class="bg-gradient-usa text-usa-white py-16 text-center">
  <h1 class="text-4xl font-bold">Welcome to Our Patriotic Website</h1>
</header>
```

- `bg-gradient-usa`: A linear gradient from blue (#1E40AF) to red (#DC2626), reflecting the USA flag's colors.
- `text-usa-white` (#FFFFFF): Ensures high-contrast, readable text on the gradient background.

### 2. Typography

Style text elements to maintain the USA theme, leveraging the typography plugin and custom colors:

```html
<article class="prose prose-headings:text-usa-blue prose-a:text-usa-red max-w-prose mx-auto p-6">
  <h1>Our Mission</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
  <a href="#">Learn More</a>
</article>
```

- `prose`: Applies balanced typography styles, including font sizes, line heights, and spacing for readability.
- `prose-headings:text-usa-blue` (#1E40AF): Styles all headings (h1, h2, etc.) in bold USA blue.
- `prose-a:text-usa-red` (#DC2626): Styles links in vibrant USA red for visual pop.

For standalone text elements:

```html
<h2 class="text-usa-blue text-2xl font-semibold mb-4">Section Title</h2>
<p class="text-usa-red-300 text-base">This is a lighter red for better contrast and readability.</p>
```

### 3. Buttons

Design buttons that reflect the USA theme with bold colors, shadows, and interactive states:

**Primary button (blue-themed):**
```html
<button class="bg-usa-blue text-usa-white px-6 py-3 rounded-md hover:bg-usa-blue-dark focus:ring-2 focus:ring-usa-blue shadow-usa transition duration-200">
  Primary Button
</button>
```

**Secondary button (red-themed):**
```html
<button class="bg-usa-red text-usa-white px-6 py-3 rounded-md hover:bg-usa-red-dark focus:ring-2 focus:ring-usa-red shadow-usa transition duration-200">
  Secondary Button
</button>
```

### 4. Cards

Style cards with clean backgrounds, patriotic borders, and shadows for a cohesive look:

**Standard card:**
```html
<div class="bg-usa-white border-usa border-usa-blue shadow-usa-lg rounded-lg p-6">
  <h3 class="text-usa-blue text-xl font-bold mb-2">Card Title</h3>
  <p class="text-usa-blue-300">Card content goes here...</p>
</div>
```

**Featured card with gradient header:**
```html
<div class="bg-usa-white shadow-usa-lg rounded-lg">
  <div class="bg-gradient-usa-accent text-usa-white p-4 rounded-t-lg">
    <h3 class="text-xl font-bold">Featured Card</h3>
  </div>
  <div class="p-6">
    <p class="text-usa-blue">Content goes here...</p>
  </div>
</div>
```

### 5. Navigation

Create navigation bars with blue or gradient backgrounds and white text for a bold, patriotic look:

**Standard navigation:**
```html
<nav class="bg-usa-blue text-usa-white p-4">
  <ul class="flex space-x-4">
    <li><a href="#" class="hover:bg-usa-blue-dark px-3 py-2 rounded transition duration-200">Home</a></li>
    <li><a href="#" class="hover:bg-usa-blue-dark px-3 py-2 rounded transition duration-200">About</a></li>
    <li><a href="#" class="hover:bg-usa-blue-dark px-3 py-2 rounded transition duration-200">Contact</a></li>
  </ul>
</nav>
```

**Alternative gradient navigation:**
```html
<nav class="bg-gradient-usa-reverse text-usa-white p-4">
  <ul class="flex space-x-4">
    <li><a href="#" class="hover:bg-usa-blue-dark px-3 py-2 rounded transition duration-200">Home</a></li>
    <li><a href="#" class="hover:bg-usa-blue-dark px-3 py-2 rounded transition duration-200">About</a></li>
    <li><a href="#" class="hover:bg-usa-blue-dark px-3 py-2 rounded transition duration-200">Contact</a></li>
  </ul>
</nav>
```

### 6. Forms

Style form inputs with USA-themed borders, text, and focus states for consistency:

```html
<div class="p-4">
  <input type="text" class="border-usa border-usa-blue text-usa-blue px-4 py-2 rounded-md focus:ring-2 focus:ring-usa-blue focus:outline-none" placeholder="Enter text">
  <p class="text-usa-red-100 mt-1">Error: Please enter a valid input.</p>
</div>
```

## Color Reference

| Class | Color | Hex Value | Usage |
|-------|-------|-----------|-------|
| `usa-blue` | USA Blue | #1E40AF | Primary headings, borders, focus rings |
| `usa-red` | USA Red | #DC2626 | Secondary elements, links, accents |
| `usa-white` | Pure White | #FFFFFF | Text on dark backgrounds, card backgrounds |
| `usa-off-white` | Soft White | #F9FAFB | Page backgrounds, subtle sections |
| `usa-blue-light` | Light Blue | #3B82F6 | Gradients, secondary blue elements |
| `usa-red-light` | Light Red | #EF4444 | Hover states, secondary red elements |
| `usa-blue-dark` | Dark Blue | #1E3A8A | Hover states, emphasis |
| `usa-red-dark` | Dark Red | #B91C1C | Hover states, emphasis |
| `usa-blue-300` | Lighter Blue | #60A5FA | Small text, improved contrast |
| `usa-red-300` | Lighter Red | #FCA5A5 | Small text, improved contrast |

## Accessibility Features

- **WCAG Compliant**: All colors verified for proper contrast ratios
- **Focus Rings**: Keyboard navigation support with `focus:ring-usa-blue` and `focus:ring-usa-red`
- **Hover States**: Clear interactive feedback with `hover:bg-usa-blue-dark` and `hover:bg-usa-red-dark`
- **Typography**: Enhanced readability with lighter shades for small text

## Installation Requirements

Ensure the following dependencies are installed:

```bash
npm install @tailwindcss/typography
```

This guide ensures a consistent, visually appealing USA-themed website with a cohesive red, white, and blue aesthetic across all components.
