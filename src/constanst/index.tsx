import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  next,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  car_forum,
  chatApp,
  myStorage,
  open_chat_ai,
  picture_me,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },

  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    _id: 0,
    title: "Forum",
    description:
      "A web site for finding everithing for cars or publish your own article. Joining diferent forums or create your own one.",
    image: car_forum,
    tags: ["React", "Back4App"],
    liveDemo: "https://cars-forum.netlify.app/",
    source: "https://github.com/KirilSZyapkov/blog-cars",
  },
  {
    _id: 1,
    title: "Picture Me",
    description:
      "Social Media App using the following features, such as Google Authentication, create, edit, delete and save posts, like and comment on other people's posts, search and filter images.",
    image: picture_me,
    tags: ["React", "Back4App", "Firebase Auth"],
    liveDemo: "https://picture-me-react-project.netlify.app/",
    source: "https://github.com/KirilSZyapkov/picture_me",
  },
  {
    _id: 2,
    title: "My Storage",
    description:
      "A Goole Drive clone app using Firebase Authentication, Firebase storage and Database. You can create an accound and store your files and creating new folders.",
    image: myStorage,
    tags: ["React", "Firebase Storage", "Firebase Auth", "Firebase Database"],
    liveDemo: "",
    source: "https://github.com/KirilSZyapkov/my-storage",
  },
  {
    _id: 3,
    title: "Chat App",
    description: "A chat app that allows to communicate with your friends.",
    image: chatApp,
    tags: ["React", "Chat Engine"],
    liveDemo: "https://chat-app-uni.netlify.app/",
    source: "https://github.com/KirilSZyapkov/chat-app",
  },
  {
    _id: 4,
    title: "Open Chat AI",
    description: "An AI GPT chat app using the latest OpenAI technology.",
    image:open_chat_ai,
    tags: ["Vnila JS", "Express", "OpenAI"],
    liveDemo: "https://open-chat-ai.netlify.app/",
    source: "https://github.com/KirilSZyapkov/open_chat_ai",
  },
];

export { services, technologies, experiences, testimonials, projects };
