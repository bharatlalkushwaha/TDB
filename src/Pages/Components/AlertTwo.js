import React from 'react';
import Data_import from './constant';

export default class AlertTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = Data_import
    console.log(this.state);
  }
 
  submit() {
    let url = "http://127.0.0.1:5000/jason_file?id=2&fight=1&fall=1&fire=1&all=1";
    let data = this.state;
    fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"    
      },
      body: JSON.stringify(data)
    }).then((result) => {
      result.json().then((resp) => {
        console.warn("resp", resp);
      })
    }) 
  }

  render() {
    return (
      <>
        <div className="diff_Cameras">

          <div class="dropdown">
            <button class="dropbtn">Camera 6</button>
            <div class="dropdown-content">
              <div className="single_Camera">
                <div className="alert_name">FIRE</div>
                <div className="fire_alt">
                  <p className="">yes</p>
                  
                  <input type="radio" value="true" name="alttwo_fire6" onChange={(data) => { this.setState({ fire6: data.target.value }) }} onClick={() => { this.submit() }}/>
                  <p>No</p>
                  <input type="radio" value="false" name="alttwo_fire6" onChange={(data) => { this.setState({ fire6: data.target.value }) }} onClick={() => { this.submit() }}/>
                </div>
                <div className="alert_name">FALL</div>
                <div className="fire_alt">
                  <p>yes</p>
                  <input type="radio" value="true" name="alttwo_fall6" onChange={(data) => { this.setState({ fall6: data.target.value }) }} onClick={() => { this.submit() }}/>
                  <p>No</p>
                  <input type="radio" value="false" name="alttwo_fall6" onChange={(data) => { this.setState({ fall6: data.target.value }) }} onClick={() => { this.submit() }}/>
                </div>
                <div className="alert_name">FIGHT</div>
                <div className="fire_alt">
                  <p>yes</p>
                  <input type="radio" value="true" name="alttwo_fight6" onChange={(data) => { this.setState({ fight6: data.target.value }) }} onClick={() => { this.submit() }}/>
                  <p>No</p>
                  <input type="radio" value="false" name="alttwo_fight6" onChange={(data) => { this.setState({ fight6: data.target.value }) }} onClick={() => { this.submit() }}/>
                </div>

                <button className="btn_Camera" onClick={() => { this.submit() }}>OK</button>
              </div>
            </div>
          </div>

          <div class="dropdown">
            <button class="dropbtn">Camera 7</button>
            <div class="dropdown-content">
              <div className="single_Camera">
                <div className="alert_name">FIRE</div>
                <div className="fire_alt">
                  <p className="">yes</p>
                  <input type="radio" value="true" name="alttwo_fire7" onChange={(data) => { this.setState({ fire7: data.target.value }) }} onClick={() => { this.submit() }}/>
                  <p>No</p>
                  <input type="radio" value="false" name="alttwo_fire7" onChange={(data) => { this.setState({ fire7: data.target.value }) }} onClick={() => { this.submit() }}/>
                </div>              <div className="alert_name">FALL</div>
                <div className="fire_alt">
                  <p>yes</p>
                  <input type="radio" value="true" name="alttwo_fall7" onChange={(data) => { this.setState({ fall7: data.target.value }) }} onClick={() => { this.submit() }}/>
                  <p>No</p>
                  <input type="radio" value="false" name="alttwo_fall7" onChange={(data) => { this.setState({ fall7: data.target.value }) }} onClick={() => { this.submit() }}/>
                </div>              <div className="alert_name">FIGHT</div>
                <div className="fire_alt">
                  <p>yes</p>
                  <input type="radio" value="true" name="alttwo_fight7" onChange={(data) => { this.setState({ fight7: data.target.value }) }} onClick={() => { this.submit() }}/>
                  <p>No</p>
                  <input type="radio" value="false" name="alttwo_fight7" onChange={(data) => { this.setState({ fight7: data.target.value }) }} onClick={() => { this.submit() }}/>
                </div>                        
                  <button className="btn_Camera" onClick={() => { this.submit() }}>OK</button>
              </div>
            </div>
          </div>


          <div class="dropdown">
            <button class="dropbtn">Camera 8</button>
            <div class="dropdown-content">
              <div className="single_Camera" id="single_Camera">
                <div className="alert_name">FIRE</div>
                <div className="fire_alt">
                  <p className="">yes</p>
                  <input type="radio" value="true" name="alttwo_fire8" onChange={(data) => { this.setState({ fire8: data.target.value }) }} onClick={() => { this.submit() }}/>
                  <p>No</p>
                  <input type="radio" value="false" name="alttwo_fire8" onChange={(data) => { this.setState({ fire8: data.target.value }) }} onClick={() => { this.submit() }}/>
                </div>   
                <div className="alert_name">FALL</div>
                <div className="fire_alt">
                  <p>yes</p>
                  <input type="radio" value="true" name="alttwo_fall8" onChange={(data) => { this.setState({ fall8: data.target.value }) }} onClick={() => { this.submit() }}/>
                  <p>No</p>
                  <input type="radio" value="false" name="alttwo_fall8" onChange={(data) => { this.setState({ fall8: data.target.value }) }} onClick={() => { this.submit() }}/>
                </div>   
                <div className="alert_name">FIGHT</div>
                <div className="fire_alt">
                  <p>yes</p>
                  <input type="radio" value="true" name="alttwo_fight8" onChange={(data) => { this.setState({ fight8: data.target.value }) }} onClick={() => { this.submit() }}/>
                  <p>No</p>
                  <input type="radio" value="false" name="alttwo_fight8" onChange={(data) => { this.setState({ fight8: data.target.value }) }} onClick={() => { this.submit() }}/>
                </div>  

               
                <button className="btn_Camera" onClick={() => { this.submit() }}>OK</button>
              </div>
            </div>
          </div><br /><br />


          <div class="dropdown">
            <button class="dropbtn">Camera 9</button>
            <div class="dropdown-content">
              <div className="single_Camera" id="single_Camera">
                <div className="alert_name">FIRE</div>
                <div className="fire_alt">
                  <p className="">yes</p>
                  <input type="radio" value="true" name="alttwo_fire9" onChange={(data) => { this.setState({ fire9: data.target.value }) }} onClick={() => { this.submit() }}/>
                  <p>No</p>
                  <input type="radio" value="false" name="alttwo_fire9" onChange={(data) => { this.setState({ fire9: data.target.value }) }} onClick={() => { this.submit() }}/>
                </div>   
                <div className="alert_name">FALL</div>
                <div className="fire_alt">
                  <p>yes</p>
                  <input type="radio" value="true" name="alttwo_fall9" onChange={(data) => { this.setState({ fall9: data.target.value }) }} onClick={() => { this.submit() }}/>
                  <p>No</p>
                  <input type="radio" value="false" name="alttwo_fire9" onChange={(data) => { this.setState({ fall9: data.target.value }) }} onClick={() => { this.submit() }}/>
                </div>   
                <div className="alert_name">FIGHT</div>
                <div className="fire_alt">
                  <p>yes</p>
                  <input type="radio" value="true" name="alttwo_fight9" onChange={(data) => { this.setState({ fight9: data.target.value }) }} onClick={() => { this.submit() }}/>
                  <p>No</p>
                  <input type="radio" value="false" name="alttwo_fight9" onChange={(data) => { this.setState({ fight9: data.target.value }) }} onClick={() => { this.submit() }}/>
                </div>  

               
                <button className="btn_Camera" onClick={() => { this.submit() }}>OK</button>
              </div>
            </div>
          </div>




          <div class="dropdown">
            <button class="dropbtn">Camera 10</button>
            <div class="dropdown-content">
              <div className="single_Camera" id="single_Camera">
                <div className="alert_name">FIRE</div>
                <div className="fire_alt">
                  <p className="">yes</p>
                  <input type="radio" value="true"  name="alttwo_fire10" onChange={(data) => { this.setState({ fire10: data.target.value }) }} onClick={() =>  this.submit() }/>
                  <p>No</p>
                  <input type="radio" value="false" name="alttwo_fire10" onChange={(data) => { this.setState({ fire10: data.target.value }) }} onClick={() =>  this.submit() }/>
                </div>   
                <div className="alert_name">FALL</div>
                <div className="fire_alt">
                  <p>yes</p>
                  <input type="radio" value="true" name="alttwo_fall10" onChange={(data) => { this.setState({ fall10: data.target.value }) }} onClick={() => { this.submit() }}/>
                  <p>No</p>
                  <input type="radio" value="false" name="alttwo_fall10" onChange={(data) => { this.setState({ fall10: data.target.value }) }} onClick={() => { this.submit() }}/>
                </div>   
                <div className="alert_name">FIGHT</div>
                <div className="fire_alt">
                  <p>yes</p>
                  <input type="radio" value="true" name="alttwo_fight10" onChange={(data) => { this.setState({ fight10: data.target.value }) }} onClick={() => { this.submit() }}/>
                  <p>No</p>
                  <input type="radio" value="false" name="alttwo_fight10" onChange={(data) => { this.setState({ fight10: data.target.value }) }} onClick={() => { this.submit() }}/>
                </div>  

                  
                <button className="btn_Camera" onClick={() => { this.submit() }}>OK</button>
              </div>
            </div>
          </div><br/><br/>
          <div className="alert_name">Show Camera 6</div>
          <div className="fire_alt">
            <input type="radio" value="6" name="mycheck5" onChange={(data) => { this.setState({ show: data.target.value }) }} onClick={() => { this.submit() }}/>
          </div>


          <div className="alert_name">Show Camera 7</div>
          <div className="fire_alt">
            <input type="radio" value="7" name="mycheck5" onChange={(data) => { this.setState({ show: data.target.value }) }} onClick={() => { this.submit() }}/>
          </div>


          <div className="alert_name">Show Camera 8</div>
          <div className="fire_alt">
            <input type="radio" value="8" name="mycheck5" onChange={(data) => { this.setState({ show: data.target.value }) }} onClick={() => { this.submit() }}/>
          </div>


          <div className="alert_name">Show Camera 9</div>
          <div className="fire_alt">
            <input type="radio" value="9" name="mycheck5" onChange={(data) => { this.setState({ show: data.target.value }) }} onClick={() => { this.submit() }}/>
          </div>


          <div className="alert_name">Show Camera 10</div>
          <div className="fire_alt">
            <input type="radio" value="10" name="mycheck5" onChange={(data) => { this.setState({ show: data.target.value }) }} onClick={() => { this.submit() }}/>
          </div>


          <div className="alert_name">All</div>
          <div className="fire_alt">
            <input type="radio" value="0" name="mycheck5" onChange={(data) => { this.setState({ show: data.target.value }) }} onClick={() => { this.submit() }}/>
          </div><br />


          <button className="btn_Sum" onClick={() => { this.submit() }} >OK</button>
        
        </div>
      </>
    )
  }
}
