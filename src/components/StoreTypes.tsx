'use client';

import { Shirt, Footprints, PenTool, Hammer, Sparkles, Watch, Smartphone, Home } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { Trans } from 'react-i18next';

const StoreTypes = () => {
  const { t } = useLanguage();
  const [hoveredStore, setHoveredStore] = useState<number | null>(null);
  
  const storeTypes = [
    { 
      icon: Shirt, 
      name: t('solutions.clothing_store'), 
      color: "blue",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      rotate: "rotate-2"
    },
    { 
      icon: Footprints, 
      name: t('solutions.shoe_store'), 
      color: "green",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=600&fit=crop",
      rotate: "-rotate-1"
    },
    { 
      icon: PenTool, 
      name: t('solutions.stationery_store'), 
      color: "purple",
      image: "/images/store3.png",
      rotate: "rotate-1"
    },
    { 
      icon: Hammer, 
      name: t('solutions.construction_store'), 
      color: "orange",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
      rotate: "-rotate-2"
    },
    { 
      icon: Sparkles, 
      name: t('solutions.cosmetics_store'), 
      color: "pink",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=600&fit=crop",
      rotate: "rotate-3"
    },
    { 
      icon: Watch, 
      name: t('solutions.accessories_store'), 
      color: "indigo",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop",
      rotate: "-rotate-1"
    },
    { 
      icon: Smartphone, 
      name: t('solutions.electronics_store'), 
      color: "red",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&h=600&fit=crop",
      rotate: "rotate-2"
    },
    { 
      icon: Home, 
      name: t('solutions.household_store'), 
      color: "teal",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      rotate: "-rotate-3"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600 hover:bg-blue-200",
      green: "bg-green-100 text-green-600 hover:bg-green-200",
      purple: "bg-purple-100 text-purple-600 hover:bg-purple-200",
      orange: "bg-orange-100 text-orange-600 hover:bg-orange-200",
      pink: "bg-pink-100 text-pink-600 hover:bg-pink-200",
      indigo: "bg-indigo-100 text-indigo-600 hover:bg-indigo-200",
      red: "bg-red-100 text-red-600 hover:bg-red-200",
      teal: "bg-teal-100 text-teal-600 hover:bg-teal-200"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Store types */}
          <div>
           
            <AnimatedSection delay={0.2} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <Trans i18nKey="store_types.title">
                <span className="text-primary">placeholder</span>
              </Trans>
            </AnimatedSection>
            

            <div className="grid grid-cols-2 gap-4 mt-8">
              {storeTypes.map((store, index) => (
                <AnimatedSection delay={index * 0.1} key={index}>
                  <div
                    key={index}
                    className={`${getColorClasses(
                      store.color
                    )} rounded-xl p-4 text-center cursor-pointer transition-all duration-300 transform hover:scale-105 flex items-center gap-2`}
                    onMouseEnter={() => setHoveredStore(index)}
                    onMouseLeave={() => setHoveredStore(null)}
                  >
                    <store.icon className="h-8 w-8" />
                    <h3 className="font-semibold text-sm">{store.name}</h3>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Right side - Image */}
          <AnimatedSection delay={0.4} className="relative">
            <div
              className={`relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 ${
                hoveredStore !== null
                  ? storeTypes[hoveredStore].rotate
                  : "rotate-0"
              }`}
            >
              <img
                src={
                  hoveredStore !== null
                    ? storeTypes[hoveredStore].image
                    : "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop"
                }
                alt="Store"
                className={`w-full h-96 object-cover transition-all duration-500 `}
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default StoreTypes;
