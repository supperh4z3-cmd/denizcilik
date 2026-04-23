import React, { useState } from 'react';
import './GlobalReach.css';

const locations = [
  { id: 1, name: 'Houston', desc: 'Kuzey Amerika Operasyon Merkezi', top: '44%', left: '22%' },
  { id: 2, name: 'Rotterdam', desc: 'Avrupa Kiralama ve Yönetim', top: '35%', left: '48%' },
  { id: 3, name: 'İstanbul', desc: 'Global Merkez Ofis', top: '39%', left: '55%' },
  { id: 4, name: 'Dubai', desc: 'Orta Doğu & Afrika Ağı', top: '47%', left: '63%' },
  { id: 5, name: 'Singapur', desc: 'Asya Pasifik Lojistik Üssü', top: '56%', left: '76%' },
  { id: 6, name: 'Şanghay', desc: 'Uzak Doğu Acenteliği', top: '42%', left: '81%' }
];

const GlobalReach = () => {
  const [activeId, setActiveId] = useState(null);

  return (
    <section className="global-section" id="global">
      <div className="global-container">
        
        <div className="global-header">
          <h2>Global Erişim Ağı</h2>
          <p>Dünyanın en stratejik limanlarında ve ticaret merkezlerinde yer alarak, kıtaları birbirine bağlıyor ve küresel tedarik zincirini kesintisiz yönetiyoruz.</p>
        </div>

        <div className="map-wrapper">
          {locations.map(loc => (
            <div 
              key={loc.id} 
              className={`map-point ${activeId === loc.id ? 'active' : ''}`}
              style={{ top: loc.top, left: loc.left }}
              onMouseEnter={() => setActiveId(loc.id)}
              onMouseLeave={() => setActiveId(null)}
              onClick={() => setActiveId(loc.id === activeId ? null : loc.id)} /* Mobile touch support */
            >
              <div className="point-pulse"></div>
              <div className="point-dot"></div>
              <div className="point-tooltip">
                <div className="tooltip-title">{loc.name}</div>
                <div className="tooltip-desc">{loc.desc}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GlobalReach;
