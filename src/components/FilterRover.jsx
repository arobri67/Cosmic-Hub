import FilterCam from "./FilterCam";

const FilterRover = ({ setSelectedRover, setSelectedCam, selectedRover }) => {
  // Function to handle rover selection and update state
  const handleRover = (e) => {
    setSelectedRover(e.target.value);
    {
      // Conditional logic to set the selected camera based on the rover choice
      e.target.value === "curiosity" ? setSelectedCam("navcam") : null;
      e.target.value === "Perseverance" ? setSelectedCam("navcam_left") : null;
    }
  };

  return (
    <>
      {/* List item for selecting a rover */}
      <li className="rover-selector">
        <span>Select a rover:</span>
        {/* Dropdown menu to choose between rover options */}
        <select name="camSelect" onChange={handleRover}>
          <option value="curiosity">Curiosity Rover</option>
          <option value="Perseverance">Perseverance Rover</option>
        </select>
      </li>
      {/* Include the FilterCam component to select a camera, passing relevant props */}
      <FilterCam
        setSelectedCam={setSelectedCam}
        selectedRover={selectedRover}
      />
    </>
  );
};

export default FilterRover;
