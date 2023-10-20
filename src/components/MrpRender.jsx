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
        <section className="mrp-container">
          <div className="img-mrp-container">
            <img src={mrpData.photos[0].img_src} alt={mrpData.photos[0].id} />
            <NavDay
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
          </div>
          <ul className="description-mrp-container">
            <li>
              <h3>{mrpData.photos[0].rover.name}</h3>
            </li>
            <li>
              {" "}
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
              <p>{getMission(mrpData.photos[0].rover.name.toLowerCase())}</p>
            </li>
          </ul>
        </section>
      ) : (
        <Error />
      )}
    </>
  );
};
export default MrpRender;
