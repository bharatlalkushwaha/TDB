import React from 'react';
import Data_import from './constant';

export default class AlertFour extends React.Component {

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
            <button class="dropbtn">Camera 16</button>
            <div class="dropdown-content">
              <div className="single_Camera">
                <div className="alert_name">FIRE</div>
                <div className="fire_alt">
                  <p className="">yes</p>

                  <input type="radio" value="true" name="altfour_fire16" onChange={(data) => { this.setState({ fire16: data.target.value }) }} onClick={() => { this.submit() }} />
                  <p>No</p>
                  <input type="radio" value="false" name="altfour_fire16" onChange={(data) => { this.setState({ fire16: data.target.value }) }} onClick={() => { this.submit() }} />
                </div>
                <div className="alert_name">FALL</div>
                <div className="fire_alt">
                  <p>yes</p>
                  <input type="radio" value="true" name="altfour_fall16" onChange={(data) => { this.setState({ fall16: data.target.value }) }} onClick={() => { this.submit() }} />
                  <p>No</p>
                  <input type="radio" value="false" name="altfour_fall16" onChange={(data) => { this.setState({ fall16: data.target.value }) }} onClick={() => { this.submit() }} />
                </div>
                <div className="alert_name">FIGHT</div>
                <div className="fire_alt">
                  <p>yes</p>
                  <input type="radio" value="true" name="altfour_fight16" onChange={(data) => { this.setState({ fight16: data.target.value }) }} onClick={() => { this.submit() }} />
                  <p>No</p>
                  <input type="radio" value="false" name="altfour_fight16" onChange={(data) => { this.setState({ fight16: data.target.value }) }} onClick={() => { this.submit() }} />
                </div>


                <button className="btn_Camera" onClick={() => { this.submit() }}>OK</button>
              </div>
            </div>
          </div>




          <div class="dropdown">
            <button class="dropbtn">Camera 17</button>
            <div class="dropdown-content">
              <div className="single_Camera">
                <div className="alert_name">FIRE</div>
                <div className="fire_alt">
                  <p className="">yes</p>
                  <input type="radio" value="true" name="altfour_fire17" onChange={(data) => { this.setState({ fire17: data.target.value }) }} onClick={() => { this.submit() }} />
                  <p>No</p>
                  <input type="radio" value="false" name="altfour_fire17" onChange={(data) => { this.setState({ fire17: data.target.value }) }} onClick={() => { this.submit() }} />
                </div>              <div className="alert_name">FALL</div>
                <div className="fire_alt">
                  <p>yes</p>
                  <input type="radio" value="true" name="altfour_fall17" onChange={(data) => { this.setState({ fall17: data.target.value }) }} onClick={() => { this.submit() }} />
                  <p>No</p>
                  <input type="radio" value="false" name="altfour_fall17" onChange={(data) => { this.setState({ fall17: data.target.value }) }} onClick={() => { this.submit() }} />
                </div>              <div className="alert_name">FIGHT</div>
                <div className="fire_alt">
                  <p>yes</p>
                  <input type="radio" value="true" name="altfour_fight17" onChange={(data) => { this.setState({ fight17: data.target.value }) }} onClick={() => { this.submit() }} />
                  <p>No</p>
                  <input type="radio" value="false" name="altfour_fight17" onChange={(data) => { this.setState({ fight17: data.target.value }) }} onClick={() => { this.submit() }} />
                </div>
                <button className="btn_Camera" onClick={() => { this.submit() }}>OK</button>
              </div>
            </div>
          </div>


          <div class="dropdown">
            <button class="dropbtn">Camera 18</button>
            <div class="dropdown-content">
              <div className="single_Camera" id="single_Camera">
                <div className="alert_name">FIRE</div>
                <div className="fire_alt">
                  <p className="">yes</p>
                  <input type="radio" value="true" name="altfour_fire18" onChange={(data) => { this.setState({ fire18: data.target.value }) }} onClick={() => { this.submit() }} />
                  <p>No</p>
                  <input type="radio" value="false" name="altfour_fire18" onChange={(data) => { this.setState({ fire18: data.target.value }) }} onClick={() => { this.submit() }} />
                </div>
                <div className="alert_name">FALL</div>
                <div className="fire_alt">
                  <p>yes</p>
                  <input type="radio" value="true" name="altfour_fall18" onChange={(data) => { this.setState({ fall18: data.target.value }) }} onClick={() => { this.submit() }} />
                  <p>No</p>
                  <input type="radio" value="false" name="altfour_fall18" onChange={(data) => { this.setState({ fall18: data.target.value }) }} onClick={() => { this.submit() }} />
                </div>
                <div className="alert_name">FIGHT</div>
                <div className="fire_alt">
                  <p>yes</p>
                  <input type="radio" value="true" name="altfour_fight18" onChange={(data) => { this.setState({ fight18: data.target.value }) }} onClick={() => { this.submit() }} />
                  <p>No</p>
                  <input type="radio" value="false" name="altfour_fight18" onChange={(data) => { this.setState({ fight18: data.target.value }) }} onClick={() => { this.submit() }} />
                </div>


                <button className="btn_Camera" onClick={() => { this.submit() }}>OK</button>
              </div>
            </div>
          </div><br /><br />


          <div class="dropdown">
            <button class="dropbtn">Camera 19</button>
            <div class="dropdown-content">
              <div className="single_Camera" id="single_Camera">
                <div className="alert_name">FIRE</div>
                <div className="fire_alt">
                  <p className="">yes</p>
                  <input type="radio" value="true" name="altfour_fire19" onChange={(data) => { this.setState({ fire19: data.target.value }) }} onClick={() => { this.submit() }} />
                  <p>No</p>
                  <input type="radio" value="false" name="altfour_fire19" onChange={(data) => { this.setState({ fire19: data.target.value }) }} onClick={() => { this.submit() }} />
                </div>
                <div className="alert_name">FALL</div>
                <div className="fire_alt">
                  <p>yes</p>
                  <input type="radio" value="true" name="altfour_fall19" onChange={(data) => { this.setState({ fall19: data.target.value }) }} onClick={() => { this.submit() }} />
                  <p>No</p>
                  <input type="radio" value="false" name="altfour_fall19" onChange={(data) => { this.setState({ fall19: data.target.value }) }} onClick={() => { this.submit() }} />
                </div>
                <div className="alert_name">FIGHT</div>
                <div className="fire_alt">
                  <p>yes</p>
                  <input type="radio" value="true" name="altfour_fight19" onChange={(data) => { this.setState({ fight19: data.target.value }) }} onClick={() => { this.submit() }} />
                  <p>No</p>
                  <input type="radio" value="false" name="altfour_fight19" onChange={(data) => { this.setState({ fight19: data.target.value }) }} onClick={() => { this.submit() }} />
                </div>


                <button className="btn_Camera" onClick={() => { this.submit() }}>OK</button>
              </div>
            </div>
          </div>




          <div class="dropdown">
            <button class="dropbtn">Camera 20</button>
            <div class="dropdown-content">
              <div className="single_Camera" id="single_Camera">
                <div className="alert_name">FIRE</div>
                <div className="fire_alt">
                  <p className="">yes</p>
                  <input type="radio" value="true" name="altfour_fire20" onChange={(data) => { this.setState({ fire20: data.target.value }) }} onClick={() => this.submit()} />
                  <p>No</p>
                  <input type="radio" value="false" name="altfour_fire20" onChange={(data) => { this.setState({ fire20: data.target.value }) }} onClick={() => this.submit()} />
                </div>
                <div className="alert_name">FALL</div>
                <div className="fire_alt">
                  <p>yes</p>
                  <input type="radio" value="true" name="altfour_fall20" onChange={(data) => { this.setState({ fall20: data.target.value }) }} onClick={() => { this.submit() }} />
                  <p>No</p>
                  <input type="radio" value="false" name="altfour_fall20" onChange={(data) => { this.setState({ fall20: data.target.value }) }} onClick={() => { this.submit() }} />
                </div>
                <div className="alert_name">FIGHT</div>
                <div className="fire_alt">
                  <p>yes</p>
                  <input type="radio" value="true" name="altfour_fight20" onChange={(data) => { this.setState({ fight20: data.target.value }) }} onClick={() => { this.submit() }} />
                  <p>No</p>
                  <input type="radio" value="false" name="altfour_fight20" onChange={(data) => { this.setState({ fight20: data.target.value }) }} onClick={() => { this.submit() }} />
                </div>


                <button className="btn_Camera" onClick={() => { this.submit() }}>OK</button>
              </div>
            </div>
          </div><br /><br />
          <div className="alert_name">Show Camera 16</div>
          <div className="fire_alt">
            <input type="radio" value="16" name="mycheck5" onChange={(data) => { this.setState({ show: data.target.value }) }} onClick={() => { this.submit() }} />
          </div>


          <div className="alert_name">Show Camera 17</div>
          <div className="fire_alt">
            <input type="radio" value="17" name="mycheck5" onChange={(data) => { this.setState({ show: data.target.value }) }} onClick={() => { this.submit() }} />
          </div>


          <div className="alert_name">Show Camera 18</div>
          <div className="fire_alt">
            <input type="radio" value="18" name="mycheck5" onChange={(data) => { this.setState({ show: data.target.value }) }} onClick={() => { this.submit() }} />
          </div>


          <div className="alert_name">Show Camera 19</div>
          <div className="fire_alt">
            <input type="radio" value="19" name="mycheck5" onChange={(data) => { this.setState({ show: data.target.value }) }} onClick={() => { this.submit() }} />
          </div>


          <div className="alert_name">Show Camera 20</div>
          <div className="fire_alt">
            <input type="radio" value="20" name="mycheck5" onChange={(data) => { this.setState({ show: data.target.value }) }} onClick={() => { this.submit() }} />
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
