export const projectsRu = [
  {
    id: '9',
    link: '/ru/portfolio/todo',
    title: 'My ToDo List',
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
      'В проекте реализована функциональность добавления новой задачи с указанием названия, описания и статуса. Также можно изменять и удалять существующие задачи. Проект развернут на сервере из контейнера Docker (вы можете добавить пару задач для меня, но не спешите сервер может отвечать с задержкой несколько секунд). Это только начальное состояние проекта. Я планирую разработать удобный и приятный интерфейс и добавить набор крутых функций.',
    uses: 'Nest JS, Next JS, MongoDB, TypeScript, Docker',
    addLinks: [
      'http://5.35.89.103:3000/',
      'https://github.com/DenisJet/mytodo-client',
      'https://github.com/DenisJet/mytodo-server',
    ],
  },
  {
    id: '8',
    link: '/ru/portfolio/spotify-clone',
    title: 'Spotify-Clone',
    descriptionCard: 'Музыкальная платформа',
    year: 2023,
    iconsSrc: [
      '/icons/icon-typescript.svg',
      '/icons/icon-next.svg',
      '/icons/icons-nest.svg',
      '/icons/icon-mongo.svg',
      '/icons/icon-mui.svg',
    ],
    imageSrc: '/projects/spotify-clone.png',
    description:
      'Музыкальная платформа. Реализована загрузка, прослушивание и удаление музыкальных треков, загрузка изображений для обложки трека. Есть возможность оставлять комментарии. Также реализован музыкальный плеер. Основной набор функций уже присутствует, но проект все еще находится в стадии разработки.',
    uses: 'Nest JS, SSR на Next JS, TypeScript, Mongo DB, Material Ui',
    addLinks: ['https://github.com/DenisJet/spotify-clone-client', 'https://github.com/DenisJet/spotify-clone-server'],
  },
  {
    id: '7',
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
    description: 'Небольшой проект, он-лайн чат. Создан для знакомства с технологией WebSocket.',
    uses: 'Nest JS, PostgreSQL, Prisma, Socket.IO',
    addLinks: ['https://online-chat-c8eu.onrender.com/chat', 'https://github.com/DenisJet/live-chat-server'],
  },
  {
    id: '6',
    link: '/ru/portfolio/my-top',
    title: 'My Top',
    descriptionCard: 'Учебный фулл стек проект. Сервис для рейтинга курсов, услуг, книг...',
    year: 2023,
    iconsSrc: [
      '/icons/icon-typescript.svg',
      '/icons/icon-next.svg',
      '/icons/icons-nest.svg',
      '/icons/icon-mongo.svg',
      '/icons/icon-docker.svg',
    ],
    imageSrc: '/projects/mytop.png',
    description:
      'Один из моих учебных проектов. Рейтинг курсов, услуг, книг и т.д. С помощью NestJS и MongoDB реализован api для создания, удаления, редактирования и поиска страниц и товаров. Интегрирован Telegram-бот с использованием telegraf. Также реализованы регистрация и авторизация с помощью passport-jwt. Реализован SSR на NextJS. Есть динамическая маршрутизация, работа с React Hook Form, немного анимации с помощью Frame Motion. Работа с Github Actions, Docker и многое другое...',
    uses: 'Nest JS, MongoDB, telegraf, passport-jwt, NextJS, React Hook Form, Github Actions, Docker',
    addLinks: ['https://github.com/DenisJet/mytop-app', 'https://github.com/DenisJet/mytop-api'],
  },
  {
    id: '5',
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
    id: '4',
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
    id: '3',
    link: '/ru/portfolio/baths-restoration',
    title: 'Baths restoration',
    descriptionCard: 'Посадочная страница с семантической, адаптивной версткой, с использованием Gulp, Pug, Bootstrap.',
    year: 2023,
    iconsSrc: [
      '/icons/iconhtml.svg',
      '/icons/iconcss.svg',
      '/icons/icon-javascript.svg',
      '/icons/icons-gulp.png',
      '/icons/pug_icon.svg',
      '/icons/icon-bootstrap.svg',
    ],
    imageSrc: '/projects/restoration.png',
    description:
      'Простая посадочная страница, при создании которой я познакомился с шаблонизатором Pug, который понравился мне своей удобной возможностью создавать отдельные блоки для верстки. Также познакомился с Bootstrap, который значительно ускоряет верстку.',
    uses: 'Html, Css, Pug, Bootstrap',
    addLinks: ['https://restavracia--vann.ru/', 'https://github.com/DenisJet/remont-vann'],
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
    description: 'Оn-line store for selling shoes and clothing online. Created with WordPress.',
    uses: 'WordPress',
    addLinks: ['https://krossover-shoes.ru/'],
  },
];
