import React, {Fragment, useEffect, useState} from "react";
// import { connect } from "react-redux";
// import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux";
import {ActionBuscaPokemonsPorName, SeletMostrarTodos, ActivarLoading, PokemonesOrdenados} from "../Redux/Actions";

export default function Forms({tipos, name2, pokemones}) {

    let tipo = useSelector((state) => state.tipodeorden);
    const dispatch = useDispatch();
    let [name, setName] = useState(name2);
    const pokemonesbusqueda = useSelector((state) => state.pokemoniobuscado);
    // const lostipos = useSelector((state) => state.tipos);


    // useEffect(() => {
    //     if (name) {

    //         dispatch(SacaLosTipos());
    //     }
    // }, [dispatch,  tipos]);

    function handleInputChange(event) {
        event.preventDefault();
        setName(event.target.value.toLowerCase());
        // setPagina(0);
        // console.log(name);
    }


    function handleInputChangeSeletTipo(event) {
        event.preventDefault();
        dispatch(SeletMostrarTodos());
    }


    function handleFiltraPorTipo(event) {
        event.preventDefault();
        let datos = event.target.value;
        if (datos && pokemones) {

            dispatch(PokemonesOrdenados(datos, pokemones)); // /mando ambos para comparar en una action distinta__aunque podria ya utilizar el status de arriba POR SER EL MISMO  pero bueno xD
            console.log("+++PokemonesConPaginador", pokemones)

            // setPagina(0);
            console.log("DATA TIPOS+++", datos);
        } else if (datos == "") {

            dispatch(SeletMostrarTodos());
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
        dispatch(ActivarLoading());
        // setPagina(0);
        setName("");
    }

    return (<div className="Search"><br/><br/>
        <select value={tipo} onChange={
                (event) => handleFiltraPorTipo(event)
            }
            name="Origen"
            id="Origen" >
                
            <option selected
                onClick={
                    (event) => handleInputChangeSeletTipo(event)
                }
                value="">
                Tipos (Todos)
            </option>
            {
            tipos ? tipos.map((lostipos) => {
                return (<option key={
                        Math.random(5)
                    }
                    id={
                        lostipos.id
                    }
                    value={
                        lostipos.name
                }> {
                    lostipos.name
                }
                    {" "} </option>);
            }) : ""
        } </select>
        <select name="cars" id="cars" form="carform">
            <option value="volvo">A-Z</option>
            <option value="saab">Z-A</option>
            <option value="saab">Saab</option>
        </select>

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
        name ? (<button className="botonsearch" type="submit"
            onClick={
                (evento) => {
                    handleSubmit(evento);
                }
        }>
            Buscar
        </button>) : (<button className="botonsearchazul" type="submit">
            Escriba
        </button>)
    } </div>);
}
