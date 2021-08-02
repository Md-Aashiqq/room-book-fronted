import React from "react";
import { useHistory } from "react-router-dom";
import "./Card.css";

function Card({ src, title, description, price, _id }) {
  const history = useHistory();

  return (
    <div className="card" onClick={() => history.push(`room/${_id}`)}>
      <img src={src} alt="" />
      <div className="card__info">
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h3>Rs: {price}</h3>
      </div>
    </div>
  );
}

export default Card;
