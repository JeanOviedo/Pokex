import axios from "axios";

export const BUSCAR_POKEMONS = "BUSCAR_POKEMONS";
export const DETALLE_DE_POKEMONS = "DETALLE_DE_POKEMONS";
export const MOSTRAR_POKEMONS_BUSCADOS = "MOSTRAR_POKEMONS_BUSCADOS";
export const LOADING = "LOADING";

export function ActionTodosPokemons() {
  return async function (dispatch) {
    try {
      dispatch({
        type: "LOADING",
        payload: "Buscando Pokémon...",
      });
      let response = await axios("http://localhost:3001/pokemons");
      dispatch({
        type: "BUSCAR_POKEMONS",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function ActionBuscaPokemonsPorName(payload) {
  return async function (dispatch) {
    try {
      const pokeName = await axios(
        "http://localhost:3001/pokemons/?name=" + payload
      );
      dispatch({
        type: "MOSTRAR_POKEMONS_BUSCADOS",
        payload: pokeName.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

// export const ActionTodosPokemons = () => {
//   return (dispatch) => {
//     axios
//       .get(`http://localhost:3001/pokemons`)
//       // .get(`https://pokeapi.co/api/v2/pokemon`)
//       .then((respuesta) => respuesta.data)
//       .then((data) => {
//         console.log("hola print desde actions", data);
//         dispatch({
//           type: BUSCAR_POKEMONS,
//           payload: data,
//         });
//       });
//   };
// };

// export const ActionBuscaPokemonsPorName = (payload) => {
//   return async function (dispatch) {
//     try {
//       const pokeName = await axios(
//         "http://localhost:3001/pokemons/?name=" + payload
//       );
//       dispatch({
//         type: "MOSTRAR_POKEMONS_BUSCADOS",
//         payload: pokeName.data,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

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
//       type: BUSCAR_POKEMONES,
//       payload: res.data,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
