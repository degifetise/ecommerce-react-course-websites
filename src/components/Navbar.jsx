import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const [open, setIsOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          ShopHub
        </Link>
        {/* Hamburger icon */}
        <div className="hamburger" onClick={() => setIsOpen(!open)}>
          {open ? (
            <div className="cross rotate">
              {/* this should be like rotate 180deg when open */}
              <span></span>
              <span></span>
            </div>
          ) : (
            <div className="hamburger-lines">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
        </div>

        <div className={`navbar-links  ${open ? "open" : ""} `}>
          <Link to="/">Home</Link>
          <Link to="/checkout">Cart</Link>
        </div>
        <div className={`navbar-auth ${open ? "open" : ""}`}>
          {!user ? (
            <div className="navbar-auth-links">
              <Link to="/auth" className="btn btn-secondary">
                Login
              </Link>
              <Link to="/auth" className="btn btn-primary">
                Signup
              </Link>
            </div>
          ) : (
            <div className="navbar-user">
              <button onClick={logout} className="btn btn-secondary">
                logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
