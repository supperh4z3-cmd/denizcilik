import React from 'react';
import './Footer.css';

const MMCLogo = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{color: 'var(--accent)'}}>
    <path d="M4 28L11 8L16 17L21 8L28 28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11 20L16 26L21 20" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer-section" id="contact">
      {/* Call To Action */}
      <div className="footer-cta">
        <h2>Küresel Vizyon, Kusursuz Operasyon</h2>
        <p>Denizcilik operasyonlarınıza değer katmak ve geleceğin sürdürülebilir taşımacılık çözümleriyle tanışmak için uzman ekibimizle hemen iletişime geçin.</p>
        <button className="btn btn-primary">İletişime Geçin</button>
      </div>

      {/* Main Footer Content */}
      <div className="footer-main">
        
        {/* Brand */}
        <div className="footer-brand">
          <div className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white', fontWeight: 700, letterSpacing: '1px' }}>
            <MMCLogo />
            MMC - MAYA MARINE
          </div>
          <p>
            Yenilikçi, şeffaf ve güvenilir operasyonel çözümlerimizle küresel tedarik zincirinin en güçlü halkalarından biri olmaya devam ediyoruz.
          </p>
          <div className="footer-socials">
            <a href="#" className="footer-social-link" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="#" className="footer-social-link" aria-label="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3 className="footer-title">Hızlı Menü</h3>
          <div className="footer-links">
            <a href="#home">Anasayfa</a>
            <a href="#fleet">Modern Filomuz</a>
            <a href="#services">Çözüm ve Hizmetler</a>
            <a href="#esg">Sürdürülebilirlik</a>
            <a href="#global">Global Operasyon</a>
          </div>
        </div>

        {/* Services Links */}
        <div className="footer-col">
          <h3 className="footer-title">Hizmetler</h3>
          <div className="footer-links">
            <a href="#">Gemi Kiralama</a>
            <a href="#">Teknik Gemi Yönetimi</a>
            <a href="#">Filomuz</a>
            <a href="#">Gemi Acenteliği</a>
            <a href="#">S&P Danışmanlık</a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h3 className="footer-title">Merkez Ofis</h3>
          <p>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <span>Levent Mah. Denizciler Plaza Kat:4<br/>Beşiktaş, İstanbul, Türkiye</span>
          </p>
          <p>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            <span>info@mayamarine.com</span>
          </p>
          <p>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            <span>+90 (212) 555 00 00</span>
          </p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="copyright">
          &copy; {new Date().getFullYear()} MMC - Maya Marine Contractors Ltd. Tüm hakları saklıdır.
        </div>
        <div className="footer-bottom-links">
          <a href="#">KVKK Aydınlatma Metni</a>
          <a href="#">Gizlilik Politikası</a>
          <a href="#">Çerez Politikası</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
