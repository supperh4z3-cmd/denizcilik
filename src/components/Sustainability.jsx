import React from 'react';
import './Sustainability.css';

const LeafIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>
);

const WindIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/>
  </svg>
);

const WaterIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>
  </svg>
);

const Sustainability = () => {
  return (
    <section className="sustainability-section" id="esg">
      <div className="sustainability-container">
        
        {/* Left Side: Realistic Image */}
        <div className="esg-image-wrapper">
          <img src="/esg-ship-realistic.png" alt="Rüzgar Destekli Sürdürülebilir Gemi" className="esg-ship-img" />
        </div>

        {/* Right Side: Content */}
        <div className="esg-content">
          <div className="esg-badge">ESG İlkeleri & Gelecek</div>
          <h2 className="esg-title">Sürdürülebilir Denizcilik Teknolojisi</h2>
          <p className="esg-desc">
            Sadece bugünün değil, yarının okyanuslarını da düşünüyoruz. Karbon ayak izimizi azaltmak ve 2050 Sıfır Emisyon hedeflerine ulaşmak için filomuzu son teknoloji çevreci sistemlerle donatıyoruz.
          </p>

          <div className="esg-features">
            <div className="esg-feature-item">
              <div className="esg-feature-icon"><WindIcon /></div>
              <div className="esg-feature-text">
                <h4>Rüzgar Destekli Rotor Yelkenler</h4>
                <p>Yakıt tüketimini %20'ye varan oranda düşüren yenilikçi rüzgar itki sistemleri ile doğanın kinetik gücünü arkamıza alıyoruz.</p>
              </div>
            </div>

            <div className="esg-feature-item">
              <div className="esg-feature-icon"><WaterIcon /></div>
              <div className="esg-feature-text">
                <h4>Balast Suyu Arıtma Sistemleri</h4>
                <p>Okyanus ekosistemlerini ve biyoçeşitliliği korumak için en ileri düzey mikro-filtreleme ve UV arıtma teknolojilerini kullanıyoruz.</p>
              </div>
            </div>

            <div className="esg-feature-item">
              <div className="esg-feature-icon"><LeafIcon /></div>
              <div className="esg-feature-text">
                <h4>Enerji Optimizasyon Yazılımları</h4>
                <p>Yapay zeka destekli rota planlama ve hız optimizasyonu ile operasyonel verimliliği maksimize ederken karbon emisyonunu en aza indiriyoruz.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Sustainability;
