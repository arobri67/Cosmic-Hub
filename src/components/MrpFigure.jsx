import React from "react";

const MrpFigure = ({ image, camera, id, sol, date }) => {
  return (
    <div>
      <h3>{camera}</h3>
      <p>Picture ID: {id}</p>
      <p>Date (earth format): {date}</p>
      <p>Date (sol format): {sol}</p>
      <img src={image} alt={id} />
    </div>
  );
};

export default MrpFigure;
