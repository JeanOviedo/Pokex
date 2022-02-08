import React, { Fragment } from "react";
import { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import Load from "./Load";
import { SacaLosTipos, GuardarPokemon } from "../Redux/Actions";
// import ProgressBar from "./ProgressBar";
import Poke from "../Icos/duck.svg";
import PokeAlto from "../Icos/tamano.png";
import PokeAncho from "../Icos/ancho.png";

import Poke1 from "../Pokes/1.png";
import Poke2 from "../Pokes/2.png";
import Poke3 from "../Pokes/3.png";
import Poke4 from "../Pokes/4.png";
import Poke5 from "../Pokes/5.png";
import Poke6 from "../Pokes/6.png";
import Poke7 from "../Pokes/7.png";
import Poke8 from "../Pokes/8.png";
import Poke9 from "../Pokes/9.png";
import Poke10 from "../Pokes/10.png";
import Poke11 from "../Pokes/11.png";
import Poke12 from "../Pokes/12.png";
import Poke13 from "../Pokes/13.png";
import Poke14 from "../Pokes/14.png";
import Poke15 from "../Pokes/15.png";
import Poke16 from "../Pokes/16.png";
import Poke17 from "../Pokes/17.png";
import Poke18 from "../Pokes/18.png";
import Poke19 from "../Pokes/19.png";
import Poke20 from "../Pokes/20.png";
import Poke21 from "../Pokes/21.png";
import Poke22 from "../Pokes/22.png";
import Poke23 from "../Pokes/23.png";
import Poke24 from "../Pokes/24.png";
import Poke25 from "../Pokes/25.png";
import Poke26 from "../Pokes/26.png";
import Poke27 from "../Pokes/27.png";
import Poke28 from "../Pokes/28.png";
import Poke29 from "../Pokes/29.png";
import Poke30 from "../Pokes/30.png";
import Poke31 from "../Pokes/31.png";
import Poke32 from "../Pokes/32.png";
import Poke33 from "../Pokes/33.png";
import Poke34 from "../Pokes/34.png";
import Poke35 from "../Pokes/35.png";

export default function New() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SacaLosTipos());
  }, [dispatch]);

  const [vida, setVida] = useState("0");
  const [nohayvida, setNoVida] = useState("");
  const [fuerza, setFuerza] = useState("0");
  const [name, setName] = useState("");
  const [defensa, setDefensa] = useState("0");
  const [tipo, setTipo] = useState("normal");
  const [velocidad, setVelocidad] = useState("0");
  const [anchura, setAnchura] = useState("0");
  const [altura, setAltura] = useState("0");
  const tipos = useSelector((state) => state.tipos);
  const modal = useSelector((state) => state.modal);
  const control = useSelector((state) => state.control);
  const [img, setImagen] = useState(Poke);

  let ide = Math.floor(Math.random() * 90000000) + 1000000;

  function handleSubmit(evento) {


    setImagen(Poke);
    setFuerza(0);
    setName("");
    setVida(0);
    setDefensa(0);
    setVelocidad(0);
    setAnchura(0);
    setAltura(0);
    
    evento.preventDefault();
    dispatch(
      GuardarPokemon({
        id: ide,
        nombre: name,
        vida: vida,
        fuerza: fuerza,
        defensa: defensa,
        tipo: [
          {
            name: tipo,
          },
        ],
        velocidad: velocidad,
        peso: anchura,
        altura: altura,
        img: img,
      })
    );
  }

  function PokeAl() {
    var valores = [
        Poke1,
        Poke2,
        Poke3,
        Poke4,
        Poke5,
        Poke6,
        Poke7,
        Poke8,
        Poke9,
        Poke10,
        Poke11,
        Poke12,
        Poke13,
        Poke14,
        Poke15,
        Poke16,
        Poke17,
        Poke18,
        Poke19,
        Poke20,
        Poke21,
        Poke22,
        Poke24,
        Poke25,
        Poke26,
        Poke27,
        Poke28,
        Poke29,
        Poke30,
        Poke31,
        Poke32,
        Poke33,
        Poke34,
        Poke35,
      ],
      Utilizar = valores[Math.floor(Math.random() * valores.length)];
    // do something with the selected value
    return Utilizar;
  }

  function handleSubmitTipo(event) {
    event.preventDefault();
    setTipo(event.target.value);
   // setImagen(PokeAl);
  }

  function handleSubmitVida(event) {
    event.preventDefault();
    setVida(event.target.value);
    setImagen(PokeAl);
  }

  function handleSubmitFuerza(event) {
    event.preventDefault();
    setFuerza(event.target.value);
    setImagen(PokeAl);
  }

  function handleSubmitDefensa(event) {
    event.preventDefault();
    setDefensa(event.target.value);
    setImagen(PokeAl);
  }

  function handleSubmitName(event) {
    event.preventDefault();
    setName(event.target.value);
  }

  function handleSubmitVelocidad(event) {
    event.preventDefault();
    setVelocidad(event.target.value);
    setImagen(PokeAl);
  }

  function handleSubmitAnchura(event) {
    event.preventDefault();
    setAnchura(event.target.value);
    setImagen(PokeAl);
  }

  function handleSubmitAltura(event) {
    event.preventDefault();
    setAltura(event.target.value);
    setImagen(PokeAl);
  }

  return (
    <Fragment>
      <br />
      <br />
      <br />
      <br />
      <br />
      <center>
        <h1>Agrega Pokemón {name}</h1>
      </center>
      <div className="detalles">
        <div className="detallesizquierda">
          {" "}
          <img
            src={img}
            alt={img}
            style={{
              width: "95%",
              textAlign: "right",
            }}
          />
        </div>

        <div className="detallesderecha">
          <form
            name="enviar"
            onSubmit={(evento) => {
              handleSubmit(evento);
            }}
          >
            <h3>Nombre:</h3>
            <div className="add">
              <input
                id="nombre"
                minLength="4"
                type="text"
                name="nombre"
                onChange={(evento) => {
                  handleSubmitName(evento);
                }}
                placeholder="Escriba nombre de pokemon"
                value={name}
              />
            </div>
            <h3>Vida: {vida} %</h3> <p>{nohayvida}</p>
            <div className="slidecontainer">
              <input
                type="range"
                min="0"
                max="100"
                className="slider"
                id="vida"
                name="vida"
                value={vida}
                onChange={(evento) => {
                  handleSubmitVida(evento);
                }}
                style={{ backgroundColor: "#99ff66" }}
              />
            </div>
            <h3>Fuerza: {fuerza} %</h3>
            <div className="slidecontainer">
              <input
                type="range"
                min="0"
                max="100"
                value={fuerza}
                className="slider"
                id="fuerza"
                name="fuerza"
                style={{ backgroundColor: "#F99F4B" }}
                onChange={(evento) => {
                  handleSubmitFuerza(evento);
                }}
              />
            </div>
            <h3>Defensa: {defensa} %</h3>
            <div className="slidecontainer">
              <input
                type="range"
                min="0"
                value={defensa}
                max="100"
                className="slider"
                id="defensa"
                name="defensa"
                style={{ backgroundColor: "#4BF9F2" }}
                onChange={(evento) => {
                  handleSubmitDefensa(evento);
                }}
              />
            </div>
            <h3>Velocidad: {velocidad} %</h3>{" "}
            <div className="slidecontainer">
              <input
                type="range"
                min="0"
                max="100"
                value={velocidad}
                style={{ backgroundColor: "#F94BAF" }}
                className="slider"
                name="velocidad"
                id="velocidad"
                onChange={(evento) => {
                  handleSubmitVelocidad(evento);
                }}
              />
            </div>
            <h3>
              <img src={PokeAlto} style={{ width: "7%" }} />
              Altura:
              <input
                id="altura"
                type="range"
                name="altura"
                onChange={(evento) => {
                  handleSubmitAltura(evento);
                }}
                placeholder="Escriba altura"
                value={altura}
                style={{ width: "65%" }}
              />{" "}
              {altura}
              CM
            </h3>
            <h3>
              <img src={PokeAncho} style={{ width: "7%" }} />
              Ancho:
              <input
                id="anchura"
                type="range"
                name="anchura"
                onChange={(evento) => {
                  handleSubmitAnchura(evento);
                }}
                placeholder="Escriba altura"
                value={anchura}
                style={{
                  width: "65%",
                  backgroundColor: "#dd1924",
                }}
              />{" "}
              {anchura}
              CM
            </h3>
            <br />
            <h3>
              Tipo: {tipo}
              <div className="iconito">
                <img
                  src={require("../../src/Icos/" + tipo + ".png")}
                  className="iconitoIMG"
                  alt={tipos.name}
                />
              </div>
            </h3>
            <input type="hidden" id="img" name="img" value={img} />{" "}
            {console.log(tipos)}
            <div
              className="radiobuttons-container"
              onChange={(evento) => {
                handleSubmitTipo(evento);
              }}
            >
              {" "}
              {tipos
                ? tipos.map((tipos) => (
                    <div key={Math.random(789)}>
                      <label className="mdl-radio">
                        <img
                          src={require("../../src/Icos/" + tipos.name + ".png")}
                          style={{ width: "25%" }}
                          alt={tipos.name}
                        />
                        <input
                          className="mdl-radio__button"
                          type="radio"
                          name="tipo"
                          id={tipos.name}
                          value={tipos.name}
                        />{" "}
                        {tipos.name}{" "}
                      </label>
                      <br></br>
                    </div>
                  ))
                : ""}{" "}
            </div>
            {control == true ? <Redirect to="/pokemons" /> : ""}
            <center>
              {" "}
              {name.length >= 4 &&
              velocidad >= 5 &&
              fuerza >= 5 &&
              vida >= 5 &&
              defensa >= 5 &&
              altura >= 5 &&
              anchura >= 5 ? (
                <button className="botonsearch" type="submit">
                  Guardar
                </button>
              ) : (
                <button disabled className="botonsearchazul">
                  Llenar todo
                </button>
              )}{" "}
            </center>
          </form>
        </div>
      </div>
      {/* ____________________________MODAL_____________________________ */}
      {modal.visible === true ? <Modal /> : ""}
      {/* ____________________________MODALFIN_____________________________ */}{" "}
    </Fragment>
  );
}
