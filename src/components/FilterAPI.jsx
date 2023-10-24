const FilterAPI = ({ setSelectedAPI, setSelectedCam, setSelectedRover }) => {
  // Function to handle API selection and update state
  const handleApi = (e) => {
    setSelectedAPI(e.target.value);
    {
      // Conditional logic to set the selected rover and camera based on the API choice
      e.target.value === "Mars Rover Photos"
        ? (setSelectedRover("curiosity"), setSelectedCam("navcam"))
        : null;
      e.target.value === "Astronomy Picture Of The Day"
        ? (setSelectedRover(""), setSelectedCam(""))
        : null;
    }
  };

  return (
    <>
      {/* List item for selecting the API */}
      <li className="api-selector">
        <span>Select a library:</span>
        {/* Dropdown menu to choose between API options */}
        <select name="apiSelect" onChange={handleApi}>
          <option value="Astronomy Picture Of The Day">
            Astronomy Picture Of The Day
          </option>
          <option value="Mars Rover Photos">Mars Rover Photos</option>
        </select>
      </li>
    </>
  );
};

export default FilterAPI;
