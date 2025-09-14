'use client';

import { Settings, BookOpen, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Marquee from 'react-fast-marquee';
import { Trans } from 'react-i18next';
import AnimatedSection from './AnimatedSection';

const Support = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-[400px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <AnimatedSection delay={0.2} className="text-3xl md:text-6xl font-bold text-gray-900 mb-4">
            <Trans i18nKey="support.title">
              <span className="text-primary">placeholder</span>
            </Trans>
          </AnimatedSection>
          <AnimatedSection delay={0.4} className="text-xl md:text-2xl text-gray-600 max-w-xl mx-auto">
            <Trans i18nKey="support.subtitle">
              <span className="text-primary">placeholder</span>
            </Trans>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Support;
