import FilterDate from "./FilterDate";
import FilterAPI from "./FilterAPI";
import FilterRover from "./FilterRover";
import Error from "./Error";
import FetchdataFromApi from "./FetchdataFromApi";

const Filter = ({
  selectedDate,
  setSelectedDate,
  selectedAPI,
  selectedRover,
  selectedCam,
  setSelectedAPI,
  setSelectedRover,
  setSelectedCam,
  todayDate,
}) => {
  return (
    <>
      {" "}
      <section className="selector-filter-container">
        <div className="selector-container">
          <FilterDate setSelectedDate={setSelectedDate} todayDate={todayDate} />
          <FilterAPI
            setSelectedAPI={setSelectedAPI}
            setSelectedRover={setSelectedRover}
            setSelectedCam={setSelectedCam}
          />
          {selectedAPI === "Mars Rover Photos" ? (
            <FilterRover
              setSelectedRover={setSelectedRover}
              setSelectedCam={setSelectedCam}
              selectedRover={selectedRover}
            />
          ) : null}
        </div>
        <div className="current-filter">
          Current filters:
          <ul>
            <li>📆 {selectedDate}</li>
            <li>🪐 {selectedAPI || "none"}</li>
            <li>🤖 {selectedRover.toUpperCase() || "none"}</li>
            <li>📷 {selectedCam.toUpperCase() || "none"}</li>
          </ul>
        </div>
      </section>
      {selectedDate > todayDate ? (
        <Error />
      ) : (
        <FetchdataFromApi
          selectedDate={selectedDate}
          selectedAPI={selectedAPI}
          selectedCam={selectedCam}
          selectedRover={selectedRover}
        />
      )}
    </>
  );
};

export default Filter;
