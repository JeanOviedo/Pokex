import { Fragment } from "react/cjs/react.production.min";
import "./App.css";
import Landing from "./Componentes/Landing";
import Navbar from "./Componentes/Navbar";
import NavbarNoLinks from "./Componentes/NavbarNoLinks";
import Pokemons from "./Componentes/Pokemons";
import Contacto from "./Componentes/Contacto";
import { Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { ActionBuscaPokemons } from "./Redux/Actions";

let urlweb = window.location.pathname;
function App() {
  const dispatch = useDispatch();
  const pokemones = useSelector((state) => state.pokemonios);
  
  console.log("Resultado: ", pokemones);

  useEffect(() => {
    dispatch(ActionBuscaPokemons());
  }, [dispatch]);

  return (
    <Fragment>
   
        <Navbar></Navbar>
     
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>

        <Route exact path="/pokemons">
          <Pokemons pokemones={pokemones} />
        </Route>
        <Route exact path="/contacto">
          <Contacto />
        </Route>
        {/* 
      
        
        <Route path="/pokemones/:id"  /> */}
      </Switch>
    </Fragment>
  );
}

export default App;
