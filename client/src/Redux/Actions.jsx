import axios from "axios";

export const BUSCAR_POKEMONS = "BUSCAR_POKEMONS";
export const DETALLE_DE_POKEMONS = "DETALLE_DE_POKEMONS";

export const ActionBuscaPokemons = () => {
  return (dispatch) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon`)
      .then((respuesta) => respuesta.data)
      .then((data) => {
        console.log("hola", data);
        dispatch({
          type: BUSCAR_POKEMONS,
          payload: data,
        });
      });
  };
};

export function ActionBuscaPokemonsJSON() {
  return function (dispatch) {
    return fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: BUSCAR_POKEMONS, payload: json });
      });
  };
}

// export const ActionBuscaPokemons = () => async (dispatch, getState) => {
//   try {
//     const res = await axios.get(
//       "https://pokeapi.co/api/v2/pokemon"
//     );
//     console.log(res.data);
//     dispatch({
//       type: BUSCAR_HEROES,
//       payload: res.data,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
