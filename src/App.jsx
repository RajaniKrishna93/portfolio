import { useState } from "react";

import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Navicon from "./components/navBar/Navicon";
import "./sass/icon.scss";
import "./sass/home.scss";
import "./sass/about.scss";
import "./sass/skills.scss";
import "./sass/resume.scss";
import "./sass/contact.scss";
import "./sass/portfolio.scss";
import "./sass/pageheader.scss";
import particles from "./utils/particles";
import Aboutme from "./container/about/Aboutme";
import Contact from "./container/information/Contact";
import Portfolio from "./container/feacturs/Portfolio";
import Resume from "./container/cover/Resume";
import Skills from "./container/skillset/Skills";

import Home from "./container/basic/Home";
function App() {
  const location = useLocation();
  console.log(location);

  const handleInit = async (main) => {
    await loadFull(main);
  };
  const renderParticlesIInHomePage = location.pathname === "/";
  return (
    <div className="App">
      {renderParticlesIInHomePage && (
        <Particles id="particles" options={particles} init={handleInit} />
      )}

      <Navicon />
      {/* <BrowserRouter> */}
      <div className="App__main-page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<Aboutme />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>

      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
