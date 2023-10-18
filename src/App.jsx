import "./App.css";
import { useState } from "react";
import FetchdataFromApi from "./components/FetchdataFromApi";
import Header from "./components/Header";

const App = () => {
  const todayDate = new Date(Date.now()).toISOString().slice(0, 10);
  const [selectedDate, setSelectedDate] = useState(todayDate);
  const [selectedAPI, setSelectedAPI] = useState(
    "Astronomy Picture Of The Day"
  );
  const [selectedCam, setSelectedCam] = useState("navcam");

  const handleDate = (e) => {
    setSelectedDate(e.target.value.toLocaleString());
  };
  const handleApi = (e) => {
    setSelectedAPI(e.target.value);
  };
  const handleCam = (e) => {
    setSelectedCam(e.target.value);
  };
  return (
    <>
      <Header api={selectedAPI} />
      <main>
        <section className="selector-container">
          <div className="date-selector">
            <span>Select a date:</span>
            <input type="date" max={todayDate} onChange={handleDate} />
          </div>
          <div className="api-selector">
            <span>Select a library:</span>
            <select name="apiSelect" onChange={handleApi}>
              <option value="Astronomy Picture Of The Day">
                Astronomy Picture Of The Day
              </option>
              <option value="Mars Rover Photos">Mars Rover Photos</option>
            </select>
          </div>
          {selectedAPI === "Mars Rover Photos" ? (
            <div className="cam-selector">
              <span>Select a camera:</span>
              <select name="camSelect" onChange={handleCam}>
                <option value="navcam">Navigation Camera (NAV)</option>
                <option value="mast">Mast Camera (MAST)</option>
              </select>
            </div>
          ) : null}
        </section>
        <FetchdataFromApi
          selectedDate={selectedDate}
          selectedAPI={selectedAPI}
          selectedCam={selectedCam}
        />
      </main>
    </>
  );
};

export default App;
