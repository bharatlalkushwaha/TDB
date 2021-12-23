import React from 'react';
import Data_import from "./constant";
import {Link, NavLink} from 'react-router-dom'
import { RiLineLine } from 'react-icons/ri';



export default class AlertOne extends React.Component {



  constructor(props) {
    super(props);
    this.state = Data_import
    this.state = {
      bgColor: "",
      bgColor2: "",
      bgColor3: "",
      bgColor4: "",
      data:true,
    }
    console.log(this.state);
  }


  boxClick1 = (e) => {
    this.setState({
      bgColor: "green"
      
    })
  }

  boxClick2 = (e) => {
    this.setState({
      bgColor2: "green"
      
    })
  }
  boxClick3 = (e) => {
    this.setState({
      bgColor3: "green"
      
    })
  }
  boxClick4 = (e) => {
    this.setState({
      bgColor4: "green"
      
    })
  }
// history=useHistory()
handle2(event){
  // alert(event)
 
  console.log("value",event)
}





handle3(event){
  // alert(event)
 
  console.log("value",event)
}

handle(event){
 // alert(event)
// this.setState({data=false})
this.state.data=false
 console.log("value",this.state.data)
//var history=useHistory()

 // <Link to='/CameraSet3
//   '> 
// </Link>

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

  //   function changeColor(color) {
  //     document.getElementById('cam').style.backgroundColor = color;
  // }
    
  // function clickbtn() {
  //     changeColor('green');
  // }         

    return (
      <>
        <div className="diff_Cameras">




        <div>

        <div>
          
          <NavLink exact to='/CameraSet:1
          'activeStyle={{
      backgroundColor: 'green',
      color: 'white',
      textAlign: 'center',
      display: 'inline-flex',
      width: '100%',
      border: 'none',
      cursor: 'pointer',
      borderRadius: '20px'
          }}activeClassName='is-active' style={{color:'white'}}className="dropbtn"onClick={()=>this.handle()} > Camera 1</NavLink>
  
          </div>

          <div>
          
          <NavLink exact to='/iphone:2
          'activeStyle={{
      backgroundColor: 'green',
      color: 'white',
      textAlign: 'center',
      display: 'inline-flex',
      width: '100%',
      border: 'none',
      cursor: 'pointer',
      borderRadius: '20px'
          }}activeClassName='is-active' style={{color:'white'}}className="dropbtn" > Camera 2</NavLink>
  
          </div>

       
          <div>
        <NavLink exact to='/icamera:3 
        'activeStyle={{
    backgroundColor: 'green',
    color: 'white',
    textAlign: 'center',
    display: 'inline-flex',
    width: '100%',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '20px'
        }}activeClassName='is-active' style={{color:'white'}}className="dropbtn" > Camera 3</NavLink>
        </div>
        
 


        <div>
          
          <NavLink exact to='/allcameraset:11
          'activeStyle={{
      backgroundColor: 'green',
      color: 'white',
      textAlign: 'center',
      display: 'inline-flex',
      width: '100%',
      border: 'none',
      cursor: 'pointer',
      borderRadius: '20px'
          }}activeClassName='is-active' style={{color:'white',background:'green'}}className="dropbtn" onClick={()=>this.handle()}><font style={{display:'flex',marginLeft:15}} >All</font></NavLink>
  
          </div> 

        {/* <div>
          
          <NavLink exact to='/iphone:2
          'activeStyle={{
      backgroundColor: 'green',
      color: 'white',
      textAlign: 'center',
      display: 'inline-flex',
      width: '100%',
      border: 'none',
      cursor: 'pointer',
      borderRadius: '20px'
          }}activeClassName='is-active' style={{color:'white'}}className="dropbtn"onClick={()=>this.handle()} > Camera 2</NavLink>
  
          </div> */}


        {/* <div  className="dropdown">
        <NavLink to='/CameraS:2'activeStyle={{
  }}activeClassName='is-active' style={{color:'white'}}> <button  className="dropbtn" 
    style={{backgroundColor: this.state.bgColor2}}
     onClick={this.boxClick2}  id="cam"> Camera 2</button></NavLink>
        </div> */}
 {/* <div>
          
          <NavLink exact to='/icamera:3
          'activeStyle={{
      backgroundColor: 'green',
      color: 'white',
      textAlign: 'center',
      display: 'inline-flex',
      width: '100%',
      border: 'none',
      cursor: 'pointer',
      borderRadius: '20px'
          }}activeClassName='is-active' style={{color:'white'}}className="dropbtn" > Camera 3</NavLink>
  
          </div> */}
        {/* <div className="dropdown">
      <Link to='/CameraSe:3
        ' style={{color:'white'}}> <button  className="dropbtn" 
        style={{backgroundColor: this.state.bgColor}}
         onClick={this.boxClick3}  id="camj" 
          >Camera3</button></Link> 
        
        </div> */}
{/* <div> <NavLink exact to='/Camera4:4
          'activeStyle={{
      backgroundColor: 'green',
      color: 'white',
      textAlign: 'center',
      display: 'inline-flex',
      width: '100%',
      border: 'none',
      cursor: 'pointer',
      borderRadius: '20px'
          }}activeClassName='is-active' style={{color:'white'}}className="dropbtn" > Camera 4</NavLink>
  
          </div> */}
        {/* <div className="dropdown">
        <Link  to='/Camera4:4
        ' style={{color:'white'}}> <button className="dropbtn" id="cami" 
          >Camera4</button></Link>
          {/* <button className="dropbtn" id="cam">Camera 4</button> */}
        {/* </div> */} 
        {/* <div> <NavLink exact to='/Camer5:5
          'activeStyle={{
      backgroundColor: 'green',
      color: 'white',
      textAlign: 'center',
      display: 'inline-flex',
      width: '100%',
      border: 'none',
      cursor: 'pointer',
      borderRadius: '20px'
          }}activeClassName='is-active' style={{color:'white'}}className="dropbtn" > Camera 5</NavLink>
  
          </div> */}
        {/* <div className="dropdown">
        <Link to='/Camer5:5
        ' style={{color:'white'}}> <button className="dropbtn" id="camh" 
          >Camera5</button></Link>
          {/* <button className="dropbtn" >Camera 5</button> */}
        {/* </div> */} 
        {/* <div> <NavLink exact to='/Came6:6
          'activeStyle={{
      backgroundColor: 'green',
      color: 'white',
      textAlign: 'center',
      display: 'inline-flex',
      width: '100%',
      border: 'none',
      cursor: 'pointer',
      borderRadius: '20px'
          }}activeClassName='is-active' style={{color:'white'}}className="dropbtn" > Camera 6</NavLink>
  
          </div> */}
        {/* <div className="dropdown">
        <Link to='/Came6:6
        ' style={{color:'white'}}> <button className="dropbtn" id="camg" 
          >Camera6</button></Link>
        
        </div> */}
{/* <div> <NavLink exact to='/Cam7:7
          'activeStyle={{
      backgroundColor: 'green',
      color: 'white',
      textAlign: 'center',
      display: 'inline-flex',
      width: '100%',
      border: 'none',
      cursor: 'pointer',
      borderRadius: '20px'
          }}activeClassName='is-active' style={{color:'white'}}className="dropbtn" > Camera 7</NavLink>
  
          </div> */}
        {/* <div className="dropdown">
        <Link to='/Cam7:7
        ' style={{color:'white'}}> <button className="dropbtn" id="camd" 
          >Camera7</button></Link>
          
        </div> */}
{/* <div> <NavLink exact to='/Ca8:8
          'activeStyle={{
      backgroundColor: 'green',
      color: 'white',
      textAlign: 'center',
      display: 'inline-flex',
      width: '100%',
      border: 'none',
      cursor: 'pointer',
      borderRadius: '20px'
          }}activeClassName='is-active' style={{color:'white'}}className="dropbtn" > Camera 8</NavLink>
  
          </div> */}
        {/* <div className="dropdown">
        <Link to='/Ca8:8
        ' style={{color:'white'}}> <button className="dropbtn" id="camw" 
          >Camera8</button></Link>
         
        </div> */}
{/* <div> <NavLink exact to='/C9:9
          'activeStyle={{
      backgroundColor: 'green',
      color: 'white',
      textAlign: 'center',
      display: 'inline-flex',
      width: '100%',
      border: 'none',
      cursor: 'pointer',
      borderRadius: '20px'
          }}activeClassName='is-active' style={{color:'white'}}className="dropbtn" > Camera 9</NavLink>
  
          </div> */}
        {/* <div className="dropdown">
        <Link to='/C9:9
        ' style={{color:'white'}}> <button className="dropbtn" id="c" 
          >Camera9</button></Link>
       
        </div> */}
        {/* <div> <NavLink exact to='/Set10:10
          'activeStyle={{
      backgroundColor: 'green',
      color: 'white',
      textAlign: 'center',
      display: 'inline-flex',
      width: '100%',
      border: 'none',
      cursor: 'pointer',
      borderRadius: '20px'
          }}activeClassName='is-active' style={{color:'white'}}className="dropbtn" > Camera 10</NavLink>
  
          </div> */}
{/* 
        <div className="dropdown">
        <Link to='/Set10:10
        ' style={{color:'white'}}> <button className="dropbtn" id="ca" 
          >Camera10</button></Link>
 
        </div> */}
          {/* <button className="btn_Sum" onClick={() => { this.submit() }} >OK</button> */}
        </div>
{/* 

        <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/service/inner'>Service</Link></li>

</ul>  */}
</div>
      </>
    )
  }
}
