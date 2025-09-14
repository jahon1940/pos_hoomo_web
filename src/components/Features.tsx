'use client';

import { Package, Users, ShoppingCart, BarChart3, Megaphone, DollarSign, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import AnimatedCard from './AnimatedCard';
import { Trans } from 'react-i18next';

const Features = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Package,
      title: t('features.inventory.title'),
      description: t('features.inventory.description'),
      benefit: t('features.inventory.benefit'),
      color: "blue",
      image: "https://billz.io/_next/image?url=https%3A%2F%2Fbillzwp.billz.work%2Fwp-content%2Fuploads%2F2022%2F06%2F1-1.webp&w=1920&q=75"  
    },
    {
      icon: Users,
      title: t('features.customers.title'),
      description: t('features.customers.description'),
      benefit: t('features.customers.benefit'),
      color: "green",
      image: "https://billz.io/_next/image?url=https%3A%2F%2Fbillzwp.billz.work%2Fwp-content%2Fuploads%2F2022%2F06%2F1-1.webp&w=1920&q=75"  
    },
    {
      icon: ShoppingCart,
      title: t('features.sales.title'),
      description: t('features.sales.description'),
      benefit: t('features.sales.benefit'),
      color: "purple",
      image: "https://billz.io/_next/image?url=https%3A%2F%2Fbillzwp.billz.work%2Fwp-content%2Fuploads%2F2022%2F06%2F1-1.webp&w=1920&q=75"  
    },
    {
      icon: BarChart3,
      title: t('features.reports.title'),
      description: t('features.reports.description'),
      benefit: t('features.reports.benefit'),
      color: "orange",
      image: "https://billz.io/_next/image?url=https%3A%2F%2Fbillzwp.billz.work%2Fwp-content%2Fuploads%2F2022%2F06%2F1-1.webp&w=1920&q=75"  
    },
    {
      icon: Megaphone,
      title: t('features.marketing.title'),
      description: t('features.marketing.description'),
      benefit: t('features.marketing.benefit'),
      color: "pink",
      image: "https://billz.io/_next/image?url=https%3A%2F%2Fbillzwp.billz.work%2Fwp-content%2Fuploads%2F2022%2F06%2F1-1.webp&w=1920&q=75"  
    },
    {
      icon: DollarSign,
      title: t('features.finance.title'),
      description: t('features.finance.description'),
      benefit: t('features.finance.benefit'),
      color: "indigo",
      image: "https://billz.io/_next/image?url=https%3A%2F%2Fbillzwp.billz.work%2Fwp-content%2Fuploads%2F2022%2F06%2F1-1.webp&w=1920&q=75"  
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600", 
      purple: "bg-purple-100 text-purple-600",
      orange: "bg-orange-100 text-orange-600",
      pink: "bg-pink-100 text-pink-600",
      indigo: "bg-indigo-100 text-indigo-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16" delay={0.2}>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Trans i18nKey="features.title">
              <span className="text-primary">placeholder</span>
            </Trans>
          </motion.h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedCard key={index} delay={index * 0.1}>
              <motion.div
                className="bg-white rounded-4xl p-6 shadow-sm border hover:shadow-md transition-shadow group"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className={`inline-flex p-3 rounded-lg ${getColorClasses(
                    feature.color
                  )} mb-6`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <feature.icon className="h-6 w-6" />
                </motion.div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4 line-clamp-2">
                  {feature.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {feature.description}
                </p>

                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-700 font-medium line-clamp-2">
                    {feature.benefit}
                  </p>
                </div>

                <motion.button
                  className="text-blue-600 hover:text-blue-700 font-medium flex items-center mb-4"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {t("features.learn_more")}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </motion.button>
                <img
                  className="rounded-4xl group-hover:scale-105 transition-all duration-300"
                  src={feature.image}
                  alt=""
                />
              </motion.div>
            </AnimatedCard>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12" delay={0.8}>
          <motion.button
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t("features.all_features")}
          </motion.button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Features;
