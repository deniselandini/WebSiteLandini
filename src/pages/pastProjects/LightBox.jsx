import React, { useEffect, useState } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./LightBox.css";

const LightBox = ({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
  projectTitle,
}) => {
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  if (!images || images.length === 0) return null;

  const currentImageSrc = images[currentIndex];

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        {projectTitle && (
          <div className="lightbox-project-title">{projectTitle}</div>
        )}

        <img
          src={currentImageSrc}
          alt=""
          className={zoomed ? "zoomed" : ""}
          onClick={(e) => {
            e.stopPropagation();
            setZoomed((z) => !z);
          }}
        />

        <button
          className="lightbox-close-btn"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          <FaTimes />
        </button>

        {images.length > 1 && (
          <>
            <button
              className="lightbox-nav-btn prev"
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
            >
              <FaChevronLeft />
            </button>
            <button
              className="lightbox-nav-btn next"
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
            >
              <FaChevronRight />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default LightBox;
