# Christopher Park - Personal Website

A modern, responsive personal website built with React featuring an interactive WebGL liquid chrome animation.

## Features

- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Interactive WebGL Animation**: Custom liquid chrome effect using OGL
- **Modern React Architecture**: Clean component structure with React Router
- **Performance Optimized**: Minimal bundle size and efficient rendering

## Tech Stack

- React 18
- React Router v6
- OGL (WebGL library)
- CSS3 with responsive design
- Three.js ecosystem

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Project Structure

```
src/
├── App.js          # Main app component and routing
├── App.css         # All styles (merged from multiple files)
├── LiquidChrome.js # WebGL animation component
├── index.js        # App entry point
└── pages/          # Page components
    ├── Bookshelf.js
    ├── Musings.js
    └── Photos.js
```

## Development

The site is optimized for modern browsers and uses:
- CSS Grid/Flexbox for responsive layouts
- CSS custom properties for consistent theming
- Semantic HTML for accessibility
- React best practices

## Deployment

Deployed to GitHub Pages via:
```bash
npm run deploy
```

The site uses BrowserRouter for clean URLs and includes proper CNAME configuration for custom domain support.