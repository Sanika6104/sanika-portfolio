import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Documents from "./components/Documents";
import Awards from "./components/Awards";
import Contact from "./components/Contact";
import Achievements from "./components/Achievements";
import Languages from "./components/Languages";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>

        <Home />

        <About />

        <Skills />

        <Projects />

        <Certificates />

        <Documents />

        <Awards />

        <Contact />

        <Achievements />

        <Languages />

      </main>

      <Footer />
    </>
  );
}

export default App;