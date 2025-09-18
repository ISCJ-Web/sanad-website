# Sanad Institute Website

A modern, elegant static website for Sanad Institute - an Islamic learning institute built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional layout with warm cream background, navy blue accents, and elegant golden typography
- **Minimalistic Typography**: Space Grotesk for headings and Inter for body text - modern and exciting fonts
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Components**: Smooth animations, hover effects, and modern UI elements
- **Islamic Theme**: Subtle geometric patterns and Islamic-inspired design elements
- **Static Website**: Optimized for static hosting and deployment
- **Comprehensive Sections**:
  - Hero section with call-to-action
  - About section with mission and vision
  - Instructors showcase with profile cards
  - Programs/curriculum overview
  - Contact information and newsletter signup

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **Custom CSS** - Additional styling and animations

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Homepage component
├── components/
│   ├── Navigation.tsx       # Navigation bar
│   ├── HeroSection.tsx      # Hero banner section
│   ├── AboutSection.tsx     # About us section
│   ├── InstructorsSection.tsx # Instructors showcase
│   ├── ProgramsSection.tsx  # Programs/curriculum
│   ├── EventsSection.tsx    # Events calendar
│   └── Footer.tsx           # Footer component
├── tailwind.config.js       # Tailwind configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies and scripts
```

## Design System

### Colors
- **Cream Background**: `#fdfaf5`
- **Navy Blue**: `#1f2d3d`
- **Gold Accent**: `#c89b3c`
- **Light Gold**: `#d4af37`

### Typography
- **Headings**: Space Grotesk (modern, minimalistic)
- **Body Text**: Inter (clean, readable)

### Components
- **Buttons**: Primary (gold) and secondary (outlined) styles
- **Cards**: White background with subtle shadows and hover effects
- **Animations**: Fade-in and slide-up transitions

## Customization

The website is designed to be easily customizable:

1. **Content**: Update text content in component files
2. **Colors**: Modify the color palette in `tailwind.config.js`
3. **Images**: Replace placeholder content with actual images
4. **Styling**: Adjust styles in `globals.css` or component files

## Deployment

The website is configured for static deployment and is currently deployed via Cloudflare pages

### Development

To mimic deploying to a server (e.g. to confirm everything displays as it should, etc.), run

```bash
npm run deploy
```

## License

This project is created for Sanad Institute. All rights reserved.
