import { ICONS } from './skillIcons'

const img = (path) => `/resources/images/projects/${path}`

/**
 * Projects page, in display order.
 * `liveUrl` / `codeUrl` are optional; `codeNewTab: false` keeps links that
 * originally opened in the same tab. `gallery.kind` is 'web' (landscape slider
 * with arrows) or 'app' (coverflow slider with pagination).
 */
export const PROJECTS = [
  {
    name: 'Fullstack Chat App',
    techs: [
      { src: ICONS.tailwind, alt: 'Tailwind CSS' },
      { src: ICONS.reactjs, alt: 'React.js' },
    ],
    description:
      'This is a real-time chat application built with precision and attention to detail. It offers seamless messaging powered by sockets for instant communication. The frontend is crafted using React, Tailwind CSS, and DaisyUI to ensure a clean and modern interface, while the backend leverages Node.js, Express, and MongoDB for secure data handling. It supports features like user authentication, message storage, and responsive design for a smooth chatting experience across devices.',
    liveUrl: 'https://fullstack-chat-app-n8wp.onrender.com',
    codeUrl: 'https://github.com/V1SHNUKUMAR/fullstack-chat-app',
    cover: img('chatApp/chatApp.png'),
  },
  {
    name: 'Amazon clone',
    techs: [
      { src: ICONS.tailwind, alt: 'Tailwind CSS' },
      { src: ICONS.reactjs, alt: 'React.js' },
    ],
    description:
      'This Amazon clone is created using Tailwind CSS and React.js. This is a fully responsive clone for all devices and is able to perform many functionalities. This clone is a pixel perfect clone, meaning attention to detail is kept in mind while building this. This includes image sliders for various sections of the web app. It performs many functionalities such as Add / Remove products in the cart, Filter products by price or categories like mens clothing, mobiles, etc. It shows realtime subtotal calculation in the cart page.',
    liveUrl: 'https://complete-amazon.netlify.app',
    codeUrl: 'https://github.com/V1SHNUKUMAR/amazon-clone',
    cover: img('amazonClone/amazonCloneMockup.png'),
    gallery: {
      kind: 'web',
      images: [
        { src: img('amazonClone/1-1.png'), alt: 'home page' },
        { src: img('amazonClone/1-2.png'), alt: 'home page' },
        { src: img('amazonClone/1-3.png'), alt: 'members page' },
        { src: img('amazonClone/1-4.png'), alt: 'gallery page' },
        { src: img('amazonClone/1-5.png'), alt: 'residence page' },
        { src: img('amazonClone/2.png'), alt: 'about me page' },
        { src: img('amazonClone/3-1.png'), alt: 'about me page' },
        { src: img('amazonClone/3-2.png'), alt: 'about me page' },
        { src: img('amazonClone/4-2.png'), alt: 'about me page' },
        { src: img('amazonClone/5-1.png'), alt: 'about me page' },
        { src: img('amazonClone/5-3.png'), alt: 'about me page' },
      ],
    },
  },
  {
    name: 'My Notebook',
    techs: [{ src: ICONS.reactjs, alt: 'reactjs' }],
    description:
      "This My Notebook is a web app which enables users to store their notes securely. Here, I've integrated authentication for users meaning users can signin/signup. Here users can also perform CRUD operations meaning user can create note, edit/update note, delete note. Everything happens by an API I created with the help of youtube. Notes are stored securely in the mongodb database.",
    codeUrl: 'https://github.com/V1SHNUKUMAR/my_notebook',
    codeNewTab: false,
    cover: img('myNotebookApp/myNotebookAppMockup.png'),
    gallery: {
      kind: 'web',
      images: [1, 2, 3, 4, 5].map((n) => ({ src: img(`myNotebookApp/${n}.png`), alt: '' })),
    },
  },
  {
    name: 'Cinemix',
    techs: [
      { src: ICONS.tailwind, alt: 'reactjs' },
      { src: ICONS.reactjs, alt: 'reactjs' },
    ],
    description:
      'Cinemix is a movies app made using Tailwind and React.js responsive for all devices. It utilizes an API and Axios is used to fetch data from it. It shows movies for different categories. It shows a cool loading animation while it is fetching data. Infinite scrolling is also integrated in the app which gives a seamless user experience.',
    liveUrl: 'https://cinemix-movies.netlify.app',
    codeUrl: 'https://github.com/V1SHNUKUMAR/movies-app',
    cover: img('moviesApp/moviesAppMockup.png'),
    gallery: {
      kind: 'web',
      images: ['1-1', '1-2', '1-3', '2-1', '2-2', '3'].map((n) => ({
        src: img(`moviesApp/${n}.png`),
        alt: '',
      })),
    },
  },
  {
    name: 'Draw Magic',
    techs: [
      { src: ICONS.tailwind, alt: 'tailwind' },
      { src: ICONS.nextjs, alt: 'nextjs' },
    ],
    description:
      'Draw Magic is an innovative drawing app designed for creativity and ease. With dark and light modes, users can draw in their preferred environment. Built using canvas, it enables freeform drawing with tools like a pen, eraser, and a customizable thickness option. A color picker with a recent colors feature makes selecting shades seamless. Users can capture their creations instantly with the screenshot feature, and a reset button ensures effortless restarts. Draw Magic empowers artists of all levels to bring their imaginations to life.',
    liveUrl: 'https://draw-magic.vercel.app/',
    codeUrl: 'https://github.com/V1SHNUKUMAR/DrawMagic',
    // the file name really starts with a space
    cover: img('draw_magic/ draw-mac-dark.png'),
  },
  {
    name: 'News App',
    techs: [{ src: ICONS.reactjs, alt: 'reactjs' }],
    description:
      "This News app is made by using React.js and utilizing News API. As this app fetches data from an API, It shows the latest news all over the world. Navbar includes multiple category names that shows specific category news. I've integrated custom loading bar and infinite scroll which gives a seamless user experience.",
    codeUrl: 'https://github.com/V1SHNUKUMAR/newsapp',
    codeNewTab: false,
    cover: img('newsApp/newsAppMockup.png'),
    gallery: {
      kind: 'web',
      images: [1, 2, 3, 4, 5].map((n) => ({ src: img(`newsApp/${n}.png`), alt: '' })),
    },
  },
  {
    name: 'User Inventory',
    techs: [
      { src: ICONS.reactjs, alt: 'reactjs' },
      { src: ICONS.tailwind, alt: 'tailwind CSS' },
    ],
    description:
      'This is User inventory project made using Reactjs and Tailwind CSS. Integrated functionalities to perform CRUD operations. Utilized LocalStorage. Added a popup form. Implemented a beautiful UI which is fully responsive and adapts beautifully in every screen sizes.',
    liveUrl: 'https://reactapp-task.netlify.app/',
    codeUrl: 'https://github.com/V1SHNUKUMAR/task',
    cover: img('userInventory/userInventory-mockup.png'),
  },
  {
    name: 'PrimeView',
    techs: [
      { src: ICONS.html5, alt: 'HTML' },
      { src: ICONS.css3, alt: 'CSS' },
      { src: ICONS.javascript, alt: 'Javascript' },
    ],
    description:
      'This is a Real-estate website made using HTML, CSS and Javascript. Beautifully created Homepage with unique and fresh design and a satisfactory button effect. It is fully responsive for all screen sizes.',
    liveUrl: 'https://primeview-realestate.netlify.app',
    codeUrl: 'https://github.com/V1SHNUKUMAR/PrimeView-RealEstate',
    cover: img('realEstateSite/Real-Estate-mockup.png'),
  },
  {
    name: 'Banquet Booking',
    techs: [
      { src: ICONS.reactjs, alt: 'reactjs' },
      { src: ICONS.css3, alt: ' CSS' },
    ],
    description:
      'This is Banquet booking site which is beautifully created and I converted a design to actual website by code. I used creative ideas to show the content.',
    liveUrl: 'https://banquet-booking.netlify.app/',
    codeUrl: 'https://github.com/V1SHNUKUMAR/Banquet-Booking',
    cover: img('banquetBooking/banquet-booking-mockup.png'),
  },
  {
    name: 'Hulu Clone',
    techs: [
      { src: ICONS.html5, alt: 'HTML' },
      { src: ICONS.tailwind, alt: 'Tailwind CSS' },
      { src: ICONS.javascript, alt: 'Javascript' },
    ],
    description:
      'This website is created using HTML, CSS and Javascript. This is a complete 5 pages website. It is fully responsive for all devices. It has a unique animated mobile menu. And, Cool Animations and Transitions are like cherry on the cake. pages included in this website are Home page, Members page, Gallery page, Residence page, and About Me page.',
    liveUrl: 'https://hulu-streaming.netlify.app',
    codeUrl: 'https://github.com/V1SHNUKUMAR/hulu-clone',
    cover: img('huluClone/huluCloneMockup.png'),
    gallery: {
      kind: 'web',
      images: [
        { src: img('huluClone/1.png'), alt: 'home page' },
        { src: img('huluClone/2.png'), alt: 'home page' },
        { src: img('huluClone/3.png'), alt: 'members page' },
        { src: img('huluClone/4.png'), alt: 'gallery page' },
        { src: img('huluClone/5.png'), alt: 'residence page' },
      ],
    },
  },
  {
    name: 'Group Chat App',
    techs: [
      { src: ICONS.flutter, alt: 'Flutter' },
      { src: ICONS.firebase, alt: 'Firebase' },
    ],
    description:
      "This app is made by using Flutter & Firebase. This is an app which enables you to chat with your loved ones in groups. Here you can create groups or can join existing group by search functionality. And whenever you feel you don't need this group chat anymore, you can delete the chat. Also, if you want to leave any group, you can leave.",
    codeUrl: 'https://github.com/V1SHNUKUMAR/chatting_app',
    cover: img('groupChatApp/groupChatAppMockup.png'),
    gallery: {
      kind: 'app',
      images: [
        { src: img('groupChatApp/login.png'), alt: 'login page' },
        { src: img('groupChatApp/signup.png'), alt: 'sign up' },
        { src: img('groupChatApp/chatsList.png'), alt: 'home screen' },
        { src: img('groupChatApp/drawer.png'), alt: 'drawer' },
        { src: img('groupChatApp/logout.png'), alt: 'logout' },
        { src: img('groupChatApp/createGroup.png'), alt: 'create group' },
        { src: img('groupChatApp/chatPage.png'), alt: 'chat page' },
        { src: img('groupChatApp/groupInfo.png'), alt: 'group info' },
        { src: img('groupChatApp/leaveGroup.png'), alt: 'leave ' },
      ],
    },
  },
  {
    name: 'Shop App',
    techs: [{ src: ICONS.flutter, alt: 'Flutter' }],
    description:
      "I used Flutter only to make this app. This app is an E-Commerce app where user can products are displayed on the homescreen and user can make any product favorite or can add in the card. I've added filters also so that user can view favorites and all products as per his/her own need. Items in the card can be ordered by tapping order now button and then all orders will be visible in orders page which can be accessed through drawer.",
    codeUrl: 'https://github.com/V1SHNUKUMAR/shop_app',
    cover: img('shopApp/shopAppMockup.png'),
    coverFitHeight: true,
    gallery: {
      kind: 'app',
      images: [
        { src: img('shopApp/productsPage.png'), alt: 'home screen' },
        { src: img('shopApp/filters.png'), alt: 'filters' },
        { src: img('shopApp/productDetails.png'), alt: 'product details' },
        { src: img('shopApp/cartPage.png'), alt: 'cart page' },
        { src: img('shopApp/cartItemRemove.png'), alt: 'cart page' },
        { src: img('shopApp/drawer.png'), alt: 'drawer' },
        { src: img('shopApp/ordersPage.png'), alt: 'orders page' },
      ],
    },
  },
  {
    name: 'Meeting App',
    techs: [
      { src: ICONS.flutter, alt: 'Flutter' },
      { src: ICONS.videosdk, alt: 'Firebase' },
    ],
    description:
      'I made this app using Flutter and an sdk i.e. videoSdk for video call. Here, user can create a meeting or can join an existing one by entering meeting id. In the meeting, all the necesary controls are available like mic mute/unmute, camera on/off and end call.',
    cover: img('meetingApp/meetingAppMockup.png'),
    coverFitHeight: true,
    gallery: {
      kind: 'app',
      images: [
        { src: img('meetingApp/homescreen.png'), alt: 'home screen' },
        { src: img('meetingApp/normal ss/meetingPage.jpg'), alt: 'meeting page' },
      ],
    },
  },
]

/** The two projects featured on the home page (tech icon order differs from the projects page). */
export const FEATURED_PROJECTS = [
  {
    name: 'Fullstack Chat App',
    url: 'https://fullstack-chat-app-n8wp.onrender.com',
    techs: [
      { src: ICONS.tailwind, alt: 'tailwind' },
      { src: ICONS.reactjs, alt: 'reactjs' },
    ],
    description: PROJECTS[0].description,
    image: { src: img('chatApp/chatApp.png'), alt: 'chat app' },
  },
  {
    name: 'Draw Magic',
    url: 'https://draw-magic.vercel.app/',
    techs: [
      { src: ICONS.nextjs, alt: 'Reactjs' },
      { src: ICONS.tailwind, alt: 'Tailwind CSS' },
    ],
    description: PROJECTS[4].description,
    image: { src: img('draw_magic/ draw-mac-dark.png'), alt: 'Draw Magic' },
  },
]
