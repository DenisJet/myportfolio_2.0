export const projectsRu = [
  {
    id: "10",
    link: "/ru/portfolio/weather-app",
    title: "Weather-app",
    descriptionCard: "Сервис просмотра прогноза погоды.",
    iconsSrc: [
      "/icons/icon-typescript.svg",
      "/icons/react_icon.svg",
      "/icons/icon-next.svg",
      "/icons/icon-tailwind.svg",
      "/icons/axios_icon.svg",
    ],
    imageSrc: "/projects/weather-app.png",
    description:
      "Сервис просмотра прогноза погоды. Реализованна возможность отображать график прогноза погоды на 5 дней. Можно менять тип отображаемых данных на графике. Есть возможность менять гранулярность графика 3 часа/день. Можно добавлять два города для визуального сравнения данных на графике. Используется - https://openweathermap.org/ public API.",
    uses: "TypeScript, ReactJS, NextJS, Axios, TailwindCSS, ChadcnUI, Recharts",
    addLinks: [
      "https://denisjet-weatherapp.netlify.app/",
      "https://github.com/DenisJet/weather-app",
    ],
  },
  {
    id: "9",
    link: "/ru/portfolio/pizza-app",
    title: "Pizza-app",
    descriptionCard: "Сервис доставки пиццы.",
    iconsSrc: [
      "/icons/icon-typescript.svg",
      "/icons/react_icon.svg",
      "/icons/icon-redux.svg",
      "/icons/iconcss.svg",
      "/icons/vite-icon.svg",
      "/icons/axios_icon.svg",
    ],
    imageSrc: "/projects/pizza-app.png",
    description:
      "Сервис доставки еды. Реализованны авторизация и регистрация пользователя, просмотр меню и каждого блюда, поиск по названию блюд, добавление блюда в корзину и оформление заказа. Присутствует полноценная работа с react-router, получение данных через react-router, а так же получение данных через через redux и хранение состояния в redux.",
    uses: "TypeScript, ReactJS, ReduxToolkit, CSSModules, Vite",
    addLinks: [
      "https://denis-pizza.netlify.app/",
      "https://github.com/DenisJet/pizza-app",
    ],
  },
  {
    id: "8",
    link: "/ru/portfolio/assets-portfolio",
    title: "Assets portfolio",
    descriptionCard: "Сервис для отображения списка активов.",
    iconsSrc: [
      "/icons/icon-typescript.svg",
      "/icons/react_icon.svg",
      "/icons/icon-redux.svg",
      "/icons/axios_icon.svg",
      "/icons/websocket.svg",
      "/icons/iconsass.svg",
      "/icons/vite-icon.svg",
    ],
    imageSrc: "/projects/assets-portfolio.png",
    description:
      "Модуль с функциями управления портфелем и обновлениями данных в реальном времени. Реализованно отображение списка активов с полями: название, количество, текущая цена, общая стоимость, изменение за 24 часа, доля в портфеле. Интегрирован WebSocket (wss://stream.binance.com:9443/stream?streams) для real-time обновления цен активов. Реализованно добавления актива через форму, удаление актива по клику, локальное сохранение активов.",
    uses: "TypeScript, ReactJS, Redux Toolkit, Axios, WebSocket, SCSS, Vite",
    addLinks: [
      "https://assets-active.netlify.app/",
      "https://github.com/DenisJet/matrix-overview",
    ],
  },
  {
    id: "7",
    link: "/ru/portfolio/personal-journal",
    title: "Personal Journal",
    descriptionCard: "Приложение для написания заметок",
    iconsSrc: [
      "/icons/icon-javascript.svg",
      "/icons/react_icon.svg",
      "/icons/iconcss.svg",
      "/icons/vite-icon.svg",
    ],
    imageSrc: "/projects/my-journal.png",
    description:
      "Приложение для написание заметок. Присутствует работа со всеми основными react hooks (useState, useEffect, useReducer, useRef, forwardRef, useContext, useMemo). Осуществлена работа с формой. Сохранение данных реализованно в localstorage, при помощи кастомного хука.",
    uses: "JavaScript, ReactJS, CSS, Vite",
    addLinks: [
      "https://denisjet-journal.netlify.app/",
      "https://github.com/DenisJet/MyJournal",
    ],
  },
  {
    id: "6",
    link: "/ru/portfolio/github-search",
    title: "Github Search",
    descriptionCard:
      "Сервис для поиска репозиториев на Github по имени пользователя.",
    iconsSrc: [
      "/icons/icon-typescript.svg",
      "/icons/react_icon.svg",
      "/icons/icon-redux.svg",
      "/icons/icon-tailwind.svg",
      "/icons/axios_icon.svg",
    ],
    imageSrc: "/projects/githubsearch.png",
    description:
      "Не большое приложение, позволяет находить репозитории на Github по имени пользователя. Реализована функция добавления и удаления репозитория из избранного.",
    uses: "TypeScript, React, RTKQuery, Tailwind CSS, Axios",
    addLinks: [
      "https://denisjet-githubsearch.netlify.app/",
      "https://github.com/DenisJet/github-search",
    ],
  },
  {
    id: "5",
    link: "/ru/portfolio/cloud-storage",
    title: "My Cloud Storage",
    descriptionCard: "Фуллстек приложение - облачное хранилище.",
    iconsSrc: [
      "/icons/icon-typescript.svg",
      "/icons/icon-next.svg",
      "/icons/icon-tailwind.svg",
      "/icons/icons-nest.svg",
      "/icons/icon-postgresql.svg",
      "/icons/icon-docker.svg",
    ],
    imageSrc: "/projects/cloud.png",
    description:
      "Облачное хранилище, с возможностью загружать и удалять файлы. Реализованны функции регистрации и авторизации пользователей с помощью токенов. Хранение токенов организованно в cookies.",
    uses: "TypeScript, Next JS, TailwindCSS, Nest JS, PostgreSQL, Swagger, PassportJWT, Docker",
    addLinks: [
      "https://github.com/DenisJet/my-cloud-storage-client",
      "https://github.com/DenisJet/my-cloude-storage-server",
    ],
  },
  // {
  //   id: '4',
  //   link: '/ru/portfolio/todo',
  //   title: 'My ToDo App',
  //   descriptionCard: 'Фуллстек приложение для составления списка задач.',
  //   iconsSrc: [
  //     '/icons/icon-typescript.svg',
  //     '/icons/icon-next.svg',
  //     '/icons/icons-nest.svg',
  //     '/icons/icon-mongo.svg',
  //     '/icons/icon-docker.svg',
  //   ],
  //   imageSrc: '/projects/mytodo.png',
  //   description:
  //     'Реализована функциональность добавления новой задачи с указанием названия и описания. Также можно изменять и удалять существующие задачи. Проект развернут на сервере из контейнера Docker (вы можете добавить пару задач для меня, но не спешите сервер может отвечать с задержкой до нескольких секунд).',
  //   uses: 'Nest JS, Next JS, MongoDB, TypeScript, Docker',
  //   addLinks: [
  //     'http://5.35.89.103:3000/',
  //     'https://github.com/DenisJet/mytodo-client',
  //     'https://github.com/DenisJet/mytodo-server',
  //   ],
  // },
  {
    id: "4",
    link: "/ru/portfolio/live-chat",
    title: "On-Line Chat",
    descriptionCard: "Он-лайн чат",
    iconsSrc: [
      "/icons/icon-typescript.svg",
      "/icons/icons-nest.svg",
      "/icons/icon-postgresql.svg",
      "/icons/socket-icon.svg",
    ],
    imageSrc: "/projects/online-chat.png",
    description:
      "Небольшой проект, он-лайн чат. Создан для знакомства с технологией WebSocket.",
    uses: "Nest JS, PostgreSQL, Prisma, WebSockets",
    addLinks: [
      // 'https://online-chat-c8eu.onrender.com/chat',
      "https://github.com/DenisJet/live-chat-server",
    ],
  },
  {
    id: "3",
    link: "/ru/portfolio/cleaning",
    title: "Cleaning Profi",
    descriptionCard: "Сайт услуг клининговой компании.",
    iconsSrc: [
      "/icons/icon-typescript.svg",
      "/icons/react_icon.svg",
      "/icons/icon-next.svg",
      "/icons/iconcss.svg",
      "/icons/axios_icon.svg",
    ],
    imageSrc: "/projects/cleaning.png",
    description:
      "Пример создания сайта по макету, для клининговой компании. Адаптивная, семантическая верстка с отзывчивым дизайном. В проекте используется NextJS и SSR для SEO оптимизации.",
    uses: "TypeScript, ReactJS, NextJS, CSS.Modules",
    addLinks: [
      "https://cleaning-profi.netlify.app/",
      "https://github.com/DenisJet/cleaning",
    ],
  },
  {
    id: "2",
    link: "/ru/portfolio/cleanhouse",
    title: "Clean House",
    descriptionCard:
      'Семантическая, валидная, адаптивная, кроссбраузерная верстка сайта для компании "Чистый дом".',
    iconsSrc: [
      "/icons/iconhtml.svg",
      "/icons/iconcss.svg",
      "/icons/icon-javascript.svg",
      "/icons/iconsass.svg",
      "/icons/icons-gulp.png",
    ],
    imageSrc: "/projects/cleanhouse.png",
    description:
      "Сайт службы истребления насекомых. Полностью адаптивная, семантическая, валидная, резиновая, кроссбраузерная верстка. Использована методология BEM, препроцессор SASS-SCSS, менеджер задач Gulp. Реализованы слайдеры с помощью библиотеки SwiperJS. Реализована возможность отправки сообщения о перезвоне.",
    uses: "Html, SASS-SCSS, JS, BEM, Gulp, SwiperJS",
    addLinks: [
      "https://cleanhouse-ses.ru/",
      "https://github.com/DenisJet/CleanHouse",
    ],
  },
  {
    id: "1",
    link: "/ru/portfolio/krossover",
    title: "Krossover",
    descriptionCard: "Онлайн-магазин по продаже обуви и одежды.",
    iconsSrc: [
      "/icons/iconhtml.svg",
      "/icons/iconcss.svg",
      "/icons/icon-wordpress.svg",
    ],
    imageSrc: "/projects/krossover.png",
    description: "Интернет-магазин для продажи обуви и одежды онлайн.",
    uses: "WordPress",
    addLinks: ["https://krossover-shoes.ru/"],
  },
];
