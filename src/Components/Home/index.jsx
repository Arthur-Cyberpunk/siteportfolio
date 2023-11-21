import { GrGithub, GrLinkedin } from "react-icons/gr";
import css from "../../assets/css.png";
import html from "../../assets/html.png";
import javascript from "../../assets/javascript.png";
import nodejs from "../../assets/nodejs.png";
import react from "../../assets/react.png";
import redux from "../../assets/redux.png";
import sass from "../../assets/sass.png";
import styled from "../../assets/styled.png";
import typescript from "../../assets/typescript.png";
import "./styles.scss";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="container">
        <div className="containerHome">
          <div className="info">
            <div className="boxInfo">
              <div className="homeInfo">
                <h1>Front-End Developer</h1>
                <p>
                  Hi, I'm Arthur Santos. A passionate Front-end Developer based
                  in Florianópolis, Brazil. 📍
                </p>
                <span>
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
                </span>
              </div>
              <div className="profileImg"></div>
            </div>
            <div className="containerSkills">
              <p>Tech Stack</p>
              <div className="techSkills">
                <ul>
                  <li>
                    <img src={html}></img>
                  </li>
                  <li>
                    <img src={css}></img>
                  </li>
                  <li>
                    <img src={javascript}></img>
                  </li>
                  <li>
                    <img src={typescript}></img>
                  </li>
                  <li>
                    <img src={react}></img>
                  </li>
                  <li>
                    <img src={nodejs}></img>
                  </li>
                  <li>
                    <img src={redux}></img>
                  </li>
                  <li>
                    <img src={styled}></img>
                  </li>
                  <li>
                    <img src={sass}></img>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
