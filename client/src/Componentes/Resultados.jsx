import React, {Fragment, useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import {useDispatch} from "react-redux";
import CardPokemon from "./CardPokemon";
import {ActionCerrarCard} from "../Redux/Actions";
import {useSelector} from "react-redux";

export default function Resultados({pokemonesbusqueda, pokemonesbusquedocard}) {


    function handleSubmitCerrar(event) {
        event.preventDefault();

        dispatch(ActionCerrarCard());
        // setTexto("");
    }

    const cardb = useSelector((state) => state.pokemonbuscadocard);
    const dispatch = useDispatch();


    return(


    // __________________MOSTRANDO RESULTADOS

            pokemonesbusqueda != "No Existe" && cardb === true ? (pokemonesbusqueda.map((pokemonesb) => { // console.log("pokemons component", pokemonesb);

            return (
                <Fragment>
                    <center>
                        <button className="close" type="submit"
                            onClick={
                                (evento) => {
                                    handleSubmitCerrar(evento);
                                }
                        }>
                            X
                        </button>
                        <br></br>
                        <Link to={
                            `/pokemons/${
                                pokemonesb.id
                            }`
                        }>
                            <CardPokemon id={
                                    pokemonesb.id
                                }
                                nombre={
                                    pokemonesb.nombre
                                }
                                img={
                                    pokemonesb.img
                                }
                                tipo={
                                    pokemonesb.tipo
                                }
                                vida={
                                    pokemonesb.vida
                                }
                                fuerza={
                                    pokemonesb.fuerza
                                }
                                defensa={
                                    pokemonesb.defensa
                                }
                                velocidad={
                                    pokemonesb.velocidad
                                }
                                altura={
                                    pokemonesb.altura
                                }
                                peso={
                                    pokemonesb.peso
                                }/>
                        </Link>
                    </center>
                </Fragment>
            );
        })) : ""
);


}
