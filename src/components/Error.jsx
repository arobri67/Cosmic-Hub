import "./Error.css";

const Error = () => {
  return (
    <section className="error-container">
      <div className="error-img-container">
        {/* Display an error image */}
        <img src="/error.png" alt="" />
      </div>
      <ul className="error-msg-container">
        <li>
          <h2>
            {/* Display an error message */}
            <span>Whoops!</span> Something's not quite right...
          </h2>
        </li>
        <li>
          {/* Provide a message for the error situation and suggest actions */}
          <p>
            No photo available. Please select another <span>date</span>,{" "}
            <span>library</span>, <span>rover</span>, or <span>camera</span>
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Error;
