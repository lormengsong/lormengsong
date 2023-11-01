import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

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
  title: 'Lor Mengsong',
  description: "Lor Mengsong resume template",
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

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Lor Mengsong.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Phnom Penh based <strong className="text-stone-100">Back End Developer</strong>, currently working
        at <strong className="text-stone-100">Udaya Techonology</strong> helping build a Web System Application.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you can catch me training in <strong className="text-stone-100">Cafe Amozon Or Koi</strong>,
        And <strong className="text-stone-100">Room at road 2022</strong>, exercise at the pagoda Or school such as {' '}
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
  description: `I'm a passionate back-end developer with a knack for crafting robust and scalable solutions that power dynamic web applications with 2 years of experience in the industry, I thrive on tackling complex challenges and architecting efficient systems.`,
  aboutItems: [
    {label: 'Location', text: 'Phnom Penh City', Icon: MapIcon},
    {label: 'Age', text: '21', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Cambodia / khmer', Icon: FlagIcon},
    {label: 'Interests', text: 'Motorcycles,Sing Song, Guitar, China Movie', Icon: SparklesIcon},
    {label: 'Study', text: 'Royal University of Phnom Penh', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Udaya Technology Co Ltd.', Icon: BuildingOffice2Icon},
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
        level: 6,
      }
    ],
  },
  {
    name: 'Basic Programing',
    skills: [
      {
        name: 'C programing',
        level: 8,
      },
      {
        name: 'C++ / OOP Programing',
        level: 8,
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
        level: 7,
      },
      {
        name: 'CAKEPHP',
        level: 9,
      },
      {
        name: 'JAVA',
        level: 5,
      },
      {
        name: 'C#',
        level: 5,
      },
      {
        name: 'AJAX',
        level: 8,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 6,
      },
      {
        name: 'Jquery',
        level: 8,
      },
      {
        name: 'Javascript',
        level: 6,
      },
      {
        name: 'HTML',
        level: 9,
      },
      {
        name: 'CSS',
        level: 8,
      },
      {
        name: 'BOOSTRAP',
        level: 8,
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
        level: 4,
      }
    ],
  },
  {
    name: 'Version Control',
    skills: [
      {
        name: 'GIT',
        level: 7,
      },
      {
        name: 'GITHUB/GUTLAB',
        level: 7,
      },
      {
        name: 'SVN',
        level: 6,
      }
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2014-2017',
    location: 'Anlong Ork Secondary School',
    title: 'Primary Degree',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: '2017-2020',
    location: 'Hun Sen Kchao High School',
    title: 'High Degree',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: '2021 - Present',
    location: 'Royal Unversity Of Phnom Penh',
    title: 'Bacholer Degree of Computer Science',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Sep 2021 - Nov 2022',
    location: 'ETEC CENTER School',
    title: 'ETEC Instructor',
    content: (
      <p>
        I am a instructor at ETEC CENTER . I used to teach related with basic C C++ OPP , Basic Network  and Maintenance , Web design have HTML CSS Boostrap Javascript Jquery , 
        Back end have PHP and Laravel with ajax build website for Front end with backend.
      </p>
    ),
  },
  {
    date: 'Jan 2022 - Present',
    location: 'Udaya Technology',
    title: 'BackEnd Developer',
    content: (
      <p>
        I am a back end developer at Udaya Technology. I ុused programing language  such as HTML CSS Boostrap Javascript Jquery Ajax PHP and Cakephp Framework to maintenance System And Use React js to build web application front end .
        Project such as
        Maintenance system  SAS(Simplified Accounting System) Using Cakephp MVC framework
        Build Management System have Udaya Attendance and VET Attendance
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
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
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
      href: 'lormengsong@gmail.com',
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
      text: '@SakanaTest',
      href: 'https://github.com/SakanaTest',
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
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/SakanaTest'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://www.facebook.com/loa.mengsong'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/mengsong-lor-6a984b259/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/lormengsong/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://t.me/MENGSONGLOR'},
];
