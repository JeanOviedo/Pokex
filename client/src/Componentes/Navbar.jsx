import React from "react";
import Logo from "../logo.png";
//import Search from "./Search";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <header className="navbar">
      <div className="logodiv">
        {" "}
        <Link to="/"> 
        {" "}
        <img id="logo" src={Logo} className="logo" alt="" /></Link>
      </div>
      <nav className="logoder">
        <ul className="menu">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/pokemons">Pokemons</Link>
          </li>
          <li>
            <Link to="/pokemons">Entrenadores</Link>
          </li>
          <li>
            <Link to="/pokemons">Tienda</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
