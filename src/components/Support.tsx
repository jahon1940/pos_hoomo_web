'use client';

import { Settings, BookOpen, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Marquee from 'react-fast-marquee';

const Support = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
         
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("support.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("support.subtitle")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Support;
