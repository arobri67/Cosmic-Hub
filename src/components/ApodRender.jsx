import "./ApodRender.css";

const ApodRender = ({ ApodData }) => {
  return (
    <section className="apod-container">
      <div className="img-container">
        <img src={ApodData.url} alt={ApodData.title} />
      </div>
      <div className="description-container">
        <h3>{ApodData.title}</h3>
        <p>
          <strong>Date:</strong> {ApodData.date}
        </p>
        <p>
          <strong>Description:</strong>{" "}
          {ApodData.explanation || "Not available"}
        </p>
        <p>
          <strong>Author:</strong> {ApodData.copyright || "Not available"}{" "}
        </p>
      </div>
    </section>
  );
};

export default ApodRender;
