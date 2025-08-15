import React from "react";
import "./CommunitySection.scss";

const CommunitySection: React.FC = () => {
  const socialLinks = [
    {
      name: "Telegram",
      icon: "📱",
      url: "#",
      color: "#0088CC",
      description: "Join our main community chat",
    },
    {
      name: "Discord",
      icon: "🎮",
      url: "#",
      color: "#5865F2",
      description: "Connect with fellow holders",
    },
    {
      name: "Twitter",
      icon: "🐦",
      url: "#",
      color: "#1DA1F2",
      description: "Stay updated with announcements",
    },
    {
      name: "Reddit",
      icon: "🤖",
      url: "#",
      color: "#FF4500",
      description: "Share memes and discussions",
    },
  ];

  const communityStats = [
    { label: "Total Holders", value: "10,000+", icon: "👥" },
    { label: "Telegram Members", value: "25,000+", icon: "📱" },
    { label: "Twitter Followers", value: "50,000+", icon: "🐦" },
    { label: "Reddit Members", value: "15,000+", icon: "🤖" },
  ];

  return (
    <section id="community" className="community-section">
      {/* Brutalist Background Pattern */}
      <div className="community-background">
        <div className="pattern-waves"></div>
        <div className="pattern-circles"></div>
      </div>

      <div className="container">
        {/* Brutalist Header */}
        <div className="section-header">
          <h2 className="section-title">COMMUNITY</h2>
          <div className="title-accent"></div>
        </div>

        <div className="community-content">
          {/* Community Stats */}
          <div className="stats-grid">
            {communityStats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="social-section">
            <h3 className="social-title">JOIN THE REVOLUTION</h3>
            <div className="social-grid">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="social-card"
                  style={
                    { "--social-color": social.color } as React.CSSProperties
                  }
                >
                  <div className="social-icon">{social.icon}</div>
                  <div className="social-name">{social.name}</div>
                  <div className="social-description">{social.description}</div>
                </a>
              ))}
            </div>
          </div>

          {/* Community Features */}
          <div className="features-section">
            <h3 className="features-title">COMMUNITY FEATURES</h3>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🎯</div>
                <h4 className="feature-name">Daily Challenges</h4>
                <p className="feature-description">
                  Participate in daily meme challenges and win rewards
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🏆</div>
                <h4 className="feature-name">Leaderboards</h4>
                <p className="feature-description">
                  Compete with other community members on various metrics
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎁</div>
                <h4 className="feature-name">Rewards System</h4>
                <p className="feature-description">
                  Earn tokens for active participation and contributions
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🗳️</div>
                <h4 className="feature-name">Governance</h4>
                <p className="feature-description">
                  Vote on important decisions and project direction
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
