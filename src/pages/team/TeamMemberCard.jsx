import React, { useRef, useState, useEffect } from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./TeamMemberCard.css";

const TeamMemberCard = (props) => {
  const { name, surname, title, image, linkedin, email, delay } = props;
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`fade-up ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="member">
        <div className="photo-placeholder-wrapper">
          <img
            src={image}
            alt={`Ritratto di ${name} ${surname}`}
            className="member-photo"
          />
        </div>
        <h4 className="member-full-name">{`${name} ${surname}`}</h4>
        <p className="member-title">{title}</p>

        <div className="member-contacts">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`LinkedIn di ${name} ${surname}`}
            >
              <FaLinkedin className="contact-icon linkedin-color" />
            </a>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              aria-label={`Email di ${name} ${surname}`}
            >
              <FaEnvelope className="contact-icon email-color" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
