import { useFetch } from '../hooks/useFetch';
import { Route, NavLink, BrowserRouter as Router, Routes } from 'react-router-dom';
import '../index.css';
import React from 'react';



function Products() {
  const { data, loading, error } = useFetch('products');
  if (loading) return <div class="loading">Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      <h1 class="lsheading">📜Item List📜</h1>      
      <div class="list">
        {data.map(product => (
          <div class="itemnum" key={product.id}>
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
