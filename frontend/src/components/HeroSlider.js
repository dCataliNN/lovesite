import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { mockData } from '../data/mock';

const HeroSlider = () => {
  return (
    <div className="hero-slider-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        speed={800}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        pagination={{
          el: '.swiper-pagination-custom',
          clickable: true,
          dynamicBullets: true,
        }}
        className="hero-swiper"
      >
        {mockData.heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div 
              className="hero-slide"
              style={{ backgroundColor: slide.bgColor }}
            >
              <div className="hero-content-grid">
                {/* Left Content */}
                <div className="hero-text-content" style={{ color: slide.textColor }}>
                  <motion.div 
                    className="hero-text-wrapper"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <h2 className="hero-memory-title">{slide.title}</h2>
                    <p className="hero-memory-date">{slide.date}</p>
                    <p className="hero-memory-description">{slide.description}</p>
                  </motion.div>
                  
                  <motion.div 
                    className="hero-brand-text"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    For Daria
                  </motion.div>
                </div>

                {/* Right Image */}
                <div className="hero-image-content">
                  <motion.img 
                    src={slide.image}
                    alt={slide.title}
                    className="hero-image"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                  />
                  <div className="hero-overlay" style={{ color: slide.textColor }}>
                    <motion.p 
                      className="hero-love-text"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                    >
                      My Love
                    </motion.p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation */}
      <div className="swiper-button-prev-custom hero-nav-btn">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m15 18-6-6 6-6"/>
        </svg>
      </div>
      <div className="swiper-button-next-custom hero-nav-btn">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="m9 18 6-6-6-6"/>
        </svg>
      </div>
      
      {/* Custom Pagination */}
      <div className="swiper-pagination-custom"></div>
    </div>
  );
};

export default HeroSlider;