import React from 'react';
import ShowAlert from './ShowAlert';
import AlertFour from './AlertFour';
import { Link } from "react-router-dom";
import { FaArrowCircleLeft } from 'react-icons/fa';



// Create React Components 
const FourthPage = () => {
  return (
    <>
      <div className="heading">
        <ShowAlert/>
       
        <div className="Camera_header">

        <div className="img_control1">
              <img id="img_control" alt="" src="http://127.0.0.1:5000/vide"/>
              </div>
              <div className="alert_Camera1">
            <AlertFour />
            <p className="next_page"><Link to="/ThirdPage"  className="next_page"><FaArrowCircleLeft className="nextpage" />Previous</Link></p>
              </div>
          </div>
        </div>
    </>
  )
}
export default FourthPage;