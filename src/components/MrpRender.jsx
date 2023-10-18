import "./MrpRender.css";

const MrpRender = ({ mrpData }) => {
  const date = new Date(mrpData.photos[0].earth_date);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);
  console.log(mrpData);

  return (
    <section className="mrp-container">
      <div className="img-mrp-container">
        <img src={mrpData.photos[0].img_src} alt={mrpData.photos[0].id} />
      </div>
      <div className="description-mrp-container">
        <h3>Curiosity Rover</h3>
        <p>
          This photo (id:{mrpData.photos[0].id} ) was taken on{" "}
          <span>{formattedDate}</span> or Sol-{mrpData.photos[0].sol} by
          Curiosity using the <span>{mrpData.photos[0].camera.full_name}</span>.
        </p>
        <h4>Mission Details</h4>
        <p>
          The mission of the Mars rover Curiosity, officially known as the Mars
          Science Laboratory (MSL), is to explore and study the surface of Mars
          to better understand its geology and climate history. It aims to
          assess whether the Martian environment was ever capable of supporting
          microbial life, study the planet's climate and natural resources, and
          gather data to help prepare for future human missions to Mars.
          Curiosity is equipped with a variety of scientific instruments to
          accomplish these goals, including a rock-zapping laser, a drill, and a
          suite of cameras and spectrometers for analyzing the Martian terrain.
          Since its arrival on Mars in 2012, Curiosity has been providing
          valuable insights into the Red Planet's past and present.
        </p>
      </div>
    </section>
  );
};

export default MrpRender;
