import React, { useState, useEffect } from 'react';
import './CookieBanner.css';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-content">
        <p>
          Size en iyi deneyimi sunmak, web sitesi trafiğini analiz etmek ve hizmetlerimizi kişiselleştirmek için çerezleri kullanıyoruz. Devam ederek çerez kullanımını kabul etmiş olursunuz. Detaylar için <a href="#privacy">Gizlilik ve Çerez Politikamızı</a> inceleyebilirsiniz.
        </p>
      </div>
      <div className="cookie-buttons">
        <button className="btn-cookie btn-decline" onClick={handleDecline}>Reddet</button>
        <button className="btn-cookie btn-accept" onClick={handleAccept}>Kabul Et</button>
      </div>
    </div>
  );
};

export default CookieBanner;
