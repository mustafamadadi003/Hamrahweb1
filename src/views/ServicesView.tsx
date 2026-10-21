import React, { useState, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ScrollReveal';
import { Footer } from '../components/Footer';

// Image Assets
import portfolioImg from '../assets/images/portfolio_mockup.jpg';
import insightsImg from '../assets/images/insights_mockup.jpg';
import teamMeetingImg from '../assets/images/team_meeting.jpg';
import sketchImg from '../assets/images/design_sketch.jpg';

// Helper for localizing digits
const formatLocalizedNumber = (num: number, lang: string) => {
  if (lang === 'en') return num.toString();
  const digits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return num.toString().replace(/\d/g, (x) => digits[parseInt(x)]);
};

// Custom 3D glowing blue line-art SVGs for Services
const BrandIcon3D: React.FC = () => (
  <svg className="w-14 h-14 text-[#00F5D4] drop-shadow-[0_0_15px_rgba(46,230,214,0.4)]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M24 4L6 13L24 22L42 13L24 4Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 13V35L24 44V22L6 13Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M42 13V35L24 44V22L42 13Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M24 14L15 18.5L24 23L33 18.5L24 14Z" fill="currentColor" fillOpacity="0.1" />
    <circle cx="24" cy="22" r="3" fill="#00F5D4" className="animate-pulse" />
  </svg>
);

const WebIcon3D: React.FC = () => (
  <svg className="w-14 h-14 text-[#00F5D4] drop-shadow-[0_0_15px_rgba(46,230,214,0.4)]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="4" y="6" width="40" height="32" rx="4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 14H44" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="8" cy="10" r="1.5" fill="currentColor" />
    <circle cx="13" cy="10" r="1.5" fill="currentColor" />
    <circle cx="18" cy="10" r="1.5" fill="currentColor" />
    <path d="M14 24L10 28L14 32" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M34 24L38 28L34 32" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M26 22L22 34" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SeoIcon3D: React.FC = () => (
  <svg className="w-14 h-14 text-[#00F5D4] drop-shadow-[0_0_15px_rgba(0,245,212,0.4)]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M8 40V24M20 40V14M32 40V18M44 40V8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 24L20 14L32 18L44 8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    <circle cx="44" cy="8" r="3" fill="currentColor" className="animate-ping" />
    <circle cx="44" cy="8" r="2" fill="currentColor" />
  </svg>
);

const AdsIcon3D: React.FC = () => (
  <svg className="w-14 h-14 text-[#00F5D4] drop-shadow-[0_0_15px_rgba(0,245,212,0.4)]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="24" cy="24" r="18" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="24" cy="24" r="12" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="24" cy="24" r="6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M24 2V10M24 38V46M2 24H10M38 24H46" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SocialIcon3D: React.FC = () => (
  <svg className="w-14 h-14 text-[#00F5D4] drop-shadow-[0_0_15px_rgba(0,245,212,0.4)]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="24" cy="24" r="7" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="10" cy="12" r="4" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="38" cy="12" r="4" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="10" cy="36" r="4" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="38" cy="36" r="4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 14L20 20M34 14L28 20M14 34L20 28M34 34L28 28" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ProductionIcon3D: React.FC = () => (
  <svg className="w-14 h-14 text-[#00F5D4] drop-shadow-[0_0_15px_rgba(0,245,212,0.4)]" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M8 10H40V34H8V10Z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 10V34M24 10V34M34 10V34" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3 3" />
    <path d="M8 18H40M8 26H40" strokeLinecap="round" strokeLinejoin="round" />
    <polygon points="20,18 20,26 28,22" fill="currentColor" stroke="currentColor" strokeWidth="1" />
  </svg>
);

const IconMap: { [key: string]: React.FC } = {
  brand: BrandIcon3D,
  web: WebIcon3D,
  seo: SeoIcon3D,
  ads: AdsIcon3D,
  social: SocialIcon3D,
  production: ProductionIcon3D,
};

const servicesContent = {
  en: {
    ourServices: "Our Services",
    introTitle: "Optimize and transform your business",
    consultationBtn: "Get a Free Consultation",
    readMore: "Book Consultation",
    viewAllBtn: "View All Articles",
    tagline: "Hamrah Tech Core",
    
    servicesList: [
      {
        id: "brand",
        number: "01",
        name: "Brand Identity & Graphics",
        boldPhrase: "Your brand is your handshake with the market.",
        desc: "We design cohesive visual ecosystems that tell your story instantly. From minimalist logos to rich brand identity systems, we create a presence that commands attention and inspires trust across all channels.",
        tags: ["Logo Design", "Typography & Colors", "Social Media Templates", "Brand Guidelines", "Collateral Graphics"]
      },
      {
        id: "web",
        number: "02",
        name: "Website Design & Development",
        boldPhrase: "A sub-second website is your ultimate salesperson.",
        desc: "We build lightning-fast, responsive web experiences tailored for maximum conversion. Utilizing modern architectures, clean code, and interactive visual design, we ensure your site is secure, stunning, and scalable.",
        tags: ["React / Next.js", "UI/UX Prototyping", "Sub-second Speeds", "SEO-ready Architecture", "Admin Dashboards"]
      },
      {
        id: "seo",
        number: "03",
        name: "Search Engine Optimization (SEO)",
        boldPhrase: "Be found exactly when your customers are looking.",
        desc: "Dominate search engine rankings with our data-driven SEO strategy. We optimize everything from deep technical core web vitals and structured schemas to high-intent localized search campaigns that drive organic leads.",
        tags: ["Technical SEO Audit", "Keyword Research", "On-Page Optimization", "JSON-LD & Schema", "Local Maps Ranking"]
      },
      {
        id: "ads",
        number: "04",
        name: "Google & Meta Advertising",
        boldPhrase: "Turn advertising budgets into predictable revenue pipelines.",
        desc: "We design, deploy, and manage high-ROI advertising campaigns on Google and Meta platforms. By utilizing laser-focused audience targeting, persistent copy testing, and conversion tracking, we maximize your sales pipeline.",
        tags: ["PPC Strategy", "Retargeting Funnels", "Meta Pixel & API", "Copywriting & Creatives", "ROI Reports"]
      },
      {
        id: "social",
        number: "05",
        name: "Social Media Management",
        boldPhrase: "Build an active community around your brand.",
        desc: "Engage your audience where they spend their time. We curate, schedule, and optimize strategic content schedules that foster community growth, boost brand loyalty, and turn followers into advocates.",
        tags: ["Content Curation", "Community Engagement", "Platform Optimization", "Growth Audits", "Social Analytics"]
      },
      {
        id: "production",
        number: "06",
        name: "Content & Video Production",
        boldPhrase: "High-fidelity visual media drives conversion.",
        desc: "Tell your brand's story through stunning video, crisp graphics, and engaging copy. We produce cinematic videos, high-impact marketing creatives, and educational assets that capture interest and explain complex value propositions.",
        tags: ["Cinematic Videography", "Explainer Animations", "Copywriting", "Media Post-Production", "Motion Graphics"]
      }
    ],

    stepsEyebrow: "Steps",
    stepsTitle: "3 easy steps to get started",
    stepsSubtitle: "Our three-step method blends strategy and creativity while keeping you in the loop.",
    steps: [
      {
        step: 1,
        stepNum: "01.",
        phase: "Discovery & Strategy",
        duration: "3-5 days",
        subtitle: "Audit & Strategic Blueprint",
        desc: "We start by deep-diving into your goals, audience, and market challenges to construct a high-ROI roadmap optimized for tangible growth."
      },
      {
        step: 2,
        stepNum: "02.",
        phase: "Design & Prototype",
        duration: "1 week",
        subtitle: "Design & Architecture",
        desc: "Our team crafts modern, user-friendly interface designs (UI/UX) and scalable technical blueprints that reflect your distinct brand identity."
      },
      {
        step: 3,
        stepNum: "03.",
        phase: "Launch & Support",
        duration: "4-7 days",
        subtitle: "Launch & Optimization",
        desc: "After deployment, we stay by your side with performance monitoring, immediate updates, and continuous localized conversion rate optimization."
      }
    ],

    portfolioEyebrow: "Portfolio",
    portfolioTitle: "Proof of our capabilities",
    portfolioDesc: "Explore real-world B2B case studies and marketing campaigns that have delivered scalable revenue, speed, and design leadership.",
    portfolioCaseBtn: "Case Study",
    portfolioCases: [
      {
        title: "FinVista Consulting",
        subtitle: "B2B SaaS Platform",
        img: portfolioImg,
        badge: "B2B SaaS",
        watermark: "FV FINANCIAL",
        tags: ["Fintech Design", "React Portal", "Secure Cloud API"]
      },
      {
        title: "Clock Fly Strategy",
        subtitle: "Marketing Campaign",
        img: teamMeetingImg,
        badge: "Lead Gen",
        watermark: "CLOCKFLY MEDIA",
        tags: ["Multi-Channel Ads", "Copywriting", "High-ROI Funnels"]
      },
      {
        title: "Performance Ads",
        subtitle: "Email Marketing & Social",
        img: insightsImg,
        badge: "Social & Email",
        watermark: "PERFORMANCE INC.",
        tags: ["Meta Pixel API", "Retention Automation", "A/B Testing"]
      },
      {
        title: "Apex Industrial",
        subtitle: "Enterprise Platform",
        img: sketchImg,
        badge: "Web App",
        watermark: "APEX MFG",
        tags: ["Next.js App", "Multilingual Structure", "Analytics Integration"]
      }
    ],

    insightsEyebrow: "Insights",
    insightsTitle: "Here's what we've been up to",
    insightsList: [
      {
        category: "Strategy",
        date: "March 15, 2026",
        title: "Hamrah Tech Wins \"Top Creative & Tech Agency\" Award",
        excerpt: "Recognized for exceptional engineering, multilingual capabilities, and high-performance digital results across regions.",
        img: teamMeetingImg
      },
      {
        category: "Engineering",
        date: "Feb 28, 2026",
        title: "Hamrah Tech Launches 10+ Enterprise E-Commerce Portals",
        excerpt: "Deploying secure, sub-second web platforms integrating multi-currency checkout, robust inventories, and local trust features.",
        img: sketchImg
      },
      {
        category: "Industry Future",
        date: "Jan 12, 2026",
        title: "The Future of Multilingual Digital Strategy in 2026",
        excerpt: "Why regionalized experiences, optimized page-speed, and ultra-localized target funnels are essential for market penetration.",
        img: insightsImg
      }
    ]
  },
  prs: {
    ourServices: "خدمات ما",
    introTitle: "بهینه‌سازی و متحول کردن کسب‌وکار شما",
    consultationBtn: "دریافت مشاوره رایگان",
    readMore: "رزرو مشاوره",
    viewAllBtn: "مشاهده همه مقالات",
    tagline: "هسته خدمات همراه تک",
    
    servicesList: [
      {
        id: "brand",
        number: "۰۱",
        name: "هویت برند و گرافیک اختصاصی",
        boldPhrase: "برند شما، دست‌دادن و اولین تأثیر شما بر بازار است.",
        desc: "ما اکوسیستم‌های بصری یکپارچه‌ای طراحی می‌کنیم که داستان شما را در یک نگاه بازگو می‌کنند. از لوگوهای مینیمال تا سیستم‌های هویت برند جامع، حضوری پرقدرت و اعتمادساز در تمامی کانال‌ها ایجاد می‌کنیم.",
        tags: ["طراحی لوگو", "رنگ‌بندی و تایپوگرافی", "قالب‌های شبکه‌های اجتماعی", "دفترچه برند (Guidelines)", "گرافیک تبلیغاتی"]
      },
      {
        id: "web",
        number: "۰۲",
        name: "طراحی و توسعه وب‌سایت مدرن",
        boldPhrase: "یک وب‌سایت با سرعت زیر یک ثانیه، برترین فروشنده شماست.",
        desc: "ما وب‌سایت‌های فوق‌العاده سریع، واکنش‌گرا و بهینه‌سازی شده برای حداکثر جذب مشتری می‌سازیم. با معماری‌های مدرن، کدهای تمیز و طراحی تعاملی، مقیاس‌پذیری و امنیت را تضمین می‌کنیم.",
        tags: ["React / Next.js", "طراحی نمونه اولیه UI/UX", "سرعت بارگذاری فوق‌سریع", "سئوی ساختاری", "پنل‌های مدیریت پیشرفته"]
      },
      {
        id: "seo",
        number: "۰۳",
        name: "بهینه‌سازی موتورهای جستجو (SEO)",
        boldPhrase: "دقیقاً در همان لحظه‌ای که مشتریان به شما نیاز دارند، دیده شوید.",
        desc: "با استراتژی سئوی داده‌محور ما، در صدر نتایج گوگل قرار بگیرید. از بهینه‌سازی کامل هسته حیاتی وب (Core Web Vitals) تا کدهای ساختاریافته نشانه گذاری (Schema) و سئوی محلی قدرتمند.",
        tags: ["آنالیز فنی سئو", "تحقیق کلمات کلیدی هدف", "بهینه‌سازی داخلی سایت", "ساختارهای Schema", "رتبه‌بندی نقشه گوگل"]
      },
      {
        id: "ads",
        number: "۰۴",
        name: "تبلیغات گوگل و متا (فیسبوک/اینستاگرام)",
        boldPhrase: "بودجه‌های تبلیغاتی را به درآمدهای پیش‌بینی‌پذیر تبدیل کنید.",
        desc: "کمپین‌های تبلیغاتی با نرخ بازگشت سرمایه (ROI) بالا طراحی و مدیریت می‌کنیم. با مخاطب‌یابی فوق‌العاده دقیق، تست مداوم محتوا و سیستم‌های پایش پیشرفته، جریان ورود مشتری را تضمین می‌کنیم.",
        tags: ["استراتژی PPC گوگل", "قیف‌های بازاریابی مجدد", "تنظیم پیکسل و API متا", "کپی‌رایتینگ خلاقانه", "گزارش‌های دقیق ROI"]
      },
      {
        id: "social",
        number: "۰۵",
        name: "مدیریت شبکه‌های اجتماعی",
        boldPhrase: "یک جامعه پویا و وفادار پیرامون برند خود بسازید.",
        desc: "مخاطبانتان را در جایی که زمانشان را سپری می‌کنند جذب کنید. ما محتواهای استراتژیک تولید، زمان‌بندی و بهینه‌سازی می‌کنیم تا وفاداری مشتریان افزایش یافته و دنبال‌کنندگان به سفیران برند شما تبدیل شوند.",
        tags: ["تولید محتوای استراتژیک", "تعامل با مخاطبان", "بهینه‌سازی پروفایل‌ها", "آنالیز روند رشد", "تحلیل و بررسی آمار"]
      },
      {
        id: "production",
        number: "۰۶",
        name: "تولید محتوا و ساخت تیزرهای ویدئویی",
        boldPhrase: "رسانه‌های بصری باکیفیت، موتور محرک فروش هستند.",
        desc: "داستان برند خود را با ویدئوهای خلاقانه و تیزرهای دیدنی تعریف کنید. ما ویدئوهای معرفی محصول، انیمیشن‌های آموزشی و کپی‌رایتینگ‌های تأثیرگذاری می‌سازیم که توجه بازار را به سرعت جلب می‌کند.",
        tags: ["فیلم‌برداری و سناریونویسی", "موشن گرافیک و انیمیشن", "کپی‌رایتینگ متنی", "تدوین حرفه‌ای رسانه", "تیزرهای کوتاه خلاقانه"]
      }
    ],

    stepsEyebrow: "مراحل کار",
    stepsTitle: "۳ گام ساده برای شروع همکاری",
    stepsSubtitle: "روش سه مرحله‌ای ما ترکیب استراتژی و خلاقیت را با شفافیت کامل ارائه می‌دهد.",
    steps: [
      {
        step: 1,
        stepNum: "۰۱.",
        phase: "تحلیل و استراتژی",
        duration: "۳ تا ۵ روز",
        subtitle: "آنالیز دقیق و تدوین نقشه راه",
        desc: "کار خود را با شناخت دقیق اهداف، مخاطبان هدف و چالش‌های بازار شما آغاز می‌کنیم تا نقشه راه رشد با بازگشت سرمایه فوق‌العاده بسازیم."
      },
      {
        step: 2,
        stepNum: "۰۲.",
        phase: "طراحی و توسعه نمونه",
        duration: "۱ هفته",
        subtitle: "طراحی رابط کاربری و معماری فنی",
        desc: "تیم ما رابط‌های کاربری (UI/UX) مدرن و کاربرپسند را به همراه معماری‌های نرم‌افزاری مقیاس‌پذیر، متناسب با هویت برند شما خلق می‌کند."
      },
      {
        step: 3,
        stepNum: "۰۳.",
        phase: "راه‌اندازی و پشتیبانی",
        duration: "۴ تا ۷ روز",
        subtitle: "راه‌اندازی و بهینه‌سازی مستمر",
        desc: "پس از انتشار، ما با پایش مداوم کارایی، ارائه آپدیت‌ها و بهینه‌سازی مستمر نرخ تبدیل در کنار شما می‌مانیم."
      }
    ],

    portfolioEyebrow: "نمونه کارها",
    portfolioTitle: "مدرکی بر توانمندی‌های ما",
    portfolioDesc: "کیس‌استدی‌های واقعی B2B و کمپین‌های بازاریابی پربازده که رشد بالا، سرعت و طراحی متمایز را به ارمغان آورده‌اند.",
    portfolioCaseBtn: "مطالعه مورد",
    portfolioCases: [
      {
        title: "FinVista Consulting",
        subtitle: "پلتفرم اختصاصی B2B SaaS",
        img: portfolioImg,
        badge: "B2B SaaS",
        watermark: "FV FINANCIAL",
        tags: ["طراحی فین‌تک", "پورتال فرانت‌اند React", "API ابری ایمن"]
      },
      {
        title: "Clock Fly Strategy",
        subtitle: "کمپین مارکتینگ همه‌جانبه",
        img: teamMeetingImg,
        badge: "جذب لید",
        watermark: "CLOCKFLY MEDIA",
        tags: ["تبلیغات چندکاناله", "کپی‌رایتینگ تبلیغاتی", "قیف‌های با تبدیل بالا"]
      },
      {
        title: "Performance Ads",
        subtitle: "بازاریابی ایمیلی و شبکه‌های اجتماعی",
        img: insightsImg,
        badge: "ایمیل و شبکه‌های اجتماعی",
        watermark: "PERFORMANCE INC.",
        tags: ["Meta Pixel API", "اتوماسیون نگه‌داشت مشتری", "تست‌های A/B"]
      },
      {
        title: "Apex Industrial",
        subtitle: "پلتفرم وب سازمانی",
        img: sketchImg,
        badge: "اپلیکیشن وب",
        watermark: "APEX MFG",
        tags: ["اپلیکیشن Next.js", "ساختار چندزبانه", "یکپارچه‌سازی تحلیلگر"]
      }
    ],

    insightsEyebrow: "آخرین تحلیل‌ها",
    insightsTitle: "خبرهایی از همراه تک",
    insightsList: [
      {
        category: "استراتژی",
        date: "۲۵ اسفند ۱۴۰۴",
        title: "کسب جایزه «برترین آژانس خلاق و فناوری» توسط همراه تک",
        excerpt: "تقدیر شده به خاطر مهندسی استثنایی نرم‌افزار، پشتیبانی روان از چند زبان و نتایج دیجیتال درخشان.",
        img: teamMeetingImg
      },
      {
        category: "مهندسی",
        date: "۱۰ اسفند ۱۴۰۴",
        title: "راه‌اندازی بیش از ۱۰ پورتال فروشگاهی سازمانی بزرگ",
        excerpt: "توسعه و انتشار سیستم‌های فروش ایمن و فوق‌العاده سریع با مدیریت موجودی پیشرفته و ویژگی‌های بومی اعتمادساز.",
        img: sketchImg
      },
      {
        category: "آینده صنعت",
        date: "۲۲ دی ۱۴۰۴",
        title: "آینده استراتژی‌های دیجیتال چندزبانه در سال ۲۰۲۶",
        excerpt: "چرا وب‌سایت‌های چندزبانه به همراه سرعت لود زیر یک ثانیه برای نفوذ به بازارهای منطقه‌ای حیاتی هستند.",
        img: insightsImg
      }
    ]
  },
  pus: {
    ourServices: "زموږ خدمتونه",
    introTitle: "ستاسو د سوداګرۍ غوره کول او بدلون",
    consultationBtn: "وړیا مشوره ترلاسه کړئ",
    readMore: "مشوره ترلاسه کړئ",
    viewAllBtn: "ټولې مقالې وګورئ",
    tagline: "د همراه تک بنسټیز خدمتونه",
    
    servicesList: [
      {
        id: "brand",
        number: "۰۱",
        name: "برند پیژندنه او ځانګړی ګرافیک",
        boldPhrase: "ستاسو برانډ په بازار کې ستاسو د روغبړ او لومړۍ نښه ده.",
        desc: "موږ داسې لیدیز اکوسیستمونه ډیزاین کوو چې ستاسو کیسه سمدلاسه بیانوي. له ساده نښو نیولې د برانډ هراړخیز پیژندنې پورې، موږ یو داسې ځواکمن حضور رامینځته کوو چې په هر چینل کې اعتبار او باور زیاتوي.",
        tags: ["لوګو ډیزاین", "رنګونه او ټایپوګرافي", "د ټولنیزو پاڼو قالبونه", "د برانډ لارښود", "اعلاناتي ګرافیک"]
      },
      {
        id: "web",
        number: "۰۲",
        name: "د ویب پاڼې ډیزاین او پراختیا",
        boldPhrase: "د یوې ثانیې لاندې سرعت لرونکې ویب پاڼه ستاسو ترټولو غوره پلورونکی دی.",
        desc: "موږ بې حده چټکې، د هر سکرین سره برابرې او د پلور ډیرولو لپاره جوړې شوې ویب پاڼې جوړوو. په مډرن جوړښت، پاک کوډ او تعاملي ډیزاین سره، موږ د پاڼې امنیت او راتلونکی پراختیا تضمین کوو.",
        tags: ["React / Next.js", "د UI/UX بڼه ډیزاین", "بې حده چټک لودېدل", "جوړښتي سئو", "پرمختللي مدیریت پنلونه"]
      },
      {
        id: "seo",
        number: "۰۳",
        name: "د لټون انجن اصلاح کول (SEO)",
        boldPhrase: "دقیقاً په هغه وخت کې چې پیرودونکي تاسو ته اړتیا لري، ښکاره شئ.",
        desc: "زموږ په ډیټا سمبال سئو استراتیژۍ سره، د ګوګل د لټون په پایلو کې لومړی شئ. د تخنیکي جوړښت له اصلاح کولو نیولې د نښه کوونې کوډونو (Schema) او ځایی سئو پورې هرڅه تنظیموو.",
        tags: ["د سئو تخنیکي ارزونه", "د کلیدي کلمو څیړنه", "د ویب پاڼې دننه سئو", "د Schema جوړښتونه", "د ګوګل نقشې درجه بندي"]
      },
      {
        id: "ads",
        number: "۰۴",
        name: "ګوګل او میټا تبلیغات",
        boldPhrase: "د اعلاناتو بودیجه په داسې عاید بدله کړئ چې وړاندوېینه یې کیدای شي.",
        desc: "موږ د ګوګل او میټا په شبکو کې د لوړ عاید لرونکي اعلاناتي کمپاینونه سمبالوو. د نښه شویو لیدونکو د پيژندلو او دوامداره ازموینې له لارې ستاسو پلور تضمین کوو.",
        tags: ["د ګوګل د اعلاناتو استراتیژي", "د بیا نښه کولو قیفونه", "د میټا پکسل او API ترتیب", "خلاقانه متن لیکنه", "د ROI دقیق راپورونه"]
      },
      {
        id: "social",
        number: "۰۵",
        name: "د ټولنیزو شبکو سمبالښت",
        boldPhrase: "د خپل برانډ شاوخوا یوه فعاله او وفاداره ټولنه جوړه کړئ.",
        desc: "خپل لیدونکي هلته راجلب کړئ چیرې چې دوی خپل وخت تیروي. موږ استراتیژیک او چمتو شوي توکي پر وخت خپروو ترڅو د برانډ وفاداري زیاته شي او لیدونکي ستاسو په پیرودونکو بدل شي.",
        tags: ["استراتیژیک تولید", "له لیدونکو سره تعامل", "د پاڼو اصلاح کول", "د ودې ارزونه", "د احصایې تحلیل"]
      },
      {
        id: "production",
        number: "۰۶",
        name: "د ویډیوګانو او اعلاناتي تیزرونو جوړول",
        boldPhrase: "د کیفیت لرونکي بصري رسنۍ د پلورلو ترټولو لویه هڅوونکې ده.",
        desc: "د خپل برانډ کیسه په زړه پورې ویډیوګانو او لنډو تیزرونو سره انځور کړئ. موږ د پیژندنې ویډیوګانې، موشن ګرافیکونه او ګټور متنونه جوړوو چې په بازار کې ستاسو ارزښت لوړوي.",
        tags: ["د سناریو لیکنه او عکاسي", "موشن ګرافیک او انیمیشن", "رسنیز تدوین", "خلاقانه اعلانات", "لنډې ویډیوګانې"]
      }
    ],

    stepsEyebrow: "د کار پړاوونه",
    stepsTitle: "د کار پیلولو لپاره ۳ اسانه پړاوونه",
    stepsSubtitle: "زموږ درې پړاویزه میتودولوژي استراتیژي او تخلاقیت یوځای کوي.",
    steps: [
      {
        step: 1,
        stepNum: "۰۱.",
        phase: "څیړنه او استراتیژي",
        duration: "۳ تر ۵ ورځې",
        subtitle: "د بازار ارزونه او د لارې نقشه",
        desc: "موږ د ستاسو د اهدافو، لیدونکو او د بازار ستونزو په درک کولو سره خپله استراتیژي پیلوو ترڅو د لوړې ګټې راوړلو نقشه جوړه کړو."
      },
      {
        step: 2,
        stepNum: "۰۲.",
        phase: "ډیزاین او پرمختګ",
        duration: "۱ اونۍ",
        subtitle: "د UI/UX او جوړښت ډیزاین",
        desc: "زموږ ټیم مډرن، ساده او ګټور ډیزاینونه (UI/UX) د ستاسو د برانډ پیژندنې سره سم د پام وړ کیفیت سره چمتو کوي."
      },
      {
        step: 3,
        stepNum: "۰۳.",
        phase: "خپرول او ملاتړ",
        duration: "۴ تر ۷ ورځې",
        subtitle: "نشر او همیشنی اصلاح کول",
        desc: "له راه‌اندازۍ وروسته، موږ د همیشني پایش، نویو اپډیتونو او د لیدونکو څخه د پیرودونکو د جوړولو په چارو کې ستاسو ملاتړ کوو."
      }
    ],

    portfolioEyebrow: "نمونه کارونه",
    portfolioTitle: "زموږ د وړتیاوو یو سند",
    portfolioDesc: "د رښتینې سوداګرۍ (B2B) او اعلاناتو کمپاینونو عملي کیسې چې زموږ کیفیت، سرعت او لوړ خدمات ثابتوي.",
    portfolioCaseBtn: "کیس مطالعه",
    portfolioCases: [
      {
        title: "FinVista Consulting",
        subtitle: "ځانګړی B2B SaaS پلتفرم",
        img: portfolioImg,
        badge: "B2B SaaS",
        watermark: "FV FINANCIAL",
        tags: ["فین‌تیک ډیزاین", "React فرانت‌اند پورټل", "خوندي ابري API"]
      },
      {
        title: "Clock Fly Strategy",
        subtitle: "هر اړخیز مارکېټنګ اعلانات",
        img: teamMeetingImg,
        badge: "جذب لید",
        watermark: "CLOCKFLY MEDIA",
        tags: ["څو اړخیز اعلانات", "اعلاناتي متن", "د لوړ تبادلې قیفونه"]
      },
      {
        title: "Performance Ads",
        subtitle: "بریښنالیک او ټولنیز شبکې",
        img: insightsImg,
        badge: "بریښنالیک او شبکې",
        watermark: "PERFORMANCE INC.",
        tags: ["Meta Pixel API", "د پیرودونکو اتوماتیک ساتل", "د A/B ازموینې"]
      },
      {
        title: "Apex Industrial",
        subtitle: "د سازمانونو ویب پورتال",
        img: sketchImg,
        badge: "ویب اپلیکیشن",
        watermark: "APEX MFG",
        tags: ["د Next.js اپلیکیشن", "څو ژبیز جوړښت", "د تحلیلګر همغږي کول"]
      }
    ],

    insightsEyebrow: "وروستي تحلیلونه",
    insightsTitle: "د همراه تک وروستي خبرونه",
    insightsList: [
      {
        category: "استراتیژي",
        date: "۲۵ کب ۱۴۰۴",
        title: "د همراه تک لخوا د غبرګ تخنیکي او خلاقې ایجنسۍ جایزه ګټل",
        excerpt: "د استثنایي کوډ لیکنې، د ۳ ژبو د ملاتړ او د انټرنیټي اعلاناتو د غوره پایلو له امله ستایل شوی دی.",
        img: teamMeetingImg
      },
      {
        category: "مهندسي",
        date: "۱۰ کب ۱۴۰۴",
        title: "د ۱۰ څخه د زیاتو لویو پلورنځیو د پورتالونو جوړول او نشرول",
        excerpt: "خوندي او له چټکتیا ډک انټرنیټي پلورنځي چې د مالونو اتومات کنټرول او پرمختللي امکانات لري.",
        img: sketchImg
      },
      {
        category: "د ډیجیټل راتلونکی",
        date: "۲۲ مرغومی ۱۴۰۴",
        title: "په ۲۰۲۶ کال کې د څو ژبیزو استراتیژیو روښانه راتلونکی",
        excerpt: "ولې د یوې ثانیې لاندې چټک لود او په څو ژبو د پورتال چمتو کول په سیمه کې د بریالیتوب کیلي ده.",
        img: insightsImg
      }
    ]
  }
};

const SectionDivider: React.FC = () => (
  <div className="relative w-full py-4 flex items-center justify-center bg-[#F8F9FF] dark:bg-[#0B1F3A]">
    <div className="w-full max-w-[1100px] h-[1px] bg-slate-300 dark:bg-white/10 relative">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#0B1F3A] shadow-[0_0_10px_#0B1F3A]" />
    </div>
  </div>
);

export const ServicesView: React.FC = () => {
  const { isRtl, language, openConsultationModal } = useApp();
  
  const langKey = (language === 'prs' ? 'prs' : language === 'pus' ? 'pus' : 'en') as 'en' | 'prs' | 'pus';
  const curContent = servicesContent[langKey];

  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const activeService = curContent.servicesList[activeTabIdx];
  const ActiveIcon = IconMap[activeService.id] || BrandIcon3D;

  const stepsTimelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: stepsScrollY } = useScroll({
    target: stepsTimelineRef,
    offset: ["start center", "end center"]
  });
  const stepsScaleY = useSpring(stepsScrollY, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const portfolioCarouselRef = useRef<HTMLDivElement>(null);
  const scrollPortfolio = (direction: 'left' | 'right') => {
    if (portfolioCarouselRef.current) {
      const cardWidth = 360;
      portfolioCarouselRef.current.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex flex-col w-full bg-[#F8F9FF] dark:bg-[#0B1F3A] text-[#44474E] dark:text-[#9CA3AF] selection:bg-[#00F5D4] selection:text-[#0B1F3A] transition-colors duration-300 pt-20">
      
      {/* 1. SERVICES TABS SECTION ("Our Services") */}
      <section className="relative w-full py-24 sm:py-32 px-6 lg:px-12 bg-[#EFF4FF] dark:bg-[#0D2645]">
        
        <div className="absolute top-0 right-1/4 w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-12 left-1/4 w-[280px] h-[280px] bg-[#0B1F3A]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1200px] mx-auto">
          
          <ScrollReveal variant="fade-up" className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div className="flex items-center gap-2 mb-2 md:mb-0">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0B1F3A] shadow-[0_0_8px_#0B1F3A]" />
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#0B1F3A]">
                {curContent.ourServices}
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-[#0B1F3A] dark:text-white tracking-tight leading-tight max-w-2xl text-wrap">
              {curContent.introTitle}
            </h1>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* LEFT COLUMN */}
            <div className="lg:col-span-5 flex flex-col relative bg-white/60 dark:bg-[#0B1F3A]/60 backdrop-blur-md rounded-3xl border border-[#DCE9FF] dark:border-white/5 p-6 shadow-xl">
              
              <div className="hidden md:block relative pl-6 dir-rtl:pl-0 dir-rtl:pr-6 max-h-[460px] overflow-y-auto scrollbar-none pr-2">
                <div className="absolute left-[3px] dir-rtl:left-auto dir-rtl:right-[3px] top-0 bottom-0 w-[2px] bg-slate-200 dark:bg-slate-700/60" />
                
                <div 
                  className="absolute left-[3px] dir-rtl:left-auto dir-rtl:right-[3px] w-[2px] bg-[#00F5D4] shadow-[0_0_10px_#00F5D4] transition-all duration-300"
                  style={{
                    height: '56px',
                    transform: `translateY(${activeTabIdx * 76 + 10}px)`
                  }}
                />

                <div className="space-y-4">
                  {curContent.servicesList.map((service, index) => {
                    const isActive = activeTabIdx === index;
                    return (
                      <button
                        key={service.id}
                        onClick={() => setActiveTabIdx(index)}
                        className={`w-full text-left dir-rtl:text-right p-4 rounded-xl transition-all duration-300 flex items-center gap-4 cursor-pointer relative group ${
                          isActive
                            ? 'bg-white dark:bg-[#0D2645] border border-[#DCE9FF] dark:border-white/10 text-[#0B1F3A] dark:text-white font-extrabold shadow-md scale-[1.01]'
                            : 'bg-transparent text-slate-600 dark:text-slate-400 hover:text-[#0B1F3A] dark:hover:text-white hover:bg-white/40 dark:hover:bg-white/5'
                        }`}
                        style={{ height: '64px' }}
                      >
                        <span className={`text-xs font-mono font-bold transition-colors ${isActive ? 'text-[#00F5D4]' : 'text-slate-500'}`}>
                          {service.number}
                        </span>
                        <span className="text-sm font-bold tracking-tight truncate">
                          {service.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Mobile version */}
              <div className="block md:hidden overflow-x-auto whitespace-nowrap scrollbar-none pb-2 -mx-2 px-2 flex gap-2">
                {curContent.servicesList.map((service, index) => {
                  const isActive = activeTabIdx === index;
                  return (
                    <button
                      key={service.id}
                      onClick={() => setActiveTabIdx(index)}
                      className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-extrabold transition-all border shrink-0 ${
                        isActive
                          ? 'bg-[#0B1F3A] dark:bg-[#00F5D4] text-white dark:text-[#0B1F3A] border-transparent shadow-lg'
                          : 'bg-white dark:bg-[#0B1F3A] text-slate-600 dark:text-slate-400 border-[#DCE9FF] dark:border-white/10 hover:text-white'
                      }`}
                    >
                      <span className="font-mono">{service.number}</span>
                      <span>{service.name}</span>
                    </button>
                  );
                })}
              </div>

            </div>

            {/* RIGHT COLUMN */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTabIdx}
                  initial={{ opacity: 0, x: isRtl ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: isRtl ? 20 : -20 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-white dark:bg-[#0B1F3A] border border-[#DCE9FF] dark:border-[#22304A] rounded-3xl p-8 sm:p-10 flex flex-col justify-between h-full relative overflow-hidden group shadow-2xl"
                >
                  
                  <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#00F5D4]/10 rounded-full blur-3xl pointer-events-none" />
                  
                  <div className="space-y-8 relative z-10">
                    
                    <div className="flex items-center justify-between">
                      <div className="p-4 bg-slate-50 dark:bg-white/5 border border-[#DCE9FF] dark:border-white/10 rounded-2xl flex items-center justify-center text-[#00F5D4]">
                        <ActiveIcon />
                      </div>
                      <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">
                        {curContent.tagline}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-[#0B1F3A] dark:text-white mb-4">
                        {activeService.name}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                        <strong className="font-black text-[#0B1F3A] dark:text-white">{activeService.boldPhrase}</strong> {activeService.desc}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-slate-200 dark:border-white/5">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-slate-600 dark:text-slate-400">
                        {activeService.tags.map((tag, idx) => (
                          <React.Fragment key={tag}>
                            {idx > 0 && (
                              <span className="text-[#00F5D4] opacity-80 font-black text-[10px]">✦</span>
                            )}
                            <span className="font-bold tracking-wide hover:text-[#0B1F3A] dark:hover:text-white transition-colors">{tag}</span>
                          </React.Fragment>
                        ))}
                      </div>
                    </div>

                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/5 flex items-center justify-between relative z-10">
                    <button
                      onClick={openConsultationModal}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0B1F3A] dark:bg-[#00F5D4] hover:bg-[#172B52] dark:hover:bg-[#00F5D4] text-white dark:text-[#0B1F3A] font-extrabold text-xs transition duration-300 shadow-lg cursor-pointer transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span className="material-symbols-outlined text-[10px] bg-white/20 rounded-full p-1 flex items-center justify-center font-black">
                        arrow_outward
                      </span>
                      <span>{curContent.readMore}</span>
                    </button>
                    
                    <span className="text-xs font-mono text-slate-500 font-extrabold">
                      {formatLocalizedNumber(activeTabIdx + 1, language)} / {formatLocalizedNumber(6, language)}
                    </span>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>

      <SectionDivider />

      {/* 2. STEPS SECTION */}
      <section className="relative w-full py-28 px-6 lg:px-12 bg-[#F8F9FF] dark:bg-[#0B1F3A]">
        
        <div className="absolute top-1/4 left-10 w-[200px] h-[200px] bg-[#0B1F3A]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1200px] mx-auto flex flex-col items-center">
          
          <ScrollReveal variant="fade-up" className="text-center max-w-2xl mb-20">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0B1F3A] shadow-[0_0_8px_#0B1F3A]" />
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#0B1F3A]">
                {curContent.stepsEyebrow}
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0B1F3A] dark:text-white tracking-tight mb-4">
              {curContent.stepsTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
              {curContent.stepsSubtitle}
            </p>
          </ScrollReveal>

          <div ref={stepsTimelineRef} className="relative w-full max-w-4xl py-4 flex flex-col items-center">
            
            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-8 bottom-8 w-[2px] bg-slate-200 dark:bg-slate-700/60 rounded-full z-0" />

            <motion.div
              style={{ scaleY: stepsScaleY, originY: 0 }}
              className="absolute left-8 md:left-1/2 -translate-x-1/2 top-8 bottom-8 w-[2px] bg-gradient-to-b from-[#0B1F3A] dark:from-[#00F5D4] via-[#00F5D4] dark:via-[#0B1F3A] to-[#0B1F3A] dark:to-[#00F5D4] shadow-[0_0_12px_#0B1F3A] dark:shadow-[0_0_12px_#00F5D4] rounded-full z-0 origin-top"
            />

            <div className="w-full space-y-16 relative z-10">
              {curContent.steps.map((stepItem, index) => {
                const isLeft = index % 2 === 1;

                return (
                  <div key={stepItem.step} className="relative w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    
                    {isLeft ? (
                      <div className="md:pr-14 md:text-right hidden md:block" />
                    ) : null}

                    <div className={`${isLeft ? 'order-2 md:order-1' : 'order-2 md:pr-14 md:text-right'} pl-16 md:pl-0`}>
                      <ScrollReveal 
                        variant={isLeft ? "fade-right" : "fade-left"}
                        className="group"
                      >
                        <motion.div
                          whileInView={{ borderColor: "#0B1F3A", boxShadow: "0 0 25px rgba(255, 87, 34, 0.12)" }}
                          viewport={{ once: false, amount: 0.6 }}
                          transition={{ duration: 0.4 }}
                          className="bg-white dark:bg-[#0B1F3A] border border-[#DCE9FF] dark:border-white/10 p-6 sm:p-8 rounded-3xl relative transition-colors duration-300 shadow-xl"
                        >
                          <div className={`absolute top-4 ${isRtl ? 'left-4' : 'right-4'} bg-slate-100 dark:bg-black/50 text-[10px] font-extrabold px-3 py-1 rounded-full text-[#0B1F3A] border border-[#0B1F3A]/20 shadow-sm uppercase`}>
                            {stepItem.duration}
                          </div>

                          <span className="text-[10px] font-mono font-black text-[#0B1F3A] tracking-wider block mb-2">
                            {stepItem.stepNum} {stepItem.phase}
                          </span>
                          
                          <h3 className="text-base sm:text-lg font-black text-[#0B1F3A] dark:text-white mb-2 group-hover:text-[#0B1F3A] transition-colors">
                            {stepItem.subtitle}
                          </h3>
                          
                          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                            {stepItem.desc}
                          </p>
                        </motion.div>
                      </ScrollReveal>
                    </div>

                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white dark:bg-[#0B1F3A] border-2 border-[#0B1F3A] text-white font-mono text-xs flex items-center justify-center font-black z-20 shadow-lg">
                      <motion.div
                        whileInView={{ backgroundColor: "#0B1F3A", scale: 1.1, boxShadow: "0 0 12px #0B1F3A" }}
                        viewport={{ once: false, amount: 0.5 }}
                        className="w-4 h-4 rounded-full bg-[#0B1F3A]"
                      />
                    </div>

                    {!isLeft ? (
                      <div className="md:pl-14 hidden md:block" />
                    ) : null}

                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      <SectionDivider />

      {/* 3. PORTFOLIO SHOWCASE */}
      <section className="relative w-full py-28 px-6 lg:px-12 bg-[#EFF4FF] dark:bg-[#0D2645]">
        
        <div className="max-w-[1200px] mx-auto">
          
          <ScrollReveal variant="fade-up" className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0B1F3A] shadow-[0_0_8px_#0B1F3A]" />
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#0B1F3A]">
                  {curContent.portfolioEyebrow}
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-[#0B1F3A] dark:text-white tracking-tight mb-4">
                {curContent.portfolioTitle}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-lg">
                {curContent.portfolioDesc}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => scrollPortfolio('left')}
                className="w-12 h-12 rounded-full border border-slate-300 dark:border-white/10 hover:border-[#0B1F3A] hover:text-[#0B1F3A] bg-white dark:bg-[#0B1F3A] text-[#0B1F3A] dark:text-white flex items-center justify-center transition-all cursor-pointer shadow-md transform active:scale-95"
                aria-label="Scroll left"
              >
                <span className="material-symbols-outlined text-lg">
                  {isRtl ? 'arrow_forward' : 'arrow_back'}
                </span>
              </button>
              <button
                onClick={() => scrollPortfolio('right')}
                className="w-12 h-12 rounded-full border border-slate-300 dark:border-white/10 hover:border-[#0B1F3A] hover:text-[#0B1F3A] bg-white dark:bg-[#0B1F3A] text-[#0B1F3A] dark:text-white flex items-center justify-center transition-all cursor-pointer shadow-md transform active:scale-95"
                aria-label="Scroll right"
              >
                <span className="material-symbols-outlined text-lg">
                  {isRtl ? 'arrow_back' : 'arrow_forward'}
                </span>
              </button>
            </div>
          </ScrollReveal>

          <div 
            ref={portfolioCarouselRef}
            className="flex overflow-x-auto gap-6 snap-x snap-mandatory pb-12 -mx-4 px-4 scrollbar-none select-none cursor-grab active:cursor-grabbing"
            style={{ scrollBehavior: 'smooth' }}
          >
            {curContent.portfolioCases.map((project, idx) => (
              <div 
                key={idx}
                className="w-[320px] sm:w-[360px] shrink-0 snap-start bg-white dark:bg-[#0B1F3A] border border-[#DCE9FF] dark:border-white/10 rounded-3xl overflow-hidden flex flex-col justify-between group shadow-xl transition duration-300"
              >
                <div className="h-52 w-full relative overflow-hidden bg-slate-200 dark:bg-slate-900">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded text-[9px] font-mono tracking-widest text-white/80 uppercase pointer-events-none select-none border border-white/10">
                    {project.watermark}
                  </div>

                  <div className={`absolute bottom-4 ${isRtl ? 'left-4' : 'right-4'} bg-[#0B1F3A] text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase shadow-md`}>
                    {project.badge}
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 font-extrabold block mb-1">
                      {project.subtitle}
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-[#0B1F3A] dark:text-white mb-4 group-hover:text-[#0B1F3A] transition-colors">
                      {project.title}
                    </h3>
                    
                    <div className="flex flex-wrap items-center gap-x-2 text-[11px] text-slate-600 dark:text-slate-400 mb-6">
                      {project.tags.map((tag, tIdx) => (
                        <React.Fragment key={tag}>
                          {tIdx > 0 && <span className="text-slate-400">·</span>}
                          <span>{tag}</span>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200 dark:border-white/5 flex items-center justify-between">
                    <button
                      onClick={openConsultationModal}
                      className="inline-flex items-center gap-2 text-xs font-black text-[#0B1F3A] hover:underline cursor-pointer group/btn"
                    >
                      <span>{curContent.portfolioCaseBtn}</span>
                      <span className="material-symbols-outlined text-xs group-hover/btn:translate-x-1 transition-transform">
                        {isRtl ? 'arrow_back' : 'arrow_forward'}
                      </span>
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      <SectionDivider />

      {/* 4. LATEST INSIGHTS */}
      <section className="relative w-full py-28 px-6 lg:px-12 bg-[#F8F9FF] dark:bg-[#0B1F3A]">
        
        <div className="max-w-[1200px] mx-auto">
          
          <ScrollReveal variant="fade-up" className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0B1F3A] shadow-[0_0_8px_#0B1F3A]" />
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#0B1F3A]">
                  {curContent.insightsEyebrow}
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-[#0B1F3A] dark:text-white tracking-tight">
                {curContent.insightsTitle}
              </h2>
            </div>

            <button
              onClick={openConsultationModal}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-[#0B1F3A] border border-slate-300 dark:border-white/10 hover:border-[#0B1F3A] hover:text-[#0B1F3A] text-[#0B1F3A] dark:text-white font-extrabold text-xs transition self-start md:self-auto shadow-md"
            >
              <span>{curContent.viewAllBtn}</span>
              <span className="material-symbols-outlined text-xs">
                arrow_outward
              </span>
            </button>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {curContent.insightsList.map((article, idx) => (
              <StaggerItem 
                key={idx}
                className="rounded-3xl bg-white dark:bg-[#0B1F3A] border border-[#DCE9FF] dark:border-white/10 overflow-hidden flex flex-col justify-between group shadow-xl transition duration-300"
              >
                <div>
                  <div className="h-48 w-full relative overflow-hidden bg-slate-200 dark:bg-neutral-900">
                    <img
                      src={article.img}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    
                    <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-[9px] font-mono font-black text-[#0B1F3A] tracking-wider px-2.5 py-1 rounded-md uppercase border border-white/5">
                      {article.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 font-extrabold block mb-2">
                      {article.date}
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-[#0B1F3A] dark:text-white mb-3 leading-snug group-hover:text-[#0B1F3A] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <button
                    onClick={openConsultationModal}
                    className="inline-flex items-center gap-2 text-xs font-black text-slate-600 dark:text-slate-300 hover:text-[#0B1F3A] transition-colors cursor-pointer group/item"
                  >
                    <span>{curContent.readMore}</span>
                    <span className="material-symbols-outlined text-sm transform transition-transform group-hover/item:rotate-45 text-[#0B1F3A]">
                      arrow_outward
                    </span>
                  </button>
                </div>

              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </section>

      <Footer />

    </div>
  );
};
