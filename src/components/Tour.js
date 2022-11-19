import React, { useState } from "react";
import "./sass/Tour.style.scss";

const Tour = ({ id, image, info, price, name }) => {
  const [readMe, setReadMe] = useState(false);
  return (
    <article className="tour-container">
      <div className="tour-card">
        <img src={image} alt={name} />
        <footer>
          <div className="tour-info">
            <h4>{name}</h4>
            <h4 className="tour-price"> Rs {price}</h4>
          </div>
          <p>
            {readMe ? info : `${info.substring(0, 180)}...`}
            <button onClick={() => setReadMe(!readMe)}>
              {readMe ? "hide" : "show"}
            </button>
          </p>
          <button className="detached-btn">Detached</button>
        </footer>
      </div>
    </article>
  );
};

export default Tour;
