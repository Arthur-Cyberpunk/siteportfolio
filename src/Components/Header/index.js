import "./styles.scss";

const Header = () => {
  return (
    <nav className="container">
      <p className="logoName">Arthur.dev</p>
      <ul>
        <li>
          <a className="options" href="https://www.google.com/">
            Home
          </a>
        </li>
        <li>
          <a className="options" href="https://www.google.com/">
            About
          </a>
        </li>
        <li>
          <a className="options" href="https://www.google.com/">
            Projects
          </a>
        </li>
        <li>
          <a className="options" href="https://www.google.com/">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
