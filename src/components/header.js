import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <nav className="nav-links">
      <Link className="home-link" to="/">Home</Link>
      <Link className="contact-link" to="/contact">Contact Info</Link>
    </nav>
  </header>
);

export default Header;
