export const profileData = {
  name: 'Иванов Максим Юрьевич',

  description:
    'Frontend-разработчик с более чем четырьмя годами опыта. Разрабатываю и поддерживаю веб-сервисы, работаю с React, TypeScript и современным frontend-стеком. Есть опыт работы с Node.js, NestJS, REST API, WebSocket и PostgreSQL. Интересуюсь архитектурой приложений, производительностью и качеством кода.',

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
      company: 'Артена',
      position: 'Frontend Developer',
      startedAt: new Date('2022-01-01'),
      endedAt: new Date('2024-01-01'),
      achievements:
        'Разработка и поддержка веб-сервисов, исправление ошибок, создание интерфейсных компонентов, работа с каталогом и контентом, SEO и интеграциями.',
    },
    {
      company: 'GlobexIT',
      position: 'Frontend Developer',
      startedAt: new Date('2024-01-01'),
      endedAt: null,
      achievements:
        'Разработка и доработка функциональности веб-сервисов, исправление ошибок, работа с Websoft HCM, Bitrix и React, добавление и корректировка контента, обработка технических обращений пользователей.',
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
  ],
};
