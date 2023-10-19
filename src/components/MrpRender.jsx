import "./MrpRender.css";
import Error from "./Error";
import { getMission } from "../DATA/mission";

const MrpRender = ({ mrpData, formatedDate }) => {
  return (
    <>
      {mrpData.photos && mrpData.photos.length > 0 ? (
        <section className="mrp-container">
          <div className="img-mrp-container">
            <img src={mrpData.photos[0].img_src} alt={mrpData.photos[0].id} />
          </div>
          <div className="description-mrp-container">
            <h3>{mrpData.photos[0].rover.name}</h3>
            <p>
              This photo (id:{mrpData.photos[0].id} ) was taken on{" "}
              <span>{formatedDate}</span> (or Mars Sol {mrpData.photos[0].sol})
              by {mrpData.photos[0].rover.name} using the{" "}
              <span>{mrpData.photos[0].camera.name}</span> camera.
            </p>
            <h4>Mission Details</h4>
            <p>{getMission(mrpData.photos[0].rover.name.toLowerCase())}</p>
          </div>
        </section>
      ) : (
        <Error />
      )}
    </>
  );
};
export default MrpRender;
