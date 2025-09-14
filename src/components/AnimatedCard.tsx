'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

const AnimatedCard = ({ 
  children, 
  className = '', 
  delay = 0,
  hover = true 
}: AnimatedCardProps) => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75]
      }}
      whileHover={hover ? {
        y: -8,
        transition: { duration: 0.2 }
      } : {}}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
