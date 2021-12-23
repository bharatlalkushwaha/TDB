import React, { useState, useEffect } from "react";
import Data_import, { fight1 } from "./constant";
import {  GrUpdate } from 'react-icons/gr';

import axios from "axios"
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router";
import { Grid } from "@mui/material";
import { Button } from "react-bootstrap";
 export default function AlertDetection() {
  
  const [state,setState]=useState({daa:[],google:true,id:'',fire:false,fall:false,fight:false,yes:'',yes1:'',yes2:'',th:false,th1:false,th2:false})
const[daa,setDaa]=useState([])
 
const [f1,setF1]=useState('')
const [f2,setF2]=useState('')
const [f3,setF3]=useState('')
const [id,setId]=useState('')
const getCamera=()=>{
  const body={id:2,fire:false,fall:false,fight:false}
  axios.get("http://127.0.0.1:5000/jason_file",body)
  .then((user) => {
   console.log("",user)
    setDaa(user.data)
  })
}


const getCamera1=()=>{
  const body={id:2,fire:false,fall:false,fight:false}
  axios.get("http://127.0.0.1:5000/jason_file",body)
  .then((user) => {
   console.log("arun",user)
    setDaa(user.data)
  })
}
useEffect(function () {

 getCamera()
 }, []);

const [rstp,setrstp]=useState('')
const [dataset,setDataset]=useState([])
const handlechange1=(event)=>{
  setState({yes1:''})
  
  setState({yes1:event.target.value})

  setState({ fall: true,show:1 })
  setState({th1:true})
  var body={id:id,fire:f1,rstp:rstp,fall:"true",fight:f3}
  //console.log(body)
  console.log("lyyy",body)
  var e=axios.post("http://127.0.0.1:5000/jason_file",body)
  console.log("f",e)
  getCamera()
  setRefresh(true)

  setF2('true')
  }  
const handlechange2=(event)=>{
  setState({yes2:''})
  
  setState({yes2:event.target.value})
  setState({ fight:true })
  setState({th2:true})
  var body={id:id,fire:f1,rstp:rstp,fall:f2,fight:"true"}
  //console.log(body)
  console.log("lyyy",body)

  var e=axios.post("http://127.0.0.1:5000/jason_file",body)
  console.log("f",e)
  getCamera()
  setRefresh(true)

  setF3('true')
  }
 
const [va,setva]=useState([])
const [button,setButton]=useState(false)
  const shoeCamera=()=>{
    return (
      <>
        <div className="diff_Cameras">

       { Object.keys(daa).map( (key) => {
         return(
          <div> 
            {daa[key].id?
            <div>
              {button==false?
            <button onClick={()=>handelAPI(daa[key])}
          style={{color:'white'}}className="dropbtn" > Camera {daa[key].id}
         
          </button>
          :<div>
            {id===daa[key].id?
           
            <button onClick={()=>handelAPI(daa[key])}
          style={{color:'white',backgroundColor:'green'}}className="dropbtn" > Camera {daa[key].id}
         
          </button>:<b> <button onClick={()=>handelAPI(daa[key])}
          style={{color:'white'}}className="dropbtn" > Camera {daa[key].id}
         
          </button></b>}</div>}
          </div>
          :<b></b>}</div>
         )
  })}

{/* <div>
    {buttons.map(function (name, index) {
        return <input
                 type="button"
                 className={this.state.active === name ? 'active' : ''}
                 value={name}
                 onClick={() => this.someFunct(name)}
                 key={ name } />;
   })}
</div> */}
</div>

      </>
    )

  }
  const handlechangechange1=()=>{
  setState({th1:false})
    setState({yes1:false})
    setState({ fall:true })
    var body={id:id,fire:f1,rstp:rstp,fall:"true",fight:f3}
    //console.log(body)
    console.log("ooooooooooooo",body)
    var e=axios.post("http://127.0.0.1:5000/jason_file",body)
    console.log("r",e)
    getCamera()
    setRefresh(true)

    setF2('true')

  }
  const handlechangechange2=()=>{
  setState({th2:false})
    setState({yes2:false})
    setState({ fight:true })
    var body={id:id,fire:f1,rstp:rstp,fall:f2,fight:"true"}
    //console.log(body)
    console.log("ooooooooooooo",body)
    var e=axios.post("http://127.0.0.1:5000/jason_file",body)
    console.log("r",e)
    getCamera()
    setRefresh(true)

    setF3('true')
  }
  const handlehandle1=()=>{
    setState({fall:false})
    var body={id:id,fire:f1,rstp:rstp,fall:"false",fight:f3}
    console.log("lyyy",body)
    var e=axios.post("http://127.0.0.1:5000/jason_file",body)
    console.log("uytr",e)
    getCamera()
    setRefresh(true)

    setF2('false')
  }
  const handlehandle2=()=>{
    setState({fight:false})
    var body={id:id,fire:f1,rstp:rstp,fall:f2,fight:"false"}
    console.log("lyyy",body)
    var e=axios.post("http://127.0.0.1:5000/jason_file",body)
    console.log("uytr",e)
    getCamera()
    setRefresh(true)

    setF3('false')
  }

  const handlechange=(event)=>{
  //   setState({yes:''})
  
  // setState({yes:event.target.value})
  // setState({th:true})
  //setF1({ fire:true})
  var body={id:id,fire:"true",rstp:rstp,fall:f2,fight:f3}
  //console.log(body)
  console.log("lyyy",body)
  var e=axios.post("http://127.0.0.1:5000/jason_file",body)
  console.log("f",e)

  getCamera()
  setRefresh(true)
  //window.location.reload(true);
  setF1('true')
  ///shoeCamera()
  
  }

  const handelAPI=(item)=>{
    //console.log("jlllll",item)
    setButton(true)
 //setF1="false"
 setF1(item.fire)
 setF2(item.fall)
 setF3(item.fight)
 setId(item.id)
 setrstp(item.rstp)
getCamera()
 
 
    
  }
  const handlechangechange=()=>{
    setState({th:false})
    setState({yes:false})
    setState({ fire:true })
    var body={id:id,fire:"true",rstp:rstp,fall:f2,fight:f3}
    //console.log(body)
    console.log("ooooooooooooo",body)
    var e=axios.post("http://127.0.0.1:5000/jason_file",body)
    console.log("r",e)
    setRefresh(true)
    //window.location.reload(true);
    getCamera()
    //shoeCamera()
 
    setF1('true')
  
  }
const [refresh,setRefresh]=useState(false)
  const handlehandle=()=>{
    //setF1({fire:false})
    var body={id:id,fire:"false",rstp:rstp,fall:f2,fight:f3}
    // console.log("lyyy",body)
    var e=axios.post("http://127.0.0.1:5000/jason_file",body)
    // console.log("uytr",e)
    getCamera()
    // window.location.reload(true);
    //shoeCamera()
    setF1('false')
    setRefresh(true)
    
  }
  console.log("llllllllllllll",f1)
  console.log("llllllllllllll",f2)
  console.log("llllllllllllll",f3)
    return (
<>

<div className="">



  
  <Grid container spacing={1}>
    <Grid xs={12} sm={10}>

                {f1==="true"? <div className="fire_alt">
                <input type="checkbox"style={{marginTop:'9px',marginRight:'8px'}} onChange={()=>handlehandle()} checked={f1 === "true"} name="altone_fire1"  />
                <div className="alert_name">FIRE Detection</div>
                </div>:
                <div>
                {state.th===false?
                <div className="fire_alt">
                <input type="checkbox"style={{marginTop:'9px',marginRight:'8px'}} value="true"onChange={(event)=>handlechange(event)} checked={f1 === "true"} name="altone_fire1"  />
                <div className="alert_name">FIRE Detection</div>
                </div>
                : <div className="fire_alt">
                <input type="checkbox"style={{marginTop:'9px',marginRight:'8px'}} onChange={()=>handlechangechange()}  name="altone_fire1"  />
                <div className="alert_name">FIRE Detection</div>
                </div>
                }</div>}
                <p></p>
             
             {f2==="true"? <div className="fire_alt">
                <input type="checkbox"style={{marginTop:'9px',marginRight:'8px'}} onChange={()=>handlehandle1()} checked={f2 === "true"} name="altone_fire1"  />
                <div className="alert_name">FALL Detection</div>
                </div>:
                <div>
                {state.th1===false?
                <div className="fire_alt">
                <input type="checkbox"style={{marginTop:'9px',marginRight:'8px'}} value="true"onChange={(event)=>handlechange1(event)} checked={f2 === "true"} name="altone_fire1"  />
                <div className="alert_name">FALL Detection</div>
                </div>
                : <div className="fire_alt">
                <input type="checkbox"style={{marginTop:'9px',marginRight:'8px'}} onChange={()=>handlechangechange1()}  name="altone_fire1"  />
                <div className="alert_name">FALL Detection</div>
                </div>
                }</div>}
              <p></p>
              {f3==="true"? <div className="fire_alt">
                <input type="checkbox"style={{marginTop:'9px',marginRight:'8px'}} onChange={()=>handlehandle2()} checked={f3 === "true"} name="altone_fire1"  />
                <div className="alert_name">FIGHT Detection</div>
                </div>:
                <div>
                {state.th2===false?
                <div className="fire_alt">
                <input type="checkbox"style={{marginTop:'9px',marginRight:'8px'}} value="true"onChange={(event)=>handlechange2(event)} checked={f3 === "true"} name="altone_fire1"  />
                <div className="alert_name">FIGHT Detection</div>
                </div>
                : <div className="fire_alt">
                <input type="checkbox"style={{marginTop:'9px',marginRight:'8px'}} onChange={()=>handlechangechange2()}  name="altone_fire1"  />
                <div className="alert_name">FIGHT Detection</div>
                </div>
                }</div>}
              <p></p>  
           </Grid>
           <div style={{display:'flex',justifyContent:'flex-end'}}>
           <Grid xs={12} sm={1}>
              {shoeCamera()}
              </Grid>
              </div>
              </Grid>
                                      </div>
                                   
      </>
    )
  
}



