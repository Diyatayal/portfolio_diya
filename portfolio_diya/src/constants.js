// Skills Section Logo's
import tensorflowLogo from "./assets/tech_logo/tensorflowLogo.webp";
import kerasLogo from "./assets/tech_logo/keras.png";
import pytorchLogo from "./assets/tech_logo/pytorch.png";
import sklearnLogo from "./assets/tech_logo/sklearn.png";
import huggingfaceLogo from "./assets/tech_logo/huggingface.png";
import pandasLogo from "./assets/tech_logo/pandaslogo.png";
import excelLogo from "./assets/tech_logo/msexcel.png";
import matplotlibLogo from "./assets/tech_logo/matplotliblogo.png";
import jupyterLogo from "./assets/tech_logo/jupyter.png";
import NumpyLogo from "./assets/tech_logo/Numpy.png";
import seabornLogo from "./assets/tech_logo/seaborn.svg";
import powerbiLogo from "./assets/tech_logo/powerbi.png";
import geminiLogo from "./assets/tech_logo/gemini.png";
import flasklogo from "./assets/tech_logo/flasklogo.png";
import googlecolablogo from "./assets/tech_logo/googlecolablogo.png";
import fastapilogo from "./assets/tech_logo/fastapi.png";
import streamlitlogo from "./assets/tech_logo/streamlitlogo.png";
import rlogo from "./assets/tech_logo/r.jpg";
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Experience Section Logo's
import corecardlogo from './assets/company_logo/corecardlogo.jpg';
import mitslogo from './assets/company_logo/mitslogo.jpg';


// Education Section Logo's
import Mitslogo from './assets/education_logo/mitslogo.jpg';
import spslogo from './assets/education_logo/spslogo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Data Science',
    skills: [
      { name: 'Python', logo: pythonLogo },
      { name: 'Numpy', logo: NumpyLogo },
      { name: 'Pandas', logo: pandasLogo },
      { name: 'Matplotlib', logo: matplotlibLogo },
      { name: 'Seaborn', logo: seabornLogo },
      { name: 'Jupyter Notebook', logo: jupyterLogo },
      { name: 'Excel', logo:excelLogo},
      { name: 'PowerBI', logo: powerbiLogo },
      
    ],
  },
  {
    title: 'Machine Learning & Deep Learning',
    skills: [
      { name: 'Tensorflow', logo: tensorflowLogo },
      { name: 'Keras', logo: kerasLogo },
      { name: 'Pytorch', logo: pytorchLogo },
      { name: 'Scikit-learn', logo: sklearnLogo },
      { name: 'Hugging Face', logo: huggingfaceLogo },
      { name: 'Flask', logo: flasklogo },
      { name: 'GeminiAPI', logo: geminiLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'R', logo: rlogo },
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Google colab', logo: googlecolablogo},
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Streamlit', logo: streamlitlogo },
      { name: 'FastAPI', logo: fastapilogo },
      { name: 'MongoDB', logo: mongodbLogo },
      
      
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: corecardlogo,
      role: "Software Engineering Intern",
      company: "CoreCard Software India Pvt. Ltd.",
      date: "Jun 2024- July 2024",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: Mitslogo,
      role: "Fullstack Engineer",
      company: "Agumentik Group of Companies",
      date: "July 2023 - March 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
   
  ];
  
  export const education = [
    
    {
      id: 0,
      img: mitslogo,
      school: "Madhav Institute of Technology and Sciences(MITS),Gwalior",
      date: "Nov 2022 - Jun 2026",
      grade: "8.3GPA",
      desc: "I completed my B.Tech in Artificial Intelligence and Machine Learning from MITS, Gwalior, where I gained expertise in machine learning, deep learning, NLP, computer vision, and data structures and algorithms. The course provided strong practical and theoretical knowledge through projects, coding, and real-world problem-solving using AI technologies and DSA principles.",
      degree: "B.tech (Artificial Intelliegence and Machine Learning)",
    },
    {
      id: 1,
      img: spslogo,
      school: "Sagar Pubic School,Gandhi Nagar,Bhopal",
      date: "2021-2022",
      grade: "91%",
      desc: "I completed my 12th education from Sagar Public School with a specialization in Physics, Chemistry, and Mathematics (PCM), securing 91% in the CBSE Board Examination. This strong academic background helped me build a solid foundation in logical reasoning, analytical thinking, and problem-solving, which proved valuable in my engineering journey.",
      degree: "CBSE(XII) - PCM with Physical Education",
    },
    {
      id: 2,
      img: spslogo,
      school: "Sagar Public School,Gandhi Nagar,Bhopal",
      date: "2019-2020",
      grade: "94%",
      desc: "I completed my 10th grade from Sagar Public School with 94% in the CBSE Board Examination. This achievement laid a strong academic foundation and sparked my interest in science and technology, motivating me to pursue a technical career.",
      degree: "CBSE(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "GitHub Profile Detective",
      description:
        "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
      webapp: "https://githubprofiledetective.netlify.app/",
    },
    {
      id: 1,
      title: "CS Prep",
      description:
        "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
      image: csprepLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/codingmastr/CSPrep",
      webapp: "https://csprep.netlify.app/",
    },
    {
      id: 2,
      title: "Movie Recommendation App",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/codingmastr/Movie-Recommendation-App",
      webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
    {
      id: 3,
      title: "Email Validator NPM Package",
      description:
        "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
      image: npmLogo,
      tags: ["React JS", "Node.js", "NPM", "Validation"],
      github: "https://github.com/codingmastr/cmtk-email-validator",
      webapp: "https://www.npmjs.com/package/cmtk-email-validator",
    },
    {
      id: 4,
      title: "Task Reminder Chrome Extension Tool",
      description:
        "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
      image: taskremLogo,
      tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
      github: "https://github.com/codingmastr/Task-Reminder-Tool",
      webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
    },
    {
      id: 5,
      title: "Webverse Digital",
      description:
        "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
      image: webverLogo,
      tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
      github: "https://github.com/codingmastr/Webverse-Digital",
      webapp: "https://webversedigital.com/",
    },
    {
      id: 6,
      title: "Coding Master",
      description:
        "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
      image: cmLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
      github: "https://codingmasterweb.in/",
      webapp: "https://codingmasterweb.in/",
    },
    {
      id: 7,
      title: "Image Search App",
      description:
        "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
      image: imagesearchLogo,
      tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
      github: "https://github.com/codingmastr/Image-Search-App",
      webapp: "https://imagsearch.netlify.app/",
    },
    {
      id: 8,
      title: "Image Background Remover",
      description:
        "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
      image: removebgLogo,
      tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
      github: "https://github.com/codingmastr/Image-Background-Remover",
      webapp: "https://removeyourbg.netlify.app/",
    },
  ];  