import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  threejs,
  matlab,
  html,
  css,
  reactjs,
  tailwind,
  git,
  boras,
  gbg,
  usst,
  xin,
  hermods,
 
  face,
  web3,
  portfolio1,
  portfolio2,
  fitness,
  openai,
  smartcar,
  bigdata

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Om mig",
  },
  {
    id: "work",
    title: "Erfarenhet",
  },
  {
    id: "contact",
    title: "Kontact",
  },
];

const services = [
  {
    title: "Fysiskt och mentalt stark",
    icon: web,
  },
 
  {
    title: "Ständig inlärning",
    icon: backend,
  },

  {
    title: "Bra på samarbeta",
    icon: mobile,
  },

  {
    title: "Problemlösare",
    icon: creator,
  },

];

const technologies = [
  {
    name: "Matlab",
    icon: matlab,
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
    name: "git",
    icon: git,
  },

];

const experiences = [
  {
    title: "Masterexamen inom industriell ekonomi",
    company_name: "University of Shanghai for Science and Technology",
    icon: usst,
    iconBg: "#383E56",
    date: "september 2014 - juni 2017",
    points: [
      "Examensarbete med specialisering i statistikverktyget SPSS",
      
    ],
  }, 

  {
    title: "Utbytesstudent",
    company_name: "Högskolan i Borås",
    icon: boras,
    iconBg: "#383E56",
    date: "september 2015 - maj 2016",
    points: [
      "Kurser: International management, Supply Chain Management samt grundläggande svenska I och II.",
    ],
  },

  {
    title: "Översättare från kinesiska till engelska",
    company_name: "Shanghai Xinzhi Private Entry-Exit Service Co., Ltd.",
    icon: xin,
    iconBg: "#E6DEDD",
    date: "juni 2017 - Juni 2018",
    points: [
      "Organisera kundernas immigrationsdokument",
      "Översätta dokument till engelska och korrekturläsa."
    ],
  },
  
  {
    title: "SFI & svenska som andraspråk 1, 2",
    company_name: "Hermods AB",
    icon: hermods,
    iconBg: "#E6DEDD",
    date: "september 2018 - maj 2020",
    points: [
      "Svenska för invandrare D (SFI)",
      "Svenska som andraspråk 1",
      "Svenska som andraspråk 2"
    ],
  },
  

  {
    title: "Kandidate examen i Software Engineering and Management",
    company_name: "Göteborgs universitet",
    icon: gbg,
    iconBg: "#383E56",
    date: "september 2019 - juni 2022",
    points: [
      "utvecklingsprocess med Agile/Scrum-teamarbete",
      "Java, JavaScript, Python.",
      "Frontend och ramverk för webbapplikationer(t.ex React, Vue)"
    ],
  },

  {
    title: "Freelancer",
    icon: xin,
    iconBg: "#383E56",
    date: "juni 2023- juni 2024",
    points: [
      "Programmering egna projekt på Github",
      
    ],
  },
 
];


const testimonials = [
  {
    
    testimonial:
      "Matlab Onramp",
    company: "MathWorks",
  
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "MathWorks",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "MathWorks",
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

];

export { services, technologies, experiences, testimonials, projects };
