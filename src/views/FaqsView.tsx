import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { motion, AnimatePresence } from 'motion/react';
import { ScrollReveal } from '../components/ScrollReveal';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo/hamrah_tech_bw.jpg';
import { Footer } from '../components/Footer';

// Helper for localizing digits based on language
const formatLocalizedDigits = (text: string, lang: string) => {
  if (lang === 'en') return text;
  const digits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return text.replace(/\d/g, (x) => digits[parseInt(x)]);
};

const localizedContent = {
  en: {
    metaTitle: "FAQs & Contact | Hamrah Tech",
    badgeResponse: "Response time: 1 hour",
    formTitle: "Tell details about your project",
    fieldName: "Full name",
    fieldEmail: "Your email",
    fieldMessage: "Your message",
    subscribeNews: "Subscribe to Newsletter",
    submitNow: "Submit now",
    faqEyebrow: "FAQs",
    faqTitle: "Learn more from FAQs",
    successMsg: "✓ Thank you! Our strategy team will contact you within 1 hour.",
    ctaTitle: "Ready to scale your business? Let's talk",
    ctaBtn: "Let's work together",
    faqItems: [
      {
        id: "01",
        q: "What digital services do you provide?",
        a: "Hamrah Tech is a full-service agency providing custom website design & software engineering, search engine optimization (SEO), Google & Meta paid advertising, brand identity design, and end-to-end social media management."
      },
      {
        id: "02",
        q: "How long does a typical website design project take?",
        a: "A typical high-performance website design and development project takes between 3 to 6 weeks, depending on complexity, custom integrations, and branding requirements."
      },
      {
        id: "03",
        q: "Do you offer branding and logo design services?",
        a: "Yes! We design cohesive brand identities, visual style guides, high-impact logos, customized color palettes, typography, and complete social media design packages."
      },
      {
        id: "04",
        q: "Can you help improve our Google search rankings?",
        a: "Absolutely. Our expert SEO team conducts deep technical site audits, comprehensive keyword research, high-authority backlink outreach, and content optimization to place your brand on the first page of Google."
      },
      {
        id: "05",
        q: "How do you handle social media management?",
        a: "We manage your accounts completely, handling content strategy, professional graphic design and video editing, engaging copywriting, community moderation, and detailed monthly ROI analysis."
      },
      {
        id: "06",
        q: "What is your pricing structure for digital solutions?",
        a: "We offer flexible, results-driven pricing options including project-based estimates, monthly retainer agreements, and scalable growth-centric packages tailored to your budget and growth targets."
      },
      {
        id: "07",
        q: "Do you provide ongoing support and maintenance?",
        a: "Yes, we provide 24/7 technical support, security patching, real-time speed monitoring, and regular content updates to keep your digital platform modern and secure."
      }
    ]
  },
  prs: {
    metaTitle: "سوالات متداول و تماس | همراه تک",
    badgeResponse: "زمان پاسخگویی: ۱ ساعت",
    formTitle: "جزئیات پروژه خود را ارسال کنید",
    fieldName: "نام و نام خانوادگی",
    fieldEmail: "ایمیل شما",
    fieldMessage: "پیام شما",
    subscribeNews: "عضویت در خبرنامه",
    submitNow: "ارسال پیام",
    faqEyebrow: "سوالات متداول",
    faqTitle: "اطلاعات بیشتر از سوالات متداول",
    successMsg: "✓ تشکر! تیم استراتژی ما ظرف ۱ ساعت با شما تماس خواهد گرفت.",
    ctaTitle: "آماده‌اید کسب‌وکار خود را رونق دهید؟ بیایید گفتگو کنیم",
    ctaBtn: "بیایید با هم کار کنیم",
    faqItems: [
      {
        id: "۰۱",
        q: "همراه تک چه خدمات دیجیتالی ارائه می‌دهد؟",
        a: "همراه تک یک آژانس خدمات کامل است که مهندسی نرم‌افزار و طراحی وب‌سایت، سئو و بهینه‌سازی موتورهای جستجو، تبلیغات گوگل و متا، هویت بصری و برندسازی و مدیریت شبکه‌های اجتماعی را زیر یک سقف ارائه می‌دهد."
      },
      {
        id: "۰۲",
        q: "یک پروژه معمولی طراحی وب‌سایت چقدر زمان می‌برد؟",
        a: "طراحی و توسعه یک وب‌سایت مدرن معمولاً بین ۳ تا ۶ هفته بر اساس پیچیدگی، قابلیت‌های اختصاصی و جزئیات گرافیکی زمان نیاز دارد."
      },
      {
        id: "۰۳",
        q: "آیا خدمات طراحی لوگو و برندسازی ارائه می‌دهید؟",
        a: "بله! ما هویت بصری جامع، لوگوهای ماندگار، راهنمای استایل برند، پالت رنگی هماهنگ، تایپوگرافی و بسته‌های طراحی شبکه‌های اجتماعی را انجام می‌دهیم."
      },
      {
        id: "۰۴",
        q: "آیا می‌توانید به بهبود رتبه ما در گوگل کمک کنید؟",
        a: "کاملاً. تیم متخصص سئوی ما آنالیز فنی کدها، تحقیق جامع کلمات کلیدی، تولید محتوای ارزشمند و لینک‌سازی معتبر را برای بالا بردن برند شما در صفحه اول گوگل انجام می‌دهد."
      },
      {
        id: "۰۵",
        q: "مدیریت شبکه‌های اجتماعی را چگونه انجام می‌دهید؟",
        a: "ما اکانت‌های شما را به صورت کامل مدیریت می‌کنیم، از تدوین استراتژی محتوا، طراحی پست‌های حرفه‌ای و ادیت ویدیو تا کپشن‌نویسی جذاب، پاسخگویی به مخاطبان و آنالیزهای دوره‌ای بازدهی."
      },
      {
        id: "۰۶",
        q: "ساختار قیمت‌گذاری خدمات شما به چه صورت است؟",
        a: "ما تعرفه‌های منعطف و نتیجه‌محور ارائه می‌دهیم؛ از پروژه‌های مشخص با قیمت ثابت، تا قراردادهای ماهیانه و پکیج‌های مقیاس‌پذیر هماهنگ با اهداف و بودجه شما."
      },
      {
        id: "۰۷",
        q: "آیا پشتیبانی و نگهداری مداوم ارائه می‌دهید؟",
        a: "بله، ما پشتیبانی فنی ۲۴ ساعته، به‌روزرسانی‌های امنیتی، نظارت مداوم بر سرعت سایت و آپدیت‌های محتوایی را ارائه می‌دهیم تا پلتفرم شما همواره پرسرعت و ایمن بماند."
      }
    ]
  },
  pus: {
    metaTitle: "پرکاروپوښتنې او اړیکه | همراه تک",
    badgeResponse: "د ځواب وخت: ۱ ساعت",
    formTitle: "د خپلې پروژې په اړه معلومات واستوئ",
    fieldName: "ستاسو بشپړ نوم",
    fieldEmail: "ستاسو بریښنالیک",
    fieldMessage: "ستاسو پیغام",
    subscribeNews: "خبرپاڼه کې ګډون",
    submitNow: "پیغام استول",
    faqEyebrow: "پرله پسې پوښتنې",
    faqTitle: "د پرله پسې پوښتنو څخه معلومات ترلاسه کړئ",
    successMsg: "✓ مننه! زموږ د ستراتیژۍ ټیم به په ۱ ساعت کې له تاسو سره اړیکه ونیسي.",
    ctaTitle: "د خپل تجارت د کچې لوړولو لپاره چمتو یاست؟ راځئ خبرې وکړو",
    ctaBtn: "راځئ یوځای کار وکړو",
    faqItems: [
      {
        id: "۰۱",
        q: "همراه تک کوم ډیجیټل خدمات وړاندې کوي؟",
        a: "همراه تک د ویب پاڼې ډیزاین او سافټویر انجینري، د ګوګل او میټا اعلانات، د لټون سئو بهینه کول، د برانډ هویت ډیزاین، او د ټولنیزو رسنیو بشپړ مدیریت خدمات چمتو کوي."
      },
      {
        id: "۰۲",
        q: "د ویب پاڼې ډیزاین پروژه څومره وخت نیسي؟",
        a: "یو عادي او د لوړ فعالیت ویب پاڼې ډیزاین او پراختیا پروژه د پیچلتیا او ګرافیکي بډاینې پراساس له ۳ څخه تر ۶ اونیو پورې وخت نیسي."
      },
      {
        id: "۰۳",
        q: "ایا د نښان یا لوګو ډیزاین او برانډینګ خدمات وړاندې کوئ؟",
        a: "هو! موږ بشپړ برانډ پیژندنه، لوګو، رنګونه، ډیزاین او د ټولنیزو رسنیو بشپړ ډیزاین بسته چمتو کوو."
      },
      {
        id: "۰۴",
        q: "ایا زموږ د ګوګل لټون درجې په لوړولو کې مرسته کولی شئ؟",
        a: "بالکل. زموږ د سئو کارپوهان د ساحې تخنیکي ارزونه، د کلیدي کلمو پلټنه، او د ارزښتناکه مینځپانګې تولید لړۍ د ګوګل لومړۍ پاڼې ته د رسېدو لپاره سرته رسوي."
      },
      {
        id: "۰۵",
        q: "د ټولنیزو رسنیو مدیریت څنګه ترسره کوئ؟",
        a: "موږ ستاسو ټول حسابونه مدیریت کوو؛ د منځپانګې تګلاره، د نوي پوسټونو ډیزاین، زړه راښکونکی متن تولید او میاشتنۍ راپور ورکول زموږ دنده ده."
      },
      {
        id: "۰۶",
        q: "ستاسو د ډیجیټل حلونو لپاره د نرخونو کچه څنګه ده؟",
        a: "موږ انعطاف منونکي نرخونه وړاندې کوو؛ د مشخصې پروژې لپاره له ټاکلي قېمت څخه نیولې تر میاشتنۍ همکارۍ پورې د ستاسو بودجې او هدف سره سم."
      },
      {
        id: "۰۷",
        q: "ایا تاسو دوامداره ملاتړ او ساتنه چمتو کوئ؟",
        a: "هو، موږ ۲۴ ساعته تخنیکي ملاتړ، امنیتي تازه معلومات او منظم مینځپانګې ملاتړ چمتو کوو ترڅو ستاسو ویب پاڼه تل ګړندۍ او خوندي پاتې شي."
      }
    ]
  }
};

export const FaqsView: React.FC = () => {
  const { language, isRtl, openConsultationModal } = useApp();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const [leadForm, setLeadForm] = useState({ fullName: '', email: '', message: '', newsletter: true });
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  useEffect(() => {
    const currentMeta = localizedContent[language] || localizedContent.en;
    document.title = currentMeta.metaTitle;
  }, [language]);

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLeadSubmitted(true);
    setTimeout(() => {
      setLeadSubmitted(false);
      setLeadForm({ fullName: '', email: '', message: '', newsletter: true });
    }, 4500);
  };

  const currentT = localizedContent[language] || localizedContent.en;

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#F8F9FF] dark:bg-[#0B1F3A] text-[#44474E] dark:text-[#9CA3AF] selection:bg-[#00F5D4] selection:text-[#0B1F3A] transition-colors duration-300 pt-20">
      
      {/* 1. HERO SPACE */}
      <div className="relative w-full h-[180px] sm:h-[220px] md:h-[260px] overflow-hidden bg-gradient-to-b from-[#EFF4FF] dark:from-[#0D2645] to-[#F8F9FF] dark:to-[#0B1F3A] flex items-center justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-gradient-to-tr from-[#0B1F3A]/10 to-[#00F5D4]/10 rounded-full blur-[140px] animate-pulse" />
      </div>

      {/* 2. MAIN TWO-COLUMN LAYOUT SECTION */}
      <section className="w-full pb-24 px-4 sm:px-6 md:px-8 lg:px-12 max-w-[1400px] mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: STICKY CONTACT FORM CARD */}
          <div className="lg:col-span-5 w-full lg:sticky lg:top-32 self-start">
            <ScrollReveal variant="fade-up">
              <div className="w-full max-w-[620px] mx-auto bg-white dark:bg-[#0B1F3A] border border-[#DCE9FF] dark:border-white/10 rounded-3xl p-6 sm:p-9 md:p-10 shadow-2xl relative overflow-hidden group">
                
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0B1F3A]/10 border border-[#0B1F3A]/20 text-[#0B1F3A] text-xs font-bold mb-6">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0B1F3A] animate-pulse" />
                  <span>{currentT.badgeResponse}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[#0B1F3A] dark:text-white tracking-tight leading-tight mb-8">
                  {currentT.formTitle}
                </h3>

                {leadSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-6 rounded-2xl bg-[#0B1F3A]/10 border border-[#0B1F3A]/30 text-center text-[#0B1F3A] text-sm font-extrabold"
                  >
                    {currentT.successMsg}
                  </motion.div>
                ) : (
                  <form onSubmit={handleLeadSubmit} className="space-y-7">
                    
                    <div className="relative group/input">
                      <input
                        type="text"
                        required
                        value={leadForm.fullName}
                        onChange={(e) => setLeadForm({ ...leadForm, fullName: e.target.value })}
                        placeholder=" "
                        className="w-full bg-transparent border-b border-slate-300 dark:border-white/10 py-3 text-sm text-[#0B1F3A] dark:text-white focus:outline-none focus:border-[#0B1F3A] transition-colors duration-300 peer"
                      />
                      <label className="absolute top-3 left-0 text-xs text-slate-500 dark:text-white/40 tracking-wider uppercase pointer-events-none transition-all duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:top-[-12px] peer-focus:text-xs peer-focus:text-[#0B1F3A] peer-[:not(:placeholder-shown)]:top-[-12px] peer-[:not(:placeholder-shown)]:text-xs">
                        {currentT.fieldName}
                      </label>
                    </div>

                    <div className="relative group/input">
                      <input
                        type="email"
                        required
                        value={leadForm.email}
                        onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                        placeholder=" "
                        className="w-full bg-transparent border-b border-slate-300 dark:border-white/10 py-3 text-sm text-[#0B1F3A] dark:text-white focus:outline-none focus:border-[#0B1F3A] transition-colors duration-300 peer"
                      />
                      <label className="absolute top-3 left-0 text-xs text-slate-500 dark:text-white/40 tracking-wider uppercase pointer-events-none transition-all duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:top-[-12px] peer-focus:text-xs peer-focus:text-[#0B1F3A] peer-[:not(:placeholder-shown)]:top-[-12px] peer-[:not(:placeholder-shown)]:text-xs">
                        {currentT.fieldEmail}
                      </label>
                    </div>

                    <div className="relative group/input">
                      <textarea
                        rows={4}
                        required
                        value={leadForm.message}
                        onChange={(e) => setLeadForm({ ...leadForm, message: e.target.value })}
                        placeholder=" "
                        className="w-full bg-transparent border-b border-slate-300 dark:border-white/10 py-3 text-sm text-[#0B1F3A] dark:text-white focus:outline-none focus:border-[#0B1F3A] transition-colors duration-300 resize-y min-h-[100px] peer"
                      />
                      <label className="absolute top-3 left-0 text-xs text-slate-500 dark:text-white/40 tracking-wider uppercase pointer-events-none transition-all duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:top-[-12px] peer-focus:text-xs peer-focus:text-[#0B1F3A] peer-[:not(:placeholder-shown)]:top-[-12px] peer-[:not(:placeholder-shown)]:text-xs">
                        {currentT.fieldMessage}
                      </label>
                    </div>

                    <div className="flex items-center gap-3 pt-2">
                      <input
                        type="checkbox"
                        id="form-newsletter"
                        checked={leadForm.newsletter}
                        onChange={(e) => setLeadForm({ ...leadForm, newsletter: e.target.checked })}
                        className="w-4 h-4 rounded-md border-slate-300 dark:border-white/20 bg-transparent text-[#0B1F3A] focus:ring-0 cursor-pointer"
                      />
                      <label htmlFor="form-newsletter" className="text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer select-none">
                        {currentT.subscribeNews}
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 px-6 bg-[#0B1F3A] dark:bg-[#00F5D4] hover:bg-[#172B52] dark:hover:bg-[#00F5D4] text-white dark:text-[#0B1F3A] active:scale-[0.98] rounded-full transition-all duration-300 font-extrabold text-sm flex items-center justify-between group cursor-pointer shadow-xl"
                    >
                      <span className="font-black uppercase tracking-wider">{currentT.submitNow}</span>
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:translate-x-1.5 dir-rtl:group-hover:-translate-x-1.5 shadow-md">
                        <span className="material-symbols-outlined text-white dark:text-[#0B1F3A] text-sm font-black">
                          {isRtl ? 'arrow_back' : 'arrow_forward'}
                        </span>
                      </div>
                    </button>

                  </form>
                )}

              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT COLUMN: FAQ ACCORDION LIST */}
          <div className="lg:col-span-7 w-full">
            <ScrollReveal variant="fade-up">
              
              <div className="mb-10 sm:mb-12">
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0B1F3A]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[#0B1F3A]">{currentT.faqEyebrow}</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0B1F3A] dark:text-white tracking-tight leading-none">
                  {currentT.faqTitle}
                </h2>
              </div>

              <div className="flex flex-col space-y-4">
                {currentT.faqItems.map((item, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={item.id}
                      className={`w-full text-left transition-all duration-300 pb-2 border-b ${
                        isOpen 
                          ? 'border-b-[#0B1F3A]' 
                          : 'border-b-slate-200 dark:border-white/10 hover:border-b-slate-300 dark:hover:border-white/20'
                      }`}
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full py-5 flex items-center justify-between gap-5 text-left dir-rtl:text-right cursor-pointer group"
                      >
                        <div className="flex items-center gap-4 sm:gap-6">
                          <span className={`font-mono text-xs font-extrabold tracking-wider transition-colors duration-300 ${
                            isOpen ? 'text-[#0B1F3A]' : 'text-slate-400 dark:text-white/30'
                          }`}>
                            {formatLocalizedDigits(item.id, language)}
                          </span>
                          
                          <span className={`text-base sm:text-lg font-black tracking-tight leading-snug transition-colors duration-300 ${
                            isOpen ? 'text-[#0B1F3A] dark:text-white' : 'text-slate-700 dark:text-white/80 group-hover:text-[#0B1F3A] dark:group-hover:text-white'
                          }`}>
                            {item.q}
                          </span>
                        </div>

                        <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                          isOpen 
                            ? 'bg-[#0B1F3A] border-[#0B1F3A] text-white rotate-90' 
                            : 'border-slate-300 dark:border-white/20 text-slate-500 dark:text-white/50 group-hover:border-slate-400 dark:group-hover:border-white/40'
                        }`}>
                          <span className="material-symbols-outlined text-sm font-bold">
                            {isRtl ? 'chevron_left' : 'chevron_right'}
                          </span>
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="pb-6 pl-8 sm:pl-12 pr-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-medium">
                              {item.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>

                    </div>
                  );
                })}
              </div>

            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* 3. CTA & FOOTER SECTION */}
      <Footer />

    </div>
  );
};
