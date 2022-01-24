import React from "react";

const ProgressBar = ({ bgcolor, progreso, height }) => {
  const Padre = {
    height: height,
    width: "95%",
    backgroundColor: "whitesmoke",
    borderRadius: 30,
    border: "solid 2px rgb(0, 0, 0)",
    margin: 10,
    overflow: "hidden",
  };

  const fondocolor = {
    height: "100%",
    width: `${progreso}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
    textAlign: "right",
    border: "none",
    transition: "width 1s ease-in-out",
  };

  const progresstext = {
    padding: 15,
    color: "black",
    fontWeight: 900,
    margin: 1,
  };

  return (
    <div style={Padre}>
      <div style={fondocolor}>
        <span style={progresstext}>{`${progreso}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
