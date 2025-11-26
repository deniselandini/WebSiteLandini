import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-section contact-info">
          <h3>Contattaci</h3>
          <p>
            <strong>Studio Tecnico Associato Landini & Maduzzi</strong>
          </p>

          <div className="contact-item compact">
            <div className="contact-icon-wrapper">
              <FaMapMarkerAlt />
            </div>
            <p>Via Giuseppe di Vittorio, 27 - 46031 Bagnolo San Vito (MN)</p>
          </div>

          <div className="contact-item compact">
            <div className="contact-icon-wrapper phone-icon-wrapper">
              <FaPhone />
            </div>
            <div className="contact-list">
              <p>
                <strong>Landini: </strong>
                <a href="tel:+393392045651">339 2045651</a>
              </p>
              <p>
                <strong>Maduzzi: </strong>
                <a href="tel:+393316816164">331 6816164</a>
              </p>
              <p>
                <strong>Ufficio: </strong>
                <a href="tel:+390376123456">0376 123456</a>
              </p>
            </div>
          </div>

          <div className="contact-item compact">
            <div className="contact-icon-wrapper">
              <FaEnvelope />
            </div>
            <div className="contact-list">
              <p>
                <strong>Landini: </strong>
                <a href="mailto:cristian.aurora@email.it">
                  cristian.aurora@email.it
                </a>
              </p>
              <p>
                <strong>Maduzzi: </strong>
                <a href="mailto:info@studiotecnico.it">
                  alessandro.aurora@email.it
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* --- Link Utili --- */}
        <div className="footer-section quick-links">
          <h3>Link Utili</h3>
          <ul>
            <li>
              <Link to="/">Chi siamo</Link>
            </li>
            <li>
              <Link to="/servizi">Servizi</Link>
            </li>
            <li>
              <Link to="/progetti">Progetti</Link>
            </li>
            {/* <li>
              <Link to="/collaborazioni">Collaborazioni</Link>
            </li>
            <li>
              <Link to="/contatti">Contatti</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li> */}
          </ul>
        </div>

        {/* --- Social --- */}
        <div className="footer-section social-media-links">
          <h3>Seguici</h3>
          <div className="social-icons">
            <a
              href="URL_INSTAGRAM"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="URL_LINKEDIN"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* --- Footer Bottom --- */}
      <div className="footer-bottom">
        <p>
          &copy; {currentYear} Studio Tecnico Associato Landini & Maduzzi |
          P.IVA 02119260202
        </p>
        <p className="designed-by">
          Design e Sviluppo a cura di Denise Landini
        </p>
      </div>
    </footer>
  );
}

export default Footer;
