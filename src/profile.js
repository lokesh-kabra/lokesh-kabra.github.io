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
  type: 'Particle'
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = 'About Me';
const about = {
  paragraph: `Mai toh bss Krishna bhakt hu!!
Self-taught.
A Diligent Coder.
Chess player.
Gym.
Future Entrepreneur.
Future Scientist.
For a good change and love. ❤
Always with good people. 😇`
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: 'HTML5',
    // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
    // svg: 'M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z',
    faClass: 'fab fa-html5'
  },
  {
    name: 'CSS3',
    // svg: '',
    faClass: 'fab fa-css3'
  },
  {
    name: 'Javascript',
    // svg: '',
    faClass: 'fab fa-js'
  },
  {
    name: 'Node',
    // svg: '',
    faClass: 'fab fa-node'
  },
  {
    name: 'Python',
    // svg: '',
    faClass: 'fab fa-python'
  },
  {
    name: 'PHP',
    // svg: '',
    faClass: 'fab fa-php'
  },
  {
    name: 'MongoDB',
    svg: [
      {
        fill: '#599636',
        path: 'M15.9.087l.854 1.604c.192.296.4.558.645.802.715.715 1.394 1.464 2.004 2.266 1.447 1.9 2.423 4.01 3.12 6.292.418 1.394.645 2.824.662 4.27.07 4.323-1.412 8.035-4.4 11.12-.488.488-1.01.94-1.57 1.342-.296 0-.436-.227-.558-.436-.227-.383-.366-.82-.436-1.255-.105-.523-.174-1.046-.14-1.586v-.244C16.057 24.21 15.796.21 15.9.087z'
      },
      {
        fill: '#6cac48',
        path: 'M15.9.034c-.035-.07-.07-.017-.105.017.017.35-.105.662-.296.96-.21.296-.488.523-.767.767-1.55 1.342-2.77 2.963-3.747 4.776-1.3 2.44-1.97 5.055-2.16 7.808-.087.993.314 4.497.627 5.508.854 2.684 2.388 4.933 4.375 6.885.488.47 1.01.906 1.55 1.325.157 0 .174-.14.21-.244a4.78 4.78 0 0 0 .157-.68l.35-2.614L15.9.034z'
      },
      {
        fill: '#c2bfbf',
        path: 'M16.754 28.845c.035-.4.227-.732.436-1.063-.21-.087-.366-.26-.488-.453-.105-.174-.192-.383-.26-.575-.244-.732-.296-1.5-.366-2.248v-.453c-.087.07-.105.662-.105.75a17.37 17.37 0 0 1-.314 2.353c-.052.314-.087.627-.28.906 0 .035 0 .07.017.122.314.924.4 1.865.453 2.824v.35c0 .418-.017.33.33.47.14.052.296.07.436.174.105 0 .122-.087.122-.157l-.052-.575v-1.604c-.017-.28.035-.558.07-.82z'
      }
    ]
    // faClass: 'fas fa-database'
  }
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
  }
];
// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = 'Get in Touch';
const contact = {
  pitch:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae.',
  copyright: 'Lokesh Kabra',
  contactUrl: ''
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: 'https://github.com',
  facebook: 'https://facebook.com',
  // twitter: "https://twitter.com",
  instagram: 'https://instagram.com',
  linkedin: 'https://linkedin.com',
  resume: 'https://novoresume.com/'
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
