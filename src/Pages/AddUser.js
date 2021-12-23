import React, { useState } from 'react';
import { GoPerson } from 'react-icons/go';
import { AiOutlineCloudUpload, AiOutlineVideoCameraAdd } from 'react-icons/ai';
import { FaRegistered } from 'react-icons/fa';
import Header from './Header';
import axios from 'axios';

function AddUser() {
    const [image, setLogo] = useState({ bytes: "", file: "/noimage.jpg" });
    const handleLogo = (event) => {
        alert(URL.createObjectURL(event.target.files[0]));
        setLogo({
          bytes: event.target.files[0],
          file: URL.createObjectURL(event.target.files[0]),
        });
      };
    const [fire,setFire]=useState(false)
    const [fall,setFall]=useState(false)
    const [fight,setFight]=useState(false)
 const [show,setShow]=useState(false)
    const [aut,setAuth]=useState('')
    const [name,setName]=useState('')
    const [ip,setip]=useState('')
    const CameraAdd=async()=>{

      
 var body={
  rstp:ip,
  fire:false,
  fall:false,
  fight:false,
 }
console.log(body)
try {
    const response = await fetch(`http://127.0.0.1:5000/cameras`, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify(body),
    });
    const result = await response.json();
    console.log("ddddddddddd",result)
    return result;
  } catch (e) {
    console.log(e)
    return null;
  }


// try {
//     const response = await axios.post("http://localhost:5000/fooditems/addcamera", body, config);
//     const result = await response.data;
//     console.log(result)
//     return result;
//   } catch (e) {
//     return null;
//   }
// var res = await axios.post(
//   "locaadmin/addcamera",
//   formData,
//   config
// );

    }
    return (
        <>
        <Header />
        <div id="heading" >
            <div className="person">
              <GoPerson className="person"/>
              </div>
              <h3 className="head_name">Add User</h3>
              <hr />  
             <div className="user_head">
             <form className="form-contain m-6">
             <div className="row_1 m-3">
             <label className="name">Name</label>
             <br/>
             <input type="text"onChange={(event)=>setName(event.target.value)} className="inputadd"/>
             </div>
              <div className="row_1 m-3">
             <label className="name">I.P.</label>
             <br/>
             <input type="text"onChange={(event)=>setip(event.target.value)}  id="exampleInputPassword1" className="inputadd"/>
             </div>
             <div className="row_1 m-3">
             <label className="name">Authority</label>
             <br/>
             <select id="inputaddsel"onChange={(event)=>setAuth(event.target.value)} >
  <option selected ></option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
            </select>


             </div>
             {/* <input type="file"   onChange={(event) => handleLogo(event)}  class="btn_upload"></input> */}
            </form>
            <div className='btn_title'>
            {/* <input type="file"   onChange={(event) => handleLogo(event)}  class="btn_upload"><AiOutlineCloudUpload id="bio"/></input> */}
             <button type="button"  class="btn_reg" onClick={()=>CameraAdd()}><FaRegistered id="bio"/>Register</button>
             </div>   
             </div>
              </div>
              </>
    )
}

export default AddUser;
