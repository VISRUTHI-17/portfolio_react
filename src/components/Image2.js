import React from "react";
import "./Image2.css";
import Introimg1 from "../assets/img2.png";

const Image2 = () => {
  return (
    <div className="Img2">
      <div className="mask1">
        <img className="into-img1" src={Introimg1} alt={"Intro Image3"} />
      </div>
      <div className="main-about">
        <div className="main-about-left">
          <p className="about-underline">Abou</p> <p>t me</p>
        </div>
        <div className="main-about-right"></div>

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