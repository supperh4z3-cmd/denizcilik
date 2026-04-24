import React, { useState, useEffect } from 'react';
import './Hero.css';

const MMCLogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{color: 'var(--accent)'}}>
    <path d="M4 28L11 8L16 17L21 8L28 28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11 20L16 26L21 20" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const slides = [
  {
    id: 1,
    video: '/assets/video4.mp4',
    title: 'Dünyanızı Hassasiyet ve Özenle Yönlendiriyoruz.',
    subtitle: 'Küresel denizcilik çözümlerini zamanında ve mükemmel teslimatla sunan, yılların getirdiği tecrübeyle sürdürülebilirliği birleştiren köklü yapı.'
  },
  {
    id: 2,
    video: '/assets/video1.mp4',
    title: 'Denizlerde Güçlü, Limanlarda Güvenilir.',
    subtitle: 'Kıtaları birbirine bağlayan geniş operasyon ağımızla ticareti durmaksızın geleceğe taşıyoruz.'
  },
  {
    id: 3,
    video: '/assets/video2.mp4',
    title: 'Sürdürülebilir Bir Gelecek İçin Seyirdeyiz.',
    subtitle: 'Yenilikçi teknolojilerle donatılmış modern filomuz, karbon ayak izini azaltarak çevre dostu taşımacılık sunuyor.'
  },
  {
    id: 4,
    video: '/assets/video3.mp4',
    title: 'Uluslararası Sular, Yerel Uzmanlık.',
    subtitle: 'Gemi kiralama, teknik yönetim ve acentelik hizmetlerinde şeffaf ve kusursuz operasyon garantisi.'
  }
];

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-logo">
          <MMCLogo />
          MMC - MAYA MARINE
        </div>
        
        {/* Desktop Links */}
        <ul className="nav-links">
          <li><a href="#home">Anasayfa</a></li>
          <li><a href="#fleet">Filomuz</a></li>
          <li><a href="#services">Hizmetler</a></li>
          <li><a href="#esg">Sürdürülebilirlik</a></li>
          <li><a href="#contact">İletişim</a></li>
        </ul>

        {/* Hamburger Icon */}
        <button className={`hamburger ${mobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu} aria-label="Menü">
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          <li><a href="#home" onClick={closeMobileMenu}>Anasayfa</a></li>
          <li><a href="#fleet" onClick={closeMobileMenu}>Filomuz</a></li>
          <li><a href="#services" onClick={closeMobileMenu}>Hizmetler</a></li>
          <li><a href="#esg" onClick={closeMobileMenu}>Sürdürülebilirlik</a></li>
          <li><a href="#contact" onClick={closeMobileMenu}>İletişim</a></li>
        </ul>
      </div>

      <section id="home" className="hero-section">
        {slides.map((slide, index) => (
          <video 
            key={slide.id}
            className={`hero-video ${index === currentSlide ? 'active' : ''}`} 
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src={slide.video} type="video/mp4" />
          </video>
        ))}
        <div className="hero-overlay"></div>
        
        {slides.map((slide, index) => (
          <div key={`content-${slide.id}`} className={`hero-content ${index === currentSlide ? 'active' : ''}`}>
            <h1 className="hero-title">{slide.title}</h1>
            <p className="hero-subtitle">{slide.subtitle}</p>
            <div className="hero-cta-group">
              <button className="btn btn-primary" onClick={() => document.getElementById('fleet').scrollIntoView({ behavior: 'smooth' })}>Filomuzu Keşfedin</button>
              <button className="btn btn-ghost" onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>Hizmetlerimiz</button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Hero;
