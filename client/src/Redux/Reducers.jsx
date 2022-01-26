import {
  BUSCAR_POKEMONS,
  DETALLE_DE_POKEMONS,
  MOSTRAR_POKEMONS_BUSCADOS,
  LOADING,
  CERRARCARDBUSQUEDA,
  OCULTAR_POKEMONS,
  ORDENAR_POR_TIPO,
  TIPOS,
  MODAL_CERRAR,
  MODAL_MOSTRAR_ERROR,
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
    accion: "",
  },
  loading: {
    loading: false,
    mensaje: "",
  },
};

export default function rooReducer(state = initialState, action) {
  switch (action.type) {
    case BUSCAR_POKEMONS: //Mostrando todos
      return {
        ...state,
        pokemonios: action.payload,
        TodosPokemons: action.payload,
        pokemonestodosmuestra: true,
        pokemonbuscadocard: false,
        loading: {
          loading: false,
          mensaje: action.payload,
        },
      };

    case TIPOS:
      return {
        ...state,
        tipos: action.payload,
      };

    case MOSTRAR_POKEMONS_BUSCADOS:
      return {
        ...state,
        pokemoniobuscado: action.payload,
        pokemonestodosmuestra: false,
        pokemonbuscadocard: true,
        loading: {
          loading: false,
          mensaje: action.payload,
        },
      };

    case MODAL_MOSTRAR_ERROR:
      return {
        ...state,

        modal: {
          visible: true,
          mensaje: "Error cargando datos intente de nuevo",
          image: { Sad },
        },
      };

    case ORDENAR_POR_TIPO:
      const pokemonios = state.pokemonios;
      const filtro = pokemonios.filter((fil) =>
        fil.tipos.find((resulta) => {
          console.log("RESULTA", filtro);
          if (resulta.name === action.payload) {
            console.log("RESULTA", resulta);
            return resulta;
          }
        })
      );

      return {
        ...state,
        pokemonios: filtro,
      };

    case CERRARCARDBUSQUEDA:
      return {
        ...state,
        pokemonestodosmuestra: true,
        pokemonbuscadocard: false,
      };

    case MODAL_CERRAR:
      return {
        ...state,
        modal: {
          visible: false,
          mensaje: "",
        },
      };
    case OCULTAR_POKEMONS:
      return {
        ...state,
        pokemonestodosmuestra: action.payload,
      };

    case LOADING:
      return {
        ...state,
        loading: {
          loading: true,
          mensaje: action.payload,
        },
      };

    case DETALLE_DE_POKEMONS:
      return {
        ...state,
        pokemondetalles: action.payload,
      };

    default:
      return state;
  }
}
