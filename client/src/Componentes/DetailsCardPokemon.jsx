import React, { Fragment } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ActionDetallesPokemonsPorId } from "../Redux/Actions";
import ProgressBar from "./ProgressBar";

export default function DetailsCardPokemon() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [elid] = useState(id);

  useEffect(() => {
    dispatch(ActionDetallesPokemonsPorId(elid));
  }, [dispatch, elid]);

  const Datos = useSelector((state) => state.pokemondetalles);
  console.log(Datos);
  return (
    <Fragment>
      <br />
      <br />
      <br />
      <br />
      <br />
      <center>
        <h1>{Datos.nombre}</h1>
      </center>
      <div key={Datos.id} className="detalles">
        <div className="detallesizquierda">
          {" "}
          <img
            src={`${Datos.img}`}
            alt={Datos.nombre}
            className="card-image-big"
          />
        </div>
        <div className="detallesderecha">
          <h3>Vida:</h3>{" "}
          <ProgressBar
            progreso={Datos.vida}
            height={20}
            bgcolor="#99ff66"
          ></ProgressBar>
          <h3>Fuerza:</h3>
          <ProgressBar
            progreso={Datos.fuerza}
            height={20}
            bgcolor="#F99F4B"
          ></ProgressBar>
          <h3>Defensa:</h3>{" "}
          <ProgressBar
            progreso={Datos.defensa}
            height={20}
            bgcolor="#4BF9F2"
          ></ProgressBar>
          <h3> Velocidad:</h3>{" "}
          <ProgressBar
            progreso={Datos.velocidad}
            height={20}
            bgcolor="#F94BAF"
          ></ProgressBar>
          <h3>Altura:</h3> {Datos.altura} CM
          <br />
          <h3>Anchura:</h3> {Datos.peso} CM
          <br />
          <br />
          <div className="iconitos">
            {Datos.tipo
              ? Datos.tipo.map((tipos) => (
                  <div className="iconito">
                    <img
                      src={require("../../src/Icos/" + tipos.name + ".png")}
                      className="iconitoIMG"
                      alt={tipos.name}
                    />
                  </div>
                ))
              : !Datos.tipo
              ? ""
              : ""}
          </div>
        </div>

        <br />
      </div>
    </Fragment>
  );
}
