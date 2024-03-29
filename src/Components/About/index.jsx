import notebook from "../../assets/notebook.png";
import "./styles.scss";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="containerAbout">
          <div className="imageSide">
            <img className="mainImg" src={notebook}></img>
          </div>
          <div className="textSide">
            <h4>About me</h4>
            <h3>
              A dedicated Front-end Developer
              <br />
              based in Florianópolis, Brazil 📍
            </h3>
            <p>
              As a Front-End Developer, I possess an impressive arsenal of
              skills in JavaScript, React, Typecript and Styled Componentes. I
              excel in designing and maintaining responsive websites that offer
              a smooth user experience. My expertise lies in crafting dynamic,
              engaging interfaces through writing clean and optimized code and
              utilizing cutting-edge development tools and techniques. I am also
              a team player who thrives in collaborating with cross-functional
              teams to produce outstanding web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
