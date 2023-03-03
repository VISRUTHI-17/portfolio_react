import "./Image1.css";
import React from "react";
import Introimg from "../assets/img1.jpeg";
import { Link } from "react-router-dom";
import AnimationText from "./AnimatedText";

const Image1 = () => {
  return (
    <div className="Img1">
      <div className="mask">
        {/* <img className="into-img" src={Introimg} alt={"Intro Image1"} /> */}
      </div>
      <div className={"content"}>
        {/* <p>Hi, Im Visruthi</p>
        <h1 className="x">Full-Stack</h1>
        <h1 className="y">Developer.</h1> */}
        <AnimationText/>
        <Link to={"/project"} className="btn x">
          Works
        </Link>
        <Link to={"/skills"} className="btn y">
          Skills
        </Link>
      </div>
    </div>
  );
};

export default Image1;
