import React from "react";
import Banner from "../assets/banner-img.png";
import { getProducts } from "../data/products";
import { Link } from "react-router-dom";
import useFadeInOnView from "../hooks/useFadeInOnView";
import GradientTypewriter from "../hooks/GradientTypewriter";
import ProductCard from "../components/ProductCard";

function Home() {
  useFadeInOnView();
  const products = getProducts();
  return (
    <div className="page">
      <div className="banner-area">
        <figure className="banner-image">
          <img src={Banner} alt="banner image" />
        </figure>
        <div className="home-hero fade-up">
          <h1 className="banner-title">Welcome to <GradientTypewriter text="GADGETLY" speed={200} /></h1>
          <p className="banner-subtitle">
            Discover Amazing Products at Great Prices
          </p>
        </div>
      </div>
      <div className="product-area" id="product-area">
        <h2 className="product-area-title">Our Products</h2>
        <div className="products-flex">
          {products.map((product) => (
           <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
