# ElectroPro - Professional Electrician Website

A modern, mobile-first Next.js 16 website for a professional electrician sole trader. Built with TypeScript, Tailwind CSS v4, and optimized for SEO and performance.

## Features

- **Mobile-First Design**: Fully responsive across all devices
- **Modern UI/UX**: Professional design with smooth animations and transitions
- **SEO Optimized**: Complete metadata, semantic HTML, and structured content
- **Fast Performance**: Built with Next.js 16 for optimal loading speeds
- **Sections Include**:
  - Hero section with strong call-to-action
  - 6 comprehensive service cards
  - Why Choose Us section with key benefits
  - Customer testimonials
  - Contact form with service selection
  - Professional footer with social links

## Tech Stack

- **Framework**: Next.js 16.0.1
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with @tailwindcss/postcss
- **React**: 19.2.0

## Getting Started

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Project Structure

```
electric/
├── app/
│   ├── layout.tsx       # Root layout with SEO metadata
│   ├── page.tsx         # Main homepage with all sections
│   └── globals.css      # Global styles and theme variables
├── public/              # Static assets
└── package.json         # Dependencies
```

## Customization

### Colors

The site uses an amber/orange color scheme suitable for electrical services:
- Primary: `#f59e0b` (amber-500)
- Primary Dark: `#d97706` (amber-600)
- Secondary: `#1e40af` (blue-800)

Colors can be modified in `app/globals.css` CSS variables.

### Content

Update the following in `app/page.tsx`:
- Company name (currently "ElectroPro")
- Phone number
- Email address
- Service area
- Services offered
- Testimonials

### SEO

Metadata is configured in `app/layout.tsx`. Update:
- Title
- Description
- Keywords
- OpenGraph tags

## Performance Features

- Smooth scroll behavior
- Hover animations on service cards
- Mobile-optimized navigation
- Optimized images (using Next.js Image component when needed)
- CSS gradients instead of images
- Minimal JavaScript footprint

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Private project for sole trader use.
