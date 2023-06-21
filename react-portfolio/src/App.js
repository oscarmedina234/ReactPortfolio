import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar/index";
import { Banner } from "./components/Banner/index";
// import { Skills } from "./components/Skills/index";
import { Projects } from "./components/ProjectsSection/index";
import { Contact } from "./components/Contact/index";
import { Footer } from "./components/Footer/index";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      {/* <Skills /> */}
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
