import React from 'react';
import ShowAlert from './ShowAlert';
import AlertThree from './AlertThree';
import { Link } from "react-router-dom";
import { FaArrowCircleRight } from 'react-icons/fa';
import { FaArrowCircleLeft } from 'react-icons/fa';


// Create React Components 
const ThirdPage = () => {
  return (
    <>
      <div className="heading">
        <ShowAlert/>
        <div className="Camera_header">
        <div className="img_control1">
              <img id="img_control" alt="" src="http://127.0.0.1:5000/vide" />
              </div>
              <div className="alert_Camera1">
            <AlertThree />
            <div className="btn_change">
            <p className="next_page"><Link to="/SecondPage"  className="next_page"><FaArrowCircleLeft className="nextpage" />Previous</Link></p>
            <p className="next_page"><Link to="/FourthPage"  className="next_page"><FaArrowCircleRight className="nextpage" />Next</Link></p>
            </div>
              </div>
          </div>
        </div>
    </>
  )
}
export default ThirdPage;














{/*import React from 'react';

import { GiFalling } from 'react-icons/gi';
import { GiHeavyFighter } from 'react-icons/gi';
import { GiCelebrationFire } from 'react-icons/gi';
import { FaRegHandPointer } from 'react-icons/fa';
import { GoPerson } from 'react-icons/go';


function ShowAlert() {
    return (
        <div>
            <div className="person">
          <GoPerson className="person" />
        </div>
        <h3 className="head_name">Overview</h3>
        <hr />
        <div className="boxes">
          <div className="box"><p id="text_alert"><GiFalling id="ico_alert" className="" />Fall alert</p></div>

          <div className="box"><p id="text_alert"><GiHeavyFighter id="ico_alert" />Fight alert</p></div>

          <div className="box"><p id="text_alert"><GiCelebrationFire id="ico_alert" />Fire alert</p></div>

          <div className="box"><p id="text_alert"><FaRegHandPointer id="ico_alert" />Intruder alert</p></div>

        </div>
        </div>
    )
}

export default ShowAlert;
*/}