import { useState, useEffect } from "react";
import axios from "axios";
import DataApiSwitcher from "../DataApiSwitcher";

const NASA_API_KEY = "vHkj5pXOZGsoBOuuwZB1YONhbYyUwI4OvBpG3RUj";
const API_BASE_URL = "https://api.nasa.gov/";

const FetchdataFromApi = ({ selectedDate, selectedAPI }) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    let currentApiUrl;

    if (selectedAPI === "Astronomy Picture Of The Day") {
      currentApiUrl = `planetary/apod?api_key=${NASA_API_KEY}&date=${selectedDate}`;
    } else if (selectedAPI === "Mars Rover Photos") {
      currentApiUrl = `mars-photos/api/v1/rovers/curiosity/photos?api_key=${NASA_API_KEY}&earth_date=${selectedDate}&camera=navcam`;
    }
    if (currentApiUrl) {
      const { data } = await axios.get(API_BASE_URL + currentApiUrl);
      setData(data);
    }
  };
  useEffect(() => {
    getData();
  }, [selectedDate, selectedAPI]);

  return (
    <>
      <DataApiSwitcher dataToRender={data} selectedAPI={selectedAPI} />
    </>
  );
};

export default FetchdataFromApi;
