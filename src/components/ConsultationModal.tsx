import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const ConsultationModal: React.FC = () => {
  const { isConsultationModalOpen, closeConsultationModal, t, isRtl } = useApp();
  const [formData, setFormData] = useState({ fullName: '', email: '', phone: '', service: 'seo', message: '' });
  const [submitted, setSubmitted] = useState(false);

  if (!isConsultationModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ fullName: '', email: '', phone: '', service: 'seo', message: '' });
      closeConsultationModal();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white dark:bg-[#111C33] rounded-3xl border border-[#E2E8EE] dark:border-[#22304A] p-6 sm:p-8 shadow-2xl overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={closeConsultationModal}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#EFF4FF] dark:bg-[#0A1224] border border-[#DCE9FF] dark:border-[#22304A] text-[#475569] dark:text-[#9CA3AF] hover:text-[#0D1C2E] dark:hover:text-white flex items-center justify-center cursor-pointer transition-colors"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>

        {submitted ? (
          <div className="py-10 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#006A62]/10 dark:bg-[#2EE6D6]/20 text-[#006A62] dark:text-[#2EE6D6] flex items-center justify-center mx-auto shadow-lg">
              <span className="material-symbols-outlined text-3xl">check_circle</span>
            </div>
            <h3 className="text-2xl font-bold text-[#0D1C2E] dark:text-[#F3F4F6]">
              Thank you! Your inquiry has been sent to Hamrah Tech.
            </h3>
          </div>
        ) : (
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#006A62]/10 dark:bg-[#2EE6D6]/10 text-[#006A62] dark:text-[#2EE6D6] font-semibold text-xs">
              <span className="w-2 h-2 rounded-full bg-[#006A62] dark:bg-[#2EE6D6] animate-ping" />
              <span>{t.contact.cardGuarantee}</span>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-[#0D1C2E] dark:text-[#F3F4F6]">
                {t.modal.title}
              </h2>
              <p className="text-xs text-[#475569] dark:text-[#9CA3AF] mt-1">
                {t.modal.subtitle}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0D1C2E] dark:text-[#9CA3AF] mb-1.5">
                  {t.modal.serviceSelectLabel}
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#F8F9FF] dark:bg-[#0A1224] border border-[#E2E8EE] dark:border-[#22304A] text-sm text-[#0D1C2E] dark:text-white focus:outline-none focus:border-[#006A62] dark:focus:border-[#2EE6D6] transition"
                >
                  <option value="seo">{t.modal.optionSeo}</option>
                  <option value="ads">{t.modal.optionAds}</option>
                  <option value="web">{t.modal.optionWeb}</option>
                  <option value="brand">{t.modal.optionBrand}</option>
                  <option value="social">{t.modal.optionSocial}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0D1C2E] dark:text-[#9CA3AF] mb-1.5">
                  {t.modal.fullNameLabel}
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder={t.contact.fullNamePlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-[#F8F9FF] dark:bg-[#0A1224] border border-[#E2E8EE] dark:border-[#22304A] text-sm text-[#0D1C2E] dark:text-white focus:outline-none focus:border-[#006A62] dark:focus:border-[#2EE6D6] transition"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0D1C2E] dark:text-[#9CA3AF] mb-1.5">
                    {t.modal.emailLabel}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t.contact.emailPlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-[#F8F9FF] dark:bg-[#0A1224] border border-[#E2E8EE] dark:border-[#22304A] text-sm text-[#0D1C2E] dark:text-white focus:outline-none focus:border-[#006A62] dark:focus:border-[#2EE6D6] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0D1C2E] dark:text-[#9CA3AF] mb-1.5">
                    {t.modal.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (757) 416-2841"
                    className="w-full px-4 py-3 rounded-xl bg-[#F8F9FF] dark:bg-[#0A1224] border border-[#E2E8EE] dark:border-[#22304A] text-sm text-[#0D1C2E] dark:text-white focus:outline-none focus:border-[#006A62] dark:focus:border-[#2EE6D6] transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0D1C2E] dark:text-[#9CA3AF] mb-1.5">
                  {t.modal.messageLabel}
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t.contact.messagePlaceholder}
                  className="w-full px-4 py-3 rounded-xl bg-[#F8F9FF] dark:bg-[#0A1224] border border-[#E2E8EE] dark:border-[#22304A] text-sm text-[#0D1C2E] dark:text-white focus:outline-none focus:border-[#006A62] dark:focus:border-[#2EE6D6] transition resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0F2040] dark:bg-[#2EE6D6] hover:bg-[#172B52] dark:hover:bg-[#52EDE1] text-white dark:text-[#0F2040] font-bold text-sm py-3.5 rounded-full transition shadow-lg cursor-pointer"
                >
                  <span>{t.modal.submitModal}</span>
                  <span className="material-symbols-outlined text-lg">
                    {isRtl ? 'arrow_back' : 'arrow_forward'}
                  </span>
                </button>
              </div>
            </form>

            <div className="pt-3 border-t border-[#E2E8EE] dark:border-[#22304A] flex items-center justify-between text-[11px] text-[#475569] dark:text-[#9CA3AF]">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm text-[#006A62] dark:text-[#2EE6D6]">lock</span>
                {t.contact.trustBadge1}
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm text-[#006A62] dark:text-[#2EE6D6]">verified</span>
                {t.contact.trustBadge2}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
