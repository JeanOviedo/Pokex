import React from "react";
import { Fragment } from "react/cjs/react.development";
import Poke from "../poke.png";
import Entre from "../entre.png";
import IconoShop from "../Icos/shop.png";
import IconoPika from "../Icos/pika.png";
import IconoMail from "../Icos/Mail.png";
import IconoEntre from "../Icos/entre.png";
//import Search from "./Search";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <Fragment>
      {" "}
      <div className="hero">
        <div className="left">
          <button className="button1">
            <img class="btnimg " src={IconoPika} alt="" />
            Pokemones
          </button>
          <button className="button1">
            <img class="btnimg" src={IconoEntre} alt="" />
            Entrenadores
          </button>
        </div>

        <div className="center">
          {" "}
          <img id="Entre" src={Entre} className="entrenador" alt="" />
          <img id="Poke" src={Poke} className="App-logo" alt="" />
        </div>

        <div className="right">
          <button className="button2">
            <img class="btnimgshop" src={IconoShop} alt="" />
            Tienda
          </button>
          <button className="button2">
            <img class="btnimgcontacto" src={IconoMail} alt="" />
            Contacto
          </button>
        </div>
        <div className="linea"></div>
      </div>
    </Fragment>
  );
}
