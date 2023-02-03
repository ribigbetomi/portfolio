import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navBar";
import Banner from "./components/banner";
import Skills from "./components/skills";
import Projects from "./components/projects";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/contact";
import Footer from "./components/footer";
import { useRef } from "react";

function App() {
  const bannerRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  return (
    <div className="App">
      <NavBar bannerRef={bannerRef} skillsRef={skillsRef} projectsRef={projectsRef} contactRef={contactRef} />
      <Banner bannerRef={bannerRef}/>
      <Skills skillsRef={skillsRef} />
      <Projects projectsRef={projectsRef} />
      <Contact contactRef={contactRef} />
      <Footer />
    </div>
  );
}

export default App;
