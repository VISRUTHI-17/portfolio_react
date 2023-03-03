import "./Navbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosClose } from "react-icons/io";

const Navbar = (props) => {
  const [click, setclick] = useState(false);
  const handleClick = () => setclick(!click);

  const [color, setcolor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setcolor(true);
    } else {
      setcolor(false);
    }
  };

  const close = (fun) => {
    console.log(fun);
    setclick(false);
    setTimeout(() => fun(),500);
  }
  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link onClick={props.doIt.click1}>
        <h1>Portfolio</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link onClick={() => close(props.doIt.click1)}>Home</Link>
        </li>
        <li>
          <Link onClick={() => close(props.doIt.click2)}>About</Link>
        </li>
        <li>
          <Link onClick={props.doIt.click3}>Skills</Link>
        </li>
        <li>
          <Link onClick={props.doIt.click3}>Work</Link>
        </li>
      </ul>
      <div className="giham" onClick={handleClick}>
        {click ? (
          <IoIosClose size={30} style={{ color: "aliceblue" }} />
        ) : (
          <GiHamburgerMenu size={20} style={{ color: "aliceblue" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
