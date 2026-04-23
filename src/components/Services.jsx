import React from 'react';
import './Services.css';

const GlobeIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const WrenchIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
  </svg>
);

const UsersIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const AnchorIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="5" r="3"></circle>
    <line x1="12" y1="22" x2="12" y2="8"></line>
    <path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>
  </svg>
);

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="section-header">
        <h2 className="section-title">Kapsamlı Hizmet Ağı</h2>
        <p className="section-subtitle">
          Modern denizcilik dünyasının zorlu gereksinimlerine uygun, şeffaf, yenilikçi ve güvenilir operasyonel çözümler sunuyoruz.
        </p>
      </div>

      <div className="bento-grid">
        {/* Large Block */}
        <div className="bento-item item-chartering">
          <div className="bento-bg-gradient"></div>
          <div className="bento-icon"><GlobeIcon /></div>
          <h3 className="bento-title">Gemi Kiralama & Ticari Yönetim</h3>
          <p className="bento-desc">
            Küresel yük hareketlerini optimize eden stratejik kiralama çözümleri. Pazar analizleri, rota planlaması ve optimum gelir sağlayan proaktif ticaret stratejileri ile filonuzun kazanç potansiyelini en üst düzeye çıkarıyoruz.
          </p>
        </div>

        {/* Medium Block */}
        <div className="bento-item item-technical">
          <div className="bento-bg-gradient"></div>
          <div className="bento-icon"><WrenchIcon /></div>
          <h3 className="bento-title">Teknik Gemi Yönetimi</h3>
          <p className="bento-desc">
            Sıfır toleranslı güvenlik standartları ile gemilerinizi daima sefere hazır tutuyoruz. Planlı bakımlar ve uluslararası sertifikasyon süreçleri deneyimli mühendislerimiz tarafından titizlikle yönetilir.
          </p>
        </div>

        {/* Small Block 1 */}
        <div className="bento-item item-crew">
          <div className="bento-bg-gradient"></div>
          <div className="bento-icon"><UsersIcon /></div>
          <h3 className="bento-title">Mürettebat</h3>
          <p className="bento-desc">
            En zorlu denizlerde bile yüksek performans sağlayan eğitimli denizciler.
          </p>
        </div>

        {/* Small Block 2 */}
        <div className="bento-item item-agency">
          <div className="bento-bg-gradient"></div>
          <div className="bento-icon"><AnchorIcon /></div>
          <h3 className="bento-title">Liman Acenteliği</h3>
          <p className="bento-desc">
            Liman operasyonlarında 7/24 kesintisiz destek ve şeffaf lojistik yönetimi.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
