import React from 'react';
import Home from './components/home/Home';
import About from './components/about/About';
import Nav from './components/nav/Nav';
import Product from './components/product/Product';
import Footer from './components/footer/Footer';

class Landing extends React.Component{
    render(){
      return(
        <div>   
           <div className="header pt-5 bg-dark">
            <h1 className="h1 text-center pb-4"> React Photo Art Site</h1>
             <div className="buttons">
               <Nav/>
             </div>
            </div>
          <div className="container">
            <Home/>
            <About/>
            <Product/>
          </div>
          <Footer/>
        </div>     
      )
    }
  }
  export default Landing;