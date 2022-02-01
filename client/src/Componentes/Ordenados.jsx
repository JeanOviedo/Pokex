import React, {Fragment, useState} from "react";
import {Link} from 'react-router-dom';
import {useDispatch} from "react-redux";
import CardPokemon from "./CardPokemon";
import Paginados from "./Paginados";
//import {ActionCerrarCardOrden} from "../Redux/Actions";
import {useSelector} from "react-redux";


export default function Ordenados() {
    const pokemonestodosmuestra = useSelector((state) => state.pokemonestodosmuestra);
    const pokemonesordenados = useSelector((state) => state.pokemonesordenados);
    const ordenar = useSelector((state) => state.ordenar);
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.loading);
    const pagina = useSelector((state) => state.pagina);
    const [porPagina, setPorPagina] = useState (12);
    const maximo = pokemonesordenados.length / porPagina;

    // function handleSubmitCerrar(event) {
    //     event.preventDefault();
    //     dispatch(ActionCerrarCardOrden());

    // }



    //const cardb = useSelector((state) => state.pokemonordenadocard);
   
console.log(pokemonesordenados, "COMPONENTE ORDENADOS")



    return(
        
        <Fragment>  
            
            {/* {pokemonesordenados.length && loading.loading == false ? <Paginados pagina={pagina}  maximo={maximo}></Paginados> : ""}  */}
            
            
            
            
            <ul className="cards"
        key={
            Math.random(5)
    }>

 
        { pokemonesordenados && pokemonestodosmuestra==false ? pokemonesordenados.slice (
                (pagina - 1) * porPagina, (pagina - 1) * porPagina + porPagina).map((pokemones) => { // console.log( "pokemons component PAGINATOR",PokemonesConPaginador);
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
