import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'motion/react';

export const RouteProgressBar: React.FC = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    setProgress(25);

    const timer1 = setTimeout(() => setProgress(75), 100);
    const timer2 = setTimeout(() => {
      setProgress(100);
      const timer3 = setTimeout(() => {
        setIsLoading(false);
        setProgress(0);
      }, 250);
      return () => clearTimeout(timer3);
    }, 350);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [location.pathname]);

  if (!isLoading && progress === 0) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[3px] bg-transparent pointer-events-none">
      <motion.div
        className="h-full bg-gradient-to-r from-[#00F5D4] via-[#0B1F3A] to-[#00F5D4] shadow-[0_0_12px_#00F5D4]"
        initial={{ width: '0%' }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
      />
    </div>
  );
};
