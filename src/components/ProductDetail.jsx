import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import LoadingIndicator from './LoadingIndicator';

const ProductDetail = () => {
  const { id } = useParams();
  const history = useHistory();
  const { isLoading, data: product, error } = useFetch(`/api/products/${id}`);

  // Handle error
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Render loading indicator if data is still loading
  if (isLoading || !product) {
    return <LoadingIndicator />;
  }

  return (
    <div>
      <button onClick={() => history.goBack()}>Back</button>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;
