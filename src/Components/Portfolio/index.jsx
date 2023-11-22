import { BsBoxArrowUpRight } from "react-icons/bs";
import { GrGithub } from "react-icons/gr";
import blessedfood from "../../assets/blessedfood.png";
import hexachallenge from "../../assets/hexachallenge.png";
import home from "../../assets/home.png";
import irongames from "../../assets/irongames.png";
import "./styles.scss";

const Portfolio = () => {
  return (
    <section className="portfolio" id="projects">
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
                <h3>Video game store</h3>
                <p>
                  A video game store website is an online platform that allows
                  users to buy video games. The website provides an easy-to-use
                  interface for searching, comparing, video games.
                </p>
                <div className="stacks">
                  <p>React</p>
                  <p>SCSS</p>
                </div>
                <div className="links">
                  <a
                    target="_blank"
                    href="https://github.com/Arthur-Cyberpunk/iron_games"
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
            <div className="project reverse">
              <div className="projectImg">
                <a href="https://blessed-food.vercel.app/">
                  <img src={blessedfood} alt="blessedfood"></img>
                </a>
              </div>
              <div className="projectText">
                <h3>Blessed Food</h3>
                <p>
                  A website about food/meals. In it, the user can search for a
                  certain type of food and see its ingredients and what is in
                  it. Fully responsive and bringing convenience to the user.
                </p>
                <div className="stacks">
                  <p>React/Typescript</p>
                  <p>Styled C.</p>
                </div>
                <div className="links">
                  <a
                    target="_blank"
                    href="https://github.com/Arthur-Cyberpunk/blessed_food"
                    rel="noreferrer"
                  >
                    Code
                    <GrGithub className="iconGit" />
                  </a>
                  <a
                    target="_blank"
                    href="https://blessed-food.vercel.app/"
                    rel="noreferrer"
                  >
                    Live Demo
                    <BsBoxArrowUpRight className="iconDemo" />
                  </a>
                </div>
              </div>
            </div>
            <div className="project">
              <div className="projectImg">
                <a
                  target="_blank"
                  href="https://hexa-challenge.vercel.app/"
                  rel="noreferrer"
                >
                  <img src={home} alt="Hexa Challenge"></img>
                </a>
              </div>
              <div className="projectText">
                <h3>Ilumina Ecommerce</h3>
                <p>
                  A game color, that appear the color in the screen and you have
                  to choose the right hexadecimal color, it is not responsive,
                  depending your screen's size, things get out of place.
                </p>
                <div className="stacks">
                  <p>React</p>
                  <p>Redux</p>
                  <p>Nodejs</p>
                  <p>AWS</p>
                </div>
                <div className="links">
                  <a
                    target="_blank"
                    href="https://github.com/Arthur-Cyberpunk/hexa_challenge"
                    rel="noreferrer"
                  >
                    Code
                    <GrGithub className="iconGit" />
                  </a>
                  <a
                    target="_blank"
                    href="https://hexa-challenge.vercel.app/"
                    rel="noreferrer"
                  >
                    Live Demo
                    <BsBoxArrowUpRight className="iconDemo" />
                  </a>
                </div>
              </div>
            </div>
            <div className="project reverse">
              <div className="projectImg">
                <a href="https://hexa-challenge.vercel.app/">
                  <img src={hexachallenge} alt="Hexa Challenge"></img>
                </a>
              </div>
              <div className="projectText">
                <h3>Game Color</h3>
                <p>
                  A game color, that appear the color in the screen and you have
                  to choose the right hexadecimal color, it is not responsive,
                  depending your screen's size, things get out of place.
                </p>
                <div className="stacks">
                  <p>React</p>
                  <p>Context Api</p>
                  <p>Router</p>
                </div>
                <div className="links">
                  <a href="https://github.com/Arthur-Cyberpunk/hexa_challenge">
                    Code
                    <GrGithub className="iconGit" />
                  </a>
                  <a href="https://hexa-challenge.vercel.app/">
                    Live Demo
                    <BsBoxArrowUpRight className="iconDemo" />
                  </a>
                </div>
              </div>
            </div>
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
