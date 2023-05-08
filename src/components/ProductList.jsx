import React, { useState, useEffect } from 'react';

function ProductList({ products }) {
    return (
      <div className="product-list">
        {products.map((product) => (
          <div className="product-item" key={product.id}>
            <Link to={`/products/${product.id}`}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    );
  }
  