const FilterAPI = ({ setSelectedAPI, setSelectedCam, setSelectedRover }) => {
  const handleApi = (e) => {
    setSelectedAPI(e.target.value);
    {
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
      <div className="api-selector">
        <span>Select a library:</span>
        <select name="apiSelect" onChange={handleApi}>
          <option value="Astronomy Picture Of The Day">
            Astronomy Picture Of The Day
          </option>
          <option value="Mars Rover Photos">Mars Rover Photos</option>
        </select>
      </div>
    </>
  );
};

export default FilterAPI;
