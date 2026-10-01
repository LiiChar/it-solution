export const profileData = {
  name: 'Иванов Максим Юрьевич',

  description:
    `Frontend-разработчик с опытом коммерческой разработки и основным фокусом на React и TypeScript.

    Разрабатываю и дорабатываю веб-приложения и пользовательские интерфейсы, работаю с состоянием приложения, REST API и интеграцией frontend с backend-сервисами.

    Основной стек: React, TypeScript, JavaScript, Next.js, Zustand, Redux, Tailwind CSS, HTML5, CSS3. Есть опыт работы с REST API, WebSocket, Git, SQL, PostgreSQL и SQLite.

    Дополнительно занимаюсь backend-разработкой на Node.js (NestJS, Express) и Python (FastAPI, Django).

    В коммерческой разработке занимался разработкой и доработкой функционала, исправлением ошибок и сопровождением веб-сервисов на React, Bitrix и Websoft HCM.

    Интересуюсь архитектурой приложений, производительностью и качеством кода. Развиваюсь в направлении Frontend / Fullstack-разработки.`,

  githubUrl: 'https://github.com/LiiChar',
  linkedinUrl: null,

  skills: [
    'React',
    'TypeScript',
    'JavaScript',
    'Next.js',
    'Zustand',
    'Tailwind CSS',
    'HTML5',
    'CSS3',
    'Node.js',
    'NestJS',
    'Express',
    'Python',
    'FastAPI',
    'Django',
    'REST API',
    'WebSocket',
    'PostgreSQL',
    'SQLite',
    'Git',
    'Docker',
  ],

  experiences: [
    {
      company: 'ООО "Артена"',
      position: 'Разработчик',
      startedAt: new Date('2024-07-015'),
      endedAt: new Date('2025-06-01'),
      achievements:
        `Разработка и сопровождение клиентской части веб-сайтов и веб-приложений.
        — Разработка и доработка функционала клиентской части веб-приложений.
        — Создание и изменение интерфейсов и отдельных функциональных блоков.
        — Исправление ошибок и устранение проблем в существующем коде.
        — Поддержка и развитие действующих веб-проектов.
        — Работа с HTML, CSS и JavaScript.
        — Оптимизация и улучшение стабильности веб-приложений.`,
    },
    {
      company: 'GlobexIT',
      position: 'Web-разработчик',
      startedAt: new Date('2025-10-25'),
      endedAt: new Date('2026-05-17'),
      achievements:
        `Разработка, доработка и сопровождение веб-сервисов на базе React, Bitrix и Websoft HCM.
        — Разработка и изменение функционала веб-приложений и пользовательских интерфейсов.
        — Исправление ошибок и устранение технических проблем в существующих сервисах.
        — Работа с JavaScript и SQL.
        — Интеграция и взаимодействие с внутренними API сервисов.
        — Работа со структурой и содержимым веб-сервисов.
        — Анализ и устранение проблем по заявкам пользователей.
        — Техническая поддержка и сопровождение корпоративных веб-систем.`,
    },
  ],

  projects: [
    {
      name: 'Langi',
      description:
        'Приложение для изучения языков через чтение книг. Tauri + React + TypeScript + Rust. Реализованы чтение книг, перевод слов, локальный словарь, система обучения и TTS.',
      url: 'https://github.com/LiiChar/langi',
    },
    {
      name: 'Spec',
      description:
        'Приложение для отслеживания активности пользователя на Windows. Rust + Dioxus + SQLite, сбор информации об активных приложениях и статистика активности.',
      url: 'https://github.com/LiiChar/Spec',
    },
    {
      name: "Profile",
      description: "Сайт визитка с проектами и постами",
      url: 'https://ivanov-maksim.vercel.app/',
    }
  ],
};
