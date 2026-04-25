# TaxTeam – React Frontend

A premium, component-based React frontend for a tax consultancy firm, inspired by [taxteam.in](https://www.taxteam.in).

## ✨ Features

- **3D Tilt Cards** – real-time mouse-tracking `perspective + rotateX/rotateY` on Service & Testimonial cards
- **Floating Animations** – hero stat cards bob continuously with CSS keyframe animations
- **Scroll Reveal** – `IntersectionObserver`-driven fade + slide-up for every section
- **Gold Shimmer Text** – animated gradient text on headlines
- **Particle Effects** – drifting gold particles in the hero
- **Rotating Rings** – decorative concentric rings in the hero
- **Glassmorphism** – frosted-glass nav + stat cards
- **Form Interactions** – gold focus rings, success state transition on submit
- **Custom Scrollbar** – styled gold scrollbar

## 📁 Project Structure

```
taxteam/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── ServiceCard.jsx       ← 3D tilt card
│   │   ├── Services.jsx
│   │   ├── CtaBanner.jsx
│   │   ├── CustomerExperience.jsx
│   │   ├── WhyChooseUs.jsx
│   │   ├── TestiCard.jsx         ← 3D tilt card
│   │   ├── Testimonials.jsx
│   │   ├── QuoteForm.jsx
│   │   ├── Footer.jsx
│   │   └── SectionLabel.jsx      ← reusable gold label
│   ├── constants/
│   │   └── data.js               ← all site content in one place
│   ├── hooks/
│   │   ├── useMouseTilt.js       ← reusable 3D tilt hook
│   │   └── useScrollReveal.js    ← IntersectionObserver hook
│   ├── styles/
│   │   └── global.css            ← keyframes, utilities, scrollbar
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## 🎨 Colour Palette

| Token        | Value     |
|--------------|-----------|
| Navy Dark    | `#040d1f` |
| Navy         | `#0b1e3d` |
| Navy Light   | `#1a3a6e` |
| Gold         | `#c9a84c` |
| Gold Light   | `#f0d080` |
| Gold Dark    | `#a07830` |
| Off-white    | `#f7f4ee` |

## 🔧 Customisation

All site content (services, stats, testimonials, links) lives in **`src/constants/data.js`** — edit that file to update any copy without touching component logic.
