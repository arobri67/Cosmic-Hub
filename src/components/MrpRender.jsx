import React from "react";

const MrpRender = ({ MrpData }) => {
  return (
    <section>
      <h3>{MrpData.photos[0].camera.full_name}</h3>
      <p>Picture ID: {MrpData.photos[0].id}</p>
      <p>Date (earth format): {MrpData.photos[0].earth_date}</p>
      <p>Date (sol format): {MrpData.photos[0].sol}</p>
      <img src={MrpData.photos[0].img_src} alt={MrpData.photos[0].id} />
    </section>
  );
};

export default MrpRender;
