import { GrGithub, GrLinkedin } from "react-icons/gr";
import javascript from "../../assets/javascript.png";
import next from "../../assets/nextjs.png";
import react from "../../assets/react.png";
import styled from "../../assets/styled.png";
import typescript from "../../assets/typescript.png";
import "./styles.scss";

const Home = () => {
  return (
    <section className="home">
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
                    <img src={javascript}></img>
                  </li>
                  <li>
                    <img src={react}></img>
                  </li>
                  <li>
                    <img src={typescript}></img>
                  </li>
                  <li>
                    <img src={next}></img>
                  </li>
                  <li>
                    <img src={styled}></img>
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
