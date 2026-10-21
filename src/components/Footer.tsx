import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import logoImg from '../assets/logo/hamrah_tech_logo.jpeg';

export const Footer: React.FC = () => {
  const { t } = useApp();

  return (
    <footer className="w-full bg-[#EEF3F6] dark:bg-[#070D1A] border-t border-[#E2E8EE] dark:border-[#22304A] pt-16 pb-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#E2E8EE] dark:border-[#22304A]/60">
          
          {/* Brand Bio */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative h-10 sm:h-12 w-auto overflow-hidden shrink-0 flex items-center bg-white rounded-xl p-1.5 shadow-sm inline-block">
              <img
                src={logoImg}
                alt="Hamrah Tech Logo"
                className="h-full w-auto object-contain transition-all"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="text-[#475569] dark:text-[#9CA3AF] text-sm leading-relaxed max-w-sm">
              {t.hero.description1}
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B1F3A]/10 dark:bg-[#00F5D4]/10 text-[#0B1F3A] dark:text-[#00F5D4] text-xs font-bold">
                <span className="material-symbols-outlined text-sm">verified</span>
                5★ Rated Digital Marketing Agency
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-[#0B1F3A] dark:text-[#F3F4F6] tracking-wide uppercase">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#475569] dark:text-[#9CA3AF]">
              <li>
                <Link to="/" className="hover:text-[#00F5D4] dark:hover:text-[#00F5D4] transition-colors cursor-pointer">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:text-[#00F5D4] dark:hover:text-[#00F5D4] transition-colors cursor-pointer">
                  {t.nav.aboutUs}
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#00F5D4] dark:hover:text-[#00F5D4] transition-colors cursor-pointer">
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-[#00F5D4] dark:hover:text-[#00F5D4] transition-colors cursor-pointer">
                  {t.nav.faqs}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#00F5D4] dark:hover:text-[#00F5D4] transition-colors cursor-pointer">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Capabilities */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-[#0B1F3A] dark:text-[#F3F4F6] tracking-wide uppercase">
              Core Solutions
            </h4>
            <ul className="space-y-2 text-sm text-[#475569] dark:text-[#9CA3AF]">
              <li>SEO & Organic Search</li>
              <li>Google & Meta Ads</li>
              <li>High-Converting Web Design</li>
              <li>Brand Identity & Style</li>
              <li>Social Media Management</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-[#0B1F3A] dark:text-[#F3F4F6] tracking-wide uppercase">
              Get In Touch
            </h4>
            <div className="space-y-2.5 text-xs text-[#475569] dark:text-[#9CA3AF]">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-sm text-[#00F5D4] dark:text-[#00F5D4]">location_on</span>
                <span>{t.contact.addressVal}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-[#00F5D4] dark:text-[#00F5D4]">mail</span>
                <span>{t.contact.emailVal}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-[#00F5D4] dark:text-[#00F5D4]">call</span>
                <span>{t.contact.phoneVal}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-[#00F5D4] dark:text-[#00F5D4]">schedule</span>
                <span>{t.contact.hoursVal}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#475569] dark:text-[#9CA3AF]">
          <p>© {new Date().getFullYear()} Hamrah Tech. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/faqs" className="hover:text-[#00F5D4] dark:hover:text-[#00F5D4] transition-colors">Privacy Policy</Link>
            <Link to="/faqs" className="hover:text-[#00F5D4] dark:hover:text-[#00F5D4] transition-colors">Terms of Service</Link>
            <Link to="/contact" className="hover:text-[#00F5D4] dark:hover:text-[#00F5D4] transition-colors">24/7 Client Support</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
