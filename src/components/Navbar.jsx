import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          TECHIESLY
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">
          Home
        </Link>
        <Link to="/checkout" className="navbar-link">
          Cart
        </Link>
      </div>
      {!user ? (
        <div className="navbar-auth-links">
          <Link to="/auth?mode=login" className="btn btn-secondary">
            Login
          </Link>
          <Link to="/auth?mode=signup" className="btn btn-primary">
            Signup
          </Link>
        </div>
      ) : (
        <div className="navbar-user">
          <span>Hello, {user.email}</span>
          <button className="btn btn-secondary" onClick={logout}>
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
