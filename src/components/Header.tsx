import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    closeMobileMenu(); // Close mobile menu after navigation
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#tokenomics", label: "Tokenomics" },
    { href: "#roadmap", label: "Roadmap" },
    // { href: "#community", label: "Community" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <span className={styles.logoText}>CRYPTO</span>
          <div className={styles.logoBackground}></div>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          {navLinks.map((link, index) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href.replace("#", ""))}
              className={styles.navLink}
              style={{
                marginRight:
                  index === 1 ? "3rem" : index === 3 ? "2rem" : "1.5rem",
              }}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <button className={styles.ctaButton}>BUY NOW</button>

        {/* Mobile Menu Button */}
        <button
          className={styles.mobileMenuButton}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={styles.mobileMenuOverlay}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <div className={styles.mobileMenuContent}>
              <button
                className={styles.closeButton}
                onClick={closeMobileMenu}
                aria-label="Close mobile menu"
              >
                ✕
              </button>
              <nav className={styles.mobileNav}>
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href.replace("#", ""))}
                    className={styles.mobileNavLink}
                  >
                    {link.label}
                  </button>
                ))}
                <button className={styles.mobileCtaButton}>BUY NOW</button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
