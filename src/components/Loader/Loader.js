import React from "react";
import "./_Loader.scss";
import vinyl from "../../images/vinyl.png";

const Loader = () => {
  return (
    <div className="loader-box">
      <img className="vinyl" src={vinyl} alt="spinning record loading"></img>
    </div>
  );
};

export default Loader;
