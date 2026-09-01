// src/components/Logo.jsx

import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";

function Logo() {
  return (
    <Link to="/" className="brand-logo-container">
      <img
        src="/images/logo.png"
        alt="Braj Dharshan Logo"
        className="brand-logo-image"
      />
    </Link>
  );
}

export default Logo;

