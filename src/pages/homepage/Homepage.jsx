import React from "react";
import logo from "../../immagini/logo.jpg";
import "./CSS/Homepage.css";
import AboutSection from "./AboutSection";
import CounterSection from "./CounterSection";
import MissionSection from "./MissionSection";
import LocationSection from "./LocationSections";
import ImageCarousel from "../../components/ImageCarousel";

function Homepage() {
  const title = "Studio Tecnico Associato Geometri Landini & Maduzzi";
  const slogan =
    "Competenza, precisione e affidabilità al servizio del territorio";
  return (
    <>
      <ImageCarousel title={title} slogan={slogan} />
      <AboutSection />
      <CounterSection />
      <MissionSection />
      <LocationSection />
    </>
  );
}

export default Homepage;
