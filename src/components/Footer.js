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
          <FaHome size={20} style={{ color: "white" }} />
          <p>
            9/2, 2nd Street, North Balabagya nagar, Tirunelveli junction
            Tamilnadu
          </p>
        </div>
        <div className="row">
          <FaPhoneAlt size={20} style={{ color: "white" }} />
          <p>91+ 9443365495</p>
          <IoMdMail size={20} style={{ color: "white" }} />
          <p>venkatsp2002@gmail.com</p>
        </div>
        <div className="row">
          <a href={"https://www.linkedin.com/in/venkat-raman-s-p-481861205/"}>
            <IoLogoLinkedin size={40} style={{ color: "#0A66C2" }} />
          </a>
          <a href={"https://github.com/venkatsp17"}>
            <IoLogoGithub size={40} style={{ color: "white" }} />
          </a>
          <a href={"https://www.instagram.com/venkat_s_p/"}>
            <IoLogoInstagram size={40} style={{ color: "#d62976" }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
