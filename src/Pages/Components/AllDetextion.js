import React from 'react';
import Data_import, { fight9 } from "./constant";
import {  GrUpdate } from 'react-icons/gr';
import { useState } from "react";
import axios from "axios"
import { useParams } from 'react-router';
export default class AlertOne extends React.Component {

  constructor(props) {
    super(props);

      this.state={google:true,yes:'',yes1:'',yes2:''}
    
     this.handleClick = this.handleClick.bind(this)
   
  }

  customFunction=()=>{this.setState({google:false})
}

  handleadd(event){
    this.submit()

  }
  submit() {

    console.log("thisyyyyyyyyyyyyyyyyyyyy",this.state)

    this.state.show=0
 console.log("thisyyyyyyyyyyyyyyyyyyyy",this.state)

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
        console.log("respuuuuuuuuuuuuu", resp);
     
      })

    })
  }
  
  handleClick(){
    this.setState({fire9 : 'Welcome tdb '})
    console.log("jkkk",this.state)
  }

  componentDidMount() {

fetch("http://127.0.0.1:5000/jason_file?id=2&fight=1&fall=1&fire=1&all=1")
    // fetch("http://127.0.0.1:5000/alerts2") //1
  .then((response) => response.json()) //2
  .then((user) => {
    console.log("user",user)
this.setState(user)

    console.log(user.fire9);
    console.log(user.fight9);
    console.log(user.fall9);
  this.setState({yes:user.fire9})
  this.setState({yes1:user.fall9})
  this.setState({yes2:user.fight9})


  });
  
  }



 

handlechange(event){
this.setState({yes:''})

this.setState({yes:event.target.value})
this.setState({ fire9: event.target.value,show:9 })
}




handlechange1(event){
  this.setState({yes1:''})
  
  this.setState({yes1:event.target.value})
  this.setState({ fall9: event.target.value,show:9 })
  }





  
handlechange2(event){
  this.setState({yes2:''})
  
  this.setState({yes2:event.target.value})
  this.setState({ fight9: event.target.value,show:9 })
  }

  render() {
var v=1

    console.log("ppppppppppppppppppppppppppppp",v)

    var show=this.props.id
 
    return (
<>

<div className="">
             
                {/* <div className="alert_name">FIGHT Detection</div>
                {this.state.yes2=="true"?
                <div className="fire_alt">
                  <p>yes</p>
                  <input type="radio"defaultChecked value="true" name="altone_fight9" onChange={(data) => { this.setState({ fight9: data.target.value,show:1 }) }}  />
                  <p>No</p>
                  <input type="radio" value="false" name="altone_fight9" onChange={(data) => { this.setState({ fight9: data.target.value,show:1 }) }}  />
                </div>
                : 
              //   <div className="fire_alt">
              //   <p>yes</p>
              //   <input type="radio" value="true" name="altone_fight9" onChange={(data) => { this.setState({ fight9: data.target.value }) }}  />
              //   <p>No</p>
              //   <input type="radio"checked value="false" name="altone_fight9" onChange={(data) => { this.setState({ fight9: data.target.value }) }}  />
              // </div>

                <div className="fire_alt">
                  <p>yes</p>
                  <input type="radio" value="true" name="altone_fight9" onChange={(data) => { this.setState({ fight9: data.target.value,show:1 }) }}  />
                  <p>No</p>
                  <input type="radio"defaultChecked value="false" name="altone_fight9" onChange={(data) => { this.setState({ fight9: data.target.value,show:1 }) }}  />
                </div>
              
              //   <div className="fire_alt">
              //   <p>yes</p>
              //   <input type="radio" value="true" name="altone_fight9" onChange={(data) => { this.setState({ fight9: data.target.value }) }}  />
              //   <p>No</p>
              //   <input type="radio"checked value="false" name="altone_fight9" onChange={(data) => { this.setState({ fight9: data.target.value }) }}  />
              // </div>
              }
              
               */}
              
              
              
              <br/>   



                <button className="btn" id="btn3" onClick={() => { this.handleadd() }}><GrUpdate className="icon_delete"/>Update</button>
                                      </div>



                                         {/* </div> */}
                                        {/* //  } */}
      </>
    )
  }
}
