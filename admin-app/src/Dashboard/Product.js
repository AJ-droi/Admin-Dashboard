import React, { useState, useEffect } from "react";
import "./Dashboard.css"
const Product = () => {
  const [products, setProducts] = useState("");

  const url = "https://fakerapi.it/api/v1/products?_quantity=12";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((user) => setProducts(user.data));
  }, []);

  return (
    <div className="product-container">
      {products
        ? products.map((product, idx) => (
            <div className="card" >
              <img
                className="card-img-top"
                src={product.image}
                alt="Cardcap"
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">$ {product.net_price}</p>
                <p className="card-text">{product.taxes}</p>
                <p className="card-text">$ {product.price}</p>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default Product;
