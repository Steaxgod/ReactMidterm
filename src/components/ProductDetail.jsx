import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoading, data: product, error } = useFetch(`products/${id}`);

  const backtoproducts = () => {
    navigate('/products');
  };

  // Handle error
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Render loading indicator if data is still loading
  if (isLoading || !product) {
    return <LoadingIndicator />;
  }

  return (
    <div class="xuynya">
      <button onClick={backtoproducts}>Back</button>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;



