import React from "react";
// import { connect } from "react-redux";
// import { Link } from 'react-router-dom';

export default function CardPokemon({
  nombre,
  id,
  img,
  tipo,
  vida,
  fuerza,
  defensa,
  velocidad,
  altura,
  peso,
}) {

  // function handleModalOn(event) {
  //   event.preventDefault();

  //     dispatch(OrdenaPorTipo(event.target.value));
  //     setPagina(0);
    
  // }

  return (
    <div key={Math.random(5)}  className="card">
      <div>
        {" "}
        <h1>{nombre}</h1>
        <img src={`${img}`} alt={nombre} className="card-image" />
        <div className="iconitos">
          {tipo
            ? tipo.map((tipos) => (
                <div key={Math.random(5)} className="iconito">
                  <img 
                    src={require("../../src/Icos/" + tipos.name + ".png")}
                    className="iconitoIMG"
                    alt={tipos.name}
                  />
                </div>
              ))
            : !tipo
            ? ""
            : ""}
        </div>
      </div>

      <br />
    </div>
  );
}
