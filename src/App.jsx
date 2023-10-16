import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import ApodFigure from "./components/ApodFigure";
import MrpFigure from "./components/MrpFigure";
import Error from "./components/Error";

const NASA_API_KEY = "vHkj5pXOZGsoBOuuwZB1YONhbYyUwI4OvBpG3RUj";
const API_BASE_URL = "https://api.nasa.gov/";

function App() {
  //define date of today in this format year-month-day
  const todayDate = new Date(Date.now()).toISOString().slice(0, 10);
  //define the date selected by the user (input)
  const [selectedDate, setSelectedDate] = useState(todayDate);
  //define the api selected by the user (select); by default apod
  const [selectedAPI, setSelectedAPI] = useState(
    "Astronomy Picture Of The Day"
  );
  //define the cam by the user for MRP API
  const [selectedCAM, setSelectedCAM] = useState("navcam");
  //define data to be collected
  const [data, setData] = useState([]);
  console.log(data);
  const getData = async () => {
    let currentApiUrl;
    if (selectedAPI === "Astronomy Picture Of The Day") {
      currentApiUrl = `planetary/apod?api_key=${NASA_API_KEY}&date=${selectedDate}`;
    } else if (selectedAPI === "Mars Rover Photos") {
      currentApiUrl = `mars-photos/api/v1/rovers/curiosity/photos?api_key=${NASA_API_KEY}&earth_date=${selectedDate}&camera=${selectedCAM}`;
    }
    if (currentApiUrl) {
      const { data } = await axios.get(API_BASE_URL + currentApiUrl);
      setData(data);
    }
  };
  useEffect(() => {
    getData();
  }, [selectedDate, selectedAPI, selectedCAM]);

  const handleDate = (e) => {
    setSelectedDate(e.target.value.toLocaleString());
  };
  const handleApi = (e) => {
    setSelectedAPI(e.target.value);
  };
  const handleCAM = (e) => {
    setSelectedCAM(e.target.value);
  };

  return (
    <>
      <Header title={selectedAPI} />
      <input type="date" onChange={handleDate} max={todayDate} />

      <select name="apiSelect" onChange={handleApi}>
        <option value="Astronomy Picture Of The Day">
          Astronomy Picture Of The Day
        </option>
        <option value="Mars Rover Photos">Mars Rover Photos</option>
      </select>

      {selectedAPI === "Astronomy Picture Of The Day" ? (
        <ApodFigure
          image={data.url}
          date={data.date}
          description={data.explanation}
          about={data.copyright}
          title={data.title}
        />
      ) : selectedAPI === "Mars Rover Photos" &&
        data.photos &&
        data.photos.length > 0 ? (
        <>
          <select name="camSelect" onChange={handleCAM}>
            <option value="fhaz">Front Hazard Avoidance Camera</option>
            <option value="rhaz">Rear Hazard Avoidance Camera</option>
            <option value="mast">Mast Camera</option>
            <option value="chemcam">Chemistry and Camera Complex</option>
            <option value="mahli">Mars Hand Lens Imager</option>
            <option value="mardi">Mars Descent Imager</option>
            <option value="navcam">Navigation Camera</option>
          </select>
          <MrpFigure
            image={data.photos[0].img_src}
            date={data.photos[0].earth_date}
            id={data.photos[0].id}
            sol={data.photos[0].sol}
            camera={data.photos[0].camera.full_name}
          />
        </>
      ) : (
        <>
          {" "}
          <select name="camSelect" onChange={handleCAM}>
            <option value="fhaz">Front Hazard Avoidance Camera</option>
            <option value="rhaz">Rear Hazard Avoidance Camera</option>
            <option value="mast">Mast Camera</option>
            <option value="chemcam">Chemistry and Camera Complex</option>
            <option value="mahli">Mars Hand Lens Imager</option>
            <option value="mardi">Mars Descent Imager</option>
            <option value="navcam">Navigation Camera</option>
          </select>
          <Error />
        </>
      )}
    </>
  );
}

export default App;
