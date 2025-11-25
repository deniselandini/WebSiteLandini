// MissionSection.jsx
import React from "react";
import MissionCard from "./MissionCard"; 
import { MISSION_CARDS_DATA } from "./constants/missionData";
import "./CSS/MissionSection.css";

const MissionSection = () => {
  return (
    <section id="punti-forza" className="section dark strength-section">
      <h2>
        <strong>MISSIONE E VALORI GUIDA</strong>
      </h2>
      <p className="mission-text">
        I principi di <strong>lealtà</strong>, <strong>trasparenza</strong> e
        <strong> collaborazione</strong> ci hanno legati in questi primi
        vent'anni di attività professionale. Abbiamo sempre cercato un
        <strong> dialogo fattivo e costruttivo</strong> con i nostri
        committenti, volto a superare le loro aspettative con risultati di
        assoluta eccellenza.
      </p>
      <div className="strength-grid">
        {MISSION_CARDS_DATA.map((card) => (
          <MissionCard
            key={card.id}
            Icon={card.Icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
};

export default MissionSection;