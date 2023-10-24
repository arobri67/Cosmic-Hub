import "./CurrentFilter.css";
const CurrentFilter = ({
  selectedDate,
  selectedAPI,
  selectedRover,
  selectedCam,
}) => {
  return (
    <>
      <span>Current filters:</span>
      <ul>
        {/* Display the selected date filter */}
        <li>📆 {selectedDate}</li>
        <li>|</li>
        {/* Display the selected API filter (e.g., APOD or Mars Rover Photos) */}
        <li>🪐 {selectedAPI}</li>
        {selectedRover ? (
          <>
            <li>|</li>
            {/* Display the selected rover filter (if applicable) */}
            <li>🤖 {selectedRover.toUpperCase()}</li>
            <li>|</li>
          </>
        ) : (
          // If no rover is selected, hide this list item
          <li style={{ display: "none" }}></li>
        )}
        {selectedCam ? ( // Display the selected camera filter (if applicable)
          <li>🤖 {selectedCam.toUpperCase()}</li>
        ) : (
          // If no camera is selected, hide this list item
          <li style={{ display: "none" }}></li>
        )}{" "}
      </ul>
    </>
  );
};

export default CurrentFilter;
