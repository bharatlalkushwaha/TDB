import React from "react";
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


export default function PopupModal(props){
// alert(props.item)

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen(true);
    };

    
    const [show, setShow] = useState(false);


    useEffect(function () {
  setShow(true)
      }, []);
  
  const handleClose4 = () => setShow(false);
  const handleShow = () => setShow(true);
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(true);
    };


    return(

<>
<Modal show={show} onHide={handleClose4}>
        <Modal.Header closeButton>
          <Modal.Title >Camera Alert Detection</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{color:'red'}}>  {props.item}  </Modal.Body>
     
       
          <Button variant="primary" onClick={handleClose4}>
           Ok
          </Button>
       
      </Modal>
</>
    )
}