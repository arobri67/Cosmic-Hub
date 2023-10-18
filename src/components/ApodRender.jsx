import "./ApodRender.css";

const ApodRender = ({ apodData }) => {
  return (
    <section className="apod-container">
      <div className="img-apod-container">
        <img src={apodData.url} alt={apodData.title} />
      </div>
      <div className="description-apod-container">
        <h3>{apodData.title}</h3>
        <p>{apodData.explanation || "Not description available"}</p>
        <p className="credits">
          Photo from {apodData.date}, by {apodData.copyright || "unknown"}
        </p>
      </div>
    </section>
  );
};

export default ApodRender;
