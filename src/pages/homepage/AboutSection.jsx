import React from "react";
import { FaRegHandshake, FaAward, FaUsers } from "react-icons/fa";
import "./CSS/AboutSection.css";

const AboutSection = () => {
  return (
    <section id="chi-siamo" className="section light about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>CHI SIAMO</h2>
            <p>
              Lo studio nasce negli anni di proficua collaborazione tra il
              <strong> Geom. Cristian Landini</strong>, iscritto all'Albo dal
              <strong> 1996</strong>, e il
              <strong> Geom. Alessandro Maduzzi</strong>, che ha iniziato come
              praticante, diventando poi collaboratore e professionista iscritto
              dal <strong>2004</strong>. Questa sinergia ha portato alla
              fondazione dello Studio Tecnico Associato in data
              <strong> 9 giugno 2005</strong>.
            </p>
          </div>

          <div className="about-summary-box">
            <h4>La Nostra Storia</h4>
            <dl className="history-details-list">
              <div className="history-item">
                <dt className="history-label">
                  <FaAward className="summary-icon" />
                  Fondata il:
                </dt>
                <dd className="history-value">9 Giugno 2005</dd>
              </div>

              <div className="history-item">
                <dt className="history-label">
                  <FaUsers className="summary-icon" />
                  Fondatori:
                </dt>
                <dd className="history-value">
                  Geom. C. Landini (dal 1996)
                  <br />
                  Geom. A. Maduzzi (dal 2004)
                </dd>
              </div>

              <div className="history-item">
                <dt className="history-label">
                  <FaRegHandshake className="summary-icon" />
                  Principio:
                </dt>
                <dd className="history-value">
                  Collaborazione di successo trasformata in associazione
                  professionale.
                </dd>
              </div>
            </dl>
            <a href="/team" className="btn-primary-cta">
              Conosci il nostro team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
