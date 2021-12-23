import React from 'react';
import ShowAlert from './Components/ShowAlert';
import ShowCamera from './Components/ShowCamera';
import {useEffect} from "react"
import Header from './Header';
//import { FaArrowCircleRight } from 'react-icons/fa';


//import AlertOne from './Components/AlertOne';
//import { Link } from "react-router-dom";



// Create React Components 
const Home = () => {

  //  useEffect(function () {
  //  setTimeout(function() {
  //  window.location.reload("/home")
  //    }, 130000);
  // }, []);

  return (
    <>
    <Header />
      <div className="heading">
        <ShowAlert/>
       
        <div className="Camera_header">
            <div className="img_control1">
              
              <img id="img_control" alt="" src="http://127.0.0.1:5000/video3" />
              </div>
            <div className="alert_Camera1">
              <ShowCamera/>
            
              
  </div>
          
        </div>

      </div>

    </>
  )
}
export default Home;