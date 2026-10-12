import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Language, translations, TranslationSchema } from '../i18n/translations';

export type PageView = 'home' | 'about-us' | 'services' | 'gallery' | 'faqs' | 'contact';
export type ThemeMode = 'dark' | 'light';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
  currentPage: PageView;
  setCurrentPage: (page: PageView) => void;
  t: TranslationSchema;
  isRtl: boolean;
  isConsultationModalOpen: boolean;
  openConsultationModal: () => void;
  closeConsultationModal: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');
  const [theme, setThemeState] = useState<ThemeMode>('light');
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // Derive current page from URL path
  const getPageFromPath = (path: string): PageView => {
    const cleanPath = path.replace(/^\//, '');
    if (!cleanPath || cleanPath === 'home') return 'home';
    if (cleanPath === 'about-us' || cleanPath === 'about') return 'about-us';
    if (cleanPath === 'services' || cleanPath === 'our-services') return 'services';
    if (cleanPath === 'gallery' || cleanPath === 'products') return 'gallery';
    if (cleanPath === 'faqs' || cleanPath === 'faq') return 'faqs';
    if (cleanPath === 'contact') return 'contact';
    return 'home';
  };

  const currentPage = getPageFromPath(location.pathname);

  const setCurrentPage = (page: PageView) => {
    const targetPath = page === 'home' ? '/' : `/${page}`;
    if (location.pathname !== targetPath) {
      navigate(targetPath);
    }
  };

  const isRtl = language === 'prs' || language === 'pus';

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    const dir = lang === 'en' ? 'ltr' : 'rtl';
    document.documentElement.dir = dir;
    document.documentElement.lang = lang === 'en' ? 'en' : lang === 'prs' ? 'fa' : 'ps';
  };

  const setTheme = (mode: ThemeMode) => {
    // Smooth cross-fade visual transition effect
    const overlay = document.createElement('div');
    overlay.className = 'fixed inset-0 z-[9999] pointer-events-none transition-opacity duration-300 bg-black/15 dark:bg-white/15 opacity-0';
    document.body.appendChild(overlay);
    requestAnimationFrame(() => {
      overlay.style.opacity = '1';
    });

    setThemeState(mode);
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.className = 'bg-[#0B1F3A] text-[#F3F4F6] antialiased transition-colors duration-500';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.className = 'bg-[#F8F9FF] text-[#0B1F3A] antialiased transition-colors duration-500';
    }

    setTimeout(() => {
      overlay.style.opacity = '0';
      setTimeout(() => {
        if (overlay.parentNode) {
          overlay.parentNode.removeChild(overlay);
        }
      }, 300);
    }, 150);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    setLanguage('en');
    setTheme('light');
  }, []);

  const t = translations[language];

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        theme,
        setTheme,
        toggleTheme,
        currentPage,
        setCurrentPage,
        t,
        isRtl,
        isConsultationModalOpen,
        openConsultationModal: () => setIsConsultationModalOpen(true),
        closeConsultationModal: () => setIsConsultationModalOpen(false),
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
