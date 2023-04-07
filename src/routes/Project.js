import React from 'react'
import './Project.css';
import  rest  from '../assets/rest.jpg';
import  sales  from '../assets/sales.jpg';

import { IoLogoGithub } from "react-icons/io";


const Project = () => {
  return (
    <div className='project-div'>
      <div><p className="project-title">Projects</p></div>
      <div className='project-work'>
        <div className='rest-div'>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src={rest}></img>
              </div>
              <div class="flip-card-back">
                <h4 className='h4-name'>Restaurant App</h4>
                <p className='p-name'>Duration: JUL 2022-JAN 2023</p>
                <p className='p-name'>Role: Frontend and Backend</p>
                <p className='p-desc'>This is a simple restaurant app built on flutter
                  to manage crowd and orders in college cafeteria.</p>
                <a href={"https://github.com/VISRUTHI-17/Restaurant"}>
                  <IoLogoGithub className="logo-css" style={{ color: "white" }} />
                </a>

              </div>
            </div>
          </div>
        </div>

        <div className='rest-div'>
          <div className="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
              <img src={sales}></img>
              </div>
              <div class="flip-card-back">
                <h4 className='h4-name'>Salesman App</h4>
                <p className='p-name'>Duration: MAR 2023</p>
                <p className='p-name'>Role: Frontend </p>
                <p className='p-desc'>The app is an intermediate between Salesperson and the company to simply
                  operations on orders, sales, collections and expenses.</p>
                <a href={"https://github.com/VISRUTHI-17/sales_app"}>
                  <IoLogoGithub className="logo-css" style={{ color: "white" }} />
                </a>


              </div>
            </div>

          </div>


        </div>
      </div>
    </div>
  );
}


export default Project;


// {/* <div className='rest-logo'>
//             <RiRestaurant2Fill className='icon1' style={{color:"white"}}/>
//           </div> */}

{/* <div className='sales-logo'>
            <MdEngineering className='icon1' style={{color:"white"}}/>
            <h4>Salesman App</h4>

          </div> */}