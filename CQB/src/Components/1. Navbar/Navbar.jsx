import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to track menu open/close
  const [hamburgerOpen, setHamburgerOpen] = useState(false); // State to toggle between hamburger and cross

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu state
    setHamburgerOpen(!hamburgerOpen); // Toggle hamburger/cross icon
  };

  const closeMenu = () => {
    setMenuOpen(false); // Close menu when a link is clicked
    setHamburgerOpen(false); // Change hamburger back to three lines
  };

  return (
    <nav className="navbar">
      {/* Left-side menu */}
      <div className="navbar-left">
        <Link to="/">
          <h1 className="logo-h1">Devquest</h1>
        </Link>
      </div>

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${hamburgerOpen ? "line-1" : ""}`}></div>
        <div className={`line ${hamburgerOpen ? "line-2" : ""}`}></div>
        <div className={`line ${hamburgerOpen ? "line-3" : ""}`}></div>
      </div>

      {/* Navbar Links */}
      <div className={`navbar-right ${menuOpen ? "menu-open" : ""}`}>
        <div className="right-navlink">
          <Link to="/javascript" className="navbar-link" onClick={closeMenu}>
            JavaScript
          </Link>
          <Link to="/python" className="navbar-link" onClick={closeMenu}>
            Python
          </Link>
          <Link to="/java" className="navbar-link" onClick={closeMenu}>
            Java
          </Link>
          <Link to="/sql" className="navbar-link" onClick={closeMenu}>
            SQL
          </Link>
        </div>

        <div className="right-navbtn">
          <a
            href="https://github.com/amanyadav21"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="navbar-button-1" onClick={closeMenu}>
              Github
            </button>
          </a>

          <a
            href="https://www.linkedin.com/in/aman-kumar21/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="navbar-button-2" onClick={closeMenu}>
              Connect
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
