import React, { useRef, useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ScrollReveal';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { Footer } from '../components/Footer';

// Image Imports matching existing project assets
import founderImg from '../assets/images/founder.jpg';
import techLeadImg from '../assets/images/tech_lead.jpg';
import growthLeadImg from '../assets/images/growth_lead.jpg';
import portfolioImg from '../assets/images/portfolio_mockup.jpg';
import insightsImg from '../assets/images/insights_mockup.jpg';
import collageTeamImg from '../assets/images/team_meeting.jpg';
import collageDesignImg from '../assets/images/design_sketch.jpg';

export const AboutView: React.FC = () => {
  const { language, isRtl, openConsultationModal, t } = useApp();
  
  // Timeline scroll progress
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  // Team Carousel States
  const [activeTeamIndex, setActiveTeamIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveTeamIndex((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleNextTeam = () => setActiveTeamIndex((prev) => (prev + 1) % 3);
  const handlePrevTeam = () => setActiveTeamIndex((prev) => (prev - 1 + 3) % 3);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diffX = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diffX) > 50) {
      if (diffX > 0) handlePrevTeam();
      else handleNextTeam();
    }
    touchStartX.current = null;
  };

  const teamMembers = [
    { name: t.teamCarousel.m1Name, role: t.teamCarousel.m1Role, img: founderImg },
    { name: t.teamCarousel.m2Name, role: t.teamCarousel.m2Role, img: techLeadImg },
    { name: t.teamCarousel.m3Name, role: t.teamCarousel.m3Role, img: growthLeadImg },
  ];

  const storyItems = [
    { year: '2018', title: language === 'prs' ? 'ورود به بازار کار' : language === 'pus' ? 'مارکیټ ته ننوتل' : 'Arriving in the Market', desc: language === 'prs' ? 'شروع به عنوان متخصصین زیرساخت دیجیتال و شناسایی نیازهای اصلی بازار.' : language === 'pus' ? 'د ډیجیټل بنسټیزو کارونو پیلول او د بازار د اړتیاوو پېژندل.' : 'Starting as specialized digital infrastructure technicians, identifying core technological gaps in emerging regional markets.' },
    { year: '2021', title: language === 'prs' ? 'راه‌اندازی اولین کسب‌وکار' : language === 'pus' ? 'لومړۍ سوداګري پیلول' : 'First Business Launched', desc: language === 'prs' ? 'ایجاد سیستم مشاوره‌ای و تحویل موفقیت‌آمیز اولین پلتفرم‌های شرکتی.' : language === 'pus' ? 'د مشورې سیسټم جوړول او د لومړنیو ۵۰ شرکتونو لپاره د پلتفارمونو سپارل.' : 'Establishing the foundational consultation framework, successfully delivering the first 50 enterprise client platforms.' },
    { year: '2022', title: language === 'prs' ? 'درک دیجیتال مارکتینگ' : language === 'pus' ? 'د ډیجیټل مارکیټینګ درک' : 'The Digital Marketing Realization', desc: language === 'prs' ? 'تلفیق سئو پربازده و تبلیغات هدفمند با مهندسی نرم‌افزار پیشرفته.' : language === 'pus' ? 'د SEO او مؤثرو اعلاناتو یوځای کول د پرمختللې سافټویر مهندسۍ سره.' : 'Integrating high-converting search optimization and Meta/Google performance ads with elite software development.' },
    { year: '2022', title: language === 'prs' ? 'شکل‌گیری تیم اصلی' : language === 'pus' ? 'د اصلي ټیم جوړېدل' : 'The Team Comes Together', desc: language === 'prs' ? 'جذب معماران برتر نرم‌افزار و طراحان خلاق برای ارائه بهترین کیفیت.' : language === 'pus' ? 'د غوره سافټویر معمارانو او نوښتګرو ډیزاینرانو راټولول.' : 'Recruiting top-tier software architects and creative directors, forming a unified powerhouse of engineering and design.' },
    { year: language === 'prs' ? 'امروز' : language === 'pus' ? 'نن ورځ' : 'Today', title: language === 'prs' ? 'تولد همراه تک' : language === 'pus' ? 'د همراه تک زیږیدنه' : 'Hamrah Tech Is Born', desc: language === 'prs' ? 'فعالیت به عنوان آژانس پیشرو در ارائه راهکارهای دیجیتال با بالاترین سرعت و بازدهی.' : language === 'pus' ? 'د لوړ سرعت او مؤثرو ډیجیټل خدماتو مخکښ اژانس.' : 'Operating as a premier full-service digital agency powering modern brands with sub-second performance and verified ROI.' },
  ];

  const SectionDivider = () => (
    <div className="relative w-full py-4 flex items-center justify-center bg-[#F8F9FF] dark:bg-[#0A1224]">
      <div className="w-full max-w-[1100px] h-[1px] bg-slate-300 dark:bg-white/10 relative">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#FF5722] shadow-[0_0_10px_#FF5722]" />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col w-full bg-[#F8F9FF] dark:bg-[#0A1224] text-[#44474E] dark:text-[#9CA3AF] selection:bg-[#2EE6D6] selection:text-[#0F2040] transition-colors duration-300 pt-20">

      {/* 1. ABOUT INTRO */}
      <div className="relative w-full h-[180px] sm:h-[220px] overflow-hidden bg-gradient-to-b from-transparent via-[#EFF4FF] dark:via-[#0F1A30] to-[#F8F9FF] dark:to-[#0A1224] flex items-center justify-center pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[250px] bg-gradient-to-tr from-[#FF5722]/10 to-[#2EE6D6]/10 rounded-full blur-[140px] animate-pulse" />
      </div>

      <section className="relative w-full pb-24 px-6">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <ScrollReveal variant="fade-right" className="lg:col-span-7 flex flex-col space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF5722] shadow-[0_0_8px_#FF5722]" />
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#FF5722]">
                {t.aboutUs.badge}
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0D1C2E] dark:text-white tracking-tight leading-[1.15]">
              {t.aboutUs.title}
            </h2>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-light">
              {t.aboutUs.desc1}
            </p>

            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
              {t.aboutUs.desc2}
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-4 bg-white dark:bg-[#111C33] border border-[#DCE9FF] dark:border-white/10 px-4 py-3 rounded-2xl shadow-xl backdrop-blur-sm">
                <div className="flex items-end gap-0.5 h-6 shrink-0" title="Audio Stream">
                  {[1.2, 2.5, 1.8, 2.8, 1.5, 2.3].map((multiplier, i) => (
                    <motion.span
                      key={i}
                      animate={{ height: ['15%', '100%', '15%'] }}
                      transition={{ repeat: Infinity, duration: multiplier, ease: 'easeInOut' }}
                      className="w-0.5 bg-[#FF5722] rounded-full"
                    />
                  ))}
                </div>

                <div className="flex -space-x-3 shrink-0">
                  <img src={founderImg} alt="Founder" className="w-10 h-10 rounded-full border-2 border-white dark:border-[#0A1224] object-cover object-top" />
                  <img src={techLeadImg} alt="CEO" className="w-10 h-10 rounded-full border-2 border-white dark:border-[#0A1224] object-cover object-top" />
                  <img src={growthLeadImg} alt="Manager" className="w-10 h-10 rounded-full border-2 border-white dark:border-[#0A1224] object-cover object-top" />
                </div>

                <div className="text-left">
                  <p className="text-xs font-bold text-[#0D1C2E] dark:text-white leading-none mb-1">Ali Rahimi</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">CEO</p>
                </div>
              </div>

              <button
                onClick={openConsultationModal}
                className="inline-flex items-center gap-2.5 bg-[#0F2040] dark:bg-[#2EE6D6] hover:bg-[#172B52] dark:hover:bg-[#52EDE1] text-white dark:text-[#0F2040] font-bold text-sm px-7 py-4 rounded-full transition shadow-xl cursor-pointer transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="material-symbols-outlined text-xs bg-white/20 rounded-full p-0.5 flex items-center justify-center font-bold">
                  arrow_outward
                </span>
                <span>{t.nav.freeConsultation}</span>
              </button>
            </div>
          </ScrollReveal>

          {/* Right Column: Glass Card */}
          <ScrollReveal variant="fade-left" className="lg:col-span-5 flex items-center justify-center">
            <motion.div
              whileHover={{ y: -6, boxShadow: "0px 0px 30px rgba(46, 230, 214, 0.15)" }}
              transition={{ duration: 0.3 }}
              className="relative p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#111C33] border border-[#DCE9FF] dark:border-white/10 shadow-2xl flex flex-col items-center justify-center text-center group max-w-sm w-full"
            >
              <div className="w-14 h-14 rounded-full border border-[#DCE9FF] dark:border-white/10 bg-slate-50 dark:bg-white/5 flex items-center justify-center text-[#2EE6D6] mb-6 shadow-md group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-3xl font-light">hub</span>
              </div>
              <h3 className="text-xl font-bold text-[#0D1C2E] dark:text-white mb-3 group-hover:text-[#2EE6D6] transition-colors">
                {t.aboutUs.collabTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                {t.aboutUs.collabDesc}
              </p>
              <div className="absolute inset-0 bg-[#2EE6D6]/5 opacity-0 group-hover:opacity-100 rounded-3xl blur-2xl transition-opacity pointer-events-none -z-10" />
            </motion.div>
          </ScrollReveal>

        </div>
      </section>

      <SectionDivider />

      {/* 2. OUR STORY */}
      <section className="relative w-full py-28 px-6 bg-[#EFF4FF] dark:bg-[#0F1A30]">
        <div className="max-w-[1100px] mx-auto flex flex-col items-center">
          
          <ScrollReveal variant="fade-up" className="text-center mb-24">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5722] shadow-[0_0_8px_#FF5722]" />
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#FF5722]">
                {t.aboutUs.storyBadge}
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0D1C2E] dark:text-white tracking-tight">
              {t.aboutUs.storyTitle}
            </h2>
          </ScrollReveal>

          <div ref={timelineRef} className="relative w-full flex flex-col items-center">
            <div className="absolute md:left-1/2 left-8 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-slate-300 dark:bg-slate-700/60 rounded-full z-0" />
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="absolute md:left-1/2 left-8 -translate-x-1/2 top-4 bottom-4 w-[3px] bg-gradient-to-b from-[#FF5722] via-orange-500 to-[#2EE6D6] shadow-[0_0_12px_#FF5722] rounded-full z-0 origin-top"
            />

            <div className="w-full space-y-16">
              {storyItems.map((item, idx) => {
                const isLeft = idx % 2 === 1;
                return (
                  <div key={idx} className="relative w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center z-10">
                    
                    {/* Left node */}
                    {isLeft ? (
                      <div className="md:pr-14 md:text-right flex md:justify-end justify-start pl-16 md:pl-0 order-2 md:order-1">
                        <motion.div
                          initial={{ opacity: 0, x: -40 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: '-60px' }}
                          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                          className="w-full max-w-[340px] bg-white dark:bg-[#111C33] border border-[#DCE9FF] dark:border-white/10 rounded-2xl p-6 relative group hover:border-[#FF5722]/40 shadow-xl transition-all duration-300"
                        >
                          <span className="absolute top-4 right-4 px-2 py-0.5 rounded bg-slate-100 dark:bg-black/60 border border-slate-200 dark:border-white/5 text-[10px] font-bold text-[#FF5722] tracking-wider uppercase">
                            {item.year}
                          </span>
                          <h4 className="text-base font-bold text-[#0D1C2E] dark:text-white mt-2 mb-3 tracking-tight group-hover:text-[#FF5722] transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                            {item.desc}
                          </p>
                        </motion.div>
                      </div>
                    ) : (
                      <div className="hidden md:block order-1" />
                    )}

                    {/* Timeline Node Center Badge */}
                    <motion.div
                      initial={{ scale: 0.8, backgroundColor: "#ffffff", borderColor: "#cbd5e1" }}
                      whileInView={{
                        scale: [0.8, 1],
                        backgroundColor: "#FF5722",
                        borderColor: "#FF5722",
                        boxShadow: "0 0 15px #FF5722, 0 0 30px #FF5722",
                      }}
                      viewport={{ once: false, amount: 0.7 }}
                      transition={{ type: "spring", stiffness: 220, damping: 14 }}
                      className="absolute md:left-1/2 left-8 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full border-2 border-[#FF5722] flex items-center justify-center font-bold text-white text-xs shadow-lg bg-[#0F2040]"
                    >
                      {idx + 1}
                    </motion.div>

                    {/* Right node */}
                    {!isLeft ? (
                      <div className="md:pl-14 text-left flex justify-start pl-16 order-2">
                        <motion.div
                          initial={{ opacity: 0, x: 40 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: '-60px' }}
                          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                          className="w-full max-w-[340px] bg-white dark:bg-[#111C33] border border-[#DCE9FF] dark:border-white/10 rounded-2xl p-6 relative group hover:border-[#FF5722]/40 shadow-xl transition-all duration-300"
                        >
                          <span className="absolute top-4 right-4 px-2 py-0.5 rounded bg-slate-100 dark:bg-black/60 border border-slate-200 dark:border-white/5 text-[10px] font-bold text-[#FF5722] tracking-wider uppercase">
                            {item.year}
                          </span>
                          <h4 className="text-base font-bold text-[#0D1C2E] dark:text-white mt-2 mb-3 tracking-tight group-hover:text-[#FF5722] transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                            {item.desc}
                          </p>
                        </motion.div>
                      </div>
                    ) : (
                      <div className="hidden md:block order-2" />
                    )}

                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      <SectionDivider />

      {/* 3. RECOGNITION */}
      <section className="relative w-full py-28 px-6 bg-[#F8F9FF] dark:bg-[#0A1224] overflow-hidden">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <ScrollReveal variant="fade-right" className="lg:col-span-6 text-left">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#FF5722] shadow-[0_0_8px_#FF5722]" />
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#FF5722]">
                {t.aboutUs.recognitionBadge}
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0D1C2E] dark:text-white tracking-tight mb-6">
              {t.aboutUs.recognitionTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-light max-w-[520px]">
              {t.aboutUs.recognitionDesc}
            </p>
          </ScrollReveal>

          {/* Right side stats row */}
          <ScrollReveal variant="fade-left" className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-[#111C33] border border-[#DCE9FF] dark:border-white/10 rounded-2xl p-6 text-center flex flex-col justify-center shadow-xl">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0D1C2E] dark:text-white mb-2 tabular-nums">
                <AnimatedCounter end={2} suffix="%" />
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">Google Partners Worldwide</p>
            </div>

            <div className="bg-white dark:bg-[#111C33] border border-[#DCE9FF] dark:border-white/10 rounded-2xl p-6 text-center flex flex-col justify-center shadow-xl">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0D1C2E] dark:text-white mb-2 tabular-nums">
                <AnimatedCounter end={2018} />
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">Year Founded</p>
            </div>

            <div className="bg-white dark:bg-[#111C33] border border-[#DCE9FF] dark:border-white/10 rounded-2xl p-6 text-center flex flex-col justify-center shadow-xl">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0D1C2E] dark:text-white mb-2 tabular-nums">
                <AnimatedCounter end={1} />
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">Co-Founders, One Vision</p>
            </div>
          </ScrollReveal>

        </div>
      </section>

      <SectionDivider />

      {/* 4. SERVICES SHOWCASE */}
      <section className="relative w-full py-28 px-6 bg-[#EFF4FF] dark:bg-[#0F1A30]">
        <div className="max-w-[1100px] mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
            <div className="lg:col-span-7 text-left">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#2EE6D6] shadow-[0_0_8px_#2EE6D6]" />
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#2EE6D6]">
                  {t.aboutUs.servicesBadge}
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0D1C2E] dark:text-white tracking-tight">
                {t.aboutUs.servicesTitle}
              </h2>
            </div>
            <div className="lg:col-span-5 text-left">
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-light">
                {t.aboutUs.servicesDesc}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: t.servicesExplorer.webTitle || 'Web Design & Development', img: portfolioImg, pills: ['Web design', 'Portfolio'] },
              { title: t.servicesExplorer.brandTitle || 'Brand Identity & Strategy', img: collageDesignImg, pills: ['Branding', 'Graphics'] },
              { title: t.servicesExplorer.adsTitle || 'Google & Meta Ads', img: insightsImg, pills: ['Ads', 'Growth'] },
              { title: t.servicesExplorer.socialTitle || 'Social Media Management', img: collageTeamImg, pills: ['Social', 'Content'] },
            ].map((srv, idx) => (
              <ScrollReveal key={idx} variant="fade-up" delay={idx * 0.1}>
                <div className="relative rounded-2xl overflow-hidden border border-[#DCE9FF] dark:border-white/10 bg-white dark:bg-[#111C33] group h-[290px] flex flex-col justify-end p-6 shadow-2xl">
                  <img
                    src={srv.img}
                    alt={srv.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  {srv.pills && (
                    <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
                      {srv.pills.map((pill, pIdx) => (
                        <span key={pIdx} className="px-3 py-1 rounded-full bg-black/60 border border-white/10 text-[10px] font-bold text-white backdrop-blur-md">
                          {pill}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="relative z-20">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#2EE6D6] transition-colors">
                      {srv.title}
                    </h3>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      <SectionDivider />

      {/* 5. TEAM MEMBERS (3-card Coverflow Carousel) */}
      <section className="relative w-full py-28 px-6 bg-[#F8F9FF] dark:bg-[#0A1224] text-[#0D1C2E] dark:text-white">
        <div className="max-w-[1100px] mx-auto relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-16">
            <div className="lg:col-span-7 text-left">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#8B5CF6] shadow-[0_0_8px_#8B5CF6]" />
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#8B5CF6]">
                  {t.teamCarousel.badge}
                </span>
              </div>
              <h2 className="text-3xl sm:text-[44px] font-extrabold text-[#0D1C2E] dark:text-white tracking-tight leading-[1.1]">
                {t.teamCarousel.title}
              </h2>
            </div>
            
            <div className="lg:col-span-5 text-left">
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed max-w-[380px] font-light">
                {t.teamCarousel.subtitle}
              </p>
            </div>
          </div>

          <div className="relative w-full flex flex-col items-center">
            <div 
              className="relative w-full max-w-[900px] h-[340px] sm:h-[420px] mx-auto flex items-center justify-center overflow-visible select-none mt-8 mb-4"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <button
                onClick={handlePrevTeam}
                className="absolute -left-16 lg:-left-24 top-1/2 -translate-y-1/2 z-40 hidden sm:flex w-12 h-12 bg-[#0F2040] dark:bg-zinc-950 text-white rounded-full border border-white/10 items-center justify-center hover:scale-110 active:scale-95 transition-all hover:bg-[#172B52] dark:hover:bg-zinc-800 cursor-pointer shadow-lg"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={handleNextTeam}
                className="absolute -right-16 lg:-right-24 top-1/2 -translate-y-1/2 z-40 hidden sm:flex w-12 h-12 bg-[#0F2040] dark:bg-zinc-950 text-white rounded-full border border-white/10 items-center justify-center hover:scale-110 active:scale-95 transition-all hover:bg-[#172B52] dark:hover:bg-zinc-800 cursor-pointer shadow-lg"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {teamMembers.map((member, idx) => {
                const isActive = idx === activeTeamIndex;
                const isLeft = idx === (activeTeamIndex - 1 + 3) % 3;
                const isRight = idx === (activeTeamIndex + 1) % 3;

                let xVal = 0;
                let rVal = 0;
                let sVal = 1;
                let zIndexVal = 3;
                let opacityVal = 1;
                let filterVal = 'brightness(1) saturate(1) blur(0px)';

                if (prefersReducedMotion) {
                  opacityVal = isActive ? 1 : 0.2;
                  xVal = isLeft ? (isMobile ? -60 : -100) : isRight ? (isMobile ? 60 : 100) : 0;
                } else {
                  if (isActive) {
                    xVal = 0; rVal = 0; sVal = 1; zIndexVal = 3;
                    filterVal = 'brightness(1) saturate(1) blur(0px)';
                  } else if (isLeft) {
                    xVal = isMobile ? -110 : -190;
                    rVal = isMobile ? -8 : -10;
                    sVal = 0.92; zIndexVal = 2;
                    filterVal = 'brightness(0.6) saturate(0.85) blur(1px)';
                  } else if (isRight) {
                    xVal = isMobile ? 110 : 190;
                    rVal = isMobile ? 8 : 10;
                    sVal = 0.92; zIndexVal = 2;
                    filterVal = 'brightness(0.6) saturate(0.85) blur(1px)';
                  }
                }

                return (
                  <motion.div
                    key={idx}
                    onClick={() => { if (!isActive) setActiveTeamIndex(idx); }}
                    initial={{ x: 0, rotate: 0, scale: 0.8, opacity: 0 }}
                    animate={{ x: xVal, rotate: rVal, scale: sVal, zIndex: zIndexVal, opacity: opacityVal, filter: filterVal }}
                    transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    style={{ transformOrigin: 'bottom center' }}
                    className="absolute w-[220px] h-[310px] sm:w-[270px] sm:h-[370px] rounded-[28px] overflow-hidden border border-white/10 shadow-2xl bg-zinc-900 cursor-pointer group"
                  >
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10" />
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 8 }}
                      transition={{ duration: 0.3, delay: isActive ? 0.3 : 0 }}
                      className="absolute bottom-4 left-4 right-4 p-5 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-md shadow-xl z-20 text-left"
                    >
                      <h3 className="text-lg sm:text-[22px] font-extrabold text-white leading-tight">{member.name}</h3>
                      <p className="text-[12px] text-zinc-400 mt-1">{member.role}</p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            <div className="flex sm:hidden justify-center gap-4 mt-6 z-40">
              <button onClick={handlePrevTeam} className="w-12 h-12 bg-[#0F2040] text-white rounded-full border border-white/10 flex items-center justify-center">←</button>
              <button onClick={handleNextTeam} className="w-12 h-12 bg-[#0F2040] text-white rounded-full border border-white/10 flex items-center justify-center">→</button>
            </div>

            <div className="flex justify-center gap-2 mt-6 sm:mt-8">
              {teamMembers.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setActiveTeamIndex(dotIdx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${dotIdx === activeTeamIndex ? 'w-6 bg-[#0D1C2E] dark:bg-white' : 'w-2 bg-slate-400 dark:bg-zinc-600'}`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      <SectionDivider />

      {/* 6. REVIEWS STRIP */}
      <section className="relative w-full py-20 px-6 bg-[#EFF4FF] dark:bg-[#0F1A30] overflow-hidden">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Summary Card */}
          <div className="lg:col-span-4 bg-white dark:bg-[#111C33] border border-[#DCE9FF] dark:border-white/10 p-6 rounded-2xl shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl font-black text-[#0D1C2E] dark:text-white">Google</span>
                <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold">Verified</span>
              </div>
              <div className="text-yellow-400 text-sm mb-2">★★★★★</div>
              <p className="text-sm font-bold text-[#0D1C2E] dark:text-white">{t.googleReviews.reviewsCount}</p>
            </div>
            <button className="mt-6 w-full py-2.5 rounded-xl border border-slate-300 dark:border-white/20 text-[#0D1C2E] dark:text-white font-bold text-xs hover:bg-slate-100 dark:hover:bg-white/5 transition-colors">
              {t.googleReviews.writeReview}
            </button>
          </div>

          {/* Compact Review Cards Strip */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { name: t.googleReviews.r1Name, text: t.googleReviews.r1Text },
              { name: t.googleReviews.r2Name, text: t.googleReviews.r2Text },
              { name: t.googleReviews.r3Name, text: t.googleReviews.r3Text },
            ].map((rev, rIdx) => (
              <div key={rIdx} className="bg-white dark:bg-[#111C33] border border-[#DCE9FF] dark:border-white/10 p-5 rounded-xl flex flex-col justify-between shadow-lg">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#0D1C2E] dark:text-white">{rev.name}</span>
                    <span className="text-[10px] text-emerald-400 font-mono">G</span>
                  </div>
                  <div className="text-yellow-400 text-xs mb-2">★★★★★</div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">"{rev.text}"</p>
                </div>
                <div className="mt-4 pt-2 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[10px] text-slate-500">
                  <span>Verified User</span>
                  <span className="text-[#006A62] dark:text-[#2EE6D6]">Read more</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. FOOTER */}
      <Footer />

    </div>
  );
};
