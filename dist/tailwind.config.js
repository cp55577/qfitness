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
          'usa-blue': '#1E3A8A',          // Navy Blue
          'usa-red': '#DC2626',           // USA Red
          'usa-red-dark': '#B91C1C',      // Dark Red
          'usa-blue-light': '#3B82F6',    // Light Blue
          'usa-red-light': '#EF4444',     // Light Red
          'usa-blue-dark': '#1E2A5E',     // Darker Navy Blue
          
          // USA Flag White Shades
          'usa-white': '#FFFFFF',        // Pure white, representing the USA flag's white
          'usa-off-white': '#F9FAFB',    // Soft white suitable for backgrounds
          
          // Standard USA colors
          'usa-blue-600': '#1E3A8A',
          'usa-red-600': '#DC2626',
          'usa-red-700': '#B91C1C',
          'usa-red-100': '#FEF2F2',
          
          // Lighter shades for improved WCAG contrast
          'usa-blue-300': '#60A5FA',     // Lighter blue for better contrast
          'usa-red-300': '#FCA5A5',      // Lighter red for better contrast
          
          // Legacy Colors
          'primary-green': '#DC2626',     // Mapped to USA red for patriotic theme consistency
          'primary-green-dark': '#B91C1C' // Mapped to USA red for patriotic theme consistency
        },
        // USA Theme Text Colors
        textColor: {
          'usa-blue': '#1E3A8A',
          'usa-red': '#DC2626',
          'usa-white': '#FFFFFF'
        },
        // USA Theme Borders
        borderColor: {
          'usa-blue': '#1E3A8A',
          'usa-red': '#DC2626',
          'usa-white': '#FFFFFF'
        },
        borderWidth: {
          'usa': '2px'
        },
        // USA Theme Focus Rings for accessibility and interactivity
        ringColor: {
          'usa-blue': '#1E3A8A',
          'usa-red': '#DC2626',
          'usa-white': '#FFFFFF'
        },
        backgroundImage: {
          'gradient-usa': 'linear-gradient(135deg, #1E3A8A 0%, #DC2626 100%)',
          'gradient-usa-reverse': 'linear-gradient(135deg, #DC2626 0%, #1E3A8A 100%)',
          'gradient-usa-accent': 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 50%, #DC2626 100%)'
        },
        // USA Theme Shadows with Red and Blue Accents
        boxShadow: {
          'usa': '0 4px 14px 0 rgba(30, 58, 138, 0.39)',
          'usa-lg': '0 10px 25px -3px rgba(30, 58, 138, 0.1), 0 4px 6px -2px rgba(220, 38, 38, 0.05)',
          'usa-glow': '0 0 20px rgba(30, 58, 138, 0.4)',
          'usa-red-glow': '0 0 20px rgba(220, 38, 38, 0.4)'
        }
      }
    },
    // Ensure '@tailwindcss/typography' is installed via 'npm install @tailwindcss/typography'
    plugins: [
      // Plugins for enhanced USA-themed typography
      require('@tailwindcss/typography')
    ]
  }