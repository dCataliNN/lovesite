import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <motion.div 
          className="footer-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="footer-message">
            <motion.div 
              className="footer-heart"
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart className="heart-icon" fill="currentColor" />
            </motion.div>
            
            <h3 className="footer-title">Happy National Girlfriend's Day</h3>
            <p className="footer-subtitle">To the most amazing woman in the world</p>
            
            <div className="footer-stats">
              <div className="stat-item">
                <span className="stat-number">3.7</span>
                <span className="stat-label">Years Together</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1,328</span>
                <span className="stat-label">Days of Love</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">∞</span>
                <span className="stat-label">More to Come</span>
              </div>
            </div>
          </div>
          
          <motion.div 
            className="footer-dedication"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p className="dedication-text">
              Made with love for Daria 💖
            </p>
            <p className="footer-date">August 1st, 2025</p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;