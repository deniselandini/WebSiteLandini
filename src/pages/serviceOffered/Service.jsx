import React from "react";
// Importa l'array di dati
import { SERVICES_DATA } from "./constants/servicesData";
import ServiceCard from "./ServiceCard";
import "./Service.css";

function Service() {
  const filterByGrid = (grid) =>
    SERVICES_DATA.filter((service) => service.grid === grid);

  return (
    <section id="servizi" className="section light">
      <div className="container-spaced">
        <h1>
          <strong>I NOSTRI SERVIZI</strong></h1>
        <p className="section-slogan">
          L'affidabilità di un partner storico, l'innovazione del futuro.
        </p>

        <div className="cards services-grid-row-3">
          {filterByGrid(3).map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              delay={service.delay}
              items={service.items}
            />
          ))}
        </div>

        <div className="cards services-grid-row-2">
          {filterByGrid(2).map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              delay={service.delay}
              items={service.items}
            />
          ))}
        </div>

        <div className="cards services-grid-row-1">
          {filterByGrid(1).map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              delay={service.delay}
              items={service.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Service;
