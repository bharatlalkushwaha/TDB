import React from 'react';
import Data_import from "./constant";

export default class ShowCamera extends React.Component {
  
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
       
          <div className="alert_name">Show Camera 1</div>
          <div className="fire_alt">
            <input type="radio" value="1" name="mycheck5" onChange={(data) => { this.setState({ show: data.target.value }) }} onClick={() => { this.submit() }}/>
          </div>


          <div className="alert_name">Show Camera 2</div>
          <div className="fire_alt">
            <input type="radio" value="2" name="mycheck5" onChange={(data) => { this.setState({ show: data.target.value }) }} onClick={() => { this.submit() }}/>
          </div>


          <div className="alert_name">Show Camera 3</div>
          <div className="fire_alt">
            <input type="radio" value="3" name="mycheck5" onChange={(data) => { this.setState({ show: data.target.value }) }} onClick={() => { this.submit() }}/>
          </div>


          <div className="alert_name">Show Camera 4</div>
          <div className="fire_alt">
            <input type="radio" value="4" name="mycheck5" onChange={(data) => { this.setState({ show: data.target.value }) }} onClick={() => { this.submit() }}/>
          </div>


          <div className="alert_name">1 to 4</div>
          <div className="fire_alt">
            <input type="radio" value="0" name="mycheck5" onChange={(data) => { this.setState({ show: data.target.value }) }} onClick={() => { this.submit() }}/>
          </div>

          {/* <button className="btn_Sum" onClick={() => { this.submit() }} >OK</button> */}
        </div>
      </>
    )
  }
}
