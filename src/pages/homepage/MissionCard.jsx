import React from "react";
import "./CSS/MissionCard.css";

const MissionCard = ({ Icon, title, description }) => {
  return (
    <div className="strength-card">
      <Icon className="strength-icon" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default MissionCard;