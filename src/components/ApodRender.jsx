const ApodRender = ({ ApodData }) => {
  return (
    <section>
      <h3>{ApodData.title}</h3>
      <p>This image corresponds to the date: {ApodData.date}</p>
      <div className="img-container">
        <img src={ApodData.url} alt={ApodData.title} />
      </div>
      <p>Description: {ApodData.explanation || "Not available"}</p>
      <p>Author: {ApodData.copyright || "Not available"} </p>
    </section>
  );
};

export default ApodRender;
