import React from 'react';


class Modal extends React.Component{


    render(){
        console.log('Modal');
        return (
            // <div className="modal-content">
            //   <div className="modal-header">
            //     <h5 className="modal-title">{this.props.title}</h5>
            //     <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            //       <span aria-hidden="true">&times;</span>
            //     </button>
            //   </div>
            //   <div className="modal-body">
            //     <p>{this.props.description}</p>
            //   </div>
            //   <div className="modal-footer">
            //     <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            //     <button type="button" className="btn btn-primary">Save changes</button>
            //   </div>
            // </div>
            <div>
              <div className="modal-footer mt-5">
                <button type="button" className="btn btn-secondary mr-5" data-dismiss="modal">Close</button>
              </div>

              <h5 className="modal-title text-center display-1">{this.props.title}</h5>
              <div className="modal-body ">
                <img src={this.props.img} alt="Wine" className="img-thumbnail m-auto d-block" />
              </div>

              <p className="text-center display-4">{this.props.description}</p>

            </div>
      )
    }

}

export default Modal;
