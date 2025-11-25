import React from "react";
import "./Collaborations.css";
import { COLLABORATIONS_DATA } from "./constants/collaborationsData";
import CollaborationCard from "./CollaborationCard";

const Collaborations = () => {
  return (
    <section
      id="collaborazioni"
      className="section light collaborations-section"
    >
      <div className="container-spaced">
        <h1>
          <strong>COLLABORAZIONI CONTINUATIVE</strong>
        </h1>
        <p className="section-slogan">
          Per offrire un servizio di altissima qualità, adottiamo un approccio
          olistico, integrando le nostre competenze con la vasta esperienza di
          partner specializzati, garantendo supporto completo dal concept alla
          realizzazione.
        </p>
        <div className="collaborations-grid">
          {COLLABORATIONS_DATA.map((item, index) => (
            <CollaborationCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collaborations;
