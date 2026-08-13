import config from '~/config.json';

export const navLinks = [
  {
    label: 'Projects',
    pathname: '/#project-1',
  },
  {
    label: 'Details',
    pathname: '/#details',
  },
  {
    label: 'Resume',
    pathname: '/resume',
  },
  {
    label: 'Articles',
    pathname: '/articles',
  },
  {
    label: 'Uses',
    pathname: '/uses',
  },
  {
    label: 'Contact',
    pathname: '/contact',
  },
];

export const socialLinks = [
  {
    label: 'LinkedIn',
    url: `http://linkedin.com/in/${config.linkedin}`,
    icon: 'figma',
  },
  {
    label: 'Github',
    url: `http://github.com/${config.github}`,
    icon: 'github',
  },
];
