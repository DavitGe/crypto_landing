import React from "react";
import { motion } from "framer-motion";
import "./Footer.scss";

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: "Telegram",
      url: "https://t.me/memecoin",
      icon: "📱",
      color: "#0088CC",
    },
    {
      name: "Twitter/X",
      url: "https://twitter.com/memecoin",
      icon: "🐦",
      color: "#1DA1F2",
    },
    {
      name: "Discord",
      url: "https://discord.gg/memecoin",
      icon: "🎮",
      color: "#5865F2",
    },
    {
      name: "Etherscan",
      url: "https://etherscan.io/token/memecoin",
      icon: "🔍",
      color: "#363636",
    },
  ];

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: [0, -10, 10, 0],
      transition: {
        duration: 0.3,
        ease: [0.175, 0.885, 0.32, 1.275],
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.175, 0.885, 0.32, 1.275],
      },
    },
  };

  const handleSocialClick = (url: string, name: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
    console.log(`Opening ${name} link`);
  };

  return (
    <footer className="footer">
      {/* Brutalist Background Pattern */}
      <div className="footer-background">
        <div className="pattern-stripes"></div>
        <div className="pattern-dots"></div>
      </div>

      <motion.div
        className="footer-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Left Section: Logo + Slogan */}
        <div className="footer-left">
          <div className="logo-section">
            <div className="logo-icon">🚀</div>
            <div className="logo-text">
              <h3 className="logo-title">MEME COIN</h3>
              <p className="logo-slogan">TO THE MOON AND BEYOND</p>
            </div>
          </div>
        </div>

        {/* Right Section: Social Media Icons */}
        <div className="footer-right">
          <div className="social-section">
            <h4 className="social-title">JOIN THE COMMUNITY</h4>
            <div className="social-icons">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.name}
                  className="social-icon-wrapper"
                  variants={iconVariants}
                  whileHover="hover"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                    ease: [0.175, 0.885, 0.32, 1.275],
                  }}
                >
                  <button
                    className="social-icon"
                    onClick={() => handleSocialClick(social.url, social.name)}
                    aria-label={`Visit ${social.name}`}
                    style={
                      { "--icon-color": social.color } as React.CSSProperties
                    }
                  >
                    <span className="icon-emoji">{social.icon}</span>
                    <div className="icon-outline"></div>
                  </button>
                  <span className="icon-tooltip">{social.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Copyright Section */}
      <motion.div
        className="footer-copyright"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.6 }}
      >
        <div className="copyright-line"></div>
        <p className="copyright-text">
          © 2024 MEME COIN. ALL RIGHTS RESERVED. BUILT WITH NEO-BRUTALISM.
        </p>
        <div className="copyright-line"></div>
      </motion.div>
    </footer>
  );
};

export default Footer;
