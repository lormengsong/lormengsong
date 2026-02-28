import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  HeartIcon,
  HomeIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import FacebookIcon from '../components/Icon/FacebookIcon';
import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic2 from '../images/profilepic2.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'ឡោ ម៉េងសុង | Lor Mengsong',
  description: "Lor Mengsong resume for apply API developer",
  keywords: ['lormengsong', 'ឡោ ម៉េងសុង', 'Lor Mengsong', 'lormengsong.vercel.app', 'portfolio', 'developer'],
  ogImageUrl: "/og-image.jpg",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];
const currentYear = new Date().getFullYear();
const birthYear = 2003;
const age = currentYear - birthYear;
const startwork = 2022;
const worktime = currentYear - startwork;
/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Lor Mengsong.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Phnom Penh based <strong className="text-stone-100">Back-End/Front-end Developer</strong>, currently working
        at <strong className="text-stone-100">Mobile C&C Technology</strong> helping build a Web System Application.
        I have experience <strong className="text-stone-100">{worktime} years</strong> plus for Web Development or fullstack Web Development.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you can find me training in <strong className="text-stone-100">cafe or koi</strong>,
        and <strong className="text-stone-100">room</strong>, exercise at the pagoda or school such as {' '}
        <strong className="text-stone-100">Royal University of Phnom Penh</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */

export const aboutData: About = {
  profileImageSrc: profilepic2,
  description: `I'm a passionate back-end and front-end developer with a knack for crafting robust and scalable solutions that power dynamic web applications with ${worktime} years plus of experience in the industry, I thrive on tackling complex challenges and architecting efficient systems.`,
  aboutItems: [
    { label: 'Location', text: 'Phnom Penh City', Icon: MapIcon },
    { label: 'Age', text: age.toString(), Icon: CalendarIcon },
    { label: 'Nationality', text: 'Cambodia / Khmer', Icon: FlagIcon },
    { label: 'Interests', text: 'Researching,Read Book,Listen Song', Icon: SparklesIcon },
    { label: 'Hometown', text: 'Kompong Cham', Icon: HomeIcon },
    { label: 'Status', text: 'Single', Icon: HeartIcon },
    { label: 'Study', text: 'Royal University of Phnom Penh', Icon: AcademicCapIcon },
    { label: 'Employment', text: 'Mobile C&C Co Ltd', Icon: BuildingOffice2Icon },

  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Khmer',
        level: 10,
      },
      {
        name: 'English',
        level: 7,
      }
    ],
  },
  {
    name: 'Basic Programing',
    skills: [
      {
        name: 'C Pro',
        level: 9,
      },
      {
        name: 'C++ / OOP Pro',
        level: 9,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'PHP',
        level: 9,
      },
      {
        name: 'LARAVEL',
        level: 8,
      },
      {
        name: 'CAKEPHP',
        level: 9,
      },
      {
        name: 'JAVA',
        level: 7,
      },
      {
        name: 'C#',
        level: 7,
      },
      {
        name: 'AJAX',
        level: 9,
      },
      {
        name: 'REST API',
        level: 7,
      },
      {
        name: 'MICRO SERVICE',
        level: 7,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [

      {
        name: 'VUE / VUETIFY',
        level: 9,
      },
      {
        name: 'React',
        level: 8,
      },
      {
        name: 'Jquery',
        level: 9,
      },
      {
        name: 'Javascript',
        level: 9,
      },
      {
        name: 'HTML',
        level: 9,
      },
      {
        name: 'CSS',
        level: 9,
      },
      {
        name: 'BOOSTRAP',
        level: 9,
      },
      {
        name: 'SCSS SASS TAIWIND',
        level: 9,
      },
      {
        name: 'TYPESCRIPT',
        level: 9,
      },
    ],
  },
  {
    name: 'Database Management System',
    skills: [
      {
        name: 'SQL',
        level: 8,
      },
      {
        name: 'MYSQL',
        level: 8,
      },
      {
        name: 'ORACLE',
        level: 7,
      }
    ],
  },
  {
    name: 'Version Control',
    skills: [
      {
        name: 'GIT',
        level: 8,
      },
      {
        name: 'GITHUB/GITLAB',
        level: 9,
      },
      {
        name: 'SVN',
        level: 7,
      }
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'E-commerce Website',
    description: 'Show Product on business e-commerce.',
    url: 'https://emengsong.000webhostapp.com/Ecommerce-app-h/index.php',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://t.me/MENGSONGLOR',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://t.me/MENGSONGLOR',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://t.me/MENGSONGLOR',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://t.me/MENGSONGLOR',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://t.me/MENGSONGLOR',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://t.me/MENGSONGLOR',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://t.me/MENGSONGLOR',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://t.me/MENGSONGLOR',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://t.me/MENGSONGLOR',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://t.me/MENGSONGLOR',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
const dateRange = `2021 - ${currentYear <= 2024 ? "Present" : "2024"}`;
export const education: TimelineItem[] = [
  {
    date: '2007-2017',
    location: 'Anlong Ork Primary And Secondary School',
    title: 'Primary Degree',
    content: <p>Secondary school typically involves studying a variety of subjects, having different teachers for each subject, taking exams and assessments, participating in extracurricular activities, and experiencing personal and social development. It's a time of academic challenges and personal growth.</p>,
  },
  {
    date: '2017-2020',
    location: 'Hun Sen Kchao High School',
    title: 'High Degree',
    content: <p>Over the three years of high school, I experienced significant growth and development. In freshman year, I navigated the transition to high school, explored various subjects, and made new friends while also joining clubs to explore my interests. I became more involved in extracurricular activities and even took on a leadership role. Junior year was marked by academic intensity, focusing on standardized tests and delving deeper into specific areas of interest through advanced classes and specialized programs. It was also the time when serious college research began. In senior year, I faced the culmination of my high school journey, with a busy schedule dedicated to college applications, finalizing transcripts, and preparing for graduation. </p>,
  },
  {
    date: dateRange,
    location: 'Royal Unversity Of Phnom Penh',
    title: 'Bachelor Degree of Computer Science',
    content: <p>
      {currentYear <= 2024 ? (
        "I'm studying year 4 of computer science at Royal University of Phnom Penh. "
      ) : (
        "I finished bachelor's degree of computer science since 2024 at Royal Unversity of Phnom Penh. "
      )}
      Bachelor's Degree in Computer Science provides comprehensive education in computing. Typically a four-year program covering programming, algorithms, software development, include soft skills and more Includes both theoretical knowledge and hands-on practical skills Involves projects, assignments, and possibly internships for real-world application.
      Opens doors to careers in software development, systems analysis, cybersecurity, and artificial intelligence.
    </p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Sep 2021 - Dec 2022',
    location: 'ETEC CENTER School',
    title: 'ETEC Instructor',
    content: (
      <p>
        I am an instructor at ETEC Center with 1 year of teaching experience. I teach subjects related to basic programming, including C, C++, and Object-Oriented Programming (OOP). I also teach Basic Networking and Computer Maintenance.
        In Web Design, I teach HTML, CSS, Bootstrap, JavaScript, and jQuery. For backend development, I teach PHP and Laravel, using AJAX to build dynamic websites that integrate frontend and backend functionality.
      </p>
    ),
  },
  {
    date: 'Jan 2023 - Auguest 2024',
    location: 'Udaya Technology',
    title: 'BackEnd/FrontEnd Developer',
    content: (
      <p>
        I am a Back-End Developer at Udaya Technology. I use programming languages and technologies such as HTML, CSS, Bootstrap, JavaScript, jQuery, AJAX, PHP, and the CakePHP framework to maintain and develop systems. I also use React.js to build web application frontends.
        <br /><span>Projects include:</span><br />
        <b>1.</b> Maintained and developed systems such as the SAS (Simplified Accounting System) and a School Management System using the CakePHP MVC framework. <br />
        <b>2.</b> Built management systems including Udaya Attendance and VET Attendance using the React.js framework. <br />
        <b>3.</b> Developed the <em>VET Express Booking website and miniapp VET at ABA</em> booking using VUE JS 2  <b>  <a href="https://vireakbuntham.com" target="_blank" title='https://vireakbuntham.com'>Click link</a> </b>
      </p>
    ),
  },
  {
    date: 'Auguest 2024 - Present',
    location: 'Mobile C&C',
    title: 'FrontEnd Developer',
    content: (
      <p>
        I am a Frontend Developer at Mobile C&C. I used programing language  such as HTML CSS SCSS TAIWIND Javascript VUEJS VUETIFY TYPESCRIPT PINIA React JS. <br />
        <b>.</b> Designed responsive web pages and applications using HTML, CSS, and SCSS TAIWIND. <br />
        <b>.</b> Developed and built web applications and app interfaces using Vue.js and the Ionic framework including CESCO KR App and Hiplus KR App.<br />
        <b>.</b> Collaborated with the Korean team and partner teams to create intuitive, logically structured, and visually engaging UI screens. <br />
        <b>.</b> Fixed bugs and performed client-requested maintenance on web applications, such as the Hanwha KR Project. <br />
        <b>.</b> Proactively learning new technologies, including React.js, Flutter, and Dart, to expand front-end and cross-platform development skills. <br />
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'ព្រះពុទ្ធ',
      text: 'សុភមង្គលនឹងមិនអាចកើតមានឡើងចំពោះអ្នកដែលមិនសប្បាយចិត្តជាមួយនឹងរបស់ដែលខ្លួនកំពុងមាននោះឡើយ​។សុភមង្គលវាមិនអាស្រ័យថាតើអ្នកជានរណា ឫអ្វីដែលអ្នកមាននោះទេ តែវាអាស្រ័យលើអ្វីដែលអ្នកគិត។',
      image: '/images/i6.jpg',
    },
    {
      name: 'Albert Einstein',
      text: `Doing the same thing over and over again and expecting different result.You never fail until you stop trying.If you can not explain it simply, you don't understand it well enough`,
      image: '/images/i1.jpg',
    },
    {
      name: 'Nikola Tesla',
      text: 'If you only knew the magnificence of 3, 6 and 9 , then you would have a key to the universe.If you want to find the secrets of the Universe, think in terms of energy, frequency and vibration.',
      image: '/images/i2.jpeg',
    },
    {
      name: 'ព្រះ​ភិរម្យ​ភាសា អ៊ូ​ (ក្រមង៉ុយ)',
      text: 'បើចង់ស្រាលខ្លួន រៀនសូត្រឱ្យមួន ឱ្យមាំឱ្យស្ទាត់ កុំចេះស្ទាក់ស្ទើរ ល្ងីល្ងើឥតបទ បើចេះប្រាកដ ប្រាក់រត់តាមហៅ។ កុំថ្នមកម្លាំង កាប់ជីកចូកចាំង កុំថារងាក្តៅ ធ្វើអ្វីឱ្យឆ្អិន កុំឱ្យខ្លោចឆៅ កុំដេកតែខ្លៅ ក្រក្រៅ សណ្តាប់។ បើល្ងង់ឱ្យចេះ រករៀនតម្រិះ រិះរកតម្រាប់ ឥន្ទ្រិយឆ្វេងស្តាំ កុំចាំគេប្រាប់ រៀនស្តីរៀនស្តាប់ រៀនមើលឱ្យស្តែង។ កើតមកជាមនុស្ស ទោះស្រីទោះប្រុស មិនដែលចេះឯង បើក្រឱ្យមាន វិញ្ញាណចេះក្រែង គិតគ្រប់កន្លែង កុំដេកតែក្រ។',
      image: '/images/i3.jpg',
    },
    {
      name: 'ឡោ ម៉េងសុង',
      text: 'Your success will be determined by your own confidence and fortitude , confidence needs only good people.',
      image: '/images/i8.jpg',
    },
    {
      name: 'Why nice girls hate me ?',
      text: "It's important to remember that individual experiences and feelings can vary, so it's not accurate to generalize why 'nice girls' might have a certain perception of you. However, if you're experiencing this, it could be due to a variety of reasons, such as miscommunication, differing values, or past experiences. It's best to engage in open and respectful communication to understand each other better.",
      image: '/images/i7.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'lormengsong@gmail.com',
      href: 'mailto:lormengsong@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Phnom Penh, Camobodia',
      href: 'https://www.google.com/maps/place/2002+Market/@11.5558953,104.886286,17.13z/data=!4m6!3m5!1s0x310951ae15593bbf:0xafd4c54add5a0536!8m2!3d11.556306!4d104.885682!16s%2Fg%2F11rlxz3880?entry=ttu',
    },
    {
      type: ContactType.Instagram,
      text: '@lormengsong',
      href: 'https://www.instagram.com/lormengsong/',
    },
    {
      type: ContactType.Facebook,
      text: '@loa.mengsong',
      href: 'https://www.facebook.com/loa.mengsong',
    },
    {
      type: ContactType.Github,
      text: '@lormengsong',
      href: 'https://github.com/lormengsong',
    },
    {
      type: ContactType.Phone,
      text: '0963109195',
      href: 'tel:096-310-9195',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: 'Facebook', Icon: FacebookIcon, href: 'https://web.facebook.com/loa.mengsong' },
  { label: 'Github', Icon: GithubIcon, href: 'https://github.com/lormengsong' },
  { label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://www.facebook.com/loa.mengsong' },
  { label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/mengsong-lor-6a984b259/' },
  { label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/lormengsong/' },
  { label: 'Twitter', Icon: TwitterIcon, href: 'https://t.me/MENGSONGLOR' },
];
