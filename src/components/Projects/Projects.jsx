import { projects } from "../../assets/Portfolio";
import Arrow from "../Arrow/Arrow";
import "./Projects.css";
import Accordion from "react-bootstrap/Accordion";
import { useState, useRef, forwardRef } from "react";

const Projects = forwardRef(({ refFunction }, ref) => {
  const [isCopied, setIsCopied] = useState(false);

  //Function from LogRocket
  async function copyTextToClipboard(text) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  // onClick handler function for the copy button
  const handleCopyClick = (copyText) => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(copyText)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (!projects.length) return null;
  return (
    <div className="projects">
      <div className="projects__Container">
        <div className="projects__Header">
          <h5>Martin Rombach: Portfolio 2025</h5>
        </div>

        <Accordion className="projects__Accordion bg-transparent">
          {projects.map((project, index) => (
            <Accordion.Item
              key={index}
              eventKey={index + ""}
              className="projects__AccordionItem bg-transparent "
            >
              <Accordion.Header className="projects__AccordionHeader bg-transparent">
                {project.name}
              </Accordion.Header>
              <Accordion.Body className="projects__AccordionBody">
                <p>{project.overview}</p>
                <p>
                  {project.description ? (
                    <strong>Responsibilities: </strong>
                  ) : null}
                  {project.description}
                </p>
                {project.APIendpoint ? (
                  <p>
                    <input
                      className="projects__Button"
                      type="text"
                      value={project.APIendpoint}
                      readOnly
                    />
                    <button
                      onClick={() => handleCopyClick(project.APIendpoint)}
                    >
                      <span>
                        {isCopied ? "Endpoint Copied!" : "Copy Endpoint"}
                      </span>
                    </button>
                  </p>
                ) : null}
                <p>
                  <strong>Tech: </strong>
                  {project.technology.map((tech, index) => tech)}
                </p>
                <p>
                  {project.sourceCode ? (
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={project.sourceCode}
                    >
                      <strong> Github </strong>
                    </a>
                  ) : null}
                  {project.deploymentGallery ? <a> | </a> : null}
                  {project.deploymentGallery ? (
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={project.deploymentGallery}
                    >
                      <strong>Deployment Gallery</strong>
                    </a>
                  ) : null}
                  {project.livePreview ? <a> | </a> : null}
                  {project.livePreview ? (
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={project.livePreview}
                    >
                      <strong> Site Preview</strong>
                    </a>
                  ) : null}
                  {project.videoPreview ? <a> | </a> : null}
                  {project.videoPreview ? (
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={project.videoPreview}
                    >
                      <strong> Video Preview</strong>
                    </a>
                  ) : null}
                  {project.APIsyntax && (
                    <>
                      <p>
                        <a>
                          <strong>API Syntax: </strong>
                        </a>
                        {project.APIsyntax}
                      </p>
                    </>
                  )}
                </p>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
      <Arrow heightClass={"BottomLeft"} scrollTo={refFunction} ref={ref} />
    </div>
  );
});

export default Projects;
