import React from 'react';


// const url = "http://127.0.0.1:5000/alerts"

class AlertTable extends React.Component{
    state = {
        get: []
    }
    componentDidMount(){
        // fetch(url)
        // .then(res => res.json())
        // .then(get => {
        //     console.log(get.social_distancing);
        //     this.setState({get: get.social_distancing})
            
        //     console.log(get.social_distancing.length);
        // })
    }
    render(){
    return (
        <div className=""> 
                {this.state.get.map(alert =>(
                 <>
    <div>{alert.camera_number}</div>
                    </>
                ))}
                </div>
             
        )
    }
}
export default AlertTable;
