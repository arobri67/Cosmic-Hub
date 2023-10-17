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
  //   const [selectedCAM, setSelectedCAM] = useState("navcam");

  const handleDate = (e) => {
    setSelectedDate(e.target.value.toLocaleString());
  };
  const handleApi = (e) => {
    setSelectedAPI(e.target.value);
  };
  //   const handleCAM = (e) => {
  //     setSelectedCAM(e.target.value);
  //   };
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
        </section>
        <FetchdataFromApi
          selectedDate={selectedDate}
          selectedAPI={selectedAPI}
        />
      </main>
    </>
  );
};

export default App;
