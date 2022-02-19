import React, { Component } from 'react';
import './App.css';
import Home from './component/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './component/product/ProductList';

class App extends Component {
  render() {
    return (
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<ProductList/>}/>
          </Routes>
        </Router>
    )
  }
}

export default App;
