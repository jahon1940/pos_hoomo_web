'use client';

import { Play, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedText from './AnimatedText';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import AnimatedCard from './AnimatedCard';

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section className="bg-white py-20 relative overflow-hidden pb-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Images positioned around the hero content */}
        <div className="relative mb-20 lg:mb-0">
          {/* Top Left Image */}
          <div className="absolute top-0 -left-30 w-80 h-52 hidden lg:block">
            <div className="w-full h-full rounded-2xl shadow-lg overflow-hidden">
              <img className='w-full h-full object-cover' src="https://billz.io/_next/image?url=https%3A%2F%2Fbillzwp.billz.work%2Fwp-content%2Fuploads%2F2022%2F06%2F1-1.webp&w=1920&q=75" alt="" />
            </div>
          </div>

          {/* Top Right Image */}
          <div className="absolute top-0 -right-30 w-80 h-52 hidden lg:block">
            <div className="w-full h-full rounded-2xl shadow-lg overflow-hidden">
              <img className='w-full h-full object-cover' src="https://billz.io/_next/image?url=https%3A%2F%2Fbillzwp.billz.work%2Fwp-content%2Fuploads%2F2022%2F06%2F1-1.webp&w=1920&q=75" alt="" />
            </div>
          </div>

          {/* Bottom Left Image */}
          <div className="absolute bottom-10 -left-10 w-80 h-48 hidden lg:block">
            <div className="w-full h-full bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl shadow-lg overflow-hidden">
               <img className='w-full h-full object-cover' src="https://billz.io/_next/image?url=https%3A%2F%2Fbillzwp.billz.work%2Fwp-content%2Fuploads%2F2022%2F06%2F1-1.webp&w=1920&q=75" alt="" />
            </div>
          </div>

          {/* Bottom Middle Image */}
          <div className="absolute -bottom-30 left-1/2 transform -translate-x-1/2 w-90 h-56 hidden lg:block">
            <div className="w-full h-full bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl shadow-lg overflow-hidden">
               <img className='w-full h-full object-cover' src="https://billz.io/_next/image?url=https%3A%2F%2Fbillzwp.billz.work%2Fwp-content%2Fuploads%2F2022%2F06%2F1-1.webp&w=1920&q=75" alt="" />
            </div>
          </div>

          {/* Bottom Right Image */}
          <div className="absolute bottom-10 -right-10 w-80 h-48 hidden lg:block">
            <div className="w-full h-full bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl shadow-lg overflow-hidden">
               <img className='w-full h-full object-cover' src="https://billz.io/_next/image?url=https%3A%2F%2Fbillzwp.billz.work%2Fwp-content%2Fuploads%2F2022%2F06%2F1-1.webp&w=1920&q=75" alt="" />
            </div>
          </div>

          {/* Central Hero Content */}
          <AnimatedSection className="text-center pt-10 pb-0  lg:pb-32" delay={0.2}>
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <AnimatedText /> do&apos;konlari<br />
              uchun superkuch
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-0 lg:mb-12"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.button 
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('hero.try_button')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
              
              <motion.button 
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="bg-white rounded-full p-3 mr-3 shadow-md">
                  <Play className="h-6 w-6 text-blue-600" />
                </div>
                {t('hero.watch_video')}
              </motion.button>
            </motion.div>
          </AnimatedSection>
        </div>

        {/* Mobile Images Grid */}
        <AnimatedSection className="lg:hidden grid grid-cols-6 md:grid-cols-6 gap-4 max-w-4xl mx-auto mb-12 w-full" delay={0.4}>
          <AnimatedCard className='col-span-6 md:col-span-3' delay={0.1}>
            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center h-[300px] w-full">
                 <img className='w-full h-full object-cover' src="https://billz.io/_next/image?url=https%3A%2F%2Fbillzwp.billz.work%2Fwp-content%2Fuploads%2F2022%2F06%2F1-1.webp&w=1920&q=75" alt="" />
              </div>
            </div>
          </AnimatedCard>
          <AnimatedCard className='col-span-3 md:col-span-3' delay={0.1}>
            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center md:h-[300px] w-full">
                 <img className='w-full h-full object-cover' src="https://billz.io/_next/image?url=https%3A%2F%2Fbillzwp.billz.work%2Fwp-content%2Fuploads%2F2022%2F06%2F1-1.webp&w=1920&q=75" alt="" />
              </div>
            </div>
          </AnimatedCard>
          <AnimatedCard className='col-span-3 md:col-span-2' delay={0.1}>
            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                 <img className='w-full h-full object-cover' src="https://billz.io/_next/image?url=https%3A%2F%2Fbillzwp.billz.work%2Fwp-content%2Fuploads%2F2022%2F06%2F1-1.webp&w=1920&q=75" alt="" />
              </div>
            </div>
          </AnimatedCard >
          <AnimatedCard className='col-span-3 md:col-span-2' delay={0.1}>
            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                 <img className='w-full h-full object-cover' src="https://billz.io/_next/image?url=https%3A%2F%2Fbillzwp.billz.work%2Fwp-content%2Fuploads%2F2022%2F06%2F1-1.webp&w=1920&q=75" alt="" />
              </div>
            </div>
          </AnimatedCard>
          <AnimatedCard className='col-span-3 md:col-span-2' delay={0.1}>
            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                 <img className='w-full h-full object-cover' src="https://billz.io/_next/image?url=https%3A%2F%2Fbillzwp.billz.work%2Fwp-content%2Fuploads%2F2022%2F06%2F1-1.webp&w=1920&q=75" alt="" />
              </div>
            </div>
          </AnimatedCard>
          
          
        </AnimatedSection>

        
      </div>
    </section>
  );
};

export default Hero;
