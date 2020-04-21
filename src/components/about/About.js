import React from 'react';
import './About.css';
import Para from '../para/Para';
import Image from '../image/Image';

class About extends React.Component{
  render(){
    return(
      <div className="aboutContainer">
        <h1 className="heading">About</h1>
        <div className="pt-5">
        <Para/>
        </div>
        <Image/>
      </div>
    )
  }
}

export default About;
