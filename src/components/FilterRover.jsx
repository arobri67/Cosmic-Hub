import FilterCam from "./FilterCam";

const FilterRover = ({ setSelectedRover, setSelectedCam, selectedRover }) => {
  const handleRover = (e) => {
    setSelectedRover(e.target.value);
    {
      e.target.value === "curiosity" ? setSelectedCam("navcam") : null;
      e.target.value === "Perseverance" ? setSelectedCam("navcam_left") : null;
    }
  };

  return (
    <>
      <div className="rover-selector">
        <span>Select a rover:</span>
        <select name="camSelect" onChange={handleRover}>
          <option value="curiosity">Curiosity Rover</option>
          <option value="Perseverance">Perseverance Rover</option>
        </select>
      </div>
      <FilterCam
        setSelectedCam={setSelectedCam}
        selectedRover={selectedRover}
      />
    </>
  );
};

export default FilterRover;
