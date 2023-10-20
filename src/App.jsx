import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Filter from "./components/Filter";
import NavDay from "./components/NavDay";

const App = () => {
  const todayDate = new Date(Date.now()).toISOString().slice(0, 10);
  const [selectedDate, setSelectedDate] = useState(todayDate);
  const [selectedAPI, setSelectedAPI] = useState(
    "Astronomy Picture Of The Day"
  );
  const [selectedRover, setSelectedRover] = useState("");
  const [selectedCam, setSelectedCam] = useState("");

  // const date = new Date(selectedDate);

  return (
    <>
      <header>
        <Header api={selectedAPI} />
      </header>
      <main>
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
