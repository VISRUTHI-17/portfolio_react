import React from "react";
import './percentage.css';

const Percentage=()=>{
    return(
        <div class="container">
        <div class="card1">
          <div class="box">
            <div class="percent">
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
                  <div class="num">
                    <h2>90<span>%</span></h2>
                  </div>
            </div>
          </div>
        </div>
      </div>
    );
}


export default Percentage;