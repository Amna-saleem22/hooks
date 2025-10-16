import React, { useState, useEffect } from 'react';

const Hello = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Fetch products from API
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(response => response.json())
      .then(data => setProducts(data.products));
  }, []);

  // Handle Add to Cart
  const handleAddToCart = (product) => {
    setCart(prevCart => [...prevCart, product]);
  };

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>🛒 Cart: <span className="badge bg-primary">{cart.length}</span></h2>
        <h1 className="text-center">🛍️ Product Store</h1>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map(product => (
          <div className="col" key={product.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={product.thumbnail}
                className="card-img-top"
                alt={product.title}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text text-muted" style={{ fontSize: '0.9rem' }}>
                  {product.description}
                </p>
                <p className="card-text mt-auto"><strong>Price:</strong> ${product.price}</p>
                <button
                  className="btn btn-success mt-3"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hello;
