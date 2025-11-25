import React, { useEffect, useState, useRef } from "react";
import "./CSS/AnimatedCounter.css";

const AnimatedCounter = (props) => {
  const { endValue, duration = 2000, label } = props;
  const [count, setCount] = useState(0);
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
      { threshold: 0.5 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = endValue / (duration / 50);
    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [endValue, duration, isVisible]);

  return (
    <div className="simple-counter-box" ref={ref}>
      <div className="counter-content">
        <p className="counter-number">{count}</p>
        <p className="counter-label">{label}</p>
      </div>
    </div>
  );
};

export default AnimatedCounter;

/* * Lo stile CSS per questo componente (e la sezione Contatori) è nel file:
 * AnimatedCounter.css
 */
