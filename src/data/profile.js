import { ICONS } from './skillIcons'

export const INTRO =
  'Results-driven Software Developer working in a product-based environment, contributing to core functionalities and end-to-end feature development. Known for delivering reliable solutions, improving user journeys, and enhancing product efficiency.'

export const PROFILE_PHOTO = '/resources/images/me.png'

/** `logo: 'supplymint'` renders the inline SVG logo; `tall` is the taller Zysk logo box. */
export const EXPERIENCE = [
  {
    role: 'Software Engineer',
    company: 'Supplymint | Gurgaon',
    period: 'June 2024 - Present',
    logo: 'supplymint',
  },
  {
    role: 'React Developer',
    company: 'Zysk technologies | Bangalore',
    period: 'Nov 2023 - June 2024',
    logo: { src: '/resources/images/exp/Zysk.png', alt: 'Zysk' },
    tall: true,
  },
  {
    // the about page capitalises this title/company differently from the home page
    role: 'Software trainee engineer',
    roleAbout: 'Software Trainee Engineer',
    company: 'Tapasvi info solutions | Hathras',
    companyAbout: 'Tapasvi Info Solutions | Hathras',
    period: 'Nov 2022 - April 2023',
    logo: { src: '/resources/images/exp/Tapasvi.jpeg', alt: 'Tapasvi info solutions' },
  },
]

// Kept exactly as on the live site (including "Flutter" listed twice).
export const SKILL_CHIPS = [
  'HTML',
  'CSS',
  'Javascript',
  'Reactjs',
  'Redux',
  'Redux-toolkit',
  'Nextjs',
  'Nodejs',
  'Express',
  'MongoDB',
  'Tailwind',
  'Bootstrap',
  'Material UI',
  'Typescript',
  'Java',
  'Flutter',
  'Framer motion',
  'Flutter',
  'SASS',
  'Firebase',
]

export const TECH_STACK = [
  { name: 'HTML', icon: ICONS.html, alt: 'HTML' },
  { name: 'CSS', icon: ICONS.css, alt: 'CSS' },
  { name: 'Javascript', icon: ICONS.javascriptPlain, alt: 'Javascript' },
  { name: 'Reactjs', icon: ICONS.reactjs2, alt: 'React js' },
  { name: 'Redux', icon: ICONS.redux, alt: 'Redux' },
  { name: 'Nextjs', icon: ICONS.nextjs, alt: 'Nextjs' },
  { name: 'Nodejs', icon: ICONS.nodejs, alt: 'Nodejs' },
  { name: 'Express', icon: ICONS.express, alt: 'Express' },
  { name: 'MySQL', icon: ICONS.mysql, alt: 'MySQL' },
  { name: 'MongoDB', icon: ICONS.mongodb, alt: 'MongoDB' },
  { name: 'Tailwind', icon: ICONS.tailwind, alt: 'Tailwind' },
  { name: 'Material UI', icon: ICONS.mui, alt: 'Material UI' },
  { name: 'Bootstrap', icon: ICONS.bootstrap, alt: 'Bootstrap' },
  { name: 'Typescript', icon: ICONS.typescript, alt: 'Typescript' },
  { name: 'Flutter', icon: ICONS.flutter, alt: 'Flutter' },
  { name: 'Firebase', icon: ICONS.firebase, alt: 'Firebase' },
  { name: 'Java', icon: ICONS.java, alt: 'Java' },
  { name: 'Github', icon: ICONS.github, alt: 'Github' },
  { name: 'Framer Motion', icon: ICONS.framerMotion, alt: 'Framer Motion' },
  { name: 'SASS', icon: ICONS.sass, alt: 'SASS' },
  { name: 'Cursor', icon: ICONS.cursor, alt: 'Cursor' },
  { name: 'VS Code', icon: ICONS.vscode, alt: 'VS Code' },
]

/** `picFirst` alternates the image/text order like the original layout. */
export const EDUCATION = [
  {
    years: '2019 - 2022',
    course: 'Bachelor Of Science (CS) - DBRAU Agra',
    institution: 'Rajiv Academy For Technology & Management Mathura',
    image: '/resources/images/education/ratm.webp',
    picFirst: true,
  },
  {
    years: '2017 - 2019',
    course: 'Intermediate - CBSE Board',
    institution: 'Seemax International School Sasni, Hathras',
    image: '/resources/images/education/seemax.jpg',
    picFirst: false,
  },
  {
    years: '2017',
    course: 'Highschool - CBSE Board',
    institution: 'Kendriya Vidyalaya Hathras',
    image: '/resources/images/education/kv.png',
    picFirst: true,
  },
]

export const HOBBIES = [
  { label: 'Listening music', image: '/resources/images/hobbies/music3.webp', alt: 'music' },
  { label: 'Coding', image: '/resources/images/hobbies/coding3.webp', alt: 'coding' },
  { label: 'Tech savvy', image: '/resources/images/hobbies/techsavvy2.webp', alt: 'tech savvy' },
  { label: 'Playing Football', image: '/resources/images/hobbies/football.png', alt: 'playing football' },
]

const cert = (file) => `/resources/certificates/${file}`

export const CERTIFICATES = {
  javascript: { src: cert('javascript-basic-certificate-Hackerrank.jpg'), alt: 'javascript certificate' },
  frontend: { src: cert('Frontend-certificate-Simplilearn.jpg'), alt: 'Frontend certificate' },
  sql: { src: cert('SQL.jpg'), alt: 'SQL certificate' },
  aiIntro: { src: cert('Intro to AI - Coursera UZE6179PVABM_page-0001.jpg'), alt: 'Introduction to AI certificate' },
  maxProdWithAI: { src: cert('Maximize productivity - Coursera MEHUDGSNDIKW_page-0001.jpg'), alt: 'Maximize Productivity with AI certificate' },
  html: { src: cert('HTML-certificate-MyGreatLearning.jpg'), alt: 'html certificate' },
  css: { src: cert('css-certificate-Hackerrank.jpg'), alt: 'css certificate' },
  java: { src: cert('java-basic certificate-Hackerrank.jpg'), alt: 'Java certificate' },
}

export const ALL_CERTIFICATES = [
  CERTIFICATES.javascript,
  CERTIFICATES.frontend,
  CERTIFICATES.maxProdWithAI,
  CERTIFICATES.aiIntro,
  CERTIFICATES.sql,
  CERTIFICATES.html,
  CERTIFICATES.css,
  CERTIFICATES.java,
]
