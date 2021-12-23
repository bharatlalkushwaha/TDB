import React from 'react';
import ShowAlert from './ShowAlert';
import AlertTwo from './AlertTwo';
import { Link } from "react-router-dom";
import { FaArrowCircleRight } from 'react-icons/fa';
import { FaArrowCircleLeft } from 'react-icons/fa';




// Create React Components 
const SecondPage = () => {
  return (
    <>
      <div className="heading">
        <ShowAlert/>
       
        <div className="Camera_header">

        <div className="img_control1">
              <img id="img_control" alt="" src="http://127.0.0.1:5000/vide" />
              </div>
              <div className="alert_Camera1">
            <AlertTwo />
            <div className="btn_change">
            <p className="next_page"><Link to="/"  className="next_page"><FaArrowCircleLeft className="nextpage" />Previous</Link></p>
            <p className="next_page"><Link to="/ThirdPage"  className="next_page"><FaArrowCircleRight className="nextpage" />Next</Link></p>
            </div> 
              </div>
          </div>
        </div>
    </>
  )
}
export default SecondPage;