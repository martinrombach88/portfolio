export const overview = {
  contact: {
    linkedin: "https://www.linkedin.com/in/martin-rombach-0a67b266/",
    github: "https://github.com/martinrombach88",
    email: "martinrombach88@gmail.com",
  },
};

export const projects = [
  {
    name: "CICD Calculator API",
    overview:
      'A calculator API built to explore CICD and TDD. Accepts + - / * and single bracket equation strings. To use, send a JSON object in this syntax {"expression": "1 + 1"} via POST request. Redeployed on Azure in 2025.',
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
    APIendpoint:
      "https://js-cicd-calculator-appservice.azurewebsites.net/calculation-result",
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
    livePreview: "https://www.martinrombachdev.com/imtv_home",
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
  {
    name: "Korean Listening By Sentence",
    overview:
      "A Korean repetitive listening app that splits audio files into segments.",
    technology: ["React.js | ", "Material UI"],
    sourceCode: "https://github.com/martinrombach88/korean_listening_app/",
    livePreview: "https://martinrombach88.github.io/korean_listening_app/",
  },
];

export const contact = {
  email: "martinrombach88@gmail.com",
};
