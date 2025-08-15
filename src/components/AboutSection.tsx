import React from "react";
import "./AboutSection.scss";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="about-section">
      {/* Brutalist Background Pattern */}
      <div className="about-background">
        <div className="pattern-grid"></div>
        <div className="pattern-dots"></div>
      </div>

      <div className="container">
        {/* Brutalist Header */}
        <div className="section-header">
          <h2 className="section-title">ABOUT</h2>
          <div className="title-accent"></div>
        </div>

        <div className="about-content">
          <div className="about-grid">
            {/* Mission Statement */}
            <div className="about-card mission-card">
              <div className="card-header">
                <h3 className="card-title">MISSION</h3>
                <div className="card-icon">🎯</div>
              </div>
              <p className="card-text">
                To create the most <span className="highlight">brutal</span> and{" "}
                <span className="highlight">revolutionary</span> meme coin that
                disrupts the crypto space with its unique approach to community
                building and tokenomics.
              </p>
            </div>

            {/* Vision */}
            <div className="about-card vision-card">
              <div className="card-header">
                <h3 className="card-title">VISION</h3>
                <div className="card-icon">🔮</div>
              </div>
              <p className="card-text">
                Building a <span className="highlight">decentralized</span>{" "}
                ecosystem where meme culture meets real utility, creating value
                for holders while maintaining the fun and chaotic spirit of the
                internet.
              </p>
            </div>

            {/* Values */}
            <div className="about-card values-card">
              <div className="card-header">
                <h3 className="card-title">VALUES</h3>
                <div className="card-icon">⚡</div>
              </div>
              <p className="card-text">
                <span className="highlight">Transparency</span>,{" "}
                <span className="highlight">Community First</span>,{" "}
                <span className="highlight">Innovation</span>, and{" "}
                <span className="highlight">Brutal Honesty</span> in everything
                we do.
              </p>
            </div>
          </div>

          {/* Story Section */}
          <div className="story-section">
            <h3 className="story-title">OUR STORY</h3>
            <div className="story-content">
              <p>
                Born from the depths of internet culture and fueled by the{" "}
                <span className="highlight">meme revolution</span>, our project
                emerged as a response to the growing need for authentic,
                community-driven projects in the crypto space.
              </p>
              <p>
                We believe that the future of finance lies in{" "}
                <span className="highlight">decentralization</span> and{" "}
                <span className="highlight">community empowerment</span>. By
                combining cutting-edge blockchain technology with the viral
                nature of memes, we're creating something truly special.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
