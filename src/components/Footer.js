import React from "react";
import "./Footer.css";
import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import {
  IoMdMail,
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoInstagram,
} from "react-icons/io";

const Footer = () => {
  return (
    <div className="footer">
      <div className="center">
        <div className="row">
          <FaHome className="logo-css"  style={{ color: "white" }} />
          <p>
           D 47K 9A W31,Sukkangalpatti Road,Municipal Off Back Side,Cumbum.
          </p>
        </div>
        <div className="row">
          <FaPhoneAlt className="logo-css"  style={{ color: "white" }} />
          <p>91+ 7010144224</p>
          <IoMdMail className="logo-css" style={{ color: "white" }} />
          <p>visruthi2003@gmail.com</p>
        </div>
        <div className="row">
          <a href={"https://www.linkedin.com/in/visruthi-n-235987245/"}>
            <IoLogoLinkedin className="logo-css"  style={{ color: "#0A66C2" }} />
          </a>
          <a href={"https://github.com/VISRUTHI-17"}>
            <IoLogoGithub className="logo-css" style={{ color: "white" }} />
          </a>
          <a href={"https://www.instagram.com/_linch.pin_29/"}>
            <IoLogoInstagram className="logo-css" style={{ color: "#d62976" }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
