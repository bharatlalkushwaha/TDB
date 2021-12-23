import React from 'react';
import { AiFillDelete } from 'react-icons/ai';


const url = "http://127.0.0.1:5000/alerts"

class CamerasAdd extends React.Component{
    state = {
        get: []
    }
    componentDidMount(){
        fetch(url)
        .then(res => res.json())
        .then(get => {
            this.setState({get: get.fight})   
        })
    }
    render(){
    return (
        <div className="container">
      <br/>
      <span>Cameras</span>
      <br/>
      <ol>
      {this.state.get.map(alert =>( <li>{alert.date_time}<AiFillDelete className="icon_delete"/></li>))}
      </ol> 
  </div>
        )
    }
}
export default CamerasAdd;
