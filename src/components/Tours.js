import React from "react";
import Tour from "./Tour";
import "./sass/Tours.style.scss";

const Tours = ({ toursProp, removeCardId }) => {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {toursProp.map((tour) => {
          return (
            <Tour key={tour.id} {...tour} removeCardId={removeCardId}></Tour>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
