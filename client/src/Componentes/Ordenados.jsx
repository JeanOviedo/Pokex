import React, {Fragment} from "react";
import {Link} from 'react-router-dom';
import {useDispatch} from "react-redux";
import CardPokemon from "./CardPokemon";
import {ActionCerrarCardOrden} from "../Redux/Actions";
import {useSelector} from "react-redux";


export default function Ordenados() {
    const pokemonestodosmuestra = useSelector((state) => state.pokemonestodosmuestra);
   
    const dispatch = useDispatch();


   

    function handleSubmitCerrar(event) {
        event.preventDefault();
        dispatch(ActionCerrarCardOrden());

    }



    //const cardb = useSelector((state) => state.pokemonordenadocard);
    const pokemonesordenados = useSelector((state) => state.pokemonesordenados);
    const ordenar = useSelector((state) => state.ordenar);
console.log(pokemonesordenados, "COMPONENTE ORDENADOS")



    return(
        
        <Fragment>   <ul className="cards"
        key={
            Math.random(5)
    }>

 
        { pokemonesordenados && pokemonestodosmuestra==false ? pokemonesordenados.map((pokemones) => { // console.log( "pokemons component PAGINATOR",PokemonesConPaginador);
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
        } </ul>  </Fragment>
        )
    }
