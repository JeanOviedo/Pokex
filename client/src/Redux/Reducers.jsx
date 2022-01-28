import {
    BUSCAR_POKEMONS,
    DETALLE_DE_POKEMONS,
    MOSTRAR_POKEMONS_BUSCADOS,
    LOADINGOFF,
    LOADINGON,
    CERRARCARDBUSQUEDA,
    OCULTAR_POKEMONS,
    ORDENAR_POR_TIPO,
    TIPOS,
    MODAL_CERRAR,
    MODAL_MOSTRAR_ERROR,
    DATOS_EN_ORDENAMIENTO,
    CONTROL,
    CERRAR_CARD_ORDEN
} from "./Actions.jsx";

import Sad from "../Icos/Sad.png";
const initialState = {
    pokemonios: [],

    pokemoniobuscado: [],

    pokemondetalles: [],

    pokemonesordenados: [],

    tipos: [],
    pokemonestodosmuestra: true,

    pokemonbuscadocard: false,

    pokemonordenadocard: false,

    control: true,
    modal: {
        visible: false,
        mensaje: "",
        image: "",
        boton: true,
        accion: ""
    },
    loading: {
        loading: true,
        mensaje: "Cargando datos"
    },
    ordenar: {
        portipo: false,
        pornombre: false
    }
};

export default function rooReducer(state = initialState, action) {
    switch (action.type) {

        case BUSCAR_POKEMONS: // Mostrando todos
            return {
                ... state,
                pokemonios: action.payload,
                // TodosPokemons: action.payload,
                pokemonestodosmuestra: true,
                pokemonbuscadocard: false,
                pokemonesordenadoscard: false

            };

        case TIPOS:
            return {
                ... state,
                tipos: action.payload


            };
        case MOSTRAR_POKEMONS_BUSCADOS:
            return {
                ... state,
                pokemoniobuscado: action.payload,
                pokemonestodosmuestra: false,
                pokemonbuscadocard: true,
                pokemonesordenadoscard: false,
                // loading: {
                //     loading: false,
                //     mensaje: "Buscando..."
                // }
            };

        case DATOS_EN_ORDENAMIENTO:
            return {};

        case MODAL_MOSTRAR_ERROR:
            return {
                ... state,

                modal: {
                    visible: true,
                    mensaje: "Error cargando datos intente de nuevo",
                    image: {
                        Sad
                    }
                }
            };

        case ORDENAR_POR_TIPO:
            
            
            return {
                ... state,
                pokemonesordenados: action.payload,
                pokemonestodosmuestra: false,
                pokemonbuscadocard: false,
                pokemonesordenadoscard: true


            };

        case CERRARCARDBUSQUEDA:
            return {
                ... state,
                pokemonestodosmuestra: true,
                pokemonbuscadocard: false
            };

        case CERRAR_CARD_ORDEN:

            return {
                ... state,
                pokemonesordenadoscard: action.payload
            }


        case MODAL_CERRAR:
            return {
                ... state,
                modal: {
                    visible: false,
                    mensaje: ""
                }
            };
        case OCULTAR_POKEMONS:
            return {
                ... state,
                pokemonestodosmuestra: action.payload
            };

        case LOADINGOFF:
            return {
                ... state,
                loading: {
                    loading: false,
                    mensaje: action.payload
                }
            };

        case LOADINGON:
            return {
                ... state,
                loading: {
                    loading: true,
                    mensaje: action.payload
                }
            };

        case DETALLE_DE_POKEMONS:
            return {
                ... state,
                pokemondetalles: action.payload
            };

        case CONTROL:
            return {
                ... state,
                control: action.payload
            };

        default:
            return state;
    }
}
