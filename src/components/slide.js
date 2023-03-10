import React from "react";
import './slide.css'
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import Percentage from "./percentage";

const Slide = () => {
    return (
        <div class="wrapper">
            <div class="scenes" tabindex="0">
                <div class="scene-1">
                <img className="img-scl" src={logo1} />
                <p className="education-text">Secondary Education</p>
                </div>
                <div class="scene-2">
                    <p>Velammal Vidyalaya CBSE Theni</p>
                    <Percentage value={92}/>
                </div>
               
            </div>
            <div class="scenes" tabindex="0">
                <div class="scene-1">
                <img className="img-scl" src={logo1} />
                <p className="education-text">Higher Secondary Education</p>
                </div>
                <div class="scene-2">
                <p>Velammal Vidyalaya CBSE Theni</p>
                    <Percentage value={84.4}/>
                </div>
                
            </div>
            <div class="scenes" tabindex="0">
                <div class="scene-1">
                <img className="img-college" src={logo2} />
                <p className="education-text">Bachelor of Technology</p>
                </div>
                <div class="scene-2">
                    <p>Bannari Amman Institute of Technology</p>
                    <p>B Tech Computer Technology</p>
                    <Percentage value={90.9}/>
                </div>
                
            </div>
        </div>

    );

}

export default Slide;