import { useEffect, useRef, useState } from "react";
import "./ServiceCard.css";

const ServiceCard = (props) => {
  const { icon: Icon, title, items, delay = 0 } = props;
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timer;
    const currentRef = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          if (currentRef) observer.unobserve(currentRef);

          timer = setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef && !isVisible) {
      observer.observe(currentRef);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={` fade-up ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${10}ms` }}
    >
      <div className="strength-card">
        <Icon className="strength-icon" />
        <h3>{title}</h3>
        <div className="strength-content-list">
          <ul>
            {items.map((item, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
