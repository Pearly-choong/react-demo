import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/home/Home';
import About from './components/about/About';
import Nav from './components/nav/Nav';
import Product from './components/product/Product';


ReactDOM.render(
  <div className="container">
    <div className="header pt-5">
      <h1 className="h1"> React Demo Site  </h1>
        <div className="buttons">
          <Nav/>
        </div>
    </div>
    <Home/>
    <About/>
    <Product/>
  </div>,
   document.getElementById('root'));
