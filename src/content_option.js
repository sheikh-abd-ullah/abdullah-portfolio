import myimg from "./assets/images/webBg.jpg";
import quasrAdmin from "./assets/images/q-a.png";
import passGen from "./assets/images/pg.png";
import todo from "./assets/images/tdl.png";
import weather from "./assets/images/w.png";
import sympQ from "./assets/images/sq.mp4";
import tpEditor from "./assets/images/tp-e.mp4";
import tpApi from "./assets/images/tp-api.png";
import tj1 from "./assets/images/tj-1.png";
import tinDog from "./assets/images/td.png";

const logotext = "M. ABDULLAH";
const meta = {
  title: "Muhamed Abdullah",
  description:
    "Muhammad Abdullah(Sheikh) - Your React Developer. Bringing your web projects to life with expertise in React, front-end magic, and a passion for results. Let's turn your ideas into reality!",
};

const introdata = {
  title: "I’m Muhammad Abdullah(Sheikh)",
  animated: {
    first: "A Front-end Developer",
    second: "Works on React.js",
    third: "A person who likes to learn new things everyday",
  },
  description:
    "Explore the world of Web with Muhammad Abdullah, a skilled React developer and web enthusiast. Discover a portfolio of innovative web projects, insights into front-end development, and a passion for creating user-centric experiences. Dive into a digital journey that blends technology and creativity.",
  your_img_url: myimg,
};

const dataabout = {
  title: "Introduction:",
  aboutme: `I'm Muhammad Abdullah, a React developer with a strong passion for web development. I have 1 year of hands-on experience working with React, JavaScript, and front-end technologies. My career journey began at StudioWebTechs, where I gained exposure to MERN stack development. I specialize in building user-friendly web interfaces and have a knack for translating design prototypes into functional web assets.

A notable achievement in my career is my contribution to the development of a web-based editor similar to Canva, using Fabric.js. I'm committed to staying current with industry trends and believe in effective communication and collaboration. Outside of work, I enjoy going on Trips.

In a nutshell, I'm a web developer ready to take on new challenges and contribute to innovative projects in the digital world. I look forward to exploring potential opportunities and making a positive impact.`,
};
const worktimeline = [
  {
    jobtitle: "Mern Stack Intern",
    where: "StudioWebTechs",
    date: "12/2022 - 06/2023",
  },
  {
    jobtitle: "Frontend Developer",
    where: "NexioSphere",
    date: "06/2023 - Present",
  },
];

const skills = [
  {
    name: "HTML5",
    value: 90,
  },
  {
    name: "CSS3/Scss",
    value: 85,
  },
  {
    name: "Bootstrap 5",
    value: 85,
  },
  {
    name: "Javascript(ES6)",
    value: 80,
  },
  {
    name: "React",
    value: 75,
  },
  {
    name: "Jquery",
    value: 85,
  },
  {
    name: "Git",
    value: 60,
  },
  {
    name: "Redux",
    value: 65,
  },
  {
    name: "Fabric.js",
    value: 83,
  },
];

const services = [
  {
    title: "Web Application Development",
    description:
      "Build responsive and feature-rich web applications tailored to your client's specific needs. Whether it's an e-commerce platform, a content management system, or a custom solution, I can develop it using React and other relevant technologies.",
  },
  {
    title: "Front-End Development",
    description:
      "Enhance the user experience by creating visually appealing and highly interactive front-end interfaces. I specialize in translating design mockups into pixel-perfect web assets that work seamlessly across devices.",
  },
  {
    title: "Custom Component Development",
    description:
      "Design and develop custom React components and libraries to extend the functionality of web applications. These components can be reused across projects for efficiency and consistency.",
  },
  {
    title: "REST API Integration",
    description:
      "Seamlessly connect your front-end applications with back-end services by integrating RESTful APIs. I can ensure efficient data transfer and synchronization between the client and server.",
  },
  {
    title: "Web Page Optimization",
    description:
      "Improve the performance and loading speed of web pages. Implement optimization techniques such as code splitting, lazy loading, and efficient bundling to enhance user experience and SEO rankings.",
  },
  {
    title: "Bug Fixing and Troubleshooting",
    description:
      "Identify and resolve issues in existing web applications. Debugging, troubleshooting, and applying fixes to ensure the smooth operation of your client's digital platforms.",
  },
  {
    title: "Responsive Design",
    description:
      "Create web applications that adapt gracefully to various screen sizes and devices. Ensuring a responsive design is crucial for reaching a broader audience.",
  },
  {
    title: "Code Refactoring:",
    description:
      "Enhance the maintainability and scalability of existing codebases. I can refactor your code to improve code quality, reduce technical debt, and optimize performance.",
  },
  {
    title: "Consultation and Guidance",
    description:
      "Provide expert advice and guidance on best practices in web development. Assist clients in making informed decisions about technology stacks, architecture, and project planning.",
  },
  {
    title: "Project Collaboration",
    description:
      "Collaborate with your clients, designers, and other team members to bring their project ideas to life. My experience in teamwork and communication ensures efficient project delivery.",
  },
];

const dataportfolio = [
  {
    img: quasrAdmin,
    description:
      "Quasr Admin is a React based admin template built with React, Redux, Bootstrap 5, and Reactstrap. It is a fully responsive and flexible admin template that is ideal for building dashboards, e-commerce systems, and other web applications.",
    link: "#",
  },
  {
    img: passGen,
    description:
      "A Password Generator that generates a random password based on user-selected criteria. It is built using React.",
    link: "https://github.com/sheikh-abd-ullah/password-generator.git",
  },
  {
    img: todo,
    description:
      "A Todo List app that allows users to add, edit, and delete tasks. It is built using React.",
    link: "#",
  },
  {
    img: weather,
    description:
      "A Weather App that displays the current weather conditions of a city. It is built using React.",
    link: "https://github.com/sheikh-abd-ullah/weathercity.git",
  },
  {
    img: sympQ,
    description:
      "Sympathy Q is a web-based e-commerce platform that allows users to buy medical stuff. It is built using React, Redux, Bootstrap 5, and Reactstrap.",
    link: "#",
  },
  {
    img: tpEditor,
    description:
      "A web-based editor similar to Canva, built using Fabric.js. It allows users to create banners using various tools and features.",
    link: "#",
  },

  {
    img: tpApi,
    description: "A web-based API Integration for a Project called Taj Print",
    link: "#",
  },
  {
    img: tj1,
    description: "A Project called Taj Print's Landing Page",
    link: "#",
  },
  {
    img: tinDog,
    description: "A Landing Page for a fictional app called TinDog",
    link: "https://github.com/sheikh-abd-ullah/tindogbymas.github.io.git",
  },
];

const contactConfig = {
  YOUR_EMAIL: "sheikhabdullah7347@gmail.com",
  // YOUR_PHONE: "",
  description:
    "Feel free to get in touch with me! Whether you have a web development project in mind, need advice on technology, or just want to connect, I'm here to help. I'm passionate about building great digital experiences and am always eager to explore new opportunities and collaborations.",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_id",
  YOUR_TEMPLATE_ID: "template_id",
  YOUR_USER_ID: "user_id",
};

const socialprofils = {
  facebook: "https://www.facebook.com/profile.php?id=100010200614459",
  github: "http://www.github.com/sheikh-abd-ullah",
  linkedin: "http://www.linkedin.com/in/sheikh-abdullah",
  instagram: "https://www.instagram.com/shyk.jsx/?igshid=c2owbzBkZWNtOXR4",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
