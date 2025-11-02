# FinLite Website

A simple, lean static website for FinLite - Smart Budget & Spending Tracker for Beginners.

Built with Cloudflare Pages for fast, global deployment.

## Features

- **Lightweight**: Pure HTML/CSS, no JavaScript framework bloat
- **Fast**: Deployed on Cloudflare's global edge network
- **Responsive**: Mobile-first design that works on all devices
- **Themed**: Uses FinLite's official color scheme from the mobile app

## Project Structure

```
finlite-web/
├── public/              # Static files served by Cloudflare Pages
│   ├── index.html       # Homepage
│   ├── terms.html       # Terms of Use
│   ├── privacy.html     # Privacy Policy
│   └── styles.css       # All styles with FinLite theme
├── src/
│   └── index.js         # Cloudflare Worker (optional, for dynamic features)
├── wrangler.toml        # Cloudflare configuration
├── package.json         # Node dependencies
└── README.md            # This file
```

## Development

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
npm install
```

### Local Development

Run the development server:

```bash
npm run dev
```

Visit `http://localhost:8787` to see the website.

## Deployment

### Deploy to Cloudflare Pages

```bash
npm run deploy
```

This will deploy the `public/` directory to Cloudflare Pages.

### First-time Setup

1. Install Wrangler CLI globally (optional):
   ```bash
   npm install -g wrangler
   ```

2. Login to Cloudflare:
   ```bash
   wrangler login
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## Content

All content is sourced from:
- `FINLITE_WEBSITE_CONTENT_REFERENCE.md` - Copy, features, messaging
- `FINLITE_COLOR_THEME_DOCUMENTATION.md` - Colors, design system

## Color Theme

The website uses FinLite's official color palette:

- **Primary**: `#007BFE` (iOS Blue)
- **Secondary**: `#2DAFE7` (Light Blue)
- **Success**: `#22C55E` (Green)
- **Background**: `#FFFFFF` (White)
- **Muted**: `#8E8E93` (Grey)

## Pages

1. **Homepage** (`/`) - Hero, features, about, CTA
2. **Terms of Use** (`/terms.html`) - Legal terms
3. **Privacy Policy** (`/privacy.html`) - Privacy information

## Customization

### Update Colors

Edit CSS variables in `public/styles.css`:

```css
:root {
  --color-primary: #007BFE;
  --color-secondary: #2DAFE7;
  /* ... */
}
```

### Add New Pages

1. Create HTML file in `public/`
2. Use existing pages as template
3. Include navigation and footer
4. Link stylesheet: `<link rel="stylesheet" href="/styles.css">`

## Performance

- **No JavaScript**: Pure HTML/CSS for instant load
- **Minimal CSS**: Single stylesheet, ~8KB
- **Edge Caching**: Served from Cloudflare's global CDN
- **Fast TTFB**: < 50ms worldwide

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Copyright 2025 FinLite. All rights reserved.

## Contact

For questions or support:
- Email: support@finlite.app
- Website: https://finlite.app (coming soon)
