import React from "react";

import "./AddressCard.css";

const AddressCard = (props) => {
  const { icon: Icon, title, content, delay } = props;
  return (
    <div className="address-box " style={{ transitionDelay: `${delay}ms` }}>
      <Icon className="address-icon" />
      <h4>{title}</h4>
      {content.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
};

export default AddressCard;
