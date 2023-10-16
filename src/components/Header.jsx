import React from "react";

const Header = ({ title }) => {
  return (
    <header>
      <img src="/galaxy.svg" alt="Galaxy Logo" />
      <h1>
        COSMIC EXPLORER <span>HUB</span>
      </h1>
      <h2>{title}</h2>
    </header>
  );
};

export default Header;
