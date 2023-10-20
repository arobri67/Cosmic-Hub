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
        <li>📆 {selectedDate}</li>
        <li>|</li>
        <li>🪐 {selectedAPI}</li>
        {selectedRover ? (
          <>
            <li>|</li>
            <li>🤖 {selectedRover.toUpperCase()}</li>
            <li>|</li>
          </>
        ) : (
          <li style={{ display: "none" }}></li>
        )}
        {selectedCam ? (
          <li>🤖 {selectedCam.toUpperCase()}</li>
        ) : (
          <li style={{ display: "none" }}></li>
        )}{" "}
      </ul>
    </>
  );
};

export default CurrentFilter;
