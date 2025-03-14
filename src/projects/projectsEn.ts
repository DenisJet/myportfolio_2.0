export const projectsEn = [
  {
    id: "10",
    link: "/en/portfolio/weather-app",
    title: "Weather-app",
    descriptionCard: "Weather forecast viewer service.",
    iconsSrc: [
      "/icons/icon-typescript.svg",
      "/icons/react_icon.svg",
      "/icons/icon-next.svg",
      "/icons/icon-tailwind.svg",
      "/icons/axios_icon.svg",
    ],
    imageSrc: "/projects/weather-app.png",
    description:
      "Weather forecast viewing service. It is possible to display the weather forecast chart for 5 days. You can change the type of displayed data on the graph. It is possible to change the granularity of the graph 3 hours/day. You can add two cities for visual comparison of data on the graph. Used - https://openweathermap.org/ public API.",
    uses: "TypeScript, ReactJS, NextJS, Axios, TailwindCSS, ChadcnUI, Recharts",
    addLinks: [
      "https://denisjet-weatherapp.netlify.app/",
      "https://github.com/DenisJet/weather-app",
    ],
  },
  {
    id: "9",
    link: "/en/portfolio/pizza-app",
    title: "Pizza-app",
    descriptionCard: "Pizza delivery service.",
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
      "Food delivery service. User authorization and registration, viewing the menu and each dish, search by dish name, adding a dish to the cart and placing an order are implemented. There is a full-fledged work with react-router, receiving data through react-router, as well as receiving data through redux and storing the state in redux.",
    uses: "TypeScript, ReactJS, ReduxToolkit, CSSModules, Vite",
    addLinks: [
      "https://denis-pizza.netlify.app/",
      "https://github.com/DenisJet/pizza-app",
    ],
  },
  {
    id: "8",
    link: "/en/portfolio/assets-portfolio",
    title: "Assets portfolio",
    descriptionCard: "A service for displaying a list of assets.",
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
      "Module with portfolio management functions and real-time data updates. The list of assets is displayed with the following fields: name, quantity, current price, total value, change over 24 hours, share in the portfolio. Integrated WebSocket (wss://stream.binance.com:9443/stream?streams) for real-time updates of asset prices. Implemented adding an asset via form, deleting an asset by click, local saving of assets.",
    uses: "TypeScript, ReactJS, Redux Toolkit, Axios, WebSocket, SCSS, Vite",
    addLinks: [
      "https://assets-active.netlify.app/",
      "https://github.com/DenisJet/matrix-overview",
    ],
  },
  {
    id: "7",
    link: "/en/portfolio/personal-journal",
    title: "Personal Journal",
    descriptionCard: "An application for writing notes",
    iconsSrc: [
      "/icons/icon-javascript.svg",
      "/icons/react_icon.svg",
      "/icons/iconcss.svg",
      "/icons/vite-icon.svg",
    ],
    imageSrc: "/projects/my-journal.png",
    description:
      "An application for writing notes. All basic react hooks (useState, useEffect, useReducer, useRef, forwardRef, useContext, useMemo) are handled. Work with form is implemented. Data saving is implemented in localstorage, using custom hook.",
    uses: "JavaScript, ReactJS, CSS, Vite",
    addLinks: [
      "https://denisjet-journal.netlify.app/",
      "https://github.com/DenisJet/MyJournal",
    ],
  },
  {
    id: "6",
    link: "/en/portfolio/github-search",
    title: "Github Search",
    descriptionCard:
      "Service for searching repositories on Github by username.",
    iconsSrc: [
      "/icons/icon-typescript.svg",
      "/icons/react_icon.svg",
      "/icons/icon-redux.svg",
      "/icons/icon-tailwind.svg",
      "/icons/axios_icon.svg",
    ],
    imageSrc: "/projects/githubsearch.png",
    description:
      "Not a big application, allows you to find repositories on Github by user name. The function of adding and removing repository from favorites is implemented.",
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
    descriptionCard: "Fullstack app - cloud storage.",
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
      "Cloud storage, with the ability to upload and delete files. The functions of user registration and authorization using tokens are implemented. Storage of tokens is organized in cookies.",
    uses: "TypeScript, Next JS, TailwindCSS, Nest JS, PostgreSQL, Swagger, PassportJWT, Docker",
    addLinks: [
      "https://github.com/DenisJet/my-cloud-storage-client",
      "https://github.com/DenisJet/my-cloude-storage-server",
    ],
  },
  // {
  //   id: '4',
  //   link: '/en/portfolio/todo',
  //   title: 'My ToDo App',
  //   descriptionCard: 'Fullstack project, task list app.',
  //   iconsSrc: [
  //     '/icons/icon-typescript.svg',
  //     '/icons/icon-next.svg',
  //     '/icons/icons-nest.svg',
  //     '/icons/icon-mongo.svg',
  //     '/icons/icon-docker.svg',
  //   ],
  //   imageSrc: '/projects/mytodo.png',
  //   description:
  //     'The functionality of adding a new task with a name and description has been implemented. You can also modify and delete existing tasks. The project is deployed on a server from a Docker container (you can add a couple of tasks for me, but do not rush the server may respond with a delay of up to a few seconds)',
  //   uses: 'Nest JS, Next JS, MongoDB, TypeScript, Docker',
  //   addLinks: [
  //     'http://5.35.89.103:3000/',
  //     'https://github.com/DenisJet/mytodo-client',
  //     'https://github.com/DenisJet/mytodo-server',
  //   ],
  // },
  {
    id: "4",
    link: "/en/portfolio/live-chat",
    title: "On-Line Chat",
    descriptionCard: "Live chat.",
    iconsSrc: [
      "/icons/icon-typescript.svg",
      "/icons/icons-nest.svg",
      "/icons/icon-postgresql.svg",
      "/icons/socket-icon.svg",
    ],
    imageSrc: "/projects/online-chat.png",
    description:
      "A small project, live chat. Created to get acquainted with WebSocket.",
    uses: "Nest JS, PostgreSQL, Prisma, WebSockets",
    addLinks: [
      // 'https://online-chat-c8eu.onrender.com/chat',
      "https://github.com/DenisJet/live-chat-server",
    ],
  },
  {
    id: "3",
    link: "/en/portfolio/cleaning",
    title: "Cleaning Profi",
    descriptionCard: "Cleaning company services website.",
    iconsSrc: [
      "/icons/icon-typescript.svg",
      "/icons/react_icon.svg",
      "/icons/icon-next.svg",
      "/icons/iconcss.svg",
      "/icons/axios_icon.svg",
    ],
    imageSrc: "/projects/cleaning.png",
    description:
      "Example of creating a website on the layout, for a cleaning company. Adaptive, semantic, layout with responsive design. The project uses NextJS and SSR for SEO optimization.",
    uses: "TypeScript, ReactJS, NextJS, CSS.Modules",
    addLinks: [
      "https://cleaning-profi.netlify.app/",
      "https://github.com/DenisJet/cleaning",
    ],
  },
  {
    id: "2",
    link: "/en/portfolio/cleanhouse",
    title: "Clean House",
    descriptionCard:
      "Semantic, valid, adaptive, fluid, cross-browser website layout for the Clean House company.",
    iconsSrc: [
      "/icons/iconhtml.svg",
      "/icons/iconcss.svg",
      "/icons/icon-javascript.svg",
      "/icons/iconsass.svg",
      "/icons/icons-gulp.png",
    ],
    imageSrc: "/projects/cleanhouse.png",
    description:
      "Insect extermination service website. Fully adaptive, semantic, valid, fluid, cross-browser layout. Using methodology BEM, preprocessor SASS-SCSS, task manager Gulp. Implemented sliders using the library SwiperJS. Implemented the ability to send a message about a call back.",
    uses: "Html, SASS-SCSS, JS, BEM, Gulp, SwiperJS",
    addLinks: [
      "https://cleanhouse-ses.ru/",
      "https://github.com/DenisJet/CleanHouse",
    ],
  },
  {
    id: "1",
    link: "/en/portfolio/krossover",
    title: "Krossover",
    descriptionCard: "Оn-line store for selling shoes and clothing.",
    iconsSrc: [
      "/icons/iconhtml.svg",
      "/icons/iconcss.svg",
      "/icons/icon-wordpress.svg",
    ],
    imageSrc: "/projects/krossover.png",
    description: "Оn-line store for selling shoes and clothing online.",
    uses: "WordPress",
    addLinks: ["https://krossover-shoes.ru/"],
  },
];
