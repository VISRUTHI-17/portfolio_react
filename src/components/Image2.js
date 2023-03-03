import React from "react";
import "./Image2.css";
import Introimg1 from "../assets/img2.png";

const Image2 = () => {
  return (
    <div className="Img2">
      <div className="mask1">
        <img className="into-img1" src={Introimg1} alt={"Intro Image3"} />
      </div>
      <div className="content1">
        <p>Flutter/ React / UI/UX Designer</p>
        <h1>VENKAT RAMAN S P</h1>
        <p className="descritpion">
          A tech enthusiast love to learn and develop software projects on
          various domains. The ultimate goal is to make technology available for
          everyone.
        </p>
      </div>
    </div>
  );
};

export default Image2;
