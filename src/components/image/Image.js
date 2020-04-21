import React from 'react';
import './Image.css';
import background from '../../background.jpg';

class Image extends React.Component{
  render(){
    const myImage={
      width: '45%',
      margin:'auto',
      display:'block',
      marginTop: '10px'
    }
    return(
      <div>
        <img style={myImage} src={background} alt="background"/>
      </div>
    )
  }
}

export default Image;
