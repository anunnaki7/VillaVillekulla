import { useEffect, useState } from 'react';

// ─── Translations ────────────────────────────────────────────
const T = {
  cg: {
    nav_home: 'Početna',
    nav_about: 'O nama',
    nav_vila: 'Vila',
    vila_title: 'Vila',
    vila_subtitle: 'Dva ekskluzivna prostora za savršen odmor',
    vila_u1_title: 'Prva jedinica — do 12 gostiju',
    vila_u1_desc: 'Prostrana jedinica idealna za veće porodice ili grupe prijatelja. Uživajte u toplini kamina na drva dok napolju padaju pahulje, ili se opustite u privatnom đakuziju nakon aktivnog dana na planini. Savršen spoj rustičnog šarma i modernog komfora.',
    vila_u1_a1: 'Kamin na drva',
    vila_u1_a2: 'Privatni đakuzi',
    vila_u1_a3: 'Kapacitet: 12 osoba',
    vila_u1_a4: 'Privatno kupatilo u svakoj sobi',
    vila_u2_title: 'Druga jedinica — do 6 gostiju',
    vila_u2_desc: 'Intimna i elegantna jedinica za manje grupe ili parove koji traže mir i privatnost. Potpuno opremljena sa svim pogodnostima za bezbrižan boravak u srcu planine.',
    vila_u2_a1: 'Potpuno opremljeno',
    vila_u2_a2: 'Kapacitet: 6 osoba',
    vila_u2_a3: 'Privatno kupatilo u svakoj sobi',
    vila_shared_title: 'Zajedničke pogodnosti',
    vila_s1_title: 'Parking sa video nadzorom',
    vila_s2_title: 'Organski vrt',
    vila_s2_desc: 'Uberi svježi luk, izvadi krompir — uživaj u ukusima pravo iz naše bašte',
    vila_s3_title: 'Organizovane quad ture',
    vila_s3_desc: 'U saradnji sa Monte Quad Kolašin',
    nav_gallery: 'Galerija',
    nav_location: 'Lokacija',
    nav_contact: 'Kontakt',
    nav_book: 'Rezervišite',
    hero_location: 'Kolašin, Crna Gora',
    hero_tagline: 'Vaše planinsko utočište',
    hero_book: 'Rezervišite',
    hero_explore: 'Istražite',
    hero_scroll: 'Skrolujte',
    about_label: 'O NAMA',
    about_heading_1: 'Dobrodošli u',
    about_heading_2: 'Villa Villekulla',
    about_p1: 'Dobrodošli u Villa Villekulla — vaše savršeno utočište u srcu Kolašina. Smješten u mirnom okruženju, samo 3 minuta od centra grada, naš apartman pruža savršen spoj komfora, elegancije i prirode.',
    about_p2: 'Bilo da tražite zimsku avanturu na skijalištima ili ljetnji bijeg u planine, Villa Villekulla je idealan izbor za nezaboravan odmor. Vila raspolaže i privatnom saunom za potpuno opuštanje nakon aktivnog dana u prirodi.',
    about_cta: 'Pogledajte galeriju →',
    amenities_label: 'POGODNOSTI',
    amenities_title: 'Sve što vam treba',
    a1_title: 'Planinski pogled',
    a1_desc: 'Zadivljujući pogled na planine Bjelasice',
    a2_title: 'Privatna sauna',
    a2_desc: 'Finska sauna za potpuno opuštanje',
    a3_title: 'Besplatan parking',
    a3_desc: 'Privatni parking za goste',
    a4_title: 'Brzi WiFi',
    a4_desc: 'Besplatan internet u cijelom objektu',
    a5_title: 'Klima i grijanje',
    a5_desc: 'Komfor u svakom godišnjem dobu',
    a6_title: 'Potpuno opremljeno',
    a6_desc: 'Kuhinja i sve pogodnosti za ugodan boravak',
    sauna_label: 'PREMIUM ISKUSTVO',
    sauna_title: 'Privatna sauna',
    sauna_sub: 'Opustite se nakon dana na planini',
    sauna_book: 'Rezervišite',
    gallery_label: 'GALERIJA',
    gallery_title: 'Pogledajte naš prostor',
    gallery_sub: 'Svaki kutak osmišljen s pažnjom i stilom',
    location_label: 'LOKACIJA',
    location_title: 'Idealna pozicija',
    location_sub: 'U srcu Kolašina, blizu svega',
    d1_name: 'Aerodrom Podgorica',
    d2_name: 'Centar grada',
    d3_name: 'Ski centar 1450',
    d4_name: 'Ski centar 1600',
    contact_label: 'KONTAKT',
    contact_title: 'Javite nam se',
    contact_sub: 'Rado ćemo odgovoriti na sva vaša pitanja',
    contact_phone: 'Telefon',
    contact_book_btn: 'Rezervišite na Booking.com',
    host_label: 'Domaćin',
    form_name: 'Ime i prezime',
    form_email: 'Email adresa',
    form_message: 'Vaša poruka...',
    form_submit: 'Pošaljite poruku',
    form_success_title: 'Hvala!',
    form_success_text: 'Vaša poruka je primljena. Javićemo vam se uskoro.',
    cta_title: 'Rezervišite vaš boravak',
    cta_btn: 'Rezervišite na Booking.com',
    footer_copyright: '© 2025 Villa Villekulla, Kolašin. Sva prava zadržana.',
    footer_made: 'Made with ❤️ in Montenegro',
    preloader_text: 'Villa Villekulla',
  },
  en: {
    nav_home: 'Home',
    nav_about: 'About',
    nav_vila: 'Villa',
    vila_title: 'Villa',
    vila_subtitle: 'Two Exclusive Spaces for a Perfect Getaway',
    vila_u1_title: 'Unit One — Up to 12 Guests',
    vila_u1_desc: "A spacious unit ideal for larger families or groups of friends. Enjoy the warmth of a wood-burning fireplace while snowflakes fall outside, or unwind in the private jacuzzi after an active day on the mountain. A perfect blend of rustic charm and modern comfort.",
    vila_u1_a1: 'Wood-Burning Fireplace',
    vila_u1_a2: 'Private Jacuzzi',
    vila_u1_a3: 'Capacity: 12 Guests',
    vila_u1_a4: 'Private Bathroom in Every Room',
    vila_u2_title: 'Unit Two — Up to 6 Guests',
    vila_u2_desc: "An intimate and elegant unit for smaller groups or couples seeking peace and privacy. Fully equipped with all amenities for a carefree stay in the heart of the mountain.",
    vila_u2_a1: 'Fully Equipped',
    vila_u2_a2: 'Capacity: 6 Guests',
    vila_u2_a3: 'Private Bathroom in Every Room',
    vila_shared_title: 'Shared Amenities',
    vila_s1_title: 'Parking with Video Surveillance',
    vila_s2_title: 'Organic Garden',
    vila_s2_desc: 'Pick fresh onions, dig up potatoes — enjoy flavours straight from our garden',
    vila_s3_title: 'Organized Quad Tours',
    vila_s3_desc: 'In partnership with Monte Quad Kolašin',
    nav_gallery: 'Gallery',
    nav_location: 'Location',
    nav_contact: 'Contact',
    nav_book: 'Book Now',
    hero_location: 'Kolašin, Montenegro',
    hero_tagline: 'Your Mountain Retreat',
    hero_book: 'Book Now',
    hero_explore: 'Explore',
    hero_scroll: 'Scroll',
    about_label: 'ABOUT US',
    about_heading_1: 'Welcome to',
    about_heading_2: 'Villa Villekulla',
    about_p1: 'Welcome to Villa Villekulla — your perfect retreat in the heart of Kolašin. Nestled in a peaceful setting, just 3 minutes from the city center, our apartment offers a perfect blend of comfort, elegance, and nature.',
    about_p2: "Whether you're seeking a winter adventure on the ski slopes or a summer escape to the mountains, Villa Villekulla is the ideal choice for an unforgettable vacation. The villa features a private sauna for complete relaxation after an active day in nature.",
    about_cta: 'View gallery →',
    amenities_label: 'AMENITIES',
    amenities_title: 'Everything You Need',
    a1_title: 'Mountain View',
    a1_desc: 'Stunning views of Bjelasica mountains',
    a2_title: 'Private Sauna',
    a2_desc: 'Finnish sauna for complete relaxation',
    a3_title: 'Free Parking',
    a3_desc: 'Private parking for guests',
    a4_title: 'High-Speed WiFi',
    a4_desc: 'Free internet throughout the property',
    a5_title: 'AC & Heating',
    a5_desc: 'Comfort in every season',
    a6_title: 'Fully Equipped',
    a6_desc: 'Kitchen and all amenities for a comfortable stay',
    sauna_label: 'PREMIUM EXPERIENCE',
    sauna_title: 'Private Sauna',
    sauna_sub: 'Unwind after a day on the mountain',
    sauna_book: 'Book Now',
    gallery_label: 'GALLERY',
    gallery_title: 'Explore Our Space',
    gallery_sub: 'Every corner designed with care and style',
    location_label: 'LOCATION',
    location_title: 'Ideal Position',
    location_sub: 'In the heart of Kolašin, close to everything',
    d1_name: 'Podgorica Airport',
    d2_name: 'City Center',
    d3_name: 'Ski Center 1450',
    d4_name: 'Ski Center 1600',
    contact_label: 'CONTACT',
    contact_title: 'Get in Touch',
    contact_sub: 'We will be happy to answer all your questions',
    contact_phone: 'Phone',
    contact_book_btn: 'Book on Booking.com',
    host_label: 'Host',
    form_name: 'Full name',
    form_email: 'Email address',
    form_message: 'Your message...',
    form_submit: 'Send Message',
    form_success_title: 'Thank you!',
    form_success_text: 'Your message has been received. We will get back to you soon.',
    cta_title: 'Book Your Stay',
    cta_btn: 'Book on Booking.com',
    footer_copyright: '© 2025 Villa Villekulla, Kolašin. All rights reserved.',
    footer_made: 'Made with ❤️ in Montenegro',
    preloader_text: 'Villa Villekulla',
  }
} as const;

type Lang = 'cg' | 'en';
type TKey = keyof typeof T.cg;

const BOOKING_URL = 'https://www.booking.com/hotel/me/vila-vilekula.sr.html';
const WHATSAPP_URL = 'https://wa.me/38268668068';
const INSTAGRAM_URL = 'https://www.instagram.com/villavillekulla_kolasin/';
const INSTAGRAM_SANDRA = 'https://www.instagram.com/sandrabulatovicc?igsh=aHVlcDFvd2Y1dWxx&utm_source=qr';

// 12 images total — 5 originals + 7 new (573376916 removed)
const GALLERY_IMAGES = [
  { src: 'https://i.ibb.co/qMZj3ChM/IMG-3852.jpg',     alt: 'Villa Villekulla exterior' },
  { src: 'https://i.ibb.co/tPbcnwCw/IMG-3853.jpg',     alt: 'Private Sauna' },
  { src: 'https://i.ibb.co/SZPRbbY/IMG-3846.jpg',      alt: 'Interior 1' },
  { src: 'https://i.ibb.co/8nrQkCD8/IMG-3844.jpg',     alt: 'Interior 2' },
  { src: 'https://i.ibb.co/W4tzf7Rh/IMG-3843.jpg',     alt: 'Interior 3' },
  { src: 'https://i.ibb.co/PZCvZTCv/434897524.jpg',    alt: 'Villa Villekulla view 6' },
  { src: 'https://i.ibb.co/ZRKC2xZ4/434897758.jpg',    alt: 'Villa Villekulla view 7' },
  { src: 'https://i.ibb.co/K4qxzRV/434898803.jpg',     alt: 'Villa Villekulla view 8' },
  { src: 'https://i.ibb.co/qYtx6JLN/434899543.jpg',    alt: 'Villa Villekulla view 9' },
  { src: 'https://i.ibb.co/G3NBsLKn/434899731.jpg',    alt: 'Villa Villekulla view 10' },
  { src: 'https://i.ibb.co/pVNCqzS/434900281.jpg',     alt: 'Villa Villekulla view 11' },
  { src: 'https://i.ibb.co/3yBTbtz6/434901531.jpg',    alt: 'Villa Villekulla view 12' },
];

// ─── Component ───────────────────────────────────────────────
export default function App() {
  const [lang, setLang] = useState<Lang>(() => {
    try { return (localStorage.getItem('vvk_lang') as Lang) || 'cg'; }
    catch { return 'cg'; }
  });
  const [preloaderHidden, setPreloaderHidden] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [backToTopVisible, setBackToTopVisible] = useState(false);

  const t = (key: TKey): string => T[lang][key];

  // Language switch
  const switchLang = (l: Lang) => {
    setLang(l);
    try { localStorage.setItem('vvk_lang', l); } catch { /* noop */ }
  };

  // Preloader
  useEffect(() => {
    const timer = setTimeout(() => setPreloaderHidden(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  // Scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 80);
      setBackToTopVisible(window.scrollY > window.innerHeight * 0.5);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body overflow lock
  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
  }, [menuOpen]);

  useEffect(() => {
    document.body.classList.toggle('lightbox-open', lightboxOpen);
  }, [lightboxOpen]);

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            // Animate gold lines
            const lines = entry.target.querySelectorAll('.gold-line');
            lines.forEach(line => line.classList.add('animate'));
          }
        });
      },
      { threshold: 0.15 }
    );

    // Also observe gold lines directly
    const lineObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.5 }
    );

    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    reveals.forEach(el => observer.observe(el));

    const lines = document.querySelectorAll('.gold-line');
    lines.forEach(el => lineObserver.observe(el));

    return () => { observer.disconnect(); lineObserver.disconnect(); };
  }, [preloaderHidden]);

  // Active nav section
  useEffect(() => {
    const sections = ['hero', 'about', 'vila', 'amenities', 'gallery', 'location', 'contact'];
    const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav-links a');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            navLinks.forEach(link => {
              link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
            });
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Keyboard lightbox
  useEffect(() => {
    if (!lightboxOpen) return;
    const handle = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowRight') setLightboxIndex(i => (i + 1) % GALLERY_IMAGES.length);
      if (e.key === 'ArrowLeft') setLightboxIndex(i => (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    };
    window.addEventListener('keydown', handle);
    return () => window.removeEventListener('keydown', handle);
  }, [lightboxOpen]);

  const openLightbox = (idx: number) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <>
      {/* ── PRELOADER ─────────────────────────────── */}
      <div id="preloader" className={preloaderHidden ? 'hidden' : ''}>
        <p className="preloader-title">Villa Villekulla</p>
        <div className="preloader-line" />
      </div>

      {/* ── NAVBAR ────────────────────────────────── */}
      <nav id="navbar" className={navScrolled ? 'scrolled' : ''} aria-label="Main navigation">
        <div className="nav-inner">
          {/* Logo */}
          <a href="#hero" className="nav-logo" onClick={e => { e.preventDefault(); scrollTo('hero'); }} aria-label="Villa Villekulla home">
            <img src="https://i.ibb.co/5gbjkysw/IMG-3848.png" alt="Villa Villekulla Logo" />
          </a>

          {/* Center links */}
          <ul className="nav-links">
            {[
              { key: 'nav_home' as TKey, id: 'hero' },
              { key: 'nav_about' as TKey, id: 'about' },
              { key: 'nav_vila' as TKey, id: 'vila' },
              { key: 'nav_gallery' as TKey, id: 'gallery' },
              { key: 'nav_location' as TKey, id: 'location' },
              { key: 'nav_contact' as TKey, id: 'contact' },
            ].map(item => (
              <li key={item.id}>
                <a href={`#${item.id}`} onClick={e => { e.preventDefault(); scrollTo(item.id); }}>
                  {t(item.key)}
                </a>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div className="nav-right">
            <div className="lang-toggle" role="group" aria-label="Language switcher">
              <button className={`lang-btn ${lang === 'cg' ? 'active' : ''}`} onClick={() => switchLang('cg')}>CG</button>
              <span className="lang-separator">|</span>
              <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => switchLang('en')}>EN</button>
            </div>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn-gold nav-book-btn">
              {t('nav_book')}
            </a>
            {/* Hamburger */}
            <button
              className={`hamburger ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* ── MOBILE MENU ───────────────────────────── */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} role="dialog" aria-modal="true" aria-label="Navigation menu">

        {/* Close (X) button — absolute top-right */}
        <button
          className="mobile-close-btn"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >✕</button>

        {/* Logo */}
        <div className="mobile-menu-logo">
          <img src="https://i.ibb.co/5gbjkysw/IMG-3848.png" alt="Villa Villekulla Logo" />
        </div>

        {/* Gold line 1 — below logo */}
        <div className="mobile-menu-gold-line" aria-hidden="true" />

        {/* Nav links */}
        <ul className="mobile-nav-links">
          {[
            { key: 'nav_home' as TKey, id: 'hero' },
            { key: 'nav_about' as TKey, id: 'about' },
            { key: 'nav_vila' as TKey, id: 'vila' },
            { key: 'nav_gallery' as TKey, id: 'gallery' },
            { key: 'nav_location' as TKey, id: 'location' },
            { key: 'nav_contact' as TKey, id: 'contact' },
          ].map(item => (
            <li key={item.id}>
              <a href={`#${item.id}`} onClick={e => { e.preventDefault(); scrollTo(item.id); }}>
                {t(item.key)}
              </a>
            </li>
          ))}
        </ul>

        {/* Gold line 2 — below links */}
        <div className="mobile-menu-gold-line" aria-hidden="true" />

        {/* Language switcher — between gold line 2 and Book button */}
        <div className="mobile-lang-top" role="group" aria-label="Language switcher">
          <button
            className={`mobile-lang-btn ${lang === 'cg' ? 'active' : ''}`}
            onClick={() => switchLang('cg')}
            aria-pressed={lang === 'cg'}
          >CG</button>
          <span className="mobile-lang-sep" aria-hidden="true">|</span>
          <button
            className={`mobile-lang-btn ${lang === 'en' ? 'active' : ''}`}
            onClick={() => switchLang('en')}
            aria-pressed={lang === 'en'}
          >EN</button>
        </div>

        {/* Book Now button */}
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-book-btn"
        >{t('nav_book')}</a>

      </div>

      {/* ── HERO ──────────────────────────────────── */}
      <section id="hero" aria-label="Hero section">
        {/* Image wrapper — z-index:1, object-fit:cover fills hero with no black bars */}
        <div className="hero-bg">
          <img
            src="https://i.ibb.co/qMZj3ChM/IMG-3852.jpg"
            alt="Villa VilleKulla mountain apartment"
          />
        </div>
        {/* Overlay — z-index:2, sits above image */}
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-top-line" aria-hidden="true" />
          <p className="hero-location">{t('hero_location')}</p>
          <div className="hero-title" aria-label="Villa Villekulla">
            <span className="hero-title-villa">Villa</span>
            <span className="hero-title-villekulla">Villekulla</span>
          </div>
          <p className="hero-tagline">{t('hero_tagline')}</p>
          <div className="hero-buttons">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
              {t('hero_book')}
            </a>
            <button className="btn btn-ghost" onClick={() => scrollTo('about')}>
              {t('hero_explore')}
            </button>
          </div>
        </div>
        <div className="hero-scroll" onClick={() => scrollTo('about')} aria-label="Scroll down">
          <span className="hero-scroll-text">{t('hero_scroll')}</span>
          <div className="scroll-mouse" aria-hidden="true" />
        </div>
      </section>

      {/* ── ABOUT ─────────────────────────────────── */}
      <section id="about" className="section-pad" aria-label="About section">
        <div className="container">
          <div className="about-grid">
            {/* Text */}
            <div className="reveal-left">
              <div className="gold-line" aria-hidden="true" />
              <span className="label-text about-text-label">{t('about_label')}</span>
              <h2 className="about-heading">
                {t('about_heading_1')}{' '}
                <span className="gold-text">{t('about_heading_2')}</span>
              </h2>
              <p className="about-body">{t('about_p1')}</p>
              <p className="about-body">{t('about_p2')}</p>
              <button
                onClick={() => scrollTo('gallery')}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, textAlign: 'left', display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: 400, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C6A664', fontFamily: 'Inter, sans-serif', transition: 'gap 0.4s ease' }}
              >
                {t('about_cta')}
              </button>
            </div>
            {/* Image */}
            <div className="about-image-wrap reveal-right">
              <div className="about-image-frame" aria-hidden="true" />
              <img
                src="https://i.ibb.co/W4tzf7Rh/IMG-3843.jpg"
                alt="Villa Villekulla interior — elegant mountain apartment"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── AMENITIES ─────────────────────────────── */}
      <section id="amenities" aria-label="Amenities section">
        <div className="amenities-header reveal">
          <div className="gold-line" aria-hidden="true" />
          <span className="label-text">{t('amenities_label')}</span>
          <h2 className="amenities-title">{t('amenities_title')}</h2>
        </div>
        <div className="amenities-grid">
          {([
            {
              icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C6A664" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M8 21l4-10 4 10"/>
                  <path d="M2 21l6-12 4 6"/>
                  <path d="M14 15l4-8 4 8"/>
                  <line x1="2" y1="21" x2="22" y2="21"/>
                </svg>
              ),
              titleKey: 'a1_title' as TKey, descKey: 'a1_desc' as TKey, delay: 0,
            },
            {
              icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C6A664" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 3c0 0-1 2-1 4s1 3 1 5"/>
                  <path d="M8 3c0 0-1 2-1 4s1 3 1 5"/>
                  <path d="M16 3c0 0-1 2-1 4s1 3 1 5"/>
                  <rect x="4" y="14" width="16" height="7" rx="2"/>
                </svg>
              ),
              titleKey: 'a2_title' as TKey, descKey: 'a2_desc' as TKey, delay: 100,
            },
            {
              icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C6A664" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <path d="M9 17V7h4a3 3 0 0 1 0 6H9"/>
                </svg>
              ),
              titleKey: 'a3_title' as TKey, descKey: 'a3_desc' as TKey, delay: 200,
            },
            {
              icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C6A664" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M2 9.5C5.5 5.5 10 4 12 4s6.5 1.5 10 5.5"/>
                  <path d="M5 12.5c2.5-3 5.5-4 7-4s4.5 1 7 4"/>
                  <path d="M8.5 15.5c1.5-2 3-2.5 3.5-2.5s2 .5 3.5 2.5"/>
                  <circle cx="12" cy="19" r="1" fill="#C6A664"/>
                </svg>
              ),
              titleKey: 'a4_title' as TKey, descKey: 'a4_desc' as TKey, delay: 300,
            },
            {
              icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C6A664" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z"/>
                  <path d="M3 9l2-4h14l2 4"/>
                  <line x1="12" y1="13" x2="12" y2="17"/>
                  <line x1="10" y1="15" x2="14" y2="15"/>
                </svg>
              ),
              titleKey: 'a6_title' as TKey, descKey: 'a6_desc' as TKey, delay: 400,
            },
          ] as Array<{ icon: React.ReactNode; titleKey: TKey; descKey: TKey; delay: number }>).map((item) => (
            <article key={item.titleKey} className="amenity-card reveal" data-delay={item.delay}>
              <div className="amenity-icon" aria-hidden="true">{item.icon}</div>
              <h3 className="amenity-title">{t(item.titleKey)}</h3>
              <p className="amenity-desc">{t(item.descKey)}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── VILA ──────────────────────────────────── */}
      <section id="vila" className="vila-section" aria-label="Vila section">
        <div className="container">
          {/* Header */}
          <div className="vila-header reveal">
            <div className="gold-line" aria-hidden="true" />
            <span className="label-text">{t('vila_title')}</span>
            <h2 className="vila-main-title">{t('vila_title')}</h2>
            <p className="vila-subtitle">{t('vila_subtitle')}</p>
          </div>

          {/* Two unit cards */}
          <div className="vila-units-grid">
            {/* Unit 1 */}
            <div className="vila-unit-card reveal" data-delay="0">
              <div className="vila-unit-header">
                <h3 className="vila-unit-title">{t('vila_u1_title')}</h3>
              </div>
              <p className="vila-unit-desc">{t('vila_u1_desc')}</p>
              <ul className="vila-unit-amenities">
                <li>
                  <span className="vila-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C6A664" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 21h16V11L12 3 4 11v10z"/>
                      <path d="M9 21v-5c0-2 1.5-3 3-3s3 1 3 3v5"/>
                      <path d="M12 16c0-1-0.5-2-0.5-2"/>
                    </svg>
                  </span>
                  {t('vila_u1_a1')}
                </li>
                <li>
                  <span className="vila-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C6A664" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 4c0 0-1 1.5-1 3s1 2.5 1 4"/>
                      <path d="M12 4c0 0-1 1.5-1 3s1 2.5 1 4"/>
                      <path d="M17 4c0 0-1 1.5-1 3s1 2.5 1 4"/>
                      <rect x="3" y="13" width="18" height="4" rx="1"/>
                      <path d="M5 17v3"/>
                      <path d="M19 17v3"/>
                    </svg>
                  </span>
                  {t('vila_u1_a2')}
                </li>
                <li>
                  <span className="vila-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C6A664" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="9" cy="7" r="3"/>
                      <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
                      <circle cx="17" cy="7" r="2.5"/>
                      <path d="M17 12.5a3.5 3.5 0 0 1 3.5 3.5v5"/>
                    </svg>
                  </span>
                  {t('vila_u1_a3')}
                </li>
                <li>
                  <span className="vila-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C6A664" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 12h16"/>
                      <path d="M4 12v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6"/>
                      <path d="M6 12V5a2 2 0 0 1 2-2h1"/>
                      <circle cx="10" cy="3.5" r="0.5" fill="#C6A664"/>
                    </svg>
                  </span>
                  {t('vila_u1_a4')}
                </li>
              </ul>
            </div>

            {/* Unit 2 */}
            <div className="vila-unit-card reveal" data-delay="150">
              <div className="vila-unit-header">
                <h3 className="vila-unit-title">{t('vila_u2_title')}</h3>
              </div>
              <p className="vila-unit-desc">{t('vila_u2_desc')}</p>
              <ul className="vila-unit-amenities">
                <li>
                  <span className="vila-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C6A664" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z"/>
                      <path d="M3 9l2-4h14l2 4"/>
                      <line x1="12" y1="13" x2="12" y2="17"/>
                      <line x1="10" y1="15" x2="14" y2="15"/>
                    </svg>
                  </span>
                  {t('vila_u2_a1')}
                </li>
                <li>
                  <span className="vila-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C6A664" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="9" cy="7" r="3"/>
                      <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
                      <circle cx="17" cy="7" r="2.5"/>
                      <path d="M17 12.5a3.5 3.5 0 0 1 3.5 3.5v5"/>
                    </svg>
                  </span>
                  {t('vila_u2_a2')}
                </li>
                <li>
                  <span className="vila-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C6A664" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 12h16"/>
                      <path d="M4 12v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6"/>
                      <path d="M6 12V5a2 2 0 0 1 2-2h1"/>
                      <circle cx="10" cy="3.5" r="0.5" fill="#C6A664"/>
                    </svg>
                  </span>
                  {t('vila_u2_a3')}
                </li>
              </ul>
            </div>
          </div>

          {/* Shared amenities */}
          <div className="vila-shared reveal" data-delay="100">
            <div className="vila-shared-header">
              <div className="gold-line" aria-hidden="true" />
              <h3 className="vila-shared-title">{t('vila_shared_title')}</h3>
            </div>
            <div className="vila-shared-grid">
              {/* Parking */}
              <div className="vila-shared-card">
                <div className="vila-shared-icon" aria-hidden="true">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C6A664" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="6" width="18" height="15" rx="2"/>
                    <path d="M3 6l9-3 9 3"/>
                    <path d="M9 21V11h4a2.5 2.5 0 0 1 0 5H9"/>
                  </svg>
                </div>
                <p className="vila-shared-name">{t('vila_s1_title')}</p>
              </div>

              {/* Garden */}
              <div className="vila-shared-card">
                <div className="vila-shared-icon" aria-hidden="true">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C6A664" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22V12"/>
                    <path d="M12 12c-3 0-5-2-5-5 2 0 4 1 5 3"/>
                    <path d="M12 12c3 0 5-2 5-5-2 0-4 1-5 3"/>
                    <path d="M7 22c0-3 2-5 5-5s5 2 5 5"/>
                    <line x1="4" y1="22" x2="20" y2="22"/>
                  </svg>
                </div>
                <p className="vila-shared-name">{t('vila_s2_title')}</p>
                <p className="vila-shared-desc">{t('vila_s2_desc')}</p>
              </div>

              {/* Quad */}
              <div className="vila-shared-card">
                <div className="vila-shared-icon" aria-hidden="true">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C6A664" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="5" cy="18" r="3"/>
                    <circle cx="19" cy="18" r="3"/>
                    <path d="M5 15h14"/>
                    <path d="M8 15l2-5h4l2 5"/>
                    <path d="M10 10l1-4h2l1 4"/>
                    <line x1="12" y1="6" x2="12" y2="4"/>
                    <line x1="10" y1="4" x2="14" y2="4"/>
                  </svg>
                </div>
                <p className="vila-shared-name">{t('vila_s3_title')}</p>
                <p className="vila-shared-desc">{t('vila_s3_desc')}</p>
                <a
                  href="https://www.instagram.com/montequadtourkolasin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vila-quad-link"
                >@montequadtourkolasin →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SAUNA HIGHLIGHT ───────────────────────── */}
      <section id="sauna" aria-label="Sauna highlight">
        <div className="sauna-bg" role="img" aria-label="Private sauna at Villa Villekulla" />
        <div className="sauna-overlay" />
        <div className="sauna-content reveal">
          <span className="label-text">{t('sauna_label')}</span>
          <h2 className="sauna-title">{t('sauna_title')}</h2>
          <p className="sauna-sub">{t('sauna_sub')}</p>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
            {t('sauna_book')}
          </a>
        </div>
      </section>

      {/* ── GALLERY ───────────────────────────────── */}
      <section id="gallery" aria-label="Photo gallery">
        <div className="gallery-header reveal">
          <div className="gold-line" aria-hidden="true" />
          <span className="label-text">{t('gallery_label')}</span>
          <h2 className="section-heading gallery-title">{t('gallery_title')}</h2>
          <p className="gallery-subtitle">{t('gallery_sub')}</p>
        </div>
        <div className="gallery-grid" role="list">
          {GALLERY_IMAGES.map((img, idx) => (
            <div
              key={idx}
              className="gallery-item"
              data-delay={Math.min(idx * 80, 960)}
              role="listitem"
              onClick={() => openLightbox(idx)}
              aria-label={`View ${img.alt}`}
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && openLightbox(idx)}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="gallery-item-overlay">
                <div className="gallery-plus" aria-hidden="true">+</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── LIGHTBOX ──────────────────────────────── */}
      <div
        id="lightbox"
        className={lightboxOpen ? 'open' : ''}
        role="dialog"
        aria-modal="true"
        aria-label="Image lightbox"
        onClick={e => { if (e.target === e.currentTarget) setLightboxOpen(false); }}
      >
        <button className="lightbox-close" onClick={() => setLightboxOpen(false)} aria-label="Close lightbox">✕</button>
        <button className="lightbox-prev" onClick={() => setLightboxIndex(i => (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length)} aria-label="Previous image">‹</button>
        <div className="lightbox-img-wrap">
          <img
            id="lightbox-img"
            src={GALLERY_IMAGES[lightboxIndex]?.src}
            alt={GALLERY_IMAGES[lightboxIndex]?.alt}
          />
        </div>
        <button className="lightbox-next" onClick={() => setLightboxIndex(i => (i + 1) % GALLERY_IMAGES.length)} aria-label="Next image">›</button>
        <div className="lightbox-counter" aria-live="polite">{lightboxIndex + 1} / {GALLERY_IMAGES.length}</div>
      </div>

      {/* ── LOCATION ──────────────────────────────── */}
      <section id="location" aria-label="Location section">
        <div className="container">
          <div className="location-grid">
            {/* Info */}
            <div className="location-info reveal-left">
              <div className="gold-line" aria-hidden="true" />
              <span className="label-text">{t('location_label')}</span>
              <h2 className="section-heading" style={{ marginTop: '12px', marginBottom: '8px' }}>{t('location_title')}</h2>
              <p className="location-subtitle">{t('location_sub')}</p>
              <div className="distance-cards">
                {([
                  {
                    icon: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C6A664" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                      </svg>
                    ),
                    nameKey: 'd1_name' as TKey, dist: '90 km', delay: 0,
                  },
                  {
                    icon: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C6A664" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="3" y="10" width="6" height="11"/>
                        <rect x="9" y="3" width="6" height="18"/>
                        <rect x="15" y="7" width="6" height="14"/>
                        <line x1="5" y1="13" x2="7" y2="13"/>
                        <line x1="5" y1="16" x2="7" y2="16"/>
                        <line x1="11" y1="6" x2="13" y2="6"/>
                        <line x1="11" y1="9" x2="13" y2="9"/>
                        <line x1="11" y1="12" x2="13" y2="12"/>
                        <line x1="17" y1="10" x2="19" y2="10"/>
                        <line x1="17" y1="13" x2="19" y2="13"/>
                      </svg>
                    ),
                    nameKey: 'd2_name' as TKey, dist: '3 min', delay: 100,
                  },
                  {
                    icon: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C6A664" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="13" cy="3" r="1.5"/>
                        <path d="M7 21l3-9 4 3 4-6"/>
                        <path d="M3 21h18"/>
                        <line x1="10" y1="12" x2="7" y2="8"/>
                      </svg>
                    ),
                    nameKey: 'd3_name' as TKey, dist: '9 min', delay: 200,
                  },
                  {
                    icon: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C6A664" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="13" cy="3" r="1.5"/>
                        <path d="M7 21l3-9 4 3 4-6"/>
                        <path d="M3 21h18"/>
                        <line x1="10" y1="12" x2="7" y2="8"/>
                      </svg>
                    ),
                    nameKey: 'd4_name' as TKey, dist: '15 min', delay: 300,
                  },
                ] as Array<{ icon: React.ReactNode; nameKey: TKey; dist: string; delay: number }>).map((item) => (
                  <div key={item.nameKey} className="distance-card" data-delay={item.delay}>
                    <div className="distance-left">
                      <span className="distance-icon" aria-hidden="true">{item.icon}</span>
                      <span className="distance-name">{t(item.nameKey)}</span>
                    </div>
                    <span className="distance-val">{item.dist}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Map */}
            <div className="location-map reveal-right">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2926.2405826992526!2d19.541111275211367!3d42.825531605568806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134d7d001b254a2d%3A0x5db45f630fd0a293!2sVilla%20Villekulla!5e0!3m2!1ssr!2srs!4v1772461937096!5m2!1ssr!2srs"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '450px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Villa Villekulla location on Google Maps"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────── */}
      <section id="contact" aria-label="Contact section">
        <div className="container">
          <div className="contact-grid">
            {/* Left */}
            <div className="contact-left reveal-left">
              <div className="gold-line" aria-hidden="true" />
              <span className="label-text">{t('contact_label')}</span>
              <h2 className="contact-title section-heading">{t('contact_title')}</h2>
              <p className="contact-subtitle">{t('contact_sub')}</p>
              <div className="contact-items">
                <div className="contact-item">
                  <span className="contact-icon" aria-hidden="true">📞</span>
                  <a href="tel:+38268668068">+382 68 668 068</a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon" aria-hidden="true">📸</span>
                  <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">@villavillekulla_kolasin</a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon" aria-hidden="true">🌐</span>
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Booking.com</a>
                </div>
              </div>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn-gold" style={{ marginBottom: '32px' }}>
                {t('contact_book_btn')}
              </a>
            </div>

            {/* Right — Host Info (top) + Form (below) */}
            <div className="reveal-right">

              {/* Host Info — ABOVE the form */}
              <div className="host-credit">
                <span className="host-label">{t('host_label')}</span>
                <div className="host-name">
                  <a href={INSTAGRAM_SANDRA} target="_blank" rel="noopener noreferrer">Sandra Bulatović</a>
                </div>
                <a href={INSTAGRAM_SANDRA} target="_blank" rel="noopener noreferrer" className="host-instagram">@sandrabulatovicc</a>
              </div>

              {/* Form — BELOW host info */}
              {!formSubmitted ? (
                <form className="contact-form" onSubmit={handleFormSubmit} noValidate>
                  <div className="form-group">
                    <input type="text" placeholder={t('form_name')} required aria-label={t('form_name')} />
                  </div>
                  <div className="form-group">
                    <input type="email" placeholder={t('form_email')} required aria-label={t('form_email')} />
                  </div>
                  <div className="form-group">
                    <textarea placeholder={t('form_message')} required aria-label={t('form_message')} />
                  </div>
                  <button type="submit" className="btn btn-gold" style={{ alignSelf: 'flex-start' }}>
                    {t('form_submit')}
                  </button>
                </form>
              ) : (
                <div className="form-success visible">
                  <div className="form-success-icon">✨</div>
                  <h3 className="form-success-title">{t('form_success_title')}</h3>
                  <p className="form-success-text">{t('form_success_text')}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── BOOKING CTA ───────────────────────────── */}
      <section id="booking-cta" aria-label="Book your stay">
        <div className="cta-bg" role="img" aria-label="Villa Villekulla interior" />
        <div className="cta-overlay" />
        <div className="cta-content reveal">
          <div className="cta-line" aria-hidden="true" />
          <h2 className="cta-title">{t('cta_title')}</h2>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
            {t('cta_btn')}
          </a>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────── */}
      <footer aria-label="Site footer">
        <div className="footer-inner container">
          <div className="footer-logo">
            <img src="https://i.ibb.co/5gbjkysw/IMG-3848.png" alt="Villa Villekulla Logo" />
            <p className="footer-brand">Villa Villekulla</p>
          </div>

          <nav className="footer-links" aria-label="Footer navigation">
            {[
              { key: 'nav_home' as TKey, id: 'hero' },
              { key: 'nav_about' as TKey, id: 'about' },
              { key: 'nav_gallery' as TKey, id: 'gallery' },
              { key: 'nav_location' as TKey, id: 'location' },
              { key: 'nav_contact' as TKey, id: 'contact' },
            ].map(item => (
              <a key={item.id} href={`#${item.id}`} onClick={e => { e.preventDefault(); scrollTo(item.id); }}>
                {t(item.key)}
              </a>
            ))}
          </nav>

          <div className="footer-social">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Villa Villekulla on Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
              </svg>
            </a>
            <a href={`tel:+38268668068`} aria-label="Call Villa Villekulla">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.42 2 2 0 0 1 3.62 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.84A16 16 0 0 0 15.1 16l.96-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </a>
          </div>

          <div className="footer-divider" aria-hidden="true" />

          <div className="footer-bottom">
            <p className="footer-copyright">{t('footer_copyright')}</p>
            <p className="footer-made">Made with <span className="footer-heart">❤</span> in Montenegro</p>
          </div>
        </div>
      </footer>

      {/* ── FLOATING: WHATSAPP ────────────────────── */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        aria-label="Contact Villa Villekulla on WhatsApp"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </a>

      {/* ── FLOATING: BACK TO TOP ─────────────────── */}
      <a
        href="#hero"
        className={`back-to-top ${backToTopVisible ? 'visible' : ''}`}
        onClick={e => { e.preventDefault(); scrollTo('hero'); }}
        aria-label="Back to top"
      >
        ↑
      </a>
    </>
  );
}
