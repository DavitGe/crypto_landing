import React from "react";
import "./HeroSection.scss";

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

          {/* Animated Mascot */}
          <div className="hero-mascot">
            <div className="mascot-container">
              <svg
                className="mascot-svg"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Mascot Body */}
                <circle
                  className="mascot-body"
                  cx="100"
                  cy="120"
                  r="60"
                  fill="#FFE600"
                  stroke="#000"
                  strokeWidth="3"
                />

                {/* Mascot Eyes */}
                <circle
                  className="mascot-eye left-eye"
                  cx="80"
                  cy="100"
                  r="8"
                  fill="#000"
                />
                <circle
                  className="mascot-eye right-eye"
                  cx="120"
                  cy="100"
                  r="8"
                  fill="#000"
                />

                {/* Mascot Pupils */}
                <circle
                  className="mascot-pupil left-pupil"
                  cx="82"
                  cy="98"
                  r="3"
                  fill="#FF00A0"
                />
                <circle
                  className="mascot-pupil right-pupil"
                  cx="122"
                  cy="98"
                  r="3"
                  fill="#FF00A0"
                />

                {/* Mascot Mouth */}
                <path
                  className="mascot-mouth"
                  d="M 70 130 Q 100 150 130 130"
                  stroke="#000"
                  strokeWidth="3"
                  fill="none"
                />

                {/* Mascot Antenna */}
                <line
                  className="mascot-antenna"
                  x1="100"
                  y1="60"
                  x2="100"
                  y2="40"
                  stroke="#000"
                  strokeWidth="3"
                />
                <circle
                  className="antenna-tip"
                  cx="100"
                  cy="35"
                  r="5"
                  fill="#00FFD1"
                />

                {/* Mascot Arms */}
                <line
                  className="mascot-arm left-arm"
                  x1="50"
                  y1="110"
                  x2="30"
                  y2="90"
                  stroke="#000"
                  strokeWidth="3"
                />
                <line
                  className="mascot-arm right-arm"
                  x1="150"
                  y1="110"
                  x2="170"
                  y2="90"
                  stroke="#000"
                  strokeWidth="3"
                />

                {/* Mascot Hands */}
                <circle
                  className="mascot-hand left-hand"
                  cx="25"
                  cy="85"
                  r="8"
                  fill="#FFE600"
                  stroke="#000"
                  strokeWidth="2"
                />
                <circle
                  className="mascot-hand right-hand"
                  cx="175"
                  cy="85"
                  r="8"
                  fill="#FFE600"
                  stroke="#000"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>

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
