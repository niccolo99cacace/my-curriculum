import aboutpic from "./components/Access/mePhoto.jpg"

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://niccolo99cacace.github.io/my-curriculum/',
  title: 'NC.',
}

const about = {
  photo:aboutpic,
  // all the properties are optional - can be left empty or deleted
  name: "NICCOLO' CACACE",
  role: 'Developer',
  description:
    'Based in Castellammare di Stabia, I hold a degree in Computer Science from the University of Salerno. I am passionate about developing web and software applications, with a particular fondness for the programming languages Java and JavaScript. My keen interest lies in emerging technologies, especially artificial intelligence, a field that I find incredibly inspiring because of its revolutionary impact.I am curious and always in search of new challenges that allow me to stay at the forefront of technological innovation, convinced that continuing to learn and adapt is crucial for actively contributing to the future of computing.',

  social: {
    linkedin: 'https://www.linkedin.com/in/niccol%C3%B2-cacace-7a2553248/',
    github: 'https://github.com/niccolo99cacace',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Book Market',
    description:
      'BookMarket is a books e-commerce with which you can view and eventually buy books sorted by category. The project also has an authentication system and a section dedicated to the admin where you can manage the sale of books.',
    stack: ['Java', 'MySQL', 'jQuery','HTML-CSS-JavaScript','AJAX'],  
    sourceCode: 'https://github.com/niccolo99cacace/BookMarket',
  },
  {
    name: 'MediDossier',
    description:
      'MediDossier is a dashboard for displaying health records. The main feature is the configurable grid with which the user can manage the layout by resizing , moving and hiding the various components. The dashboard is also composed of an authentication system, and then the user can save his personal configuration on his personal account.',
    stack: ['Node.js', 'Express.js', 'MongoDB','React.js','Material-UI'],
    sourceCode: 'https://github.com/niccolo99cacace/Medi_Dossier',
    livePreview: 'https://obscure-chamber-98928.herokuapp.com/',
  },
  {
    name: 'Guarda TV',
    description:
      'GuardaTv is a cinema library service,which includes an internal rating system useful to the customer for the purpose of discovering new contents. Then , the program  allows the management of personal lists of digital contents. All this, including an authentication system and a section for admin to manage the entire platform.',
    stack: ['HTML-CSS-JavaScript', 'Java', 'Selenium'],
    sourceCode: 'https://github.com/niccolo99cacace/GuardaTv',
  },
  {
    name: 'NicoTech',
    description:
      'NicoTech is an e-commerce technology products developed using MERN technologies. It consists of a user interface equipped with asynchronous search engine, filters and the management of a shopping cart. It also has an authentication system using encrypted tokens and an admin-friendly interface for e-commerce manipulation (WORK IN PROGRESS ...)',
    stack: ['Node.js', 'Express.js', 'MongoDB','React.js', 'Material-UI'],
    sourceCode: 'https://github.com/niccolo99cacace/NicoTech',
    
  },

]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'JavaScript',
  'Java,
  'Python'
  'Node.js',
  'Express.js',
  'React',
  'SQL',
  'HTML',
  'CSS',
  'MongoDB',
  'Material UI',
  'Bootstrap',
  'Git',
  'MERN',
  'Selenium',
  'C',
  'Spring Boot',
  
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'niccolo99cacace@gmail.com',
}

export { header, about, projects, skills, contact }
