import React, { useState } from 'react';
import './Fleet.css';

const fleetData = [
  {
    id: 1,
    name: 'M/V Genesis Cement',
    type: 'Cement Carrier',
    images: ['/assets/image1.jpeg', '/assets/image2.jpeg'],
    specs: { dwat: 'TBA', built: 'TBA', draft: 'TBA', length: 'TBA', beam: 'TBA', flag: 'TBA' }
  },
  {
    id: 2,
    name: 'M/V Benigane',
    type: 'Bulk Carrier',
    images: ['/assets/image3.jpeg', '/assets/image4.jpeg'],
    specs: { dwat: 'TBA', built: 'TBA', draft: 'TBA', length: 'TBA', beam: 'TBA', flag: 'TBA' }
  },
  {
    id: 3,
    name: 'M/V TC Glory',
    type: 'Bulk Carrier',
    images: ['/assets/image5.jpeg', '/assets/image6.jpeg'],
    specs: { dwat: 'TBA', built: 'TBA', draft: 'TBA', length: 'TBA', beam: 'TBA', flag: 'TBA' }
  },
  {
    id: 4,
    name: 'M/V TC Grace',
    type: 'Bulk Carrier',
    images: ['/assets/image7.jpeg', '/assets/image8.jpeg'],
    specs: { dwat: 'TBA', built: 'TBA', draft: 'TBA', length: 'TBA', beam: 'TBA', flag: 'TBA' }
  },
  {
    id: 5,
    name: 'M/V TC Victory',
    type: 'Bulk Carrier',
    images: ['/assets/image9.jpeg', '/assets/image1.jpeg'],
    specs: { dwat: 'TBA', built: 'TBA', draft: 'TBA', length: 'TBA', beam: 'TBA', flag: 'TBA' }
  }
];

const Fleet = () => {
  const [activeShip, setActiveShip] = useState(fleetData[0]);
  const [imageIndex, setImageIndex] = useState(0);

  React.useEffect(() => {
    setImageIndex(0);
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % activeShip.images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [activeShip]);

  return (
    <section className="fleet-section" id="fleet">
      <div className="fleet-container">
        <div className="fleet-header">
          <h2>Modern Filomuz</h2>
          <p>Uluslararası denizcilik standartlarına uygun, teknolojik altyapısı güçlü ve çevre dostu filomuzla dünyanın her noktasına güvenle taşıyoruz.</p>
        </div>

        <div className="fleet-interactive">
          {/* Sol Kısım: Gemi Listesi */}
          <div className="fleet-list">
            {fleetData.map((ship) => (
              <button 
                key={ship.id} 
                className={`fleet-list-item ${activeShip.id === ship.id ? 'active' : ''}`}
                onClick={() => setActiveShip(ship)}
              >
                <div className="ship-name">{ship.name}</div>
                <div className="ship-type">{ship.type}</div>
              </button>
            ))}
          </div>

          {/* Sağ Kısım: Detaylar */}
          <div className="fleet-details" key={activeShip.id}>
            <div className="mobile-ship-info">
              <h3>{activeShip.name}</h3>
              <p>{activeShip.type}</p>
            </div>
            <div className="ship-image-container">
              <img src={activeShip.images[imageIndex]} alt={activeShip.name} className="ship-image" key={imageIndex} style={{animation: 'fadeIn 0.5s ease'}} />
              <div className="slider-dots">
                {activeShip.images.map((_, i) => (
                  <span key={i} className={`slider-dot ${i === imageIndex ? 'active' : ''}`}></span>
                ))}
              </div>
            </div>
            
            <div className="specs-grid">
              <div className="spec-item">
                <div className="spec-label">DWAT Kapasitesi</div>
                <div className="spec-value highlight">{activeShip.specs.dwat}</div>
              </div>
              <div className="spec-item">
                <div className="spec-label">İnşa Yılı</div>
                <div className="spec-value">{activeShip.specs.built}</div>
              </div>
              <div className="spec-item">
                <div className="spec-label">Tam Boy (LOA)</div>
                <div className="spec-value">{activeShip.specs.length}</div>
              </div>
              <div className="spec-item">
                <div className="spec-label">Genişlik (Beam)</div>
                <div className="spec-value">{activeShip.specs.beam}</div>
              </div>
              <div className="spec-item">
                <div className="spec-label">Draft</div>
                <div className="spec-value">{activeShip.specs.draft}</div>
              </div>
              <div className="spec-item">
                <div className="spec-label">Bayrak</div>
                <div className="spec-value">{activeShip.specs.flag}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fleet;
