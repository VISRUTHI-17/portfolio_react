import "./Image1.css";
import React from "react";
// import background from "../assets/img1.jpeg";
// import { Link } from "react-router-dom";
import AnimationText from "./AnimatedText";

const Image1 = () => {
  return (
      <div className="main-div">
        <div className="content-left">
         <div className="text">
              <AnimationText/>
              <p className="p-text">FULL-STACK DEVELOPER</p>
         </div>

          <div className="button">Download CV</div>
        </div>
        <div className="image-right">
          <p>gw7hxjdid</p>
        </div>
      </div>
  );
};

export default Image1;
