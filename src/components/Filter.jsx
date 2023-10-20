import FilterDate from "./FilterDate";
import FilterAPI from "./FilterAPI";
import FilterRover from "./FilterRover";
import FetchdataFromApi from "./FetchdataFromApi";
import CurrentFilter from "./CurrentFilter";
import Error from "./Error";
import "./Filter.css";

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
      <section className="selector-filter-container">
        <ul className="selector-container">
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
        </ul>
        <div className="current-filter">
          <CurrentFilter
            selectedAPI={selectedAPI}
            selectedDate={selectedDate}
            selectedCam={selectedCam}
            selectedRover={selectedRover}
          />
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
          setSelectedDate={setSelectedDate}
        />
      )}
    </>
  );
};

export default Filter;
