import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export const DashboardView: React.FC = () => {
  const { user, logout, token } = useAuth();
  const { isRtl } = useApp();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-[#F8F9FF] dark:bg-[#0B1F3A] transition-colors duration-300">
      <div className="max-w-4xl mx-auto space-y-8" dir={isRtl ? 'rtl' : 'ltr'}>
        {/* کارت خوش‌آمدگویی هدر */}
        <div className="bg-white dark:bg-[#0E2442] border border-slate-200 dark:border-[#1A365D] rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-[#00F5D4]/15 border border-[#00F5D4]/30 flex items-center justify-center text-[#0B1F3A] dark:text-[#00F5D4] font-black text-2xl shadow-inner">
              {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F5D4]/10 border border-[#00F5D4]/20 text-[#0B1F3A] dark:text-[#00F5D4] text-[10px] font-extrabold uppercase mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00F5D4] animate-pulse" />
                حساب احراز هویت شده (Sanctum Auth)
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-[#0B1F3A] dark:text-white">
                خوش آمدید، {user?.name || 'کاربر همراه تک'}
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                ایمیل: {user?.email}
              </p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="px-5 py-2.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/20 text-xs font-bold transition duration-200 cursor-pointer"
          >
            خروج از حساب کاربری
          </button>
        </div>

        {/* کارت اطلاعات فنی و وضعیت توکن */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-[#0E2442] border border-slate-200 dark:border-[#1A365D] rounded-3xl p-6 shadow-xl">
            <h2 className="text-base font-extrabold text-[#0B1F3A] dark:text-white mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#00F5D4]">security</span>
              وضعیت توکن احراز هویت
            </h2>
            <div className="space-y-3 text-xs">
              <div className="flex justify-between py-2 border-b border-slate-100 dark:border-white/5">
                <span className="text-slate-500">وضعیت دسترسی:</span>
                <span className="text-emerald-500 font-bold">فعال (Authenticated)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100 dark:border-white/5">
                <span className="text-slate-500">نوع ذخیره‌سازی:</span>
                <span className="text-[#0B1F3A] dark:text-slate-300 font-mono">Bearer Token (localStorage)</span>
              </div>
              <div className="py-2">
                <span className="text-slate-500 block mb-1">نمونه توکن دریافت شده:</span>
                <code className="block p-2.5 rounded-xl bg-slate-100 dark:bg-[#0B1F3A] text-[10px] font-mono text-slate-600 dark:text-slate-300 break-all border border-slate-200 dark:border-white/10">
                  {token ? token.substring(0, 45) + '...' : 'موجود نیست'}
                </code>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#0E2442] border border-slate-200 dark:border-[#1A365D] rounded-3xl p-6 shadow-xl">
            <h2 className="text-base font-extrabold text-[#0B1F3A] dark:text-white mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#00F5D4]">rocket_launch</span>
              خدمات متصل و درخواست پروژه
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
              شما اکنون به تمام امکانات اختصای پنل دسترسی دارید. می‌توانید پروژه‌های خود را ثبت کرده و وضعیت پیشرفت آن را پیگیری کنید.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => navigate('/services')}
                className="flex-1 py-2.5 px-4 rounded-xl bg-[#0B1F3A] dark:bg-[#00F5D4] text-white dark:text-[#0B1F3A] text-xs font-bold text-center hover:opacity-90 transition"
              >
                مشاهده خدمات
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="flex-1 py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-[#0B1F3A] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 text-xs font-bold text-center hover:bg-slate-200 dark:hover:bg-white/5 transition"
              >
                ثبت سفارش جدید
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
