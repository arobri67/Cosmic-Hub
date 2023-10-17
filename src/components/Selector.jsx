import { useState } from "react";
import FetchdataFromApi from "./FetchdataFromApi";
import Header from "./Header";

const Selector = ({ today }) => {
  const [selectedDate, setSelectedDate] = useState(today);
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
        <section>
          <input type="date" max={today} onChange={handleDate} />
          <select name="apiSelect" onChange={handleApi}>
            <option value="Astronomy Picture Of The Day">
              Astronomy Picture Of The Day
            </option>
            <option value="Mars Rover Photos">Mars Rover Photos</option>
          </select>
        </section>
        <FetchdataFromApi
          selectedDate={selectedDate}
          selectedAPI={selectedAPI}
        />
      </main>
    </>
  );
};

export default Selector;
