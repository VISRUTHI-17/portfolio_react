import React from "react";
import "./Skill.css";
import { SiFlutter } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiDjango } from "react-icons/si";
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
     <h1>Skills</h1>
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
               <SiFlask className="Logo" style={{ color: "aliceblue" }} />
               <h4>FLASK</h4>
             </div>
             <div className="card-back">
               <ProgressBar progress={60} />
             </div>
           </div>
         </div>
         <div className="card">
           <div className="card-inner">
             <div className="card-front">
               <SiFirebase className="Logo" style={{ color: "#FFA611" }} />
               <h4>FIREBASE</h4>
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
               <SiDjango className="Logo" style={{ color: "#092e20" }} />
               <h4>DJANGO</h4>
             </div>
             <div className="card-back">
               <ProgressBar progress={50} />
             </div>
           </div>
         </div>
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
