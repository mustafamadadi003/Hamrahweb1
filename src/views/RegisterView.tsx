import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useApp } from '../context/AppContext';

export const RegisterView: React.FC = () => {
  const { register } = useAuth();
  const { isRtl } = useApp();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== passwordConfirmation) {
      setError('تکرار رمز عبور مطابقت ندارد.');
      return;
    }

    setSubmitting(true);

    try {
      await register(name, email, password, passwordConfirmation);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.message || 'خطا در ثبت‌نام. لطفاً مجدداً تلاش کنید.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-16 px-4 flex items-center justify-center bg-[#F8F9FF] dark:bg-[#0B1F3A] transition-colors duration-300">
      <div className="w-full max-w-md bg-white dark:bg-[#0E2442] border border-[#D1DBE5] dark:border-[#1A365D] rounded-3xl p-8 shadow-2xl relative overflow-hidden">
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-[#0B1F3A] dark:bg-[#00F5D4] rounded-2xl p-2.5 mx-auto mb-4 shadow-lg flex items-center justify-center">
            <img src="/hamrah_tech_logo.jpeg" alt="Hamrah Tech" className="w-full h-full object-contain rounded-xl" />
          </div>
          <h1 className="text-2xl font-black text-[#0B1F3A] dark:text-white">ایجاد حساب جدید</h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5">
            جهت شروع پروژه و بهره‌مندی از خدمات همراه تک ثبت‌نام کنید.
          </p>
        </div>

        {error && (
          <div className="mb-6 p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-semibold text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4" dir={isRtl ? 'rtl' : 'ltr'}>
          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0B1F3A] dark:text-slate-300 mb-1.5">
              نام و نام خانوادگی
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="مثلاً: علی احمدی"
              className="w-full px-4 py-3 rounded-xl bg-[#F8F9FF] dark:bg-[#0B1F3A] border border-slate-200 dark:border-white/10 text-sm text-[#0B1F3A] dark:text-white focus:outline-none focus:border-[#00F5D4] transition"
            />
          </div>

          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0B1F3A] dark:text-slate-300 mb-1.5">
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
            <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0B1F3A] dark:text-slate-300 mb-1.5">
              رمز عبور
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="حداقل ۸ کاراکتر"
              className="w-full px-4 py-3 rounded-xl bg-[#F8F9FF] dark:bg-[#0B1F3A] border border-slate-200 dark:border-white/10 text-sm text-[#0B1F3A] dark:text-white focus:outline-none focus:border-[#00F5D4] transition"
            />
          </div>

          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0B1F3A] dark:text-slate-300 mb-1.5">
              تکرار رمز عبور
            </label>
            <input
              type="password"
              required
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              placeholder="تکرار رمز عبور"
              className="w-full px-4 py-3 rounded-xl bg-[#F8F9FF] dark:bg-[#0B1F3A] border border-slate-200 dark:border-white/10 text-sm text-[#0B1F3A] dark:text-white focus:outline-none focus:border-[#00F5D4] transition"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3.5 bg-[#0B1F3A] dark:bg-[#00F5D4] hover:bg-[#172B52] dark:hover:bg-[#00E5C5] text-white dark:text-[#0B1F3A] font-extrabold text-sm rounded-xl shadow-lg transition-all transform active:scale-98 cursor-pointer disabled:opacity-50 mt-2"
          >
            {submitting ? 'در حال عضویت...' : 'عضویت و ایجاد حساب'}
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-slate-100 dark:border-white/5 text-center text-xs text-slate-500 dark:text-slate-400">
          قبلاً ثبت‌نام کرده‌اید؟{' '}
          <Link to="/login" className="text-[#0B1F3A] dark:text-[#00F5D4] font-bold hover:underline">
            وارد شوید
          </Link>
        </div>
      </div>
    </div>
  );
};
