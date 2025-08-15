# 🚀 MEME COIN - Neo-Brutalism Landing Page

A bold, unconventional React landing page for meme coins built with the Neo-Brutalism design philosophy. Features chunky borders, bright neon colors, raw geometric shapes, and playful animations.

## ✨ Features

- **Neo-Brutalism Design**: Bold typography, clashing colors, raw geometric shapes
- **Modern Tech Stack**: React 19 + TypeScript + Vite + SCSS
- **Responsive Design**: Mobile-first approach with asymmetric grid layouts
- **Design System**: Comprehensive SCSS variables and utility classes
- **Performance**: Optimized builds with Vite and modern React patterns

## 🎨 Design Philosophy

### Neo-Brutalism Aesthetics

- **Bold Typography**: Space Grotesk for headings, Inter for body text
- **Color Palette**: Bright pastels + neon accents (#FF00A0, #00FFD1, #FFE600)
- **Layout**: Asymmetrical grid + Flexbox, avoid perfect alignment
- **Borders**: Thick (3px+), black or high contrast
- **Shadows**: Harsh, offset, 4px to 12px, solid black
- **Buttons**: Chunky, blocky, with bold hover/focus states

### Design Tokens

- **Spacing**: 4px base unit system (4px, 8px, 16px, 24px, 32px, etc.)
- **Typography**: Modular scale from 12px to 128px
- **Borders**: 2px to 8px thickness options
- **Shadows**: Multiple shadow variants with different offsets
- **Breakpoints**: Mobile-first responsive design

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite 7
- **Styling**: SCSS with CSS Modules support
- **Fonts**: Google Fonts (Space Grotesk, Inter, JetBrains Mono)
- **Animations**: CSS animations + Framer Motion ready
- **Routing**: React Router DOM (ready for implementation)

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── styles/             # SCSS files and design system
│   ├── _variables.scss # Design tokens and variables
│   ├── _global.scss    # Global styles and utilities
│   └── App.scss        # Main app styles
├── assets/             # Images, SVGs, fonts
├── types/              # TypeScript type definitions
└── utils/              # Utility functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd crypto_lainding
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Using the Design System

### Colors

```scss
// Use color functions
background-color: color("neon-pink");
color: color("neon-cyan");
border-color: color("black");
```

### Spacing

```scss
// Use spacing functions
padding: spacing("6");
margin: spacing("8");
```

### Typography

```scss
// Use font-size functions
font-size: font-size("4xl");
font-weight: map-get($font-weights, "bold");
```

### Utility Classes

```html
<!-- Spacing -->
<div class="p-6 m-8">Content</div>

<!-- Colors -->
<div class="bg-neon-pink text-white">Neon Pink</div>

<!-- Typography -->
<h1 class="text-6xl font-black">Heading</h1>

<!-- Layout -->
<div class="grid grid-cols-2 md:grid-cols-4 gap-6">Grid</div>

<!-- Responsive -->
<div class="hidden md:block">Hidden on mobile</div>
```

## 🔧 Customization

### Adding New Colors

```scss
// In _variables.scss
$colors: (
  // ... existing colors
  "custom-color": #ff5733
);
```

### Adding New Spacing Values

```scss
// In _variables.scss
$spacing: (
  // ... existing spacing
  "custom": 2.5rem
);
```

### Creating New Components

```scss
// Component-specific SCSS
.my-component {
  @extend .card;
  background-color: color("pastel-purple");

  &:hover {
    transform: translate(-6px, -6px);
    box-shadow: shadow("xl");
  }
}
```

## 📱 Responsive Design

The design system uses a mobile-first approach with these breakpoints:

- **xs**: 0px (mobile)
- **sm**: 640px (large mobile/small tablet)
- **md**: 768px (tablet)
- **lg**: 1024px (desktop)
- **xl**: 1280px (large desktop)
- **2xl**: 1536px (extra large desktop)

## 🙏 Acknowledgments

- **Design Inspiration**: Neo-Brutalism movement
- **Fonts**: Google Fonts (Space Grotesk, Inter, JetBrains Mono)
- **Icons**: Emoji and custom SVGs
- **Community**: React and design system communities
