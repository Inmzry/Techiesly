import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { getProducts } from "../data/products";
import DeleteIcon from "../assets/delete-icon.png";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Checkout = () => {
  const {
    getCartItemsWithProducts,
    updateQuantity,
    removeFromCart,
    getCartTotal,
    clearCart,
  } = useCart();
  const cartItems = getCartItemsWithProducts();

  const total = getCartTotal();
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="container">
        <h2 className="page-title checkout-title">Checkout</h2>
        {cartItems.length !== 0 ? (
          <div className="checkout-content">
            <ul className="checkout-list">
              {cartItems.map((item) => (
                <li className="checkout-items-lists" key={item.id}>
                  <img className="product-img" src={item.product.image} alt={item.product.name} />
                  <div className="checkout-item-details">
                    <h3 className="checkout-product-name">
                      {item.product.name}
                    </h3>
                    <p className="checout-product-price">
                      ${item.product.price} each
                    </p>
                  </div>
                  <div className="checkout-cta-quantity">
                    <button
                      className="quantity-btn"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="quantity-value">{item.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <div className="checout-item-total">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </div>
                  <div className="checkout-cta-remove">
                    <button
                      className="checkout-remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <img src={DeleteIcon} alt="trash icon" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="checkout-total">
              <h2 className="checkout-total-title">Total</h2>
              <p>
                Subtotal: <span className="subtotal">${total.toFixed(2)}</span>
              </p>
              <p>
                Total: <span className="total">${total.toFixed(2)}</span>
              </p>
              <div className="place-order-button">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    clearCart();
                  }}
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="empty-cart">
            <p>Your Shopping cart is empty</p>
            <HashLink smooth to="/#product-area" className="btn btn-primary">
              Go Shopping Now
            </HashLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
