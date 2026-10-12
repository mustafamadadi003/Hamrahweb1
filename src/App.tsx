import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
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
            <Route path="*" element={<HomeView />} />
          </Routes>
        </Suspense>
      </main>
      <ConsultationModal />
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <MainLayout />
      </AppProvider>
    </BrowserRouter>
  );
}
