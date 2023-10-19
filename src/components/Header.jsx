import "./Header.css";
import { useState, useEffect } from "react";
import mrpBackground from "../assets/mrp.png";
import apodBackground from "../assets/apod.png";

const Header = ({ api }) => {
  // update apiAcronym only when api is changing
  const [apiAcronym, setApiAcronym] = useState("apod");
  useEffect(() => {
    if (api === "Astronomy Picture Of The Day") {
      setApiAcronym("APOD");
    } else if (api === "Mars Rover Photos") {
      setApiAcronym("MRP");
    }
  }, [api]);

  const getBackgroundImage = (api) => {
    if (api === "Astronomy Picture Of The Day") {
      return `url(${apodBackground})`;
    } else if (api === "Mars Rover Photos") {
      return `url(${mrpBackground})`;
    }
  };
  const circleStyle = {
    backgroundImage: getBackgroundImage(api),
    backgroundSize: "cover",
  };
  return (
    <>
      <div className="header-left">
        <div className="logo-container">
          <img src="/galaxy.svg" alt="Galaxy Logo" />
          <h1>
            COSMIC <span>HUB</span>
          </h1>
        </div>
        <h2>{api}</h2>
      </div>
      <div className="header-right">
        <div className="circle" style={circleStyle}>
          <span className="apiAcro">{apiAcronym}</span>
        </div>
      </div>
    </>
  );
};

export default Header;
