import React from "react";
import { Link } from "react-router-dom";

export default function Pokemons({ pokemones }) {
  return (
    <ul>
      <br /> <br />
      <br />
      <br />
      <h1>Pokemones</h1>
      {pokemones
        ? pokemones.map((pokemones) => {
            console.log("pokemons component", pokemones);
            return (
              <div className="card" key={pokemones.name}>
                <center>
                  <br />
                  <br />
                  <br /> <br /> <br /> <br />
                  <h1> {pokemones.name}</h1>
                  <Link to={`/pokemons/${pokemones.id}`}>
                    <button className="boton">Detalles {pokemones.name}</button>
                  </Link>
                </center>
              </div>
            );
          })
        : console.log("no poruqmones", pokemones)}
    </ul>
  );
}
