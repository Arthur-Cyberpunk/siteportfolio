import { BsBoxArrowUpRight } from "react-icons/bs";
import { GrGithub } from "react-icons/gr";
import irongames from "../../assets/irongames.png";
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
                <a
                  target="_blank"
                  href="https://irongames-rho.vercel.app/"
                  rel="noreferrer"
                >
                  <img src={irongames} alt="Iron Games"></img>
                </a>
              </div>
              <div className="projectText">
                <h3> Car Rental</h3>
                <p>
                  A video game store website is an online platform that allows
                  users to buy video games. The website provides an easy-to-use
                  interface for searching, comparing, video games from a wide
                  selection of games that vary in make, model, and price.
                </p>
                <div className="stacks">
                  <p>React</p>
                  <p>SCSS</p>
                </div>
                <div className="links">
                  <a
                    target="_blank"
                    href="https://github.com/Arthur-Cyberpunk"
                    rel="noreferrer"
                  >
                    Code
                    <GrGithub className="iconGit" />
                  </a>
                  <a
                    target="_blank"
                    href="https://irongames-rho.vercel.app/"
                    rel="noreferrer"
                  >
                    Live Demo
                    <BsBoxArrowUpRight className="iconDemo" />
                  </a>
                </div>
              </div>
            </div>
            {/* <div className="project reverse">
              <div className="projectImg">
                <a href="/">
                  <img src={carro} alt="car"></img>
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
                  <a href="/">
                    Code
                    <GrGithub className="iconGit" />
                  </a>
                  <a href="/">
                    Live Demo
                    <BsBoxArrowUpRight className="iconDemo" />
                  </a>
                </div>
              </div>
            </div> */}
            {/* <div className="project">
              <div className="projectImg">
                <a href="/">
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
                  <a href="/">
                    Code
                    <GrGithub className="iconGit" />
                  </a>
                  <a href="/">
                    Live Demo
                    <BsBoxArrowUpRight className="iconDemo" />
                  </a>
                </div>
              </div>
            </div> */}
            {/* <div className="project reverse">
              <div className="projectImg">
                <a href="/">
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
                  <a href="/">
                    Code
                    <GrGithub className="iconGit" />
                  </a>
                  <a href="/">
                    Live Demo
                    <BsBoxArrowUpRight className="iconDemo" />
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
