import React from 'react';
import Data_import, { fight7 } from "./constant";
import {  GrUpdate } from 'react-icons/gr';
import { useState } from "react";
import axios from "axios"
import { useParams } from 'react-router';
export default class AlertOne extends React.Component {

  constructor(props) {
    super(props);


 


      this.state={google:true,yes:'',yes1:'',yes2:''}
    //  this.state = Data_import
    //console.log("hhhhhhhhh",this.setState({show:1}))
     this.handleClick = this.handleClick.bind(this)
   
  }

  customFunction=()=>{this.setState({google:false})
}




  

  handleadd(event){
    // var show=this.props.id
  //    alert(event)

  //    console.log("pppppp",event)
  //  this.setState({show:event})
  // this.setState({id_add:234})
    this.submit()

  }
  submit() {


    this.state.show=7

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
    



  
    this.setState({fire7 : 'Welcome tdb '})
    console.log("jkkk",this.state)
  }

//   componentWillMount() {
//     this.setState({fire7:true,show:1 });
//     console.log("state",this.state)
//     // this.custom()
// }

  componentDidMount() {
    // this.custom()
// alert()

// constructor(props) {
  // super(props);





//     this.state={data:Data_import,google:true,yes:'',yes1:'',yes2:''}
//    this.state = Data_import
//   //  console.log("hhhhhhhhh",this.setState({show:1}))
// console.log("hhhhhhhhh",this.setState({show:1}))
// console.log("hhhhhhhhh",this.state)
//    this.handleClick = this.handleClick.bind(this)
 
// }

// var c=this.setState({show:1})
// alert(c)

    fetch("http://127.0.0.1:5000/alerts2") //1
  .then((response) => response.json()) //2
  .then((user) => {
    console.log("user",user)
this.setState(user)

    console.log(user.fire7);
    console.log(user.fight7);
    console.log(user.fall7);
  this.setState({yes:user.fire7})
  this.setState({yes1:user.fall7})
  this.setState({yes2:user.fight7})


  });
  
  }



 

handlechange(event){
this.setState({yes:''})

this.setState({yes:event.target.value})
this.setState({ fire7: event.target.value,show:7 })
}




handlechange1(event){
  this.setState({yes1:''})
  
  this.setState({yes1:event.target.value})
  this.setState({ fall7: event.target.value,show:7 })
  }





  
handlechange2(event){
  this.setState({yes2:''})
  
  this.setState({yes2:event.target.value})
  this.setState({ fight7: event.target.value,show:7 })
  }

  render() {
var v=1
// this.custom()
//  this.setState({fire7:true,show:1})
    console.log("ppppppppppppppppppppppppppppp",v)

    // console.log("ppppppppppppppppppppppppppppp",this.state)


    var show=this.props.id
   //alert(v)
           

    return (
<>

<div className="">
                <div className="alert_name">FIRE Detection</div>
                {/* {this.state.yes=="true"? */}
                <div className="fire_alt">
                  <p className="">yes</p>
                  <input type="radio" value="true"onChange={(event)=>this.handlechange(event)} checked={this.state.yes === 'true'} name="altone_fire7"  />
                  <p>No</p>
                  <input type="radio" value="false"onChange={(event)=>this.handlechange(event)} checked={this.state.yes === 'false'} name="altone_fire7" />
                </div>
                {/* //:              
      
              //   <div className="fire_alt">
              //     <p className="">yes</p>
              //     <input type="radio" value="true" name="altone_fire7"onChange={(data) => { this.setState({ fire7: data.target.value,show:1 }) }}  />
              //     <p>No</p>
              //     <input type="radio"checked value="false" name="altone_fire7" onChange={(data) => { this.setState({ fire7: data.target.value ,show:1}) }}  />
              //   </div>
             
              // } */}
 

                <div className="alert_name">FALL Detection</div>
                {/* {this.state.yes1=="true"? */}
                <div className="fire_alt">
                  <p>yes</p>
                  <input type="radio"onChange={(event)=>this.handlechange1(event)} checked={this.state.yes1 === 'true'} value="true" name="altone_fall7"  />
                  <p>No</p>
                  <input type="radio"onChange={(event)=>this.handlechange1(event)} checked={this.state.yes1 === 'false'} value="false" name="altone_fall7"  />
                </div>
                
                
              <div className="alert_name">FIGHT Detection</div>
            
                <div className="fire_alt">
                  <p>yes</p>
                  <input type="radio" value="true"onChange={(event)=>this.handlechange2(event)} checked={this.state.yes2 === 'true'} name="altone_fight7" />
                  <p>No</p>
                  <input type="radio" value="false"onChange={(event)=>this.handlechange2(event)} checked={this.state.yes2 === 'false'} name="altone_fight7" />
                </div>
        
              



                {/* <div className="alert_name">FIGHT Detection</div>
                {this.state.yes2=="true"?
                <div className="fire_alt">
                  <p>yes</p>
                  <input type="radio"defaultChecked value="true" name="altone_fight7" onChange={(data) => { this.setState({ fight7: data.target.value,show:1 }) }}  />
                  <p>No</p>
                  <input type="radio" value="false" name="altone_fight7" onChange={(data) => { this.setState({ fight7: data.target.value,show:1 }) }}  />
                </div>
                : 
              //   <div className="fire_alt">
              //   <p>yes</p>
              //   <input type="radio" value="true" name="altone_fight7" onChange={(data) => { this.setState({ fight7: data.target.value }) }}  />
              //   <p>No</p>
              //   <input type="radio"checked value="false" name="altone_fight7" onChange={(data) => { this.setState({ fight7: data.target.value }) }}  />
              // </div>

                <div className="fire_alt">
                  <p>yes</p>
                  <input type="radio" value="true" name="altone_fight7" onChange={(data) => { this.setState({ fight7: data.target.value,show:1 }) }}  />
                  <p>No</p>
                  <input type="radio"defaultChecked value="false" name="altone_fight7" onChange={(data) => { this.setState({ fight7: data.target.value,show:1 }) }}  />
                </div>
              
              //   <div className="fire_alt">
              //   <p>yes</p>
              //   <input type="radio" value="true" name="altone_fight7" onChange={(data) => { this.setState({ fight7: data.target.value }) }}  />
              //   <p>No</p>
              //   <input type="radio"checked value="false" name="altone_fight7" onChange={(data) => { this.setState({ fight7: data.target.value }) }}  />
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
