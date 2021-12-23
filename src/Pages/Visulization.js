import React from 'react'
import { GoPerson } from 'react-icons/go';
import Header from './Header';

const url = "http://127.0.0.1:5000/alerts"



class Visulization extends React.Component{
    state = {
        get: []
    }

    componentDidMount(){
        fetch(url)
        .then(res => res.json())
        
        .then(get => {
            console.log(get.social_distancing);
            this.setState({get: get.fight})
            
            console.log(get.social_distancing.length);
        })
    }
    render(){
    return (
      <>
      <Header />
        <div className="heading">
         
        
            <div className="person">
  <GoPerson className="person" />
</div>
<h3 className="head_name">Visulization</h3>
<hr /> 
      <div className="Camera_header_vs">

        
                                  {/*/Images/cam_fire1-30_10_2021_12_30_5.png */}
      <div className="table_head">
                <div class=" table-wrapper-scroll-y my-custom-scrollbar">
                  
                {this.state.get.map(alert =>(
                    <>
                    
                   <table class="table table-bordered table-striped mb-0">
                       <thead >
  <tr >
    <th>Camera No</th>
    <th>Date & Time</th>
    <th>Image</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>{alert.camera_number}</td>
    <td>{alert.date_time}</td>
    <td><img className="zoom" alt="" src={alert.image_name} width="100px" height="150px"/></td>
  </tr>
  </tbody>
  </table>
                    </>
                ))}
                </div>
                </div>
            




          
        </div>

      </div>
      </>
        )
    }
}
export default Visulization;
