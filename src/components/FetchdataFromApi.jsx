import { useState, useEffect } from "react";
import axios from "axios";
import DataApiSwitcher from "./DataApiSwitcher";

const NASA_API_KEY = import.meta.env.VITE_NASA_API_KEY;
const API_BASE_URL = "https://api.nasa.gov/";

const FetchdataFromApi = ({
  selectedDate,
  selectedAPI,
  selectedCam,
  selectedRover,
  setSelectedDate,
}) => {
  // State variable to store data received from the NASA API
  const [data, setData] = useState([]);

  const getData = async () => {
    let currentApiUrl;

    // Determine the API endpoint based on the selected API and filters
    if (selectedAPI === "Astronomy Picture Of The Day") {
      currentApiUrl = `planetary/apod?api_key=${NASA_API_KEY}&date=${selectedDate}`;
    } else if (selectedAPI === "Mars Rover Photos") {
      currentApiUrl = `mars-photos/api/v1/rovers/${selectedRover}/photos?api_key=${NASA_API_KEY}&earth_date=${selectedDate}&camera=${selectedCam}`;
    }
    // Fetch data from the specified API endpoint
    if (currentApiUrl) {
      const { data } = await axios.get(API_BASE_URL + currentApiUrl);
      setData(data);
    }
  };
  // Use the useEffect hook to fetch data when dependencies change
  useEffect(() => {
    getData();
  }, [selectedDate, selectedAPI, selectedCam, selectedRover]);
  return (
    <>
      {/* Render the DataApiSwitcher component and pass data and filter information as props */}
      <DataApiSwitcher
        dataToRender={data}
        selectedAPI={selectedAPI}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    </>
  );
};

export default FetchdataFromApi;
