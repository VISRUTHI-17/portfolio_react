import React from "react";
import "./Education.css";
import logo1 from "../assets/img3.png";
import logo2 from "../assets/img4.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { easeQuadInOut } from "d3-ease";
import "react-circular-progressbar/dist/styles.css";
import AnimatedProgressProvider from "./AnimatedProgressProvider";

const Education = () => {
  return (
    <div className="main-education">
      <p className="education-title">Education</p>
    </div>
  );
};

export default Education;

{/* <div className="edu-container">
      <h1>Education</h1>
      <div className="rect">
        <div>
          <img className="logo1" src={logo1} alt={"Logo"} />
        </div>
        <div>
          <p>Secondary Education, Tanjore</p>
          <p>2017 - 2018</p>
          <h2>Thamarai International</h2>
          <h2>School (CBSE)</h2>
        </div>
        <div className="progress-bar">
          <AnimatedProgressProvider
            valueStart={0}
            valueEnd={78.4}
            duration={1.4}
            easingFunction={easeQuadInOut}
            // repeat
          >
            {(value) => {
              const roundedValue = Math.round(value);
              return (
                <CircularProgressbar
                  strokeWidth={10}
                  value={value}
                  text={`${roundedValue}`}
                  styles={buildStyles({
                    pathTransition: "none",
                    strokeLinecap: "butt",
                    pathColor: "orange",
                    textColor: "#EBE7D0",
                  })}
                />
              );
            }}
          </AnimatedProgressProvider>
        </div>
      </div>
      <div className="rect">
        <div>
          <img className="logo1" src={logo1} alt={"Logo"} />
        </div>
        <div>
          <p>Higher Secondary Education, Tanjore</p>
          <p>2018 - 2020</p>
          <h2>Thamarai International</h2>
          <h2>School (CBSE)</h2>
        </div>
        <div className="progress-bar">
          <AnimatedProgressProvider
            valueStart={0}
            valueEnd={83.4}
            duration={1.4}
            easingFunction={easeQuadInOut}
            // repeat
          >
            {(value) => {
              const roundedValue = Math.round(value);
              return (
                <CircularProgressbar
                  strokeWidth={10}
                  value={value}
                  text={`${roundedValue}`}
                  styles={buildStyles({
                    pathTransition: "none",
                    strokeLinecap: "butt",
                    pathColor: "orange",
                    textColor: "#EBE7D0",
                  })}
                />
              );
            }}
          </AnimatedProgressProvider>
        </div>
      </div>
      <div className="rect">
        <div className="logob">
          <img className="logo1" src={logo2} alt={"Logo"} />
        </div>
        <div>
          <p>B Tech Computer Technology, Sathyamangalam</p>
          <p>2020 - 2024 (CURRENTLY THIRD YEAR)</p>
          <h2>Bannari Amman Institute of Technology</h2>
        </div>
        <div className="progress-bar">
          <AnimatedProgressProvider
            valueStart={0}
            valueEnd={88.5}
            duration={1.4}
            easingFunction={easeQuadInOut}
            // repeat
          >
            {(value) => {
              const roundedValue = Math.round(value);
              return (
                <CircularProgressbar
                  strokeWidth={10}
                  value={value}
                  text={`${roundedValue}`}
                  styles={buildStyles({
                    pathTransition: "none",
                    strokeLinecap: "butt",
                    pathColor: "orange",
                    textColor: "#EBE7D0",
                  })}
                />
              );
            }}
          </AnimatedProgressProvider>
        </div>
      </div>
    </div> */}