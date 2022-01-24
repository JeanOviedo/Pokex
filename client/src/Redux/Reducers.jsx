import {
  BUSCAR_POKEMONS,
  DETALLE_DE_POKEMONS,
  MOSTRAR_POKEMONS_BUSCADOS,
  LOADING,
} from "./Actions.jsx";

const initialState = {
  pokemonios: [],
  pokemoniobuscado: [],
  TodosPokemons: [],
  loading: {
    loading: false,
    mensaje: "",
  },
};

export default function rooReducer(state = initialState, action) {
  switch (action.type) {
    case BUSCAR_POKEMONS:
      return {
        ...state,
        pokemonios: action.payload,
        TodosPokemons: action.payload,
        loading: {
          loading: false,
          mensaje: action.payload,
        },
      };

    case MOSTRAR_POKEMONS_BUSCADOS:
      return { ...state, pokemonios: action.payload };

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
