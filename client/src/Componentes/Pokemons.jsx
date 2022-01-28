import React, {Fragment, useEffect, useLayoutEffect, useState} from "react";
import {Link} from "react-router-dom";


import {useSelector, useDispatch} from "react-redux";

import {ActionTodosPokemons, Control, SacaLosTipos} from "../Redux/Actions";
import CardPokemon from "./CardPokemon";
import Modal from "./Modal";
import Forms from "./Forms";
import Resultados from "./Resultados";
import Load from "./Load";
import Ordenadados from "./Ordenados";

export default function Pokemons() {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    let [ActualPage, setPagina] = useState(0);

    // variables para el modal
    let imagenmodal = "";
    let mensajemodal = "";
    let nombremodal = "";


    // variables de orden o filtrado

    const ordenar = useSelector((state) => state.ordenar);

    // const [quitatexto, setTexto] = useState("No Existe Pokemon");
    const pokemones = useSelector((state) => state.pokemonios);
    const tipos = useSelector((state) => state.tipos);
    const pokemonesbusqueda = useSelector((state) => state.pokemoniobuscado);
    const loading = useSelector((state) => state.loading);
    const pokemonestodosmuestra = useSelector((state) => state.pokemonestodosmuestra);
    const modal = useSelector((state) => state.modal);
    const pokemonesbusquedocard = useSelector((state) => state.pokemonbuscadocard);
    const pokemonordenadocard = useSelector((state) => state.pokemonordenadocard);
    const control = useSelector((state) => state.control);
    // console.log("Resultado: ", pokemones);

    useLayoutEffect(() => {
    // useEffect(() => {

        if (! pokemones.length && loading.loading == true && control == true) {

            dispatch(SacaLosTipos());
            dispatch(ActionTodosPokemons());
            dispatch(Control(false));


        }
    }, [dispatch, pokemones, loading, tipos]);

    // --------------------PAGINADOR---------------------

    let [ActualPagina, setActualPagina] = useState(0);
    // let [CuentaTotal, setCuentaTotal] = useState([]); //Contamos si array dividido es menor a 8  con estado para no mostrar siguiente
    let siguiente = 1;

    const Paginado = () => {
        if (siguiente === 1 && ActualPagina === 0) {
            if (pokemones.length) {
                siguiente = siguiente + 9;
                return pokemones.slice(ActualPagina, 9);
            }
        }
        if (ActualPagina >= 9) {
            if (pokemones.length) { // return pokemones.slice(ActualPagina, ActualPagina + 12);
                return pokemones.slice(ActualPagina, ActualPagina + 9);
            }
        }
    };

    const SiguientePage = () => {
        if (pokemones.length > ActualPagina + 9) {
            if (siguiente === 9) {
                ActualPagina = ActualPagina + 9;
                setActualPagina(ActualPagina);
            } else {
                setActualPagina(ActualPagina + 12);
            }
        }
    };

    const AnteriorPage = () => {
        if (ActualPagina > 9) {
            setActualPagina(ActualPagina - 12);
        }
        if (ActualPagina === 9) {
            setActualPagina(ActualPagina - 9);
        }

        // if (ActualPagina <= 5) {
        // setActualPagina(ActualPagina - 4);
        // }
    };

    const PokemonesConPaginador = Paginado();

    // --------------------FIN PAGINADOR---------------------

    return (<Fragment>
        <br/>
        <br/>
        <br/>
        <br/> {/*  ___________________________FORMS ___________________________ */}

        {
        loading.loading == false ? (<Fragment>
            <Forms tipos={tipos}
                pokemones={PokemonesConPaginador}
                name2={name}/>
        </Fragment>) : ""
    }

        {/*  ___________________________CIERRA FORMS ___________________________ */}

        {/* ___________________________loading_____________________________ */}


        {
        loading.loading == true ? (<Load></Load>) : ""
    }


        <ul className="cards" key={
                Math.random(5)
        }> {/* ____________________________MOSTRANDO_____________________________ */}

            {
            /*pokemones && pokemonestodosmuestra == true
          ? pokemones.map((pokemones) => {  */
            PokemonesConPaginador && pokemonesbusquedocard == false && pokemonordenadocard == false && loading.loading == false && pokemonestodosmuestra == true ? PokemonesConPaginador.map((pokemones) => { // console.log( "pokemons component PAGINATOR",PokemonesConPaginador);
                return (<Link to={
                    `/pokemons/${
                        pokemones.id
                    }`
                }>
                    <CardPokemon key={
                            Math.random(5)
                        }
                        id={
                            pokemones.id
                        }
                        nombre={
                            pokemones.nombre
                        }
                        img={
                            pokemones.img
                        }
                        tipo={
                            pokemones.tipo
                        }
                        fuerza={
                            pokemones.fuerza
                        }
                        defensa={
                            pokemones.defensa
                        }
                        velocidad={
                            pokemones.velocidad
                        }
                        altura={
                            pokemones.altura
                        }
                        peso={
                            pokemones.peso
                        }/>
                </Link>);
            }) : ""
        } </ul>
        {/* ____________________________BUSCANDO_____________________________ */}

        {
        pokemonesbusquedocard === true && loading.loading == false ? < Resultados pokemonesbusqueda = {
            pokemonesbusqueda
        }
        pokemonesbusquedocard = {
            pokemonesbusquedocard
        }
        pokemonestodosmuestra = {
            false
        }
        /> : ""
    }

        {/* ____________________________FINBUSCANDO_____________________________ */}


        {/* ____________________________ORDENADOS____________________________ */}

        {
        pokemonordenadocard == true && loading.loading  == false  ? <Ordenadados/>: ""
    }
        {/* ____________________________CIERRA_ORDENADOS____________________________ */}


        {/* ____________________________PAGINANDO_____________________________ */}
        {
        ActualPagina <= 9 && loading.loading == false && pokemonesbusquedocard == false ? (<div className="paginar">
            <button className="paginado"
                onClick={SiguientePage}>
                Siguiente
            </button>
        </div>) : pokemonestodosmuestra == true && loading.loading == false && ActualPagina >= 10 && pokemonesbusquedocard == false ? (<div className="paginar">
            <button className="paginado"
                onClick={AnteriorPage}>
                Anterior
            </button>
            <button className="paginado"
                onClick={SiguientePage}>
                Siguiente
            </button>
        </div>) : ("")
    }
        {/* ____________________________PAGINANDO_____________________________ */}


        {/* ____________________________MODAL_____________________________ */}

        {
        modal.visible === true ? (<Modal nombre={nombremodal}
            image={imagenmodal}
            mensaje={mensajemodal}/>) : ("")
    }
        {/* ____________________________MODALFIN_____________________________ */} </Fragment>
    );
                                                                                                                                                                                                                    }
