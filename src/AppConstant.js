import MyViewRenderer from "./components/MyViewRenderer";
import NextViewBtn from "./components/NextViewBtn";
import TitleSpinner, { Title } from "./components/TitleSpinner";

import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import ExperiencePage from "./pages/ExperiencePage";

export const landingPageKey = "LANDING_PAGE";
export const portfolioPageKey = "PORTFOLIO_PAGE";
export const aboutPageKey = "ABOUT_PAGE";
export const experiencePageKey = "EXPERIENCE_PAGE";

export const DOWN_ARROW_KEY_CODE = 40;
export const LEFT_ARROW_KEY_CODE = 37;
export const RIGHT_ARROW_KEY_CODE = 39;
export const UP_ARROW_KEY_CODE = 38;

export const pages = {
  [landingPageKey]: {
    Component: "LandingPage",
    nextView: {
      position: "bottom",
      view: aboutPageKey
    }
  },
  [aboutPageKey]: {
    Component: "AboutPage",
    nextView: {
      label: "Projects",
      view: portfolioPageKey
    },
    prevView: {
      label: "Experience",
      view: experiencePageKey
    }
  },
  [portfolioPageKey]: {
    Component: "PortfolioPage",
    prevView: {
      label: "About",
      view: aboutPageKey
    },
    nextView: {
      label: "Experience",
      view: experiencePageKey
    }
  },
  [experiencePageKey]: {
    Component: "ExperiencePage",
    prevView: {
      label: "Projects",
      view: portfolioPageKey
    },
    nextView: {
      label: "About",
      view: aboutPageKey
    }
  }
};

export const contactEmail = "example@gmail.com";
export const landingPageHeroMsg = "Hi, I'm Lisa Trevis";
export const aboutPageTitleMsg = "About";
export const aboutMeSubTitle = "I love making things!";
export const aboutMeBodyContent = `With a prior background in Sales, Marketing & Account Management, I approach each project from the user point of view.

A combination of logical thinking and artistic flair provides delightful UI/UX with elegant, functional, and reusable code behind the scenes.

I'm passionate about learning, and pick up new languages, libraries, frameworks, and skills quickly.`;
export const avatarImgSrc = "http://lisatrevis.com/images/about-photo.jpg";
export const contactMeHeaderMsg = "Contact Me!";
export const portfolioPageTitleMsg = "Projects";
export const experiencePageTitleMsg = "Experience";

export const titles = [
  "Creative Developer",
  "UI/UX Designer",
  "Front-End Engineer"
];

export const experienceItems = [
  {
    label: "Programmer Analyst",
    subTitle: "CEB",
    description:
      "IT: Triaged help desk tickets from attorney users with issues on a variety of applications. Content management: utilized proprietary CMS to translate PDFs/Word docs from CA Court website to text code for publishing to our website. QA: Reviewed content of legal text files for accuracy. Training: Trained attorney users on a suite of newly implemented applications as part of a digital transformation: Salesforce, Litmos, Contentful, and others. Programming: Worked on various projects tracked via Jira/Confluence."
  },
  {
    label: "Freelance Web Developer",
    subTitle: "",
    description: ""
  },
  {
    label: "Lead Mentor, Program Manager",
    subTitle: "Codify Academy",
    description:
      "Taught students new to programming everything they needed to know in order to become Front End Web Developers. The 16 week course covered HTML5, CSS3, JavaScript, jQuery, Bootstrap, APIs, JSON, AJAX, and frameworks like VUE, React, and Angular."
  },
  {
    label: "Teaching Assistant",
    subTitle: "Codify Academy",
    description:
      "Assisted Lead Mentor with instructing students new to coding. Answered questions from students and helped them debug their code."
  }
];
export const educationItems = [
  {
    label: "Hack Reactor Prep",
    subTitle: "",
    description:
      "A one-month intensive focused on object-based scripting for front-end development."
  },
  {
    label: "Codify Academy",
    subTitle: "",
    description:
      "A four-month intensive focusing on JavaScript-based functional programming and frameworks for UI and web application development."
  },
  {
    label: "Codecademy, Udemy, LinkedIn Learning",
    subTitle: "",
    description:
      "Hundreds of hours invested in professional development labs, courses, and workshops in JavaScript, Node, VueJS, ReactJS, AngularJS, AJAX, functional composition, responsive design, and accessibility"
  },
  {
    label: "Index Computers",
    subTitle: "",
    description:
      "Completed Beginner, Intermediate & Advanced classes in Access, Excel, Pivot Tables, Power Point, Word, Outlook and Quickbooks."
  },
  {
    label: "Normandale Community College",
    subTitle: "",
    description:
      "Associate's Degree with a focus on Physics, Engineering, & Mathematics."
  }
];

export const myTestimonials = [
  {
    quote:
      '"Lisa was great to work with! She listened to my ideas and created a website that reflects my brand perfectly."',
    title: "Jennifer | Owner of There She Grows CA",
    imgSrc: "http://lisatrevis.com/images/testimonial-photo-1.jpg"
  },
  {
    quote:
      '"Lisa seamlessly combines a professional and diligent work ethic with her optimistic and friendly attitude. I would recommend her to anyone looking for a web designer and developer."',
    title: "Sheila | Design & Development Client",
    imgSrc: "http://lisatrevis.com/images/testimonial-photo-3.jpg"
  },
  {
    quote:
      '"A committment to detail, problem resolution, and export constantly improving the customer experience was the #1 reason we renewed our contract year after year with Lisa."',
    title: "Tamara | Client",
    imgSrc: "http://lisatrevis.com/images/testimonial-photo-2.jpg"
  }
];

export const projects = {
  WEB_APPLICATIONS: {
    label: "Web Applications",
    className: "ProjectItem__WebApplications",
    imgSrc: "",
    listItems: [
      {
        label: "The High Note",
        description: "A positivity-focused comment app.",
        link: "http://lisatrevis.com/Comment/index.html"
      },
      {
        label: "Zodiac Puns",
        description: "Enter your birthday for a horoscope and a pun!",
        link: "http://lisatrevis.com/Zodiac/index.html"
      },
      {
        label: "E-Store Inventory Manager",
        description: "An interface to easily manage and update an e-inventory.",
        link: "http://lisatrevis.com/InventoryECommerce/index.html"
      },
      {
        label: "Browser Alarm",
        description: "Everything you need to set an alarm in 1997!",
        link: "http://lisatrevis.com/AlarmClock/index.html"
      },
      {
        label: "Dog Breed Quiz",
        description: "A short quiz to test your canine knowledge.",
        link: "http://lisatrevis.com/DogBreedQuiz/index.html"
      },
      {
        label: "Planets",
        description: "No jokes within 287.46 billion km.",
        link: "http://lisatrevis.com/Planet/index.html"
      }
    ]
  },
  CLIENT_WEBSITES: {
    label: "Client Websites",
    className: "ProjectItem__ClientWebsites",
    imgSrc: "",
    listItems: [
      {
        label: "Chicago Styles Conference",
        description:
          "The brightest web designers and front-end developers descend on Chicago to discuss the latest technologies.",
        link: "http://lisatrevis.com/StylesConf/index.html"
      },
      {
        label: "Forest Fairy",
        description:
          "Bespoke, hand-crafted fairy wings, elf coats, and hair jewelry.",
        link: "http://lisatrevis.com/ForestFairy/index.html#/sample"
      },
      {
        label: "There She Grows CA",
        description: "Grow Food. Save Bees.",
        link: "http://lisatrevis.com/ThereSheGrowsCA/index.html"
      }
    ]
  },
  WEB_TEMPLATES: {
    label: "Web Templates",
    className: "ProjectItem__WebTemplates",
    imgSrc: "",
    listItems: [
      {
        label: "My Folio",
        description: "A responsive HTML5 portfolio/services theme.",
        link: "http://lisatrevis.com/MyFolio/index.html"
      },
      {
        label: "Strict",
        description: "A responsive, minimalist HTML5 theme.",
        link: "http://lisatrevis.com/Strict/index.html"
      }
    ]
  },
  OPEN_SOURCE: {
    label: "Open Source",
    className: "ProjectItem__OpenSource",
    imgSrc: "",
    listItems: [],
  },
  UI_FRAMEWORKS: {
    label: "UI Frameworks",
    className: "ProjectItem__UIFrameworks",
    imgSrc: "",
    listItems: [],
  },
  UX_DESIGN: {
    label: "UX Design",
    className: "ProjectItem__UXDesign",
    imgSrc: "",
    listItems: [],
  },
  OPERATIONALIZATION: {
    label: "Operationalization",
    className: "ProjectItem__Operationalization",
    imgSrc: "",
    listItems: [],
  },
};

// title animation duration in ms
export const titleAnimationTimeout = 4000;
//
export const titleAnimationInStyle = {
  animation: `titleAnimateOut ${titleAnimationTimeout / 1000}s infinite`
};
export const titleAnimationOutStyle = {
  animation: `titleAnimateOut ${titleAnimationTimeout / 1000}s reverse infinite`
};

export const slideshowAnimationTimeout = 5000;
//
export const slideshowAnimationInStyle = {
  animation: `slideshowAnimateOut ${slideshowAnimationTimeout / 1000}s infinite`
};
export const slideshowAnimationOutStyle = {
  animation: `slideshowAnimateOut ${
    slideshowAnimationTimeout / 1000
  }s reverse infinite`
};

// map of app components
export const componentsMapByConstName = {
  MyViewRenderer,
  LandingPage,
  AboutPage,
  PortfolioPage,
  ExperiencePage,
  Title,
  TitleSpinner,
  NextViewBtn
};
