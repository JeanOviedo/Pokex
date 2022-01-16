import { BUSCAR_POKEMONS, DETALLE_DE_POKEMONS } from "./Actions.jsx";

const initialState = {
  pokemonios: [],
};

export default function rooReducer(state = initialState, action) {
  switch (action.type) {
    case BUSCAR_POKEMONS:
      return { ...state, pokemonios: action.payload };

    case DETALLE_DE_POKEMONS:
      return {
        ...state,
        detalles: action.payload,
      };

    default:
      return state;
  }
}
