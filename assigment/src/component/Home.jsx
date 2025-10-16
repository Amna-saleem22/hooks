import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [hello, setHello] = useState(null);

  const handleClick = () => {
    navigate("/hello");
  };

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(response => response.json())
      .then(data => setHello(data));
  }, []);

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>🛍️ Product List</h2>
        <button className="btn btn-success" onClick={handleClick}>
          Add to Cart (Go to /hello)
        </button>
      </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {hello?.products?.map(product => (
          <div className="col" key={product.id}>
            <div className="card h-100 shadow-sm">
             
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text text-muted">{product.description}</p>
                <div className="mt-auto">
                  <span className="badge bg-primary">💲{product.price}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
