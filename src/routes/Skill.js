import React from "react";
import "./Skill.css";
import { SiFlutter } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

import { SiReact } from "react-icons/si";


function ProgressBar({ progress }) {
  return (
    <div>
      <progress value={progress} max="100" />
      <span>{`${progress}%`}</span>
    </div>
  );
}

const Skill = () => {



 return (
   <div className="cont2">
     <div><p className="skills-title">Skills</p></div>
     <div className="cards">
       <div className="sample">
         <div className="card">
           <div className="card-inner">
             <div className="card-front">
               <SiFlutter className="Logo" style={{ color: "#42A5F5" }} />
               <h4>FLUTTER</h4>
             </div>
             <div className="card-back">
               <ProgressBar progress={80} />
             </div>
           </div>
         </div>
         <div className="card">
           <div className="card-inner">
             <div className="card-front">
               <SiNodedotjs className="Logo" style={{ color: "green" }} />
               <h4>NODE JS</h4>
             </div>
             <div className="card-back">
               <ProgressBar progress={60} />
             </div>
           </div>
         </div>
         <div className="card">
           <div className="card-inner">
             <div className="card-front">
               <SiMongodb className="Logo" style={{ color: "lightgreen" }} />
               <h4>MONGO DB</h4>
             </div>
             <div className="card-back">
               <ProgressBar progress={60} />
             </div>
           </div>
         </div>
       </div>
       <div class="sample">
         <div className="card">
           <div className="card-inner">
             <div className="card-front">
               <SiReact className="Logo" style={{ color: "61dbfb" }} />
               <h4>REACT</h4>
             </div>
             <div className="card-back">
               <ProgressBar progress={50} />
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 );
};

export default Skill;
