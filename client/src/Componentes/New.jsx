import React, {Fragment} from "react";
import {useEffect} from "react";

import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {SacaLosTipos} from "../Redux/Actions";
// import ProgressBar from "./ProgressBar";
import Poke from "../Icos/duck.svg";
export default function New() {

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(SacaLosTipos());

    }, [dispatch]);

    
    const [vida, setVida] = useState("0");
    const [fuerza, setFuerza] = useState("0");
    const [name, setName] = useState("");
    const [defensa, setDefensa] = useState("0");
    const [velocidad, setVelocidad] = useState("0");
    const tipos = useSelector((state) => state.tipos);
    function handleSubmitVida(event) {
        event.preventDefault();
        setVida(event.target.value);

    }

    function handleSubmit(event) {
        event.preventDefault();
        setFuerza(event.target.value);
    }

    function handleSubmitFuerza(event) {
        event.preventDefault();
        setFuerza(event.target.value);
    }

    function handleSubmitDefensa(event) {
        event.preventDefault();
        setDefensa(event.target.value);
    }

    function handleSubmitName(event) {
        event.preventDefault();
        setName(event.target.value);
    }


    function handleSubmitVelocidad(event) {
        event.preventDefault();
        setVelocidad(event.target.value);
    }


    
   
    return (
        <Fragment>
            <br/>
            <br/>
            <br/><br/><br/>
            <center>
                <h1>
                    Agrega Pokemón {name}</h1>
            </center>
            <div className="detalles">
                <div className="detallesizquierda">
                    {" "}


                    <img src={Poke}
                        alt={Poke}
                        style={
                            {
                                width: "95%",
                                textAlign: "right"
                            }
                        }/>
                </div>
                <div className="detallesderecha">
                    <h3>Nombre:
                    </h3>
                    <div className="add"><input id="search" type="text"
                            onChange={
                                (evento) => {
                                    handleSubmitName(evento);
                                }
                            }
                            placeholder="Escriba nombre de pokemon"
                            value={name}/>


                    </div>
                <h3>Vida: {vida} </h3>

                <div className="slidecontainer">
                    <input type="range" min="5" max="100" className="slider" id="myRange"
                        onChange={
                            (evento) => {
                                handleSubmitVida(evento);
                            }
                        }/>
                </div>
            <h3>Fuerza: {fuerza}</h3>
            <div className="slidecontainer">
                <input type="range" min="5" max="100" className="slider" id="myRange"
                    onChange={
                        (evento) => {
                            handleSubmitFuerza(evento);
                        }
                    }/>
            </div>
        <h3>Defensa: {defensa}</h3>

        <div className="slidecontainer">
            <input type="range" min="5" max="100" className="slider" id="myRange"
                onChange={
                    (evento) => {
                        handleSubmitDefensa(evento);
                    }
                }/>
        </div>
    <h3>
        Velocidad: {velocidad}</h3>
    {" "}
    <div className="slidecontainer">
        <input type="range" min="5" max="100" className="slider" id="myRange"
            onChange={
                (evento) => {
                    handleSubmitVelocidad(evento);
                }
            }/>
    </div>
<h3>Altura:
</h3>
{""}
CM
<br/>
<h3>Anchura:</h3>
{
"Datos.peso"}
CM
<br/>
<h3>Tipo:</h3>
{
console.log(tipos)}
<div  className="radiobuttons-container">
    {
    tipos ? tipos.map((tipos) => (
        <div ><label className="mdl-radio">
            <img src={
                    require("../../src/Icos/" + tipos.name + ".png")
                }  style={{width: "20%"}}
               
                alt={
                    tipos.name
                }/><input  className="mdl-radio__button"  type="radio" name={ tipos.name} value="pintura"/> {
                tipos.name
            }</label><br></br>
        </div>
    )) : ""
} </div>


<center> {
    name ? (
        <button className="botonsearch" type="submit"
            onClick={
                (evento) => {
                    handleSubmit(evento);
                }
        }>
            Guardar
        </button>
    ) : (
        <button className="botonsearchazul" type="submit">
            Llenar todo
        </button>
    )
} </center></div></div></Fragment>


    );
}
