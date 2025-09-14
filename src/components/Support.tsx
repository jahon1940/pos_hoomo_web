'use client';

import { Settings, BookOpen, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Support = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('support.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('support.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {t('support.paper.title')}
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              {t('support.paper.description')}
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              {t('support.paper.button')}
            </button>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-3 rounded-lg mr-4">
                <Settings className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {t('support.other.title')}
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              {t('support.other.description')}
            </p>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
              {t('support.other.button')}
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-sm text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-blue-100 p-3 rounded-lg mr-4">
              <Phone className="h-6 w-6 text-blue-600" />
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold text-gray-900">{t('support.contact.phone')}</div>
              <div className="text-gray-600">{t('support.contact.email')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
