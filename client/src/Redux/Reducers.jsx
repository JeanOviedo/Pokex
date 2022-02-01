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
    MOSTRAR_TODOS_SELECT,
    ORDENAR_A_Z,
    ORDENAR_Z_A,
    ORDEN_POR_FUERZA,
    ORDEN_POR_FUERZA_MENOS,
    SAVE_POKEMON


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

    ordenar: false,


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

        case SAVE_POKEMON:

            if (action.error == false) {
               
                return {
                    ... state,
                    loading: {
                        loading: false,
                        mensaje: "Guardando...pokemon"
                    }
                ,
                    modal: {
                    mensaje: "Pokemon Guardado con exito",
                    boton: true,
                    image: "https://media4.giphy.com/media/M90xtnaT605xjPX0ty/giphy.gif?cid=6c09b952b179dafd8e7333d6ef72f6bb51e572f4e225ff46&rid=giphy.gif&ct=s",
                    visible: true,
                }

            }
        }

            if (action.error == true) {

                return {
                    ... state,
                    modal: {

                        visible: true,
                        mensaje: "Error Pokemon No se guardo, posiblemente hubo un error al conectar con la base de datos",
                        boton: true,
                        image: "https://downloadwap.com/thumbs3/screensavers/d/new/games/pokemon-117647.gif"
                    }

                }

            }


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
            if (orden.length && action.payload !== "muestratodo") {
                console.log(orden, "imprimo ordne");
                return {
                    ... state,
                    pokemonesordenadoscard: true,
                    pokemonesordenados: orden,
                    pokemonestodosmuestra: false,
                    pokemonbuscadocard: false,
                    tipodeorden: action.payload

                };
            } else if (! orden.length && action.payload == "muestratodo") {
                return {
                    ... state,
                    pokemonesordenadoscard: false,
                    pokemonestodosmuestra: true,
                    pokemonbuscadocard: false,
                    tipodeorden: ""

                };
            } else {
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
            // ------------------ ORDEN DE A A Z -------------------------------------------------
        case ORDENAR_Z_A:

            let Ordenar2 = action.payload === "za" ? state.pokemonios.sort(function (a, b) {
                if (a.nombre > b.nombre) {
                    return -1;
                }
                if (b.nombre > a.name) {
                    return 1;
                }
                return 0;

            }) : state.pokemonios.sort(function (a, b) {

                if (a.nombre > b.nombre) {
                    return 1;
                }
                if (b.nombre > a.nombre) {
                    return -1;
                }
                return 0;

            });

            console.log(Ordenar2);
            return {
                ... state,
                pokemonios: Ordenar2,
                pokemonesordenados: Ordenar2,
                pokemonestodosmuestra: true,
                pokemonbuscadocard: false,
                pokemonesordenadoscard: false


            };

            // ------------------ fin ORDEN DE Z A A -------------------------------------------------
        case ORDENAR_A_Z:

            let Ordenar = action.payload === "az" ? state.pokemonios.sort(function (a, b) {
                if (a.nombre > b.nombre) {
                    return -1;
                }
                if (b.nombre > a.nombre) {
                    return 1;
                }
                return 0;

            }) : state.pokemonios.sort(function (a, b) {

                if (a.nombre > b.nombre) {
                    return 1;
                }
                if (b.nombre > a.nombre) {
                    return -1;
                }
                return 0;

            });

            console.log(Ordenar);
            return {
                ... state,
                pokemonios: Ordenar,
                pokemonesordenados: Ordenar,

                pokemonestodosmuestra: false,
                pokemonbuscadocard: false,
                pokemonesordenadoscard: true
            };

            // ------------------ fin ORDEN DE A A Z -------------------------------------------------


            // ------------------ ORDEN FUERZA MAS -------------------------------------------------

        case ORDEN_POR_FUERZA:
            let Ordanando;
            if (action.payload === "mas") {
                Ordanando = state.pokemonios.sort(function (a, b) {
                    if (a.fuerza > b.fuerza) {
                        return -1;
                    }
                    if (a.fuerza<b.fuerza) {
                        return 1;
                    }
                    return 0;
                });
            }
            return {
                ... state, pokemonios: Ordanando, pokemonesordenados: Ordanando, pokemonestodosmuestra: true, pokemonbuscadocard: false, pokemonesordenadoscard: false
                
            };


        case ORDEN_POR_FUERZA_MENOS:
            let OrdenarMenos;
            if (action.payload === "menos") {
                OrdenarMenos = state.pokemonios.sort(function (a, b) {
                    if (a.fuerza>b.fuerza) {
                        return 1;
                    }
                    if (a.fuerza < b.fuerza) {
                        return -1;
                    }
                    return 0;
                });
            }

            return {
                ... state,
                pokemonios: OrdenarMenos,
                pokemonesordenados: OrdenarMenos,
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
