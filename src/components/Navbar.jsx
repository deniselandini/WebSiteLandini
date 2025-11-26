import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../immagini/logo.jpg";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <img
            src={logo}
            alt="Logo Studio Landini e Maduzzi"
            className="navbar-logo"
          />
          <span className="studio-name">
            Studio Tecnico Associato Geometri Landini & Maduzzi
          </span>
        </Link>

        <button
          className="hamburger-menu"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={closeMenu}>
              Chi siamo
            </Link>
          </li>
          <li>
            <Link to="/servizi" onClick={closeMenu}>
              Servizi
            </Link>
          </li>
          {/* <li>
            <Link to="/team" onClick={closeMenu}>
              Team
            </Link>
          </li> */}
          <li>
            <Link to="/progetti" onClick={closeMenu}>
              Progetti
            </Link>
          </li>
          {/* <li>
            <Link to="/collaborazioni" onClick={closeMenu}>
              Collaborazioni
            </Link>
          </li> */}
          {/* <li>
            <Link to="/contatti" onClick={closeMenu}>
              Contatti
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
