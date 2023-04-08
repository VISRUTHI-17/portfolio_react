import "./Image1.css";
import React from "react";
// import background from "../assets/img1.jpeg";
// import { Link } from "react-router-dom";
import AnimationText from "./AnimatedText";
import resume from '../assets/resume.pdf';

const Image1 = () => {
  return (
    <div className="main-div">
      <div className="content-left">
        <div className="text">
          <AnimationText />
          <p className="p-text">FULL-STACK DEVELOPER</p>
        </div>
        <a className="button" href={resume} download="CV" target='_blank'>
          Download CV

        </a>

      </div>
      <div className="image-right">
      </div>
    </div>
  );
};

export default Image1;
