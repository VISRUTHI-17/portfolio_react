import React from "react";
import "./Image2.css";
import Introimg1 from "../assets/img2.jpg";
import about from "./data.js";

const Image2 = () => {
  return (
      <div className="main-about" style={{backgroundImage:`url(${Introimg1})`}}>
        <div className="main-about-left">
          <p className="text-underline">About me</p>
        </div>
        <div className="main-about-right">
        <p className="descritpion">{about}</p>
        <div className="button-my-works">View Works</div>

        </div>
        </div>
  );
};

export default Image2;


{/* <div className="content1">
        <p>Flutter/ React / UI/UX Designer</p>
        <h1>VISRUTHI N</h1>
        <p className="descritpion">
        A diligent and tech enthusiastic, ambitious one to join as a Software Developer to provide best solutions and quality products for the development of society.
        </p>
      </div> */}