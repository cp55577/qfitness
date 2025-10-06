# Q Fitness Website

## 🏗️ Build System Setup

This project uses **Server-Side Includes** with Gulp for a modular, maintainable website structure.

### 📁 Project Structure

```
qfitness/
├── includes/           # Reusable components
│   ├── head.html      # Common head section
│   ├── navbar.html    # Navigation menu
│   └── footer.html    # Footer section
├── dist/              # Built website (deploy this)
├── images/            # Images and assets
├── styles.css         # Main stylesheet
└── *.html            # Page templates with includes
```

### 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build the website:**
   ```bash
   npm run build
   ```

3. **Development mode (auto-rebuild):**
   ```bash
   npm run dev
   ```

### 📝 How to Use Includes

In your HTML files, use the `@@include()` syntax:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    @@include('includes/head.html')
</head>
<body class="scheme-ocean">
    @@include('includes/navbar.html')
    
    <!-- Your page content here -->
    
    @@include('includes/footer.html')
</body>
</html>
```

### 🔧 Available Scripts

- `npm run build` - Build the complete website
- `npm run dev` - Watch for changes and auto-rebuild
- `npm run watch` - Same as dev

### 📦 What Gets Built

The build process:
1. **Processes includes** - Replaces `@@include()` with actual content
2. **Copies assets** - Images, CSS, JS files to dist/
3. **Outputs to dist/** - Ready-to-deploy website

### 🌐 Deployment

Deploy the contents of the `dist/` folder to your web server.

### 🎨 Customization

- **Navigation**: Edit `includes/navbar.html`
- **Footer**: Edit `includes/footer.html`  
- **Head section**: Edit `includes/head.html`
- **Styles**: Edit `styles.css`

All changes will be automatically included in the next build!
