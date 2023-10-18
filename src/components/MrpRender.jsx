import "./MrpRender.css";

const MrpRender = ({ MrpData }) => {
  return (
    <section className="mrp-container">
      <div className="img-mrp-container">
        <img src={MrpData.photos[0].img_src} alt={MrpData.photos[0].id} />
      </div>
      <div className="description-mrp-container">
        {" "}
        <h3>
          <span>Curiosity</span> - {MrpData.photos[0].camera.full_name}
        </h3>
        <p>
          <strong>Picture ID:</strong> {MrpData.photos[0].id}
        </p>
        <p>
          <strong>Date:</strong> {MrpData.photos[0].earth_date}
        </p>
        <p>
          <strong>Date:</strong> Sol {MrpData.photos[0].sol}
        </p>
      </div>
    </section>
  );
};

export default MrpRender;
