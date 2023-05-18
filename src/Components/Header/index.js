import "./styles.scss";

const Header = () => {
  return (
    <nav className="containerHeader">
      <h3 className="logoName">Arthur.dev</h3>
      <ul>
        <li>
          <a className="options" href="#home">
            Home
          </a>
        </li>
        <li>
          <a className="options" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="options" href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a className="options" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
