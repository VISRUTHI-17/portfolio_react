import "./Navbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosClose } from "react-icons/io";

const Navbar = (props) => {
  const [click, setclick] = useState(false);
  const handleClick = () => setclick(!click);
  const [hover,sethover] = useState([true, false,false,false]);

  const [color, setcolor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setcolor(true);
    } else {
      setcolor(false);
    }
  };

  const close = (fun, arr) => {
    console.log(fun);
    setclick(false);
    sethover(arr);
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
          <Link  className={hover[0]?"underline":""} onClick={()=>close(props.doIt.click1, [true, false,false,false])} >Home</Link>
        </li>
        <li>
          <Link className={hover[1]?"underline":""} onClick={() =>close(props.doIt.click2, [false, true,false,false])}>About</Link>
        </li>
        <li>
          <Link className={hover[2]?"underline":""} onClick={() =>close(props.doIt.click3, [false, false,true,false])}>Skills</Link>
        </li>
        <li>
          <Link className={hover[3]?"underline":""} onClick={() =>close(props.doIt.click4, [false, false ,false,true])}>Projects</Link>
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
