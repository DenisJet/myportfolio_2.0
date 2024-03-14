export const projectsRu = [
  {
    id: '6',
    link: '/ru/portfolio/todo',
    title: 'My ToDo App',
    descriptionCard: 'Фулл стек приложение для составления списка задач.',
    year: 2024,
    iconsSrc: [
      '/icons/icon-typescript.svg',
      '/icons/icon-next.svg',
      '/icons/icons-nest.svg',
      '/icons/icon-mongo.svg',
      '/icons/icon-docker.svg',
    ],
    imageSrc: '/projects/mytodo.png',
    description:
      'Реализована функциональность добавления новой задачи с указанием названия и описания. Также можно изменять и удалять существующие задачи. Проект развернут на сервере из контейнера Docker (вы можете добавить пару задач для меня, но не спешите сервер может отвечать с задержкой до нескольких секунд).',
    uses: 'Nest JS, Next JS, MongoDB, TypeScript, Docker',
    addLinks: [
      'http://5.35.89.103:3000/',
      'https://github.com/DenisJet/mytodo-client',
      'https://github.com/DenisJet/mytodo-server',
    ],
  },
  {
    id: '5',
    link: '/ru/portfolio/live-chat',
    title: 'On-Line Chat',
    descriptionCard: 'Он-лайн чат',
    year: 2023,
    iconsSrc: [
      '/icons/icon-typescript.svg',
      '/icons/icons-nest.svg',
      '/icons/icon-postgresql.svg',
      '/icons/socket-icon.svg',
    ],
    imageSrc: '/projects/online-chat.png',
    description:
      'Небольшой проект, он-лайн чат. Создан для знакомства с технологией WebSocket. Проект развернут на render.com',
    uses: 'Nest JS, PostgreSQL, Prisma, WebSockets',
    addLinks: [
      'https://online-chat-c8eu.onrender.com/chat',
      'https://online-chat-c8eu.onrender.com/api/chat',
      'https://github.com/DenisJet/live-chat-server',
    ],
  },
  {
    id: '4',
    link: '/ru/portfolio/github-search',
    title: 'Github Search',
    descriptionCard: 'Сервис для поиска репозиториев на Github по имени пользователя.',
    year: 2023,
    iconsSrc: [
      '/icons/icon-typescript.svg',
      '/icons/react_icon.svg',
      '/icons/icon-redux.svg',
      '/icons/icon-tailwind.svg',
      '/icons/axios_icon.svg',
    ],
    imageSrc: '/projects/githubsearch.png',
    description:
      'Не большое приложение, позволяет находить репозитории на Github по имени пользователя. Реализована функция добавления и удаления репозитория из избранного.',
    uses: 'TypeScript, React, RTKQuery, Tailwind CSS, Axios',
    addLinks: ['https://denisjet-githubsearch.netlify.app/', 'https://github.com/DenisJet/github-search'],
  },
  {
    id: '3',
    link: '/ru/portfolio/blog-me',
    title: 'Blog Me',
    descriptionCard: 'Учебный фулл стек проект. Блог, с возможностью написания статей.',
    year: 2023,
    iconsSrc: [
      '/icons/icon-javascript.svg',
      '/icons/react_icon.svg',
      '/icons/icon-redux.svg',
      '/icons/icon-mui.svg',
      '/icons/icon-express.svg',
      '/icons/icon-mongo.svg',
      '/icons/axios_icon.svg',
    ],
    imageSrc: '/projects/blog-me.png',
    description:
      'Мой первый фулл стек проект, во время написания которого я научился создавать свой собственный бэкенд. В проекте реализована регистрация и авторизация пользователей, чтение, создание, удаление, изменение статей, загрузка изображений на сервер, возможность оставлять комментарии и т.д.',
    uses: 'MongoDB, Express, React, Material Ui, Redux Toolkit, Axios, JWT, BCrypt, Multer',
    addLinks: ['https://github.com/DenisJet/blog-mern-front', 'https://github.com/DenisJet/blog-mern-beck'],
  },
  {
    id: '2',
    link: '/ru/portfolio/cleanhouse',
    title: 'Clean House',
    descriptionCard: 'Семантическая, валидная, адаптивная, кроссбраузерная верстка сайта для компании "Чистый дом".',
    year: 2023,
    iconsSrc: [
      '/icons/iconhtml.svg',
      '/icons/iconcss.svg',
      '/icons/icon-javascript.svg',
      '/icons/iconsass.svg',
      '/icons/icons-gulp.png',
    ],
    imageSrc: '/projects/cleanhouse.png',
    description:
      'Сайт службы истребления насекомых. Полностью адаптивная, семантическая, валидная, резиновая, кроссбраузерная верстка. Использована методология BEM, препроцессор SASS-SCSS, менеджер задач Gulp. Реализованы слайдеры с помощью библиотеки SwiperJS. Реализована возможность отправки сообщения о перезвоне.',
    uses: 'Html, SASS-SCSS, JS, BEM, Gulp, SwiperJS',
    addLinks: ['https://cleanhouse-ses.ru/', 'https://github.com/DenisJet/CleanHouse'],
  },
  {
    id: '1',
    link: '/ru/portfolio/krossover',
    title: 'Krossover',
    descriptionCard: 'Онлайн-магазин по продаже обуви и одежды.',
    year: 2022,
    iconsSrc: ['/icons/iconhtml.svg', '/icons/iconcss.svg', '/icons/icon-wordpress.svg'],
    imageSrc: '/projects/krossover.png',
    description: 'Интернет-магазин для продажи обуви и одежды онлайн.',
    uses: 'WordPress',
    addLinks: ['https://krossover-shoes.ru/'],
  },
];
