const FilterCam = ({ setSelectedCam, selectedRover }) => {
  const handleCam = (e) => {
    setSelectedCam(e.target.value);
  };
  return (
    <>
      {selectedRover === "curiosity" ? (
        <li className="cam-selector">
          <span>Select a camera:</span>
          <select name="camSelect" onChange={handleCam}>
            <option value="navcam">Navigation Camera (NAV)</option>
            <option value="mast">Mast Camera (MAST)</option>
            <option value="fhaz">Front Hazard Avoidance Camera (FHAZ)</option>
            <option value="rhaz">Rear Hazard Avoidance Camera (RHAZ)</option>
            <option value="chemcam">
              Chemistry and Camera Complex (CHEMCAM)
            </option>
          </select>
        </li>
      ) : null}
      {selectedRover === "Perseverance" ? (
        <li className="cam-selector">
          <span>Select a camera:</span>
          <select name="camSelect" onChange={handleCam}>
            <option value="navcam_left">Navigation Camera (LEFT)</option>
            <option value="navcam_right">Navigation Camera (RIGHT)</option>
            <option value="mcz_right">Mast Camera Zoom (RIGHT)</option>
            <option value="mcz_left">Mast Camera Zoom (LEFT)</option>
            <option value="skycam">MEDA Skycam</option>
          </select>
        </li>
      ) : null}
    </>
  );
};
export default FilterCam;
