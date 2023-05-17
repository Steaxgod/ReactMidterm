import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import LoadingIndicator from './LoadingIndicator';
import '../index.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { loading, data: product, error } = useFetch(`products/${id}`);

  if (loading) return <div class="loading">Loading...</div>;
  if (error) return <div>{error.message}</div>;

  const backtoproducts = () => {
    navigate('/products');
  };

  

  
  return (

  <div className="iteminf">
    {product && (
      <>
      <div class="inf">
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
      </div>
      <div  class="inf2">
        <p>Category: {product.category}</p>
        <p>Price: ${product.price}</p>
        <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
        <p>{product.description}</p>
        <button class="backbtn" onClick={backtoproducts}>Back</button>
      </div>
      </>
    )}

    

  </div>
  );
};

export default ProductDetail;



