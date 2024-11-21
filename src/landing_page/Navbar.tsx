import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation(); 
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      style={{
        position: "sticky",
        top: 0,
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="container-fluid" style={{ paddingInline: 10 }}>
        <a className="navbar-brand" href="/home" style={{ width: 200, height: 50 }}>
          <img
            src="media/trading-high-resolution-logo-transparent.png"
            style={{ objectFit: "contain", height: "100%", width: "100%" }}
          />
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav" style={{ display: "flex", gap: "20px" }}>

            <Link to="/home" style={{ textDecoration: "none" }}>
              <li className="nav-item">
                <div className={`nav-link ${location.pathname.includes('home') && 'active'}`} aria-current="page">
                  Home
                </div>
              </li>
            </Link>

            <Link to="/signup" style={{ textDecoration: "none" }}>
              <li className="nav-item">
                <div className={`nav-link ${location.pathname.includes('signup') && 'active'}`}>Signup</div>
              </li>
            </Link>

            <Link to="/about" style={{ textDecoration: "none" }}>
              <li className="nav-item">
                <a className={`nav-link ${location.pathname.includes('about')  && 'active'} `}>About</a>
              </li>
            </Link>

            <Link to="/products" style={{ textDecoration: "none" }}>
              <li className="nav-item">
                <a className={`nav-link ${location.pathname.includes('products') && 'active'} `} aria-disabled="true">
                  Products
                </a>
              </li>
            </Link>

            <Link to="/price" style={{ textDecoration: "none" }}>
              <li className="nav-item">
                <a className={`nav-link ${location.pathname.includes('price')  && 'active'}`} aria-disabled="true">
                  Pricing
                </a>
              </li>
            </Link>

            <Link to="/support" style={{ textDecoration: "none" }}>
              <li className="nav-item">
                <a className={`nav-link ${location.pathname.includes('support')  && 'active'} `} aria-disabled="true">
                  Support
                </a>
              </li>
            </Link>
          </ul>
        </div>
        <a
          className="navbar-brand"
          href="/"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 40,
            width: 40,
            borderRadius: "6px",
            border: "1px solid #E8E8E8",
          }}
        >
          <div style={{}}>
            <div>
              <i className="fa fa-align-justify" aria-hidden="true"></i>
            </div>
          </div>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
