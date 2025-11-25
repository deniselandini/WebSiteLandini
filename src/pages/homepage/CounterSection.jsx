import React from "react";
import AnimatedCounter from "./AnimatedCounter";
import { counterData } from "./constants/counterData";
import "./CSS/CounterSection.css";

const CounterSection = () => {
  return (
    <section className="section dark-alt counter-section">

      <div className="container">
        <div className="simple-counters-flex">
          {counterData.map((data, index) => (
            <AnimatedCounter key={index} {...data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;