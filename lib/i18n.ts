export type Locale = "uz" | "en" | "ru";

export type TranslationMessages = {
  siteTitle: string;
  nav: {
    home: string;
    projects: string;
    contact: string;
    mainLabel: string;
    footerLabel: string;
    openMenu: string;
    closeMenu: string;
  };
  language: {
    label: string;
    options: Record<Locale, string>;
  };
  theme: {
    switchToLight: string;
    switchToDark: string;
  };
  buttons: {
    viewProjects: string;
    contactMe: string;
    github: string;
    liveDemo: string;
    search: string;
    filterAll: string;
    filterFrontend: string;
    submit: string;
  };
  hero: {
    availability: string;
    role: string;
    focusAriaLabel: string;
    description: string;
    focusLabel: string;
    focusTitle: string;
    focusAreas: string[];
    educationLabel: string;
    education: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    text: string;
    experienceLabel: string;
    experienceHeading: string;
    experienceText: string;
    educationLabel: string;
    educationCourse: string;
    educationText: string;
  };
  skills: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    categories: {
      frontend: string;
      stateData: string;
      tools: string;
    };
  };
  projectsPage: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    screenshotAlt: string;
    technologiesLabel: string;
    placeholder: string;
  };
  projectCards: {
    novalearn: {
      type: string;
      description: string;
    };
    twistflix: {
      type: string;
      description: string;
    };
  };
  contactPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    placeholders: {
      name: string;
      email: string;
      subject: string;
      message: string;
    };
    links: {
      email: string;
      phone: string;
      github: string;
    };
    success: string;
    error: string;
    validation: string;
    sending: string;
  };
  footer: {
    copyright: string;
    backToTop: string;
    githubLabel: string;
    emailLabel: string;
  };
  statusPages: {
    notFound: string;
    notFoundText: string;
    returnHome: string;
    error: string;
    errorTitle: string;
    errorText: string;
    tryAgain: string;
    goHome: string;
  };
};

export const languages: { code: Locale; label: string; flag: string }[] = [
  { code: "uz", label: "O'zbek", flag: "🇺🇿" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
];

export const messages = {
  uz: {
    siteTitle: "Sardorbek Ismatov | Junior Frontend Developer",
    nav: {
      home: "Bosh sahifa",
      projects: "Loyihalar",
      contact: "Bog‘lanish",
      mainLabel: "Asosiy navigatsiya",
      footerLabel: "Pastki navigatsiya",
      openMenu: "Menyuni ochish",
      closeMenu: "Menyuni yopish",
    },
    language: {
      label: "Tilni tanlang",
      options: { uz: "🇺🇿 O'zbek", en: "🇬🇧 English", ru: "🇷🇺 Русский" },
    },
    theme: {
      switchToLight: "Yorug‘ mavzuga o‘tish",
      switchToDark: "Qorong‘i mavzuga o‘tish",
    },
    buttons: {
      viewProjects: "Loyihalarni ko‘rish",
      contactMe: "Bog‘lanish",
      github: "GitHub",
      liveDemo: "Demo versiya",
      search: "Loyihalarni qidirish",
      filterAll: "Barcha loyihalar",
      filterFrontend: "Frontend",
      submit: "Xabarni yuborish",
    },
    hero: {
      availability: "Birinchi Frontend Developer ishimni izlayapman",
      role: "Junior Frontend Developer",
      focusAriaLabel: "Kasbiy yo‘nalish",
      description:
        "React, Next.js, JavaScript va TypeScript bo‘yicha mustahkam bilimga ega Junior Frontend Developer. Najot Ta'lim’da Frontend React kursini tamomlaganman. Shaxsiy veb-ilovalar yaratish, REST API bilan ishlash, autentifikatsiya va moslashuvchan interfeyslar ishlab chiqish tajribam bor. Professional jamoaga qo‘shilib, haqiqiy loyihalarga hissa qo‘shish va mahoratimni oshirishga intilaman.",
      focusLabel: "Hozirgi yo‘nalishim",
      focusTitle: "Amaliy frontend ko‘nikmalarini rivojlantirish",
      focusAreas: ["React", "Next.js", "TypeScript", "Moslashuvchan interfeyslar"],
      educationLabel: "Ta’lim",
      education: "Najot Ta'lim · Frontend React kursi",
    },
    about: {
      eyebrow: "Men haqimda",
      heading: "Frontend dasturchi sifatida rivojlanmoqdaman",
      text:
        "React va Next.js yordamida moslashuvchan interfeyslar yaratishga qiziqaman. Shaxsiy loyihalarim va Najot Ta'lim’dagi Frontend React kursi davomida API, autentifikatsiya va interaktiv foydalanuvchi interfeyslari bilan ishlashni o‘rgandim. Tajribali jamoada o‘rganib, haqiqiy loyihalarga hissa qo‘shishga tayyorman.",
      experienceLabel: "Amaliy tajriba",
      experienceHeading: "Shaxsiy loyihalar va amaliy o‘rganish",
      experienceText:
        "Hozircha dasturchi sifatidagi tajribam shaxsiy loyihalar orqali orttirilgan; professional ish tajribam yo‘q. React va Next.js’ni o‘rganish jarayonida moslashuvchan interfeyslar yaratish, API’larni ulash va autentifikatsiyani joriy etishni mashq qildim.",
      educationLabel: "Ta’lim",
      educationCourse: "Frontend React kursi",
      educationText:
        "Najot Ta'lim’da Frontend React kursini tamomlab, zamonaviy frontend dasturlash asoslarini o‘rgandim.",
    },
    skills: {
      eyebrow: "Ko‘nikmalar",
      heading: "Men foydalanadigan texnologiyalar",
      subtitle: "Loyihalarda o‘rganayotgan va qo‘llayotgan asosiy texnologiyalar hamda vositalar.",
      categories: {
        frontend: "Frontend",
        stateData: "Holat boshqaruvi va ma’lumotlar",
        tools: "Dasturlash vositalari",
      },
    },
    projectsPage: {
      eyebrow: "Loyihalar",
      heading: "Tanlangan loyihalar",
      subtitle: "Frontend bo‘yicha amaliy tajribamni ko‘rsatuvchi shaxsiy veb-ilovalar.",
      screenshotAlt: "loyihasi skrinshoti",
      technologiesLabel: "texnologiyalari",
      placeholder: "Qidiruvingizga mos loyiha topilmadi.",
    },
    projectCards: {
      novalearn: {
        type: "Onlayn ta’lim platformasi",
        description:
          "Email va parol orqali kirish, Google autentifikatsiyasi, kurslar ro‘yxati, kurs tafsilotlari sahifalari va shaxsiy kabinetga ega onlayn ta’lim platformasi. Kurslarga yozilish va yozilgan kurslarni kabinetda ko‘rsatish hozircha amalga oshirilmagan.",
      },
      twistflix: {
        type: "Seriallarni kashf etish platformasi",
        description:
          "Seriallarni ko‘rish va qidirish, janr bo‘yicha saralash hamda tafsilotlar, reytinglar va aktyorlar tarkibini ko‘rish imkonini beruvchi ilova. Sevimlilar LocalStorage’da saqlanadi; ilovada yorug‘ va qorong‘i mavzular hamda API xatolarida zaxira ma’lumotlar mavjud.",
      },
    },
    contactPage: {
      eyebrow: "Bog‘lanish",
      title: "Bog‘lanib qolaylik",
      subtitle:
        "Birinchi Junior Frontend Developer lavozimimni izlayapman. Taklif va suhbat uchun mamnuniyat bilan bog‘lanishingiz mumkin.",
      name: "Ism",
      email: "Elektron pochta",
      subject: "Mavzu",
      message: "Xabar",
      placeholders: {
        name: "Ismingiz",
        email: "Elektron pochta manzilingiz",
        subject: "Xabar mavzusi",
        message: "Xabaringizni shu yerga yozing",
      },
      links: { email: "Elektron pochta", phone: "Telefon", github: "GitHub" },
      success: "Rahmat! Xabaringiz muvaffaqiyatli yuborildi.",
      error: "Xabarni yuborib bo‘lmadi. Birozdan so‘ng qayta urinib ko‘ring.",
      validation: "Barcha maydonlarni to‘ldiring va elektron pochta manzilingizni tekshiring.",
      sending: "Yuborilmoqda...",
    },
    footer: {
      copyright: "© 2026 Sardorbek Ismatov · Junior Frontend Developer",
      backToTop: "Sahifa boshiga",
      githubLabel: "GitHub profil",
      emailLabel: "Sardorbekka xat yozish",
    },
    statusPages: {
      notFound: "Sahifa topilmadi",
      notFoundText: "Siz izlayotgan sahifa mavjud emas yoki ko‘chirilgan.",
      returnHome: "Bosh sahifaga qaytish",
      error: "Xatolik",
      errorTitle: "Nimadir noto‘g‘ri ketdi",
      errorText: "Sahifani yuklashda xatolik yuz berdi.",
      tryAgain: "Qayta urinish",
      goHome: "Bosh sahifaga o‘tish",
    },
  },
  en: {
    siteTitle: "Sardorbek Ismatov | Junior Frontend Developer",
    nav: {
      home: "Home",
      projects: "Projects",
      contact: "Contact",
      mainLabel: "Main navigation",
      footerLabel: "Footer navigation",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    language: {
      label: "Select language",
      options: { uz: "🇺🇿 O'zbek", en: "🇬🇧 English", ru: "🇷🇺 Русский" },
    },
    theme: {
      switchToLight: "Switch to light theme",
      switchToDark: "Switch to dark theme",
    },
    buttons: {
      viewProjects: "View projects",
      contactMe: "Get in touch",
      github: "GitHub",
      liveDemo: "Live demo",
      search: "Search projects",
      filterAll: "All projects",
      filterFrontend: "Frontend",
      submit: "Send Message",
    },
    hero: {
      availability: "Seeking my first Frontend Developer role",
      role: "Junior Frontend Developer",
      focusAriaLabel: "Professional focus",
      description:
        "Junior Frontend Developer with a strong foundation in React, Next.js, JavaScript, and TypeScript. Completed Frontend React training at Najot Ta'lim. Experienced in building personal web applications, integrating REST APIs, implementing authentication, and developing responsive user interfaces. Eager to join a professional development team, contribute to real-world projects, and continuously improve my skills.",
      focusLabel: "Current focus",
      focusTitle: "Developing practical frontend skills",
      focusAreas: ["React", "Next.js", "TypeScript", "Responsive interfaces"],
      educationLabel: "Education",
      education: "Najot Ta'lim · Frontend React Course",
    },
    about: {
      eyebrow: "About me",
      heading: "Growing as a frontend developer",
      text:
        "I enjoy building responsive interfaces with React and Next.js. Through personal projects and Frontend React training at Najot Ta'lim, I’ve practiced working with APIs, authentication, and interactive user interfaces. I’m ready to learn from an experienced team and contribute to real-world projects.",
      experienceLabel: "Practical Experience",
      experienceHeading: "Personal projects and hands-on learning",
      experienceText:
        "My experience so far comes from personal projects; I have not held a professional developer role. While learning React and Next.js, I have practiced building responsive interfaces, integrating APIs, and implementing authentication.",
      educationLabel: "Education",
      educationCourse: "Frontend React Course",
      educationText:
        "Completed Frontend React training at Najot Ta'lim, building a foundation in modern frontend development.",
    },
    skills: {
      eyebrow: "Skills",
      heading: "Technologies I work with",
      subtitle: "Core technologies and tools I’ve been learning and using in project work.",
      categories: {
        frontend: "Frontend",
        stateData: "State Management & Data",
        tools: "Tools",
      },
    },
    projectsPage: {
      eyebrow: "Projects",
      heading: "Selected Projects",
      subtitle: "Personal web applications that reflect my hands-on frontend practice.",
      screenshotAlt: "project screenshot",
      technologiesLabel: "technologies",
      placeholder: "No projects match your current search.",
    },
    projectCards: {
      novalearn: {
        type: "Online learning platform",
        description:
          "An online learning platform with email and password sign-in, Google authentication, course listings, detailed course pages, and a personal dashboard. Course enrollment and showing enrolled courses in the dashboard are not implemented.",
      },
      twistflix: {
        type: "TV show discovery",
        description:
          "Browse and search TV shows, filter by genre, and explore show details, ratings, and cast. Favourites are saved in LocalStorage, with dark and light themes and fallback data for API errors.",
      },
    },
    contactPage: {
      eyebrow: "Contact",
      title: "Let’s connect",
      subtitle:
        "I’m looking for my first Junior Frontend Developer opportunity and would welcome a conversation.",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      placeholders: {
        name: "Your name",
        email: "Your email address",
        subject: "Message subject",
        message: "Write your message here",
      },
      links: { email: "Email", phone: "Phone", github: "GitHub" },
      success: "Thanks! Your message has been sent.",
      error: "Your message could not be sent. Please try again shortly.",
      validation: "Complete all fields and check that your email address is valid.",
      sending: "Sending...",
    },
    footer: {
      copyright: "© 2026 Sardorbek Ismatov · Junior Frontend Developer",
      backToTop: "Back to top",
      githubLabel: "GitHub profile",
      emailLabel: "Email Sardorbek",
    },
    statusPages: {
      notFound: "Page not found",
      notFoundText: "The page you’re looking for is unavailable or may have moved.",
      returnHome: "Return home",
      error: "Error",
      errorTitle: "Something went wrong",
      errorText: "An error occurred while loading this page.",
      tryAgain: "Try again",
      goHome: "Go home",
    },
  },
  ru: {
    siteTitle: "Sardorbek Ismatov | Junior Frontend Developer",
    nav: {
      home: "Главная",
      projects: "Проекты",
      contact: "Контакты",
      mainLabel: "Основная навигация",
      footerLabel: "Навигация в подвале",
      openMenu: "Открыть меню",
      closeMenu: "Закрыть меню",
    },
    language: {
      label: "Выбрать язык",
      options: { uz: "🇺🇿 O'zbek", en: "🇬🇧 English", ru: "🇷🇺 Русский" },
    },
    theme: {
      switchToLight: "Включить светлую тему",
      switchToDark: "Включить тёмную тему",
    },
    buttons: {
      viewProjects: "Смотреть проекты",
      contactMe: "Связаться",
      github: "GitHub",
      liveDemo: "Демо",
      search: "Поиск проектов",
      filterAll: "Все проекты",
      filterFrontend: "Frontend",
      submit: "Отправить сообщение",
    },
    hero: {
      availability: "Ищу первую работу Frontend Developer",
      role: "Junior Frontend Developer",
      focusAriaLabel: "Профессиональное направление",
      description:
        "Начинающий Frontend Developer с хорошей базой по React, Next.js, JavaScript и TypeScript. Прошёл курс Frontend React в Najot Ta'lim. Создаю личные веб-приложения, работаю с REST API, реализую аутентификацию и адаптивные интерфейсы. Хочу присоединиться к команде разработчиков, участвовать в настоящих проектах и постоянно развивать навыки.",
      focusLabel: "Сейчас изучаю",
      focusTitle: "Развиваю практические навыки frontend-разработки",
      focusAreas: ["React", "Next.js", "TypeScript", "Адаптивные интерфейсы"],
      educationLabel: "Образование",
      education: "Najot Ta'lim · Курс Frontend React",
    },
    about: {
      eyebrow: "Обо мне",
      heading: "Развиваюсь во frontend-разработке",
      text:
        "Мне интересно создавать адаптивные интерфейсы с React и Next.js. В личных проектах и на курсе Frontend React в Najot Ta'lim я практиковался в работе с API, аутентификацией и интерактивными интерфейсами. Готов учиться у опытной команды и вносить вклад в реальные проекты.",
      experienceLabel: "Практический опыт",
      experienceHeading: "Личные проекты и практика",
      experienceText:
        "Мой опыт пока основан на личных проектах; профессионального опыта работы разработчиком у меня нет. Изучая React и Next.js, я практиковался в создании адаптивных интерфейсов, подключении API и реализации аутентификации.",
      educationLabel: "Образование",
      educationCourse: "Курс Frontend React",
      educationText:
        "Прошёл курс Frontend React в Najot Ta'lim и получил базовые знания современной frontend-разработки.",
    },
    skills: {
      eyebrow: "Навыки",
      heading: "Технологии, с которыми я работаю",
      subtitle: "Основные технологии и инструменты, которые я изучаю и применяю в проектах.",
      categories: {
        frontend: "Frontend",
        stateData: "Управление состоянием и данные",
        tools: "Инструменты",
      },
    },
    projectsPage: {
      eyebrow: "Проекты",
      heading: "Избранные проекты",
      subtitle: "Личные веб-приложения, демонстрирующие мой практический опыт во frontend-разработке.",
      screenshotAlt: "скриншот проекта",
      technologiesLabel: "технологии",
      placeholder: "По вашему запросу проекты не найдены.",
    },
    projectCards: {
      novalearn: {
        type: "Платформа онлайн-обучения",
        description:
          "Платформа онлайн-обучения с входом по email и паролю, авторизацией через Google, списком курсов, страницами с подробной информацией и личным кабинетом. Запись на курсы и отображение записанных курсов в кабинете пока не реализованы.",
      },
      twistflix: {
        type: "Поиск сериалов",
        description:
          "Просмотр и поиск сериалов, фильтрация по жанрам, подробная информация, рейтинги и актёрский состав. Избранное сохраняется в LocalStorage; предусмотрены светлая и тёмная темы, а также резервные данные на случай ошибки API.",
      },
    },
    contactPage: {
      eyebrow: "Контакты",
      title: "Буду рад знакомству",
      subtitle:
        "Ищу первую возможность начать карьеру Junior Frontend Developer и буду рад пообщаться.",
      name: "Имя",
      email: "Электронная почта",
      subject: "Тема",
      message: "Сообщение",
      placeholders: {
        name: "Ваше имя",
        email: "Ваш адрес электронной почты",
        subject: "Тема сообщения",
        message: "Напишите сообщение",
      },
      links: { email: "Электронная почта", phone: "Телефон", github: "GitHub" },
      success: "Спасибо! Ваше сообщение отправлено.",
      error: "Не удалось отправить сообщение. Попробуйте ещё раз позже.",
      validation: "Заполните все поля и проверьте правильность адреса электронной почты.",
      sending: "Отправка...",
    },
    footer: {
      copyright: "© 2026 Sardorbek Ismatov · Junior Frontend Developer",
      backToTop: "Наверх",
      githubLabel: "Профиль GitHub",
      emailLabel: "Написать Sardorbek",
    },
    statusPages: {
      notFound: "Страница не найдена",
      notFoundText: "Страница недоступна или была перемещена.",
      returnHome: "На главную",
      error: "Ошибка",
      errorTitle: "Что-то пошло не так",
      errorText: "При загрузке страницы произошла ошибка.",
      tryAgain: "Повторить",
      goHome: "Перейти на главную",
    },
  },
} satisfies Record<Locale, TranslationMessages>;

export const defaultLocale: Locale = "uz";

export function getLocaleFromStorage(): Locale {
  if (typeof window === "undefined") return defaultLocale;
  const stored = window.localStorage.getItem("portfolio-locale");
  return stored === "uz" || stored === "en" || stored === "ru" ? stored : defaultLocale;
}
