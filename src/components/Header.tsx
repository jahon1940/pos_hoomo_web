'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelect from './LanguageSelect';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      <div className={`bg-gray-50 border-b py-3 transition-opacity duration-300 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10 text-sm">
            <div className="flex items-center text-gray-600">
              <Phone className="h-4 w-4 mr-2" />
              <span className="hidden md:block ">
                {t("nav.contact_manager")}{" "}
              </span>
              <span className="font-extrabold ml-2 text-black">
                <a className='font-extrabold text-md' href="tel:+998933373920">{t("nav.contact_phone")}</a>
              </span>
            </div>
            <div className="flex items-center space-x-4 bg-white shadow-md rounded-lg py-1 px-2">
              <LanguageSelect />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`bg-white transition-all duration-500 ease-in-out ${isScrolled ? 'fixed top-0 left-0 right-0 z-50 shadow-lg animate-slideDown' : 'relative'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">
                    <img
                      className="w-[20px] object-contain"
                      src="/images/logo2.png"
                      alt=""
                    />
                  </span>
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  Hpos system
                </div>
              </div>
            </Link>

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
                    className="absolute top-full left-0 mt-0 w-64 bg-white rounded-lg shadow-lg border z-50"
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
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {t("nav.company")}
              </Link>
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
                <Link
                  href="/about"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                >
                  {t("nav.company")}
                </Link>
                <div className="pt-4 border-t">
                  <div className="flex items-center justify-center px-3 py-2">
                    <LanguageSelect />
                  </div>
                  <button className="w-full mt-2 bg-gray-100 text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200">
                    {t("nav.get_demo")}
                  </button>
                  
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.5s ease-in-out;
        }
      `}</style>
    </header>
  );
};

export default Header;
