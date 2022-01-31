import React, {Fragment} from "react";
import {useEffect} from "react";

import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {SacaLosTipos} from "../Redux/Actions";
// import ProgressBar from "./ProgressBar";
import Poke from "../Icos/duck.svg";
import PokeAlto from "../Icos/tamano.png";
import PokeAncho from "../Icos/ancho.png";
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
    const [anchura, setAnchura] = useState("0");
    const [altura, setAltura] = useState("0");
    const tipos = useSelector((state) => state.tipos);


    function handleSubmit(evento) {
        evento.preventDefault();
    
    }


    function handleSubmitVida(event) {
        event.preventDefault();
        setVida(event.target.value);

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


    
    function handleSubmitAnchura(event) {
        event.preventDefault();
        setAnchura(event.target.value);
    }

    function handleSubmitAltura(event) {
        event.preventDefault();
        setAltura(event.target.value);
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
                    <form name="enviar">
                    <h3>Nombre:
                    </h3>
                    <div className="add"><input id="search" type="text" name="nombre"
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
                    <input type="range" min="5" max="100" className="slider" id="vida" name="vida"
                   
                    value={vida}  
                        onChange={
                            (evento) => {
                                handleSubmitVida(evento);
                            }
                        }   style={
                            { backgroundColor:"#99ff66"}} />
                </div>
            <h3>Fuerza: {fuerza}</h3>
            <div className="slidecontainer">
                <input type="range" min="5" max="100" className="slider" id="fuerza" name="fuerza" style={
                            { backgroundColor:"#F99F4B"}}
                    onChange={
                        (evento) => {
                            handleSubmitFuerza(evento);
                        }
                    }/>
            </div>
        <h3>Defensa: {defensa}</h3>

        <div className="slidecontainer">
            <input type="range" min="5" max="100" className="slider" id="defensa" name="defensa" style={
                            { backgroundColor:"#4BF9F2"}}  
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
        <input type="range" min="5" max="100"  style={
                            { backgroundColor:"#F94BAF"}}  className="slider" name="velocidad" id="velocidad"
            onChange={
                (evento) => {
                    handleSubmitVelocidad(evento);
                }
            }/>
    </div>
<h3> <img src={PokeAlto}  style={{width: "7%"}} /> Altura:   
 <input  id="altura" type="range" name="altura"
                            onChange={
                                (evento) => {
                                    handleSubmitAltura(evento);
                                }
                            }
                            placeholder="Escriba altura"
                            value={altura}  style={
                                {
                                    width: "65%",
                                   
                                }} /> {altura} CM
</h3> 


<h3><img src={PokeAncho}  style={{width: "7%"}} /> Ancho:   <input  id="anchura" type="range" name="anchura"
                            onChange={
                                (evento) => {
                                    handleSubmitAnchura(evento);
                                }
                            }
                            placeholder="Escriba altura"
                            value={anchura}  style={
                                {
                                    width: "65%",
                                    backgroundColor:"#dd1924",
                                   
                                }}/> {anchura} CM</h3>


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
                }/><input  className="mdl-radio__button"  type="radio" name="tipo" value={tipos.name}/> {
                tipos.name
            }</label><br></br>
        </div>
    )) : ""
} </div>


<center> {
    name ? (
        <button className="botonsearch" type="submit"
            onSubmit={
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
} </center> </form></div></div></Fragment>


    );
}
