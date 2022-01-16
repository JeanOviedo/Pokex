import React from "react";
import { Fragment } from "react";
import Poke from "../poke.png";
import Entre from "../entre.png";
import IconoShop from "../Icos/shop.png";
import IconoPika from "../Icos/pika.png";
import IconoMail from "../Icos/Mail.png";
import IconoEntre from "../Icos/entre.png";
//import Search from "./Search";
//import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <Fragment>
      {" "}
      <div className="hero">
        <br></br>
        <br></br>
        <div className="left">
          <button className="button1">
            <center>
              <img className="btnimg " src={IconoPika} alt="" />
              Pokemon's
            </center>
          </button>
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
      <br /> <br />
      <br />
      <br />
      <br /> <br />
      <br />
    </Fragment>
  );
}
