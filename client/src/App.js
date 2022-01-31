import { Fragment } from "react/cjs/react.production.min";
import "./App.css";
import Landing from "./Componentes/Landing";
import Navbar from "./Componentes/Navbar";
import NavbarNoLinks from "./Componentes/NavbarNoLinks";
import Pokemons from "./Componentes/Pokemons";
import Contacto from "./Componentes/Contacto";
import { Route, Switch } from "react-router-dom";
import DetailsCardPokemon from "./Componentes/DetailsCardPokemon";
import New from "./Componentes/New";
//import { useSelector, useDispatch } from "react-redux";
//import React, { useEffect, useState } from "react";
//import { ActionBuscaPokemons,ActionBuscaPokemonsPorName } from "./Redux/Actions";

let urlweb = window.location.pathname;
function App() {
  //const dispatch = useDispatch();
  //const pokemones = useSelector((state) => state.pokemonios);

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   dispatch(ActionBuscaPokemonsPorName(name));
  //   //setCurrentPage(0);
  //   //setName("");
  // }

  // useEffect(() => {
  //   dispatch(ActionBuscaPokemons());
  // }, [dispatch]);

  return (
    <Fragment>
      <Navbar></Navbar>

      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>

        <Route exact path="/pokemons">
          <Pokemons />
        </Route>
        <Route exact path="/contacto">
          <Contacto />
        </Route>
        <Route exact path="/addpokemon">
          <New />
        </Route>
        <Route path="/pokemons/:id">
          <DetailsCardPokemon />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
