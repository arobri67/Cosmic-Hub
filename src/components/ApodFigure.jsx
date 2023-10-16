import React from "react";

const Figure = ({ image, date, description, about, title }) => {
  return (
    <main>
      <div>
        <h3>{title}</h3>
        <p>This image corresponds to the date: {date}</p>
        <div className="img-container">
          <img src={image} alt={title} />
        </div>
        <p>Description: {description}</p>
        <p>Author: {about}</p>
      </div>
    </main>
  );
};

export default Figure;
