import { FaMapMarkerAlt } from "react-icons/fa";
import AddressCard from "./AddressCard.jsx";
import ContactCard from "./ContactCard.jsx";

import "./Contacts.css";
import { MAP_EMBED_SRC, ALL_CONTACT_DATA } from "./constants/contactData";

function Contacts() {
  return (
    <section id="contatti" className="section light">
      <div className="container-spaced">
        <h1>
          <strong>RIMANIAMO IN CONTATTO</strong>
        </h1>
        <p className="section-slogan">
          Contattaci direttamente per una consulenza o una richiesta.
        </p>

        <div className="contact-details-wrapper">
          <div className="location-map-grid">
            <AddressCard
              icon={FaMapMarkerAlt}
              title="Indirizzo Operativo"
              content={[
                "Via Giuseppe di Vittorio n. 27",
                "46031 Bagnolo San Vito (MN)",
              ]}
              delay={0}
            />

            <div
              className="map-iframe-wrapper animated-card"
              style={{ transitionDelay: "100ms" }}
            >
              <iframe
                src={MAP_EMBED_SRC}
                title="Mappa dello Studio"
                className="google-map-iframe"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="contact-schedule-block">
            <div className="single-column-layout">
              <ContactCard data={ALL_CONTACT_DATA} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
