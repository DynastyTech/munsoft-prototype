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

## Deployment

This website can be deployed on Vercel (recommended) or GitHub Pages.

### Deploying to Vercel (Recommended)

Vercel provides the easiest and fastest deployment experience for Vite + React applications.

#### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Push your code to GitHub** (if not already done):
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Go to [vercel.com](https://vercel.com)** and sign in (or create an account)

3. **Import your project**:
   - Click "Add New..." → "Project"
   - Import your GitHub repository
   - Vercel will auto-detect it's a Vite project

4. **Configure deployment** (usually auto-detected):
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

5. **Click "Deploy"**

6. **Your site will be live** at: `https://your-project-name.vercel.app`

#### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **For production deployment**:
   ```bash
   vercel --prod
   ```

#### Vercel Features

- ✅ Automatic deployments on every push to `main`
- ✅ Preview deployments for pull requests
- ✅ Custom domain support
- ✅ SSL certificates (automatic)
- ✅ Global CDN
- ✅ Environment variables support

### Deploying to GitHub Pages

This website is also configured for deployment on GitHub Pages. The deployment is automated via GitHub Actions.

#### Setting Up GitHub Pages

1. Go to your repository settings on GitHub
2. Navigate to **Pages** in the left sidebar
3. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
4. The GitHub Actions workflow will automatically deploy your site when you push to the `main` branch

### Access Your Live Site

Once deployed via GitHub Pages, your site will be available at:
```
https://dynastytech.github.io/munsoft-prototype/
```

### Manual Deployment

The site is automatically deployed on every push to the `main` branch. You can also manually trigger a deployment by:
1. Going to the **Actions** tab in your GitHub repository
2. Selecting the **Deploy to GitHub Pages** workflow
3. Clicking **Run workflow**

**Note**: The project is currently configured for Vercel deployment (`base: '/'`). For GitHub Pages, you'll need to update `vite.config.js` to set `base: '/munsoft-prototype/'` instead.

### Troubleshooting

**Vercel:**
- Ensure `vercel.json` is in the root directory
- Check build logs in Vercel dashboard
- Verify Node.js version (Vercel auto-detects, but you can specify in `package.json`)

**GitHub Pages:**
- Check the Actions tab to see if the deployment workflow succeeded
- Ensure the base path in `vite.config.js` matches your repository name
- Wait a few minutes for GitHub Pages to propagate changes

## License

Copyright © Munsoft (2025). All Rights Reserved

