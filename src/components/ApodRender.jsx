import "./ApodRender.css";
import NavDay from "./NavDay";

const ApodRender = ({
  apodData,
  formatedDate,
  setSelectedDate,
  selectedDate,
}) => {
  return (
    <section className="apod-container">
      <div className="img-apod-container">
        <img src={apodData.url} alt={apodData.title} />
        <NavDay selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      </div>
      <ul className="description-apod-container">
        <li>
          <h3>{apodData.title}</h3>
        </li>
        <li>
          <p>{apodData.explanation || "Not description available"}</p>
        </li>
        <li>
          <p className="credits">
            Photo from {formatedDate}, by {apodData.copyright || "unknown"}
          </p>
        </li>
      </ul>
    </section>
  );
};

export default ApodRender;
