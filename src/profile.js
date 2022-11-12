// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false
};
// Change your display name on tha landing display
const header = {
  name: 'Lokesh Kabra'
};
const background = {
  // Options: Snow or Particle
  type: 'Snow'
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = 'About Me';
const about = {
  paragraph: `Bss Krishna bhakt hu!!\n
              Self-taught.\n
              A Diligent Coder.\n
              Chess player.\n
              Gym.\n
              Future Entrepreneur.\n
              Future Scientist.\n
              For a good change and love. ❤\n
              Always with good people. 😇`
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: 'HTML5',
    faClass: 'fab fa-html5'
  },
  {
    name: 'CSS3',
    faClass: 'fab fa-css3'
  },
  {
    name: 'Javascript',
    faClass: 'fab fa-js'
  },
  {
    name: 'Node',
    faClass: 'fab fa-node'
  },
  {
    name: 'Python',
    faClass: 'fab fa-python'
  },
  {
    name: 'PHP',
    faClass: 'fab fa-php'
  },
  {
    name: 'MongoDB',
    faClass: 'fas fa-database'
  },
  {
    name: 'DevOps',
    faClass: 'fas fa-server'
  },
  {
    name: 'Problem Solving',
    faClass: 'fas fa-lightbulb'
  },
  {
    name: 'Docker',
    faClass: 'fab fa-docker'
  },
  {
    name: 'Windows',
    faClass: 'fab fa-windows'
  },
  {
    name: 'Yarn',
    faClass: 'fab fa-yarn'
  },
  {
    name: 'Ubuntu',
    faClass: 'fab fa-ubuntu'
  },
  {
    name: 'Stripe',
    faClass: 'fab fa-stripe-s'
  },
  {
    name: 'Digital Ocean',
    faClass: 'fab fa-digital-ocean'
  },
  {
    name: 'AWS',
    faClass: 'fab fa-aws'
  },
  {
    name: 'Stack Overflow',
    faClass: 'fab fa-stack-overflow'
  },
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = 'Past Projects';
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: 'project1',
    name: `Blogger's Fest`,
    skills: [
      'HTML5',
      'CSS3',
      'Javascript',
      'React',
      'Node',
      'Heroku',
      'Git',
      'Github',
      'MongoDB',
      'Express'
    ],
    url: 'https://blogger-fest-frontend.vercel.app/'
  },
  {
    // Add image in './styles/images.css' in #project1
    id: 'project2',
    name: `You can help today`,
    skills: [
      'HTML5',
      'CSS3',
      'Javascript',
      'React',
      'Nextjs',
      'Heroku',
      'Git',
      'Github',
      'MongoDB'
    ],
    url: 'https://youcanhelptoday.vercel.app/'
  },
  {
    // Add image in './styles/images.css' in #project1
    id: 'project3',
    name: `TeleChat`,
    skills: [
      'HTML5',
      'CSS3',
      'Javascript',
      'Socket.io',
      'React',
      'Heroku',
      'Git',
      'Github',
      'MongoDB',
      'Express',
      'Node'
    ],
    url: 'https://telechat-my.vercel.app/'
  }
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = 'On-Going Projects';
const miscellaneous = [
  {
    // Add image in './styles/images.css' in #misc1
    id: 'on-going1',
    name: 'Timeline Social',
    url: 'https://github.com/timeline-social'
  },
  {
    // Add image in './styles/images.css' in #misc1
    id: 'on-going2',
    name: 'MarketZi',
    url: 'https://app.marketzi.com/'
  },
  {
    // Add image in './styles/images.css' in #misc1
    id: 'on-going3',
    name: 'Impresiot',
    url: 'https://impresiot.com/'
  },
  {
    // Add image in './styles/images.css' in #misc1
    id: 'on-going4',
    name: 'We are engineers',
    url: 'https://werengineers.vercel.app/'
  }
];
// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = 'Get in Touch';
const contact = {
  pitch:
    'I am always open to new opportunities and challenges. If you have any questions, please feel free to contact me.',
  copyright: 'Lokesh Kabra',
  contactUrl: 'https://formspree.io/f/xzbwvpyd'
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: 'https://github.com/lokesh-developer',
  // facebook: 'https://facebook.com',
  twitter: "https://twitter.com/lokesh__kabra",
  instagram: 'https://instagram.com/lokesh_kabra',
  linkedin: 'https://linkedin.com/in/lokeshkabra',
  // resume: 'https://novoresume.com/'
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title
};
