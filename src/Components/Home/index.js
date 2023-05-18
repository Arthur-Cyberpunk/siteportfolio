import { GrGithub, GrLinkedin } from "react-icons/gr";
import "./styles.scss";

const Home = () => {
  return (
    <section className="home">
      <div className="containerHome">
        <div className="info">
          <div className="boxInfo">
            <div className="homeInfo">
              <h1>Front-End React Developer</h1>
              <p>
                Hi, I'm Arthur Santos. A passionate Front-end Developer based in
                Florianópolis, Brazil.
              </p>
              <span>
                <a>
                  <GrLinkedin />
                </a>
                <a>
                  <GrGithub />
                </a>
              </span>
            </div>
            <div>
              <div className="profileImg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
