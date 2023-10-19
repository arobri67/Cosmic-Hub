import "./Error.css";

const Error = () => {
  return (
    <main>
      <section className="error-container">
        <div className="error-img-container">
          <img src="/error.png" alt="" />
        </div>
        <div className="error-msg-container">
          <h2>
            <span>Whoops!</span> Something's not quite right...
          </h2>
          <p>
            No photo available. Please select another <span>date</span>,{" "}
            <span>library</span>, <span>rover</span>, or <span>camera</span>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Error;
