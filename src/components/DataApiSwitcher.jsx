import ApodRender from "./ApodRender";
import MrpRender from "./MrpRender";
import Error from "./Error";
import { useState, useEffect } from "react";

const DataApiSwitcher = ({ dataToRender, selectedAPI, selectedDate }) => {
  const [dataLoaded, setDataLoaded] = useState(true);

  useEffect(() => {
    setDataLoaded(true);
    setTimeout(() => {
      setDataLoaded(false);
    }, 1500);
  }, [selectedAPI, selectedDate]);

  return (
    <>
      {dataLoaded ? (
        // You can show a loading indicator or message while waiting for data to load
        <div>Loading data...</div>
      ) : selectedAPI === "Astronomy Picture Of The Day" ? (
        <ApodRender ApodData={dataToRender} />
      ) : selectedAPI === "Mars Rover Photos" &&
        dataToRender.photos &&
        dataToRender.photos.length > 0 ? (
        <>
          <MrpRender MrpData={dataToRender} />
        </>
      ) : (
        <Error />
      )}
    </>
  );
};

export default DataApiSwitcher;
