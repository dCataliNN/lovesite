import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroSlider from '../components/HeroSlider';
import LoveLetter from '../components/LoveLetter';
import Timeline from '../components/Timeline';
import Messages from '../components/Messages';
import Footer from '../components/Footer';

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <motion.div 
      className="homepage"
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hero Section with Slider */}
      <HeroSlider />
      
      {/* Love Letter Section */}
      <LoveLetter />
      
      {/* Timeline Section */}
      <Timeline />
      
      {/* Messages Section */}
      <Messages />
      
      {/* Footer */}
      <Footer />
    </motion.div>
  );
};

export default HomePage;