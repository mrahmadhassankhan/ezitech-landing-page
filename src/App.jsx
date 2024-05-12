import HeaderDefault from "./components/Header-Default";
import HeaderTopBar from "./components/Header-Top-Bar";
import Hero from "./components/Hero";
import "./App.css";
import FooterElement from "./components/FooterElement";
import Award from "./components/Award";
import Howitworks from "./components/Howitworks";
import NewTrends from "./components/NewTrends";
import Courses from "./components/Courses";
const App = () => {
  return (
    <>
      <HeaderTopBar />
      <div className="image-header-back">
        <div className="blur-bg">
          <HeaderDefault />
          <Hero />
        </div>
      </div>
      <Award />
      <Howitworks />
      <NewTrends />
      <Courses />
      <FooterElement />
    </>
  );
};
export default App;
