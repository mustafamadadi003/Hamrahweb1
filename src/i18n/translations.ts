export type Language = 'en' | 'prs' | 'pus';

export interface TranslationSchema {
  nav: {
    home: string;
    aboutUs: string;
    services: string;
    gallery: string;
    faqs: string;
    contact: string;
    freeConsultation: string;
    enterpriseEng: string;
    getInTouch: string;
  };
  hero: {
    badgeAbout: string;
    badgeTagline: string;
    headlinePart1: string;
    headlineHighlight: string;
    description1: string;
    description2: string;
    founderName: string;
    founderTitle: string;
    bookConsultation: string;
    partnerTitle: string;
    partnerBadge: string;
    partnerDesc: string;
    startDiscussion: string;
    directAccess: string;
    stat1: string;
    stat2: string;
    stat3: string;
    tickerItems: string[];
  };
  story: {
    badge: string;
    title: string;
    subtitle: string;
    desc1: string;
    desc2: string;
    founderName: string;
    founderRole: string;
    coFounderName: string;
    coFounderRole: string;
    trustText: string;
    highlight1: string;
    highlight2: string;
    highlight3: string;
  };
  servicesExplorer: {
    badge: string;
    title: string;
    tabs: {
      brand: string;
      web: string;
      seo: string;
      ads: string;
      social: string;
    };
    brandTitle: string;
    brandDesc: string;
    brandBullets: string[];
    webTitle: string;
    webDesc: string;
    webBullets: string[];
    seoTitle: string;
    seoDesc: string;
    seoBullets: string[];
    adsTitle: string;
    adsDesc: string;
    adsBullets: string[];
    socialTitle: string;
    socialDesc: string;
    socialBullets: string[];
    readMore: string;
  };
  strategyGrid: {
    title: string;
    c1Title: string;
    c1Desc: string;
    c2Title: string;
    c2Desc: string;
    c3Title: string;
    c3Desc: string;
    c4Title: string;
    c4Desc: string;
    c5Title: string;
    c5Desc: string;
    c6Title: string;
    c6Desc: string;
  };
  portfolio: {
    badge: string;
    title: string;
    subtitle: string;
    p1Title: string;
    p1Desc: string;
    p2Title: string;
    p2Desc: string;
    readMore: string;
  };
  timeline: {
    badge: string;
    titlePart1: string;
    titleHighlight: string;
    node1Year: string;
    node1Title: string;
    node1Desc: string;
    node2Year: string;
    node2Title: string;
    node2Desc: string;
    node3Year: string;
    node3Title: string;
    node3Desc: string;
    node4Year: string;
    node4Title: string;
    node4Desc: string;
    node5Year: string;
    node5Title: string;
    node5Desc: string;
  };
  stats: {
    p1: string;
    p1Label: string;
    p2: string;
    p2Label: string;
    p3: string;
    p3Label: string;
    p4: string;
    p4Label: string;
  };
  googleReviews: {
    title: string;
    rating: string;
    reviewsCount: string;
    writeReview: string;
    r1Name: string;
    r1Text: string;
    r1Time: string;
    r2Name: string;
    r2Text: string;
    r2Time: string;
    r3Name: string;
    r3Text: string;
    r3Time: string;
  };
  teamCarousel: {
    badge: string;
    title: string;
    subtitle: string;
    m1Name: string;
    m1Role: string;
    m2Name: string;
    m2Role: string;
    m3Name: string;
    m3Role: string;
  };
  faqs: {
    badge: string;
    title: string;
    categoryTab: string;
    formResponseTime: string;
    formTitle: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    subscribeNews: string;
    submitNow: string;
    q1: string;
    a1: string;
    q2: string;
    a2: string;
    q3: string;
    a3: string;
    q4: string;
    a4: string;
    q5: string;
    a5: string;
    q6: string;
    a6: string;
    q7: string;
    a7: string;
    q8: string;
    a8: string;
  };
  footer: {
    bio: string;
    quickLinks: string;
    allPages: string;
    socialMedia: string;
    officeAddress: string;
    officeVal: string;
    support247: string;
    supportVal: string;
    businessHours: string;
    hoursVal: string;
    copyright: string;
  };
  modal: {
    title: string;
    subtitle: string;
    serviceSelectLabel: string;
    optionSeo: string;
    optionAds: string;
    optionWeb: string;
    optionBrand: string;
    optionSocial: string;
    fullNameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    messageLabel: string;
    submitModal: string;
    closeBtn: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    addressLabel: string;
    addressVal: string;
    phoneLabel: string;
    phoneVal: string;
    emailLabel: string;
    emailVal: string;
    hoursLabel: string;
    hoursVal: string;
    cardTitle: string;
    cardGuarantee: string;
    fullNamePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    submitRequest: string;
    trustBadge1: string;
    trustBadge2: string;
  };
  aboutUs: {
    badge: string;
    title: string;
    desc1: string;
    desc2: string;
    collabTitle: string;
    collabDesc: string;
    storyBadge: string;
    storyTitle: string;
    recognitionBadge: string;
    recognitionTitle: string;
    recognitionDesc: string;
    servicesBadge: string;
    servicesTitle: string;
    servicesDesc: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  en: {
    nav: {
      home: 'Home',
      aboutUs: 'About Us',
      services: 'Services',
      gallery: 'Gallery',
      faqs: 'FAQs',
      contact: 'Contact',
      freeConsultation: 'Get a Free Consultation',
      enterpriseEng: 'Enterprise Engineering Agency',
      getInTouch: 'Get in Touch',
    },
    hero: {
      badgeAbout: 'Hamrah Tech Agency',
      badgeTagline: 'Software Engineering & Digital Marketing Agency',
      headlinePart1: 'Full-Service Digital Marketing & Engineering Agency To',
      headlineHighlight: 'Get You More Leads & Sales',
      description1:
        'At Hamrah Tech, we help businesses grow online through data-driven digital marketing, from SEO and paid ads to software engineering, web design, and brand identity. Whether you are building from scratch or scaling up, we provide the strategy, execution, and results you need to move forward.',
      description2: 'Accelerating digital growth with engineered precision and proven market strategies.',
      founderName: 'Seemin Naeemi',
      founderTitle: 'Founder & Head of Strategy',
      bookConsultation: 'Get a Free Consultation',
      partnerTitle: 'The Hamrah Tech Growth Guarantee',
      partnerBadge: '24/7 Client Support',
      partnerDesc:
        'We take full ownership of your digital journey with transparent performance reporting, tailored engineering, and continuous ROI tracking.',
      startDiscussion: 'Explore Our Services',
      directAccess: 'Direct Access To Leadership',
      stat1: '150+ Active & Successful Projects',
      stat2: '300% ROI Growth Rate',
      stat3: 'Trilingual Local Support',
      tickerItems: [
        'HAMRAH TECH AGENCY',
        'Search Engine Optimization (SEO)',
        'Google & Meta Paid Ads',
        'Custom Web Design & Development',
        'Brand Identity & Visual Style',
        'Social Media Management',
        'Trilingual Support (EN | PRS | PUS)',
        '150+ Successful Projects',
        'High Conversion ROI',
      ],
    },
    story: {
      badge: 'Leadership & Vision',
      title: 'Guided by Experience, Driven by Strategy',
      subtitle: "At Hamrah Tech, leadership isn't just about managing projects—it's about steering businesses toward sustainable digital growth.",
      desc1:
        'Seemin Naeemi brings over a decade of expertise in digital marketing, brand development, and strategic communications. Having led cross-functional teams and successfully scaled multi-channel marketing campaigns across diverse industries, her vision is rooted in analytical precision and creative storytelling.',
      desc2:
        'With a deep understanding of market dynamics in South Asia, the Middle East, and beyond, Seemin co-founded Hamrah Tech to bridge the gap between technical execution and business impact. Her leadership ensures that every project at Hamrah Tech is grounded in data-driven strategies, seamless execution, and measurable ROI.',
      founderName: 'Seemin Naeemi',
      founderRole: 'Founder & Head of Strategy',
      coFounderName: 'Ali Fayaz',
      coFounderRole: 'CEO & Tech Lead',
      trustText: 'Trusted by businesses from startups to enterprise brands',
      highlight1: '2+ Years Industry Experience (Est. 2024)',
      highlight2: 'Data-Driven Strategy & Precision',
      highlight3: 'Cross-Functional Leadership',
    },
    servicesExplorer: {
      badge: 'Our Services',
      title: 'Optimize and transform your business',
      tabs: {
        brand: '1. Brand Identity & Graphics',
        web: '2. Website Design & Development',
        seo: '3. Search Engine Optimization (SEO)',
        ads: '4. Google & Meta Advertising',
        social: '5. Social Media Management',
      },
      brandTitle: 'Brand Identity & Graphics',
      brandDesc:
        'We design complete brand identities, logos, color palettes, typography, and visual assets that create a consistent, professional image your audience will recognize and trust across every platform.',
      brandBullets: ['Logo Design', 'Typography & Color Systems', 'Social Media Visuals', 'Marketing Creatives'],
      webTitle: 'Website Design & Development',
      webDesc:
        'We engineer lightning-fast, high-converting responsive websites optimized for user experience, mobile devices, search engines, and sub-second page performance.',
      webBullets: ['Responsive Web Portals', 'Custom E-Commerce', 'Sub-second Load Times', 'Conversion UI/UX'],
      seoTitle: 'Search Engine Optimization (SEO)',
      seoDesc:
        'We optimize your website to dominate organic Google search results, capture high-intent buyers, and build sustainable long-term domain authority.',
      seoBullets: ['Technical SEO Audits', 'Local Search Optimization', 'Keyword Strategy', 'Authority Backlinks'],
      adsTitle: 'Google & Meta Advertising',
      adsDesc:
        'We design and manage high-ROI PPC and targeted social media ad campaigns across Google Search, Shopping, Meta (Facebook & IG), and LinkedIn.',
      adsBullets: ['Google Search & Shopping Ads', 'Meta (FB/IG) Retargeting', 'A/B Testing & Funnels', 'ROI & CPA Tracking'],
      socialTitle: 'Social Media Management',
      socialDesc:
        'We build and manage your brand presence on key social networks with viral creative assets, strategy calendars, and community engagement.',
      socialBullets: ['Content Calendar Strategy', 'Short-form Video Assets', 'Audience Growth', 'Performance Analytics'],
      readMore: 'Read More',
    },
    strategyGrid: {
      title: 'We combine creative strategy with storytelling',
      c1Title: 'Full-Service Team',
      c1Desc: 'From organic rankings to paid lead and sales generation, we cover every channel so you do not have to manage multiple agencies.',
      c2Title: 'Results-Driven Approach',
      c2Desc: 'Every campaign is tied to real business outcomes—more leads, more sales, and more revenue. We do not celebrate vanity metrics.',
      c3Title: 'Tailored Strategies',
      c3Desc: 'Every client gets a custom strategy built around their specific goals, audience, and competitive environment.',
      c4Title: 'Transparent Reporting',
      c4Desc: 'You always know where your budget is going, with clear, regular performance reports that show what is working and what is next.',
      c5Title: 'Multi-Industry Experience',
      c5Desc: 'We have worked with service-based businesses, eCommerce brands, and local companies, giving us the versatility to market any business.',
      c6Title: 'End-to-End Ownership',
      c6Desc: 'From brand creation to customer acquisition, we own the entire digital journey, so your growth never gets stuck between disconnected teams.',
    },
    portfolio: {
      badge: 'Portfolio',
      title: 'We have partnered with brands across different industries.',
      subtitle:
        'Our portfolio showcases a diverse range of projects from high converting social media campaigns and viral content to sleek websites and successful launches.',
      p1Title: 'FinVista Consulting',
      p1Desc: 'Build professional brand presence online with fast responsive UX and SEO optimization.',
      p2Title: 'Vibe Clothing Co.',
      p2Desc: 'E-commerce platform redesign & Google Shopping campaign driving 340% organic growth.',
      readMore: 'Read More',
    },
    timeline: {
      badge: 'Our Process',
      titlePart1: 'The Hamrah Tech 5-Stage',
      titleHighlight: 'Growth Liquid Flow',
      node1Year: 'Phase 01',
      node1Title: 'Comprehensive Digital Audit',
      node1Desc: 'Analyzing web speed, SEO standing, ad conversion funnels, and market competitors.',
      node2Year: 'Phase 02',
      node2Title: 'Custom Strategy Formulation',
      node2Desc: 'Designing keyword matrices, ad copy, wireframes, and conversion architecture.',
      node3Year: 'Phase 03',
      node3Title: 'High-Converting Web & Brand Launch',
      node3Desc: 'Building fast, responsive web systems with sub-second performance.',
      node4Year: 'Phase 04',
      node4Title: 'SEO & Paid Ads Campaign Execution',
      node4Desc: 'Deploying Google Search, Meta Ads, and aggressive technical SEO.',
      node5Year: 'Phase 05',
      node5Title: 'Data Tracking & Revenue Scaling',
      node5Desc: 'A/B testing, lowering acquisition costs, and scaling monthly revenues.',
    },
    stats: {
      p1: '390+',
      p1Label: 'Delivered Projects',
      p2: '70%',
      p2Label: 'Returning Clients',
      p3: '90%',
      p3Label: 'Success Rate',
      p4: '2+',
      p4Label: 'Years of Experience',
    },
    googleReviews: {
      title: 'Hamrah Tech Reviews',
      rating: '5.0 ★★★★★',
      reviewsCount: '15 Google Reviews',
      writeReview: 'Write a Review',
      r1Name: 'Terry Lyttle',
      r1Text: 'I cannot recommend Hamrah Tech enough! They built a fantastic, professional website for my business and increased our leads.',
      r1Time: '7 months ago',
      r2Name: 'Devnate Randle',
      r2Text: 'Working with Hamrah Tech has been an absolute game-changer for my business! Their Google ads campaign yields 4.5x ROI.',
      r2Time: '7 months ago',
      r3Name: 'Allison Trombley',
      r3Text: 'Great marketing and web engineering company! I recommend them if you want run Google ads and get high converting websites.',
      r3Time: '7 months ago',
    },
    teamCarousel: {
      badge: 'Team Members',
      title: 'Driven by Experience, Built for Real Results',
      subtitle:
        'At Hamrah Tech, our work is shaped by people who understand how businesses grow. From strategy to execution, our team brings together practical experience in web development, marketing, and design to deliver solutions that make an impact.',
      m1Name: 'Mostafa Madadi',
      m1Role: 'Founder',
      m2Name: 'Ali Rahimi',
      m2Role: 'CEO',
      m3Name: 'Sina Karimi',
      m3Role: 'Team Manager',
    },
    faqs: {
      badge: 'FAQs',
      title: 'Learn more from FAQs',
      categoryTab: 'General Ask',
      formResponseTime: 'Response time: 1 hour',
      formTitle: 'Tell details about your project',
      namePlaceholder: 'Full name',
      emailPlaceholder: 'Your email',
      messagePlaceholder: 'Your message',
      subscribeNews: 'Subscribe to Newsletter',
      submitNow: 'Submit Now',
      q1: '01. What digital marketing & web services does Hamrah Tech offer?',
      a1: 'Hamrah Tech offers brand identity and graphics, website design and development, SEO, Google and Meta advertising, and social media management, all under one roof.',
      q2: '02. Does Hamrah Tech work with both service-based and e-commerce businesses?',
      a2: 'Yes, we partner with service-based businesses, eCommerce brands, local companies, and tech startups.',
      q3: '03. What is included in Hamrah Tech\'s SEO services?',
      a3: 'Our SEO includes technical audits, on-page optimization, keyword strategy, local Google Business ranking, and authority backlinking.',
      q4: '04. How do Google and Meta ads help my business grow with Hamrah Tech?',
      a4: 'We target high-intent buyers on Google Search and retarget engaged leads on Facebook/Instagram to deliver high ROI.',
      q5: '05. Does Hamrah Tech manage social media accounts completely?',
      a5: 'Yes, we handle content strategy, visual asset creation, scheduling, and growth analytics.',
      q6: '06. Will I get reports and performance updates?',
      a6: 'Yes, you receive transparent performance reports detailing lead volume, conversion rates, and ROI metrics.',
      q7: '07. Why should I choose Hamrah Tech over other marketing agencies?',
      a7: 'We combine real software engineering precision with data-driven marketing and dedicated 24/7 client support.',
      q8: '08. Does Hamrah Tech offer a free audit or consultation?',
      a8: 'Yes, click "Get a Free Consultation" to schedule your initial growth audit.',
    },
    footer: {
      bio: 'We are a full-service digital marketing agency helping businesses grow through data-driven strategy, performance marketing, SEO, paid ads, web development, and measurable results.',
      quickLinks: 'Quick Links',
      allPages: 'All Pages',
      socialMedia: 'Social Media',
      officeAddress: 'Office Address',
      officeVal: 'Shop No T50, Milli Market, Poll-e-Sorkh, Kabul, Afghanistan',
      support247: '24/7 Support',
      supportVal: '+93 77 620 4626 | info@hamrahtech.com',
      businessHours: 'Business Hours',
      hoursVal: 'Sat - Thu: 8:00 AM - 5:00 PM',
      copyright: '© All Rights Reserved | Hamrah Tech Agency',
    },
    modal: {
      title: 'Book a Free Growth Consultation',
      subtitle: 'Schedule a direct call with Seemin Naeemi and the Salsal Digital Marketing team.',
      serviceSelectLabel: 'Primary Service Needed',
      optionSeo: 'Search Engine Optimization (SEO)',
      optionAds: 'Paid Advertising (Google & Meta Ads)',
      optionWeb: 'Web Design & Development',
      optionBrand: 'Brand Identity & Visual Style',
      optionSocial: 'Social Media Management',
      fullNameLabel: 'Full Name',
      emailLabel: 'Email Address',
      phoneLabel: 'Phone Number',
      messageLabel: 'Business Details / Goals',
      submitModal: 'Book Consultation Now',
      closeBtn: 'Close',
    },
    contact: {
      badge: 'Contact Us',
      title: 'Contact Salsal Digital Marketing Agency',
      subtitle: 'We are here to answer your questions and accelerate your online growth.',
      addressLabel: 'Office Location',
      addressVal: 'Shop No T50, Milli Market, Poll-e-Sorkh, Kabul, Afghanistan',
      phoneLabel: 'Phone & WhatsApp',
      phoneVal: '+93 77 620 4626',
      emailLabel: 'Direct Email',
      emailVal: 'info@hamrahtech.com',
      hoursLabel: 'Business Hours',
      hoursVal: 'Sat - Thu: 8:00 AM - 5:00 PM',
      cardTitle: 'Request Your Free Growth Audit',
      cardGuarantee: 'Guaranteed 1-Hour Response Time',
      fullNamePlaceholder: 'e.g. Mostafa Madadi',
      emailPlaceholder: 'e.g. info@hamrahtech.com',
      messagePlaceholder: 'Tell us about your project goals and digital marketing needs...',
      submitRequest: 'Submit Audit Request',
      trustBadge1: '100% Confidentiality & NDA',
      trustBadge2: 'No Obligation Consultation',
    },
    aboutUs: {
      badge: 'About Us',
      title: 'Built by a Business Owner Who Understands Growth.',
      desc1: "We understand that as a business owner, you don't just want fancy reports—you want tangible, real-world growth. That's why Hamrah Tech was founded: to bridge the gap between technical execution and actual revenue generation.",
      desc2: "We don't do cookie-cutter solutions. Our team works hand-in-hand with you to design systems, optimize marketing, and build high-performance websites that work 24/7 as your best salesperson.",
      collabTitle: 'Collaborate with Us',
      collabDesc: "Let's build something extraordinary from stunning visuals to interactive modern creative innovative experiences.",
      storyBadge: 'Our Story',
      storyTitle: 'From Technician to Industry Leader',
      recognitionBadge: 'Recognition',
      recognitionTitle: 'We are a Google Partner Agency',
      recognitionDesc: 'As an accredited Google Partner, Hamrah Tech adheres strictly to the highest standards of campaign management, ad performance, ROI delivery, and web engineering. Our strategic certifications validate our capability to scale local and global brands predictably.',
      servicesBadge: 'Our Services',
      servicesTitle: 'We are offering the best solutions',
      servicesDesc: 'Comprehensive digital marketing, software development, and performance optimization tailored for rapid brand scaling.',
    },
  },

  prs: {
    nav: {
      home: 'صفحه اصلی',
      aboutUs: 'درباره همراه تک',
      services: 'خدمات ما',
      gallery: 'گالری محصولات',
      faqs: 'سوالات متداول',
      contact: 'تماس با ما',
      freeConsultation: 'دریافت مشاوره رایگان',
      enterpriseEng: 'آژانس دیجیتال مارکتینگ و مهندسی همراه تک',
      getInTouch: 'تماس با ما',
    },
    hero: {
      badgeAbout: 'آژانس همراه تک',
      badgeTagline: 'آژانس تخصصی مهندسی نرم‌افزار و دیجیتال مارکتینگ',
      headlinePart1: 'آژانس کامل دیجیتال مارکتینگ و مهندسی همراه تک برای',
      headlineHighlight: 'افزایش لید و فروش شما',
      description1:
        'در آژانس همراه تک، ما با مارکتینگ داده‌محور، سئو تخصصی، تبلیغات گوگل و متا، و طراحی وب‌سایت‌های مدرن به رشد آنلاین کسب‌وکار شما کمک می‌کنیم. چه در حال شروع از صفر باشید و چه قصد توسعه داشته باشید، ما استراتژی و نتایج لازم را فراهم می‌کنیم.',
      description2: 'رشد دیجیتال با دقت مهندسی و استراتژی‌های آزموده‌شده بازار.',
      founderName: 'سیمین نعیمی',
      founderTitle: 'بنیان‌گذار و مدیر ارشد استراتژی',
      bookConsultation: 'دریافت مشاوره رایگان',
      partnerTitle: 'تضمین کیفیت و رشد همراه تک',
      partnerBadge: 'پشتیبانی ۲۴/۷ مشتریان',
      partnerDesc:
        'ما مسئولیت کامل مسیر دیجیتال شما را با گزارش‌دهی شفاف، توسعه تخصصی و پایش بازگشت سرمایه بر عهده می‌گیریم.',
      startDiscussion: 'مشاهده خدمات ما',
      directAccess: 'ارتباط مستقیم با مدیریت',
      stat1: '۱۵۰+ پروژه فعال و موفق',
      stat2: 'نرخ رشد ۳۰۰٪ بازدهی',
      stat3: 'پشتیبانی بومی ۳ زبانه',
      tickerItems: [
        'آژانس همراه تک | HAMRAH TECH',
        'سئو و بهینه‌سازی موتورهای جستجو',
        'تبلیغات هدفمند گوگل و متا',
        'طراحی و توسعه وب اختصاصی',
        'هویت بصری و برندینگ',
        'مدیریت شبکه‌های اجتماعی',
        'پشتیبانی ۳ زبانه (انگلیسی | دری | پشتو)',
        '۱۵۰+ پروژه موفق',
        'بازدهی حداکثری (High ROI)',
      ],
    },
    story: {
      badge: 'رهبری و چشم‌انداز',
      title: 'هدایت با تجربه، پیش‌ران با استراتژی',
      subtitle: 'در همراه تک، رهبری فقط مدیریت پروژه‌ها نیست—بلکه هدایت کسب‌وکارها به سوی رشد دیجیتال پایدار است.',
      desc1:
        'سیمین نعیمی با بیش از یک دهه تخصص در دیجیتال مارکتینگ، توسعه برند و ارتباطات استراتژیک فعالیت می‌کند. او با رهبری تیم‌های چندتخصصی و اجرای موفق کمپین‌های بازاریابی چندکاناله در صنایع گوناگون، دیدگاهی مبتنی بر دقت تحلیلی و روایت‌گری خلاقانه دارد.',
      desc2:
        'با درک عمیق از دینامیک بازار در آسیای جنوبی، خاورمیانه و بین‌الملل، سیمین این آژانس را تأسیس کرد تا شکاف بین اجرای فنی و تاثیر مستقیم بر کسب‌وکار را پر کند. رهبری او تضمین می‌کند که تمامی پروژه‌ها بر پایه استراتژی‌های داده‌محور، اجرای بی‌نقص و بازگشت سرمایه (ROI) ملموس استوار باشند.',
      founderName: 'سیمین نعیمی',
      founderRole: 'بنیان‌گذار و مدیر ارشد استراتژی',
      coFounderName: 'علی فیاض',
      coFounderRole: 'مدیرعامل و ارشد فناوری',
      trustText: 'مورد اعتماد برندها از استارتاپ‌ها تا شرکت‌های بزرگ',
      highlight1: '۲+ سال تجربه تخصصی (آغاز از ۲۰۲۴)',
      highlight2: 'استراتژی داده‌محور و دقیق',
      highlight3: 'رهبری تیم‌های چندتخصصی',
    },
    servicesExplorer: {
      badge: 'خدمات ما',
      title: 'بهینه‌سازی و تحول کسب‌وکار شما',
      tabs: {
        brand: '۱. هویت بصری و برندینگ',
        web: '۲. طراحی و توسعه وب‌سایت',
        seo: '۳. سئو و بهینه‌سازی موتورهای جستجو',
        ads: '۴. تبلیغات هدفمند گوگل و متا',
        social: '۵. مدیریت شبکه‌های اجتماعی',
      },
      brandTitle: 'هویت بصری و برندینگ',
      brandDesc:
        'طراحی کامل هویت برند، لوگو، پالت رنگی و اقلام تصویری که تصویری یکپارچه و حرفه‌ای از شما در تمام پلتفرم‌ها ایجاد می‌کند.',
      brandBullets: ['طراحی لوگو', 'سیستم رنگ و تایپوگرافی', 'تصاویر شبکه‌های اجتماعی', 'طرح‌های تبلیغاتی'],
      webTitle: 'طراحی و توسعه وب‌سایت',
      webDesc:
        'طراحی وب‌سایت‌های پرسرعت، پربازده و واکنش‌گرا که برای تبدیل بازدیدکننده به مشتری و تجربه کاربری عالی بهینه‌سازی شده‌اند.',
      webBullets: ['پورتال‌های واکنش‌گرا', 'فروشگاه اینترنتی اختصاصی', 'سرعت بارگذاری زیر ۱ ثانیه', 'طراحی UI/UX پربازده'],
      seoTitle: 'سئو و بهینه‌سازی موتورهای جستجو',
      seoDesc:
        'بهینه‌سازی وب‌سایت برای تسلط بر رتبه‌های اول گوگل، جذب خریداران واقعی و ساخت اعتبار بلندمدت دامنه.',
      seoBullets: ['ممیزی فنی سئو', 'سئوی محلی Google Maps', 'استراتژی کلمات کلیدی', 'لینک‌سازی معتبر'],
      adsTitle: 'تبلیغات هدفمند گوگل و متا',
      adsDesc:
        'طراحی و مدیریت کمپین‌های تبلیغات کلیکی با بازدهی بالا در گوگل سرچ، شاپینگ، فیس‌بوک و اینستاگرام.',
      adsBullets: ['تبلیغات گوگل سرچ و شاپینگ', 'ریتارگتینگ فیس‌بوک و اینستاگرام', 'تست A/B و قیف فروش', 'پایش هزینه جذب مشتری'],
      socialTitle: 'مدیریت شبکه‌های اجتماعی',
      socialDesc:
        'مدیریت حرفه‌ای حضور برند در شبکه‌های اجتماعی با تولید محتوای جذاب، تقویم استراتژیک و تعامل با مخاطبان.',
      socialBullets: ['تقویم محتوای استراتژیک', 'ویدیوی کوتاه و محتوای ویروسی', 'رشد مخاطبان', 'تحلیل آمار و رشد'],
      readMore: 'اطلاعات بیشتر',
    },
    strategyGrid: {
      title: 'ما استراتژی خلاقانه را با داستان‌سرایی ترکیب می‌کنیم',
      c1Title: 'تیم با خدمات کامل',
      c1Desc: 'از سئوی ارگانیک تا جذب لید و فروش کلیکی، تمام کانال‌ها را پوشش می‌دهیم تا نیازی به مدیریت چند شرکت نداشته باشید.',
      c2Title: 'رویکرد نتیجه‌محور',
      c2Desc: 'هر کمپین به نتایج واقعی کسب‌وکار پیوند خورده است: لید بیشتر، فروش بیشتر و درآمد بالاتر.',
      c3Title: 'استراتژی‌های اختصاصی',
      c3Desc: 'هر مشتری استراتژی کاملاً اختصاصی بر اساس اهداف، مخاطبان و فضای رقابتی خود دریافت می‌کند.',
      c4Title: 'گزارش‌دهی شفاف',
      c4Desc: 'همیشه می‌دانید بودجه شما کجا خرج می‌شود، با گزارش‌های منظم و روشن که مسیر را شفاف می‌سازند.',
      c5Title: 'تجربه در صنایع مختلف',
      c5Desc: 'همکاری با شرکت‌های خدماتی، فروشگاه‌های اینترنتی و کسب‌وکارهای محلی تنوع بالا به ما بخشیده است.',
      c6Title: 'مسئولیت‌پذیری کامل',
      c6Desc: 'از خلق برند تا جذب مشتری، تمام مسیر دیجیتال را بر عهده می‌گیریم تا روند رشد متوقف نشود.',
    },
    portfolio: {
      badge: 'نمونه کارها',
      title: 'همکاری با برندهای پیشرو در صنایع مختلف',
      subtitle:
        'پورتفولیوی همراه تک شامل مجموعه‌ای متنوع از کمپین‌های تبلیغاتی پربازده، محتوای فراگیر و وب‌سایت‌های موفق است.',
      p1Title: 'مشاوره FinVista',
      p1Desc: 'ایجاد حضور آنلاین حرفه‌ای با طراحی پرسرعت و سئوی تخصصی.',
      p2Title: 'پوشاک Vibe Clothing',
      p2Desc: 'بازطراحی فروشگاه اینترنتی و کمپین گوگل شاپینگ با ۳۴۰٪ رشد فروش.',
      readMore: 'مشاهده پروژه',
    },
    timeline: {
      badge: 'روند کاری ما',
      titlePart1: 'نقشه راه ۵ مرحله‌ای',
      titleHighlight: 'جریان مایع رشد همراه تک',
      node1Year: 'مرحله ۱',
      node1Title: 'ممیزی جامع دیجیتال',
      node1Desc: 'بررسی سرعت سایت، وضعیت سئو، قیف فروش و تحلیل رقبا.',
      node2Year: 'مرحله ۲',
      node2Title: 'تدوین استراتژی اختصاصی',
      node2Desc: 'طراحی نقشه کلمات کلیدی، متن تبلیغات و معماری نرخ تبدیل.',
      node3Year: 'مرحله ۳',
      node3Title: 'طراحی وب‌سایت و برندینگ',
      node3Desc: 'توسعه وب‌سایت پرسرعت و واکنش‌گرا با عملکرد زیر ۱ ثانیه.',
      node4Year: 'مرحله ۴',
      node4Title: 'اجرای سئو و تبلیغات کلیکی',
      node4Desc: 'راه‌اندازی تبلیغات گوگل و متا همراه با سئوی فنی.',
      node5Year: 'مرحله ۵',
      node5Title: 'تحلیل داده‌ها و افزایش فروش',
      node5Desc: 'تست‌های A/B، کاهش هزینه جذب و مقیاس‌پذیری درآمد ماهانه.',
    },
    stats: {
      p1: '۳۹۰+',
      p1Label: 'پروژه تحویل‌شده',
      p2: '۷۰٪',
      p2Label: 'مشتریان دائمی',
      p3: '۹۰٪',
      p3Label: 'نرخ موفقیت',
      p4: '۲+',
      p4Label: 'سال تجربه تخصصی',
    },
    googleReviews: {
      title: 'دیدگاه‌های گوگل همراه تک',
      rating: '۵.۰ ★★★★★',
      reviewsCount: '۱۵ دیدگاه گوگل',
      writeReview: 'ثبت دیدگاه',
      r1Name: 'تری لیتل',
      r1Text: 'همراه تک فوق‌العاده است! آن‌ها وب‌سایت کاملاً حرفه‌ای برای ما ساختند و ورودی مشتریان ما به شدت افزایش یافت.',
      r1Time: '۷ ماه پیش',
      r2Name: 'دونیت راندل',
      r2Text: 'همکاری با همراه تک یک تحول واقعی برای کسب‌وکار من بود! کمپین تبلیغات گوگل آن‌ها ۴.۵ برابر بازگشت سرمایه داشت.',
      r2Time: '۷ ماه پیش',
      r3Name: 'آلیسون ترومبلی',
      r3Text: 'یک شرکت فوق‌العاده بازاریابی و مهندسی وب! برای تبلیغات گوگل و وب‌سایت‌های پربازده حتماً همراه تک را پیشنهاد می‌کنم.',
      r3Time: '۷ ماه پیش',
    },
    teamCarousel: {
      badge: 'اعضای تیم',
      title: 'هدایت‌شده توسط تجربه، ساخته‌شده برای نتایج واقعی',
      subtitle:
        'در همراه تک، کار ما توسط افرادی شکل می‌گیرد که مسیر رشد کسب‌وکارها را می‌شناسند. از استراتژی تا اجرا، تیم ما تجربه عملی در توسعه وب، مارکتینگ و دیزاین را گرد هم آورده است.',
      m1Name: 'مصطفی مددی',
      m1Role: 'مؤسس',
      m2Name: 'علی رحیمی',
      m2Role: 'مدیرعامل',
      m3Name: 'سینا کریمی',
      m3Role: 'مدیر تیم',
    },
    faqs: {
      badge: 'سوالات متداول',
      title: 'پاسخ به سوالات شما',
      categoryTab: 'سوالات عمومی',
      formResponseTime: 'زمان پاسخگویی: ۱ ساعت',
      formTitle: 'جزئیات پروژه خود را بنویسید',
      namePlaceholder: 'نام و نام خانوادگی',
      emailPlaceholder: 'ایمیل شما',
      messagePlaceholder: 'متن پیام شما',
      subscribeNews: 'عضویت در خبرنامه همراه تک',
      submitNow: 'ارسال فرم',
      q1: '۰۱. همراه تک چه خدماتی در زمینه دیجیتال مارکتینگ و وب ارائه می‌دهد؟',
      a1: 'همراه تک خدمات برندینگ، طراحی وب‌سایت، سئو، تبلیغات گوگل و متا و مدیریت شبکه‌های اجتماعی را در یک مجموعه کامل ارائه می‌دهد.',
      q2: '۰۲. آیا همراه تک با شرکت‌های خدماتی و فروشگاه‌های اینترنتی هم همکاری می‌کند؟',
      a2: 'بله، ما با شرکت‌های خدماتی، فروشگاه‌های آنلاین، کسب‌وکارهای محلی و استارتاپ‌ها همکاری می‌کنیم.',
      q3: '۰۳. خدمات سئوی همراه تک شامل چه مواردی است؟',
      a3: 'شامل ممیزی فنی، بهینه‌سازی محتوایی، سئوی محلی Google Maps، تحقیق کلمات کلیدی و لینک‌سازی معتبر است.',
      q4: '۰۴. تبلیغات گوگل و متا چگونه به رشد کسب‌وکار کمک می‌کنند؟',
      a4: 'ما خریداران واقعی را در گوگل هدف قرار می‌دهیم و در فیس‌بوک و اینستاگرام آن‌ها را ترغیب به خرید می‌کنیم.',
      q5: '۰۵. آیا همراه تک مدیریت کامل شبکه‌های اجتماعی را بر عهده می‌گیرد؟',
      a5: 'بله، شامل استراتژی محتوا، طراحی گرافیکی، زمان‌بندی و آنالیز رشد پیج است.',
      q6: '۰۶. آیا گزارش‌های عملکرد و بازدهی ارائه می‌شود؟',
      a6: 'بله، گزارش‌های منظم و شفاف شامل نرخ تبدیل، لیدهای جذب‌شده و بازگشت سرمایه ارائه می‌شود.',
      q7: '۰۷. چرا همراه تک را به جای دیگر آژانس‌ها انتخاب کنیم؟',
      a7: 'زیرا ما دقت مهندسی نرم‌افزار را با مارکتینگ داده‌محور و پشتیبانی ۲۴/۷ ترکیب می‌کنیم.',
      q8: '۰۸. آیا همراه تک آنالیز و مشاوره رایگان ارائه می‌دهد؟',
      a8: 'بله، با کلیک روی «دریافت مشاوره رایگان» می‌توانید وقت آنالیز خود را رزرو کنید.',
    },
    footer: {
      bio: 'ما یک آژانس کامل دیجیتال مارکتینگ و مهندسی نرم‌افزار هستیم که به رشد کسب‌وکارها از طریق استراتژی‌های داده‌محور و نتایج ملموس کمک می‌کنیم.',
      quickLinks: 'لینک‌های سریع',
      allPages: 'تمام صفحات',
      socialMedia: 'شبکه‌های اجتماعی',
      officeAddress: 'آدرس دفتر',
      officeVal: 'کابل، پل سرخ، ملی مارکیت، دکان نمبر T50، افغانستان',
      support247: 'پشتیبانی ۲۴/۷',
      supportVal: '+93 77 620 4626 | info@hamrahtech.com',
      businessHours: 'ساعات کاری',
      hoursVal: 'شنبه تا پنجشنبه: ۸:۰۰ صبح تا ۵:۰۰ عصر',
      copyright: '© تمامی حقوق محفوظ است | آژانس همراه تک',
    },
    modal: {
      title: 'رزرو مشاوره رایگان رشد',
      subtitle: 'تنظیم جلسه مستقیم با سیمین نعیمی و تیم آژانس دیجیتال مارکتینگ صلصال.',
      serviceSelectLabel: 'خدمات اصلی مورد نیاز',
      optionSeo: 'سئو و بهینه‌سازی گوگل',
      optionAds: 'تبلیغات کلیکی (گوگل و متا)',
      optionWeb: 'طراحی و توسعه وب‌سایت',
      optionBrand: 'هویت بصری و برندینگ',
      optionSocial: 'مدیریت شبکه‌های اجتماعی',
      fullNameLabel: 'نام و نام خانوادگی',
      emailLabel: 'آدرس ایمیل',
      phoneLabel: 'شماره تماس',
      messageLabel: 'جزئیات کسب‌وکار / اهداف',
      submitModal: 'ثبت وقت مشاوره',
      closeBtn: 'بستن',
    },
    contact: {
      badge: 'تماس با ما',
      title: 'تماس با آژانس دیجیتال مارکتینگ صلصال',
      subtitle: 'ما اینجاییم تا به سوالات شما پاسخ دهیم و رشد آنلاین شما را سرعت ببخشیم.',
      addressLabel: 'آدرس دفتر',
      addressVal: 'کابل، پل سرخ، ملی مارکیت، دکان نمبر T50، افغانستان',
      phoneLabel: 'تلفن و واتس‌اپ',
      phoneVal: '+93 77 620 4626',
      emailLabel: 'ایمیل مستقیم',
      emailVal: 'info@hamrahtech.com',
      hoursLabel: 'ساعات کاری',
      hoursVal: 'شنبه تا پنجشنبه: ۸:۰۰ صبح تا ۵:۰۰ عصر',
      cardTitle: 'دریافت آنالیز رایگان رشد',
      cardGuarantee: 'تضمین پاسخگویی زیر ۱ ساعت',
      fullNamePlaceholder: 'مثلاً: مصطفی مددی',
      emailPlaceholder: 'مثلاً: info@hamrahtech.com',
      messagePlaceholder: 'اهداف پروژه و نیازهای دیجیتال مارکتینگ خود را شرح دهید...',
      submitRequest: 'ارسال درخواست مشاوره',
      trustBadge1: 'حفظ محرمانه بودن اطلاعات',
      trustBadge2: 'مشاوره اولیه کاملاً رایگان',
    },
    aboutUs: {
      badge: 'درباره ما',
      title: 'ساخته شده توسط یک صاحب کسب‌وکار که رشد را درک می‌کند.',
      desc1: 'ما درک می‌کنیم که شما به عنوان یک صاحب کسب‌وکار، فقط گزارش‌های فانتزی نمی‌خواهید، بلکه به دنبال رشد ملموس و واقعی هستید. به همین دلیل همراه تک تأسیس شد: تا فاصله بین اجرای فنی و درآمد واقعی را پر کند.',
      desc2: 'ما راه‌حل‌های کلیشه‌ای ارائه نمی‌دهیم. تیم ما دوشادوش شما کار می‌کند تا سیستم‌ها را طراحی، بازاریابی را بهینه‌سازی و وب‌سایت‌های پرقدرتی بسازد که ۲۴ ساعته به عنوان بهترین فروشنده شما کار کنند.',
      collabTitle: 'همکاری با ما',
      collabDesc: 'بیایید با هم چیزی خارق‌العاده خلق کنیم؛ از جلوه‌های بصری خیره‌کننده تا تجربه‌های تعاملی، مدرن و خلاقانه.',
      storyBadge: 'داستان ما',
      storyTitle: 'از یک تکنسین تا پیشگام صنعت',
      recognitionBadge: 'اعتبار و افتخارات',
      recognitionTitle: 'ما آژانس شریک رسمی گوگل هستیم',
      recognitionDesc: 'به عنوان شریک رسمی گوگل، همراه تک با بالاترین استانداردهای مدیریت کمپین، عملکرد تبلیغات، بازگشت سرمایه و مهندسی وب فعالیت می‌کند. گواهینامه‌های استراتژیک ما تضمین‌کننده مقیاس‌پذیری پایدار برندهاست.',
      servicesBadge: 'خدمات ما',
      servicesTitle: 'ما بهترین راهکارها را ارائه می‌دهیم',
      servicesDesc: 'دیجیتال مارکتینگ جامع، توسعه نرم‌افزار و بهینه‌سازی عملکرد متناسب با رشد سریع برند شما.',
    },
  },

  pus: {
    nav: {
      home: 'کورپاڼه',
      aboutUs: 'د همراه تک په اړه',
      services: 'زموږ خدمات',
      gallery: 'د محصولاتو ګالري',
      faqs: 'عامې پوښتنې',
      contact: 'اړیکه',
      freeConsultation: 'وړیا مشوره ترلاسه کړئ',
      enterpriseEng: 'د همراه تک ډیجیټل مارکیټینګ او د انډولیزۍ اژانس',
      getInTouch: 'اړیکه ونیسئ',
    },
    hero: {
      badgeAbout: 'د همراه تک اژانس',
      badgeTagline: 'د سافټویر انډولیزۍ او ډیجیټل مارکیټینګ ویاړلی اژانس',
      headlinePart1: 'د همراه تک مکمل ډیجیټل مارکیټینګ او د انډولیزۍ اژانس د',
      headlineHighlight: 'زیاتو لیدونکو او پلور لپاره',
      description1:
        'په همراه تک کې، موږ د ارقامو پر بنسټ مارکیټینګ، SEO، ګوګل او میټا اعلاناتو، سافټویر انډولیزۍ او عصري ویب پاڼو په واسطه ستاسو آنلاین بریا پیاوړې کوو.',
      description2: 'د ډیجیټل ودې لاره د مسلکي پوهې په دقت سره.',
      founderName: 'سیمین نعیمي',
      founderTitle: 'بنسټ ایښودونکی او د استراتژۍ مشره',
      bookConsultation: 'وړیا مشوره ترلاسه کړئ',
      partnerTitle: 'د همراه تک د ودې او ډاډ همکاري',
      partnerBadge: '۲۴/۷ ملاتړ',
      partnerDesc:
        'موږ ستاسو د ډیجیټل پرمختګ پوره مسؤلیت په غاړه اخلو ترڅو ریښتینی عاید زیات شي.',
      startDiscussion: 'خدمات وګورئ',
      directAccess: 'له رهبرۍ سره مستقیمه اړیکه',
      stat1: '۱۵۰+ فعالې او بریالۍ پروژې',
      stat2: 'د ۳۰۰٪ عاید پرمختګ نرخ',
      stat3: 'د ۳ ژبو ځايي ملاتړ',
      tickerItems: [
        'د همراه تک اژانس | HAMRAH TECH',
        'د ګوګل SEO او بېساري پرمختګ',
        'د ګوګل او میټا بېلابېل اعلانات',
        'د اختصاصي ویب پاڼو ډیزاین او پراختیا',
        'د برانډ پیژندنه او ګرافیک',
        'د ټولنیزو شبکو مدیریت',
        'په ۳ ژبو کې ملاتړ (انګلیسي | دري | پښتو)',
        '۱۵۰+ بریالۍ پروژې',
        'لوړ بیرته راستنیدنه (High ROI)',
      ],
    },
    story: {
      badge: 'مشرتابه او لیدلوری',
      title: 'د تجربې په واسطه لارښوونه، د استراتژۍ په واسطه پرمختګ',
      subtitle: 'په همراه تک اژانس کې، مشرتوب یوازې د پروژو اداره کول نه دي—بلکې د دوامداره ډیجیټل ودې لوري ته د سوداګریو لارښوونه ده.',
      desc1:
        'سیمین نعیمي په ډیجیټل مارکیټینګ، د برانډ په پراختیا او استراتژیکو اړیکو کې له یوې لسیزې ډېره تجربه لري. هغې د بېلابېلو برخو ټیمونه رهبری کړي او په بېلابېلو صنعتونو کې یې د څو چینلونو مارکیټینګ کمپاینونه په بریا ترسره کړي دي.',
      desc2:
        'په سویلې اسیا، منځني ختیځ او شاوخوا کې د بازار د شرایطو په ژور درک سره، سیمین همراه تک پرانیست ترڅو د تخنیکي اجرا او سوداگرریز پرمختګ ترمنځ واټن له منځه یوسي. د هغې مشرتوب ډاډ ورکوي چې هره پروژه د ارقامو پر بنسټ استراتژیو او لوړ ROI باندې ولاړه ده.',
      founderName: 'سیمین نعیمي',
      founderRole: 'بنسټ ایښودونکې او د استراتژۍ ریسه',
      coFounderName: 'علي فیاض',
      coFounderRole: 'رییس او د ټیکنالوژۍ مدیر',
      trustText: 'د لوړو او پیژندل شویو برانډونو باوري شریک',
      highlight1: '۲+ کاله تخصصي تجربه (له ۲۰۲۴ راهیسې)',
      highlight2: 'د ارقامو پر بنسټ هوښیاره استراتژي',
      highlight3: 'د بېلابېلو ټیمونو مسلکي مشرتوب',
    },
    servicesExplorer: {
      badge: 'زموږ خدمات',
      title: 'ستاسو د کاروبار ښه والی او بدلون',
      tabs: {
        brand: '۱. برانډینګ او ګرافیک',
        web: '۲. د ویب پاڼې ډیزاین او پراختیا',
        seo: '۳. تخصصي SEO او ګوګل',
        ads: '۴. د ګوګل او میټا اعلانات',
        social: '۵. د ټولنیزو شبکو تنظیم',
      },
      brandTitle: 'برانډینګ او ګرافیک',
      brandDesc:
        'د برانډ لپاره بشپړه نښه، د لوګو ډیزاین، او ښکلي انځورونه چې په ټولو ځایونو کې پیژندل کیږي.',
      brandBullets: ['لوګو ډیزاین', 'رنګونه او ټایپوګرافي', 'ټولنیز انځورونه', 'تبلیغاتي طرحې'],
      webTitle: 'د ویب پاڼې ډیزاین او پراختیا',
      webDesc:
        'خورا چټکې او عصري ویب پاڼې د لیدونکو په پیرودونکو بدلولو لپاره.',
      webBullets: ['برابر پورټلونه', 'آنلاین پلورنځی', 'له ۱ ثانیې کم وخت کې پرانیستل', 'غوره UI/UX'],
      seoTitle: 'تخصصي SEO او ګوګل',
      seoDesc:
        'د ګوګل په لومړیو پایلو کې ځای نیول او د معتبرو پیرودونکو جذب کول.',
      seoBullets: ['تخنیکي SEO', 'ځایي SEO او Maps', 'کلیدي کلمې', 'معتبر لینکونه'],
      adsTitle: 'د ګوګل او میټا اعلانات',
      adsDesc:
        'په ګوګل سرچ، فیسبوک او انسټاګرام کې موثر اعلانات.',
      adsBullets: ['د ګوګل سرچ او شاپینګ اعلانات', 'د فیسبوک او IG اعلانات', 'تست A/B', 'د لګښت ارزونه'],
      socialTitle: 'د ټولنیزو شبکو تنظیم',
      socialDesc:
        'د پام وړ محتوا او منظمو مهالوېشونو له لارې له پیرودونکو سره خبرې اترې.',
      socialBullets: ['محتوایي تقویم', 'لنډې انځوریزې ویډیوګانې', 'د لیدونکو زیاتوالی', 'د پرمختګ تحلیل'],
      readMore: 'زیات معلومات',
    },
    strategyGrid: {
      title: 'موږ استراتژیک پلان له زړه راښکونکې بڼې سره یوځای کوو',
      c1Title: 'بشپړ مسلکي ټیم',
      c1Desc: 'له ارګانیک SEO څخه تر آنلاین اعلاناتو، ټول کارونه موږ په خپله پر مخ وړو.',
      c2Title: 'پایلو ته پاملرنه',
      c2Desc: 'هر کمپاین له واقعی پایلو سره تړلی دی: زیات پیرودونکي او زیات عاید.',
      c3Title: 'ځانګړې ستراتیژي',
      c3Desc: 'هر پیرودونکی د خپلو موخو له مخې ځانګړی پلان ترلاسه کوي.',
      c4Title: 'شفاف راپورونه',
      c4Desc: 'تاسو تل خبر یاست چې ستاسو مالیات چیرته لګول کیږي.',
      c5Title: 'په بېلابېلو برخو کې تجربه',
      c5Desc: 'له سوداګریزو او آنلاین پلورنځیو سره د کار پراخه تجربه.',
      c6Title: 'بشپړ مسؤلیت',
      c6Desc: 'له پیل څخه تر پای پورې ټول بهیر زموږ تر څارنې لاندې دی.',
    },
    portfolio: {
      badge: 'نمونې او پروژې',
      title: 'له بېلابېلو مخکښو برانډونو سره همکاري',
      subtitle:
        'د همراه تک پروژې د عصري ویب پاڼو، باوري اعلاناتو او بریاوو څرګندونه کوي.',
      p1Title: 'د FinVista مشورې پورتل',
      p1Desc: 'مسلکي انټرنیټي بڼه له چټک ډیزاین او SEO سره.',
      p2Title: 'د Vibe Clothing آنلاین پلورنځی',
      p2Desc: 'د پلورنځي جوړول او د ګوګل شاپینګ اعلانات له ۳۴۰٪ زیاتوالي سره.',
      readMore: 'پروژه لیدل',
    },
    timeline: {
      badge: 'زموږ بهیر',
      titlePart1: 'د همراه تک ۵ پړاویزه',
      titleHighlight: 'د ودې بهیر',
      node1Year: '۱ پړاو',
      node1Title: 'بشپړه دیجیتل ارزونه',
      node1Desc: 'د سرعت، SEO او د سیالانو دقیقه څېړنه.',
      node2Year: '۲ پړاو',
      node2Title: 'د نقشې باسل',
      node2Desc: 'د کلیدي کلمو او د اعلاناتو بڼې منظمول.',
      node3Year: '۳ پړاو',
      node3Title: 'د ویب پاڼې او برانډ جوړول',
      node3Desc: 'د چټکې او ښکلې ویب پاڼې پرانیستل.',
      node4Year: '۴ پړاو',
      node4Title: 'د SEO او اعلاناتو پلي کول',
      node4Desc: 'د ګوګل او میټا د موثرو کمپاینونو پیل.',
      node5Year: '۵ پړاو',
      node5Title: 'د عاید لوړول',
      node5Desc: 'د نویو ارقامو لیدل او میاشتني عاید لوړول.',
    },
    stats: {
      p1: '۳۹۰+',
      p1Label: 'بشپړې شوې پروژې',
      p2: '۷۰٪',
      p2Label: 'دائمی پیرودونکي',
      p3: '۹۰٪',
      p3Label: 'د بریا کچه',
      p4: '۲+',
      p4Label: 'کاله تخصصي تجربه',
    },
    googleReviews: {
      title: 'د همراه تک ګوګل نظرونه',
      rating: '۵.۰ ★★★★★',
      reviewsCount: '۱۵ ګوګل ثبت شوي نظرونه',
      writeReview: 'نظر لیکل',
      r1Name: 'تري لیټل',
      r1Text: 'همراه تک خورا عالی دی! دوی زموږ لپاره باوري او مسلکي ویب پاڼه جوړه کړه.',
      r1Time: '۷ میاشتې مخکې',
      r2Name: 'ډونیت رانډل',
      r2Text: 'له همراه تک سره کار کولو زموږ عاید ۴.۵ چنده لوړ کړ!',
      r2Time: '۷ میاشتې مخکې',
      r3Name: 'الیسون ټرومبلي',
      r3Text: 'خورا غوره او پیاوړی ټیم! د ویب پاڼې او ګوګل اعلاناتو لپاره همراه تک وړاندیز کوم.',
      r3Time: '۷ میاشتې مخکې',
    },
    teamCarousel: {
      badge: 'د ټیم غړي',
      title: 'له تجربې ډک، د واقعی پایلو لپاره جوړ شوی',
      subtitle:
        'په همراه تک کې زموږ ټیم له داسې کسانو جوړ شوی چې د سوداګرۍ د پرمختګ لاره پیژني.',
      m1Name: 'مصطفی مددي',
      m1Role: 'بنسټ اېښودونکی',
      m2Name: 'علي رحیمي',
      m2Role: 'عمومي مدیر',
      m3Name: 'سینا کریمي',
      m3Role: 'د ټیم مدیر',
    },
    faqs: {
      badge: 'عامې پوښتنې',
      title: 'له عامو پوښتنو معلومات ترلاسه کړئ',
      categoryTab: 'عمومي پوښتنې',
      formResponseTime: 'د ځواب وخت: ۱ ساعت',
      formTitle: 'د خپلی پروژې په اړه معلومات ولیکئ',
      namePlaceholder: 'بشپړ نوم',
      emailPlaceholder: 'ستاسو برېښنالیک',
      messagePlaceholder: 'ستاسو پیغام',
      subscribeNews: 'د همراه تک په خبرپاڼه کې ګډون',
      submitNow: 'استول',
      q1: '۰۱. همراه تک کوم خدمات وړاندې کوي؟',
      a1: 'همراه تک د برانډینګ، ویب ډیزاین، SEO، ګوګل او میټا اعلاناتو ټول خدمات یوځای وړاندې کوي.',
      q2: '۰۲. ایا له هټیو او انټرنیټي پلورنځیو سره هم کار کوئ؟',
      a2: 'هو، موږ له انټرنیټي پلورنځیو، سیمه ایزو سوداګریو او نویو شرکتونو سره کار کوو.',
      q3: '۰۳. د SEO په خدماتو کې څه شامل دي؟',
      a3: 'تخنیکي سئو، د کلمو پیدا کول، د Google Maps ځایونه او معتبر لینکونه.',
      q4: '۰۴. اعلانات څنګه له سوداګرۍ سره مرسته کوي؟',
      a4: 'موږ خریداران په ګوګل کې هدف کوو او په فیسبوک او انسټاګرام کې یې پلور ته رسوو.',
      q5: '۰۵. ایا د ټولنیزو شبکو بشپړ تنظیم کول هم کوئ؟',
      a5: 'هو، د انځورونو، ویډیوګانو او د پاڼې میاشتنی پرمختګ ټول لوروو.',
      q6: '۰۶. ایا میاشتني راپورونه وړاندې کیږي؟',
      a6: 'هو، د لګښتونو او د نویو پیرودونکو واضح راپورونه وړاندې کیږي.',
      q7: '۰۷. ولې همراه تک وټاکو؟',
      a7: 'ځکه موږ د سافټویر مهندسي او ارقام پر بنسټ مارکیټینګ له ۲۴/۷ ملاتړ سره یوځای کوو.',
      q8: '۰۸. ایا وړیا مشوره شته؟',
      a8: 'هو، د "وړیا مشوره" له لارې خپل وخت وټاکئ.',
    },
    footer: {
      bio: 'موږ د ډیجیټل مارکیټینګ او د سافټویر مهندسۍ بشپړ اژانس یو چې له سوداګریو سره د حقیقي عاید په زیاتولو کې مرسته کوو.',
      quickLinks: 'چټکې اړیکې',
      allPages: 'ټولې پاڼې',
      socialMedia: 'ټولنیزې رسنۍ',
      officeAddress: 'د دفتر پته',
      officeVal: 'کابل، پل سرخ، ملي مارکېټ، T50 نمبر دوکان، افغانستان',
      support247: '۲۴/۷ ملاتړ',
      supportVal: '+93 77 620 4626 | info@hamrahtech.com',
      businessHours: 'کاري ساعتونه',
      hoursVal: 'شنبه تر پنجشنبې: ۸:۰۰ سهار تر ۵:۰۰ مازیګر',
      copyright: '© ټول حقونه خوندي دي | د همراه تک ډیجیټل مارکیټینګ اژانس',
    },
    modal: {
      title: 'د وړیا مشورې غوښتنه',
      subtitle: 'له سیمین نعیمي او د صلصال ډیجیټل مارکیټینګ ټیم سره غونډه.',
      serviceSelectLabel: 'اړین خدمت وټاکئ',
      optionSeo: 'د SEO او ګوګل بهینه‌سازي',
      optionAds: 'کلیکي اعلانات (ګوګل او میټا)',
      optionWeb: 'د ویب پاڼې ډیزاین او جوړول',
      optionBrand: 'برانډینګ او پیژندګلوي',
      optionSocial: 'د ټولنیزو پاڼو تنظيم',
      fullNameLabel: 'بشپړ نوم',
      emailLabel: 'برېښنالیک',
      phoneLabel: 'د تلیفون شمیره',
      messageLabel: 'د سوداګرۍ توضیحات / موخې',
      submitModal: 'غونډه وټاکئ',
      closeBtn: 'بندول',
    },
    contact: {
      badge: 'له موږ سره اړیکه',
      title: 'د صلصال ډیجیټل مارکیټینګ اژانس سره اړیکه',
      subtitle: 'موږ دلته یو ترڅو ستاسو پوښتنو ته ځواب ووایو.',
      addressLabel: 'د دفتر پته',
      addressVal: 'کابل، پل سرخ، ملي مارکېټ، T50 نمبر دوکان، افغانستان',
      phoneLabel: 'تلیفون او واټساپ',
      phoneVal: '+93 77 620 4626',
      emailLabel: 'مستقیم برېښنالیک',
      emailVal: 'info@hamrahtech.com',
      hoursLabel: 'کاري ساعتونه',
      hoursVal: 'شنبه تر پنجشنبې: ۸:۰۰ سهار تر ۵:۰۰ مازیګر',
      cardTitle: 'د وړیا ارزیابۍ غوښتنه',
      cardGuarantee: 'په ۱ ساعت کې د ځواب تضمین',
      fullNamePlaceholder: 'بیلګه: مصطفی مددي',
      emailPlaceholder: 'بیلګه: info@hamrahtech.com',
      messagePlaceholder: 'د پروژې اهداف ولیکئ...',
      submitRequest: 'استول',
      trustBadge1: 'د معلوماتو ۱۰۰٪ محرمیت',
      trustBadge2: 'بشپړه وړیا مشوره',
    },
    aboutUs: {
      badge: 'زموږ په اړه',
      title: 'د یو داسې سوداګر لخوا جوړ شوی چې په پرمختګ پوهیږي.',
      desc1: 'موږ پوهیږو چې د سوداګرۍ مالک په توګه، تاسو یوازې ښکلي راپورونه نه غواړئ—تاسو د سوداګرۍ ریښتینی پرمختګ غواړئ. له همدې امله همراه تک رامینځته شو ترڅو د تخنیکي کار او حقیقي عاید ترمینځ واټن له مینځه یوسي.',
      desc2: 'موږ تکراري حلونه نه وړاندې کوو. زموږ ټیم ستاسو سره اوږه په اوږه کار کوي ترڅو مالي او تخنیکي سیسټمونه ډیزاین، اعلانات غوره، او داسې ویب پاڼې جوړې کړي چې ستاسو د غوره پلورونکي په توګه کار وکړي.',
      collabTitle: 'له موږ سره همکاري وکړئ',
      collabDesc: 'راځئ چې په ګډه یو په زړه پورې کار ترسره کړو؛ له عالي لید څخه تر متقابلو، عصري او نوښتي تجربو پورې.',
      storyBadge: 'زموږ کیسه',
      storyTitle: 'له تخنیکر څخه د صنعت تر رهبر پورې',
      recognitionBadge: 'ویاړونه',
      recognitionTitle: 'موږ د ګوګل شریک آژانس یو',
      recognitionDesc: 'د ګوګل د رسمي شریک په توګه، همراه تک د کمپاینونو د مدیریت، اعلاناتو او ویب انجنیری لوړ معیارونه مراعات کوي.',
      servicesBadge: 'زموږ خدمتونه',
      servicesTitle: 'موږ غوره حل لارې وړاندې کوو',
      servicesDesc: 'جامع ډیجیټل مارکیټینګ، د سافټویر پراختیا او د فعالیت ښه کول د ګړندۍ ودې لپاره.',
    },
  },
};
