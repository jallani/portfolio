import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/cv1.png';
import Work2 from './assets/e1.png';
import Work3 from './assets/hb1.png';
import Work4 from './assets/sk.png';
import Work5 from './assets/port.PNG';
import Work6 from './assets/port.PNG';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Ghulam',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Gillani',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '28 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Pakistan',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Islamabad',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+923485613566',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'ghulamgillani19252@gmail.com',
  },

  // {
  //   id: 9,
  //   title: 'Skype : ',
  //   description: 'steve.milner',
  // },

  {
    id: 10,
    title: 'Langages : ',
    description: 'Urdu, English',
  },
];

export const stats = [
  {
    id: 1,
    no: '2+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '91+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '81+',
    title: 'Happy <br /> Customers',
  },

  // {
  //   id: 4,
  //   no: '53+',
  //   title: ' Awards <br /> Won',
  // },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2023 - PRESENT',
    title: 'Web Developer <span> Egeeks Global </span>',
    desc: 'Design and develop user interfaces for web applications, taking into account usability and design aesthetics.Maintain all websites of the company.Create and maintain web pages and applications using HTML,CSS, and JavaScript. Collaborate with back-end developers to ensure functionality and integration of front-end elements.',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'March 2022 - october 2022',
    title: 'Digital Marketing and web development<span> Upscale Real Estate (UAE) </span>',
    desc: 'Develop and maintain digital marketing campaigns to promote products and services Monitor and analyze website traffic flow and provide regular internal reports. Create and manage link building strategies and content marketing campaigns.Track conversion rates and make improvements to the website. Utilize a range of techniques including paid search, SEO and PPC. Manage and maintain the organization’s website(s).',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2021 - 2022',
    title: 'Android App And Web Developer <span> KB Tech Solution PvT LTD  </span>',
    desc: 'Design and build advanced applications for the Android platform. Collaborate with cross-functional teams to define, design, and ship new features. Work with outside data sources and APIs. Work on bug fixing and improving application performance. Develop the user interface and integrate with backend services. Design, build and maintain high performance, reusable, and reliable Java code.',
  },
  {
    id: 4,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'Nov 2020 - Dec 2020',
    title: 'Oracle developer <span> Kohinoor Textile Mills Limited  </span>',
    desc: 'Develop Oracle Report and Form.Work with my seniors on HR System.',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2020',
    title: 'Software Engineering (BS-SE) <span> Riphah Internation University </span>',
    desc: 'I have Done My Softwae Engineering Degree with 60% in 2020 from Riphah International University',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2015',
    title: 'Intermediate <span> Steps College </span>',
    desc: 'I passed my internediate exams in 2015 with 47% ',
  },

  {
    id: 7,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2013',
    title: 'Matric <span> Sir Syed Public School </span>',
    desc: 'I passed Matric exams With 67% in 2013',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '75',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '65',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '70',
  },

  {
    id: 4,
    title: 'Php',
    percentage: '66',
  },

  {
    id: 5,
    title: 'Wordpress',
    percentage: '50',
  },

  {
    id: 6,
    title: 'Jquery',
    percentage: '50',
  },

  {
    id: 7,
    title: 'Angular',
    percentage: '65',
  },

  {
    id: 8,
    title: 'React',
    percentage: '55',
  },
  {
    id: 9,
    title: 'Android',
    percentage: '65',
  },
  {
    id: 10,
    title: 'Java',
    percentage: '55',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Website Development',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'website',
      },
      {
        icon: <FiUser />,
        title: 'Office : ',
        desc: 'Egeeks Global',
      },
      {
        icon: <FaCode />,
        title: 'Framework : ',
        desc: 'Codeigniter',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://thecvmine.com/',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Website Development',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Egeeks Global',
      },
      {
        icon: <FaCode />,
        title: 'Framework : ',
        desc: 'Codeigniter',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://www.earthsolar.org/',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Web development',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Egeeks Global',
      },
      {
        icon: <FaCode />,
        title: 'Framework : ',
        desc: 'Codeigniter',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://hybridresearchcenter.com/',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Web Development',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Egeeks Global',
      },
      {
        icon: <FaCode />,
        title: 'FrameWork : ',
        desc: 'Codeigniter',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://connectwithshameel.com/',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Android App Development',
    details: [
      {
        title: 'Project : ',
        desc: 'Android app',
      },
      {
        title: 'Client : ',
        desc: 'Zamil',
      },
      {
        title: 'Language : ',
        desc: 'Android Native,Java',
      },
      {
        title: 'Preview : ',
        desc: 'https://play.google.com/store/apps/details?id=com.zamili.shop',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Web Development',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Portfolio',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: '',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React Js',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: '',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
