import birthdayImg from './assets/01-birthday.png';
import toursImg from './assets/02-tours.png';
import reviewsImg from './assets/03-reviews.png';
import accordionImg from './assets/04-accordion.png';
import menuImg from './assets/05-menu.png';
import tabsImg from './assets/06-tabs.png';
import ColorGeneratorImg from './assets/09-color-generator.png';

const domain = 'sausamui.xyz'

const data = [
  {
    id: 1,
    name: 'Birthday Reminder',
    link: `https://01-birthday-buddy.${domain}/`,
    vercel_link: 'https://01-birthday-reminder.vercel.app/',
    img: birthdayImg,
    github: 'https://github.com/effycoco/01-birthday-reminder',
  },
  {
    id: 2,
    name: 'Tours',
    link: `https://02-tours.${domain}/`,
    vercel_link: 'https://02-tours-eight.vercel.app/',
    img: toursImg, 
    github: 'https://github.com/effycoco/02-tours',

  },
  {
    id: 3,
    name: 'Reviews',
    link: `https://03-reviews.${domain}/`,
    vercel_link: 'https://03-reviews.vercel.app/',
    img: reviewsImg,
    github: 'https://github.com/effycoco/03-reviews',

  },
  {
    id: 4,
    name: 'Accordion',
    link: `https://04-accordion.${domain}/`,
    vercel_link: 'https://04-accordion.vercel.app/',
    img: accordionImg, 
    github: 'https://github.com/effycoco/04-accordion',

  },
  {
    id: 5,
    name: 'Menu',
    link: `https://05-menu.${domain}/`,
    vercel_link: 'https://05-menu.vercel.app/',
    img: menuImg,
    github: 'https://github.com/effycoco/05-menu',

  },
  {
    id: 6,
    name: 'Tabs',
    link: `https://06-tabs.${domain}/`,
    vercel_link: 'https://06-tabs.vercel.app/',
    img: tabsImg,
    github: 'https://github.com/effycoco/06-tabs',
  },
  {
    id: 9,
    name: 'Color Generator',
    link: `https://09-color-generator.${domain}/`,
    vercel_link: 'https://09-color-generator.vercel.app/',
    img: ColorGeneratorImg,
    github: 'https://github.com/effycoco/09-color-generator',
  }

];

export default data;