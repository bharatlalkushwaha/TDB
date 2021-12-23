import React from 'react';
import ShowAlert from './ShowAlert';
import Alert_four from './Alert_four';
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
              <img id="img_control" src="http://127.0.0.1:5000/vide" />
              </div>
              <div className="alert_Camera1">
            <Alert_four />
            <p className="next_page"><Link to="/ThirdPage"  className="next_page"><FaArrowCircleLeft className="nextpage" />Previous</Link></p>
              </div>
          </div>
        </div>
    </>
  )
}
export default FourthPage;