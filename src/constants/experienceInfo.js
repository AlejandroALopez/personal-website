import PhoneIcon from "../assets/phone.svg";
import MonitorIcon from "../assets/monitor.svg";
import BigPhoneIcon from "../assets/phone-big.svg";
import BigMonitorIcon from "../assets/monitor-big.svg";
import taskchemyImg from '../assets/projects/taskchemy.svg';
import afkImg from '../assets/projects/afk.svg';

export const personalProjectsData = [
  {
    title: "Task Manager",
    name: "Taskchemy",
    hostedURL: "taskchemy.vercel.app",
    description:
      "Keep track of daily tasks and daily routines with this user friendly web application.",
    tools: "React, Next.js, Tailwind CSS, Node.js, Express.js, MongoDB, Figma",
    image: taskchemyImg,
  },
  {
    title: "E-Commerce",
    name: "AFK",
    hostedURL: "afk-ecommerce.vercel.app",
    description:
      "E-commerce app for buying gaming laptops, mice, keyboards and headsets. Customize your desired laptop to achieve the best gaming experience.",
    tools: "React, Next.js, Tailwind CSS, Node.js, Express.js, MongoDB, Figma",
    image: afkImg,
  },
];

export const projectsData = [
  {
    name: "ConnectUS",
    type: "Internship",
    role: "Full Stack Developer",
    stack: "React, HTML, Javascript, Sass, Typescript, Firebase, NestJS, Azure",
    timeline: "Jun 2022 - Sep 2022",
    text: [
      "I joined the startup ConnectUS as a full stack intern during my junior summer. My tasks revolved around improving their existing web application: an employee management app.",
      "The most remarkable features I developed were personalized group meeting scheduling (previously the app could only do 1:1s), more flexible scheduling (monthly, weekly, biweekly, etc.), allow user to display their company logo on the app, edit follow-up notes, and bug fixes on the whole app.",
      "I spent most of my time working on their React frontend, but sometimes I interacted with their backend which used NestJS, Firebase, and Typescript, technologies unfamiliar to me at the time.",
    ],
    icon: MonitorIcon,
    bigIcon: BigMonitorIcon,
  },
  {
    name: "EQ2",
    type: "DALI Project",
    role: "Full Stack Developer",
    stack:
      "React Native, Javascript, Sass, Express, Node, MongoDB, AWS S3, MERN stack",
    timeline: "Mar 2021 - Sep 2021",
    text: [
      "The partners at the Lionheart Foundation created a program called EQ2, which trains and supports direct care staff working with high-risk, trauma-impacted youth (e.g. youth involved in child welfare or juvenile detention systems). As part of this program, they envisioned a mobile app to help with such process.",
      "During the first term, me alongside 2 DALI developers created the frontend, backend, and database for the app, building around 2/3 of the final product in 10 weeks. The second term was during the summer break, and I worked as a solo developer in the project to finish the remaining features and deploy a usable version.",
      "Some of the features developed involve using AWS S3 to retrieve video and audio for the app, a progress system where the user moves through modules by watching instructive videos, and a flexible goal-tracking system to encourage frequent use of the app.",
      "The EQ2 app was released from the lab as an alpha version, and the partners were provided both the codebase and a Testflight build for further development and testing.",
    ],
    icon: PhoneIcon,
    bigIcon: BigPhoneIcon,
  },
  {
    name: "BayesEM",
    type: "DALI Project",
    role: "Full Stack Developer & Dev Mentor",
    stack: "React Native, Javascript, Sass, Flask, MongoDB",
    timeline: "Mar 2022 - May 2022, Sep 2022 - Nov 2022",
    text: [
      "Dr. Matthew R. Babineau and Dr. Jennifer V. Pope work at the Dartmouth Hitchcock Medical Center (DHMC), and they contacted DALI to develop a mobile app to help emergency doctors run probabilistic diagnoses quickly yet informed. The main feature of the app was to allow doctors to input a patient’s symptoms and the app uses data from medical literature and Bayesian inference to compute likelihoods for different possible underlying diseases.",
      "After the first term at DALI, our team managed to create an MVP with core functionality accessible through Expo. The second term, the team focused on improving this MVP to be more user-friendly, intuitive, and functional, resulting in an alpha version in Testflight.",
      "Currently, the app is ready to be used for gathering funding for the project that plans to use it, so DHMC residents and doctors can use it to aid their decision-making.",
    ],
    icon: PhoneIcon,
    bigIcon: BigPhoneIcon,
  },
  {
    name: "DALI Flex",
    type: "DALI Project",
    role: "Full Stack Developer",
    stack: "React, HTML, Javascript, Sass, SQL, Chart.js",
    timeline: "Mar 2023 - May 2023",
    text: [
      "The DALI Flex team was recently formed, consisting of a group of experienced DALI developers to work on small and medium sized issues from multiple projects, as well as production tasks from projects released from the lab. As part of this team, I helped two DALI teams with Full Stack development tasks. ",
      "The first team was Mgame, a React web app to encourage patients to achieve their recovery goals. I worked with them for 4 weeks, improving their landing page and creating a dashboard with graphs from Chart.js.",
      "The second team was Smart Microscope, a project that uses computer vision to create images of microorganism that can be sent to a special microscope, letting the user study and magnify such images as they would do with real organisms in a laboratory. I helped them by creating a user-friendly React frontend so users can manage the images to display, their information, and many other details.",
    ],
    icon: MonitorIcon,
    bigIcon: BigMonitorIcon,
  },
];
