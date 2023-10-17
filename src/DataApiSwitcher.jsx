import ApodRender from "./components/ApodRender";
import MrpRender from "./components/MrpRender";
import Error from "./components/Error";

const DataApiSwitcher = ({ dataToRender, selectedAPI }) => {
  let data = dataToRender;

  return (
    <>
      {selectedAPI === "Astronomy Picture Of The Day" ? (
        <ApodRender ApodData={data} />
      ) : selectedAPI === "Mars Rover Photos" &&
        data.photos &&
        data.photos.length > 0 ? (
        <>
          <MrpRender MrpData={data} />
        </>
      ) : (
        <Error />
      )}
    </>
  );
};

export default DataApiSwitcher;
