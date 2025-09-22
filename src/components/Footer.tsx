'use client';

import { Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  const solutions = [
    t('solutions.stationery_store') + ' uchun',
    t('solutions.cosmetics_store') + ' uchun',
    t('solutions.accessories_store') + ' uchun',
    t('solutions.electronics_store') + ' uchun',
    t('solutions.internet_store'),
    t('solutions.telegram_bot'),
    t('solutions.integrations'),
    t('solutions.all_features')
  ];

  const features = [
    t('features.inventory.title'),
    t('features.customers.title'),
    t('features.sales.title'),
    t('features.reports.title'),
  ];

  const resources = [
   
    "Qo'llab-quvvatlash xizmati",
    "Video darsliklar",
    
  ];

  

  const company = [
    "Biz haqimizda",
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.solutions')}</h3>
            <ul className="space-y-2">
              {solutions.map((solution, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    {solution}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.why_billz')}</h3>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    {feature}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.resources')}</h3>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2">
              {company.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2" />
                <span>{t('support.contact.phone')}</span>
              </div>
              {/* <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                <span>{t('support.contact.email')}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-2" />
                <span>{t('footer.country')}</span>
              </div> */}
            </div>
            
            <div className=" flex items-center gap-2 mt-4 md:mt-0">
              <img className='w-8' src="/images/logo_footer.png" alt="" />
              <div className="text-2xl font-bold text-blue-400">Hpos system</div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
