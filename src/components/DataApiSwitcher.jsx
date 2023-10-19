import ApodRender from "./ApodRender";
import MrpRender from "./MrpRender";
import Loading from "./Loading";
import { useState, useEffect } from "react";

const DataApiSwitcher = ({ dataToRender, selectedAPI, selectedDate }) => {
  const [dataLoaded, setDataLoaded] = useState(true);

  useEffect(() => {
    setDataLoaded(true);
    setTimeout(() => {
      setDataLoaded(false);
    }, 1000);
  }, []);

  const date = new Date(selectedDate);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formatedDate = date.toLocaleDateString("en-US", options);

  return (
    <>
      {dataLoaded ? (
        <Loading />
      ) : selectedAPI === "Astronomy Picture Of The Day" ? (
        <ApodRender formatedDate={formatedDate} apodData={dataToRender} />
      ) : selectedAPI === "Mars Rover Photos" ? (
        <MrpRender formatedDate={formatedDate} mrpData={dataToRender} />
      ) : null}
    </>
  );
};

// {dataLoaded ? (
//   <Loading />
// ) : selectedAPI === "Astronomy Picture Of The Day" ? (
//   <ApodRender apodData={dataToRender} />
// ) : selectedAPI === "Mars Rover Photos" &&
//   dataToRender.photos &&
//   dataToRender.photos.length > 0 ? (
//   <>
//     <MrpRender mrpData={dataToRender} />
//   </>
// ) : (
//   <Error />
// )}

export default DataApiSwitcher;
