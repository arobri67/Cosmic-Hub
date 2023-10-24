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
        {/* Display the Astronomy Picture of the Day (APOD) image */}
        <img src={apodData.url} alt={apodData.title} />
        {/* Include the NavDay component for date navigation */}
        <NavDay selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      </div>
      <ul className="description-apod-container">
        <li>
          {/* Display the title of the APOD */}
          <h3>{apodData.title}</h3>
        </li>
        <li>
          {/* Display the explanation of the APOD or a default message if not available */}
          <p>{apodData.explanation || "Not description available"}</p>
        </li>
        <li>
          {/* Display photo credits, including date and copyright information (if available) */}
          <p className="credits">
            Photo from {formatedDate}, by {apodData.copyright || "unknown"}
          </p>
        </li>
      </ul>
    </section>
  );
};

export default ApodRender;
