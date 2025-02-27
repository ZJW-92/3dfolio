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
  stekspade,

  boras,
  gbg,
  usst,
  xin,
  hermods,
  studium,

  vete, 
  pommes,
  baguette,
  grot,
  gurka,
  tomat,
  fisk,
  kyckling,
  meatball,
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
    title: "Utbildning",
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
    icon: stekspade,
  },

  {
    name: "Matlab",
    icon: studium,
  },
  
  {
    name: "JavaScript",
    icon: gbg,
  },
 
  {
    name: "React JS",
    icon: hermods,
  },

  {
    name: "Tailwind CSS",
    icon: boras,
  },

  {
    name: "threejs",
    icon: usst,
  },

  {
    name: "git",
    icon: xin,
  },


];

const experiences = [
  {
    title: "Storkökskock, ykesutbildning ",
    company_name: "Studium Restaurang Vux, Göteborg",
    icon: studium, 
    iconBg: "#383E56",
    date: "jan 2025 - pågående",
    points: [
      "Matlagning 1",
      "Matlagning 2",
      "Matlagning 3",
      "Hygien med egenkontroll",
      "Livsmedel och näringskunskap",
      
    ],
  },
  

  {
    title: "Freelancer",
    company_name: "Shanghai, Kina",
    icon: xin,
    iconBg: "#383E56",
    date: "feb 2023- juni 2024",
    points: [
      "Programmering egna projekt på Github",
      
    ],
  },

  {
    title: "Kandidatexamen med huvudområdet Software Engineering and Management",
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
    title: "SFI, svenska som andraspråk 1, 2",
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
    title: "Masterexamen inom industriell ekonomi",
    company_name: "University of Shanghai for Science and Technology, Shanghai, Kina",
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
    name: "Köttbullar med potatismos och gräddsås",
    description:
      "Köttbullar med gräddsås och kokt potatis är en klassisk husmansrätt som är populär hos hela familjen, alltid ett säkert kort! Servera med pressgurka och lingon.",
    tags: [
      {
        name: "Huvudrätt",
        color: "blue-text-gradient",
      },
      {
        name: "Matlåda",
        color: "green-text-gradient",
      },
      {
        name: "Lunch",
        color: "pink-text-gradient",
      },
      {
        name: "Middag",
        color: "blue-text-gradient",
      },

    ],
    image: meatball,
    source_code_link: "https://www.arla.se/recept/kottbullar/",
  },


  {
    name: "Kycklingschnitzel med ris och currysås",
    description:
      "En klassisk rätt måste ju vara en schnitzel, men här görs den inte på kalv utan på kyckling. Och det går ju minst lika bra! Ät den tillsammans med en currydipp och ris.",
    tags: [
      {
        name: "Huvudrätt",
        color: "blue-text-gradient",
      },
      {
        name: "Matlåda",
        color: "green-text-gradient",
      },
      {
        name: "Middag",
        color: "blue-text-gradient",
      },
      
    ],
    image: kyckling,
    source_code_link: "https://www.ica.se/recept/kycklingschnitzel-med-currydipp-727006/",
  },

  {
    name: "Klassisk fiskgratäng",
    description:
      "En klassisk fiskgratäng består av torsk, vitvinssås och pommes duchesse. Denna fiskgratäng blir otroligt god och passar utmärkt att servera vid festliga tillfällen.",
    tags: [
      {
        name: "Huvudrätt",
        color: "blue-text-gradient",
      },
      {
        name: "Matlåda",
        color: "green-text-gradient",
      },
      {
        name: "Frysbar",
        color: "pink-text-gradient",
      },
    ],
    image: fisk,
    source_code_link: "https://www.arla.se/recept/klassisk-fiskgratang/",
  },

  {
    name: "Baguette med räkröra",
    description:
      "Somrig picknickmat för hela familjen är det här! En egen variant på skagenröra med räkor och ägg fyller baguetten.",
    tags: [
      {
        name: "Picknickmat",
        color: "blue-text-gradient",
      },
      {
        name: "Lunch",
        color: "green-text-gradient",
      },
      {
        name: "Middag",
        color: "pink-text-gradient",
      },
    ],
    image: baguette,
    source_code_link: "https://www.ica.se/recept/baguette-med-rakrora-och-avokado-715105/",
  },

  {
    name: "Tomatsås (grundrecept)",
    description:
      "Italienarnas favoritsås! Riv lök, vitlök, morot och selleri fint och koka ihop med krossade tomater och kryddor. Servera till pasta eller använd som bas i andra maträtter.",
    tags: [
      {
        name: "Middag",
        color: "blue-text-gradient",
      },
      {
        name: "Snabbmat",
        color: "green-text-gradient",
      },
      {
        name: "Matlådad",
        color: "pink-text-gradient",
      },
    ],
    image: tomat,
    source_code_link: "https://www.ica.se/recept/tomatsas-grundrecept-722161/",
  },

  {
    name: "Pommes duchesse",
    description:
      "Pommes Duchesse spritsas till fina toppar som sedan gratineras i ugn. Ett utmärkt mos att använda när du lagar fiskgratäng.",
    tags: [
      {
        name: "Middag",
        color: "blue-text-gradient",
      },
      {
        name: "Matlåda",
        color: "green-text-gradient",
      },
      {
        name: "Lunch",
        color: "pink-text-gradient",
      },
    ],
    image: pommes,
    source_code_link: "https://www.ica.se/recept/pommes-duchesse-duchessetoppar-713057/",
  },

  {
    name: "Inlagd gurka med ättika",
    description:
      "Delikat och utsökt pressgurka. Charmant klassiker, skivad gurka i effektfull ättikslag. Idealisk till mustiga grillade köttbitar. Makalöst gott också till köttbullar med kokt potatis.",
    tags: [
      {
        name: "Frukost",
        color: "blue-text-gradient",
      },
      {
        name: "Tillbehör",
        color: "green-text-gradient",
      },
      {
        name: "Snabbmat",
        color: "pink-text-gradient",
      },
    ],
    image: gurka,
    source_code_link: "https://www.ica.se/recept/pressgurka-5070/",
  },

  {
    name: "Mannagrynsgröt",
    description:
      "Snabbt och enkelt är det att koka len och mjuk mannagrynsgröt. Perfekt som frukost eller mellanmål både till barn och vuxna. Toppa med kanel, rivet äpple, torkad frukt eller din favoritsylt.",
    tags: [
      {
        name: "Frukost",
        color: "blue-text-gradient",
      },
      {
        name: "Efterrätt",
        color: "green-text-gradient",
      },
      {
        name: "Mellanmål",
        color: "pink-text-gradient",
      },
    ],
    image: grot,
    source_code_link: "https://www.arla.se/recept/mannagrynsgrot/",
  },


  {
    name: "Fröknäcke",
    description:
      "Enkelt och gott glutenfritt hemlagat knäckebröd, fullt med olika sorters fröer. Bryt i oregelbundna bitar och servera med goda röror till.",
    tags: [
      {
        name: "Mellanmål",
        color: "blue-text-gradient",
      },
      {
        name: "Efterrätt",
        color: "green-text-gradient",
      },
      {
        name: "Glutenfri",
        color: "pink-text-gradient",
      },
    ],
    image: vete,
    source_code_link: "https://www.ica.se/recept/froknacke-716579/",
  },

];

export { services, technologies, experiences, testimonials, projects };
