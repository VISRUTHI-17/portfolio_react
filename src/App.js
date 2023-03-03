import React from "react";
import "./index.css";
import Project from "./routes/Project";
import About from "./routes/About";
import Skill from "./routes/Skill";
import { Route, Routes } from "react-router-dom";
import Main from "./routes/Main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/project" element={<Project />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skill />} />
    </Routes>
  );
}

export default App;
