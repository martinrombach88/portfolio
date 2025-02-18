import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

import { useRef } from "react";

function App() {
  const intRef = useRef();
  const projRef = useRef();
  const contRef = useRef();

  const scrollToProjects = () => {
    projRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    contRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="scrollSnap">
      <div className="scrollSnap__Element" ref={projRef}>
        <Projects refFunction={scrollToContact} ref={contRef} />
      </div>

      <div className="scrollSnap__Seoul" ref={contRef}>
        <Contact page="contact" refFunction={scrollToProjects} ref={intRef} />
      </div>
    </div>
  );
}

export default App;
