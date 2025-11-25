import React from "react";
import ProjectCardSlider from "./ProjectCardSlider";
import "./ProjectCard.css";

const ProjectCard = ({ progetto, openLightbox }) => {
  return (
    <div key={progetto.id} className="project-card">
      <ProjectCardSlider
        progetto={progetto}
        onImageClick={(startIndex) =>
          openLightbox(progetto.immagini, startIndex, progetto.titolo)
        }
      />
      <div className="project-content">
        <h3>{progetto.titolo}</h3>
        <p className="project-category">
          {progetto.categoria} • {progetto.anno}
        </p>
        <p className="project-location">{progetto.localita}</p>
        <p className="project-description">{progetto.descrizione}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
