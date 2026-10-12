import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { motion, AnimatePresence } from 'motion/react';
import { ScrollReveal } from '../components/ScrollReveal';
import { Footer } from '../components/Footer';

// Helper for localizing digits based on language
const formatLocalizedDigits = (text: string, lang: string) => {
  if (lang === 'en') return text;
  const digits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return text.replace(/\d/g, (x) => digits[parseInt(x)]);
};

const localizedContent = {
  en: {
    metaTitle: "Contact Us | Hamrah Tech",
    eyebrow: "Contact Us",
    titleH1: "Want to work with us? Let's connect",
    statusLive: "Live Online Strategy Team",
    responseBadge: "Response time: 1 hour",
    formTitle: "Tell details about your project",
    fieldName: "Full name",
    fieldEmail: "Your email",
    fieldMessage: "Your message",
    subscribeNews: "Subscribe to Newsletter",
    submitNow: "Submit now",
    successMsg: "✓ Thank you! Our strategy team will contact you within 1 hour.",
    
    col1Title: "Office Address",
    col1Val: "12 Valiasr Street, Tehran, Iran",
    col2Title: "24/7 Support",
    col2Phone: "Call: +98 21 8888 8888",
    col2Mail: "Mail: info@hamrahtech.com",
    col3Title: "Business Hours",
    col3Val: "Saturday - Wednesday, 9 AM - 5 PM",

    faqEyebrow: "General Ask",
    faqTitle: "Frequently Asked Questions",

    faqItems: [
      {
        id: "01",
        q: "How do we get started with Hamrah Tech?",
        a: "Getting started is simple. Book a free consultation using our form or online scheduler. We'll set up a 15-minute alignment call to understand your digital goals, timeline, and current pain points."
      },
      {
        id: "02",
        q: "Do you require an upfront deposit or milestone payments?",
        a: "We structure our projects around transparent milestone payments (e.g., 30% kickoff, 40% design approval, 30% final launch). For long-term retainers like SEO or social media, we bill monthly."
      },
      {
        id: "03",
        q: "What is your typical project delivery process?",
        a: "Our process has five key phases: (1) Discovery & Technical Audit, (2) Strategy & UX Design, (3) Custom Engineering & SEO Setup, (4) Final Approval & Review, and (5) Launch & Scale. You will sign off on each milestone."
      },
      {
        id: "04",
        q: "Can we request changes during design and development?",
        a: "Absolutely. We provide up to 3 major revision cycles during the initial Figma UX/UI design phase. After development begins, minor changes are free, while major feature additions are structured as quick add-ons."
      },
      {
        id: "05",
        q: "How do you handle post-launch support and site updates?",
        a: "We provide 30 days of complimentary high-priority support post-launch. After that, we offer customized monthly maintenance retainers covering cloud security patches, speed optimization, and layout updates."
      },
      {
        id: "06",
        q: "Will we have a dedicated project manager?",
        a: "Yes, every client is assigned a dedicated Account Strategist who coordinates with our design and engineering teams. You'll receive a private Slack or WhatsApp channel for real-time updates and weekly progress logs."
      },
      {
        id: "07",
        q: "Do you sign Non-Disclosure Agreements (NDAs)?",
        a: "Yes, we respect your intellectual property and data confidentiality. We sign mutual NDAs prior to discussing sensitive business processes, custom system architecture, or proprietary product concepts."
      },
      {
        id: "08",
        q: "Do you work with international clients outside of Iran?",
        a: "Yes. Hamrah Tech works with startups and SMEs across the Middle East, South Asia, and North America. Our workflow is fully remote and optimized for asynchronous communication across timezones."
      }
    ]
  },
  prs: {
    metaTitle: "تماس با ما | همراه تک",
    eyebrow: "تماس با ما",
    titleH1: "می‌خواهید با ما کار کنید؟ بیایید متصل شویم",
    statusLive: "پشتیبانی آنلاین زنده تیم استراتژی",
    responseBadge: "زمان پاسخگویی: ۱ ساعت",
    formTitle: "جزئیات پروژه خود را با ما در میان بگذارید",
    fieldName: "نام و نام خانوادگی",
    fieldEmail: "ایمیل شما",
    fieldMessage: "پیام شما",
    subscribeNews: "عضویت در خبرنامه هفتگی آژانس",
    submitNow: "ارسال پیام",
    successMsg: "✓ تشکر! تیم استراتژی ما ظرف ۱ ساعت با شما تماس خواهد گرفت.",
    
    col1Title: "آدرس دفتر مرکزی",
    col1Val: "تهران، خیابان ولیعصر، پلاک ۱۲",
    col2Title: "پشتیبانی ۲۴ ساعته",
    col2Phone: "تلفن: +۹۸ ۲۱ ۸۸۸۸ ۸۸۸۸",
    col2Mail: "ایمیل: info@hamrahtech.com",
    col3Title: "ساعات کاری رسمی",
    col3Val: "شنبه تا چهارشنبه، ۹ صبح تا ۵ عصر",

    faqEyebrow: "پرسش‌های عمومی",
    faqTitle: "پاسخ به متداول‌ترین سوالات شما",

    faqItems: [
      {
        id: "۰۱",
        q: "چگونه همکاری با همراه تک را شروع کنیم؟",
        a: "شروع کار بسیار ساده است. فرم تماس را پر کنید یا از دکمه «مشاوره رایگان» استفاده کنید. ما یک جلسه تراز ۱۵ دقیقه‌ای تنظیم می‌کنیم تا اهداف دیجیتالی، زمان‌بندی و چالش‌های فعلی کسب‌وکار شما را بررسی کنیم."
      },
      {
        id: "۰۲",
        q: "آیا پرداخت‌ها به صورت پیش‌پرداخت است یا مرحله‌ای؟",
        a: "ما پروژه‌ها را بر اساس مراحل شفاف طراحی و پیاده‌سازی تقسیم می‌کنیم (مثلاً ۳۰٪ شروع کار، ۴۰٪ پس از تایید نهایی طرح و ۳۰٪ زمان تحویل و رونمایی). خدمات مستمر مانند سئو به صورت ماهیانه فاکتور می‌شوند."
      },
      {
        id: "۰۳",
        q: "مراحل کلی تحویل و توسعه یک پروژه چیست؟",
        a: "روند کاری ما شامل ۵ فاز اصلی است: (۱) ممیزی فنی و استراتژیک، (۲) طراحی استایل و نقشه کاربری (UX/UI)، (۳) توسعه فنی اختصاصی و سئو، (۴) بازبینی نهایی و تایید مشتری، و (۵) رونمایی و بهینه‌سازی فروش."
      },
      {
        id: "۰۴",
        q: "آیا می‌توانیم در طول فاز طراحی و برنامه‌نویسی درخواست تغییرات بدهیم؟",
        a: "بله، قطعاً. ما تا ۳ چرخه بازبینی اساسی در مرحله طراحی رابط کاربری Figma ارائه می‌دهیم. پس از شروع فاز برنامه‌نویسی، تغییرات کوچک رایگان انجام می‌شوند و ویژگی‌های جدید طبق الحاقیه سریع ثبت می‌شوند."
      },
      {
        id: "۰۵",
        q: "پشتیبانی پس از تحویل پروژه و به‌روزرسانی‌ها به چه صورت است؟",
        a: "ما ۳۰ روز پشتیبانی رایگان با اولویت بالا پس از رونمایی ارائه می‌دهیم. پس از آن، پکیج‌های نگهداری ماهیانه شامل پچ‌های امنیتی، مانیتورینگ سرعت و تغییرات جزئی ظاهر سایت در دسترس خواهد بود."
      },
      {
        id: "۰۶",
        q: "آیا ما یک مدیر پروژه اختصاصی خواهیم داشت؟",
        a: "بله، برای هر مشتری یک استراتژیست حساب کاربری اختصاص داده می‌شود تا هماهنگی میان تیم‌های دیزاین و مهندسی را انجام دهد. ارتباط شما از طریق کانال اختصاصی در اسلک یا واتس‌اپ انجام خواهد شد."
      },
      {
        id: "۰۷",
        q: "آیا قراردادهای حفظ محرمانگی (NDA) امضا می‌کنید؟",
        a: "بله، ما به مالکیت معنوی و محرمانگی داده‌های تجاری شما احترام می‌گذاریم. قبل از ورود به بحث‌های جدی کسب‌وکار، معماری‌ها و فرآیندهای حساس، قرارداد دوجانبه حفظ محرمانگی امضا می‌شود."
      },
      {
        id: "۰۸",
        q: "آیا با مشتریان بین‌المللی خارج از کشور نیز کار می‌کنید؟",
        a: "بله، همراه تک تجربه موفقی در همکاری با استارتاپ‌ها و شرکت‌های کوچک و متوسط در سراسر خاورمیانه، جنوب آسیا و آمریکای شمالی دارد. فرآیندهای کاری ما برای هماهنگی با ریجن‌های زمانی مختلف کاملاً بهینه شده است."
      }
    ]
  },
  pus: {
    metaTitle: "اړیکه ونیسئ | همراه تک",
    eyebrow: "اړیکه ونیسئ",
    titleH1: "غواړئ له موږ سره کار وکړئ؟ راځئ یوځای شو",
    statusLive: "د ستراتیژۍ ټیم آنلاین ژوندی ملاتړ",
    responseBadge: "د ځواب وخت: ۱ ساعت",
    formTitle: "د خپلې پروژې په اړه معلومات له موږ سره شریک کړئ",
    fieldName: "ستاسو بشپړ نوم",
    fieldEmail: "ستاسو بریښنالیک",
    fieldMessage: "ستاسو پیغام",
    subscribeNews: "زموږ د خبرپاڼې میاشتنی ګډون وکړئ",
    submitNow: "پیغام استول",
    successMsg: "✓ مننه! زموږ د ستراتیژۍ ټیم به په ۱ ساعت کې له تاسو سره اړیکه ونیسي.",
    
    col1Title: "د دفتر پته",
    col1Val: "تهران، ولیعصر واټ، ۱۲ پلاک",
    col2Title: "۲۴/۷ ملاتړ",
    col2Phone: "تلیفون: +۹۸ ۲۱ ۸۸۸۸ ۸۸۸۸",
    col2Mail: "ایمیل: info@hamrahtech.com",
    col3Title: "د کار ساعتونه",
    col3Val: "شنبه تر چهارشنبه، ۹ د سهار تر ۵ د ماښام",

    faqEyebrow: "عمومي پوښتنې",
    faqTitle: "ستاسو د ډېرو پوښتنو ځوابونه دلته موندلی شئ",

    faqItems: [
      {
        id: "۰۱",
        q: "څنګه له همراه تک سره کار پیل کړو؟",
        a: "پیل کول ډیر اسان دي. د اړیکې فارم ډک کړئ یا د «مشاوره» تڼۍ کلیک کړئ. موږ به یو لنډ ۱۵ دقیقې ملاقات ترتیب کړو ترڅو ستاسو د غوښتنو، بودجې او کار په اړه وغږیږو."
      },
      {
        id: "۰۲",
        q: "ایا تادیات مخکې له مخکې دي که په مرحلو ویشل کیږي؟",
        a: "موږ خپلې پروژې په روښانه مرحلو ویشو (مثلا ۳۰٪ د کار پیل، ۴۰٪ د ډیزاین وروسته او ۳۰٪ د وروستي تایید په وخت کې). دوامدار خدمات لکه سئو په میاشتنۍ توګه حساب کیږي."
      },
      {
        id: "۰۳",
        q: "ستاسو د کار د سپارلو عمومي روند څه ډول دی؟",
        a: "زموږ کار ۵ عمده مرحلې لري: (۱) تخنیکي پلټنه، (۲) د نقشو او بڼې ډیزاین، (۳) پروګرامینګ او سئو، (۴) نهایی تایید او (۵) د ویب پاڼې نشرول."
      },
      {
        id: "۰۴",
        q: "ایا د پروژې کار په جریان کې د بدلون غوښتنه کولی شو؟",
        a: "هو، بالکل. موږ په پیل کې د ډیزاین (Figma UX/UI) مرحله کې تر ۳ ځلو پورې لوی اصلاحات بې له اضافي فیس څخه کوو. د کوډنګ مرحلې وروسته کوچني تغیرات هم وړیا پاتې کیږي."
      },
      {
        id: "۰۵",
        q: "د ویب پاڼې له نشرولو وروسته د ملاتړ سیسټم څنګه دی؟",
        a: "موږ د کار له پای ته رسیدو وروسته د ۳۰ ورځو لپاره وړیا او چټک ملاتړ چمتو کوو. له هغې وروسته د میاشتني ملاتړ میاشتني پکیجونه د امنیتي کوډونو او نورو چارو لپاره چمتو دي."
      },
      {
        id: "۰۶",
        q: "ایا زموږ لپاره د پروژې ځانګړی مدیر شتون لري؟",
        a: "هو، هر پېرودونکي ته د ډیزاینرانو او انجینرانو ترمنځ همغږي کولو لپاره یو مدیر ټاکل کیږي. تاسو کولی شئ په اسلک یا واټساپ کې د خپل کار لاګونه په منظم ډول وګورئ."
      },
      {
        id: "۰۷",
        q: "ایا د محرمیت ساتلو تړون (NDA) لاسلیک کوئ؟",
        a: "هو، موږ ستاسو د معلوماتو او د سوداګرۍ محرمیت ته پوره درناوی کوو. د هر ډول حساس تخنیکي بحث څخه دمخه موږ دوه اړخیز تړون لاسلیک کوو."
      },
      {
        id: "۰۸",
        q: "ایا له ایران څخه بهر د نورو هیوادونو مشتریانو سره کار کوئ؟",
        a: "هو، همراه تک په منځني ختیځ، سویلي اسیا او شمالي امریکا کې د ګڼو شرکتونو سره د کار تجربه لري. زموږ کار د مختلفو وختونو د همغږۍ لپاره پوره چمتو دی."
      }
    ]
  }
};

export const ContactView: React.FC = () => {
  const { language, isRtl } = useApp();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const panelRef = useRef<HTMLDivElement>(null);

  const [leadForm, setLeadForm] = useState({ fullName: '', email: '', message: '', newsletter: true });
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  useEffect(() => {
    const currentMeta = localizedContent[language] || localizedContent.en;
    document.title = currentMeta.metaTitle;
  }, [language]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!panelRef.current) return;
    const rect = panelRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

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
      
      {/* 1. HEADER SECTION */}
      <section className="relative w-full bg-[#EFF4FF] dark:bg-[#0D2645] pt-16 pb-24 px-4 sm:px-6 md:px-8 lg:px-12 z-20 overflow-hidden">
        
        <div className="absolute top-0 left-1/3 w-[600px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(46,230,214,0.1)_0%,transparent_75%)] filter blur-3xl pointer-events-none" />

        <div className="max-w-[1200px] mx-auto">
          
          <ScrollReveal variant="fade-up" className="mb-14">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              
              <div className="flex flex-col gap-4 max-w-3xl">
                <div className="inline-flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0B1F3A]" />
                  <span className="text-xs font-black uppercase tracking-widest text-[#0B1F3A]">{currentT.eyebrow}</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-black text-[#0B1F3A] dark:text-white tracking-tight leading-[1.1]">
                  {currentT.titleH1}
                </h1>
              </div>

              <div className="self-start lg:self-center shrink-0">
                <div className="inline-flex items-center gap-3 px-4.5 py-2.5 rounded-full bg-white dark:bg-[#0B1F3A] border border-[#DCE9FF] dark:border-white/10 shadow-lg">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F5D4] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00F5D4]" />
                  </span>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-700 dark:text-white/80">{currentT.statusLive}</span>
                </div>
              </div>

            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.15}>
            <div
              ref={panelRef}
              onMouseMove={handleMouseMove}
              className="relative w-full max-w-[1100px] mx-auto bg-white dark:bg-[#0B1F3A] border border-[#DCE9FF] dark:border-white/10 rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl overflow-hidden group transition-all duration-300"
            >
              
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(46,230,214,0.08), transparent 75%)`
                }}
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12 relative z-10">
                
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#EFF4FF] dark:bg-white/5 border border-[#DCE9FF] dark:border-white/10 flex items-center justify-center text-[#00F5D4] shrink-0 shadow-sm">
                    <span className="material-symbols-outlined text-xl">location_on</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500">{currentT.col1Title}</span>
                    <span className="text-lg sm:text-xl font-black text-[#0B1F3A] dark:text-white leading-tight tracking-tight mt-1">{currentT.col1Val}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#EFF4FF] dark:bg-white/5 border border-[#DCE9FF] dark:border-white/10 flex items-center justify-center text-[#00F5D4] shrink-0 shadow-sm">
                    <span className="material-symbols-outlined text-xl">headset</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500">{currentT.col2Title}</span>
                    <div className="flex flex-col text-lg sm:text-xl font-black text-[#0B1F3A] dark:text-white leading-tight tracking-tight mt-1 gap-1">
                      <span>{currentT.col2Phone}</span>
                      <span className="text-slate-500 dark:text-slate-400 hover:text-[#00F5D4] text-sm font-semibold transition-colors mt-0.5">{currentT.col2Mail}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#EFF4FF] dark:bg-white/5 border border-[#DCE9FF] dark:border-white/10 flex items-center justify-center text-[#00F5D4] shrink-0 shadow-sm">
                    <span className="material-symbols-outlined text-xl">watch_later</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500">{currentT.col3Title}</span>
                    <span className="text-lg sm:text-xl font-black text-[#0B1F3A] dark:text-white leading-tight tracking-tight mt-1">{currentT.col3Val}</span>
                  </div>
                </div>

              </div>

            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* 2. FAQ + CONTACT FORM SECTION */}
      <section className="relative w-full pb-24 px-4 sm:px-6 md:px-8 lg:px-12 max-w-[1400px] mx-auto z-10 pt-16 mt-[-32px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          <div className="lg:col-span-5 w-full lg:sticky lg:top-32 self-start">
            <ScrollReveal variant="fade-up">
              <div className="w-full max-w-[620px] mx-auto bg-white dark:bg-[#0B1F3A] border border-[#DCE9FF] dark:border-white/10 rounded-3xl p-6 sm:p-9 md:p-10 shadow-2xl relative overflow-hidden group">
                
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0B1F3A]/10 border border-[#0B1F3A]/20 text-[#0B1F3A] text-xs font-bold mb-6">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0B1F3A] animate-pulse" />
                  <span>{currentT.responseBadge}</span>
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
                        id="contact-form-newsletter"
                        checked={leadForm.newsletter}
                        onChange={(e) => setLeadForm({ ...leadForm, newsletter: e.target.checked })}
                        className="w-4 h-4 rounded-md border-slate-300 dark:border-white/20 bg-transparent text-[#0B1F3A] focus:ring-0 cursor-pointer"
                      />
                      <label htmlFor="contact-form-newsletter" className="text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer select-none">
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

          <div className="lg:col-span-7 w-full">
            <ScrollReveal variant="fade-up">
              
              <div className="mb-10 sm:mb-12">
                <div className="inline-flex items-center gap-2 mb-3 px-3.5 py-1 bg-[#0B1F3A]/10 border border-[#0B1F3A]/20 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0B1F3A]" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#0B1F3A]">{currentT.faqEyebrow}</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1F3A] dark:text-white tracking-tight leading-none">
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

      {/* 3. FOOTER */}
      <Footer />

    </div>
  );
};
