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

const getCamera=()=>{
  const body={id:2,fire:false,fall:false,fight:false}
  axios.get("http://127.0.0.1:5000/cameras",body)
    // fetch("http://127.0.0.1:5000/alerts2") //1
  .then((response) => response.json()) //2
  .then((user) => {
    setDaa(user)
    console.log("user",user)
  })
}
useEffect(function () {
 getTodos()
 getCamera()
 }, []);
  // var params=useParams()
  // var id=params.id
  // console.log("d",id)

  const handelAPI=(id)=>{
    const body={id:id}
    console.log(id)
    axios.post("http://localhost:5000/fooditems/listcamerabyid",body)
    .then((user) => {
      setState({data:user})
      user.data.map((item)=>{
        console.log("k",item)
        if(item.fire)
        {
        setState({fire:item.fire})
        }
        if(item.fall)
        {
        setState({fall:item.fall})
        }
        if(item.fight)
        {
        setState({fight:item.fight})
        }


      //   if(item.fire==1)
      //   { setState({yes:true})
      //   setState({fire:true})  
      //   // setState({yes:false})

      //           }      
      //             else
      //   {  
      // }
      // if(item.fight==1)
      // {
      //   setState({yes1:true})
      //   setState({fight:true}) 
      // }
  
      //   if(item.fall==0)
      //   {  
      //   setState({yes1:false})
      
      // }
      //   else
      //   {   setState({yes1:true})
      //   setState({fall:true})}
      //   if(item.fight==0)
      //   {  
      //   setState({yes2:false})
   
      // }
      //   else
      //   {   setState({yes2:true})
      // setState({fight:true})
      // }
      })
    })
  }

const getTodos=()=> {
  // const id = this.props.match.params.id;
  // console.log(id) 

  // console.log("yyyyyyyyyyyyyyyyyyyyyy",state.id)
  var body=13
  

    axios.post("http://localhost:5000/fooditems/listcamerabyid",body)
  .then((user) => {
    setState({data:user})
    user.data.map((item)=>{
    
      if(item.fire==0)
      {  
      setState({yes:false})
      console.log("hhhh",state.yes)}
      else
      {   setState({yes:true})
      setState({fire:true})
    }

      if(item.fall==0)
      {  
      setState({yes1:false})
      console.log("hhhh1",state.yes1) 
    }
      else
      {   setState({yes1:true})
      setState({fall:true})}
      if(item.fight==0)
      {  
      setState({yes2:false})
      console.log("hhhh1",state.yes2)}
      else
      {   setState({yes2:true})
    setState({fight:true})
    }
    })
  })
}



const handlechange=(event)=>{
  setState({yes:''})

setState({yes:event.target.value})
setState({th:true})
setState({ fire:true,show:1 })
}
const handlechange1=(event)=>{
  setState({yes1:''})
  
  setState({yes1:event.target.value})

  setState({ fall: true,show:1 })
  setState({th1:true})
  }  
const handlechange2=(event)=>{
  setState({yes2:''})
  
  setState({yes2:event.target.value})
  setState({ fight:true,show:1 })
  setState({th2:true})
  }
  const handlechangechange=()=>{
    setState({th:false})
    setState({yes:false})
    setState({ fire:true })
  }

  const shoeCamera=()=>{
    return (
      <>
        <div className="diff_Cameras">


{daa.map((item,index)=>(


<div> <button onClick={()=>handelAPI(item.id)}
   style={{color:'white'}}className="dropbtn" > Camera {index+1}
  
   </button></div>


))}
</div>

      </>
    )

  }
  const handlechangechange1=()=>{
  setState({th1:false})
    setState({yes1:false})
    setState({ fall:true })
  }
  const handlechangechange2=()=>{
  setState({th2:false})
    setState({yes2:false})
    this.setState({ fight:true })
  }
  const handlehandle=()=>{
    setState({fire:false})
  }

  const handlehandle1=()=>{
    setState({fall:false})
  }
  const handlehandle2=()=>{
    setState({fight:false})
  }
console.log("p",state.fire)
    return (
<>

<div className="">
  <Grid container spacing={1}>
    <Grid xs={12} sm={10}>

                {state.fire===1? <div className="fire_alt">
                <input type="checkbox"style={{marginTop:'9px',marginRight:'8px'}} onChange={()=>handlehandle()} checked={state.fire === true} name="altone_fire1"  />
                <div className="alert_name">FIRE Detection</div>
                </div>:
                <div>
                {state.th===false?
                <div className="fire_alt">
                <input type="checkbox"style={{marginTop:'9px',marginRight:'8px'}} value="true"onChange={(event)=>handlechange(event)} checked={state.fire === true} name="altone_fire1"  />
                <div className="alert_name">FIRE Detection</div>
                </div>
                : <div className="fire_alt">
                <input type="checkbox"style={{marginTop:'9px',marginRight:'8px'}} onChange={()=>handlechangechange()}  name="altone_fire1"  />
                <div className="alert_name">FIRE Detection</div>
                </div>
                }</div>}
                <p></p>
             
             {state.fall===true? <div className="fire_alt">
                <input type="checkbox"style={{marginTop:'9px',marginRight:'8px'}} onChange={()=>handlehandle1()} checked={state.fall === true} name="altone_fire1"  />
                <div className="alert_name">FALL Detection</div>
                </div>:
                <div>
                {state.th1===false?
                <div className="fire_alt">
                <input type="checkbox"style={{marginTop:'9px',marginRight:'8px'}} value="true"onChange={(event)=>handlechange1(event)} checked={state.fall === true} name="altone_fire1"  />
                <div className="alert_name">FALL Detection</div>
                </div>
                : <div className="fire_alt">
                <input type="checkbox"style={{marginTop:'9px',marginRight:'8px'}} onChange={()=>handlechangechange1()}  name="altone_fire1"  />
                <div className="alert_name">FALL Detection</div>
                </div>
                }</div>}
              <p></p>
              {state.fight===true? <div className="fire_alt">
                <input type="checkbox"style={{marginTop:'9px',marginRight:'8px'}} onChange={()=>handlehandle2()} checked={state.fight === true} name="altone_fire1"  />
                <div className="alert_name">FIGHT Detection</div>
                </div>:
                <div>
                {state.th2===false?
                <div className="fire_alt">
                <input type="checkbox"style={{marginTop:'9px',marginRight:'8px'}} value="true"onChange={(event)=>handlechange2(event)} checked={state.fight === true} name="altone_fire1"  />
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

