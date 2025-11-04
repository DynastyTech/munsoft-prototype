# Munsoft Website

A modern, interactive website for Munsoft featuring 3D animations, dark/light mode, and smooth transitions built with React, Vite, and Tailwind CSS.

## Features

- ✨ **Modern UI/UX** - Beautiful, responsive design with smooth animations
- 🌓 **Dark/Light Mode** - Toggle between themes with persistent storage
- 🎨 **3D Animations** - Interactive 3D elements using Three.js and React Three Fiber
- 🎭 **Framer Motion** - Smooth page transitions and micro-interactions
- 📱 **Fully Responsive** - Works perfectly on all devices
- ⚡ **Fast Performance** - Built with Vite for optimal development and build times

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for React Three Fiber

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn/pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

The production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
# or
pnpm preview
```

## Project Structure

```
├── src/
│   ├── components/          # React components
│   │   ├── Navbar.jsx       # Navigation bar with theme toggle
│   │   ├── Hero.jsx         # Hero section with animated stats
│   │   ├── Solutions.jsx    # Solutions grid with hover effects
│   │   ├── Clients.jsx      # Scrolling clients list
│   │   ├── Academy.jsx      # Academy section with 3D cube
│   │   ├── Contact.jsx      # Contact form and info
│   │   ├── Footer.jsx       # Footer component
│   │   ├── FloatingCards.jsx # 3D floating cards
│   │   └── ParticleBackground.jsx # Particle animation
│   ├── contexts/            # React contexts
│   │   └── ThemeContext.jsx # Dark/light mode context
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind configuration
└── postcss.config.js       # PostCSS configuration
```

## Key Features Explained

### Dark/Light Mode
The theme is managed through React Context and persists in localStorage. Users can toggle between themes using the button in the navigation bar.

### 3D Animations
- **Hero Section**: Floating cards with 3D transforms
- **Academy Section**: Rotating 3D cube using Three.js
- **Particle Background**: Animated particle system

### Animations
- Smooth scroll animations using Framer Motion
- Hover effects on cards and buttons
- Animated number counters
- Auto-scrolling client list

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme. The theme uses a blue-to-purple gradient throughout.

### Content
Update the content in each component file to match your needs:
- Solutions data in `src/components/Solutions.jsx`
- Clients list in `src/components/Clients.jsx`
- Contact information in `src/components/Contact.jsx`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Copyright © Munsoft (2025). All Rights Reserved

