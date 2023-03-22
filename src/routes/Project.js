import React from 'react'
import './Project.css';


const Project = () => {
  return (
    <div className='project-div'>
      <div><p className="project-title">Projects</p></div>
      <div className='project-work'>
        <div className='rest-div'>Restaurant app</div>
        <div className='rest-div'>Sales app</div>
      </div>
    </div>
  );
}


export default Project;