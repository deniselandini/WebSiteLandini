// ContactCard.jsx

import React from "react";
import "./ContactCard.css";

const ContactCard = ({ data }) => {
  return (
    <div className="schedule-box" style={{ transitionDelay: "100ms" }}>
      {data.map((item) => (
        <div key={item.id} className="schedule-item">
          {/* 1. Rimuovi la doppia icona e usa una singola condizione basata sull'ID */}
          <item.icon
            className={`schedule-icon primary-color ${
              item.id === 1 ? "rotate-phone-icon" : ""
            }`}
          />
          
          <h4>{item.title}</h4>
          {item.content.map((text, index) => (
            <p key={index}>
              {typeof text === "string" ? (
                <span dangerouslySetInnerHTML={{ __html: text }} />
              ) : (
                <>
                  {text.number && <strong>{text.text} </strong>}

                  <a href={text.link} className="contact-link">
                    {text.number ? text.number : text.text}
                  </a>
                </>
              )}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ContactCard;