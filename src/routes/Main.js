import React, { useRef } from "react";
import Home from "./Home";
import Skill from "./Skill";
import About from "./About";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Project from "./Project";
import './main.css';

const Main = () => {
  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const handleclick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleclick1 = () => {
    ref1.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleclick2 = () => {
    ref2.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleclick3 = () => {
    ref3.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  let clicks = {
    click1: handleclick,
    click2: handleclick1,
    click3: handleclick2,
    click4: handleclick3
  };

  return (
    <div className="mainabc">
      <Navbar doIt={clicks}/>
      <div className="mainabc" ref={ref}>
        <Home />
      </div>
      <div className="mainabc" ref={ref1}>
        <About work={clicks} />
      </div>
      <div className="mainabc" ref={ref2}>
        <Skill />
      </div>
      <div className="mainabc" ref={ref3}>
        <Project/>
      </div>
      
        <Footer />
      
      
    </div>
  );
};

export default Main;
