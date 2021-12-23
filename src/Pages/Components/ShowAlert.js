import React from 'react';

import { GiFalling } from 'react-icons/gi';
import { GiHeavyFighter } from 'react-icons/gi';
import { GiCelebrationFire } from 'react-icons/gi';
import { FaRegHandPointer } from 'react-icons/fa';
import { GoPerson } from 'react-icons/go';
class ShowAlert extends React.Component {
  constructor(){
    super();
    this.state={
      users:null
    }
  }
  componentDidMount() {
   
  }
  render() {
    return <div>
    <div className="person">
  <GoPerson className="person" />
</div>
<h3 className="head_name">Overview</h3>
<hr />
<div className="boxes">
  <div className="box">{this.state.users ? this.state.users.map((iteam)=> <div><p>{iteam.fall}</p></div>): null}<p id="text_alert"><GiFalling id="ico_alert" className="" />Fall alert</p></div>

  <div className="box">{this.state.users ? this.state.users.map((iteam)=> <div><p>{iteam.fight}</p></div>): null}<p id="text_alert"><GiHeavyFighter id="ico_alert" />Fight alert</p></div>

  <div className="box">{this.state.users ? this.state.users.map((iteam)=> <div><p>{iteam.social_distancing}</p></div>): null}<p id="text_alert"><GiCelebrationFire id="ico_alert" />Fire alert</p></div>

  <div className="box"><p id="text_alert"><FaRegHandPointer id="ico_alert" />Intruder alert</p></div>

</div>
</div>
  }
}
export default ShowAlert;
