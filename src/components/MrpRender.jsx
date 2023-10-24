import "./MrpRender.css";
import Error from "./Error";
import NavDay from "./NavDay";
import { getMission } from "../DATA/mission";

const MrpRender = ({
  mrpData,
  formatedDate,
  setSelectedDate,
  selectedDate,
}) => {
  return (
    <>
      {mrpData.photos && mrpData.photos.length > 0 ? (
        // Conditional rendering: If there are Mars Rover Photos (mrpData), and photos are available
        <section className="mrp-container">
          <div className="img-mrp-container">
            {/* Display the first image from the Mars Rover Photos */}
            <img src={mrpData.photos[0].img_src} alt={mrpData.photos[0].id} />
            {/* Include the NavDay component for date navigation */}
            <NavDay
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
          </div>
          <ul className="description-mrp-container">
            <li>
              {/* Display the name of the rover that took the photo */}
              <h3>{mrpData.photos[0].rover.name}</h3>
            </li>
            <li>
              {" "}
              {/* Display details about the photo, including id, date, sol, rover, and camera */}
              <p>
                This photo (id:{mrpData.photos[0].id} ) was taken on{" "}
                <span>{formatedDate}</span> (or Mars Sol {mrpData.photos[0].sol}
                ) by {mrpData.photos[0].rover.name} using the{" "}
                <span>{mrpData.photos[0].camera.name}</span> camera.
              </p>
            </li>
            <li>
              {" "}
              <h4>Mission Details</h4>
            </li>
            <li>
              {/* Display mission details based on the rover's name */}
              <p>{getMission(mrpData.photos[0].rover.name.toLowerCase())}</p>
            </li>
          </ul>
        </section>
      ) : (
        // If there are no Mars Rover Photos data, display an error
        <Error />
      )}
    </>
  );
};
export default MrpRender;
