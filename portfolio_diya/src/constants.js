// Skills Section Logo's
import tensorflowLogo from "./assets/tech_logo/tensorflowLogo.webp";
import kerasLogo from "./assets/tech_logo/kerasLogo.png";
import pytorchLogo from "./assets/tech_logo/pytorch.png";
import sklearnLogo from "./assets/tech_logo/sklearn.png";
import huggingfaceLogo from "./assets/tech_logo/huggingFace.svg";
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
import mongodbLogo from './assets/tech_logo/mongo.png';
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
import corecardlogo from './assets/company_logo/corecard.jpeg';
import mitslogo from './assets/company_logo/mitslogo.jpg';


// Education Section Logo's
import Mitslogo from './assets/education_logo/mitslogo.jpg';
import spslogo from './assets/education_logo/spslogo.png';

// Project Section Logo's
import medicalLogo from "./assets/work_logo/mental.webp";
import resumeLogo from "./assets/work_logo/resume_analyser.webp";
import lungsLogo from "./assets/work_logo/lungs.jpg";
import ImageLogo from './assets/work_logo/imagecaption.png';
import marksLogo from './assets/work_logo/student.webp';
import ganLogo from "./assets/work_logo/faces.jpg";
import netflixLogo from "./assets/work_logo/netflix.png";

import npmLogo from './assets/work_logo/npm.png';



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
      company: "CoreCard Software India Pvt. Ltd.,Bhopal",
      date: "Jun 2024- July 2024",
      desc: "During my internship at CoreCard, I created and replicated a website using HTML, CSS, JavaScript, and React, ensuring full responsiveness across devices. Alongside front-end development, I also gained exposure to backend concepts, enhancing my understanding of full-stack development and how frontend interacts with backend systems in real-world projects.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Tailwind CSS",
        "Bootstrap",
        "Responsive Design",
        
      ],
    },
    {
      img: Mitslogo,
      role: "Summer Intern",
      company: "Madhav Institute of Research and Technology(MITS),Gwalior",
      date: "Jun 2023 - July 2023",
      desc: "During my summer internship at MITS, Gwalior, I explored core concepts of Artificial Intelligence, including machine learning algorithms, neural networks, and real-world AI applications. This experience enhanced my theoretical understanding and practical skills, laying a strong foundation for building intelligent systems and deepening my interest in the AI and ML domain.",
      skills: [
        "Artificial Intelligence",
        "Pandas",
        "Numpy",
        "Matplolib",
        "scikit-learn",
       
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
      title: "Smart Resume Analyser",
      description:
        "I built a Smart Resume Analyzer using NLP to evaluate resumes and provide improvement suggestions. It integrates Gemini API for ATS scoring, grammar correction, and AI-generated customized cover letters. Additionally, it features a job scraping module that fetches and displays relevant job listings based on the user’s profile.It also has Admin Panel to display all the information.",
      image: resumeLogo,
      tags: ["NLP", "Spacy", "Gemini API", "Streamlit", "beautifulSoup","MySQLlite"],
      github: "https://github.com/Diyatayal/ResumeAnalyser",
      webapp: "",
    },
    {
      id: 1,
      title: "Smart Cure",
      description:
        "I developed a Medical Recommendation System that takes user symptoms as input and predicts the possible disease, along with personalized suggestions for diet, workout, and medications. It also includes a mental health chatbot to provide emotional support and guidance, enhancing the overall wellness experience for users through AI-driven recommendations.",
      image: medicalLogo,
      tags: ["Pandas", "scikit-learn", "ML-algorithms", "Gemini API", "Langchain"],
      github: "",
      webapp: "",
    },
    {
      id: 2,
      title: "Lungs Disease Prediction",
      description:
        "I developed a deep learning model using Convolutional Neural Networks (CNN) to classify chest X-ray images as Pneumonia, COVID-19, or Normal. The system features an interactive user interface with camera integration, allowing users to upload images in real time for instant, AI-powered medical diagnosis and assessment.",
      image: lungsLogo,
      tags: ["CNN", "Tensorflow", "OpenCV"],
      github: "",
      webapp: "",
    },
    {
      id: 3,
      title: "Network Security Pipeline",
      description:
        "",
      image: npmLogo,
      tags: ["React JS", "Node.js", "NPM", "Validation"],
      github: "",
      webapp: "",
    },
    {
      id: 4,
      title: "Image Captioning using CNN and RNN",
      description:
        "I developed an Image Captioning web application using a combination of Convolutional Neural Networks (CNN) for feature extraction and Recurrent Neural Networks (RNN) for generating descriptive captions. The project includes an intuitive user interface that allows users to upload images and receive AI-generated captions in real time.",
      image: ImageLogo,
      tags: ["Numpy", "Pandas", "Scikit-learn", "Tensorflow","Streamlit","CNN","RNN"],
      github: "",
      webapp: "",
    },
    {
      id: 5,
      title: "Student Marks Prediction",
      description:
        "I developed a Student Marks Prediction system using machine learning algorithms to analyze academic data and predict marks in subjects like Physics, Chemistry, and Math. The model achieves an accuracy of 89%, helping identify performance trends and support academic planning through intelligent, data-driven predictions.",
      image: marksLogo,
      tags: ["Numpy", "Pandas", "Scikit-learn", "ML-algorithms","Streamlit"],
      github: "",
      webapp: "",
    },
    {
      id: 6,
      title: "Human Face Generation using GANs",
      description:
        "I implemented a Generative Adversarial Network (GAN) to generate realistic facial images of humans. The model was trained on a dataset of human faces, learning to create high-quality, synthetic facial images by leveraging the adversarial training process between the generator and discriminator networks.",
      image: ganLogo,
      tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
      github: "",
      webapp: "",
    },
    {
      id: 7,
      title: "Neflix Clone Website",
      description:
        "I built a Netflix clone web application using the MERN stack—MongoDB, Express.js, React.js, and Node.js. The project features user authentication, movie browsing, and dynamic content rendering. It replicates core functionalities of Netflix with a responsive UI, real-time data handling, and seamless user experience across devices.",
      image: netflixLogo,
      tags: ["HTML", "CSS", "JavaScript", "React.js","Express.js","Node.js","MongoDB","Postman"],
      github: "",
      webapp: "",
    },
    
  ];  