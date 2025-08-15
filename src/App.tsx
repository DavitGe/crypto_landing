import './styles/App.scss';
import React, { Suspense } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';

// Lazy load non-critical sections for better performance
const TokenomicsSection = React.lazy(() => import('./components/TokenomicsSection'));
const RoadmapSection = React.lazy(() => import('./components/RoadmapSection'));
const Footer = React.lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="app">
      <Header />
      
      <main className="main-content">
        {/* Hero Section - Critical above the fold */}
        <HeroSection coinName="PEPE" />
        
        {/* Lazy loaded sections with loading fallbacks */}
        <Suspense fallback={<div className="section-loading">Loading...</div>}>
          
          {/* Tokenomics Section */}
          <TokenomicsSection />
          
          {/* Roadmap Section */}
          <RoadmapSection />
        </Suspense>

      </main>
      
      <Suspense fallback={<div className="footer-loading">Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
