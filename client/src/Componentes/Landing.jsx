import React from "react";
import { Fragment } from "react";
import Poke from "../poke.png";
import Entre from "../entre.png";
import IconoShop from "../Icos/shop.png";
import IconoPika from "../Icos/pika.png";
import IconoMail from "../Icos/Mail.png";
import Wed from "../Icos/wed.svg";
import IconoEntre from "../Icos/entre.png";
import { Link } from "react-router-dom";
//import Search from "./Search";

export default function Landing() {
  return (
    <Fragment>
      {" "}
      <div className="hero">
        <br></br>
        <br></br>
        <div className="left">
          <Link to="/pokemons">
            {" "}
            <button className="button1">
              <center>
                <img className="btnimg " src={IconoPika} alt="" />
                Pokemons
              </center>
            </button>
          </Link>
          <button className="button1">
            <center>
              <img className="btnimg" src={IconoEntre} alt="" />
              Trainers
            </center>
          </button>
        </div>

        <div className="center">
          {" "}
          <img id="Entre" src={Entre} className="entrenador" alt="" />
          <img id="Poke" src={Poke} className="App-logo" alt="" />
        </div>

        <div className="right">
          <button className="button2">
            <img className="btnimgshop" src={IconoShop} alt="" />
            Tienda
          </button>
          <button className="button2">
            <img className="btnimgcontacto" src={IconoMail} alt="" />
            Contacto
          </button>
        </div>
        <div className="linea"></div>
      </div>
      <br />
      <br />
      {/* ________________________________SECCION2_____________________________________________________ */}
      <div className="hero2">
        <div className="left">
          <h1>Encuentra tu Pokemon Favorito</h1>
          <Link to="/pokemons"> </Link>
          <p>
            Encuentra a Tu Pokémon favorito . Encuentra, no sólo a ese Ditto, a
            ese Dratini o a ese Charmander, sino tu lugar de Pokémon online
            favorito.
          </p>
          <p>¡Hazte con todos los Pokemons y conoce sus detalles!</p>
          <center>
            {" "}
            <Link to="/pokemons">
              <button className="buttonbig">
                <center>Buscar Pokemon</center>
              </button>
            </Link>
          </center>
        </div>

        <div className="right">
          <img className="img-derecha" src={Wed} alt="" />
        </div>
      </div>
    </Fragment>
  );
}
