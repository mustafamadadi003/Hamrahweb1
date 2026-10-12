import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'motion/react';
import { useApp } from '../context/AppContext';
import { Language } from '../i18n/translations';

// Convert ASCII numbers to localized digits (Persian/Pashto vs English)
export const formatLocalizedNumber = (
  num: number | string,
  lang: Language,
  decimals: number = 0
): string => {
  let numStr = typeof num === 'number' ? num.toFixed(decimals) : num;

  // Add commas for thousands in English if whole number
  if (typeof num === 'number' && decimals === 0) {
    numStr = Math.round(num).toLocaleString('en-US');
  }

  if (lang === 'en') return numStr;

  const easternDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return numStr
    .replace(/,/g, '٬')
    .replace(/\./g, '٫')
    .replace(/[0-9]/g, (digit) => easternDigits[parseInt(digit, 10)]);
};

interface AnimatedCounterProps {
  end: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number; // In seconds
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 2,
  className = '',
}) => {
  const { language } = useApp();
  const [count, setCount] = useState<number>(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimatedRef.current) {
      hasAnimatedRef.current = true;

      let startTime: number | null = null;
      let animationFrameId: number;

      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

        // Ease-out expo curve for smooth counting
        const easeOutProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentCount = easeOutProgress * end;

        setCount(currentCount);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animateCount);
        } else {
          setCount(end);
        }
      };

      animationFrameId = requestAnimationFrame(animateCount);

      return () => {
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
      };
    }
  }, [isInView, end, duration]);

  const displayVal = formatLocalizedNumber(count, language, decimals);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {prefix}
      {displayVal}
      {suffix}
    </span>
  );
};
