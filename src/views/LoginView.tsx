import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useApp } from '../context/AppContext';

export const LoginView: React.FC = () => {
  const { login } = useAuth();
  const { isRtl } = useApp();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.message || 'اطلاعات ورود اشتباه است یا خطایی رخ داده است.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-16 px-4 flex items-center justify-center bg-[#F8F9FF] dark:bg-[#0B1F3A] transition-colors duration-300">
      <div className="w-full max-w-md bg-white dark:bg-[#0E2442] border border-[#D1DBE5] dark:border-[#1A365D] rounded-3xl p-8 shadow-2xl relative overflow-hidden">
        {/* هدر لاگین */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-[#0B1F3A] dark:bg-[#00F5D4] rounded-2xl p-2.5 mx-auto mb-4 shadow-lg flex items-center justify-center">
            <img src="/hamrah_tech_logo.jpeg" alt="Hamrah Tech" className="w-full h-full object-contain rounded-xl" />
          </div>
          <h1 className="text-2xl font-black text-[#0B1F3A] dark:text-white">ورود به حساب کاربری</h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5">
            جهت دسترسی به دشبورد و خدمات، اطلاعات خود را وارد نمایید.
          </p>
        </div>

        {error && (
          <div className="mb-6 p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-semibold text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5" dir={isRtl ? 'rtl' : 'ltr'}>
          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0B1F3A] dark:text-slate-300 mb-2">
              آدرس ایمیل
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="w-full px-4 py-3 rounded-xl bg-[#F8F9FF] dark:bg-[#0B1F3A] border border-slate-200 dark:border-white/10 text-sm text-[#0B1F3A] dark:text-white focus:outline-none focus:border-[#00F5D4] transition"
            />
          </div>

          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0B1F3A] dark:text-slate-300 mb-2">
              رمز عبور
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl bg-[#F8F9FF] dark:bg-[#0B1F3A] border border-slate-200 dark:border-white/10 text-sm text-[#0B1F3A] dark:text-white focus:outline-none focus:border-[#00F5D4] transition"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3.5 bg-[#0B1F3A] dark:bg-[#00F5D4] hover:bg-[#172B52] dark:hover:bg-[#00E5C5] text-white dark:text-[#0B1F3A] font-extrabold text-sm rounded-xl shadow-lg transition-all transform active:scale-98 cursor-pointer disabled:opacity-50"
          >
            {submitting ? 'در حال برقراری ارتباط...' : 'ورود به حساب'}
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-slate-100 dark:border-white/5 text-center text-xs text-slate-500 dark:text-slate-400">
          حساب کاربری ندارید؟{' '}
          <Link to="/register" className="text-[#0B1F3A] dark:text-[#00F5D4] font-bold hover:underline">
            ثبت‌نام کنید
          </Link>
        </div>
      </div>
    </div>
  );
};
