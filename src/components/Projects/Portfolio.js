const overview = {
  contact: {
    linkedin: "https://www.linkedin.com/in/martin-rombach-0a67b266/",
    github: "https://github.com/martinrombach88",
    email: "martinrombach88@gmail.com",
  },
};

const projects = [
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
    videoPreview: "https://youtu.be/VUWC-1OnwYE",
  },
  {
    name: "Korean Listening By Sentence",
    overview:
      "A Korean repetitive listening app that splits audio files into segments.",
    description: null,
    technology: ["React.js | ", "Material UI"],
    sourceCode: "https://github.com/martinrombach88/korean_listening_app/",
    livePreview: "https://martinrombachdev.com/korean_listening_app/",
    image: "/images/korean_app/korean_app.webp",
    imageList: [
      "/images/korean_app/korean_app1.webp",
      "/images/korean_app/korean_app2.webp",
      "/images/korean_app/korean_app3.webp",
      "/images/korean_app/korean_app4.webp",
    ],
    mobile: true,
  },

  {
    name: "Github Repo Search",
    overview:
      "A search app that returns Github users profile information and repositories.",

    technology: ["React | ", "Material UI"],
    sourceCode: "https://github.com/martinrombach88/git_repo_search",
    livePreview: "https://martinrombachdev.com/git_repo_search/",
    image: "//images//git_search/git_search.webp",
    imageList: [
      "/images//git_search/git_search1.webp",
      "/images//git_search/git_search2.webp",
      "/images//git_search/git_search3.webp",
    ],
  },

  /*
  {
    name: "School Portal",
    overview:
      "A fullstack school portal website with editable courses, posts and users, built in a group of 5 during my wCoding Bootcamp. My contributions included create course, create post and profile image uploads, as well as acting as scrum master for a week.",

    technology: [
      "Javascript | ",
      "PHP | ",
      "MySQL | ",
      "HTML | ",
      "CSS | ",
      "Git",
    ],
    sourceCode: "https://github.com/martinrombach88/school_portal",
    videoPreview: "https://youtu.be/9vG8Z10I9Hk",
  },*/
];

const skills = [
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "PHP",
  "MySQL",
  "Material UI",
  "Git",
  "Trello",
];

const contact = {
  email: "martinrombach88@gmail.com",
};

const modal = {
  overlay: {
    position: "fixed",
    display: "flex",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.65)",
  },
};

const overview__Modal = {
  content: {
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
  },
  overlay: {
    height: "100vh",
    position: "fixed",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.65)",
  },
};

const overview__ModalMobile = {
  content: {
    width: "90%",
    border: "1px solid #ccc",
    background: "#fff",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    fontSize: "0.7em",
  },
  overlay: {
    position: "fixed",
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    paddingTop: "2%",
    alignItems: "flex-start",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.65)",
  },
};

const overview__ModalSmall = {
  content: {
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px",
  },
  overlay: {
    position: "fixed",
    display: "flex",
    justifyContent: "center",
    paddingTop: "5%",
    alignItems: "flex-start",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.65)",
  },
};

const makeButton = (eduNum, modalClass, key) => {
  let button = null;
  button = (
    <a
      href={overview.education[eduNum].link}
      aria-label="live preview"
      target="_blank"
      rel="noreferrer"
      key={key}
    >
      <img
        src={process.env.PUBLIC_URL + overview.education[eduNum].image}
        alt={overview.education[eduNum].title}
      />
    </a>
  );
  return button;
};

export {
  overview,
  projects,
  skills,
  contact,
  modal,
  overview__Modal,
  overview__ModalSmall,
  overview__ModalMobile,
  makeButton,
};
