import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import Arrow from "../Arrow/Arrow";
import { overview, overview__Modal } from "../../assets/Portfolio";
import "./Contact.css";
import { useRef, forwardRef } from "react";

const Contact = forwardRef(({ refFunction }, ref) => {
  return (
    <>
      <div className="contact">
        <h1>Do you want to get in touch?</h1>
        <div>
          <a href={overview.contact.github} target="_blank" rel="noreferrer">
            <GitHubIcon fontSize="inherit" />
          </a>
          <a href={overview.contact.linkedin} target="_blank" rel="noreferrer">
            <LinkedInIcon fontSize="inherit" />
          </a>
          <a
            href={"mailto:" + overview.contact.email}
            target="_blank"
            rel="noreferrer"
          >
            <EmailIcon fontSize="inherit" />
          </a>
        </div>
      </div>
      <Arrow
        className="contact__Arrow"
        heightClass={"ContactHeight"}
        direction={true}
        scrollTo={refFunction}
        ref={ref}
      />
    </>
  );
});

export default Contact;
