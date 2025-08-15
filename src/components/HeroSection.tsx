import React from "react";
import "./HeroSection.scss";
import LazyMascot from "./LazyMascot";

interface HeroSectionProps {
  coinName?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ coinName = "PEPE" }) => {
  const handleBuyNow = () => {
    console.log("Buy Now clicked!");
    // Add your buy logic here
  };

  const handleJoinCommunity = () => {
    console.log("Join Community clicked!");
    // Add your community logic here
  };

  return (
    <section id="home" className="hero-section">
      {/* Brutalist Background Pattern */}
      <div className="hero-background">
        <div className="pattern-diagonal"></div>
        <div className="pattern-polka"></div>
        <div className="pattern-noise"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          {/* Main Heading - Slightly Misaligned */}
          <div className="hero-heading">
            <h1 className="hero-title">
              <span className="coin-name">{coinName}</span>
              <span className="is-text">is the</span>
              <span className="meme-text">Meme Revolution</span>
            </h1>
          </div>

          {/* Subheading - Fun and Cheeky */}
          <div className="hero-subheading">
            <p className="subtitle">
              🚀 The most <span className="highlight">brutal</span> meme coin
              that will
              <span className="highlight"> moon</span> your portfolio to
              <span className="highlight"> Mars</span> and beyond!
              <span className="emoji">🌕</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="hero-actions">
            <button
              className="btn btn-primary btn-chunky hero-btn buy-btn"
              onClick={handleBuyNow}
            >
              🚀 Buy Now
            </button>

            <button
              className="btn btn-secondary btn-chunky hero-btn community-btn"
              onClick={handleJoinCommunity}
            >
              🎉 Join Community
            </button>
          </div>

          {/* Lazy Loaded Animated Mascot */}
          <LazyMascot />

          {/* Floating Elements for Brutalist Feel */}
          <div className="floating-elements">
            <div className="floating-coin">🪙</div>
            <div className="floating-rocket">🚀</div>
            <div className="floating-star">⭐</div>
            <div className="floating-diamond">💎</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
