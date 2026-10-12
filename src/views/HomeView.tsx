import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ScrollReveal';
import { AnimatedCounter, formatLocalizedNumber } from '../components/AnimatedCounter';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'motion/react';

// Local Image Imports
import founderImg from '../assets/images/founder.jpg';
import techLeadImg from '../assets/images/tech_lead.jpg';
import growthLeadImg from '../assets/images/growth_lead.jpg';
import portfolioImg from '../assets/images/portfolio_mockup.jpg';
import insightsImg from '../assets/images/insights_mockup.jpg';
import collageTeamImg from '../assets/images/team_meeting.jpg';
import collageDesignImg from '../assets/images/design_sketch.jpg';

type ServiceTab = 'brand' | 'web' | 'seo' | 'ads' | 'social';

interface StepCardProps {
  step: { num: string; title: string; desc: string; icon: string };
  index: number;
  isRtl: boolean;
}

const StepCard: React.FC<StepCardProps> = ({ step, index, isRtl }) => {
  const delayTime = index * 0.1;
  return (
    <ScrollReveal variant="fade-up" delay={delayTime} className="relative w-full pt-4" once={true}>
      <div className="relative bg-white dark:bg-[#0B1F3A] hover:bg-slate-50 dark:hover:bg-[#102B4D] rounded-3xl border border-[#DCE9FF] dark:border-white/5 p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        <div className={`absolute -top-3 ${isRtl ? 'left-6' : 'right-6'} bg-[#0B1F3A] text-white text-xs font-black px-3.5 py-1 rounded-full shadow-lg border-2 border-white dark:border-[#0B1F3A] z-30 select-none`}>
          {step.num}
        </div>
        <div className="flex items-center gap-4 mb-4">
          <div className="relative w-11 h-11 rounded-2xl bg-[#EFF4FF] dark:bg-white/5 border border-[#DCE9FF] dark:border-white/10 flex items-center justify-center text-[#0B1F3A] shadow-sm shrink-0">
            <span className="material-symbols-outlined text-xl">{step.icon}</span>
          </div>
          <div className="flex flex-col">
            <div className="text-[10px] font-black text-[#0B1F3A] mb-0.5 tracking-widest uppercase">
              {isRtl ? `مرحله ${step.num}` : `Step ${step.num}`}
            </div>
            <h3 className="text-sm sm:text-base font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">{step.title}</h3>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">{step.desc}</p>
      </div>
    </ScrollReveal>
  );
};

export const HomeView: React.FC = () => {
  const { t, isRtl, language, openConsultationModal } = useApp();

  // Scroll logic for the text-fill animation in About Section
  const aboutSectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: aboutSectionRef,
    offset: ["start end", "end start"]
  });

  const clipPathValue = useTransform(
    scrollYProgress,
    [0.12, 0.45],
    isRtl 
      ? ["inset(0 0 0 100%)", "inset(0 0 0 0%)"] 
      : ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]
  );

  // Scroll logic for the text-fill animation in Services Section
  const servicesSectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress: servicesScrollYProgress } = useScroll({
    target: servicesSectionRef,
    offset: ["start end", "end start"]
  });

  const servicesClipPathValue = useTransform(
    servicesScrollYProgress,
    [0.12, 0.45],
    isRtl 
      ? ["inset(0 0 0 100%)", "inset(0 0 0 0%)"] 
      : ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]
  );

  // Scroll logic for the text-fill animation in Team Section
  const teamSectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress: teamScrollYProgress } = useScroll({
    target: teamSectionRef,
    offset: ["start end", "end start"]
  });

  const teamClipPathValue = useTransform(
    teamScrollYProgress,
    [0.12, 0.45],
    isRtl 
      ? ["inset(0 0 0 100%)", "inset(0 0 0 0%)"] 
      : ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]
  );

  // Scroll logic for the text-fill animation and parallax columns in Strategy Section
  const strategySectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress: strategyScrollY } = useScroll({
    target: strategySectionRef,
    offset: ["start end", "end start"]
  });

  const strategyClipPathValue = useTransform(
    strategyScrollY,
    [0.12, 0.45],
    isRtl 
      ? ["inset(0 0 0 100%)", "inset(0 0 0 0%)"] 
      : ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]
  );

  // Parallax scroll transforms for the two image columns in the center
  // Column 1 slides downwards, Column 2 slides upwards
  const col1Y = useTransform(strategyScrollY, [0, 1], [-120, 120]);
  const col2Y = useTransform(strategyScrollY, [0, 1], [120, -120]);

  const col1YSpring = useSpring(col1Y, { stiffness: 80, damping: 25, restDelta: 0.001 });
  const col2YSpring = useSpring(col2Y, { stiffness: 80, damping: 25, restDelta: 0.001 });



  const getStrategyTitle = () => {
    switch (language) {
      case 'prs':
        return {
          normal: "ما استراتژی خلاقانه را با ",
          highlight: "داستان‌سرایی ترکیب می‌کنیم"
        };
      case 'pus':
        return {
          normal: "موږ استراتژیک پلان له ",
          highlight: "زړه راښکونکې بڼې سره یوځای کوو"
        };
      case 'en':
      default:
        return {
          normal: "We combine creative strategy with ",
          highlight: "storytelling"
        };
    }
  };
  const strategyTitle = getStrategyTitle();

  const getStoryTitle = () => {
    switch (language) {
      case 'prs':
        return {
          normal: "تخصص واقعی، نتایج واقعی. ",
          highlight: "داستان همراه تک."
        };
      case 'pus':
        return {
          normal: "رښتینې تخصص، رښتینې پایلې. ",
          highlight: "د همراه ټیک کیسه."
        };
      case 'en':
      default:
        return {
          normal: "Real Expertise. Real Results. ",
          highlight: "The Hamrah Tech Story."
        };
    }
  };
  const storyTitle = getStoryTitle();

  const getServicesTitle = () => {
    switch (language) {
      case 'prs':
        return {
          normal: "بهینه‌سازی و ",
          highlight: "تحول کسب‌وکار شما"
        };
      case 'pus':
        return {
          normal: "غوره کول او ",
          highlight: "ستاسو د سوداګرۍ بدلون"
        };
      case 'en':
      default:
        return {
          normal: "Optimize and ",
          highlight: "transform your business"
        };
    }
  };
  const servicesTitle = getServicesTitle();

  const getTeamTitle = () => {
    switch (language) {
      case 'prs':
        return {
          normal: "هدایت‌شده توسط تجربه، ",
          highlight: "ساخته‌شده برای نتایج واقعی"
        };
      case 'pus':
        return {
          normal: "د تجربې پر بنسټ، ",
          highlight: "د رښتینې پایلو لپاره جوړ شوی"
        };
      case 'en':
      default:
        return {
          normal: "Driven by Experience, ",
          highlight: "Built for Real Results"
        };
    }
  };
  const teamTitle = getTeamTitle();

  // Interactive States
  const [activeServiceTab, setActiveServiceTab] = useState<ServiceTab>('brand');
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(0);
  const [activeTeamIndex, setActiveTeamIndex] = useState(0);

  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrevTeam();
      } else if (e.key === 'ArrowRight') {
        handleNextTeam();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveTeamIndex((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  // Lead Form State
  const [leadForm, setLeadForm] = useState({ fullName: '', email: '', message: '', newsletter: true });
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLeadSubmitted(true);
    setTimeout(() => {
      setLeadSubmitted(false);
      setLeadForm({ fullName: '', email: '', message: '', newsletter: true });
    }, 4000);
  };

  const getServiceData = () => {
    switch (activeServiceTab) {
      case 'brand':
        return {
          title: t.servicesExplorer.brandTitle,
          desc: t.servicesExplorer.brandDesc,
          bullets: t.servicesExplorer.brandBullets,
          icon: 'polyline',
          chips: ['Logo design', 'Typography & Color Systems', 'Social Media Visuals', 'Marketing Creatives'],
        };
      case 'web':
        return {
          title: t.servicesExplorer.webTitle,
          desc: t.servicesExplorer.webDesc,
          bullets: t.servicesExplorer.webBullets,
          icon: 'web',
          chips: ['Vite & Next.js', 'High-Converting Layouts', 'UX/UI Engineering', 'Optimized Performance'],
        };
      case 'seo':
        return {
          title: t.servicesExplorer.seoTitle,
          desc: t.servicesExplorer.seoDesc,
          bullets: t.servicesExplorer.seoBullets,
          icon: 'search',
          chips: ['Google Rank Optimization', 'Keyword Strategy', 'Technical Audits', 'Local SEO & Maps'],
        };
      case 'ads':
        return {
          title: t.servicesExplorer.adsTitle,
          desc: t.servicesExplorer.adsDesc,
          bullets: t.servicesExplorer.adsBullets,
          icon: 'campaign',
          chips: ['Meta Ads Manager', 'Google Search Ads', 'Retargeting Funnels', 'A/B Creative Testing'],
        };
      case 'social':
        return {
          title: t.servicesExplorer.socialTitle,
          desc: t.servicesExplorer.socialDesc,
          bullets: t.servicesExplorer.socialBullets,
          icon: 'forum',
          chips: ['Content Production', 'Audience Growth', 'Community Building', 'Analytics Reports'],
        };
    }
  };

  const currentService = getServiceData();

  const teamMembers = [
    {
      name: t.teamCarousel.m1Name,
      role: t.teamCarousel.m1Role,
      img: founderImg,
    },
    {
      name: t.teamCarousel.m2Name,
      role: t.teamCarousel.m2Role,
      img: techLeadImg,
    },
    {
      name: t.teamCarousel.m3Name,
      role: t.teamCarousel.m3Role,
      img: growthLeadImg,
    },
  ];

  const touchStartX = useRef<number | null>(null);

  const handleNextTeam = () => {
    setActiveTeamIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const handlePrevTeam = () => {
    setActiveTeamIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diffX = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        handlePrevTeam();
      } else {
        handleNextTeam();
      }
    }
    touchStartX.current = null;
  };

  const faqList = [
    { q: t.faqs.q1, a: t.faqs.a1 },
    { q: t.faqs.q2, a: t.faqs.a2 },
    { q: t.faqs.q3, a: t.faqs.a3 },
    { q: t.faqs.q4, a: t.faqs.a4 },
    { q: t.faqs.q5, a: t.faqs.a5 },
    { q: t.faqs.q6, a: t.faqs.a6 },
    { q: t.faqs.q7, a: t.faqs.a7 },
    { q: t.faqs.q8, a: t.faqs.a8 },
  ];

  return (
    <div className="flex flex-col w-full bg-[#F8F9FF] dark:bg-[#0B1F3A] text-[#44474E] dark:text-[#9CA3AF] selection:bg-[#00F5D4] selection:text-[#0B1F3A] transition-colors duration-300">

      {/* 1. HERO SECTION */}
      <section id="hero" className="relative w-full min-h-screen flex flex-col justify-center pt-24 pb-20 px-6 overflow-hidden">
        {/* Ambient pulse glowing orbs in the background */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#0B1F3A]/10 to-[#00F5D4]/10 rounded-full blur-[160px] pointer-events-none animate-pulse duration-[8000ms]" />

        <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center relative z-10 w-full">
          
          {/* Eyebrow Label (Small colored dot + tiny muted text) */}
          <ScrollReveal variant="fade-up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-200/50 dark:bg-white/5 border border-slate-300/50 dark:border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00F5D4] shadow-[0_0_8px_#00F5D4]" />
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-600 dark:text-slate-400">
                {t.hero.badgeTagline}
              </span>
            </div>
          </ScrollReveal>

          {/* Centered H1: "Full-Service Digital Solutions To Get You More Leads & Growth" */}
          <ScrollReveal variant="fade-up" delay={0.1}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight leading-[1.1] mb-8 max-w-5xl">
              Full-Service <span className="bg-gradient-to-r from-[#0B1F3A] via-[#0B1F3A] to-[#00F5D4] bg-clip-text text-transparent">Digital Solutions</span> To Get You More Leads & Growth
            </h1>
          </ScrollReveal>

          {/* Short muted paragraph below */}
          <ScrollReveal variant="fade-up" delay={0.2}>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-[600px] leading-relaxed mb-10">
              {t.hero.description1}
            </p>
          </ScrollReveal>

          {/* Pill Button "Get a Free Consultation" */}
          <ScrollReveal variant="fade-up" delay={0.3}>
            <button
              onClick={openConsultationModal}
              className="px-8 py-4 bg-[#0B1F3A] dark:bg-[#00F5D4] hover:bg-[#172B52] dark:hover:bg-[#00F5D4] text-white dark:text-[#0B1F3A] font-bold rounded-full transition-all duration-300 shadow-xl hover:shadow-[#00F5D4]/20 cursor-pointer text-sm sm:text-base transform active:scale-95"
            >
              Get a Free Consultation
            </button>
          </ScrollReveal>
        </div>

        {/* BOTTOM HERO: Radial aurora gradient + Greyscale Logos Loop marquee */}
        <div className="relative w-full mt-24">
          {/* Large rising aurora gradient glow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[320px] bg-gradient-to-t from-[#0B1F3A]/15 via-[#805AD5]/15 to-transparent rounded-full blur-[100px] pointer-events-none" />

          {/* Logos Marquee strip */}
          <div className="relative w-full left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-slate-200/30 dark:bg-[#080E1C]/40 backdrop-blur-md py-6 overflow-hidden">
            {/* Soft fade on edges */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F8F9FF] dark:from-[#0B1F3A] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#F8F9FF] dark:from-[#0B1F3A] to-transparent z-10 pointer-events-none" />

            <div className={`flex whitespace-nowrap ${isRtl ? 'animate-marquee-right' : 'animate-marquee-left'} hover:[animation-play-state:paused]`}>
              
              {/* Loop Block 1 (Greyscale Logos) */}
              <div className="flex items-center gap-16 px-8 shrink-0">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <div key={`logo-1-${num}`} className="flex items-center gap-2 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-2xl">insights</span>
                    <span className="font-mono font-bold tracking-widest text-xs uppercase">PARTNER_0{num}</span>
                  </div>
                ))}
              </div>

              {/* Loop Block 2 (Duplicate for Seamless Loop) */}
              <div className="flex items-center gap-16 px-8 shrink-0">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <div key={`logo-2-${num}`} className="flex items-center gap-2 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-2xl">insights</span>
                    <span className="font-mono font-bold tracking-widest text-xs uppercase">PARTNER_0{num}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Glowing purple gradient line at bottom border */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#805AD5] to-transparent shadow-[0_1px_10px_#805AD5]" />
          </div>
        </div>
      </section>

      {/* 2. ABOUT / FOUNDER SECTION ("Leadership & Vision") */}
      <section ref={aboutSectionRef} id="about" className="relative w-full py-16 sm:py-20 lg:py-24 px-6 overflow-hidden">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left: Portrait Card with Pink/Magenta overlay */}
          <ScrollReveal variant="fade-right" className="lg:col-span-5 flex flex-col h-full justify-stretch">
            <div className="relative w-full h-[320px] sm:h-[380px] lg:h-full lg:min-h-[440px] rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0E1524] shadow-2xl p-5 sm:p-6 group cursor-grab active:cursor-grabbing">
              {/* Thick dark border element */}
              <div className="absolute inset-0 border-[6px] border-[#F8F9FF] dark:border-[#0B1F3A] rounded-3xl z-10 pointer-events-none" />

              {/* Top Row: Tech badge + Faint Partner-logo corners text */}
              <div className="relative z-20 flex justify-between items-start">
                <span className="px-3 py-1 rounded-full bg-black/40 dark:bg-black/60 backdrop-blur-md border border-white/10 text-[9px] uppercase font-bold tracking-wider text-[#00F5D4]">
                  Executive Bio
                </span>
                <span className="font-mono font-bold text-[9px] text-slate-800/10 dark:text-white/10 tracking-widest uppercase">
                  HAMRAH TECH
                </span>
              </div>

              {/* Founder Photo Background */}
              <img
                src={founderImg}
                alt={t.story.founderName}
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Pink/Magenta to Black gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-[#D53F8C]/10 to-transparent z-10 pointer-events-none" />

              {/* Left/Bottom corners faint partner text */}
              <div className="absolute bottom-6 right-6 z-20">
                <span className="font-mono font-bold text-[9px] text-slate-800/10 dark:text-white/10 tracking-widest uppercase">
                  LEADERSHIP
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: story narrative & Founder mini-card */}
          <ScrollReveal variant="fade-left" className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8">
            
            {/* Section Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0B1F3A] shadow-[0_0_8px_#0B1F3A]" />
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0B1F3A]">
                {t.story.badge}
              </span>
            </div>

            {/* Scroll fill animation H2 heading */}
            <h2 className="relative text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight leading-tight select-none py-1">
              {/* Background Layer: Muted */}
              <span className="text-slate-300 dark:text-white/10 transition-colors">
                {storyTitle.normal}
                <span className="opacity-30">
                  {storyTitle.highlight}
                </span>
              </span>

              {/* Foreground Layer: Filled and colored, clipped based on scroll progress */}
              <motion.span
                className="absolute inset-x-0 top-1 text-[#0B1F3A] dark:text-white pointer-events-none whitespace-pre-wrap"
                style={{ clipPath: clipPathValue }}
              >
                {storyTitle.normal}
                <span className="bg-gradient-to-r from-[#0B1F3A] to-[#0B1F3A] bg-clip-text text-transparent">
                  {storyTitle.highlight}
                </span>
              </motion.span>
            </h2>

            {/* Translucent bordered narrative box */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-200/20 dark:bg-white/5 border border-slate-300/50 dark:border-white/10 backdrop-blur-sm text-[#44474E] dark:text-slate-300 space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base leading-relaxed font-light">
                {t.story.desc1}
              </p>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {t.story.desc2}
              </p>
            </div>

            {/* Founder Mini-Card (rounded-2xl) with thin glowing white line below */}
            <div className="relative group">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-2xl bg-[#EFF4FF] dark:bg-[#0B1F3A] border border-[#DCE9FF] dark:border-[#22304A] shadow-lg">
                
                <div className="flex items-center gap-3">
                  {/* Circular Avatar */}
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 shrink-0">
                    <img
                      src={founderImg}
                      alt={t.story.founderName}
                      className="w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Animated audio-waveform sound decoration */}
                  <div className="flex items-end gap-0.5 h-5 shrink-0" title="Founder Audio Stream">
                    {[1.2, 2.5, 1.8, 2.8, 1.5, 2.3, 1.1, 2.6].map((multiplier, i) => (
                      <motion.span
                        key={i}
                        animate={{ height: ['15%', '100%', '15%'] }}
                        transition={{
                          repeat: Infinity,
                          duration: multiplier,
                          ease: 'easeInOut',
                        }}
                        className="w-0.5 bg-[#0B1F3A] rounded-full"
                      />
                    ))}
                  </div>

                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#0B1F3A] tracking-wide">
                      Mostafa Madadi
                    </h4>
                    <p className="text-[10px] sm:text-xs text-slate-600 dark:text-slate-400 font-medium">{t.story.founderRole}</p>
                  </div>
                </div>

                {/* Tiny social icons */}
                <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 text-xs self-end sm:self-center">
                  <a href="#about" className="hover:text-[#00F5D4] transition-colors">
                    <span className="material-symbols-outlined text-base">alternate_email</span>
                  </a>
                  <a href="#about" className="hover:text-[#00F5D4] transition-colors">
                    <span className="material-symbols-outlined text-base">share</span>
                  </a>
                </div>

              </div>

              {/* Faint white glowing bar below the card */}
              <div className="absolute -bottom-1 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent blur-[1px]" />
            </div>

            <p className="text-[10px] text-slate-500 font-bold tracking-wide italic">
              "Trusted by businesses from startups to e-commerce brands."
            </p>
          </ScrollReveal>

        </div>


      </section>

      {/* 3. SERVICES SECTION ("Our Services") */}
      <section ref={servicesSectionRef} id="services" className="relative w-full py-24 px-6 overflow-hidden bg-[#EFF4FF] dark:bg-[#0D2645]">
        <div className="max-w-[1200px] mx-auto">
          
          {/* Heading block */}
          <ScrollReveal variant="fade-up" className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3B82F6]" />
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                {t.servicesExplorer.badge}
              </span>
            </div>
            <h2 className="relative text-3xl sm:text-5xl font-extrabold text-slate-300 dark:text-white/10 tracking-tight leading-none text-left max-w-2xl select-none py-1">
              {/* Background Layer: Muted */}
              <span>
                {servicesTitle.normal}
                <span className="opacity-30">
                  {servicesTitle.highlight}
                </span>
              </span>

              {/* Foreground Layer: Filled and colored, clipped based on scroll progress */}
              <motion.span
                className="absolute inset-x-0 top-1 text-[#0B1F3A] dark:text-white pointer-events-none text-left whitespace-pre-wrap"
                style={{ clipPath: servicesClipPathValue }}
              >
                {servicesTitle.normal}
                <span className="bg-gradient-to-r from-[#00F5D4] to-[#3B82F6] bg-clip-text text-transparent">
                  {servicesTitle.highlight}
                </span>
              </motion.span>
            </h2>
          </ScrollReveal>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Left vertical accordion list - Separated glass card container */}
            <div className={`lg:col-span-5 relative bg-white/60 dark:bg-[#0B1F3A]/60 backdrop-blur-md rounded-3xl border border-[#DCE9FF] dark:border-white/5 p-6 flex flex-col justify-between space-y-4 max-h-[500px] overflow-y-auto custom-scrollbar shadow-xl`}>
              
              {/* Continuous vertical line/track (نوار) connecting the buttons */}
              <div className={`absolute top-10 bottom-10 w-[2px] bg-slate-200 dark:bg-slate-700/60 pointer-events-none ${isRtl ? 'right-12' : 'left-12'}`} />

              {[
                { key: 'brand', label: t.servicesExplorer.tabs?.brand || '1. Brand Identity & Graphics' },
                { key: 'web', label: t.servicesExplorer.tabs?.web || '2. Website Design & Development' },
                { key: 'seo', label: t.servicesExplorer.tabs?.seo || '3. Search Engine Optimization (SEO)' },
                { key: 'ads', label: t.servicesExplorer.tabs?.ads || '4. Google & Meta Advertising' },
                { key: 'social', label: t.servicesExplorer.tabs?.social || '5. Social Media Management' },
              ].map((item) => {
                const isActive = activeServiceTab === item.key;
                return (
                  <button
                    key={item.key}
                    onClick={() => setActiveServiceTab(item.key as ServiceTab)}
                    className={`w-full p-4 rounded-xl transition-all duration-300 relative border cursor-pointer ${
                      isRtl 
                        ? 'text-right pr-14 pl-4' 
                        : 'text-left pl-14 pr-4'
                    } ${
                      isActive
                        ? 'bg-white dark:bg-[#0D2645] border-[#DCE9FF] dark:border-white/10 text-[#0B1F3A] dark:text-white font-extrabold scale-[1.01] shadow-md'
                        : 'bg-white/30 dark:bg-[#0B1F3A]/20 border-transparent text-[#44474E] dark:text-slate-400 hover:text-[#0B1F3A] dark:hover:text-white hover:bg-white/80 dark:hover:bg-[#0B1F3A]/50'
                    }`}
                  >
                    {/* Glowing active indicator dot centered on the line */}
                    <span 
                      className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 transition-all duration-300 z-10 ${
                        isRtl ? 'right-[18px]' : 'left-[18px]'
                      } ${
                        isActive 
                          ? 'border-[#00F5D4] bg-[#00F5D4] shadow-[0_0_10px_#00F5D4]' 
                          : 'border-slate-300 dark:border-slate-600 bg-white dark:bg-[#0B1F3A]'
                      }`}
                    >
                      {isActive && (
                        <span className="absolute inset-[-4px] rounded-full border border-[#00F5D4]/40 animate-ping pointer-events-none" />
                      )}
                    </span>

                    {/* Active vertical accent line on edge of button */}
                    {isActive && (
                      <span className={`absolute top-3 bottom-3 w-[3px] bg-[#00F5D4] ${isRtl ? 'right-0 rounded-l' : 'left-0 rounded-r'}`} />
                    )}

                    <span className="text-sm sm:text-base font-bold tracking-tight">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Right: Large rounded detail card */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeServiceTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="h-full bg-white dark:bg-[#0B1F3A] rounded-3xl border border-[#DCE9FF] dark:border-[#22304A] p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden"
                >
                  <div>
                    {/* Line-art Outlined Icon (top-left) */}
                    <div className="w-14 h-14 rounded-2xl border border-[#DCE9FF] dark:border-white/10 flex items-center justify-center text-[#00F5D4] bg-slate-50 dark:bg-white/5 mb-8">
                      <span className="material-symbols-outlined text-3xl font-light">
                        {currentService.icon}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-[#0B1F3A] dark:text-white mb-4">
                      {currentService.title}
                    </h3>

                    {/* Paragraph with the first words in bold */}
                    <p className="text-[#44474E] dark:text-slate-300 leading-relaxed text-sm sm:text-base mb-8">
                      <span className="font-extrabold text-[#00BFA5] dark:text-[#00F5D4]">{currentService.desc.split(' ').slice(0, 4).join(' ')} </span>
                      {currentService.desc.split(' ').slice(4).join(' ')}
                    </p>

                    {/* Tag chips row separated by dividers (ZERO-PILL compliant: unboxed inline text with dividers) */}
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-semibold text-[#44474E] dark:text-slate-400 mb-8 pt-4 border-t border-[#DCE9FF] dark:border-white/5">
                      {currentService.chips.map((chip, idx) => (
                        <React.Fragment key={idx}>
                          <span>{chip}</span>
                          {idx < currentService.chips.length - 1 && (
                            <span className="text-[#00F5D4]/30 font-light">|</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Read More button with circular arrow icon */}
                  <div>
                    <button
                      onClick={openConsultationModal}
                      className="inline-flex items-center gap-3.5 bg-[#0B1F3A] dark:bg-white/10 hover:bg-[#172B52] dark:hover:bg-white/20 text-white font-bold text-xs px-6 py-3.5 rounded-full transition shadow-lg cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-sm bg-[#00F5D4] text-black rounded-full p-0.5 flex items-center justify-center font-black">
                        arrow_outward
                      </span>
                      <span>{t.servicesExplorer.readMore}</span>
                    </button>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>

      {/* 4. STRATEGY GRID SECTION (FORMERLY PORTFOLIO) */}
      <section ref={strategySectionRef} id="portfolio" className="relative w-full py-28 px-6 bg-[#F8F9FF] dark:bg-[#0B1F3A] rounded-t-[48px] overflow-hidden">
        
        {/* Glow ambient effects */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#0B1F3A]/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto">
          
          {/* Centered Heading block with Scroll Reveal text-fill */}
          <ScrollReveal variant="fade-up" className="mb-20 text-center flex flex-col items-center">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0B1F3A] shadow-[0_0_8px_#0B1F3A]" />
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#0B1F3A]">
                {isRtl ? 'استراتژی ما' : 'Our Strategy'}
              </span>
            </div>
            
            <h2 className="relative text-3xl sm:text-5xl font-black text-slate-300 dark:text-white/10 tracking-tight leading-tight text-center max-w-4xl select-none py-1 animate-colors">
              {/* Background Layer: Muted */}
              <span>
                {strategyTitle.normal}
                <span className="opacity-30">
                  {strategyTitle.highlight}
                </span>
              </span>

              {/* Foreground Layer: Filled and colored, clipped based on scroll progress */}
              <motion.span
                className="absolute inset-x-0 top-1 text-[#0B1F3A] dark:text-white pointer-events-none text-center whitespace-pre-wrap transition-colors duration-300"
                style={{ clipPath: strategyClipPathValue }}
              >
                {strategyTitle.normal}
                <span className="bg-gradient-to-r from-[#00F5D4] to-[#3B82F6] bg-clip-text text-transparent">
                  {strategyTitle.highlight}
                </span>
              </motion.span>
            </h2>
          </ScrollReveal>

          {/* Helper variables and arrays for step components */}
          {(() => {
            const steps = [
              { num: '01', title: t.strategyGrid.c1Title, desc: t.strategyGrid.c1Desc, icon: 'groups' },
              { num: '02', title: t.strategyGrid.c2Title, desc: t.strategyGrid.c2Desc, icon: 'trending_up' },
              { num: '03', title: t.strategyGrid.c3Title, desc: t.strategyGrid.c3Desc, icon: 'tune' },
              { num: '04', title: t.strategyGrid.c4Title, desc: t.strategyGrid.c4Desc, icon: 'assessment' },
              { num: '05', title: t.strategyGrid.c5Title, desc: t.strategyGrid.c5Desc, icon: 'hub' },
              { num: '06', title: t.strategyGrid.c6Title, desc: t.strategyGrid.c6Desc, icon: 'dashboard' },
            ];

            return (
              <>
                {/* 1. MOBILE & TABLET LAYOUT: Vertical stacked with responsive central marquee */}
                <div className="block lg:hidden space-y-8">
                  {/* First 3 Steps */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {steps.slice(0, 3).map((step, idx) => (
                      <StepCard key={idx} step={step} index={idx} isRtl={isRtl} />
                    ))}
                  </div>

                  {/* Responsive Continuous Vertical Marquee in Middle */}
                  <div className="w-full h-[320px] relative flex gap-4 overflow-hidden rounded-3xl border border-[#DCE9FF] dark:border-white/5 bg-white dark:bg-[#0B1F3A] p-2.5 shadow-xl">
                    {/* Left continuous marquee */}
                    <div className="w-1/2 h-full overflow-hidden relative">
                      <div className="flex flex-col gap-4 animate-marquee-up py-1 shrink-0">
                        {[collageTeamImg, growthLeadImg, portfolioImg, collageTeamImg, growthLeadImg, portfolioImg].map((img, i) => (
                          <div key={i} className="w-full h-[110px] rounded-2xl overflow-hidden border border-slate-100 dark:border-white/5 shadow-inner shrink-0">
                            <img src={img} alt="Hamrah Tech Studio" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right continuous marquee */}
                    <div className="w-1/2 h-full overflow-hidden relative">
                      <div className="flex flex-col gap-4 animate-marquee-down py-1 shrink-0">
                        {[insightsImg, techLeadImg, collageDesignImg, insightsImg, techLeadImg, collageDesignImg].map((img, i) => (
                          <div key={i} className="w-full h-[110px] rounded-2xl overflow-hidden border border-slate-100 dark:border-white/5 shadow-inner shrink-0">
                            <img src={img} alt="Hamrah Tech Studio" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Fades to look cinematic */}
                    <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white dark:from-[#0B1F3A] to-transparent pointer-events-none z-10" />
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white dark:from-[#0B1F3A] to-transparent pointer-events-none z-10" />
                  </div>

                  {/* Remaining 3 Steps */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {steps.slice(3, 6).map((step, idx) => (
                      <StepCard key={idx + 3} step={step} index={idx + 3} isRtl={isRtl} />
                    ))}
                  </div>
                </div>

                {/* 2. DESKTOP LAYOUT: Stunning Circular Clock-Dial Dial Arrangement */}
                <div className="hidden lg:block relative w-full h-[700px] max-w-[1250px] mx-auto mt-12">
                  
                  {/* Central Scrolling Marquee Columns (Clock Center) */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[310px] h-[520px] flex gap-4 overflow-hidden rounded-[32px] border border-[#DCE9FF] dark:border-white/5 bg-white dark:bg-[#0B1F3A] p-3 shadow-2xl z-10">
                    
                    {/* Left marquee (UP) */}
                    <div className="w-1/2 h-full overflow-hidden relative">
                      <div className="flex flex-col gap-4 animate-marquee-up py-2 shrink-0">
                        {[collageTeamImg, growthLeadImg, portfolioImg, collageTeamImg, growthLeadImg, portfolioImg].map((img, i) => (
                          <div key={i} className="w-full h-[145px] rounded-2xl overflow-hidden border border-slate-100 dark:border-white/5 shadow-inner shrink-0">
                            <img src={img} alt="Hamrah Tech Studio" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right marquee (DOWN) */}
                    <div className="w-1/2 h-full overflow-hidden relative">
                      <div className="flex flex-col gap-4 animate-marquee-down py-2 shrink-0">
                        {[insightsImg, techLeadImg, collageDesignImg, insightsImg, techLeadImg, collageDesignImg].map((img, i) => (
                          <div key={i} className="w-full h-[145px] rounded-2xl overflow-hidden border border-slate-100 dark:border-white/5 shadow-inner shrink-0">
                            <img src={img} alt="Hamrah Tech Studio" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Fading Vignette layers */}
                    <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white dark:from-[#0B1F3A] to-transparent pointer-events-none z-10" />
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white dark:from-[#0B1F3A] to-transparent pointer-events-none z-10" />
                  </div>

                  {/* Circular/Clock Dial positioning of the cards wrapping the center */}
                  {/* Respects Reading Order: Steps 1, 2, 3 are on Right side, and 4, 5, 6 on Left side if RTL */}
                  
                  {/* Step 01 - Top Left/Right based on isRtl */}
                  <div className={`absolute top-[4%] w-[300px] xl:w-[320px] transition-all duration-500 ${isRtl ? 'right-[4%] xl:right-[8%]' : 'left-[4%] xl:left-[8%]'}`}>
                    <StepCard step={steps[0]} index={0} isRtl={isRtl} />
                  </div>

                  {/* Step 02 - Mid Left/Right */}
                  <div className={`absolute top-[50%] -translate-y-1/2 w-[300px] xl:w-[320px] transition-all duration-500 ${isRtl ? 'right-[0%] xl:right-[3%]' : 'left-[0%] xl:left-[3%]'}`}>
                    <StepCard step={steps[1]} index={1} isRtl={isRtl} />
                  </div>

                  {/* Step 03 - Bottom Left/Right */}
                  <div className={`absolute bottom-[4%] w-[300px] xl:w-[320px] transition-all duration-500 ${isRtl ? 'right-[4%] xl:right-[8%]' : 'left-[4%] xl:left-[8%]'}`}>
                    <StepCard step={steps[2]} index={2} isRtl={isRtl} />
                  </div>

                  {/* Step 04 - Top Right/Left */}
                  <div className={`absolute top-[4%] w-[300px] xl:w-[320px] transition-all duration-500 ${isRtl ? 'left-[4%] xl:left-[8%]' : 'right-[4%] xl:right-[8%]'}`}>
                    <StepCard step={steps[3]} index={3} isRtl={isRtl} />
                  </div>

                  {/* Step 05 - Mid Right/Left */}
                  <div className={`absolute top-[50%] -translate-y-1/2 w-[300px] xl:w-[320px] transition-all duration-500 ${isRtl ? 'left-[0%] xl:left-[3%]' : 'right-[0%] xl:right-[3%]'}`}>
                    <StepCard step={steps[4]} index={4} isRtl={isRtl} />
                  </div>

                  {/* Step 06 - Bottom Right/Left */}
                  <div className={`absolute bottom-[4%] w-[300px] xl:w-[320px] transition-all duration-500 ${isRtl ? 'left-[4%] xl:left-[8%]' : 'right-[4%] xl:right-[8%]'}`}>
                    <StepCard step={steps[5]} index={5} isRtl={isRtl} />
                  </div>

                </div>
              </>
            );
          })()}

        </div>
      </section>

      {/* 5. STATS BAR */}
      <section className="relative w-full py-12 bg-[#F8F9FF] dark:bg-[#0B1F3A] border-y border-[#DCE9FF] dark:border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 items-stretch text-center">
          {[
            { value: 390, suffix: '+', label: 'Delivered projects' },
            { value: 70, suffix: '%', label: 'Returning clients' },
            { value: 90, suffix: '%', label: 'Success rate' },
            { value: 6, suffix: '+', label: 'Years of experience' },
          ].map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col justify-center py-4 ${
                i < 3 ? 'lg:border-r border-[#DCE9FF] dark:border-white/10' : ''
              }`}
            >
              <div className="text-3xl sm:text-5xl font-black text-[#00F5D4] mb-2 tracking-tight">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. REVIEWS STRIP */}
      <section className="relative w-full py-20 px-6 bg-[#EFF4FF] dark:bg-[#0D2645] overflow-hidden">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-10 items-center">
          
          {/* Left: Google reviews summary card */}
          <div className="w-full lg:w-1/3 shrink-0 p-8 rounded-3xl bg-white dark:bg-[#0B1F3A] border border-[#DCE9FF] dark:border-white/5 shadow-xl text-center lg:text-left flex flex-col items-center lg:items-start space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center font-black text-2xl text-black shadow-lg">
              G
            </div>
            <div className="flex items-center gap-1 text-yellow-400">
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} className="material-symbols-outlined fill-1">star</span>
              ))}
            </div>
            <h4 className="text-lg font-extrabold text-[#0B1F3A] dark:text-white">15 Google reviews</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-xs">
              Direct and unfiltered client feedback vetted through independent business registries.
            </p>
            <button
              onClick={openConsultationModal}
              className="px-4 py-2 text-xs font-bold rounded-full border border-[#DCE9FF] dark:border-white/15 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-[#00F5D4] transition-colors cursor-pointer"
            >
              Write a review
            </button>
          </div>

          {/* Right: auto-scroll rows list */}
          <div className="w-full lg:w-2/3 relative overflow-hidden py-4">
            {/* Edge fades */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#EFF4FF] dark:from-[#0D2645] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#EFF4FF] dark:from-[#0D2645] to-transparent z-10 pointer-events-none" />

            <div className="flex gap-6 animate-marquee-left hover:[animation-play-state:paused]">
              
              {/* Reviews cards */}
              {[
                { name: 'Ahmad Seyar', r: '5★', t: 'Excellent software engineering and design.' },
                { name: 'Sarah Miller', r: '5★', t: 'Our inquiries quadrupled in under three months.' },
                { name: 'David Koenig', r: '5★', t: 'Extremely direct, fast, and structured workflow.' },
                { name: 'Sediqi Khan', r: '5★', t: 'Flawless localized strategy for e-commerce growth.' },
              ].map((rev, idx) => (
                <div
                  key={idx}
                  className="w-[280px] p-6 rounded-2xl bg-white dark:bg-[#0B1F3A] border border-[#DCE9FF] dark:border-white/5 shadow-lg flex flex-col justify-between shrink-0"
                >
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-extrabold text-[#0B1F3A] dark:text-white">{rev.name}</span>
                      <span className="text-[10px] text-slate-500">2 weeks ago</span>
                    </div>
                    <div className="text-yellow-400 text-xs flex gap-0.5 mb-3">
                      ★★★★★
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                      "{rev.t}"
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#DCE9FF] dark:border-white/5 flex justify-between items-center">
                    <span className="text-[10px] font-mono tracking-widest text-[#00F5D4]">GOOGLE USER</span>
                    <span className="material-symbols-outlined text-sm text-slate-500">check_circle</span>
                  </div>
                </div>
              ))}

              {/* Duplicate reviews cards for marquee */}
              {[
                { name: 'Ahmad Seyar', r: '5★', t: 'Excellent software engineering and design.' },
                { name: 'Sarah Miller', r: '5★', t: 'Our inquiries quadrupled in under three months.' },
                { name: 'David Koenig', r: '5★', t: 'Extremely direct, fast, and structured workflow.' },
                { name: 'Sediqi Khan', r: '5★', t: 'Flawless localized strategy for e-commerce growth.' },
              ].map((rev, idx) => (
                <div
                  key={`dup-${idx}`}
                  className="w-[280px] p-6 rounded-2xl bg-white dark:bg-[#0B1F3A] border border-[#DCE9FF] dark:border-white/5 shadow-lg flex flex-col justify-between shrink-0"
                >
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-extrabold text-white">{rev.name}</span>
                      <span className="text-[10px] text-slate-500">2 weeks ago</span>
                    </div>
                    <div className="text-yellow-400 text-xs flex gap-0.5 mb-3">
                      ★★★★★
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                      "{rev.t}"
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center">
                    <span className="text-[10px] font-mono tracking-widest text-[#00F5D4]">GOOGLE USER</span>
                    <span className="material-symbols-outlined text-sm text-slate-500">check_circle</span>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </section>

      {/* 7. TEAM SECTION ("Team members") */}
      <section ref={teamSectionRef} id="team" className="relative w-full py-24 px-6 overflow-hidden bg-[#F8F9FF] dark:bg-[#0B1F3A] text-[#44474E] dark:text-[#9CA3AF]">
        <div className="max-w-[1100px] mx-auto relative z-10">
          
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-16">
            <div className="lg:col-span-7 text-left">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#8B5CF6] shadow-[0_0_8px_#8B5CF6]" />
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#8B5CF6]">
                  {t.teamCarousel.badge}
                </span>
              </div>
              
              {/* Scroll fill animation H2 heading */}
              <h2 className="relative text-3xl sm:text-[44px] font-extrabold text-slate-300 dark:text-white/10 tracking-tight leading-[1.1] select-none py-1">
                {/* Background Layer: Muted */}
                <span>
                  {teamTitle.normal}
                  <span className="opacity-30">
                    {teamTitle.highlight}
                  </span>
                </span>

                {/* Foreground Layer: Filled and colored, clipped based on scroll progress */}
                <motion.span
                  className="absolute inset-x-0 top-1 text-[#0B1F3A] dark:text-white pointer-events-none whitespace-pre-wrap"
                  style={{ clipPath: teamClipPathValue }}
                >
                  {teamTitle.normal}
                  <span className="bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent">
                    {teamTitle.highlight}
                  </span>
                </motion.span>
              </h2>
            </div>
            
            <div className="lg:col-span-5 text-left">
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed max-w-[380px] font-light">
                {t.teamCarousel.subtitle}
              </p>
            </div>
          </div>

          {/* 3-Card Coverflow Carousel Component */}
          <div className="relative w-full flex flex-col items-center">
            
            {/* Centered stage holding exactly 3 cards absolutely positioned */}
            <div 
              className="relative w-full max-w-[900px] h-[340px] sm:h-[420px] mx-auto flex items-center justify-center overflow-visible select-none mt-8 mb-4"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              
              {/* Desktop Vertically Centered Arrow Buttons (Centered outside the stage) */}
              <button
                onClick={handlePrevTeam}
                className="absolute -left-16 lg:-left-24 top-1/2 -translate-y-1/2 z-40 hidden sm:flex w-12 h-12 bg-[#0B1F3A] dark:bg-zinc-950 text-white rounded-full border border-white/10 items-center justify-center hover:scale-110 active:scale-95 transition-all hover:bg-[#172B52] dark:hover:bg-zinc-800 cursor-pointer shadow-lg"
                aria-label="Previous Team Member"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={handleNextTeam}
                className="absolute -right-16 lg:-right-24 top-1/2 -translate-y-1/2 z-40 hidden sm:flex w-12 h-12 bg-[#0B1F3A] dark:bg-zinc-950 text-white rounded-full border border-white/10 items-center justify-center hover:scale-110 active:scale-95 transition-all hover:bg-[#172B52] dark:hover:bg-zinc-800 cursor-pointer shadow-lg"
                aria-label="Next Team Member"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* 3 stacked cards */}
              {teamMembers.map((member, idx) => {
                const isActive = idx === activeTeamIndex;
                const isLeft = idx === (activeTeamIndex - 1 + 3) % 3;
                const isRight = idx === (activeTeamIndex + 1) % 3;

                // Compute position values dynamically
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
                    xVal = 0;
                    rVal = 0;
                    sVal = 1;
                    zIndexVal = 3;
                    filterVal = 'brightness(1) saturate(1) blur(0px)';
                  } else if (isLeft) {
                    xVal = isMobile ? -110 : -190;
                    rVal = isMobile ? -8 : -10;
                    sVal = 0.92;
                    zIndexVal = 2;
                    filterVal = 'brightness(0.6) saturate(0.85) blur(1px)';
                  } else if (isRight) {
                    xVal = isMobile ? 110 : 190;
                    rVal = isMobile ? 8 : 10;
                    sVal = 0.92;
                    zIndexVal = 2;
                    filterVal = 'brightness(0.6) saturate(0.85) blur(1px)';
                  }
                }

                return (
                  <motion.div
                    key={idx}
                    onClick={() => {
                      if (!isActive) {
                        setActiveTeamIndex(idx);
                      }
                    }}
                    initial={{
                      x: 0,
                      rotate: 0,
                      scale: 0.8,
                      opacity: 0,
                    }}
                    animate={{
                      x: xVal,
                      rotate: rVal,
                      scale: sVal,
                      zIndex: zIndexVal,
                      opacity: opacityVal,
                      filter: filterVal,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: idx * 0.15,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{
                      transformOrigin: 'bottom center',
                    }}
                    className="absolute w-[220px] h-[310px] sm:w-[270px] sm:h-[370px] rounded-[28px] overflow-hidden border border-white/10 shadow-2xl bg-zinc-900 cursor-pointer group"
                  >
                    {/* Portrait Photo fills the card */}
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />

                    {/* High quality vignette background overlay to ensure text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10" />

                    {/* Dark glass gradient info panel (Fades and slides up slightly when active) */}
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        y: isActive ? 0 : 8,
                      }}
                      transition={{
                        duration: 0.3,
                        delay: isActive ? 0.3 : 0,
                      }}
                      className="absolute bottom-4 left-4 right-4 p-5 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-md shadow-xl z-20 text-left"
                    >
                      <h3 className="text-lg sm:text-[22px] font-extrabold text-white leading-tight">
                        {member.name}
                      </h3>
                      <p className="text-[12px] text-zinc-400 mt-1">
                        {member.role}
                      </p>
                    </motion.div>
                  </motion.div>
                );
              })}

            </div>

            {/* Mobile Arrow Navigation Buttons (Below the carousel, centered side-by-side) */}
            <div className="flex sm:hidden justify-center gap-4 mt-6 z-40">
              <button
                onClick={handlePrevTeam}
                className="w-12 h-12 bg-zinc-950 text-white rounded-full border border-white/10 flex items-center justify-center active:scale-95 transition-all hover:bg-zinc-800"
                aria-label="Previous Team Member"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={handleNextTeam}
                className="w-12 h-12 bg-zinc-950 text-white rounded-full border border-white/10 flex items-center justify-center active:scale-95 transition-all hover:bg-zinc-800"
                aria-label="Next Team Member"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Dot indicators under the carousel */}
            <div className="flex justify-center gap-2 mt-6 sm:mt-8">
              {teamMembers.map((_, dotIdx) => {
                const isDotActive = dotIdx === activeTeamIndex;
                return (
                  <button
                    key={dotIdx}
                    onClick={() => setActiveTeamIndex(dotIdx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      isDotActive 
                        ? 'w-6 bg-white' 
                        : 'w-2 bg-zinc-600 hover:bg-zinc-400'
                    }`}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                  />
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* 8 & 9. FAQ & CONTACT FORM CARD SECTION (Intersecting/Overlapping block) */}
      <section id="faqs" className="relative w-full py-24 px-6 bg-[#EFF4FF] dark:bg-[#0D2645] overflow-hidden">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
          
          {/* Left bottom area: Floating rounded-2xl dark contact card (overlapping/standing out) */}
          <div id="contact" className="lg:col-span-5 bg-white dark:bg-[#0B1F3A] border border-[#DCE9FF] dark:border-white/10 p-8 sm:p-10 rounded-3xl shadow-2xl relative">
            <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] text-emerald-400 font-extrabold flex items-center gap-1.5 shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Response time: 1 hour</span>
            </div>

            <h3 className="text-2xl font-extrabold text-[#0B1F3A] dark:text-white mt-2 mb-6">Tell details about your project</h3>

            {leadSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold text-center">
                ✓ Thank you! Our strategy team will contact you within 1 hour.
              </div>
            ) : (
              <form onSubmit={handleLeadSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    required
                    value={leadForm.fullName}
                    onChange={(e) => setLeadForm({ ...leadForm, fullName: e.target.value })}
                    placeholder={t.faqs.namePlaceholder}
                    className="w-full bg-transparent border-b border-[#DCE9FF] dark:border-white/15 focus:border-[#00F5D4] py-3 text-sm text-[#0B1F3A] dark:text-white focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    required
                    value={leadForm.email}
                    onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                    placeholder={t.faqs.emailPlaceholder}
                    className="w-full bg-transparent border-b border-[#DCE9FF] dark:border-white/15 focus:border-[#00F5D4] py-3 text-sm text-[#0B1F3A] dark:text-white focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <textarea
                    rows={4}
                    required
                    value={leadForm.message}
                    onChange={(e) => setLeadForm({ ...leadForm, message: e.target.value })}
                    placeholder={t.faqs.messagePlaceholder}
                    className="w-full bg-transparent border-b border-[#DCE9FF] dark:border-white/15 focus:border-[#00F5D4] py-3 text-sm text-[#0B1F3A] dark:text-white focus:outline-none resize-y transition-colors"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="subscribeNews"
                    checked={leadForm.newsletter}
                    onChange={(e) => setLeadForm({ ...leadForm, newsletter: e.target.checked })}
                    className="rounded text-[#00F5D4] bg-slate-100 dark:bg-slate-800 border-[#DCE9FF] dark:border-white/10"
                  />
                  <label htmlFor="subscribeNews" className="text-xs text-slate-600 dark:text-slate-400 cursor-pointer">
                    Subscribe to Newsletter
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#0B1F3A] dark:bg-[#00F5D4] hover:bg-[#172B52] dark:hover:bg-[#00F5D4] text-white dark:text-[#0B1F3A] font-bold text-sm rounded-full shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <span className="material-symbols-outlined text-sm bg-white/10 rounded-full p-0.5 flex items-center justify-center">
                    arrow_outward
                  </span>
                  <span>Submit now</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: FAQ Accordion list */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                {t.faqs.badge}
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
              Learn more from FAQs
            </h2>

            {/* Category tabs with underlined orange active state */}
            <div className="flex border-b border-[#DCE9FF] dark:border-white/10 w-full mb-8">
              <button className="px-4 py-2.5 text-xs font-bold text-[#0B1F3A] dark:text-white uppercase tracking-widest border-b-2 border-[#0B1F3A] transition-all cursor-pointer">
                General Ask
              </button>
            </div>

            {/* Accordion list of 8 rows */}
            <div className="w-full space-y-3">
              {faqList.map((faq, idx) => {
                const isOpen = activeFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`border rounded-xl transition-all ${
                      isOpen
                        ? 'bg-[#EFF4FF] dark:bg-[#101726]/80 border-[#DCE9FF] dark:border-white/15 shadow-xl'
                        : 'bg-transparent border-[#DCE9FF]/50 dark:border-white/5 hover:border-[#DCE9FF] dark:hover:border-white/10'
                    }`}
                  >
                    <button
                      onClick={() => setActiveFaqIndex(isOpen ? null : idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-xs font-mono font-bold text-slate-500">
                          {formatLocalizedNumber(idx + 1, language, 0).padStart(2, '0')}
                        </span>
                        <span className="text-sm font-bold text-[#0B1F3A] dark:text-white">{faq.q}</span>
                      </div>
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform ${
                        isOpen ? 'bg-[#0B1F3A] text-white rotate-45' : 'bg-white/5 text-slate-400'
                      }`}>
                        <span className="material-symbols-outlined text-base">add</span>
                      </span>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="px-5 pb-5 text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-[#DCE9FF] dark:border-white/5 pt-3"
                        >
                          {faq.a}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* 10. FOOTER */}
      <footer id="footer" className="relative w-full pt-20 pb-12 bg-[#F8F9FF] dark:bg-[#0B1F3A] border-t border-[#DCE9FF] dark:border-white/5">
        <div className="max-w-[1200px] mx-auto px-6">
          
          {/* Main columns block */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200 dark:border-white/10">
            
            {/* Brand Block */}
            <div className="lg:col-span-5 space-y-4 text-left">
              <span className="text-2xl font-black tracking-tight text-[#0B1F3A] dark:text-white flex items-center gap-1">
                Hamrah<span className="text-[#0B1F3A] dark:text-[#0B1F3A]">Tech</span>
              </span>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-sm">
                A highly premium, full-service digital agency delivering high-performance web engineering and localized conversion marketing strategy.
              </p>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2 space-y-3 text-left">
              <h4 className="text-xs font-bold text-slate-800 dark:text-slate-300 uppercase tracking-widest">
                Quick Links
              </h4>
              <ul className="space-y-2 text-xs text-slate-500 dark:text-slate-400 font-semibold">
                <li><a href="#hero" className="hover:text-[#00F5D4] transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-[#00F5D4] transition-colors">About us</a></li>
                <li><a href="#services" className="hover:text-[#00F5D4] transition-colors">Services</a></li>
                <li><a href="#faqs" className="hover:text-[#00F5D4] transition-colors">FAQ's</a></li>
                <li><a href="#contact" className="hover:text-[#00F5D4] transition-colors">Contact</a></li>
                <li><a href="#hero" className="hover:text-[#00F5D4] transition-colors">Blogs</a></li>
              </ul>
            </div>

            {/* All Pages */}
            <div className="lg:col-span-2 space-y-3 text-left">
              <h4 className="text-xs font-bold text-slate-800 dark:text-slate-300 uppercase tracking-widest">
                All Pages
              </h4>
              <ul className="space-y-2 text-xs text-slate-500 dark:text-slate-400 font-semibold">
                <li><a href="#faqs" className="hover:text-[#00F5D4] transition-colors">Privacy Policy</a></li>
                <li><a href="#faqs" className="hover:text-[#00F5D4] transition-colors">Terms & Condition</a></li>
              </ul>
            </div>

            {/* Social Media column with circular icon buttons */}
            <div className="lg:col-span-3 space-y-3 text-left">
              <h4 className="text-xs font-bold text-slate-800 dark:text-slate-300 uppercase tracking-widest">
                Social Media
              </h4>
              <div className="flex items-center gap-3 pt-2">
                {['Instagram', 'LinkedIn', 'Facebook', 'TikTok', 'X'].map((social) => (
                  <button
                    key={social}
                    title={social}
                    className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-[#00F5D4] hover:text-[#00F5D4] text-slate-800 dark:text-white flex items-center justify-center transition-all cursor-pointer shadow-md hover:scale-105"
                  >
                    <span className="material-symbols-outlined text-sm">alternate_email</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Middle Info Row with circular dark icon badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8 border-b border-slate-100 dark:border-white/5 text-xs text-slate-500 dark:text-slate-400 font-semibold text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-[#00BFA5] dark:text-[#00F5D4]">
                <span className="material-symbols-outlined text-sm">location_on</span>
              </div>
              <div>
                <p className="text-slate-500 uppercase tracking-widest text-[9px] font-bold">Office Address</p>
                <p className="text-[#0B1F3A] dark:text-white mt-0.5">{t.contact.addressVal}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-[#00BFA5] dark:text-[#00F5D4]">
                <span className="material-symbols-outlined text-sm">support_agent</span>
              </div>
              <div>
                <p className="text-slate-500 uppercase tracking-widest text-[9px] font-bold">24/7 Support</p>
                <p className="text-[#0B1F3A] dark:text-white mt-0.5">{t.contact.phoneVal} · {t.contact.emailVal}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-[#00BFA5] dark:text-[#00F5D4]">
                <span className="material-symbols-outlined text-sm">schedule</span>
              </div>
              <div>
                <p className="text-slate-500 uppercase tracking-widest text-[9px] font-bold">Business Hours</p>
                <p className="text-[#0B1F3A] dark:text-white mt-0.5">{t.contact.hoursVal}</p>
              </div>
            </div>
          </div>

          {/* Bottom copyright line */}
          <div className="pt-8 text-center text-xs text-slate-500 font-bold">
            <p>© {new Date().getFullYear()} Hamrah Tech. All rights reserved.</p>
          </div>

        </div>
      </footer>

    </div>
  );
};
