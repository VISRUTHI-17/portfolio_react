import React from "react";
import './percentage.css';

const Percentage=(props)=>{

    let cal = (440 -(440* props.value)/100);
    return(
        <div class="container">
        <div class="card1">
          <div class="box">
            <div class="percent">
              <svg>
                <circle cx="70" cy="70" r="70" style={{strokeDashoffset:cal}}></circle>
                <circle cx="70" cy="70" r="70" style={{strokeDashoffset:cal}}></circle>
              </svg>
                  <div class="num">
                    <h2>{props.value}<span>%</span></h2>
                  </div>
            </div>
          </div>
        </div>
      </div>
    );
}


export default Percentage;