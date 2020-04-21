import React from 'react';
import ReactDOM from 'react-dom';
import './Nav.css';
import Home from '../home/Home';
import About from '../about/About';
import Product from '../product/Product';

class Nav extends React.Component{

    home = ()=> {
      console.log('Home');
      const homeSection = (
        <div className="container">
          <div className="header pt-5">
            <h1 className="h1">React Demo Site</h1>
            <div className="buttons">
              <Nav/>
            </div>
          </div>
          <Home/>
       </div>
      )

      ReactDOM.render(homeSection, document.getElementById('root'));
    }

   about = ()=> {
     console.log('About');
     const aboutSection = (
     <div className="container">
      <div className="header pt-5">
        <h1 className="h1"> React Demo Site</h1>
        <div className="buttons">
          <Nav/>
        </div>
      </div>
      <About/>
     </div>
    )
     ReactDOM.render(aboutSection, document.getElementById('root'));
   }

   product = ()=> {
     console.log('Product');
     const productSection = (
     <div className="container">
      <div className="header pt-5">
        <h1 className="h1"> React Demo Site</h1>
        <div className="buttons">
          <Nav/>
        </div>
      </div>
      <Product/>
     </div>
     )
     ReactDOM.render(productSection, document.getElementById('root'));
   }

    render(){
      return(
        <div>
          <button className="home" onClick={this.home}> Home</button>
          <button className="about" onClick={this.about}>About</button>
          <button className="product" onClick={this.product}>Product</button>
        </div>
      )

    }


}

export default Nav;
