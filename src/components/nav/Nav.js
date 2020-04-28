import React from 'react';
import ReactDOM from 'react-dom';
import './Nav.css';
import Home from '../home/Home';
import About from '../about/About';
import Product from '../product/Product';
import Footer from '../footer/Footer';

class Nav extends React.Component{

    home = ()=> {
      console.log('Home');
      const homeSection = ( 
        <div>     
          <div className="header pt-5 bg-dark">
            <h1 className="h1 text-center pb-4">React Demo Site</h1>
            <div className="buttons">
              <Nav/>
            </div>
          </div>
          <div className="container">
            <Home/>
          </div>  
          <Footer/>
       </div>
      )

      ReactDOM.render(homeSection, document.getElementById('root'));
    }

   about = ()=> {
     console.log('About');
     const aboutSection = (
      <div>
        <div className="header pt-5 bg-dark">
          <h1 className="h1 text-center pb-4"> React Demo Site</h1>
          <div className="buttons">
            <Nav/>
          </div>
        </div>
        <div className="container">
          <About/>
        </div>   
        <Footer/>
     </div>
    )
     ReactDOM.render(aboutSection, document.getElementById('root'));
   }

   product = ()=> {
     console.log('Product');
     const productSection = (
      <div>
        <div className="header pt-5 bg-dark">
          <h1 className="h1 text-center pb-4"> React Demo Site</h1>
          <div className="buttons">
            <Nav/>
          </div>
        </div>
        <div className="container">
        <Product/>
        </div>
      <Footer/>
     </div>
     )
     ReactDOM.render(productSection, document.getElementById('root'));
   }

    render(){
      return(
        <div>
          <button className="home bg-dark" onClick={this.home}> Home</button>
          <button className="about bg-dark" onClick={this.about}>About</button>
          <button className="product bg-dark" onClick={this.product}>Product</button>
        </div>
      )

    }


}

export default Nav;
