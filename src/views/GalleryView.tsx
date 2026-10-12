import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { motion, AnimatePresence } from 'motion/react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ScrollReveal';
import { Footer } from '../components/Footer';

// Image Assets
import portfolioImg from '../assets/images/portfolio_mockup.jpg';
import insightsImg from '../assets/images/insights_mockup.jpg';
import teamMeetingImg from '../assets/images/team_meeting.jpg';
import sketchImg from '../assets/images/design_sketch.jpg';
import founderImg from '../assets/images/founder.jpg';
import techLeadImg from '../assets/images/tech_lead.jpg';

export const GalleryView: React.FC = () => {
  const { language, isRtl, openConsultationModal } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const content = {
    en: {
      badge: "Showcase & Products",
      title: "Explore Our Products & Client Masterpieces",
      subtitle: "Discover high-performance SaaS portals, e-commerce platforms, cutting-edge UI/UX designs, and growth-driven marketing products engineered by Hamrah Tech.",
      searchPlaceholder: "Search products, platforms, or case studies...",
      categories: [
        { id: 'all', label: 'All Products' },
        { id: 'saas', label: 'SaaS Platforms' },
        { id: 'ecommerce', label: 'E-Commerce & Web' },
        { id: 'mobile', label: 'Mobile UI & Apps' },
        { id: 'branding', label: 'Brand & Graphics' },
      ],
      products: [
        {
          id: 1,
          title: "FinVista Enterprise SaaS Portal",
          category: "saas",
          badge: "Featured SaaS",
          subtitle: "Cloud Financial Analytics",
          desc: "A lightning-fast financial intelligence SaaS platform built with React, Tailwind CSS, and secure real-time API integrations.",
          img: portfolioImg,
          tags: ["React SPA", "Cloud API", "Real-time Charts", "Secure Auth"]
        },
        {
          id: 2,
          title: "Clock Fly Strategy Campaign",
          category: "ecommerce",
          badge: "Marketing Suite",
          subtitle: "High-ROI Growth Engine",
          desc: "Multi-channel advertising campaign dashboard and lead-generation funnel optimized for maximum conversion velocity.",
          img: teamMeetingImg,
          tags: ["Meta Ads API", "Funnel Builder", "Analytics Dashboard", "A/B Testing"]
        },
        {
          id: 3,
          title: "Apex Industrial E-Commerce",
          category: "ecommerce",
          badge: "Enterprise Web",
          subtitle: "Multilingual Storefront",
          desc: "Enterprise-grade e-commerce platform featuring lightning-fast catalog search, multi-currency checkout, and instant inventory sync.",
          img: insightsImg,
          tags: ["Next.js", "Multilingual", "Fast Checkout", "Inventory Sync"]
        },
        {
          id: 4,
          title: "Nexus Mobile Banking UI/UX",
          category: "mobile",
          badge: "Mobile UI Kit",
          subtitle: "Fintech App Interface",
          desc: "Sleek, secure, and intuitive mobile banking user interface designed for frictionless transactions and high user retention.",
          img: sketchImg,
          tags: ["Figma Design", "Mobile UX", "Dark Mode", "Design System"]
        },
        {
          id: 5,
          title: "Hamrah Core Brand Ecosystem",
          category: "branding",
          badge: "Brand Identity",
          subtitle: "Visual Design System",
          desc: "Comprehensive brand guidelines, custom 3D line-art icons, typography systems, and high-impact social media templates.",
          img: founderImg,
          tags: ["Logo & Icons", "Brand Guide", "Typography", "Social Kit"]
        },
        {
          id: 6,
          title: "OmniSearch AI Data Engine",
          category: "saas",
          badge: "AI Product",
          subtitle: "Smart Search & Retrieval",
          desc: "Advanced AI-powered search and document retrieval tool providing sub-second semantic answers for enterprise teams.",
          img: techLeadImg,
          tags: ["AI Integration", "Vector Search", "Enterprise", "High Speed"]
        }
      ],
      ctaTitle: "Ready to build your custom product?",
      ctaDesc: "Let's turn your visionary concept into an exceptional digital product that dominates your market.",
      ctaBtn: "Start Your Project Now"
    },
    prs: {
      badge: "گالری محصولات و نمونه‌ها",
      title: "کاوش محصولات و شاهکارهای دیجیتال همراه تک",
      subtitle: "پورتال‌های پیشرفته SaaS، پلتفرم‌های فروشگاهی، طراحی‌های UI/UX نوآورانه و محصولات بازاریابی رشد-محور مهندسی شده توسط همراه تک را کشف کنید.",
      searchPlaceholder: "جستجوی محصولات، پلتفرم‌ها یا کیس‌استدی‌ها...",
      categories: [
        { id: 'all', label: 'همه محصولات' },
        { id: 'saas', label: 'پلتفرم‌های SaaS' },
        { id: 'ecommerce', label: 'فروشگاهی و وب' },
        { id: 'mobile', label: 'رابط موبایل' },
        { id: 'branding', label: 'هویت برند' },
      ],
      products: [
        {
          id: 1,
          title: "پورتال سازمانی FinVista SaaS",
          category: "saas",
          badge: "سائس ویژه",
          subtitle: "تحلیل مالی ابری",
          desc: "یک پلتفرم هوش مالی فوق‌العاده سریع ساخته شده با React، Tailwind CSS و اتصالات امن API لحظه‌ای.",
          img: portfolioImg,
          tags: ["React SPA", "API ابری", "نمودارهای زنده", "احراز هویت امن"]
        },
        {
          id: 2,
          title: "کمپین استراتژیک Clock Fly",
          category: "ecommerce",
          badge: "سیستم مارکتینگ",
          subtitle: "موتور رشد با بازگشت سرمایه بالا",
          desc: "داشبورد کمپین تبلیغاتی چندکاناله و قیف جذب لید بهینه‌سازی شده برای حداکثر سرعت تبدیل.",
          img: teamMeetingImg,
          tags: ["Meta Ads API", "قیف فروش", "داشبورد تحلیلی", "تست A/B"]
        },
        {
          id: 3,
          title: "فروشگاه صنعتی Apex",
          category: "ecommerce",
          badge: "وب سازمانی",
          subtitle: "فروشگاه چندزبانه",
          desc: "پلتفرم فروشگاهی سطح سازمانی با جستجوی سریع کاتالوگ، پرداخت چند ارزی و همگام‌سازی لحظه‌ای انبار.",
          img: insightsImg,
          tags: ["Next.js", "چندزبانه", "پرداخت سریع", "همگام‌سازی انبار"]
        },
        {
          id: 4,
          title: "رابط کاربری بانکداری موبایلی Nexus",
          category: "mobile",
          badge: "کیئت رابط موبایل",
          subtitle: "رابط اپلیکیشن فین‌تک",
          desc: "رابط کاربری بانکداری موبایلی شیک، امن و بصری طراحی شده برای تراکنش‌های بدون اصطکاک.",
          img: sketchImg,
          tags: ["طراحی فیگما", "UX موبایل", "حالت تاریک", "سیستم دیزاین"]
        },
        {
          id: 5,
          title: "اکوسیستم برند همراه",
          category: "branding",
          badge: "هویت برند",
          subtitle: "سیستم طراحی بصری",
          desc: "دستورالعمل‌های جامع برند، آیکون‌های خطی سه‌بعدی سفارشی، سیستم‌های تایپوگرافی و قالب‌های شبکه‌های اجتماعی.",
          img: founderImg,
          tags: ["لوگو و آیکون", "راهنمای برند", "تایپوگرافی", "کیت اجتماعی"]
        },
        {
          id: 6,
          title: "موتور داده هوش مصنوعی OmniSearch",
          category: "saas",
          badge: "محصول هوش مصنوعی",
          subtitle: "جستجو و بازیابی هوشمند",
          desc: "ابزار جستجو و بازیابی اسناد پیشرفته مبتنی بر هوش مصنوعی با ارائه پاسخ‌های معنایی زیر یک ثانیه.",
          img: techLeadImg,
          tags: ["هوش مصنوعی", "جستجوی وکتور", "سازمانی", "سرعت بالا"]
        }
      ],
      ctaTitle: "آماده ساخت محصول سفارشی خود هستید؟",
      ctaDesc: "بیایید ایده رویایی شما را به یک محصول دیجیتال استثنایی تبدیل کنیم که بازار شما را تسخیر کند.",
      ctaBtn: "همین حالا پروژه خود را شروع کنید"
    },
    pus: {
      badge: "د محصولاتو او نمونی ګالري",
      title: "د همراه تک محصولات او شاهکارونه وپلټئ",
      subtitle: "پرمختللي SaaS پلتفرمونه، پلورنځي، نوي UI/UX ډیزاینونه او د بازار موندنې محصولات وپلټئ.",
      searchPlaceholder: "د محصولاتو یا پروژو لټون...",
      categories: [
        { id: 'all', label: 'ټول محصولات' },
        { id: 'saas', label: 'SaaS پلتفرمونه' },
        { id: 'ecommerce', label: 'پلورنځی او ویب' },
        { id: 'mobile', label: 'موبایل UI' },
        { id: 'branding', label: 'د برانډ هویت' },
      ],
      products: [
        {
          id: 1,
          title: "FinVista SaaS پورتال",
          category: "saas",
          badge: "ځانګړی SaaS",
          subtitle: "ابري مالي تحلیل",
          desc: "یو چټک مالي پلیټفارم چې د React او امنیتي API سره جوړ شوی.",
          img: portfolioImg,
          tags: ["React SPA", "ابري API", "ژوندي چارټونه", "خوندي داخلیدل"]
        },
        {
          id: 2,
          title: "Clock Fly کمپاین",
          category: "ecommerce",
          badge: "مارکیټنګ",
          subtitle: "د لوړ عاید وده",
          desc: "د څو چینلونو اعلاناتو کمپاین او د پلور قیف د لوړ تبدیل لپاره.",
          img: teamMeetingImg,
          tags: ["Meta Ads API", "د پلور قیف", "تحلیلي ډشبورډ", "ازموینه"]
        },
        {
          id: 3,
          title: "Apex صنعتی پلورنځی",
          category: "ecommerce",
          badge: "سازماني ویب",
          subtitle: "څو ژبیز پلورنځی",
          desc: "د سازمان په کچه ای کامرس پلیټفارم د چټک لټون او څو اسارونو تادیاتو سره.",
          img: insightsImg,
          tags: ["Next.js", "څو ژبیز", "چټک تادیه", "انبار همغږي"]
        },
        {
          id: 4,
          title: "Nexus موبایل بانکداری UI/UX",
          category: "mobile",
          badge: "موبایل UI",
          subtitle: "فین ټیک اپلیکیشن",
          desc: "ښکلی او خوندي موبایل بانکداری انٹرفیس د اسانه لیږد لپاره.",
          img: sketchImg,
          tags: ["فایګما ډیزاین", "موبایل UX", "تاریک حالت", "ډیزاین سیسټم"]
        },
        {
          id: 5,
          title: "همراه برانډ اکوسیستم",
          category: "branding",
          badge: "برانډ هویت",
          subtitle: "لیدیز ډیزاین سیسټم",
          desc: "بشپړ برانډ لارښود، ځانګړي 3D آیکونونه او د ټولنیزو رسنیو قالبونه.",
          img: founderImg,
          tags: ["لوګو او آیکون", "برانډ لارښود", "ټایپوګرافي", "ټولنیز کټ"]
        },
        {
          id: 6,
          title: "OmniSearch AI ډیټا انجن",
          category: "saas",
          badge: "AI محصول",
          subtitle: "هوشمند لټون",
          desc: "پرمختللی د هوش مصنوعی لټون توکی د سازماني ټیمونو لپاره.",
          img: techLeadImg,
          tags: ["AI انتیګریشن", "وکتور لټون", "سازماني", "چټک سرعت"]
        }
      ],
      ctaTitle: "د خپل ځانګړي محصول جوړولو ته چمتو یاست؟",
      ctaDesc: "راځئ چې ستاسو نظر په یو عالي ډیجیټل محصول بدل کړو.",
      ctaBtn: "پروژه پیل کړئ"
    }
  };

  const curContent = content[language === 'prs' ? 'prs' : language === 'pus' ? 'pus' : 'en'];

  const filteredProducts = curContent.products.filter(item => {
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesQuery = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesQuery;
  });

  return (
    <div className="flex flex-col w-full bg-[#F8F9FF] dark:bg-[#0B1F3A] text-[#44474E] dark:text-[#9CA3AF] selection:bg-[#00F5D4] selection:text-[#0B1F3A] transition-colors duration-300 pt-28">
      
      {/* HERO SECTION */}
      <section className="relative w-full py-20 px-6 lg:px-12 bg-[#EFF4FF] dark:bg-[#0D2645]">
        <div className="absolute top-0 right-1/4 w-[350px] h-[350px] bg-[#00F5D4]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[280px] h-[280px] bg-[#0B1F3A]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1200px] mx-auto text-center relative z-10">
          <ScrollReveal variant="fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0B1F3A] shadow-[0_0_8px_#0B1F3A]" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#0B1F3A]">
                {curContent.badge}
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0B1F3A] dark:text-white tracking-tight leading-tight max-w-3xl mx-auto mb-6">
              {curContent.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-light mb-10">
              {curContent.subtitle}
            </p>

            {/* SEARCH INPUT */}
            <div className="max-w-xl mx-auto relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 material-symbols-outlined">
                search
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={curContent.searchPlaceholder}
                className="w-full pl-11 pr-4 py-4 rounded-full bg-white dark:bg-[#0B1F3A] border border-slate-200 dark:border-white/10 text-sm text-[#0B1F3A] dark:text-white placeholder-slate-400 shadow-lg focus:outline-none focus:border-[#00F5D4] transition-all"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CATEGORY TABS & PRODUCTS GRID */}
      <section className="relative w-full py-20 px-6 lg:px-12 bg-[#F8F9FF] dark:bg-[#0B1F3A]">
        <div className="max-w-[1200px] mx-auto">
          
          {/* CATEGORIES */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            {curContent.categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-extrabold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#0B1F3A] dark:bg-[#00F5D4] text-white dark:text-[#0B1F3A] shadow-lg scale-105'
                      : 'bg-white dark:bg-[#0B1F3A] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/10 hover:border-[#00F5D4]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* PRODUCTS GRID */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <StaggerItem
                key={product.id}
                className="bg-white dark:bg-[#0B1F3A] border border-slate-200 dark:border-white/10 rounded-3xl overflow-hidden flex flex-col justify-between group shadow-xl hover:shadow-2xl transition duration-500"
              >
                <div>
                  <div className="h-56 w-full relative overflow-hidden bg-slate-200 dark:bg-slate-900">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono tracking-widest text-white/90 uppercase border border-white/10">
                      {product.subtitle}
                    </div>
                    <div className={`absolute bottom-4 ${isRtl ? 'left-4' : 'right-4'} bg-[#0B1F3A] text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase shadow-md`}>
                      {product.badge}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg sm:text-xl font-black text-[#0B1F3A] dark:text-white mb-2 group-hover:text-[#0B1F3A] transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light mb-6">
                      {product.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 text-[11px] text-slate-600 dark:text-slate-400 mb-6">
                      {product.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="px-2.5 py-1 bg-slate-100 dark:bg-white/5 rounded-md font-mono text-[10px] border border-slate-200 dark:border-white/5">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                  <button
                    onClick={openConsultationModal}
                    className="inline-flex items-center gap-2 text-xs font-black text-[#0B1F3A] hover:underline cursor-pointer group/btn"
                  >
                    <span>{language === 'prs' ? 'استعلام قیمت و مشاوره' : language === 'pus' ? 'مشوره او قیمت' : 'Request Demo / Pricing'}</span>
                    <span className="material-symbols-outlined text-xs group-hover/btn:translate-x-1 transition-transform">
                      {isRtl ? 'arrow_back' : 'arrow_forward'}
                    </span>
                  </button>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-500 font-bold text-base">
                {language === 'prs' ? 'موردی یافت نشد.' : language === 'pus' ? 'هیڅ شی ونه موندل شو.' : 'No products found matching your search.'}
              </p>
            </div>
          )}

        </div>
      </section>

      {/* CALL TO ACTION BANNER */}
      <section className="relative w-full py-24 px-6 lg:px-12 bg-[#EFF4FF] dark:bg-[#0D2645] border-t border-slate-200 dark:border-white/10 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-black text-[#0B1F3A] dark:text-white mb-4">
            {curContent.ctaTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-8 font-light">
            {curContent.ctaDesc}
          </p>
          <button
            onClick={openConsultationModal}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0B1F3A] dark:bg-[#00F5D4] text-white dark:text-[#0B1F3A] font-black text-sm shadow-xl hover:scale-105 transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm">arrow_outward</span>
            <span>{curContent.ctaBtn}</span>
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};
