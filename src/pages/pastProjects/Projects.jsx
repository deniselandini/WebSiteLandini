import React, { useState } from "react";
import { CATEGORIE_PROGETTI, PROJECTS_DATA } from "./constants/projectData";
import ProjectCard from "./ProjectCard";
import "./Projects.css";
import LightBox from "./LightBox";

function Projects() {
  const [filtro, setFiltro] = useState("Tutti");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [currentLightboxIndex, setCurrentLightboxIndex] = useState(0);
  const [currentProjectTitle, setCurrentProjectTitle] = useState("");

  const progettiFiltrati =
    filtro === "Tutti"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.categoria === filtro);

  const openLightbox = (images, startIndex, title) => {
    if (images && images.length > 0) {
      setLightboxImages(images);
      setCurrentLightboxIndex(startIndex);
      setCurrentProjectTitle(title);
      setLightboxOpen(true);
    }
  };

  const closeLightbox = () => setLightboxOpen(false);

  const goToNextLightboxImage = () =>
    setCurrentLightboxIndex((prev) => (prev + 1) % lightboxImages.length);

  const goToPrevLightboxImage = () =>
    setCurrentLightboxIndex(
      (prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length
    );

  return (
    <section id="progetti" className="section light">
      <div className="container-spaced">
        <h1>
          <strong>I NOSTRI PROGETTI</strong>
        </h1>
        <p className="section-slogan">
          Realizzazioni di cui andiamo fieri: qualità e innovazione in ogni
          dettaglio.
        </p>

        <div className="filters">
          {CATEGORIE_PROGETTI.map((cat) => (
            <button
              key={cat}
              className={filtro === cat ? "active" : ""}
              onClick={() => setFiltro(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="gallery">
          {progettiFiltrati.map((progetto) => (
            <ProjectCard
              key={progetto.id}
              progetto={progetto}
              openLightbox={openLightbox}
            />
          ))}
        </div>

        {lightboxOpen && lightboxImages.length > 0 && (
          <LightBox
            images={lightboxImages}
            currentIndex={currentLightboxIndex}
            onClose={closeLightbox}
            onPrev={goToPrevLightboxImage}
            onNext={goToNextLightboxImage}
            projectTitle={currentProjectTitle}
          />
        )}
      </div>
    </section>
  );
}

export default Projects;
