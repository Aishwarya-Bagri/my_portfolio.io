import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/portfolio';
import { useTheme } from '../../theme/ThemeContext';
import SocialMedia from '../SocialMedia/SocialMedia';
import './Intro.css';

function Intro() {
  const { theme } = useTheme();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className="intro">
      <div className="container">
        <div className="intro-content">
          {/* Text Content */}
          <motion.div
            className="intro-text"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p className="intro-greeting" variants={itemVariants}>
              Hello, I'm
            </motion.p>

            <motion.h1 className="intro-name" variants={itemVariants}>
              {personalInfo.name}
              <span className="intro-dot">.</span>
            </motion.h1>

            {personalInfo.nickname && (
              <motion.p className="intro-nickname" variants={itemVariants}>
                ( {personalInfo.nickname} )
              </motion.p>
            )}

            <motion.h2 className="intro-title" variants={itemVariants}>
              {personalInfo.title}
            </motion.h2>

            <motion.p className="intro-subtitle" variants={itemVariants}>
              {personalInfo.subtitle}
            </motion.p>

            <motion.div variants={itemVariants}>
              <SocialMedia />
            </motion.div>

            <motion.div className="intro-cta" variants={itemVariants}>
              <a href="#projects" className="btn btn-primary">
                View My Work
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image with Decorative Elements */}
          <motion.div
            className="intro-illustration"
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="illustration-wrapper">
              {/* Background SVG with floating shapes */}
              <svg viewBox="0 0 500 500" className="background-shapes">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: theme.gradientStart, stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: theme.gradientEnd, stopOpacity: 1 }} />
                  </linearGradient>
                  <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: theme.accent, stopOpacity: 0.3 }} />
                    <stop offset="100%" style={{ stopColor: theme.primary, stopOpacity: 0.3 }} />
                  </linearGradient>
                </defs>
                
                {/* Decorative circles */}
                <circle cx="400" cy="80" r="70" fill="url(#grad2)" className="float-shape" />
                <circle cx="60" cy="380" r="50" fill="url(#grad2)" className="float-shape delay-1" />
                <circle cx="420" cy="420" r="40" fill="url(#grad2)" className="float-shape delay-2" />
                <circle cx="100" cy="100" r="30" fill="url(#grad2)" className="float-shape delay-2" />
                
                {/* Floating geometric shapes */}
                <g className="float-shape delay-1">
                  <rect x="30" y="200" width="40" height="40" rx="8" fill="url(#grad1)" opacity="0.15" transform="rotate(15 50 220)" />
                </g>
                <g className="float-shape delay-2">
                  <polygon points="450,280 470,320 430,320" fill="url(#grad1)" opacity="0.2" />
                </g>
              </svg>

              {/* Headshot Image */}
              <div className="headshot-container">
                <img 
                  src="/images/headshot.png" 
                  alt="Aishwarya" 
                  className="headshot-image"
                />
              </div>

              {/* Floating decorative elements (on top) */}
              <div className="floating-element elem-1">
                <svg width="60" height="60" viewBox="0 0 60 60">
                  <rect x="10" y="10" width="40" height="40" rx="8" fill={theme.primary} opacity="0.12" transform="rotate(15 30 30)" />
                </svg>
              </div>
              <div className="floating-element elem-2">
                <svg width="50" height="50" viewBox="0 0 50 50">
                  <circle cx="25" cy="25" r="20" fill={theme.secondary} opacity="0.12" />
                </svg>
              </div>
              <div className="floating-element elem-3">
                <svg width="45" height="45" viewBox="0 0 45 45">
                  <polygon points="22,5 40,35 5,35" fill={theme.primary} opacity="0.1" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          onClick={() => {
            document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Scroll Down</span>
          <div className="scroll-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Intro;



