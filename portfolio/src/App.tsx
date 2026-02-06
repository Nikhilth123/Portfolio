import React from "react";

import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Navbar from "./components/ui/Navbar";  
const App = (): JSX.Element => {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
