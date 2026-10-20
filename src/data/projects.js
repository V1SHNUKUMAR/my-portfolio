import { ICONS } from './skillIcons'

const img = (path) => `/resources/images/projects/${path}`

export const PROJECTS = [
  {
    name: 'Moments',
    techs: [
      { name: 'Tailwind CSS' },
      { name: 'React.js' },
      { name: 'Node.js' },
      { name: 'Express' },
      { name: 'MySQL' },
    ],
    description:
      'Moments is a full-stack social media app built with React.js and Tailwind CSS on the frontend and Node.js, Express and MySQL on the backend. It has user authentication and the full social experience: create and share posts, like and comment, follow or unfollow users, and browse profile pages. Users can edit their details in an update profile modal and switch between light and dark mode.',
    liveUrl: 'https://fullstack-chat-app-n8wp.onrender.com',
    codeUrl: 'https://github.com/V1SHNUKUMAR/fullstack-chat-app',
    cover: img('socialMediaApp/socialMediaApp.png'),
  },
  {
    name: 'Chatty',
    techs: [
      { name: 'Tailwind CSS' },
      { name: 'React.js' },
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
      { name: 'Tailwind CSS' },
      { name: 'React.js' },
    ],
    description:
      'This Amazon clone is created using Tailwind CSS and React.js. This is a fully responsive clone for all devices and is able to perform many functionalities. This clone is a pixel perfect clone, meaning attention to detail is kept in mind while building this. This includes image sliders for various sections of the web app. It performs many functionalities such as Add / Remove products in the cart, Filter products by price or categories like mens clothing, mobiles, etc. It shows realtime subtotal calculation in the cart page.',
    liveUrl: 'https://complete-amazon.netlify.app',
    codeUrl: 'https://github.com/V1SHNUKUMAR/amazon-clone',
    cover: img('amazonClone/amazonClone.png'),
  },
  {
    name: 'My Notebook',
    techs: [{ name: 'reactjs' }],
    description:
      "This My Notebook is a web app which enables users to store their notes securely. Here, I've integrated authentication for users meaning users can signin/signup. Here users can also perform CRUD operations meaning user can create note, edit/update note, delete note. Everything happens by an API I created with the help of youtube. Notes are stored securely in the mongodb database.",
    codeUrl: 'https://github.com/V1SHNUKUMAR/my_notebook',
    codeNewTab: false,
    cover: img('myNotebookApp/myNotebookApp.png'),
  },
  {
    name: 'Cinemix',
    techs: [
      { name: 'reactjs' },
      { name: 'reactjs' },
    ],
    description:
      'Cinemix is a movies app made using Tailwind and React.js responsive for all devices. It utilizes an API and Axios is used to fetch data from it. It shows movies for different categories. It shows a cool loading animation while it is fetching data. Infinite scrolling is also integrated in the app which gives a seamless user experience.',
    liveUrl: 'https://cinemix-movies.netlify.app',
    codeUrl: 'https://github.com/V1SHNUKUMAR/movies-app',
    cover: img('moviesApp/moviesApp.png'),
  },
  {
    name: 'Draw Magic',
    techs: [
      { name: 'tailwind' },
      { name: 'nextjs' },
    ],
    description:
      'Draw Magic is an innovative drawing app designed for creativity and ease. With dark and light modes, users can draw in their preferred environment. Built using canvas, it enables freeform drawing with tools like a pen, eraser, and a customizable thickness option. A color picker with a recent colors feature makes selecting shades seamless. Users can capture their creations instantly with the screenshot feature, and a reset button ensures effortless restarts. Draw Magic empowers artists of all levels to bring their imaginations to life.',
    liveUrl: 'https://draw-magic.vercel.app/',
    codeUrl: 'https://github.com/V1SHNUKUMAR/DrawMagic',
    // the file name really starts with a space
    cover: img('draw_magic/drawMagicApp.png'),
  },
  {
    name: 'Group Chat App',
    techs: [
      { name: 'Flutter' },
      { name: 'Firebase' },
    ],
    description:
      "This app is made by using Flutter & Firebase. This is an app which enables you to chat with your loved ones in groups. Here you can create groups or can join existing group by search functionality. And whenever you feel you don't need this group chat anymore, you can delete the chat. Also, if you want to leave any group, you can leave.",
    codeUrl: 'https://github.com/V1SHNUKUMAR/chatting_app',
    cover: img('groupChatApp/groupChatAppMockup.png'),
    type: 'mobile'
  },
  {
    name: 'Shop App',
    techs: [{ name: 'Flutter' }],
    description:
      "I used Flutter only to make this app. This app is an E-Commerce app where user can products are displayed on the homescreen and user can make any product favorite or can add in the card. I've added filters also so that user can view favorites and all products as per his/her own need. Items in the card can be ordered by tapping order now button and then all orders will be visible in orders page which can be accessed through drawer.",
    codeUrl: 'https://github.com/V1SHNUKUMAR/shop_app',
    cover: img('shopApp/shopAppMockup.png'),
    coverFitHeight: true,
    type: 'mobile'
  },
  {
    name: 'Meeting App',
    techs: [
      { name: 'Flutter' },
      { name: 'Firebase' },
    ],
    description:
      'I made this app using Flutter and an sdk i.e. videoSdk for video call. Here, user can create a meeting or can join an existing one by entering meeting id. In the meeting, all the necesary controls are available like mic mute/unmute, camera on/off and end call.',
    cover: img('meetingApp/meetingAppMockup.png'),
    coverFitHeight: true,
    type: 'mobile'
  },
]

/** The two projects featured on the home page (tech icon order differs from the projects page). */
export const FEATURED_PROJECTS = [
  {
    name: 'Fullstack Chat App',
    url: 'https://fullstack-chat-app-n8wp.onrender.com',
    techs: [
      { name: 'tailwind' },
      { name: 'reactjs' },
    ],
    // label: 'Realtime messaging',
    description: PROJECTS[0].description,
    image: { src: img('chatApp/chatApp.png'), alt: 'chat app' },
  },
  {
    name: 'Draw Magic',
    url: 'https://draw-magic.vercel.app/',
    techs: [
      { name: 'Reactjs' },
      { name: 'Tailwind CSS' },
    ],
    // label: 'Collaborative canvas',
    description: PROJECTS[4].description,
    image: { src: img('draw_magic/ draw-mac-dark.png'), alt: 'Draw Magic' },
  },
]
