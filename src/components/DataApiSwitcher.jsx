import ApodRender from "./ApodRender";
import MrpRender from "./MrpRender";
import Loading from "./Loading";
import { useState, useEffect } from "react";

const DataApiSwitcher = ({
  dataToRender,
  selectedAPI,
  selectedDate,
  setSelectedDate,
}) => {
  // State variable to track data loading state
  const [dataLoaded, setDataLoaded] = useState(true);

  // Use the useEffect hook to simulate data loading (e.g., with a delay)
  useEffect(() => {
    setDataLoaded(true);
    setTimeout(() => {
      setDataLoaded(false);
    }, 1000);
  }, []);

  // Convert the selected date into a human-readable format
  const date = new Date(selectedDate);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formatedDate = date.toLocaleDateString("en-US", options);

  return (
    <>
      {/* Conditional rendering based on data loading and selected API */}
      {dataLoaded ? (
        <Loading />
      ) : selectedAPI === "Astronomy Picture Of The Day" ? (
        // Render the ApodRender component for APOD data
        <ApodRender
          formatedDate={formatedDate}
          apodData={dataToRender}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      ) : selectedAPI === "Mars Rover Photos" ? (
        // Render the MrpRender component for Mars Rover Photos data
        <MrpRender
          formatedDate={formatedDate}
          mrpData={dataToRender}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      ) : null}
    </>
  );
};
export default DataApiSwitcher;
