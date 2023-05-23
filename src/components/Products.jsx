import { useFetch } from '../hooks/useFetch';
import { Route, NavLink, BrowserRouter as Router, Routes } from 'react-router-dom';
import '../index.css';
import React from 'react';
import { ThemeContext,  } from '../ThemeContext';
import { useContext,  } from 'react';


function Products() {
  const { data, loading, error } = useFetch('products');
  const { theme, toggleTheme } = useContext(ThemeContext)



  
  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div >
      <h1 className="lsheading" style={{color: theme.text}}>📜Item List📜</h1>      
      <div className="list" style={{ backgroundColor: theme.nav}}>
        {data.map(product => (
          <div className="itemnum" key={product.id}>
            <NavLink to={`/products/${product.id}`}>
              <img src={product.image} alt={product.title} />
              <p>{product.title}</p>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}
  export default Products;
