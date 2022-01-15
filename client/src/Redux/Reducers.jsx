import { BUSCAR_POKEMONS } from "./Actions.jsx";

const initialState = {
  todos: [],
};

export default function rooReducer(state = initialState, action) {
  switch (action.type) {
    case BUSCAR_POKEMONS:
      return { ...state, todas: action.payload };

    case DETALLE_DE_POKEMONS:
      return {
        ...state,
        detalles: action.payload,
      };

    default:
      return state;
  }
}
