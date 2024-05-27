export const projectsEn = [
  {
    id: '8',
    link: '/ru/portfolio/personal-journal',
    title: 'Pizza-app',
    descriptionCard: 'Pizza delivery service.',
    year: 2024,
    iconsSrc: [
      '/icons/icon-typescript.svg',
      '/icons/react_icon.svg',
      '/icons/icon-redux.svg',
      '/icons/vite-icon.svg',
      '/icons/axios_icon.svg',
    ],
    imageSrc: '/projects/pizza-app.png',
    description:
      'Food delivery service. User authorization and registration, viewing the menu and each dish, adding a dish to the cart and placing an order are implemented. There is a full-fledged work with react-router, receiving data through react-router, as well as receiving data through redux and storing the state in redux.',
    uses: 'TypeScript, ReactJS, ReduxToolkit, Vite',
    addLinks: ['https://github.com/DenisJet/pizza-app'],
  },
  {
    id: '7',
    link: '/ru/portfolio/cloud-storage',
    title: 'My Cloud Storage',
    descriptionCard: 'Fullstack app - cloud storage.',
    year: 2024,
    iconsSrc: [
      '/icons/icon-typescript.svg',
      '/icons/icon-next.svg',
      '/icons/icon-tailwind.svg',
      '/icons/icons-nest.svg',
      '/icons/icon-postgresql.svg',
      '/icons/icon-docker.svg',
    ],
    imageSrc: '/projects/cloud.png',
    description:
      'Cloud storage, with the ability to upload and delete files. The functions of user registration and authorization using tokens are implemented. Storage of tokens is organized in cookies.',
    uses: 'TypeScript, Next JS, TailwindCSS, Nest JS, PostgreSQL, Swagger, PassportJWT, Docker',
    addLinks: [
      'https://github.com/DenisJet/my-cloud-storage-client',
      'https://github.com/DenisJet/my-cloude-storage-server',
    ],
  },
  {
    id: '6',
    link: '/en/portfolio/todo',
    title: 'My ToDo App',
    descriptionCard: 'Fullstack project, task list app.',
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
      'The functionality of adding a new task with a name and description has been implemented. You can also modify and delete existing tasks. The project is deployed on a server from a Docker container (you can add a couple of tasks for me, but do not rush the server may respond with a delay of up to a few seconds)',
    uses: 'Nest JS, Next JS, MongoDB, TypeScript, Docker',
    addLinks: [
      'http://5.35.89.103:3000/',
      'https://github.com/DenisJet/mytodo-client',
      'https://github.com/DenisJet/mytodo-server',
    ],
  },
  {
    id: '5',
    link: '/ru/portfolio/personal-journal',
    title: 'Personal Journal',
    descriptionCard: 'An application for writing notes',
    year: 2024,
    iconsSrc: ['/icons/icon-javascript.svg', '/icons/react_icon.svg', '/icons/vite-icon.svg'],
    imageSrc: '/projects/my-journal.png',
    description:
      'An application for writing notes. All basic react hooks (useState, useEffect, useReducer, useRef, forwardRef, useContext, useMemo) are handled. Work with form is implemented. Data saving is implemented in localstorage, using custom hook.',
    uses: 'JavaScript, ReactJS, Vite',
    addLinks: ['https://denisjet-journal.netlify.app/', 'https://github.com/DenisJet/MyJournal'],
  },
  {
    id: '4',
    link: '/en/portfolio/live-chat',
    title: 'On-Line Chat',
    descriptionCard: 'Live chat.',
    year: 2023,
    iconsSrc: [
      '/icons/icon-typescript.svg',
      '/icons/icons-nest.svg',
      '/icons/icon-postgresql.svg',
      '/icons/socket-icon.svg',
    ],
    imageSrc: '/projects/online-chat.png',
    description:
      "A small project, live chat. Created to get acquainted with WebSocket. Deployed on render.com ('Your free instance will spin down with inactivity, which can delay requests by 50 seconds or more.')",
    uses: 'Nest JS, PostgreSQL, Prisma, WebSockets',
    addLinks: [
      'https://online-chat-c8eu.onrender.com/chat',
      'https://online-chat-c8eu.onrender.com/api/chat',
      'https://github.com/DenisJet/live-chat-server',
    ],
  },
  {
    id: '3',
    link: '/en/portfolio/github-search',
    title: 'Github Search',
    descriptionCard: 'Service for searching repositories on Github by username.',
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
      'Not a big application, allows you to find repositories on Github by user name. The function of adding and removing repository from favorites is implemented.',
    uses: 'TypeScript, React, RTKQuery, Tailwind CSS, Axios',
    addLinks: ['https://denisjet-githubsearch.netlify.app/', 'https://github.com/DenisJet/github-search'],
  },
  {
    id: '2',
    link: '/en/portfolio/cleanhouse',
    title: 'Clean House',
    descriptionCard: 'Semantic, valid, adaptive, fluid, cross-browser website layout for the Clean House company.',
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
      'Insect extermination service website. Fully adaptive, semantic, valid, fluid, cross-browser layout. Using methodology BEM, preprocessor SASS-SCSS, task manager Gulp. Implemented sliders using the library SwiperJS. Implemented the ability to send a message about a call back.',
    uses: 'Html, SASS-SCSS, JS, BEM, Gulp, SwiperJS',
    addLinks: ['https://cleanhouse-ses.ru/', 'https://github.com/DenisJet/CleanHouse'],
  },
  {
    id: '1',
    link: '/en/portfolio/krossover',
    title: 'Krossover',
    descriptionCard: 'Оn-line store for selling shoes and clothing.',
    year: 2022,
    iconsSrc: ['/icons/iconhtml.svg', '/icons/iconcss.svg', '/icons/icon-wordpress.svg'],
    imageSrc: '/projects/krossover.png',
    description: 'Оn-line store for selling shoes and clothing online.',
    uses: 'WordPress',
    addLinks: ['https://krossover-shoes.ru/'],
  },
];
