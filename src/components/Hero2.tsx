'use client';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Play } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Hero2 = () => {
  const { t } = useLanguage();
  const swiperRef = useRef<SwiperRef>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [mobileImageKey, setMobileImageKey] = useState(0);

  // Slide data - har bir slidda laptop va mobile rasm
  const slides = [
    {
      id: 1,
      laptopImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      mobileImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=600&fit=crop"
    },
    {
      id: 2,
      laptopImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      mobileImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=600&fit=crop"
    },
    {
      id: 3,
      laptopImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
      mobileImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=600&fit=crop"
    }
  ];

  // Slide o'zgarganda mobile rasm animatsiyasini boshqarish
  const handleSlideChange = (swiper: SwiperClass) => {
  setActiveSlide(swiper.activeIndex);
  setMobileImageKey(0);
  setTimeout(() => {
    setMobileImageKey(prev => prev + 1);
  }, 200);
};

  return (
    <section className="bg-white py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          
          {/* Chap tomonda matn va tugma */}
          <motion.div
            className="space-y-8 col-span-2"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Облачная ERP для вашего бизнеса
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-600 leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Все, что нужно для малого бизнеса в Узбекистане, — в одной системе: продажи, закупки, склад, финансы и производство
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.button
                className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Начать работу
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>

              <motion.button
                className="flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="bg-white rounded-full p-3 mr-3 shadow-md">
                  <Play className="h-6 w-6 text-blue-600" />
                </div>
                Смотреть демо
              </motion.button>
            </motion.div>
          </motion.div>

          {/* O'ng tomonda Swiper slide */}
          <motion.div
            className="relative col-span-3"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              pagination={{
                clickable: true,
                el: '.swiper-pagination-custom',
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
              onSlideChange={handleSlideChange}
              className="hero-swiper"
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div className="relative">
                    {/* Laptop rasm (orqada) */}
                    <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
                      <img
                        src={slide.laptopImage}
                        alt={`Laptop view ${slide.id}`}
                        className="w-[92%] ml-auto h-full object-cover rounded-xl border-4 border-white"
                      />
                      
                      {/* Mobile rasm (ustida) */}
                      <AnimatePresence mode="wait">
                        {mobileImageKey > 0 && (
                          <motion.div 
                            key={`${slide.id}-${mobileImageKey}`}
                            initial={{ x: 400, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            
                            transition={{ 
                              duration: 0.8, 
                              ease: "easeOut"
                            }}
                            exit={{
                              x: 400,
                              opacity: 0,
                              transition: {
                                duration: 0,
                                ease: "easeIn"
                              }
                            }} 
                            className="absolute top-[50%] translate-y-[-50%] left-0 w-32 h-48 md:w-50 md:h-80 rounded-xl overflow-hidden shadow-xl border-4 border-white"
                          >
                            <img
                              src={slide.mobileImage}
                              alt={`Mobile view ${slide.id}`}
                              className="w-full h-full object-cover"
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom navigation buttons */}
            <div className="swiper-button-prev-custom absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <div className="swiper-button-next-custom absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Custom pagination */}
            <div className="swiper-pagination-custom flex justify-center mt-6 space-x-2"></div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        .hero-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #d1d5db;
          opacity: 1;
        }
        .hero-swiper .swiper-pagination-bullet-active {
          background: #1d4ed8;
        }
        .hero-swiper .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </section>
  );
};

export default Hero2;