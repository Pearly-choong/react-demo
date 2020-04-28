import React from 'react';
import './Para.css';
import ParaContent from '../paraContent/ParaContent';
// import Home from '../home/Home';


class Para extends React.Component{
  // render(){
  //   return(
  //     <p className="para pl-5">Lorem ipsum dolor sit amet, consectetur
  //     adipisicing elit, sed do eiusmod tempor
  //     incididunt ut labore et dolore magna aliqua.
  //     Ut enim ad minim veniam, quis
  //     nostrud exercitation ullamco laboris nisi
  //     ut aliquip ex ea commodo consequat. Duis aute
  //     irure dolor in reprehenderit in voluptate velit
  //     esse cillum dolore eu fugiat nulla pariatur.
  //     Excepteur sint occaecat cupidatat non proident,
  //     sunt in culpa qui
  //     officia deserunt mollit anim id est laborum.  </p>

  //   )

  // }
  constructor(){
    super();
    this.state={
      text : [
        {
          id : 0,
          content : 'Once you decide to start exercising regularly, try to create a plan that includes attainable steps and goals. One way to do this is to start with a plan of easy steps to follow. Then you can continue building on it as your fitness level improves.'
        },
        {
          id : 1,
          content : 'Starting with small goals will not only increase your chances of success, it will also keep you motivated every step of the way.'
        },
        {
          id : 2,
          content : 'Before you start working out, get a health check-up and make a plan with realistic goals. Then, make exercise a habit by incorporating it into your daily routine.'
        }
      ]
    }
  }



  render(){
    console.log(this.state);
    const textComponent = this.state.text.map((texts)=>{
      return(
        <ParaContent key={texts.id} content={texts.content}/>   
        )
  })

  console.log(textComponent);

     return(
      <div className = "para px-5">
        {textComponent}
      </div>
    )
  
  }

}


export default Para;


