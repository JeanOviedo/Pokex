import React, {Fragment} from "react";
import {Link} from 'react-router-dom';
import {useDispatch} from "react-redux";
import CardPokemon from "./CardPokemon";
import {ActionCerrarCardOrden} from "../Redux/Actions";
import {useSelector} from "react-redux";


export default function Ordenadados() {
    const dispatch = useDispatch();

    function handleSubmitCerrar(event) {
        event.preventDefault();
        dispatch(ActionCerrarCardOrden());

    }

    const cardb = useSelector((state) => state.pokemonordenadocard);
    const pokemonesordenados = useSelector((state) => state.pokemonesordenados);
    // const tipodeorden= useSelector((state) => state.tipodeorden);
    // const loading = useSelector((state) => state.loading);


    return(

    // __________________MOSTRANDO ORDEN

        pokemonesordenados ? (pokemonesordenados.map((pokemonesb) => { // console.log("pokemons component", pokemonesb);

            return (<Fragment>
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
            </Fragment>);
        })) : (! pokemonesordenados ? <Fragment><br/><br/><br/><h1>
                No se pueden ordenar</h1>
            <br/>
            <center>
                <button className="close" type="submit"
                    onClick={
                        (evento) => {
                            handleSubmitCerrar(evento);
                        }
                }>
                    X
                </button>
            </center>
            <br></br><br/>
        </Fragment> : "<h1>434343</h1>")


);


}
