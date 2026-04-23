import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: 'var(--accent)'}}>
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
          </svg>
          AURORA MARITIME
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
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
        
        <div className="hero-content">
          <h1 className="hero-title">Dünyanızı Hassasiyet ve Özenle Yönlendiriyoruz.</h1>
          <p className="hero-subtitle">
            Küresel denizcilik çözümlerini zamanında ve mükemmel teslimatla sunan, yılların getirdiği tecrübeyle sürdürülebilirliği birleştiren köklü yapı.
          </p>
          <div className="hero-cta-group">
            <button className="btn btn-primary" onClick={() => document.getElementById('fleet').scrollIntoView({ behavior: 'smooth' })}>Filomuzu Keşfedin</button>
            <button className="btn btn-ghost" onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>Hizmetlerimiz</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
