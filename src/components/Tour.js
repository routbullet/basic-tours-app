import React from "react";
import "./sass/Tour.style.scss";

const Tour = ({ id, image, info, price, name }) => {
  return (
    <article className="tour-container">
      <div className="tour-card">
        <img src={image} alt={name} />
        <footer>
          <div className="tour-info">
            <h4>{name}</h4>
            <h4 className="tour-price"> Rs {price}</h4>
          </div>
          <p>{info}</p>
          <button>Not Interested</button>
        </footer>
      </div>
    </article>
  );
};

export default Tour;
