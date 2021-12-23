import React from "react";
import { GoPerson } from "react-icons/go";
import AlertOne from "./Components/AlertOne";
//import CamerasAdd from "./Components/CamerasAdd";
import RtspLink from "./Components/RtspLink";
import AlertDetection9 from "./Components/AlertDetection9";
import AlertTable from "./Components/AlertTable";

const CameraSet2 = () => {

  return (
    <div id="heading">
      <div className="person">
        <GoPerson className="person" />
      </div>
      <h3 className="head_name"> Camera Setting </h3> <hr />
      <div className="camset_header">
        <div className="inline">
          <div className="cam_addition">
            <form className="input_head">
              <RtspLink />
              
            </form>
           
            <div className="cam_function">
              <h2>Activate Functionality:</h2>
              <AlertDetection9/>
             
            </div>
          </div>
          <div className="alert_Camera1">
          <AlertTable/>
            <AlertOne />
           
          </div>
        </div>
        {/* <div className="permit_head">
                                <h3 className="permit">Permitted user to this camera</h3>
                                <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="flexCheckDefault" required/>
                        <label class="form-check-label" for="flexCheckDefault">
                          John
                        </label>
                        <br/>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                          Harry
                        </label>
                        <br/>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox"  />
                        <label class="form-check-label">
                          Alex
                        </label> 
                      </div>
                                
                        </div> */}
      </div>
    </div>
  );
};
export default CameraSet2;