import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaImage } from "react-icons/fa";
import { IMG_PLACEHOLDER } from "./constants/projectData";

const ProjectCardSlider = ({ progetto, onImageClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = progetto.immagini || [];
  const numImages = images.length;
  const coverImageSrc =
    numImages > 0 ? images[currentImageIndex] : IMG_PLACEHOLDER;
  const videoUrl = progetto.videoUrl;
  if (videoUrl) {
    return (
      <div className="image-slider-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          src={videoUrl}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        >
          Il tuo browser non supporta la riproduzione video.
        </video>
      </div>
    );
  }
  const goToNext = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % numImages);
  };

  const goToPrev = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + numImages) % numImages);
  };

  const handleImageClick = () => {
    if (onImageClick && numImages > 0) {
      onImageClick(currentImageIndex);
    }
  };

  return (
    <div className="image-slider-container">
      {numImages > 0 ? (
        <>
          <img
            src={coverImageSrc}
            alt={`${progetto.titolo} - Foto ${currentImageIndex + 1}`}
            onClick={handleImageClick}
            style={{ cursor: "pointer" }}
          />
          {numImages > 1 && (
            <>
              <button className="slider-btn left" onClick={goToPrev}>
                <FaChevronLeft />
              </button>
              <button className="slider-btn right" onClick={goToNext}>
                <FaChevronRight />
              </button>
              <div className="slider-counter">
                {currentImageIndex + 1} / {numImages}
              </div>
            </>
          )}
        </>
      ) : (
        <div className="no-image-icon-wrapper" style={{ cursor: "default" }}>
          <FaImage className="no-image-icon" />
          <p>Immagini in arrivo</p>
        </div>
      )}
    </div>
  );
};

export default ProjectCardSlider;
