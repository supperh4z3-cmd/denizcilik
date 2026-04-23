import React, { useState } from 'react';
import './Fleet.css';

const fleetData = [
  {
    id: 1,
    name: 'MV Ocean Star',
    type: 'Supramax Bulk Carrier',
    image: '/fleet-ship.png',
    specs: {
      dwat: '58,000 MT',
      built: '2022',
      draft: '12.8 m',
      length: '189.9 m',
      beam: '32.2 m',
      flag: 'Marshall Islands'
    }
  },
  {
    id: 2,
    name: 'MV Horizon Explorer',
    type: 'Handysize Bulk Carrier',
    image: '/fleet-ship.png',
    specs: {
      dwat: '37,500 MT',
      built: '2019',
      draft: '10.5 m',
      length: '175.0 m',
      beam: '29.4 m',
      flag: 'Panama'
    }
  },
  {
    id: 3,
    name: 'MV Eco Vanguard',
    type: 'Ultramax Bulk Carrier',
    image: '/fleet-ship.png',
    specs: {
      dwat: '63,500 MT',
      built: '2024',
      draft: '13.3 m',
      length: '199.9 m',
      beam: '32.2 m',
      flag: 'Liberia'
    }
  }
];

const Fleet = () => {
  const [activeShip, setActiveShip] = useState(fleetData[0]);

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
              <img src={activeShip.image} alt={activeShip.name} className="ship-image" />
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
