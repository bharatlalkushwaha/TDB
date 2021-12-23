import React from 'react';
//import Camera1 from './Camera1';
import { Link } from "react-router-dom";
import {useState,useEffect} from "react"
import { Modal,Button } from 'react-bootstrap'
import logo from './Images/icon.jpeg';
import { ImHome3 } from "react-icons/im";
import { GiCctvCamera } from "react-icons/gi";
import { IoIosAddCircle } from "react-icons/io";
import { BiSelection } from "react-icons/bi";
import { RiNotification2Fill } from "react-icons/ri";
import { VscGraph } from "react-icons/vsc";
import { AiOutlineLogout } from "react-icons/ai";
import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import PopupModal from "./PopupModal"
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  

const Header = () => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen(true);
    };
    // const array=['Fire1 Added Alert','Fall3 camera alert detection','all camera are successfully run']
    const array=['Fire1 Added Alert']

   
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(true);
    };


    const handle=()=>{
      // if(show==true)
      // {
      return array.map((item, index) => {
        return (
          <>
          <PopupModal item={item} />

        </>);
      });
    // };
  // alert("a")


  }
    
    useEffect(function () {
//        setShow(true)
// handle()
    }, []);

  
    const [show, setShow] = useState(false);

  const handleClose4 = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
    <>
     
{/* {handle()} */}
        <div className="nav_head">

            <div className="imgcontainer">
                <img src={logo} alt="Logo" />
            </div>
           
            <p className="nav_list"><ImHome3 className="ico" /><Link to="/home" id="hm">Home</Link></p>
            <p className="nav_list"><GiCctvCamera className="ico" /><Link to="/CameraSet" id="hm">Camera Setting</Link></p>
            <p className="nav_list"><IoIosAddCircle className="ico" /><Link to="/AddUser" id="hm">Add User</Link></p>
            <p className="nav_list"><BiSelection className="ico" />Area Selection</p>
            <p className="nav_list"><RiNotification2Fill className="ico" />Event Occurence</p>
    

            <p className="nav_list"><VscGraph className="ico" /><Link to="/CameraSet:1 " id="hm">Visulization</Link></p>
            <p className="nav_list"><AiOutlineLogout className="ico" /><Link to="/" id="hm">Logout</Link></p>
         
        </div>
   
        {/* {handle()} */}

    </>
    );
};
export default Header;