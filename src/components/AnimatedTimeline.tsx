import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { useApp } from '../context/AppContext';
import { AnimatedCounter, formatLocalizedNumber } from './AnimatedCounter';

interface TimelineItemData {
  number: number;
  year: string;
  title: string;
  desc: string;
}

export const AnimatedTimeline: React.FC = () => {
  const { t, language } = useApp();
  const containerRef = useRef<HTMLDivElement>(null);

  // Measure scroll progress relative to the timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 75%', 'end 50%'],
  });

  // Smooth liquid spring motion
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  // Calculate liquid fill percentage for styling
  const fillHeight = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

  const timelineItems: TimelineItemData[] = [
    {
      number: 1,
      year: t.timeline.node1Year,
      title: t.timeline.node1Title,
      desc: t.timeline.node1Desc,
    },
    {
      number: 2,
      year: t.timeline.node2Year,
      title: t.timeline.node2Title,
      desc: t.timeline.node2Desc,
    },
    {
      number: 3,
      year: t.timeline.node3Year,
      title: t.timeline.node3Title,
      desc: t.timeline.node3Desc,
    },
    {
      number: 4,
      year: t.timeline.node4Year,
      title: t.timeline.node4Title,
      desc: t.timeline.node4Desc,
    },
    {
      number: 5,
      year: t.timeline.node5Year,
      title: t.timeline.node5Title,
      desc: t.timeline.node5Desc,
    },
  ];

  return (
    <div ref={containerRef} className="relative w-full flex flex-col items-center">
      
      {/* Background Static Line Track */}
      <div className="absolute top-6 bottom-6 left-6 md:left-1/2 -translate-x-1/2 w-2 bg-[#DCE9FF] dark:bg-[#22304A] rounded-full z-0 overflow-hidden" />

      {/* Animated Liquid Flowing Line Track */}
      <motion.div
        style={{ height: fillHeight }}
        className="absolute top-6 left-6 md:left-1/2 -translate-x-1/2 w-2 bg-gradient-to-b from-[#00BFA5] via-[#00897B] to-[#00F5D4] dark:from-[#00F5D4] dark:via-[#00F5D4] dark:to-[#00F5D4] rounded-full z-0 shadow-[0_0_12px_rgba(0,106,98,0.5)] dark:shadow-[0_0_12px_rgba(46,230,214,0.8)] transition-all"
      >
        {/* Glowing liquid tip */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#00BFA5] dark:bg-[#00F5D4] shadow-[0_0_15px_#00BFA5] dark:shadow-[0_0_15px_#00F5D4] animate-ping" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#00BFA5] dark:bg-[#00F5D4]" />
      </motion.div>

      {/* Timeline Items List */}
      <div className="w-full space-y-12 my-4">
        {timelineItems.map((item, index) => {
          // Thresholds for each node's liquid activation
          const threshold = index / (timelineItems.length - 0.8);

          return (
            <TimelineNodeItem
              key={item.number}
              item={item}
              index={index}
              progress={smoothProgress}
              threshold={threshold}
              language={language}
            />
          );
        })}
      </div>

    </div>
  );
};

const TimelineNodeItem: React.FC<{
  item: TimelineItemData;
  index: number;
  progress: any;
  threshold: number;
  language: any;
}> = ({ item, index, progress, threshold, language }) => {
  const isEven = index % 2 === 1;

  // Transform for active node state
  const activeProgress = useTransform(progress, (p: number) => (p >= threshold ? 1 : 0));
  const inactiveProgress = useTransform(progress, (p: number) => (p >= threshold ? 0 : 1));

  return (
    <div className="relative w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center z-10">
      
      {/* Left side card (Desktop for even nodes) */}
      {isEven ? (
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full pl-14 md:pl-0 md:pr-12 md:text-right order-2 md:order-1"
        >
          <div className="bg-white dark:bg-[#0B1F3A] border border-[#E2E8EE] dark:border-[#22304A] p-6 rounded-3xl shadow-lg hover:border-[#00BFA5] dark:hover:border-[#00F5D4] transition-all duration-300">
            <div className="flex items-center justify-between md:flex-row-reverse mb-2">
              <h4 className="text-base font-bold text-[#0B1F3A] dark:text-[#F3F4F6]">{item.title}</h4>
              <span className="px-2.5 py-0.5 rounded-md bg-[#00BFA5]/10 dark:bg-[#00F5D4]/10 text-[#00BFA5] dark:text-[#00F5D4] text-xs font-bold">
                {item.year}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#475569] dark:text-[#9CA3AF] leading-relaxed">
              {item.desc}
            </p>
          </div>
        </motion.div>
      ) : (
        <div className="hidden md:block order-1" />
      )}

      {/* Central Number Badge Marker */}
      <motion.div
        style={{
          scale: useTransform(progress, (p: number) => (p >= threshold ? 1.18 : 1)),
        }}
        className="absolute left-6 md:left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center font-extrabold text-base transition-all duration-300 shadow-xl cursor-pointer"
      >
        {/* Active liquid fill backdrop */}
        <motion.div
          style={{
            opacity: activeProgress,
          }}
          className="absolute inset-0 rounded-full bg-[#00BFA5] dark:bg-[#00F5D4] shadow-[0_0_20px_rgba(0,106,98,0.5)] dark:shadow-[0_0_20px_rgba(46,230,214,0.6)]"
        />

        {/* Text when active */}
        <motion.div
          style={{ opacity: activeProgress }}
          className="absolute z-10 text-white dark:text-[#0B1F3A] font-extrabold text-base flex items-center justify-center"
        >
          <AnimatedCounter end={item.number} duration={0.6} />
        </motion.div>

        {/* Text when inactive */}
        <motion.div
          style={{ opacity: inactiveProgress }}
          className="absolute z-10 text-[#00BFA5] dark:text-[#00F5D4] font-extrabold text-base flex items-center justify-center"
        >
          {formatLocalizedNumber(item.number, language)}
        </motion.div>

        {/* Inactive fallback state backdrop */}
        <div className="absolute inset-0 rounded-full bg-white dark:bg-[#0B1F3A] border-2 border-[#00BFA5] dark:border-[#00F5D4] -z-10 shadow-md" />
      </motion.div>

      {/* Right side card (Desktop for odd nodes) */}
      {!isEven ? (
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full pl-14 md:pl-12 order-2"
        >
          <div className="bg-white dark:bg-[#0B1F3A] border border-[#E2E8EE] dark:border-[#22304A] p-6 rounded-3xl shadow-lg hover:border-[#00BFA5] dark:hover:border-[#00F5D4] transition-all duration-300">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-base font-bold text-[#0B1F3A] dark:text-[#F3F4F6]">{item.title}</h4>
              <span className="px-2.5 py-0.5 rounded-md bg-[#00BFA5]/10 dark:bg-[#00F5D4]/10 text-[#00BFA5] dark:text-[#00F5D4] text-xs font-bold">
                {item.year}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#475569] dark:text-[#9CA3AF] leading-relaxed">
              {item.desc}
            </p>
          </div>
        </motion.div>
      ) : (
        <div className="hidden md:block order-2" />
      )}

    </div>
  );
};
