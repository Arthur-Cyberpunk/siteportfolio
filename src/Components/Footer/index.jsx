import { GrGithub, GrLinkedin } from "react-icons/gr";
import "./styles.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footerContent">
          <h3>Copyright © 2023. All rights are reserved</h3>
          <div className="footerSocial">
            <a
              href="https://www.linkedin.com/in/arthur-gabriel-dos-santos-6842b5173/"
              target="_blank"
              rel="noreferrer"
            >
              <GrLinkedin />
            </a>
            <a
              href="https://github.com/Arthur-Cyberpunk"
              target="_blank"
              rel="noreferrer"
            >
              <GrGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
