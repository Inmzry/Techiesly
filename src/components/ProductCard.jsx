import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart, cartItems } = useCart();
  const productInCart = cartItems.find((item) => item.id === product.id);

  const productQuantityLabel = productInCart
    ? `(${productInCart.quantity})`
    : "";
  return (
    <div className="product-card fade-up">
      <div className="image-wrapper">
        <img src={product.image} alt={product.name} className="product-img" />
      </div>
      <div className="product-content">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price}</p>
        <div className="product-action">
          <Link className="product-details" to={`/products/${product.id}`}>
            View Details
          </Link>
          <button
            className="btn btn-primary"
            onClick={() => {
              addToCart(product.id);
            }}
          >
            Add to Cart {productQuantityLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
