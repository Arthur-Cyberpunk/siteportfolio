import { BsBoxArrowUpRight } from "react-icons/bs";
import { GrGithub } from "react-icons/gr";
import carro from "../../assets/carro.png";
import "./styles.scss";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="container">
        <div className="projectContent">
          <p>Portfolio</p>
          <h3>Each project is a unique piece of development 🧩</h3>
          <div className="projectsGrid">
            <div className="project">
              <div className="projectImg">
                <a>
                  <img src={carro}></img>
                </a>
              </div>
              <div className="projectText">
                <h3> Car Rental</h3>
                <p>
                  A car rental website is an online platform that allows users
                  to rent cars for personal or business use. The website
                  provides an interface for searching, comparing, and reserving
                  cars.
                </p>
                <div className="stacks">
                  <p>React</p>
                  <p>SCSS</p>
                </div>
                <div className="links">
                  <a>
                    Code
                    <GrGithub className="iconGit" />
                  </a>
                  <a>
                    Live Demo
                    <BsBoxArrowUpRight className="iconDemo" />
                  </a>
                </div>
              </div>
            </div>
            <div className="project reverse">
              <div className="projectImg">
                <a>
                  <img src={carro}></img>
                </a>
              </div>
              <div className="projectText">
                <h3> Car Rental</h3>
                <p>
                  A car rental website is an online platform that allows users
                  to rent cars for personal or business use. The website
                  provides an interface for searching, comparing, and reserving
                  cars.
                </p>
                <div className="stacks">
                  <p>React</p>
                  <p>SCSS</p>
                </div>
                <div className="links">
                  <a>
                    Code
                    <GrGithub className="iconGit" />
                  </a>
                  <a>
                    Live Demo
                    <BsBoxArrowUpRight className="iconDemo" />
                  </a>
                </div>
              </div>
            </div>
            <div className="project">
              <div className="projectImg">
                <a>
                  <img src={carro}></img>
                </a>
              </div>
              <div className="projectText">
                <h3> Car Rental</h3>
                <p>
                  A car rental website is an online platform that allows users
                  to rent cars for personal or business use. The website
                  provides an interface for searching, comparing, and reserving
                  cars.
                </p>
                <div className="stacks">
                  <p>React</p>
                  <p>SCSS</p>
                </div>
                <div className="links">
                  <a>
                    Code
                    <GrGithub className="iconGit" />
                  </a>
                  <a>
                    Live Demo
                    <BsBoxArrowUpRight className="iconDemo" />
                  </a>
                </div>
              </div>
            </div>
            <div className="project reverse">
              <div className="projectImg">
                <a>
                  <img src={carro}></img>
                </a>
              </div>
              <div className="projectText">
                <h3> Car Rental</h3>
                <p>
                  A car rental website is an online platform that allows users
                  to rent cars for personal or business use. The website
                  provides an interface for searching, comparing, and reserving
                  cars.
                </p>
                <div className="stacks">
                  <p>React</p>
                  <p>SCSS</p>
                </div>
                <div className="links">
                  <a>
                    Code
                    <GrGithub className="iconGit" />
                  </a>
                  <a>
                    Live Demo
                    <BsBoxArrowUpRight className="iconDemo" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
