# 🏔️ VillaVilleKulla — Luxury Mountain Apartment Website

<div align="center">
  <img src="https://i.ibb.co/jvpjsmK1/logo.png" alt="Logo" width="200">
</div>


**Premium single-page website for a luxury mountain apartment rental in Kolašin, Montenegro**

[🌐 Live Demo](#) · [📸 Instagram](https://www.instagram.com/villavillekulla_kolasin/) · [🏨 Book on Booking.com](https://www.booking.com/hotel/me/vila-vilekula.sr.html)

---

</div>

## 📋 About The Project

VillaVilleKulla is a luxury mountain apartment located in Kolašin, Montenegro. This website serves as the official online presence for the property, designed to attract guests and provide all necessary information for booking.

The website features a premium, minimalist design inspired by the villa's architectural style — **white facade with black window frames** — translated into a digital experience that rivals €2000+ professional hotel websites.

### 🏡 About the Property

VillaVilleKulla is a premium mountain villa consisting of **two rental units**:

| Feature | Unit 1 | Unit 2 |
| :--- | :--- | :--- |
| **Capacity** | Up to 12 guests | Up to 6 guests |
| **Features** | Wood-burning fireplace, Private jacuzzi | Fully equipped |
| **Bathrooms** | Private bathroom in every room | Private bathroom in every room |

**Shared Amenities:**
*   🅿️ Parking with video surveillance
*   🌿 Organic garden (guests can pick fresh vegetables)
*   🏍️ Organized quad tours (via [Monte Quad Kolašin](https://www.instagram.com/montequadtourkolasin/))
*   🧖 Private Finnish sauna
*   📶 High-speed WiFi
*   ❄️ AC & Heating
*   🏔️ Mountain views of Bjelasica

**Location Highlights:**
| Destination | Distance |
| :--- | :--- |
| ✈️ Podgorica Airport | 90 km |
| 🏙️ City Center | 3 min |
| ⛷️ Ski Center 1450 | 9 min |
| ⛷️ Ski Center 1600 | 15 min |

---

## ✨ Website Features

### 🎨 Design
*   **Premium minimalist design** — Scandinavian-alpine luxury aesthetic.
*   **Color palette:** Warm white (`#FAFAF8`), near-black (`#0C0C0C`), gold accent (`#C6A664`).
*   **Typography:** *Cormorant Garamond* (headings) + *Inter* (body).
*   **Architectural feel** — sharp edges (0px border-radius), thin gold dividers, generous whitespace.
*   **Section contrast:** Dark/light section alternation for dramatic visual impact.

### 🌍 Bilingual (Montenegrin + English)
*   Full language switcher (CG / EN) in navigation.
*   Instant switch without page reload using `localStorage`.
*   Default language: Montenegrin (Crnogorski).

### 📱 Fully Responsive
*   **Desktop (1440px+):** Full premium layouts, parallax effects.
*   **Tablet (768px - 1024px):** Adapted grids, adjusted spacing.
*   **Mobile (< 768px):** Touch-optimized, hamburger menu, stacked layouts.
*   Mobile-specific fixes for `background-attachment: fixed` issues.

### 🎬 Animations & Interactions
*   **Page preloader:** Branded text animation with gold line.
*   **Hero section:** Staggered fade-ins (label → title → tagline → buttons).
*   **Scroll reveal:** Custom Intersection Observer system.
*   **Gallery lightbox:** Full-screen image viewer with keyboard and touch support.
*   **Navbar transition:** Transparent to solid white with blur on scroll.

### 📸 Gallery
*   **12 high-quality images** in a responsive grid layout.
*   **Desktop:** 3 columns × 4 rows | **Mobile:** 2 columns × 6 rows.
*   **Interactive:** Hover zoom + dark overlay + gold "+" icon.

### 🔍 SEO & Social Sharing
*   Optimized meta tags (OG tags for WhatsApp, Viber, Instagram).
*   Proper heading hierarchy (h1 → h2 → h3).
*   Custom favicon using villa logo.

---

## 🏗️ Tech Stack

| Technology | Usage |
| :--- | :--- |
| **HTML5** | Semantic structure |
| **CSS3** | Custom styling, Grid, Flexbox, Keyframes |
| **JavaScript** | Language switcher, Lightbox, Scroll logic |
| **Google Fonts** | Cormorant Garamond + Inter |
| **SVG Icons** | Custom thin-line gold icons |

> **Zero Dependencies:** Pure vanilla HTML/CSS/JS for maximum performance.

---

## 📁 Project Structure
```text
VillaVilleKulla/
├── index.html          # Complete single-page website
├── README.md           # Project documentation
└── assets/             # (Optional) Local assets
    ├── images/         # Property photos
    └── icons/          # SVG icons
```

---

## 🖼️ Sections Overview

| # | Section | Background | Description |
| :--- | :--- | :--- | :--- |
| 1 | **Navigation** | Transparent → White | Fixed navbar, logo, bilingual switcher |
| 2 | **Hero** | Image + overlay | Full-screen parallax with staggered animations |
| 3 | **O nama** | Warm white | Two-column layout (text + framed image) |
| 4 | **Pogodnosti** | Near-black | 6 feature cards with custom SVG icons |
| 5 | **Sauna** | Image + overlay | Cinematic parallax highlight section |
| 6 | **Vila** | Warm white | Units showcase + shared amenities |
| 7 | **Galerija** | Warm white | 12-image grid with custom lightbox |
| 8 | **Lokacija** | Light gray | Distance cards + Google Maps embed |
| 9 | **Kontakt** | Near-black | Contact info + form + host info |
| 10 | **Booking CTA** | Image + overlay | Full-width final call-to-action |
| 11 | **Footer** | Darkest black | Logo, social links, copyright |

---

## 🎨 Design System (CSS)

```css
:root {
  --bg-primary:        #FAFAF8;   /* Warm white */
  --bg-dark:           #0C0C0C;   /* Near-black */
  --text-primary:      #1A1A1A;   /* Near-black text */
  --accent:            #C6A664;   /* Warm gold */
}
```

**Typography:**
*   **Headings:** 'Cormorant Garamond', serif (Weight: 300).
*   **Body:** 'Inter', sans-serif (Weight: 300-400, Line-height: 1.8).

---

## 🖼️ Image Sources (ImgBB)

| Image | URL | Section |
| :--- | :--- | :--- |
| **Logo** | `i.ibb.co/5gbjkysw/IMG-3848.png` | Navbar, Footer |
| **Exterior** | `i.ibb.co/qMZj3ChM/IMG-3852.jpg` | Hero, Gallery |
| **Sauna** | `i.ibb.co/tPbcnwCw/IMG-3853.jpg` | Sauna, Gallery |
| **Interior 1** | `i.ibb.co/SZPRbbY/IMG-3846.jpg` | Gallery |
| **Interior 2** | `i.ibb.co/8nrQkCD8/IMG-3844.jpg` | Booking CTA |
| **Interior 3** | `i.ibb.co/W4tzf7Rh/IMG-3843.jpg` | About, Gallery |

*(And 7 additional interior images hosted on ImgBB)*

---


## 🚀 Deployment

1.  **GitHub Pages:** Push to `main` branch and enable Pages in settings.
2.  **Vercel/Netlify:** Drag and drop the folder for instant deployment.
3.  **Traditional:** Upload `index.html` via FTP to your host.

---

## 🐛 Known Issues & Fixes Applied

*   **Logo Visibility:** Removed CSS filters that caused black/white square issues.
*   **Mobile Scroll:** Added `overflow-x: hidden` to prevent horizontal jitter.
*   **Parallax Fix:** Adjusted `background-attachment` for iOS Safari compatibility.
*   **Readability:** Strengthened hero overlays and darkened body text to `#4A4A4A`.

---

## 👤 Owner / Host

**Sandra Bulatović**
*   📸 Instagram: [@sandrabulatovicc](https://www.instagram.com/sandrabulatovicc)
*   📞 Phone: [+382 68 668 068](tel:+38268668068)

---

## 📄 License

© 2026 **VillaVilleKulla, Kolašin**. All rights reserved. Built by **Nikola Lutovac**.

<div align="center">
Made with ❤️ in Montenegro
</div>
