
// ========================== Header Data
const headerIds = [
  "home",
  "profile",
  "education",
  "skills",
  "experience",
  "projects",
  "softwareSkills",
  "certificates",
];
const HeaderLinks = [
  {
    linkText: "Home",
    linkID: "home",
    boxIcon: "bx-home",
  },
  {
    linkText: "Profile",
    linkID: "profile",
    boxIcon: "bx-user",
  },
  {
    linkText: "Education",
    linkID: "education",
    boxIcon: "bx-book",
  },
  {
    linkText: "Skills",
    linkID: "skills",
    boxIcon: "bx-receipt",
  },
  {
    linkText: "Experience",
    linkID: "experience",
    boxIcon: "bx-briefcase-alt",
  },
  {
    linkText: "Certificates",
    linkID: "certificates",
    boxIcon: "bx-award",
  },
  {
    linkText: "Projects",
    linkID: "projects",
    boxIcon: "bx-book",
  },
  {
    linkText: "Software Tools",
    linkID: "softwareSkills",
    boxIcon: "bx-receipt",
  },
  //   {
  //     linkText: "References",
  //     linkID: "references",
  //     boxIcon: "bx-link-external",
  //   },
];

//  ===================================== Left Section Content =============================== //
// ========================== Home Data
const homeData = {
  homeTitle1: "Akashkumar",
  homeTitle2: "Jeyaraman",
  homeProfession: "Front-end Developer",
  homeInformation: [
    {
      text: " Banglore",
      icon: "bx-map",
    },
    {
      text: "jeyakashkumar@gmail.com",
      icon: "bx-envelope",
    },
    {
      text: " +91 9894888106",
      icon: "bx-phone",
    },
  ],
};

// ========================== Social Links
const socialLinks = {
  title: "Social",
  links: [
    {
        link: "https://www.linkedin.com/in/akashkumar-jeyaraman-865188196/",
        text: "Akashkumar Jeyaraman",
        icon: "bxl-linkedin-square",
      },
      {
        link: "https://github.com/Akashkumar-JeyaramansJeyaramans",
        text: "Akashkumar Jeyaraman",
        icon: "bxl-github",
      },
    {
      link: "https://www.instagram.com/akash_robbering_hearts_/",
      text: "Akashkumar Jeyaraman",
      icon: "bxl-instagram",
    },
    {
      link: "https://www.linkedin.com/in/akashkumar-jeyaraman-865188196/",
      text: "Akashkumar Jeyaraman",
      icon: "bxl-facebook",
    },
   
  ],
};

// ========================== Profile Data
const profileData = {
  title: "Profile",
  //   Here you can add as much paragraph as you can
  descriptions: [
    `I am a developer with an engineering mind and creativity is my passion. I am
        self-disciplined, highly motivated, having multi-tasking ability with polished
        technical skills.`,
    `I have experience in the freelance market as well as working with a small
        startup as a front end developer`,
  ],
};

// ========================= Education Data
const educationData = {
  title: "Education",
  educations: [
    {
      title: "MISTRE",
      studies: "Grenoble-INP Esisar",
      year: "2019 - 2020",
      line: true,
    },
    {
      title: "B.E Electrical and Electronics Engineering",
      studies: "Adhiyamaan College Of Engineering, Hosur",
      year: "2013 - 2017",
      line: false,
    },
  ],
};

// ========================= Skills Data
const skillsData = {
  title: "Skills",
  //   Here you can add further skills array
  skills: [
    [`Html`, `Css`,`Javascript`,`ReactJs`,'Redux-Toolkit', ],
    [ 'nodeJs','Golang','grpc','protobuf','grpcGateway'],
  ],
};
const logoText = "Akash.";
const menuIcon = "bx-grid-alt";
// ========================= Skills Data
const SoftwareSkillsData = {
    title: "Software Tools",
    //   Here you can add further skills array
    skills: [
      ['Visual Studio code','github','MongoDB Compess','ms-office'],
      [ 'Postman','Docker Desktop','AzureDevops','Google apps'],
    ],
  };

//  ===================================== Right Section Content =============================== //

// ======================== Certificates Data
const certificatesData = {
  title: "Certificates",
  certificates: [
    {
      title:"Full Stack Web Development Course Certificate from Crampte (May-Dec 2021)",
      describe:
        "This six months course help me to get the detail knowledge about frontend, backend, frameworks and database etc...",
    },
  ],
};

// ========================= Experience Data
const experienceData = {
  title: "Experience",
  experiences: [
    {
      title: "Atech / Front-end Developer",
      company: "2021 - PRESENT",
      describe:[{
        p1:"* Discussing the project with team members arround the world.",
        p2:"* Creating UI based on Figma.",
        p3:"* Used various tecchnologies, Including Javascript to make code repairs and optimizecorporate websites.",
        p4:"* Converted Mockups into HTML, CSS, Javascript and JSON.",
        p5:"* Writing unit test and incorporate backend with frontend to accompolish the web app.",
        p6:"* Testing Api in postman to use the data in the Frontend."
      }],
      line: true,
    },
    {
      title: "Hardware Design Engineer( Intern )",
      company: "Jun 2020 - Nov 2020",
      describe:[{
        p1:"* Design a kit to perform a multi-function of the POE switch for the DC smart Buildings",
        p2:"* The POE switch to perform the energy and Data transmission to the DC applications",
        p3:"* Test the kit with the automation of DC Architecture",
        p4:"* Programming and Testing STM33MP151C chip",
        p5:"* Writting test benches and debug the program",
        p6:"* Creating test sccenarios and designing end to end test cases."
      }], line: true,
    },
    {
        title: "Hardware Design and Test Engineer",
        company: "2017 - 2019",
        describe:[{
        p1:"* Creating a scematic diagram for the PCB in the OrCAD tool, and Generate the Gerber files for the fabrication.",
        p2:"* Quality Test, Reverse Engineering and Debugging of printed Circuit Boards",
        p3:"",
        p4:"",
        p5:"",
        p6:""
      }],
        line: false,
      },
  ],
};

// ========================= Project Data

const projectData = {
    title: "Projects",
    experiences: [
      {
        title: "Mib Browser",
        company: "2 months",
        describe:
          "I created Mib browser UI for the NMS project and i handle the message calls get,set,walk and trap. In this part i handle the JSON file to a Tree structure in the UI. I used Material-UI Library ",
        line: true,
      },
      {
        title: "Inventory Management",
        company: "2 months",
        describe:
          "I created the UI for the inventory to the NMS software which having the ability to sort, filter,search,reducing columns,date sort,etc...",
        line: true,
      },
      {
        title: "Custom Events",
        company: "1 month",
        describe: "Custom events for a webpage which is handling the event messages and custom bars to show the defects.",
        line: true,
      },
      {
        title: "E-commerce App",
        company: "2021",
        describe: "I created an e-commerce app with both frontend and backend to learn MERN Stack. In that sample App i used mongoDb as database as well.",
        line: true,
      },
      {
          title: "Games",
          company: "2021",
          describe:"I created simple games rock paper sesiors and tic tok toe to learn about reactjs.",
          line: false,
        },
    ],
  };
// ========================= Languages Data
const languageData = {
  title: "Languages",
  languages: ["English", "Tamil"],
};

// ========================= INTERESTS Data
const interestsData = {
  title: "INTERESTS",
  interests: [
    {
      icon: "bxs-plane-alt",
      text: "Travel",
    },
    {
      icon: "bx-headphone",
      text: "Gaming",
    },
    {
      icon: "bx-book",
      text: "Reading",
    },
  ],
};
export {
  HeaderLinks,
  logoText,
  menuIcon,
  homeData,
  socialLinks,
  profileData,
  educationData,
  skillsData,
  certificatesData,
  experienceData,
  languageData,
  interestsData,
  headerIds,
  projectData,
  SoftwareSkillsData,
};
