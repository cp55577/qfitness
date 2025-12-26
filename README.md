# Q Fitness Website

A modern, responsive static website for Q Fitness - a 24-hour gym in West Chester, PA, established in 1994.

## 🏗️ Tech Stack

- **Frontend Framework**: Static HTML/CSS/JavaScript
- **CSS Framework**: Tailwind CSS (via CDN)
- **UI Components**: Flowbite v2.2.1
- **Build Tool**: Gulp v5.0.1
- **Form Handling**: Formspree
- **Deployment**: GitHub Pages
- **Fonts**: Google Fonts (Roboto)

## 📁 Project Structure

```
qfitness/
├── about/              # About pages
│   ├── andrew.html
│   ├── michael-quarto.html
│   └── the-gym.html
├── community/         # Community pages
│   ├── blog.html
│   └── testimonials.html
├── membership/        # Membership pages
│   ├── membership-rates.html
│   └── schedule-bookings.html
├── services/          # Service pages
│   ├── group-classes.html
│   └── personal-training.html
├── images/            # Image assets
├── js/
│   └── components.js # Dynamic navbar/footer loader
├── index.html         # Homepage
├── contact.html       # Contact page
├── faq.html           # FAQ page
├── styles.css         # Main stylesheet
├── old-site.json      # Business data/content
├── gulpfile.js        # Build configuration
└── package.json       # Dependencies
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd qfitness
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Build the website:**
   ```bash
   npm run build
   ```
   This generates a `dist/` folder with the compiled site.

4. **Development mode (watch for changes):**
   ```bash
   npm run dev
   ```
   Automatically rebuilds when files change.

## 🔧 Available Scripts

- `npm run build` - Build the complete website to `dist/`
- `npm run dev` - Watch for changes and auto-rebuild
- `npm run watch` - Same as `dev`

## 🎨 Architecture

### Component System

The site uses **client-side JavaScript** to dynamically load reusable components:

- **Navbar**: Loaded via `js/components.js` into `<nav class="navbar"></nav>`
- **Footer**: Loaded via `js/components.js` into `<footer class="footer"></footer>`

The `components.js` file automatically handles path prefixes for nested pages (e.g., `/about/`, `/services/`).

### Styling

- **Tailwind CSS**: Utility-first CSS framework loaded via CDN
- **Custom CSS**: `styles.css` contains custom design system and component styles
- **Flowbite**: Pre-built Tailwind components for UI elements

### Data Management

- **old-site.json**: Centralized JSON file containing business information, services, equipment, and founder details
- Currently used as a reference; can be integrated for dynamic content loading if needed

## 📝 Key Features

- ✅ Fully responsive design (mobile-first)
- ✅ Dynamic navigation and footer components
- ✅ Contact form integration (Formspree)
- ✅ Instagram embed support
- ✅ Google Maps integration
- ✅ SEO optimized (meta tags, structured data)
- ✅ Accessible markup and ARIA labels

## 🌐 Deployment

### GitHub Pages

The site is deployed to **GitHub Pages**:

1. Build the site: `npm run build`
2. Commit the `dist/` folder (or configure GitHub Actions for automatic builds)
3. Enable GitHub Pages in repository settings
4. Point to the `dist/` folder or `main` branch

### Custom Domain

To use a custom domain with GitHub Pages:
1. Add a `CNAME` file in the root with your domain
2. Configure DNS records as per GitHub Pages instructions
3. GitHub automatically provides HTTPS

## 📧 Form Configuration

Contact forms use **Formspree**:
- Endpoint: `https://formspree.io/f/mrbnwoen`
- No API keys required
- Handles spam protection automatically

See `FORMSETUP.md` for detailed configuration.

## 🔄 Build Process

The Gulp build process:
1. **Processes HTML files** - Currently configured for `@@include()` syntax (if using includes)
2. **Copies assets** - Images, CSS, and JS files to `dist/`
3. **Outputs to dist/** - Ready-to-deploy static site

Note: The site currently uses JavaScript-based component loading rather than Gulp includes, but the build system is available for future use.

## 🎯 Development Workflow

1. Make changes to HTML, CSS, or JS files
2. Run `npm run build` to generate `dist/` folder
3. Test locally (serve `dist/` folder or use a local server)
4. Commit and push changes
5. GitHub Pages automatically deploys (if configured)

## 📚 Documentation

- `FORMSETUP.md` - Formspree configuration guide
- `GITHUB-PAGES-SETUP.md` - GitHub Pages deployment guide
- `RESEND_SETUP.md` - Alternative email service setup (Resend)
- `TURNSTILE_SETUP.md` - Cloudflare Turnstile integration guide

## 🛠️ Maintenance

### Updating Content

- **Business Info**: Edit `old-site.json` (reference file)
- **Page Content**: Edit individual HTML files
- **Navigation**: Edit `js/components.js` (navbar/footer templates)
- **Styles**: Edit `styles.css` or inline Tailwind classes

### Adding New Pages

1. Create new HTML file in appropriate directory
2. Include navbar placeholder: `<nav class="navbar"></nav>`
3. Include footer placeholder: `<footer class="footer"></footer>`
4. Load `js/components.js` script before closing `</body>` tag
5. Follow existing page structure and styling patterns

## 📄 License

ISC

## 👥 Contact

For questions about the website, contact Q Fitness:
- Phone: 610-574-2300
- Website: https://www.qfitness.com
- Address: 1306 Wilmington Pike, West Chester, PA 19382
