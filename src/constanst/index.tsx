import {
  backend,
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
  car_forum,
  chatApp,
  myStorage,
  open_chat_ai,
  picture_me,
  e_shop
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

const projects = [
  {
    _id: 0,
    title: "Forum",
    description:
      "A web site for finding everithing for cars or publish your own article. Joining diferent forums or create your own one.",
    image: car_forum,
    tags: ["#React", "#Back4App"],
    liveDemo: "https://cars-forum.netlify.app/",
    source: "https://github.com/KirilSZyapkov/blog-cars",
  },
  {
    _id: 1,
    title: "Picture Me",
    description:
      "Social Media App using the following features, such as Google Authentication, create, edit, delete and save posts, like and comment on other people's posts, search and filter images.",
    image: picture_me,
    tags: ["#React", "#Back4App", "#Firebase Auth"],
    liveDemo: "https://picture-me-react-project.netlify.app/",
    source: "https://github.com/KirilSZyapkov/picture_me",
  },
  {
    _id: 2,
    title: "My Storage",
    description:
      "A Goole Drive clone app using Firebase Authentication, Firebase storage and Database. You can create an accound and store your files and creating new folders.",
    image: myStorage,
    tags: [
      "#React",
      "#Firebase Storage",
      "#Firebase Auth",
      "#Firebase Database",
    ],
    liveDemo: "",
    source: "https://github.com/KirilSZyapkov/my-storage",
  },
  {
    _id: 3,
    title: "Chat App",
    description: "A chat app that allows to communicate with your friends.",
    image: chatApp,
    tags: ["#React", "#Chat Engine"],
    liveDemo: "https://chat-app-uni.netlify.app/",
    source: "https://github.com/KirilSZyapkov/chat-app",
  },
  {
    _id: 4,
    title: "Open Chat AI",
    description: "An AI GPT chat app using the latest OpenAI technology.",
    image: open_chat_ai,
    tags: ["#Vnila JS", "#Express", "#OpenAI"],
    liveDemo: "https://open-chat-ai.netlify.app/",
    source: "https://github.com/KirilSZyapkov/open_chat_ai",
  },
  {
    _id: 5,
    title: "E Shop",
    description:
      "Small e-shop with open cart allowing you to add items you like to buy. A payment system is also integrated which alows you to make real payments with cards.",
    image: e_shop,
    tags: ["#React JS", "#Express", "#Stripe, #TypeScript"],
    liveDemo: "",
    source: "",
  },
];

export { services, technologies, projects };
