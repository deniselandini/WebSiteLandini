import React, { useEffect, useRef, useState } from "react";
import "./CollaborationCard.css";

const CollaborationCard = (props) => {
  const { item } = props;
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
      style={{ transitionDelay: `${item.delay}ms` }}
    >
      <div className="collaboration-card ">
        <h3 className="collaboration-area">{item.area}</h3>
        <ul className="collaborators-list">
          {item.collaborators.map((collaborator, idx) => (
            <li key={idx} className="collaborator-item">
              {collaborator.name} - <em>{collaborator.profession}</em>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CollaborationCard;
