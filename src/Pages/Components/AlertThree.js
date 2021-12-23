import React from 'react';
import Data_import from './constant';

export default class AlertThree extends React.Component {

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
            <button class="dropbtn">Camera 11</button>
            <div class="dropdown-content">
              <div className="single_Camera">
                <div className="alert_name">FIRE</div>
                <div className="fire_alt">
                  <p className="">yes</p>

                  <input type="radio" value="true" name="altthree_fire11" onChange={(data) => { this.setState({ fire11: data.target.value }) }} onClick={() => { this.submit() }} />
                  <p>No</p>
                  <input type="radio" value="false" name="altthree_fire11" onChange={(data) => { this.setState({ fire11: data.target.value }) }} onClick={() => { this.submit() }} />
                </div>
                <div className="alert_name">FALL</div>
                <div className="fire_alt">
                  <p>yes</p>
                  <input type="radio" value="true" name="altthree_fall11" onChange={(data) => { this.setState({ fall11: data.target.value }) }} onClick={() => { this.submit() }} />
                  <p>No</p>
                  <input type="radio" value="false" name="altthree_fall11" onChange={(data) => { this.setState({ fall11: data.target.value }) }} onClick={() => { this.submit() }} />
                </div>
                <div className="alert_name">FIGHT</div>
                <div className="fire_alt">
                  <p>yes</p>
                  <input type="radio" value="true" name="altthree_fight11" onChange={(data) => { this.setState({ fight11: data.target.value }) }} onClick={() => { this.submit() }} />
                  <p>No</p>
                  <input type="radio" value="false" name="altthree_fight11" onChange={(data) => { this.setState({ fight11: data.target.value }) }} onClick={() => { this.submit() }} />
                </div>


                <button className="btn_Camera" onClick={() => { this.submit() }}>OK</button>
              </div>
            </div>
          </div>



          <div class="dropdown">
            <button class="dropbtn">Camera 12</button>
            <div class="dropdown-content">
              <div className="single_Camera">
                <div className="alert_name">FIRE</div>
                <div className="fire_alt">
                  <p className="">yes</p>
                  <input type="radio" value="true" name="altthree_fire12" onChange={(data) => { this.setState({ fire12: data.target.value }) }} onClick={() => { this.submit() }} />
                  <p>No</p>
                  <input type="radio" value="false" name="altthree_fire12" onChange={(data) => { this.setState({ fire12: data.target.value }) }} onClick={() => { this.submit() }} />
                </div>              <div className="alert_name">FALL</div>
                <div className="fire_alt">
                  <p>yes</p>
                  <input type="radio" value="true" name="altthree_fall12" onChange={(data) => { this.setState({ fall12: data.target.value }) }} onClick={() => { this.submit() }} />
                  <p>No</p>
                  <input type="radio" value="false" name="altthree_fall12" onChange={(data) => { this.setState({ fall12: data.target.value }) }} onClick={() => { this.submit() }} />
                </div>              <div className="alert_name">FIGHT</div>
                <div className="fire_alt">
                  <p>yes</p>
                  <input type="radio" value="true" name="altthree_fight12" onChange={(data) => { this.setState({ fight12: data.target.value }) }} onClick={() => { this.submit() }} />
                  <p>No</p>
                  <input type="radio" value="false" name="altthree_fight12" onChange={(data) => { this.setState({ fight12: data.target.value }) }} onClick={() => { this.submit() }} />
                </div>
                <button className="btn_Camera" onClick={() => { this.submit() }}>OK</button>
              </div>
            </div>
          </div>


          <div class="dropdown">
            <button class="dropbtn">Camera 13</button>
            <div class="dropdown-content">
              <div className="single_Camera" id="single_Camera">
                <div className="alert_name">FIRE</div>
                <div className="fire_alt">
                  <p className="">yes</p>
                  <input type="radio" value="true" name="altthree_fire13" onChange={(data) => { this.setState({ fire13: data.target.value }) }} onClick={() => { this.submit() }} />
                  <p>No</p>
                  <input type="radio" value="false" name="altthree_fire13" onChange={(data) => { this.setState({ fire13: data.target.value }) }} onClick={() => { this.submit() }} />
                </div>
                <div className="alert_name">FALL</div>
                <div className="fire_alt">
                  <p>yes</p>
                  <input type="radio" value="true" name="altthree_fall13" onChange={(data) => { this.setState({ fall13: data.target.value }) }} onClick={() => { this.submit() }} />
                  <p>No</p>
                  <input type="radio" value="false" name="altthree_fall13" onChange={(data) => { this.setState({ fall13: data.target.value }) }} onClick={() => { this.submit() }} />
                </div>
                <div className="alert_name">FIGHT</div>
                <div className="fire_alt">
                  <p>yes</p>
                  <input type="radio" value="true" name="altthree_fight13" onChange={(data) => { this.setState({ fight13: data.target.value }) }} onClick={() => { this.submit() }} />
                  <p>No</p>
                  <input type="radio" value="false" name="altthree_fight13" onChange={(data) => { this.setState({ fight13: data.target.value }) }} onClick={() => { this.submit() }} />
                </div>


                <button className="btn_Camera" onClick={() => { this.submit() }}>OK</button>
              </div>
            </div>
          </div><br /><br />


          <div class="dropdown">
            <button class="dropbtn">Camera 14</button>
            <div class="dropdown-content">
              <div className="single_Camera" id="single_Camera">
                <div className="alert_name">FIRE</div>
                <div className="fire_alt">
                  <p className="">yes</p>
                  <input type="radio" value="true" name="altthree_fire14" onChange={(data) => { this.setState({ fire14: data.target.value }) }} onClick={() => { this.submit() }} />
                  <p>No</p>
                  <input type="radio" value="false" name="altthree_fire14" onChange={(data) => { this.setState({ fire14: data.target.value }) }} onClick={() => { this.submit() }} />
                </div>
                <div className="alert_name">FALL</div>
                <div className="fire_alt">
                  <p>yes</p>
                  <input type="radio" value="true" name="altthree_fall14" onChange={(data) => { this.setState({ fall14: data.target.value }) }} onClick={() => { this.submit() }} />
                  <p>No</p>
                  <input type="radio" value="false" name="altthree_fall14" onChange={(data) => { this.setState({ fall14: data.target.value }) }} onClick={() => { this.submit() }} />
                </div>
                <div className="alert_name">FIGHT</div>
                <div className="fire_alt">
                  <p>yes</p>
                  <input type="radio" value="true" name="altthree_fight14" onChange={(data) => { this.setState({ fight14: data.target.value }) }} onClick={() => { this.submit() }} />
                  <p>No</p>
                  <input type="radio" value="false" name="altthree_fight14" onChange={(data) => { this.setState({ fight14: data.target.value }) }} onClick={() => { this.submit() }} />
                </div>


                <button className="btn_Camera" onClick={() => { this.submit() }}>OK</button>
              </div>
            </div>
          </div>




          <div class="dropdown">
            <button class="dropbtn">Camera 15</button>
            <div class="dropdown-content">
              <div className="single_Camera" id="single_Camera">
                <div className="alert_name">FIRE</div>
                <div className="fire_alt">
                  <p className="">yes</p>
                  <input type="radio" value="true" name="altthree_fire15" onChange={(data) => { this.setState({ fire15: data.target.value }) }} onClick={() => this.submit()} />
                  <p>No</p>
                  <input type="radio" value="false" name="altthree_fire15" onChange={(data) => { this.setState({ fire15: data.target.value }) }} onClick={() => this.submit()} />
                </div>
                <div className="alert_name">FALL</div>
                <div className="fire_alt">
                  <p>yes</p>
                  <input type="radio" value="true" name="altthree_fall15" onChange={(data) => { this.setState({ fall15: data.target.value }) }} onClick={() => { this.submit() }} />
                  <p>No</p>
                  <input type="radio" value="false" name="altthree_fall15" onChange={(data) => { this.setState({ fall15: data.target.value }) }} onClick={() => { this.submit() }} />
                </div>
                <div className="alert_name">FIGHT</div>
                <div className="fire_alt">
                  <p>yes</p>
                  <input type="radio" value="true" name="altthree_fight15" onChange={(data) => { this.setState({ fight15: data.target.value }) }} onClick={() => { this.submit() }} />
                  <p>No</p>
                  <input type="radio" value="false" name="altthree_fight15" onChange={(data) => { this.setState({ fight15: data.target.value }) }} onClick={() => { this.submit() }} />
                </div>


                <button className="btn_Camera" onClick={() => { this.submit() }}>OK</button>
              </div>
            </div>
          </div><br /><br />
          <div className="alert_name">Show Camera 11</div>
          <div className="fire_alt">
            <input type="radio" value="11" name="mycheck5" onChange={(data) => { this.setState({ show: data.target.value }) }} onClick={() => { this.submit() }} />
          </div>


          <div className="alert_name">Show Camera 12</div>
          <div className="fire_alt">
            <input type="radio" value="12" name="mycheck5" onChange={(data) => { this.setState({ show: data.target.value }) }} onClick={() => { this.submit() }} />
          </div>


          <div className="alert_name">Show Camera 13</div>
          <div className="fire_alt">
            <input type="radio" value="13" name="mycheck5" onChange={(data) => { this.setState({ show: data.target.value }) }} onClick={() => { this.submit() }} />
          </div>


          <div className="alert_name">Show Camera 14</div>
          <div className="fire_alt">
            <input type="radio" value="14" name="mycheck5" onChange={(data) => { this.setState({ show: data.target.value }) }} onClick={() => { this.submit() }} />
          </div>


          <div className="alert_name">Show Camera 15</div>
          <div className="fire_alt">
            <input type="radio" value="15" name="mycheck5" onChange={(data) => { this.setState({ show: data.target.value }) }} onClick={() => { this.submit() }} />
          </div>


          <div className="alert_name">All</div>
          <div className="fire_alt">
            <input type="radio" value="0" name="mycheck5" onChange={(data) => { this.setState({ show: data.target.value }) }} onClick={() => { this.submit() }} />
          </div><br />


          <button className="btn_Sum" onClick={() => { this.submit() }} >OK</button>

        </div>
      </>
    )
  }
}
