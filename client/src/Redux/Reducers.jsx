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
    RESET_REDUX,
    CERRAR_CARD_ORDEN,
    MOSTRAR_TODOS_SELECT
} from "./Actions.jsx";

const initialState = {
    pokemonios: [],

    pokemoniobuscado: [],

    pokemondetalles: [],

    pokemonesordenados: [],

    tipodeorden: "",

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

        case RESET_REDUX:
            return {
                ... initialState
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
            const tiposeleccionadoestado = state.tipodeorden;
            const orden = state.pokemonios.filter((p) => {
                
                return p.tipo.some((resulta) => resulta.name === action.payload);

            });
            console.log(orden, "imprimo ordne");
            if (orden.length && action.payload !="muestratodo") {
                console.log(orden, "imprimo ordne");
                return {
                    ... state,
                    pokemonesordenadoscard: true,
                    pokemonesordenados: orden,
                    pokemonestodosmuestra: false,
                    pokemonbuscadocard: false,
                    tipodeorden: action.payload

                };
            } else if (!orden.length && action.payload =="muestratodo") {
                return {
                    ... state,
                    pokemonesordenadoscard: false,
                    pokemonestodosmuestra: true,
                    pokemonbuscadocard: false,
                    tipodeorden: "",
                   
                };
            }

            else
            {
                return {
                    ... state,
                    pokemonesordenadoscard: false,
                    pokemonestodosmuestra: true,
                    pokemonbuscadocard: false,
                    tipodeorden: "",
                    modal: {
                        visible: true,
                        mensaje: "No se encontraron pokemons de tipo " + action.payload + ". ",
                        image: "https://downloadwap.com/thumbs3/screensavers/d/new/games/pokemon-117647.gif",
                        boton: true,
                        accion: ""
                    }
                };
            }


        case MODAL_MOSTRAR_ERROR:
            return {
                ... state,

                modal: {
                    visible: true,
                    mensaje: action.modal.mensaje,
                    image: action.modal.image,
                    boton: action.modal.boton,
                    accion: action.modal.accion

                }
            };

        case ORDENAR_POR_TIPO:
            return {
                ... state,
                tipodeorden: action.payload,
                pokemonestodosmuestra: false,
                pokemonbuscadocard: false,
                pokemonesordenadoscard: true

            };


        case MOSTRAR_TODOS_SELECT:
            return {
                ... state,

                pokemonestodosmuestra: true,

                pokemonbuscadocard: false,

                pokemonordenadocard: false


            };


        case CERRARCARDBUSQUEDA:
            return {
                ... state,
                pokemonestodosmuestra: true,
                pokemonbuscadocard: false,
                pokemonesordenadoscard: false
            };

        case CERRAR_CARD_ORDEN:
            return {
                ... state,
                pokemonesordenadoscard: false,
                pokemonestodosmuestra: true,
                pokemonbuscadocard: false
            }


        case MODAL_CERRAR:
            return {
                ... state,
                modal: {
                    visible: false

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
