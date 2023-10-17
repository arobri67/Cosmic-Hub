import "./Header.css";

const Header = ({ api }) => {
  let apiName = api;
  console.log(api);
  let apiAcronym = "";
  if (apiName === "Astronomy Picture Of The Day") {
    apiAcronym = "APOD";
  } else if (apiName === "Mars Rover Photos") {
    apiAcronym = "MRP";
  }
  console.log(`current acronym ${apiAcronym}`);
  return (
    <header>
      <div className="left">
        <div className="logo-container">
          <img src="/galaxy.svg" alt="Galaxy Logo" />
          <h1>
            COSMIC <span>HUB</span>
          </h1>
        </div>
        <h2>{api}</h2>
      </div>
      <div className="righ">
        <div className="circle">{apiAcronym}</div>
      </div>
    </header>
  );
};

export default Header;
