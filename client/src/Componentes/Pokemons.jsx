import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Load from "../Icos/loader.gif";

import { useSelector, useDispatch } from "react-redux";

import {
  ActionTodosPokemons,
  ActionBuscaPokemonsPorName,
  ActionCerrarCard,
  SacaLosTipos,
  OrdenaPorTipo,
} from "../Redux/Actions";
import CardPokemon from "./CardPokemon";

export default function Pokemons() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  let [ActualPage, setPagina] = useState(0);

  // const [quitatexto, setTexto] = useState("No Existe Pokemon");
  const pokemones = useSelector((state) => state.pokemonios);
  const tipos = useSelector((state) => state.tipos);
  const pokemonesbusqueda = useSelector((state) => state.pokemoniobuscado);
  const loading = useSelector((state) => state.loading);
  const pokemonestodosmuestra = useSelector((state) => state.pokemonestodosmuestra);
  const pokemonesbusquedacard = useSelector((state) => state.pokemonbuscadocard );
  const [Orden, setOrden] = useState("");

  console.log("Resultado: ", pokemones);

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(ActionBuscaPokemonsPorName(name));
    //setPagina(0);
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
    //setPagina(0);
    //console.log(name);
  }

  function handleFiltraPorTipo(event) {
    event.preventDefault();
    if (event.target.value != "") {
      dispatch(OrdenaPorTipo(event.target.value));
      setPagina(0);
    }
  }

  useEffect(() => {
    if (!pokemones.length && !loading.loading) {
      dispatch(ActionTodosPokemons());
      dispatch(SacaLosTipos());
    }
  }, [dispatch, pokemones, loading, tipos]);

  //--------------------PAGINADOR---------------------

  let [ActualPagina, setActualPagina] = useState(0);
  //let [CuentaTotal, setCuentaTotal] = useState([]); //Contamos si array dividido es menor a 8  con estado para no mostrar siguiente
  let siguiente = 1;

  const Paginado = () => {
    if (siguiente === 1 && ActualPagina === 0) {
      if (pokemones.length) {
        siguiente = siguiente + 9;

        return pokemones.slice(ActualPagina, 9);
      }
    }
    if (ActualPagina >= 9) {
      if (pokemones.length) {
        //return pokemones.slice(ActualPagina, ActualPagina + 12);
        return pokemones.slice(ActualPagina, ActualPagina + 9);
      }
    }
  };

  const SiguientePage = () => {
    if (pokemones.length > ActualPagina + 9) {
      if (siguiente === 9) {
        ActualPagina = ActualPagina + 9;
        setActualPagina(ActualPagina);
      } else {
        setActualPagina(ActualPagina + 12);
      }
    }
  };

  const AnteriorPage = () => {
    if (ActualPagina > 9) {
      setActualPagina(ActualPagina - 12);
    }
    if (ActualPagina === 9) {
      setActualPagina(ActualPagina - 9);
    }

    // if (ActualPagina <= 5) {
    //   setActualPagina(ActualPagina - 4);
    // }
  };

  const PokemonesConPaginador = Paginado();

  //--------------------FIN PAGINADOR---------------------

  return (
    <Fragment>
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <br /> <h1>Pokemones</h1> */}
      <div className="Search">
        <select
          onChange={(event) => handleFiltraPorTipo(event)}
          name="cars"
          id="cars"
          form="carform"
        >
          <option value="Tipos" value="">
            Tipos
          </option>
          {tipos
            ? tipos.map((lostipos) => {
                return (
                  <option id={lostipos.id} value={lostipos.name}>
                    {lostipos.name}
                  </option>
                );
              })
            : ""}
        </select>

        <select name="cars" id="cars" form="carform">
          <option value="volvo">A-Z</option>
          <option value="saab">Z-A</option>
          <option value="saab">Saab</option>
        </select>

        <input
          id="search"
          value={name}
          type="text"
          placeholder="Escriba el nombre del Pokemon..."
          onChange={(e) => {
            handleInputChange(e);
          }}
        />
        {name ? (
          <button
            className="botonsearch"
            type="submit"
            onClick={(evento) => {
              handleSubmit(evento);
            }}
          >
            Buscar
          </button>
        ) : (
          <button className="botonsearchazul" type="submit">
            Escriba
          </button>
        )}
      </div>
      <ul className="cards" key={Math.random(5)}>
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
                <Link to={`/pokemons/${pokemonesb.id}`}>
                  <CardPokemon
                    id={pokemonesb.id}
                    nombre={pokemonesb.nombre}
                    img={pokemonesb.img}
                    tipo={pokemonesb.tipo}
                    vida={pokemonesb.vida}
                    fuerza={pokemonesb.fuerza}
                    defensa={pokemonesb.defensa}
                    velocidad={pokemonesb.velocidad}
                    altura={pokemonesb.altura}
                    peso={pokemonesb.peso}
                  />
                </Link>
              </Fragment>
            );
          })
        ) : pokemonesbusqueda == "No Existe" &&
          pokemonesbusquedacard == true ? (
          <Fragment>
            <h1>No se encontro Pokemon o campo vacío</h1>
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

        {
          /*pokemones && pokemonestodosmuestra == true
          ? pokemones.map((pokemones) => {  */
          PokemonesConPaginador && pokemonestodosmuestra == true
            ? PokemonesConPaginador.map((pokemones) => {
                //console.log( "pokemons component PAGINATOR",PokemonesConPaginador);
                return (
                  <Link to={`/pokemons/${pokemones.id}`}>
                    <CardPokemon
                      id={pokemones.id}
                      nombre={pokemones.nombre}
                      img={pokemones.img}
                      tipo={pokemones.tipo}
                      fuerza={pokemones.fuerza}
                      defensa={pokemones.defensa}
                      velocidad={pokemones.velocidad}
                      altura={pokemones.altura}
                      peso={pokemones.peso}
                    />
                  </Link>
                );
              })
            : console.log("no poruqmones", pokemones)
        }
      </ul>

      {/* ____________________________PAGINANDO_____________________________ */}
      {ActualPagina <= 9 &&
      loading.loading == false &&
      pokemonesbusquedacard == false ? (
        <div className="paginar">
          <button className="paginado" onClick={SiguientePage}>
            Siguiente
          </button>
        </div>
      ) : pokemonestodosmuestra == true &&
        loading.loading == false &&
        ActualPagina >= 10 &&
        pokemonesbusquedacard == false ? (
        <div className="paginar">
          <button className="paginado" onClick={AnteriorPage}>
            Anterior
          </button>
          <button className="paginado" onClick={SiguientePage}>
            Siguiente
          </button>
        </div>
      ) : (
        ""
      )}
      {/* ____________________________PAGINANDO_____________________________ */}
    </Fragment>
  );
}
