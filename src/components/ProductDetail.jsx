import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import LoadingIndicator from './LoadingIndicator';
import '../index.css';
import { ThemeContext,  } from '../ThemeContext';
import { useContext,  } from 'react';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { loading, data: product, error } = useFetch(`products/${id}`);
  const { theme, toggleTheme } = useContext(ThemeContext)

  if (loading) return <div class="loading">Loading...</div>;
  if (error) return <div>{error.message}</div>;

  const backtoproducts = () => {
    navigate('/products');
  };

  

  
  return (

  <div className="iteminf" style={{ backgroundColor: theme.itembk}}>
    {product && (
      <>
      <div class="inf" >
        <img src={product.image} alt={product.title} />
        <h2 style={{color: theme.text}}>{product.title}</h2>
      </div>
      <div  class="inf2">
        <p style={{color: theme.text}}>Category: {product.category}</p>
        <p style={{color: theme.text}}>Price: ${product.price}</p>
        <p style={{color: theme.text}}>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
        <p style={{color: theme.text}}>{product.description}</p>
        < button style={{backgroundColor: theme.background ,color: theme.text}} class="backbtn" onClick={backtoproducts}>Back</button>
      </div>
      </>
    )}

    

  </div>
  );
};

export default ProductDetail;



