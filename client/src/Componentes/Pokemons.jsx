import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Load from "../Icos/loader.gif";

import { useSelector, useDispatch } from "react-redux";

import {
  ActionTodosPokemons,
  ActionBuscaPokemonsPorName,
} from "../Redux/Actions";
import CardPokemon from "./CardPokemon";

export default function Pokemons() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const pokemones = useSelector((state) => state.pokemonios);
  const loading = useSelector((state) => state.loading);

  console.log("Resultado: ", pokemones);

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(ActionBuscaPokemonsPorName(name));
    //setCurrentPage(0);
    setName("");
  }

  function handleInputChange(event) {
    event.preventDefault();
    setName(event.target.value.toLowerCase());
    //setCurrentPage(0);
    //console.log(name);
  }

  useEffect(() => {
    if (!pokemones.length && !loading.loading) {
      dispatch(ActionTodosPokemons());
      //dispatch(getByTypes());
    }
  }, [dispatch, pokemones, loading]);

  return (
    <Fragment>
      <br />
      <br />
      <br />
      <br /> <h1>Pokemones</h1>
      <div className="Search">
        <input
          id="search"
          value={name}
          type="text"
          placeholder="Buscar..."
          onChange={(e) => {
            handleInputChange(e);
          }}
        />
        <button
          className="botonsearch"
          type="submit"
          onClick={(evento) => {
            handleSubmit(evento);
          }}
        >
          Buscar
        </button>
      </div>
      <ul className="cards">
        {loading.loading == true ? <div><img src={Load} className="load" alt={Load}/></div> : ""}

        {pokemones
          ? pokemones.map((pokemones) => {
              console.log("pokemons component", pokemones);
              return (
                <Link to={`/pokemons/${pokemones.id}`}>
                  <CardPokemon
                    id={pokemones.id}
                    nombre={pokemones.nombre}
                    img={pokemones.img}
                    tipo={pokemones.tipo}
                  />
                </Link>
              );
            })
          : console.log("no poruqmones", pokemones)}
      </ul>
    </Fragment>
  );
}
