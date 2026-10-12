import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Header } from './components/Header';
import { ConsultationModal } from './components/ConsultationModal';
import { ScrollToTop } from './components/ScrollToTop';
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { ServicesView } from './views/ServicesView';
import { FaqsView } from './views/FaqsView';
import { ContactView } from './views/ContactView';
import { GalleryView } from './views/GalleryView';
import { RouteProgressBar } from './components/RouteProgressBar';

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300">
      <RouteProgressBar />
      <ScrollToTop />
      {/* Sticky floating bottom/top navbar is inside Header */}
      <Header />
      <main className="flex-grow">
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
