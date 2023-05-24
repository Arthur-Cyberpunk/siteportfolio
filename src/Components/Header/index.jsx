import React, { useState } from "react";
import { BsXLg } from "react-icons/bs";
import { CgMenuRightAlt } from "react-icons/cg";
import "./styles.scss";

const Header = (props) => {
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setMenuClass("menu visible");
    } else {
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  const goScrollSection = (elementRef) => {
    window.scrollTo({ 
    top: elementRef.current.offsetTop,
    behavior: 'smooth',
  })
  }

  return (
    <nav className="containerHeader">
      <h3 className="logoName">Arthur.dev</h3>
      <ul>
        <li onClick={() => goScrollSection(props.home)}>
          <a className="options" href="#home">
            Home
          </a>
        </li>
        <li onClick={() => goScrollSection(props.about)}>
          <a className="options" href="#about">
            About
          </a>
        </li>
        <li onClick={() => goScrollSection(props.portfolioo)}>
          <a className="options" href="#projects">
            Projects
          </a>
        </li>
        <li onClick={() => goScrollSection(props.contact)}>
          <a className="options" href="#contact">
            Contact
          </a>
        </li>
      </ul>
      <div className="iconHamburguer" onClick={updateMenu}>
        <CgMenuRightAlt />
      </div>
      <div className={menu_class}>
        <div className="iconX" onClick={updateMenu}>
          <BsXLg />
        </div>
        <ul>
          <li>
            <a className="optionsMobile" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="optionsMobile" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="optionsMobile" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="optionsMobile" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
