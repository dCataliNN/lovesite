import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { mockData } from '../data/mock';

const Messages = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Daily Love', 'Fun Times', 'Admiration', 'Simple Moments', 'Support', 'Future'];
  
  const filteredMessages = selectedCategory === 'All' 
    ? mockData.messages 
    : mockData.messages.filter(msg => msg.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section className="messages-section">
      <div className="container">
        <motion.div 
          className="messages-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="messages-title">Little Love Notes</h2>
          <p className="messages-subtitle">All the reasons I love you</p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="category-filter"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Messages Grid */}
        <motion.div 
          className="messages-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={selectedCategory}
        >
          <AnimatePresence mode="wait">
            {filteredMessages.map((message) => (
              <motion.div
                key={message.id}
                variants={itemVariants}
                layout
                whileHover={{ 
                  y: -4,
                  transition: { duration: 0.2 } 
                }}
                className="message-card"
              >
                <div className="message-content">
                  <h3 className="message-title">{message.title}</h3>
                  <p className="message-text">{message.content}</p>
                  <span className="message-category">{message.category}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Messages;