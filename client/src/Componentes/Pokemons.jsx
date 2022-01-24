import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Load from "../Icos/loader.gif";

import { useSelector, useDispatch } from "react-redux";

import {
  ActionTodosPokemons,
  ActionBuscaPokemonsPorName,
  ActionCerrarCard,
} from "../Redux/Actions";
import CardPokemon from "./CardPokemon";

export default function Pokemons() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  // const [quitatexto, setTexto] = useState("No Existe Pokemon");
  const pokemones = useSelector((state) => state.pokemonios);
  const pokemonesbusqueda = useSelector((state) => state.pokemoniobuscado);
  const loading = useSelector((state) => state.loading);
  const pokemonestodosmuestra = useSelector(
    (state) => state.pokemonestodosmuestra
  );
  const pokemonesbusquedacard = useSelector(
    (state) => state.pokemonbuscadocard
  );

  console.log("Resultado: ", pokemones);

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(ActionBuscaPokemonsPorName(name));
    //setCurrentPage(0);
    setName("");
  }

  function handleSubmitCerrar(event) {
    event.preventDefault();
    dispatch(ActionCerrarCard());
    //setTexto("");
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
    }
  }, [dispatch, pokemones, loading]);

  return (
    <Fragment>
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <br /> <h1>Pokemones</h1> */}
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
        {loading.loading == true ? (
          <div>
            <img src={Load} className="load" alt={Load} />
          </div>
        ) : (
          ""
        )}

        {/* ____________________________BUSCANDO_____________________________ */}
        {pokemonesbusqueda != "No Existe" && pokemonesbusquedacard == true ? (
          pokemonesbusqueda.map((pokemonesb) => {
            console.log("pokemons component", pokemonesb);

            return (
              <Fragment>
                <button
                  className="close"
                  type="submit"
                  onClick={(evento) => {
                    handleSubmitCerrar(evento);
                  }}
                >
                  X
                </button>
                <br></br>
                <Link to={`/pokemons/${pokemones.id}`}>
                  <CardPokemon
                    id={pokemonesb.id}
                    nombre={pokemonesb.nombre}
                    img={pokemonesb.img}
                    tipo={pokemonesb.tipo}
                  />
                </Link>
              </Fragment>
            );
          })
        ) : pokemonesbusqueda == "No Existe" &&
          pokemonesbusquedacard == true ? (
          <Fragment>
            <h1>No se encontro Pokemon</h1>
            <button
              className="close"
              type="submit"
              onClick={(evento) => {
                handleSubmitCerrar(evento);
              }}
            >
              X
            </button>{" "}
          </Fragment>
        ) : (
          ""
        )}

        {/* ____________________________MOSTRANDO_____________________________ */}

        {pokemones && pokemonestodosmuestra == true
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
