import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  threejs,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  boras,
  gbg,
  usst,
  xin,
  hermods,
  express,
  gitlab,

  face,
  web3,
  portfolio1,
  portfolio2,
  fitness,
  openai,
  recipe,
  smartcar,
  bigdata

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Embedded Developer",
    icon: web,
  },
 
  {
    title: "Computer Vision Engineer",
    icon: backend,
  },

  {
    title: "Image Processing Engineer",
    icon: mobile,
  },

  {
    title: "Data Analyst",
    icon: creator,
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
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "threejs",
    icon: threejs,
  },


  {
    name: "Express",
    icon: express,
  },


  {
    name: "gitlab",
    icon: gitlab,
  },


  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },

];

const experiences = [
  {
    title: "Postgraduate in Industrial Economics",
    company_name: "University of Shanghai for Science and Technology",
    icon: usst,
    iconBg: "#383E56",
    date: "September 2014 - June 2017",
    points: [
      "Master thesis 'Study on the Asymmetric Effect of Environmental Governance on Employment——Based on Panel Data of Prefecture-Level Cities in China' with specializing in SPSS statistical tool.",
      
    ],
  }, 

  {
    title: "Exchange student",
    company_name: "University of Borås",
    icon: boras,
    iconBg: "#383E56",
    date: "September 2015 - May 2016",
    points: [
      "Courses: International management, Supply Chain Management and Basic Swedish I and II.",
    ],
  },

  {
    title: "Chinese to English translator",
    company_name: "Shanghai Xinzhi Private Entry-Exit Service Co., Ltd.",
    icon: xin,
    iconBg: "#E6DEDD",
    date: "June 2017 - June 2018",
    points: [
      "Organize customers' immigration documents",
      "Translate document into English and proofread."
    ],
  },
  
  {
    title: "SFI & Swedish as second language 1, 2",
    company_name: "Hermods AB",
    icon: hermods,
    iconBg: "#E6DEDD",
    date: "September 2018 - May 2020",
    points: [
      "Svenska för invandrare D (SFI)",
      "Svenska som andraspråk 1",
      "Svenska som andraspråk 2"
    ],
  },
  

  {
    title: "Graduate in Software Engineering and Management",
    company_name: "University of Gothenburg",
    icon: gbg,
    iconBg: "#383E56",
    date: "September 2019 - June 2022",
    points: [
      "Experience in an Agile/Scrum development process",
      "Basic knowledge of user requirements and user experience",
      "Basic embedded and real-time system knowledge",
      "Basic knowledge of testing automation, software quality assurance and DevOps",
      "Experience of CI/CD tools: GitLab",
      "Basic database knowledge: MySQL, MongoDB",
      "Machine Learning and Deep Learning practice with jupyter notebook and python",
      "Basic applicable development languages: Java, JavaScript, Python.",
      "Basic web application frontend and framework (e.g. React, Vue) and backend framework (e.g. Django)"
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
    name: "Facial Emotion Detection",
    description:
      "A task of recognizing a person's emotional state among angry, disgust, fear, happy, neutral, sad and surprise using CNN deep learning technology.",
    tags: [
      {
        name: "OpenCV",
        color: "blue-text-gradient",
      },
      {
        name: "Keras",
        color: "green-text-gradient",
      },
      {
        name: "Tensorflow",
        color: "pink-text-gradient",
      },
      {
        name: "CNN",
        color: "blue-text-gradient",
      },

    ],
    image: face,
    source_code_link: "https://github.com/ZJW-92/facial_emotion_detection",
  },


  {
    name: "Web3 Blockchain Social Media App",
    description:
      "A decentralized social media application that you have your account but not privately owned but rather your account is saved in the public blockchain away from private ownership.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Lens Protocol",
        color: "green-text-gradient",
      },
      {
        name: "Chakra UI",
        color: "pink-text-gradient",
      },
      {
        name: "Ethers",
        color: "blue-text-gradient",
      },
      {
        name: "GraphQL",
        color: "green-text-gradient",
      },

    ],
    image: web3,
    source_code_link: "https://github.com/ZJW-92/web3_blockchain_app",
  },

  {
    name: "ChatGPT OpenAI",
    description:
      "A language model chatbot developed by OpenAI based on GPT 3.5. Users can interact with bot, require chatbot to write, debug code and explain almost everything.",
    tags: [
      {
        name: "Node.js",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAIApi",
        color: "green-text-gradient",
      },
      {
        name: "Vite",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
    ],
    image: openai,
    source_code_link: "https://github.com/ZJW-92/chatgpt_openai",
  },


  {
    name: "Optimal Recipe Blog",
    description:
      "A Content Management System (CMS) of showcasing different kinds of Asian cuisine with full markdown recipes, author information and comments.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "graphQL",
        color: "pink-text-gradient",
      },

      {
        name: "TailwindCSS",
        color: "blue-text-gradient",
      },

    ],
    image: recipe,
    source_code_link: "https://github.com/ZJW-92/cms_blog_app",
  },


  {
    name: "NeuroDrive Smart Car",
    description:
      "A software that allows end users to remotely control a smart car with the use of an EEG-headset and a mobile app. Moreover, the smart car can avoid obstacles in front and behind it by turning in the opposite direction.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "Java",
        color: "green-text-gradient",
      },
      {
        name: "Travis CI",
        color: "pink-text-gradient",
      },

      {
        name: "Arduino",
        color: "blue-text-gradient",
      },

    ],
    image: smartcar,
    source_code_link: "https://github.com/ZJW-92/DIT112-V20-Miniprojekt-Systemutveckling/blob/main/README.md",
  },

  {
    name: "Keep Fit fitness application ",
    description:
      "A fitness training application that help you browse and workout 1000+ exercises and more.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Material-UI",
        color: "green-text-gradient",
      },
      {
        name: "Rapid API",
        color: "pink-text-gradient",
      },
    ],
    image: fitness,
    source_code_link: "https://github.com/ZJW-92/keep_fit_fitness_app",
  },

  {
    name: "Big data COVID-19 analysis",
    description:
      "Big data analysis of COVID-19 epidemic worldwide through daily data which ranged from January 2020 to March 2021 from Johns Hopkins University. It visualizes how much and fast this epidemic spreads around the world.",
    tags: [
      {
        name: "Jupyter notebook",
        color: "blue-text-gradient",
      },
      {
        name: "pandas",
        color: "green-text-gradient",
      },
      {
        name: "pyecharts",
        color: "pink-text-gradient",
      },
    ],
    image: bigdata,
    source_code_link: "https://github.com/ZJW-92/bigData_COVID_Analysis",
  },


  {
    name: "Portfolio Version 1 ",
    description:
      "First version of my portfolio of introducing myself, my background, projects and technologies I have used in the past year 2022 and 2023 currently.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "Styled-components",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio1,
    source_code_link: "https://github.com/ZJW-92/personal_portfolio",
  },



  {
    name: "Portfolio Version 2 ",
    description:
      "Second version of my portfolio of introducing myself, my background, projects and technologies I have used in the past year 2022 and 2023 currently.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "React-icons",
        color: "green-text-gradient",
      },
      {
        name: "React-bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio2,
    source_code_link: "https://github.com/ZJW-92/portfolio_v2",
  },


];

export { services, technologies, experiences, testimonials, projects };
