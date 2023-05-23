import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import "./styles/globals.scss";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
