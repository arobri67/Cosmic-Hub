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
      {/* Container for filter selectors and current filter display */}
      <section className="selector-filter-container">
        {/* List of filter selectors */}
        <ul className="selector-container">
          {/* Component to select a date and update 'selectedDate' state */}
          <FilterDate setSelectedDate={setSelectedDate} todayDate={todayDate} />
          {/* Component to select API and update 'selectedAPI', 'selectedRover', and 'selectedCam' states */}
          <FilterAPI
            setSelectedAPI={setSelectedAPI}
            setSelectedRover={setSelectedRover}
            setSelectedCam={setSelectedCam}
          />
          {/* Conditional rendering: If the selected API is "Mars Rover Photos," display the rover selector */}
          {selectedAPI === "Mars Rover Photos" ? (
            <FilterRover
              setSelectedRover={setSelectedRover}
              setSelectedCam={setSelectedCam}
              selectedRover={selectedRover}
            />
          ) : null}
        </ul>
        {/* Component to display the currently selected filters */}
        <div className="current-filter">
          <CurrentFilter
            selectedAPI={selectedAPI}
            selectedDate={selectedDate}
            selectedCam={selectedCam}
            selectedRover={selectedRover}
          />
        </div>
      </section>
      {/* Conditional rendering: If the selected date is in the future, display an error message */}
      {/* Otherwise, display the component to fetch data based on selected filters */}
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
