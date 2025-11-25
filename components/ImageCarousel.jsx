import React, { useState, useEffect } from "react";

import imgVilla from "../immagini/DJI_0981.jpeg";
import imgFienile from "../immagini/DJI_0457.JPG";
import imgMulino from "../immagini/DJI_0141Crop.JPG";
import imgAbitazione from "../immagini/IMG_6635.JPG";
import imgParcoRicarica from "../immagini/DJI_0612.jpeg";
import imgSmatrics from "../immagini/DJI_0003.JPG";
import imgDiagnostica from "../immagini/IMG-20251009-WA0064.jpg";

import "./ImageCarousel.css";

const projectImages = [
  imgVilla,
  imgFienile,
  imgMulino,
  imgAbitazione,
  imgParcoRicarica,
  imgSmatrics,
  imgDiagnostica,
];

const ImageCarousel = (props) => {
  const { title, slogan } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projectImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentImage = projectImages[currentIndex];

  return (
    <header
      className="hero"
      style={{ backgroundImage: `url(${currentImage})` }}
    >
      <div className="overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="slogan">{slogan}</p>
      </div>
    </header>
  );
};

export default ImageCarousel;
