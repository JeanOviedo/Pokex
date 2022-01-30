import React, {Fragment, useRef, useState} from "react";
// import { connect } from "react-redux";
// import { Link } from 'react-router-dom';
import Lupa from "../Icos/lupa.png";
import Order from "../Icos/order.png";
import {useSelector, useDispatch} from "react-redux";
import {
    ActionBuscaPokemonsPorName,
    SeletMostrarTodos,
    ActivarLoading,
    PokemonesOrdenados,
    PokemonesOrdenadosAZ,
    PokemonesOrdenadosZA,
    PokemonesOrdenadosFuerza,
    PokemonesOrdenadosFuerzaMenos
} from "../Redux/Actions";

export default function Forms({tipos, name2, pokemones}) {
    let todos = useRef()
    let tipo = useSelector((state) => state.tipodeorden);
    const tipos2 = useSelector((state) => state.tipos);
    
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


    function handleFiltraPorTipo(event) {
        event.preventDefault();
        let datos = event.target.value;
        if (datos && pokemones) {

            dispatch(PokemonesOrdenados(datos, pokemones));

        } else if (datos == "") {

            dispatch(SeletMostrarTodos());
        }
    }


    function handleFiltraPorAZ(event) {
        console.log(" click handleFiltraPorAZ")
        event.preventDefault();
        let datos = event.target.value;
        if (datos) {
            dispatch(PokemonesOrdenadosAZ(datos));
            dispatch(PokemonesOrdenadosZA(datos));
        }
    }


    function handleFiltraPorFuerza(event) {
        console.log(" click handleFiltraPor fuerza")
        event.preventDefault();
        let datos = event.target.value;
        if (datos == "mas") {
            dispatch(PokemonesOrdenadosFuerza(datos));

        }
        else if (datos == "menos") {
            
          dispatch(PokemonesOrdenadosFuerzaMenos(datos));
          
        }
    else if (datos == "muestratodo") {

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

    return (
        <Fragment>
        <div className="ocultador">
           
        </div>
        <div className="Search"><br/><br/>
            <select name="ordenarza"
                onChange={
                    (event) => handleFiltraPorAZ(event)
                }
                id="ordenza">
                <option value="">Orden</option>
                <option value="az">A-Z</option>
                <option value="za">Z-A</option>

            </select>
            <select value={
                    tipo == "" ? todos : tipo
                }
                onChange={
                    (event) => handleFiltraPorTipo(event)
                }
                name="Origen"
                id="Origen">

                <option ref={todos}
                    id="todos"
                    value="muestratodo">
                    Tipos
                </option>
                {
                tipos2 ? tipos2.map((lostipos) => {
                    return (
                        <option key={
                                Math.random(5)
                            }

                            id={
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
            } </select>

            <select name="fuerza"   id="fuerza"  onChange={
                    (event) => handleFiltraPorFuerza(event)
                }>
                <option value="muestratodo">Por Fuerza</option>
                <option value="mas">+ Fuertes</option>
                <option value="menos">- Fuertes</option>

            </select>

            <select name="origin" id="origin">
                <option value="volvo">Origen</option>
                <option value="saab">Database</option>
                <option value="saab">Api</option>
            </select>

            <br></br>
            <br></br>
            <input id="search"
                value={name}
                type="text"
                placeholder="Escriba el nombre del Pokemon que desea buscar..."
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
        } </div></Fragment>
    );
}
