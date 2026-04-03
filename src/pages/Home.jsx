import React from "react";
import { getProducts } from "../data/products";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
function Home() {
  const products = getProducts();

  return (
    <div className="page">
      <div className="home-hero">
        <h2 className="title">Welcome To ShopHub</h2>
        <p className="subtitle">
          Discover amazing product with great price and great qualities
          products.
        </p>
      </div>
      <div className="container">
        <h2 className="page-title">Our Products</h2>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard product={product}  key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
