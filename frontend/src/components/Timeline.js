import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircleHeart, Plane, Calendar, Home, Stars, Gift } from 'lucide-react';
import { mockData } from '../data/mock';

const getIcon = (iconName) => {
  const icons = {
    'heart': Heart,
    'message-heart': MessageCircleHeart, 
    'plane': Plane,
    'calendar-heart': Calendar,
    'home': Home,
    'stars': Stars,
    'gift': Gift
  };
  
  const IconComponent = icons[iconName] || Heart;
  return <IconComponent className="timeline-icon" />;
};

const Timeline = () => {
  return (
    <section className="timeline-section">
      <div className="container">
        <motion.div 
          className="timeline-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="timeline-title">Our Journey Together</h2>
          <p className="timeline-subtitle">3 years and 7 months of beautiful memories</p>
        </motion.div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {mockData.timeline.map((milestone, index) => (
            <motion.div 
              key={milestone.id}
              className={`timeline-item ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="timeline-content">
                <div className="timeline-icon-wrapper">
                  {getIcon(milestone.icon)}
                </div>
                <div className="timeline-text">
                  <h3 className="timeline-milestone-title">{milestone.title}</h3>
                  <p className="timeline-date">{milestone.date}</p>
                  <p className="timeline-description">{milestone.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;