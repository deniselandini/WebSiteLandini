import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./CSS/LocationSection.css";
import { CENTER_COORDS, highlightIcon, INITIAL_ZOOM, MapMover, REGION_DATA, standardIcon } from "./constants/locationData";

const LocationSection = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [mapCenter, setMapCenter] = useState(CENTER_COORDS);
  const [mapZoom, setMapZoom] = useState(INITIAL_ZOOM);

  const handleRegionClick = (regionName, lat, lng) => {
    const newSelection = selectedRegion === regionName ? null : regionName;
    setSelectedRegion(newSelection);

    if (newSelection) {
      setMapCenter([lat, lng]);
      setMapZoom(7);
    } else {
      setMapCenter(CENTER_COORDS);
      setMapZoom(INITIAL_ZOOM);
    }
  };

  return (
    <section id="aree-geografiche" className="location-section">
      <h2>
        <strong>ZONE GEOGRAFICHE COPERTE</strong>
      </h2>
      <p className="location-text">
        Siamo operativi e forniamo consulenze su tutto il territorio del
        <strong> Nord e Centro Italia</strong>, garantendo la nostra presenza
        nelle seguenti regioni:
      </p>

      <div className="location-regions">
        {REGION_DATA.map((region) => (
          <span
            key={region.name}
            className={`region-tag ${
              selectedRegion === region.name ? "highlighted" : ""
            }`}
            onClick={() =>
              handleRegionClick(region.name, region.lat, region.lng)
            }
          >
            {region.name}
          </span>
        ))}
      </div>

      <div className="map-container">
        <MapContainer
          center={CENTER_COORDS}
          zoom={INITIAL_ZOOM}
          scrollWheelZoom={false}
          minZoom={6}
          style={{ height: "400px", width: "100%" }}
        >
          <MapMover center={mapCenter} zoom={mapZoom} />

          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {REGION_DATA.map((region) => (
            <Marker
              key={region.name}
              position={[region.lat, region.lng]}
              // Passiamo esplicitamente l'icona ad ogni Marker
              icon={
                selectedRegion === region.name ? highlightIcon : standardIcon
              }
            >
              <Popup>
                Regione: <strong>{region.name}</strong>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
};

export default LocationSection;
