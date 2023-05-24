import { useRef } from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import "./styles/globals.scss";

function App() {
  const home = useRef();
  const about = useRef();
  const portfolioo = useRef();
  const contact = useRef();

  return (
    <div>
      <Header home={home} about={about} portfolioo={portfolioo} contact={contact} />
      <div ref={home}>
        <Home />
      </div>
      <div ref={about}>
        <About />
      </div>
      <div ref={portfolioo}>
        <Portfolio />
      </div>
      <div ref={contact}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
