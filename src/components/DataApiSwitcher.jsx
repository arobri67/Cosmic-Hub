import ApodRender from "./ApodRender";
import MrpRender from "./MrpRender";
import Error from "./Error";
import Loading from "./Loading";
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
        <Loading />
      ) : selectedAPI === "Astronomy Picture Of The Day" ? (
        <ApodRender apodData={dataToRender} />
      ) : selectedAPI === "Mars Rover Photos" &&
        dataToRender.photos &&
        dataToRender.photos.length > 0 ? (
        <>
          <MrpRender mrpData={dataToRender} />
        </>
      ) : (
        <Error />
      )}
    </>
  );
};

export default DataApiSwitcher;
