import React from "react";
import "./Card.css";

const Card = ({imgSrc, title}) => {
  return (
    <div className="card">
      <img src={imgSrc} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text">
          {title}
        </p>
      </div>
    </div>
  );
};

export default Card;
