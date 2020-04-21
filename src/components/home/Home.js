import React from 'react';
import './Home.css';
import Para from '../para/Para';
import background from '../../background.jpg';

class Home extends React.Component{
  render(){
      const myImage={
        width: '80%',
        margin: 'auto',
        display:'block'
      }
      return(
      <div className="homeContainer">
        <h1 className="homeHeading"> Home </h1>
        <div className="container">
          <Para/>
          <Para/>
        </div>;
      {/* <img style={{width: '80%', margin:'auto', display:'block'}} src={background} alt="background"/> */}
      <img className="pb-5" style={myImage} src={background} alt="background"/>


      </div>

    )

  }
}

export default Home;
