# 🏔️ VillaVilleKulla — Luxury Mountain Apartment Website

<div align="center">

![VillaVilleKulla Logo](https://i.ibb.co/5gbjkysw/IMG-3848.png)

**Premium single-page website for a luxury mountain apartment rental in Kolašin, Montenegro**

[🌐 Live Demo](#) · [📸 Instagram](https://www.instagram.com/villavillekulla_kolasin/) · [🏨 Book on Booking.com](https://www.booking.com/hotel/me/vila-vilekula.sr.html)

---

</div>

## 📋 About The Project

VillaVilleKulla is a luxury mountain apartment located in Kolašin, Montenegro. This website serves as the official online presence for the property, designed to attract guests and provide all necessary information for booking.

The website features a premium, minimalist design inspired by the villa's architectural style — **white facade with black window frames** — translated into a digital experience that rivals €2000+ professional hotel websites.

### 🏡 About the Property

VillaVilleKulla is a premium mountain villa consisting of **two rental units**:

| | Unit 1 | Unit 2 |
|---|---|---|
| **Capacity** | Up to 12 guests | Up to 6 guests |
| **Features** | Wood-burning fireplace, Private jacuzzi | Fully equipped |
| **Bathrooms** | Private bathroom in every room | Private bathroom in every room |

**Shared Amenities:**
- 🅿️ Parking with video surveillance
- 🌿 Organic garden (guests can pick fresh vegetables)
- 🏍️ Organized quad tours (via [Monte Quad Kolašin](https://www.instagram.com/montequadtourkolasin/))
- 🧖 Private Finnish sauna
- 📶 High-speed WiFi
- ❄️ AC & Heating
- 🏔️ Mountain views of Bjelasica

**Location Highlights:**
| Destination | Distance |
|---|---|
| ✈️ Podgorica Airport | 90 km |
| 🏙️ City Center | 3 min |
| ⛷️ Ski Center 1450 | 9 min |
| ⛷️ Ski Center 1600 | 15 min |

---

## ✨ Website Features

### 🎨 Design
- **Premium minimalist design** — Scandinavian-alpine luxury aesthetic
- **Color palette:** Warm white (#FAFAF8), near-black (#0C0C0C), gold accent (#C6A664)
- **Typography:** Cormorant Garamond (headings) + Inter (body) — elegant serif + clean sans-serif
- **Architectural feel** — sharp edges (0px border-radius), thin gold dividers, generous whitespace
- **Dark/light section alternation** for dramatic visual contrast

### 🌍 Bilingual (Montenegrin + English)
- Full language switcher (CG / EN) in navigation
- Every text element switches instantly — no page reload
- Language preference saved in `localStorage`
- Default language: Montenegrin (Crnogorski)

### 📱 Fully Responsive
- **Desktop** (1440px+): Full premium layouts, parallax effects
- **Tablet** (768px - 1024px): Adapted grids, adjusted spacing
- **Mobile** (< 768px): Touch-optimized, hamburger menu, stacked layouts
- No horizontal scroll on any device
- Mobile-specific fixes for `background-attachment: fixed` issues

### 🎬 Animations & Interactions
- **Page preloader** — VillaVilleKulla text with gold line animation
- **Hero section** — Staggered fade-in animations (label → title → tagline → buttons → scroll indicator)
- **Scroll reveal** — Custom Intersection Observer system, elements fade in on scroll
- **Gallery lightbox** — Full-screen image viewer with prev/next, keyboard support, counter
- **Navbar transition** — Transparent on hero → solid white with blur on scroll
- **Hover effects** — Subtle scale, shadow, and color transitions throughout
- **Smooth scrolling** — CSS scroll-behavior: smooth

### 📸 Gallery
- **12 high-quality images** in a responsive grid layout
- **Desktop:** 3 columns × 4 rows (all equal size)
- **Tablet/Mobile:** 2 columns × 6 rows (Instagram-style grid)
- **Hover effect:** Zoom + dark overlay + gold "+" icon
- **Lightbox:** Full-screen viewer, arrow key navigation, escape to close

### 📞 Contact & Booking
- Direct phone link: [+382 68 668 068](tel:+38268668068)
- WhatsApp floating button with pulse animation
- Booking.com integration (CTA buttons throughout the site)
- Contact form (frontend only)
- Host info: Sandra Bulatović with Instagram link

### 🔍 SEO & Social Sharing
- Optimized meta tags (title, description, keywords)
- Open Graph tags for rich link previews (WhatsApp, Viber, Instagram, Facebook, Telegram)
- Twitter Card meta tags
- Custom favicon using villa logo
- Semantic HTML5 structure
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text on all images
- Lazy loading on images

---

## 🏗️ Tech Stack

| Technology | Usage |
|---|---|
| **HTML5** | Semantic structure |
| **CSS3** | Custom styling, Grid, Flexbox, animations |
| **JavaScript** | Language switcher, navbar scroll, lightbox, animations |
| **Google Fonts** | Cormorant Garamond + Inter |
| **SVG Icons** | Custom thin-line gold icons (no emoji) |
| **Google Maps Embed** | Interactive location map |

> No frameworks, no build tools, no dependencies — pure vanilla HTML/CSS/JS for maximum performance and simplicity.

---

## 📁 Project Structure
VillaVilleKulla/
├── index.html # Complete single-page website
├── README.md # Project documentation
└── assets/ # (Optional) Local assets
├── images/ # Property photos
└── icons/ # SVG icons


---

## 🖼️ Sections Overview

| # | Section | Background | Description |
|---|---|---|---|
| 1 | **Navigation** | Transparent → White | Fixed navbar, logo, bilingual switcher, Book Now CTA |
| 2 | **Hero** | Image + dark overlay | Full-screen hero with parallax, staggered text animations |
| 3 | **O nama / About** | Warm white | Two-column layout — text + image with gold frame |
| 4 | **Pogodnosti / Amenities** | Near-black | 6 feature cards with custom SVG icons |
| 5 | **Sauna Highlight** | Image + overlay | Cinematic parallax section highlighting private sauna |
| 6 | **Vila / Villa** | Warm white | Two units showcase + shared amenities with SVG icons |
| 7 | **Galerija / Gallery** | Warm white | 12-image responsive grid with lightbox |
| 8 | **Lokacija / Location** | Light gray | Distance cards + Google Maps embed |
| 9 | **Kontakt / Contact** | Near-black | Contact info + form + host info |
| 10 | **Booking CTA** | Image + overlay | Full-width call-to-action with parallax |
| 11 | **Footer** | Darkest black | Logo, nav links, social, copyright |

---

## 🎨 Design System

### Colors
```css
--bg-primary:        #FAFAF8   /* Warm white */
--bg-secondary:      #F2F0EB   /* Warm light gray */
--bg-dark:           #0C0C0C   /* Near-black */
--bg-dark-secondary: #161616   /* Slightly lighter dark */
--text-primary:      #1A1A1A   /* Near-black text */
--text-secondary:    #4A4A4A   /* Dark gray body text */
--text-light:        #FAFAF8   /* Light text on dark */
--text-muted-light:  #A0A0A0   /* Muted on dark */
--accent:            #C6A664   /* Warm gold */
--accent-hover:      #D4B877   /* Light gold */
--accent-dark:       #A68B4B   /* Dark gold */

/* Headings */
font-family: 'Cormorant Garamond', serif;
font-weight: 300; /* Light — elegant */

/* Body */
font-family: 'Inter', sans-serif;
font-weight: 300-400;
line-height: 1.8;

/* Labels */
font-family: 'Inter', sans-serif;
font-size: 11-13px;
text-transform: uppercase;
letter-spacing: 0.2em;

Icons
All icons are inline SVGs with:

stroke: #C6A664 (gold)
stroke-width: 1 (thin, elegant)
fill: none (outline only)
width/height: 40px (amenities) or 24px (location)
🌐 External Links

Service	URL
Booking.com	https://www.booking.com/hotel/me/vila-vilekula.sr.html
Instagram (Villa)	https://www.instagram.com/villavillekulla_kolasin/
Instagram (Host)	https://www.instagram.com/sandrabulatovicc
Instagram (Quad Tours)	https://www.instagram.com/montequadtourkolasin/
WhatsApp	https://wa.me/38268668068
Phone	tel:+38268668068
Google Maps	Embedded Map
🖼️ Image Sources

All images are hosted on ImgBB:

Image	URL	Used In
Logo	i.ibb.co/5gbjkysw/IMG-3848.png	Navbar, Footer, Favicon
Exterior	i.ibb.co/qMZj3ChM/IMG-3852.jpg	Hero, Gallery
Sauna	i.ibb.co/tPbcnwCw/IMG-3853.jpg	Sauna Section, Gallery
Interior 1	i.ibb.co/SZPRbbY/IMG-3846.jpg	Gallery
Interior 2	i.ibb.co/8nrQkCD8/IMG-3844.jpg	Gallery, Booking CTA
Interior 3	i.ibb.co/W4tzf7Rh/IMG-3843.jpg	About, Gallery
Interior 4	i.ibb.co/PZCvZTCv/434897524.jpg	Gallery
Interior 5	i.ibb.co/ZRKC2xZ4/434897758.jpg	Gallery
Interior 6	i.ibb.co/K4qxzRV/434898803.jpg	Gallery
Interior 7	i.ibb.co/qYtx6JLN/434899543.jpg	Gallery
Interior 8	i.ibb.co/G3NBsLKn/434899731.jpg	Gallery
Interior 9	i.ibb.co/pVNCqzS/434900281.jpg	Gallery
Interior 10	i.ibb.co/3yBTbtz6/434901531.jpg	Gallery
🚀 Deployment

This is a static website — no server-side processing needed.

Option 1: GitHub Pages
# Push to GitHub
git add .
git commit -m "Initial commit - VillaVilleKulla website"
git push origin main

# Enable GitHub Pages in repo Settings → Pages → Source: main branch

Option 2: Netlify
# Drag and drop the project folder to netlify.com/drop
# Or connect GitHub repo for auto-deploy

Option 3: Vercel
npm i -g vercel
vercel

Option 4: Traditional Hosting
# Upload index.html (and assets/ if any) via FTP to your web host

Custom Domain
After deploying, connect your custom domain (e.g., villavillekulla.me) through your hosting provider's DNS settings.

📱 Browser Support

Browser	Support
Chrome 90+	✅ Full
Firefox 90+	✅ Full
Safari 14+	✅ Full
Edge 90+	✅ Full
iOS Safari	✅ Full (with mobile-specific fixes)
Chrome Android	✅ Full
🐛 Known Issues & Fixes Applied

Issue	Fix
Logo showing as black/white square	Removed CSS filters (brightness, invert) from logo
Hero image showing only roof	Changed to new image + object-position: center 40%
Mobile horizontal scroll	Added overflow-x: hidden, fixed parallax on mobile
Text hard to read on light backgrounds	Darkened body text color to #4A4A4A
Text hard to read on hero	Strengthened overlay gradient + added text-shadows
Gallery images not loading on mobile	Fixed clip-path animations + background-attachment
Language switcher hidden on mobile	Repositioned to top of mobile menu
Back-to-top button invisible on light sections	Changed to dark button style (#1A1A1A)
"Made with ❤️" too faint	Increased opacity to 0.6, gold heart accent
👤 Owner / Host

Sandra Bulatović

📸 Instagram: @sandrabulatovicc
📞 Phone: +382 68 668 068
📄 License

© 2025 VillaVilleKulla, Kolašin. All rights reserved.

This website was built exclusively for VillaVilleKulla. All images are property of the owner.

<div align="center">
Made with ❤️ in Montenegro

VillaVilleKulla — Vaše planinsko utočište | Your Mountain Retreat

</div> ```
