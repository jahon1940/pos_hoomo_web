'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const AnimatedText = () => {
  const { language } = useLanguage();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const words = {
    uz: ['Elektronika', 'Kiyim', 'Poyabzal', 'Kosmetika'],
    ru: ['Электроника', 'Одежда', 'Обувь', 'Косметика']
  };

  const currentWords = words[language as keyof typeof words] || words.uz;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % currentWords.length);
    }, 1500); // 1.5 sekunda

    return () => clearInterval(interval);
  }, [currentWords.length]);

  return (
    <span className="text-primary transition-all duration-500 ease-in-out inline-block text-left">
      {currentWords[currentWordIndex]}
    </span>
  );
};

export default AnimatedText;
