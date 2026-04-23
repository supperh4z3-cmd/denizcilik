import React, { useEffect, useState, useRef } from 'react';
import './Stats.css';

const useCountUp = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(easeProgress * end);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end); // ensure exact finish
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration, isVisible]);

  return [count, ref];
};

const StatItem = ({ end, suffix, label, decimals = 0 }) => {
  const [count, ref] = useCountUp(end);
  
  return (
    <div className="stat-card" ref={ref}>
      <div className="stat-number-wrapper">
        <span className="stat-number">{count.toFixed(decimals)}</span>
        <span className="stat-suffix">{suffix}</span>
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="stats-section" id="stats">
      <div className="stats-container">
        <StatItem end={50} suffix="+" label="Modern Gemi Filosu" />
        <StatItem end={1.5} decimals={1} suffix="M+" label="DWAT Kapasitesi (Ton)" />
        <StatItem end={30} suffix="+" label="Yıllık Sektör Tecrübesi" />
        <StatItem end={120} suffix="+" label="Küresel Liman Ağı" />
      </div>
    </section>
  );
};

export default Stats;
