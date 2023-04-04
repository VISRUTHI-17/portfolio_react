import React from 'react'
import './Project.css';
import { RiRestaurant2Fill } from "react-icons/ri";
import { MdEngineering } from "react-icons/md";


const Project = () => {
  return (
    <div className='project-div'>
      <div><p className="project-title">Projects</p></div>
      <div className='project-work'>
        <div className='rest-div'>
          <div className='rest-logo'>
            <RiRestaurant2Fill className='icon1' style={{color:"white"}}/>
          </div>
          <h4>Restaurant App</h4>
          <div className='rest-back'>
            <h4>Hello</h4>

          </div>
        </div>
        <div className='rest-div'>
          <div className='sales-logo'>
            <MdEngineering className='icon1' style={{color:"white"}}/>
            <h4>Salesman App</h4>

          </div>
        </div>
      </div>
    </div>
  );
}


export default Project;