import React from 'react';
import ReactDOM from 'react-dom';
import Modal from '../modal/Modal';


class ProductCard extends React.Component{

  modal = ()=> {
    const modalContent = (
      <Modal title={this.props.title} description={this.props.desc} img={this.props.imgUrl}/>
    )
    ReactDOM.render(modalContent, document.getElementById('root'));
  }

  render(){
    return(
      <div className="card col-6 text-info my-5 py-5" style={{width: '18rem'}}>
       <img src={this.props.imgUrl} className="card-img-top" alt="Image" />
       <div className="card-body">
         <h5 className="card-title">{this.props.title}</h5>
         <p className="card-text">{this.props.desc} </p>
         <button className="btn btn-primary" onClick={this.modal}>View more</button>
       </div>
     </div>
    )
  }
}

export default ProductCard;
