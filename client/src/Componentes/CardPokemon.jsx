import React from "react";
// import { connect } from "react-redux";
// import { Link } from 'react-router-dom';

export default function CardPokemon({ nombre, id, img, tipo }) {
  return (
    <div key={id} className="card">
      <div>
        {" "}
        <h1>{nombre}</h1>
        <img src={`${img}`} alt={nombre} className="card-image" />


        <div className="iconitos">
      {tipo
        ? tipo.map((tipos) => (
         
               <div className="iconito"><img
                src={require("../../src/Icos/" + tipos.name + ".png")}
                className="iconitoIMG"
              />
              </div>
          ))
        : !tipo
        ? ""
        : ""}</div>

      </div>
     

      <br />
    </div>
  );
}
