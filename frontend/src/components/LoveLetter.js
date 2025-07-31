import React from 'react';
import { motion } from 'framer-motion';
import { mockData } from '../data/mock';

const LoveLetter = () => {
  return (
    <section className="love-letter-section">
      <div className="container">
        <motion.div 
          className="love-letter-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="love-letter-header">
            <motion.h2 
              className="love-letter-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {mockData.loveLetter.title}
            </motion.h2>
            
            <motion.p 
              className="love-letter-date"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {mockData.loveLetter.date}
            </motion.p>
          </div>

          <motion.div 
            className="love-letter-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {mockData.loveLetter.content.split('\n\n').map((paragraph, index) => (
              <motion.p 
                key={index}
                className="love-letter-paragraph"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          <motion.div 
            className="love-letter-signature"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="signature-line"></div>
            <p className="signature-text">With all my love</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LoveLetter;