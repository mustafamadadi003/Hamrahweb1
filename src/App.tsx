import React, { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Header } from './components/Header';
import { ConsultationModal } from './components/ConsultationModal';
import { ScrollToTop } from './components/ScrollToTop';
import { RouteProgressBar } from './components/RouteProgressBar';
import { PageLoader } from './components/PageLoader';
import { CustomCursor } from './components/CustomCursor';

const HomeView = lazy(() => import('./views/HomeView').then(m => ({ default: m.HomeView })));
const AboutView = lazy(() => import('./views/AboutView').then(m => ({ default: m.AboutView })));
const ServicesView = lazy(() => import('./views/ServicesView').then(m => ({ default: m.ServicesView })));
const FaqsView = lazy(() => import('./views/FaqsView').then(m => ({ default: m.FaqsView })));
const ContactView = lazy(() => import('./views/ContactView').then(m => ({ default: m.ContactView })));
const GalleryView = lazy(() => import('./views/GalleryView').then(m => ({ default: m.GalleryView })));
const LoginView = lazy(() => import('./views/LoginView').then(m => ({ default: m.LoginView })));
const RegisterView = lazy(() => import('./views/RegisterView').then(m => ({ default: m.RegisterView })));
const DashboardView = lazy(() => import('./views/DashboardView').then(m => ({ default: m.DashboardView })));

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300">
      <CustomCursor />
      <RouteProgressBar />
      <ScrollToTop />
      {/* Sticky floating bottom/top navbar is inside Header */}
      <Header />
      <main className="flex-grow">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/about" element={<AboutView />} />
            <Route path="/about-us" element={<AboutView />} />
            <Route path="/services" element={<ServicesView />} />
            <Route path="/our-services" element={<ServicesView />} />
            <Route path="/faqs" element={<FaqsView />} />
            <Route path="/faq" element={<FaqsView />} />
            <Route path="/contact" element={<ContactView />} />
            <Route path="/gallery" element={<GalleryView />} />
            <Route path="/products" element={<GalleryView />} />
            
            {/* مسیرهای احراز هویت */}
            <Route path="/login" element={<LoginView />} />
            <Route path="/register" element={<RegisterView />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardView />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<HomeView />} />
          </Routes>
        </Suspense>
      </main>
      <ConsultationModal />
    </div>
  );
};

export default function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const handleLoad = () => setIsReady(true);
    if (document.readyState === 'complete') {
      setIsReady(true);
    } else {
      window.addEventListener('load', handleLoad);
      const timer = setTimeout(() => setIsReady(true), 500);
      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(timer);
      };
    }
  }, []);

  if (!isReady) {
    return (
      <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#0B1F3A]">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 bg-white rounded-2xl p-2 shadow-2xl flex items-center justify-center animate-pulse">
            <img src="/hamrah_tech_logo.jpeg" alt="Hamrah Tech" className="w-full h-full object-contain" />
          </div>
          <div className="w-8 h-8 border-3 border-[#00F5D4] border-t-transparent rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <AppProvider>
        <AuthProvider>
          <MainLayout />
        </AuthProvider>
      </AppProvider>
    </BrowserRouter>
  );
}
