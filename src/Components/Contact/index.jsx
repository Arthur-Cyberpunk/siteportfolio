import { FaMapMarkedAlt } from "react-icons/fa";
import { GoMailRead } from "react-icons/go";
import "./styles.scss";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contactContent">
          <div className="contactTitle">
            <p>Contact</p>
            <h3>Don't be shy! Hit me up! 👇</h3>
          </div>
          <div className="contactIcons">
            <div className="contactIconBox">
              <span>
                <FaMapMarkedAlt className="icons" />
              </span>
              <div className="contactInfo">
                <h3>Location</h3>
                <p>Florianópolis, Brazil</p>
              </div>
            </div>
            <div className="contactIconBox">
              <span>
                <GoMailRead className="icons" />
              </span>
              <div className="contactInfo">
                <h3>Mail</h3>
                <p>santos.santos86@hotmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
