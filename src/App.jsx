import React from 'react';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Fleet from './components/Fleet';
import Sustainability from './components/Sustainability';
import GlobalReach from './components/GlobalReach';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';

function App() {
  return (
    <div className="app">
      <Hero />
      <Stats />
      <Services />
      <Fleet />
      <Sustainability />
      <GlobalReach />
      <Footer />
      <CookieBanner />
    </div>
  );
}

export default App;
