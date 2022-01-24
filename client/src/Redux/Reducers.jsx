import {
  BUSCAR_POKEMONS,
  DETALLE_DE_POKEMONS,
  MOSTRAR_POKEMONS_BUSCADOS,
  LOADING,
  CERRARCARDBUSQUEDA,
  OCULTAR_POKEMONS,
} from "./Actions.jsx";

const initialState = {
  pokemonios: [],
  pokemoniobuscado: [],
  TodosPokemons: [],
  pokemonestodosmuestra: true,
  pokemonbuscadocard: false,
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

    case CERRARCARDBUSQUEDA:
      return {
        ...state,
        pokemonestodosmuestra: true,
        pokemonbuscadocard: false,
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
        detalles: action.payload,
      };

    default:
      return state;
  }
}
