import './styles/App.scss';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TokenomicsSection from './components/TokenomicsSection';
import RoadmapSection from './components/RoadmapSection';
import CommunitySection from './components/CommunitySection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      
      <main className="main-content">
        {/* Hero Section */}
        <HeroSection coinName="PEPE" />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Tokenomics Section */}
        <TokenomicsSection />
        
        {/* Roadmap Section */}
        <RoadmapSection />
        
        {/* Community Section
        <CommunitySection /> */}

      </main>
      
      <Footer />
    </div>
  );
}

export default App;
