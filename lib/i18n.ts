export type Locale = "en" | "uz" | "ru";

export type TranslationMessages = {
  nav: {
    home: string;
    projects: string;
    contact: string;
  };
  buttons: {
    viewProjects: string;
    contactMe: string;
    downloadCv: string;
    github: string;
    liveDemo: string;
    search: string;
    filterAll: string;
    filterFrontend: string;
    filterFullStack: string;
    filterUi: string;
    submit: string;
  };
  hero: {
    intro: string;
    name: string;
    title: string;
    description: string;
  };
  about: {
    title: string;
    text: string;
    stat1: string;
    stat2: string;
    stat3: string;
  };
  skills: {
    title: string;
    subtitle: string;
  };
  projectsPage: {
    title: string;
    subtitle: string;
    placeholder: string;
  };
  contactPage: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    success: string;
    error: string;
    validation: string;
    sending: string;
  };
  footer: {
    copyright: string;
  };
};

export const languages = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "uz", label: "O'zbek", flag: "🇺🇿" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
] as const;

export const messages: Record<Locale, TranslationMessages> = {
  en: {
    nav: { home: "Home", projects: "Projects", contact: "Contact" },
    buttons: {
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      downloadCv: "Download CV",
      github: "GitHub",
      liveDemo: "Live Demo",
      search: "Search projects",
      filterAll: "All",
      filterFrontend: "Frontend",
      filterFullStack: "Full Stack",
      filterUi: "UI",
      submit: "Send Message",
    },
    hero: {
      intro: "Hello, I’m",
      name: "Sardor Ismatov",
      title: "Frontend Developer",
      description:
        "I build immersive, performant digital experiences with a sharp eye for motion, storytelling, and user delight.",
    },
    about: {
      title: "About Me",
      text:
        "I’m a frontend engineer who blends product thinking, design sensibility, and modern engineering to create interfaces that feel premium from the first interaction.",
      stat1: "Projects Delivered",
      stat2: "Technologies",
      stat3: "Years Learning",
    },
    skills: {
      title: "Core Skills",
      subtitle: "Crafting polished interfaces with modern tools and thoughtful motion.",
    },
    projectsPage: {
      title: "Selected Work",
      subtitle: "A curated collection of product-led builds and UI systems.",
      placeholder: "No projects match your current search.",
    },
    contactPage: {
      title: "Let’s build something memorable",
      subtitle: "Open for freelance work, product design collaborations, and full-time opportunities.",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      success: "Thanks! Your message is on its way.",
      error: "Please make sure all fields are filled correctly.",
      validation: "Please complete the form before sending.",
      sending: "Sending...",
    },
    footer: { copyright: "© 2026 Sardorbek Ismatov" },
  },
  uz: {
    nav: { home: "Bosh sahifa", projects: "Loyihalar", contact: "Aloqa" },
    buttons: {
      viewProjects: "Loyihalarni ko’rish",
      contactMe: "Bog‘lanish",
      downloadCv: "CV yuklab olish",
      github: "GitHub",
      liveDemo: "Jonli demo",
      search: "Loyihalarni qidirish",
      filterAll: "Hammasi",
      filterFrontend: "Frontend",
      filterFullStack: "To‘liq stack",
      filterUi: "UI",
      submit: "Xabar yuborish",
    },
    hero: {
      intro: "Salom, men",
      name: "Sardor Ismatov",
      title: "Frontend dasturchi",
      description:
        "Men har bir interaktiv tajribani tez, yorqin va foydalanuvchi uchun yoqimli qilish uchun zamonaviy texnologiyalarni ishlataman.",
    },
    about: {
      title: "Men haqimda",
      text:
        "Men frontend muhandisiman; dizayn hissi, mahsulot fikri va zamonaviy dasturlashni birlashtirib, birinchi aloqada premium his qilinadigan interfeyslar yarataman.",
      stat1: "Tayyor loyihalar",
      stat2: "Texnologiyalar",
      stat3: "O‘rganish yillari",
    },
    skills: {
      title: "Asosiy ko‘nikmalar",
      subtitle: "Zamonaviy asboblar va harakatli animatsiyalar bilan ajoyib interfeyslar yarataman.",
    },
    projectsPage: {
      title: "Tanlangan ishlar",
      subtitle: "Mahsulotga yo‘naltirilgan loyihalar va UI tizimlar to‘plami.",
      placeholder: "Hozirgi qidiruvga hech qanday loyiha mos kelmadi.",
    },
    contactPage: {
      title: "Birgalikda esda qolarli bir narsa yarataylik",
      subtitle: "Frilanser, mahsulot hamkorligi yoki to‘liq vaqtli imkoniyatlar uchun ochiqman.",
      name: "Ism",
      email: "Email",
      subject: "Mavzu",
      message: "Xabar",
      success: "Rahmat! Xabaringiz yuborildi.",
      error: "Iltimos, barcha maydonlarni to‘g‘ri to‘ldiring.",
      validation: "Iltimos, xabar yuborishdan oldin formani to‘liq to‘ldiring.",
      sending: "Yuborilmoqda...",
    },
    footer: { copyright: "© 2026 Sardorbek Ismatov" },
  },
  ru: {
    nav: { home: "Главная", projects: "Проекты", contact: "Контакты" },
    buttons: {
      viewProjects: "Смотреть проекты",
      contactMe: "Связаться",
      downloadCv: "Скачать CV",
      github: "GitHub",
      liveDemo: "Демо",
      search: "Поиск проектов",
      filterAll: "Все",
      filterFrontend: "Фронтенд",
      filterFullStack: "Полный стек",
      filterUi: "UI",
      submit: "Отправить",
    },
    hero: {
      intro: "Привет, я",
      name: "Сардор Исматов",
      title: "Frontend-разработчик",
      description:
        "Создаю быстрые, выразительные и премиальные цифровые интерфейсы с акцентом на анимацию и удобство использования.",
    },
    about: {
      title: "Обо мне",
      text:
        "Я фронтенд-инженер, который объединяет продуктовую логику, дизайн и современные технологии для создания интерфейсов с премиальным впечатлением с первого касания.",
      stat1: "Завершённых проектов",
      stat2: "Технологий",
      stat3: "Лет обучения",
    },
    skills: {
      title: "Ключевые навыки",
      subtitle: "Создаю аккуратные интерфейсы с современными инструментами и продуманной анимацией.",
    },
    projectsPage: {
      title: "Избранные работы",
      subtitle: "Подборка продуктовых интерфейсов и UI-систем.",
      placeholder: "По вашему запросу ничего не найдено.",
    },
    contactPage: {
      title: "Давайте создадим что-то запоминающееся",
      subtitle: "Открыт для фриланса, продуктовых коллабораций и постоянной работы.",
      name: "Имя",
      email: "Email",
      subject: "Тема",
      message: "Сообщение",
      success: "Спасибо! Сообщение отправлено.",
      error: "Проверьте, пожалуйста, все поля.",
      validation: "Пожалуйста, заполните форму перед отправкой.",
      sending: "Отправка...",
    },
    footer: { copyright: "© 2026 Sardorbek Ismatov" },
  },
};

export function getLocaleFromStorage(defaultLocale: Locale = "en") {
  if (typeof window === "undefined") return defaultLocale;
  const stored = window.localStorage.getItem("portfolio-locale") as Locale | null;
  return stored === "en" || stored === "uz" || stored === "ru" ? stored : defaultLocale;
}
