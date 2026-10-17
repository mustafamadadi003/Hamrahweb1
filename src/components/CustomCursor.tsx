import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { useApp } from '../context/AppContext';

export const CustomCursor: React.FC = () => {
  const { theme } = useApp();
  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);

  const springConfig = { damping: 30, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 200);
      cursorY.set(e.clientY - 200);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <motion.div
      className={`fixed top-0 left-0 z-[9999] w-[400px] h-[400px] rounded-full pointer-events-none hidden md:block transition-opacity duration-300 ${
        theme === 'dark' ? 'mix-blend-screen opacity-25' : 'mix-blend-multiply opacity-30'
      }`}
      style={{
        background: 'radial-gradient(circle, #00F5D4 0%, transparent 60%)',
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
    />
  );
};
