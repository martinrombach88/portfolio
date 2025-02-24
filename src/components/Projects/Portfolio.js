export const overview = {
  contact: {
    linkedin: "https://www.linkedin.com/in/martin-rombach-0a67b266/",
    github: "https://github.com/martinrombach88",
    email: "martinrombach88@gmail.com",
  },
};

export const projects = [
  {
    name: ".NET Best Practice API (In Progress)",
    overview:
      "A healthcare data comparison API for exploring repository pattern, testing coverage and SOLID principles.",
    technology: [".NET | ", " CSharp |", " NUnit |", " Repository Pattern"],
    sourceCode:
      "https://github.com/martinrombach88/nunit-compare-healthcare-app",
  },
  {
    name: "CICD Calculator API",
    overview:
      'A calculator API built to explore CICD and TDD. Accepts + - / * and single bracket equation strings. To use, clone and deploy locally. Send a JSON object in this syntax {"expression": "1 + 1"} via POST request. ',
    technology: [
      "Node.js | ",
      " Github Actions | ",
      " Azure App Service |",
      " Amazon EC2 |",
      " Jest |",
      " Typescript",
    ],
    deploymentGallery: "https://imgur.com/a/KGYuRRz",
    sourceCode: "https://github.com/martinrombach88/js_cicd_calculator",
  },
  {
    name: "IMTV Home",
    overview:
      "A React website with video and blog components built for Korean media company IMTV. Site was built using open source libraries and React state.",
    technology: [
      "React.js | ",
      "useContext | ",
      "Axios | ",
      "fullpage.js | ",
      "Material UI | ",
      "React-Bootstrap",
    ],
    sourceCode: "https://github.com/martinrombach88/imtv_home",
    livePreview: "https://martinrombach88.github.io/imtv_home/",
  },
  {
    name: "Update IMTV",
    overview:
      "A Node.js CRUD app for updating IMTV's media focussed website. Application uses forms and both internal and external APIs for editing media content.",

    technology: [
      "Node.js | ",
      "Express | ",
      "MVC | ",
      "Async Await | ",
      "BCrypt | ",
      "EJS",
    ],
    sourceCode: "https://github.com/martinrombach88/update_imtv",
  },
];

export const contact = {
  email: "martinrombach88@gmail.com",
};
