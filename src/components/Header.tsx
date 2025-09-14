'use client';

import { useState } from 'react';
import { Menu, X, ChevronDown, Phone, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelect from './LanguageSelect';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const { t } = useLanguage();

  const solutions = [
    t('solutions.store_management'),
    t('solutions.clothing_store'),
    t('solutions.shoe_store'), 
    t('solutions.stationery_store'),
    t('solutions.construction_store'),
    t('solutions.cosmetics_store'),
    t('solutions.accessories_store'),
    t('solutions.electronics_store'),
    t('solutions.household_store'),
    t('solutions.start_online'),
    t('solutions.internet_store'),
    t('solutions.telegram_bot'),
    t('solutions.financing'),
    t('solutions.all_features'),
    t('solutions.integrations')
  ];

  return (
    <header className="bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10 text-sm">
            <div className="flex items-center text-gray-600">
              <Phone className="h-4 w-4 mr-2" />
              <span className="hidden md:block">
                {t("nav.contact_manager")}{" "}
              </span>
              <span>{t("nav.contact_phone")}</span>
            </div>
            <div className="flex items-center space-x-4">
              <LanguageSelect />
              <button className="hidden md:flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                <span className="mr-1">{t("nav.login")}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">
                    <img className='w-[20px] object-contain' src="/images/logo2.png" alt="" />
                  </span>
                </div>
                <div className="text-2xl font-bold text-gray-900">Hoomo</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <div className="relative group">
                <button
                  className="flex items-center text-gray-700 hover:text-primary transition-colors"
                  onMouseEnter={() => setIsSolutionsOpen(true)}
                  onMouseLeave={() => setIsSolutionsOpen(false)}
                >
                  {t("nav.solutions")}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                {isSolutionsOpen && (
                  <div
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border z-50"
                    onMouseEnter={() => setIsSolutionsOpen(true)}
                    onMouseLeave={() => setIsSolutionsOpen(false)}
                  >
                    <div className="py-2">
                      {solutions.map((solution, index) => (
                        <a
                          key={index}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary"
                        >
                          {solution}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {t("nav.why_billz")}
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {t("nav.pricing")}
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {t("nav.resources")}
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {t("nav.company")}
              </a>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <button className="bg-gray-100 text-blue-600 px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors font-medium">
                {t("nav.get_demo")}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                <a
                  href="#"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                >
                  {t("nav.solutions")}
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                >
                  {t("nav.why_billz")}
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                >
                  {t("nav.pricing")}
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                >
                  {t("nav.resources")}
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                >
                  {t("nav.company")}
                </a>
                <div className="pt-4 border-t">
                  <div className="flex items-center justify-center px-3 py-2">
                    <LanguageSelect />
                  </div>
                  <button className="w-full mt-2 bg-gray-100 text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200">
                    {t("nav.get_demo")}
                  </button>
                  <button className="w-full mt-2 text-blue-600 hover:text-blue-700 flex items-center justify-center">
                    <span className="mr-1">{t("nav.login")}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
