import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Pokemons({ pokemones }) {
  return (
    <Fragment>
      <br />
      <br />
      <br />
      <br /> <h1>Pokemones</h1>
      <div className="Search">
        <input
          id="search"
          value=""
          type="text"
          placeholder="Buscar Pokemon..."
        />
        <button className="botonsearch" type="submit">
          Buscar
        </button>
      </div>
      <ul className="cards">
        {pokemones
          ? pokemones.map((pokemones) => {
              console.log("pokemons component", pokemones);
              return (
                <Link to={`/pokemons/${pokemones.id}`}>
                  <div className="card" key={pokemones.id}>
                    <center>
                      <img src={pokemones.img} className="card-image" />
                      <br />
                      <h1>
                        {" "}
                        {pokemones.nombre} {pokemones.tipo.name}
                      </h1>
                      <div className="iconito">
                        {pokemones.tipo.map((pokemonestipo) => (
                          <img
                            src={require("../../src/Icos/" +
                              pokemonestipo.name +
                              ".png")}
                            className="iconitoIMG"
                          />
                        ))}
                        <br />
                      </div>
                    </center>
                  </div>
                </Link>
              );
            })
          : console.log("no poruqmones", pokemones)}
      </ul>
    </Fragment>
  );
}
