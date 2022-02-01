import React, {Fragment, useEffect, useLayoutEffect, useState} from "react";
import {Link} from "react-router-dom";


import {useSelector, useDispatch} from "react-redux";

import {ActionTodosPokemons, Control, SacaLosTipos} from "../Redux/Actions";
import CardPokemon from "./CardPokemon";
import Modal from "./Modal";
import Forms from "./Forms";
import Resultados from "./Resultados";
import Load from "./Load";
import Ordenados from "./Ordenados";
import Paginados from "./Paginados.jsx";


export default function Pokemons() {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    //let [ActualPage, setPagina] = useState(0);

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
    const pokemonesordenados = useSelector((state) => state.pokemonesordenados);
    // console.log("Resultado: ", pokemones);

    const pagina = useSelector((state) => state.pagina);
    const [porPagina, setPorPagina] = useState (12);
  
    const maximo = pokemones.length / porPagina;
    //useLayoutEffect(() => {  
        useEffect(() => {

        if (! pokemones.length && loading.loading == true && control == true) {

            dispatch(SacaLosTipos());
            dispatch(ActionTodosPokemons());
            dispatch(Control(false));


        }
    }, [dispatch, pokemones, loading, tipos]);

  

    return (<Fragment>
        <br/>
        <br/>
        <br/>
        <br/> 
        {/*  ___________________________FORMS ___________________________ */}

        {
        loading.loading == false ? (<Fragment>
            <Forms tipos={tipos}
                pokemones={pokemones}
                name2={name}/>
        </Fragment>) : ""
    }

        {/*  ___________________________CIERRA FORMS ___________________________ */}

        {/* ___________________________loading_____________________________ */}


        {
        loading.loading == true  ? (<Load></Load>) : ""
    }

{pokemones.length && loading.loading == false  && pokemonesbusquedocard === false && pokemonordenadocard === false && pokemonestodosmuestra == true ? <Paginados pagina={pagina}  maximo={maximo}></Paginados> : ""}
        
        <ul className="cards"
            key={
                Math.random(5)
        }> {/* ____________________________MOSTRANDO_____________________________ */}

            {
            /*pokemones && pokemonestodosmuestra == true
          ? pokemones.map((pokemones) => {  */
            pokemones && pokemonesbusquedocard == false && pokemonordenadocard == false && loading.loading == false && pokemonestodosmuestra == true ? pokemones.slice (
                (pagina - 1) * porPagina, (pagina - 1) * porPagina + porPagina).map((pokemones) => { 
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
        pokemonesbusquedocard === true && loading.loading == false   ? < Resultados pokemonesbusqueda = {
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

   

{ pokemonordenadocard == true && loading.loading == false && pokemonestodosmuestra==false ? "": <Ordenados/>

    }
        {/* ____________________________CIERRA_ORDENADOS____________________________ */}


        {/* ____________________________PAGINANDO_____________________________ */}
        
        

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
