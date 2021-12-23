import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";//import Camera1 from './Camera1';
import Home from './Pages/Home';
import CameraSet from './Pages/CameraSet';
import CameraSet2 from './Pages/CameraSet2';
import CameraSet3 from './Pages/CameraSet3';
import CameraSet4 from './Pages/CameraSet4';
import CameraSet5 from './Pages/CameraSet5';
import CameraSet6 from './Pages/CameraSet6';
import CameraSet7 from './Pages/CameraSet7';
import CameraSet8 from './Pages/CameraSet8';
import CameraSet9 from './Pages/CameraSet9';
import CameraSet10 from './Pages/CameraSet10';
import AllCameraSet from './Pages/AllCameraSet';
import Visulization from './Pages/Visulization';
import "./App.css";
import Header from './Pages/Header';
import AddUser from "./Pages/AddUser";
import "./Pages/Header.css";
import "./Pages/CameraSetting.css";
import "./Pages/AddUser.css";
import "./Pages/Visulization.css"
import AlertOne from './Pages/Components/AlertOne';
import SecondPage from './Pages/Components/SecondPage';
import ThirdPage from './Pages/Components/ThirdPage';
import FourthPage from './Pages/Components/FourthPage';
import LoginForm from "./Component/LoginForm"
import Signup from "./Component/Signup"



// Create React Components 
const App = (props) => {

  return (<>
   
    <Router>
    <Route exact path="/" component={LoginForm}/>
    <Route  path="/signup" component={Signup} />
    <Route  path="/alertone" component={AlertOne} />
   
      <Switch>
         
      {/* <Route exact path="/" component={LoginForm}/> */}
      
        <Route Header  path="/home" component={Home}></Route>
      
        <Route path="/CameraSet/:id" component={CameraSet} />
        <Route path="/CameraSet" component={CameraSet2} />
        <Route path="/icamera:id" component={CameraSet3} />
        <Route path="/Camera4:id" component={CameraSet4} />
        <Route path="/Camer5:id" component={CameraSet5} />
        <Route path="/Came6:id" component={CameraSet6} />
        <Route path="/Cam7:id" component={CameraSet7} />
        <Route path="/Ca8:id" component={CameraSet8} />
        <Route path="/C9:id" component={CameraSet9} />
        <Route path="/Set10:id" component={CameraSet10} />
        <Route path="/allcameraset:11" component={AllCameraSet} />
        <Route path="/AddUser" component={AddUser} />
        <Route path="/Visulization" component={Visulization} />
        <Route path="/SecondPage" component={SecondPage} />
        <Route path="/ThirdPage" component={ThirdPage} /> 
        <Route path="/FourthPage" component={FourthPage} /> 
        
      </Switch>
     
    </Router>

</>

  )
}
export default App;
