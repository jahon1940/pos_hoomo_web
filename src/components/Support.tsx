'use client';

import { Settings, BookOpen, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Marquee from 'react-fast-marquee';
import { Trans } from 'react-i18next';

const Support = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center mb-16">
          <h2 className="text-3xl md:text-6xl font-bold text-gray-900 mb-4">
            <Trans i18nKey="support.title">
              <span className="text-primary">placeholder</span>
            </Trans>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-xl mx-auto">
            <Trans i18nKey="support.subtitle">
              <span className="text-primary">placeholder</span>
            </Trans>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Support;
