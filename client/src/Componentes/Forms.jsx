import React, {Fragment, useEffect, useState} from "react";
// import { connect } from "react-redux";
// import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux";
import {ActionBuscaPokemonsPorName, ActionCerrarCard, OrdenaPorTipo} from "../Redux/Actions";

export default function Forms({tipos, name2}) {


    const dispatch = useDispatch();
    let [name, setName] = useState(name2);
    const pokemonesbusqueda = useSelector((state) => state.pokemoniobuscado);
    // const lostipos = useSelector((state) => state.tipos);


    function handleInputChange(event) {
        event.preventDefault();
        setName(event.target.value.toLowerCase());
        // setPagina(0);
        // console.log(name);
    }

    function handleFiltraPorTipo(event) {
        event.preventDefault();
        let datos = event.target.value;
        if (datos != "") {
            dispatch(OrdenaPorTipo(datos));

            // setPagina(0);
            console.log("DATA TIPOS+++", datos);
        }
    }

    function handleFiltraPorTipo(event) {
        event.preventDefault();
        let datos = event.target.value;
        if (datos != "") {
            dispatch(OrdenaPorTipo(datos));

            // setPagina(0);
            console.log("DATA TIPOS+++", datos);
        }
    }

    function handleInputChange(event) {
        event.preventDefault();
        setName(event.target.value.toLowerCase());
        // setPagina(0);
        // console.log(name);
    }

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(ActionBuscaPokemonsPorName(name));
        // setPagina(0);
        setName("");
    }

    return (
        <div className="Search">
            <select onChange={
                    (event) => handleFiltraPorTipo(event)
                }
                name="Origen"
                id="Origen">
                <option value="Tipos" value="">
                    Tipos
                </option>
                {
                tipos ? tipos.map((lostipos) => {
                    return (
                        <option id={
                                lostipos.id
                            }
                            value={
                                lostipos.name
                        }>
                            {
                            lostipos.name
                        }
                            {" "} </option>
                    );
                }) : ""
            }
                {" "} </select>
            <select name="cars" id="cars" form="carform">
                <option value="volvo">A-Z</option>
                <option value="saab">Z-A</option>
                <option value="saab">Saab</option>
            </select>
            <input id="search"
                value={name}
                type="text"
                placeholder="Escriba el nombre del Pokemon..."
                onChange={
                    (e) => {
                        handleInputChange(e);
                    }
                }/>{" "}
            {
            name ? (
                <button className="botonsearch" type="submit"
                    onClick={
                        (evento) => {
                            handleSubmit(evento);
                        }
                }>
                    Buscar
                </button>
            ) : (
                <button className="botonsearchazul" type="submit">
                    Escriba
                </button>
            )
        }
            {" "} </div>
    );
}
