import { Route, NavLink, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useFetch } from '../src/hooks/useFetch';
import './index.css';
import React from 'react';
import ProductDetail from './components/ProductDetail';
import Products from './components/Products';


function Home() {

  
  return (
    <div class="homepg">
      <h1 class="h1hm">👋Welcome👋</h1>
      <div class="texthm">
        <h1>Welcome to our website!</h1>
        <p>We offer a wide selection of products for all your needs.</p>
        <p>Our products are sourced from the highest quality materials and crafted with care to ensure their longevity and durability.</p>
        <p>Whether you're looking for something practical, like a set of kitchen utensils, or something more indulgent, like a luxury candle, we have something for everyone.</p>
        <p>Take a look around our site and explore all the wonderful things we have to offer. And don't hesitate to reach out to us if you have any questions or concerns!</p>
        <p>Thank you for choosing our products, and we hope you enjoy your shopping experience with us.</p>
      </div>
    </div>
  );
}



function App() {
  
  return (
    <Router>
      <div>
        <nav>
          <NavLink id="loading" exact activeClassName="active" to="/">
            Home
          </NavLink>
          <NavLink exact activeClassName="active" to="/">
          💮 
          </NavLink>
          <NavLink id="loading2" activeClassName="active" to="/products">
            Products
          </NavLink>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;