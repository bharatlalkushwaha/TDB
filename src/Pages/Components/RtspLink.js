import React from 'react';
//import { MdAddAPhoto } from 'react-icons/md';
import {AiOutlinePoweroff } from 'react-icons/ai';
import Data_import from "./constant";

export default class RtspLink extends React.Component {

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
        <div className="rtsp_content">
          {/* <input type="text" class="input1" placeholder="Camera Address" value={this.state.ip_add} name="ip" onChange={(data) => { this.setState({ ip_add: data.target.value }) }} />
          <button className="btn" id="btn3" onClick={() => { this.submit() }}><MdAddAPhoto className="bio"/>Add</button><br/> */}
          <input type="text" class="input1" placeholder="Camera Address" value={this.state.ip_remove} name="ip_remove" onChange={(data) => { this.setState({ ip_remove: data.target.value }) }}  />
          <button className="btn" id="btn3" onClick={() => { this.submit() }}><AiOutlinePoweroff className="icon_delete"/>Turn Off</button>
          </div>
      </>
    )
  }
}
