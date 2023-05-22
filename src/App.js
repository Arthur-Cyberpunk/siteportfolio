import About from "./components/About";
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
    </div>
  );
}

export default App;
