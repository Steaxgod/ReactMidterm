import { Route, NavLink, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useFetch } from '../src/hooks/useFetch';
import './index.css';
import React from 'react';
import ProductDetail from './components/ProductDetail';
import Products from './components/Products';
import ToggleSwitch from './components/ToggleSwitch';
import { ThemeContext,  } from './ThemeContext';
import { useContext,  } from 'react';


function Home() {

  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div className="homepg" style={{backgroundColor: theme.background, color: theme.foreground }}>
      <h1 className="h1hm" style={{ color: theme.text}} >👋Welcome👋</h1>
      <div className="texthm"  style={{ color: theme.foreground}}>
        <h1 style={{ color: theme.foreground}}>Welcome to our website!</h1>
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
  
  const { theme, toggleTheme } = useContext(ThemeContext)


  return (
    <Router>
      <div style={{backgroundColor: theme.background, color: theme.foreground }}>
        <nav style={{ backgroundColor: theme.nav}}>
          <NavLink id="loading"  to="/" style={{ color: theme.text}}>
            Home
          </NavLink>

          <NavLink id="loading2"  to="/products" style={{ color: theme.text}}>
            Products
          </NavLink>
          <ToggleSwitch onToggle={ toggleTheme } />
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