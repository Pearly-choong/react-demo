import React from 'react';



class ParaContent extends React.Component{
    render(){
    
      return(
        <div>
          <p className="pl-5">{this.props.content}</p>
        </div>
      )
    } 
}


export default ParaContent;