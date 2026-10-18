import React, { useState, useEffect } from 'react';
import { useApp, PageView } from '../context/AppContext';
import { Language } from '../i18n/translations';
import { motion, AnimatePresence } from 'motion/react';
import logoImg from '../assets/logo/Hamrah_Tech_transparent.png';

export const Header: React.FC = () => {
  const { language, setLanguage, theme, toggleTheme, t, isRtl, openConsultationModal, currentPage, setCurrentPage } = useApp();
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Handle scroll position and spy sections
  useEffect(() => {
    const handleScroll = () => {
      // Intersection Observer alternative for scroll spying
      const sections = ['hero', 'about', 'services', 'portfolio', 'team', 'faqs', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageView; label: string }[] = [
    { id: 'home', label: t.nav.home },
    { id: 'about-us', label: t.nav.aboutUs },
    { id: 'services', label: t.nav.services },
    { id: 'gallery', label: t.nav.gallery },
    { id: 'faqs', label: t.nav.faqs },
    { id: 'contact', label: t.nav.contact },
  ];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'prs', label: 'دری (Dari)', flag: '🇦🇫' },
    { code: 'pus', label: 'پښتـو (Pashto)', flag: '🇦🇫' },
  ];

  const handleNavClick = (page: PageView) => {
    setIsMobileMenuOpen(false);
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* 2. STICKY FLOATING TOP NAVBAR (Always visible and fixed at the top) */}
      <AnimatePresence>
        {isNavbarVisible && (
          <motion.div
            initial={{ y: -80, x: '-50%', opacity: 0 }}
            animate={{ y: 0, x: '-50%', opacity: 1 }}
            exit={{ y: -80, x: '-50%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 28 }}
            className="fixed top-6 left-1/2 z-50 w-[92%] sm:w-auto max-w-[1100px]"
          >
            {/* The Main Pill Bar */}
            <div className="flex items-center justify-between gap-2 sm:gap-4 md:gap-6 px-3 sm:px-6 py-2.5 sm:py-3 bg-white/90 dark:bg-[#080E1C]/80 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-full shadow-2xl transition-colors duration-300">
              
              {/* Left Zone: Brand Logo Lockup */}
              <button
                onClick={() => handleNavClick('home')}
                className="flex items-center gap-2.5 text-left cursor-pointer shrink-0 group"
              >
                <div className="relative h-8 sm:h-9 w-auto overflow-hidden shrink-0 flex items-center">
                  <img
                    src={logoImg}
                    alt="Hamrah Tech Logo"
                    className="h-full w-auto max-h-9 object-contain dark:invert transition-all group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="eager"
                    decoding="async"
                  />
                </div>
                <span className="hidden sm:inline text-sm font-black tracking-tight text-slate-900 dark:text-white">
                  Hamrah<span className="text-[#0B1F3A] dark:text-[#00F5D4]">Tech</span>
                </span>
              </button>

              {/* Center Zone: Nav Links (Desktop) */}
              <nav className="hidden lg:flex items-center gap-1 bg-slate-100 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 px-2 py-1 rounded-full">
                {navItems.map((item) => {
                  const isActive = currentPage === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all duration-250 whitespace-nowrap cursor-pointer ${
                        isActive
                          ? 'bg-[#0B1F3A] dark:bg-white text-white dark:text-black font-extrabold shadow-sm'
                          : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </nav>

              {/* Right Zone: Controls & Primary CTA */}
              <div className="flex items-center gap-2 shrink-0">
                {/* Language Selector Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                    className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/10 text-xs font-bold text-slate-800 dark:text-white hover:border-[#00F5D4] transition-all cursor-pointer shadow-sm"
                  >
                    <span className="material-symbols-outlined text-sm text-[#00F5D4]">translate</span>
                    <span>{language === 'en' ? 'EN' : language === 'prs' ? 'دری' : 'پښتو'}</span>
                    <span className="material-symbols-outlined text-xs">arrow_drop_down</span>
                  </button>

                  {isLangDropdownOpen && (
                    <div
                      className={`absolute top-full mt-2 w-40 rounded-xl bg-white dark:bg-[#0B1F3A] border border-slate-200 dark:border-white/10 shadow-2xl py-1 z-50 ${
                        isRtl ? 'right-0' : 'left-0'
                      }`}
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code);
                            setIsLangDropdownOpen(false);
                          }}
                          className={`w-full flex items-center justify-between px-3 py-2 text-xs font-bold cursor-pointer transition-colors ${
                            language === lang.code
                              ? 'bg-[#00F5D4]/10 text-[#00BFA5] dark:text-[#00F5D4]'
                              : 'text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                          }`}
                        >
                          <span>{lang.label}</span>
                          <span>{lang.flag}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Theme Toggle Button */}
                <button
                  onClick={toggleTheme}
                  className="w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-[#00F5D4] flex items-center justify-center hover:scale-105 transition-all cursor-pointer shadow-sm"
                  title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                >
                  <span className="material-symbols-outlined text-base">
                    {theme === 'dark' ? 'light_mode' : 'dark_mode'}
                  </span>
                </button>

                {/* Primary CTA */}
                <button
                  onClick={openConsultationModal}
                  className="inline-flex items-center gap-1.5 bg-[#00F5D4] hover:bg-[#00F5D4] text-[#0B1F3A] font-black text-xs px-3.5 py-2 sm:px-4.5 sm:py-2.5 rounded-full transition-all duration-200 transform active:scale-95 shadow-md cursor-pointer whitespace-nowrap"
                >
                  {/* Circular Arrow Icon on its Left */}
                  <span className="material-symbols-outlined text-xs sm:text-sm font-black bg-white/30 rounded-full p-0.5 flex items-center justify-center">
                    arrow_outward
                  </span>
                  <span className="hidden xs:inline">{t.nav.getInTouch}</span>
                </button>

                {/* Mobile Menu Burger Icon */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden w-8.5 h-8.5 rounded-full bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white flex items-center justify-center cursor-pointer hover:bg-slate-200 dark:hover:bg-white/20 transition-all"
                >
                  <span className="material-symbols-outlined text-lg">
                    {isMobileMenuOpen ? 'close' : 'menu'}
                  </span>
                </button>
              </div>

            </div>

            {/* Mobile Nav Links expanded vertically from top (Glass style) */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -15, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-16 left-0 right-0 p-4 bg-white/95 dark:bg-[#080E1C]/90 backdrop-blur-2xl border border-slate-200 dark:border-white/10 rounded-3xl shadow-2xl flex flex-col gap-2 z-40"
                >
                  {navItems.map((item) => {
                    const isActive = currentPage === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleNavClick(item.id)}
                        className={`w-full text-left py-3 px-4.5 rounded-xl text-xs font-bold transition-all ${
                          isActive
                            ? 'bg-[#00F5D4]/10 text-[#00BFA5] dark:text-[#00F5D4]'
                            : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white'
                        }`}
                      >
                        {item.label}
                      </button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
