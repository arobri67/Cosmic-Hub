import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Filter from "./components/Filter";

const App = () => {
  // Get the current date in ISO format (YYYY-MM-DD)
  const todayDate = new Date(Date.now()).toISOString().slice(0, 10);
  // Define state variables using React's useState hook
  const [selectedDate, setSelectedDate] = useState(todayDate);
  const [selectedAPI, setSelectedAPI] = useState(
    "Astronomy Picture Of The Day"
  );
  const [selectedRover, setSelectedRover] = useState("");
  const [selectedCam, setSelectedCam] = useState("");

  return (
    <>
      <header>
        {/* Render the Header component and pass the selected API as a prop */}
        <Header api={selectedAPI} />
      </header>
      <main>
        {/* Render the Filter component and pass various props to manage filters and data */}
        <Filter
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          selectedAPI={selectedAPI}
          setSelectedAPI={setSelectedAPI}
          selectedRover={selectedRover}
          setSelectedRover={setSelectedRover}
          selectedCam={selectedCam}
          setSelectedCam={setSelectedCam}
          todayDate={todayDate}
        />
      </main>
      <footer>
        <ul className="about">
          <li>
            COSMIC <span>HUB</span>
          </li>
          <li>Made by Arnaud</li>
          <li>
            <a href="https://github.com/arobri67/rtc-mern1">
              View it on GitHub
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default App;
