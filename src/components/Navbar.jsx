import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
const Navbar = () => {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => {
    setMenuOpen(false);
  };
  const handleLogout = () => {
    logout();
    closeMenu();
  };
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          TECHIESLY
        </Link>
      </div>
      {/* Desktop Navigation */}
      <div className="navbar-links">
        <Link to="/" className="navbar-link">
          Home
        </Link>
        <Link to="/checkout" className="navbar-link">
          Cart
        </Link>
      </div>
      {/* Desktop Authentication */}
      {!user ? (
        <div className="navbar-auth-links">
          <Link to="/auth?mode=login" className="btn btn-secondary">
            Login
          </Link>
          <Link to="/auth?mode=signup" className="btn btn-signup">
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
      {/* Burger Button */}
      <button
        className={`burger-menu ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span></span> <span></span> <span></span>
      </button>
      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <Link to="/" className="mobile-link" onClick={closeMenu}>
          Home
        </Link>
        <Link to="/checkout" className="mobile-link" onClick={closeMenu}>
          Cart
        </Link>
        <div className="mobile-auth">
          {!user ? (
            <>
              <Link
                to="/auth?mode=login"
                className="btn btn-secondary"
                onClick={closeMenu}
              >
                Login
              </Link>
              <Link
                to="/auth?mode=signup"
                className="btn btn-signup"
                onClick={closeMenu}
              >
                Signup
              </Link>
            </>
          ) : (
            <>
              <span className="mobile-user"> Hello, {user.email} </span>
              <button className="btn btn-secondary" onClick={handleLogout}>
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
