import {
    BUSCAR_POKEMONS,
    DETALLE_DE_POKEMONS,
    MOSTRAR_POKEMONS_BUSCADOS,
    LOADINGOFF,
    CERRARCARDBUSQUEDA,
    OCULTAR_POKEMONS,
    ORDENAR_POR_TIPO,
    TIPOS,
    MODAL_CERRAR,
    MODAL_MOSTRAR_ERROR,
    ORDENAMIENTO
} from "./Actions.jsx";

import Sad from "../Icos/Sad.png";
const initialState = {
    pokemonios: [],
    pokemoniobuscado: [],
    pokemondetalles: [],
    TodosPokemons: [], // de  momento sin utilizar
    tipos: [],
    pokemonestodosmuestra: true,
    pokemonbuscadocard: false,
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
                pokemonbuscadocard: false

            };

        case TIPOS:
            return {
                ... state,
                pokemoniobuscado: action.payload,
                pokemonestodosmuestra: false,
                pokemonbuscadocard: true

            };
        case MOSTRAR_POKEMONS_BUSCADOS:
            return {
                ... state,
                pokemoniobuscado: action.payload,
                pokemonestodosmuestra: false,
                pokemonbuscadocard: true,
                // loading: {
                //     loading: false,
                //     mensaje: "Buscando..."
                // }
            };

        case ORDENAMIENTO:
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
            let pokemonios = state.pokemonios;
            let filtrar = pokemonios.filter((resulta) => {
                resulta.tipo.map((ok) => ok.name).includes(action.payload);
            });
            console.log(filtrar, "convertir a tipo");
            return {
                ... state,
                pokemonios: filtrar,
                ordenar: {
                    portipo: true
                }
            };

        case CERRARCARDBUSQUEDA:
            return {
                ... state,
                pokemonestodosmuestra: true,
                pokemonbuscadocard: false
            };

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

        case DETALLE_DE_POKEMONS:
            return {
                ... state,
                pokemondetalles: action.payload
            };

        default:
            return state;
    }
}
