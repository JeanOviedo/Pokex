import axios from "axios";
// import PokemonesJSONLOCAL from "../pokemons.json";

export const BUSCAR_POKEMONS = "BUSCAR_POKEMONS";
export const DETALLE_DE_POKEMONS = "DETALLE_DE_POKEMONS";
export const MOSTRAR_POKEMONS_BUSCADOS = "MOSTRAR_POKEMONS_BUSCADOS";
export const OCULTAR_POKEMONS = "OCULTAR_POKEMONS";
export const LOADINGOFF = "LOADINGOFF";
export const LOADINGON = "LOADINGON";
export const CERRARCARDBUSQUEDA = "CERRARCARDBUSQUEDA";
export const TIPOS = "TIPOS";
export const ORDENAR_POR_TIPO = "ORDENAR_POR_TIPO";
export const MODAL_CERRAR = "MODAL_CERRAR";
export const MODAL_MOSTRAR_ERROR = "MODAL_MOSTRAR_ERROR";
export const DATOS_EN_ORDENAMIENTO = "DATOS_EN_ORDENAMIENTO";
export const CONTROL = "CONTROL";
export const CERRAR_CARD_ORDEN = "CERRAR_CARD_ORDEN";
export const RESET_REDUX = "RESET_REDUX";
export const MOSTRAR_TODOS_SELECT = "MOSTRAR_TODOS_SELECT";
export const ORDENAR_A_Z = "ORDENAR_A_Z";
export const ORDENAR_Z_A = "ORDENAR_Z_A";
export const ORDEN_POR_FUERZA = "ORDEN_POR_FUERZA";
export const ORDEN_POR_FUERZA_MENOS = "ORDEN_POR_FUERZA_MENOS";
export const SAVE_POKEMON = "SAVE_POKEMON";
export const ORDEN_DB = "ORDEN_DB";
export const PAGINADO = "PAGINADO";


export function ActionTodosPokemons() {
  return async function (dispatch) {
    try {
      let response = await axios("http://localhost:3001/pokemons");
      // let response = await axios("https://pokeapi.co/api/v2/pokemon/?limit=60");
      dispatch({ type: "LOADINGOFF" });
      dispatch({ type: "BUSCAR_POKEMONS", payload: response.data });
    } catch (error) {
      // let response2 = await axios("http://jeanoviedo.com/apis/pokemons.json");
      dispatch({ type: "RESET_REDUX" });
      console.log("ERROR POKE API SE UTILIZA JSON INTERNO", error);

      // reseteo todo en caso de error para hacer comporbaciones de nuevo
    }
  };
}

export function ActionBuscaPokemonsPorName(payload, data, pokemones) {
  if (data == "api") {
    console.log("BUSCAR API");
    return async function (dispatch) {
      try {
        const pokeName = await axios(
          "http://localhost:3001/pokemons/?nombre=" + payload
        );
        dispatch({ type: "LOADINGON",payload: pokeName.data,  loading: true });
        dispatch({ type: "MOSTRAR_POKEMONS_BUSCADOS", payload: pokeName.data });
        dispatch({ type: "LOADINGOFF", payload: pokeName.data, loading: false });
      } catch (error) {
        console.log(error);
        dispatch({ type: "MOSTRAR_POKEMONS_BUSCADOS", payload: "No Existe" });
        //dispatch({ type: "LOADINGOFF", loading: false });
      }
    };
    
  } else if (data == "db") {
    let resul = pokemones.filter((el) => el.nombre === payload);
    if (resul==""  || resul.length == 0  || !resul ) {
        return { type: "MOSTRAR_POKEMONS_BUSCADOS", payload: "No Existe" };
    } else { 
        console.log("BUSCAR DB" ,resul  ,"POK.." , pokemones);
        return { type: "MOSTRAR_POKEMONS_BUSCADOS", payload: resul };

    }
   
  }
}

export function PaginadorOK(data) {
    return { type: "PAGINADO", payload: data };
  }
  

export function OedenDB(data) {
  return { type: "ORDEN_DB", payload: data };
}

export function SacaLosTipos() {
  return async function (dispatch) {
    try {
      // const LosTipos = await axios("https://pokeapi.co/api/v2/type");

      const LosTipos = await axios("http://localhost:3001/types");

      dispatch({ type: "TIPOS", payload: LosTipos.data });
    } catch (error) {
      console.log(error);
    }
  };
}

export function OrdenaPorTipo(tiporecibido, pokemon) {
  let ordenado = pokemon.find((e) => e === tiporecibido);
  console.log("ordenado ++ ", ordenado, "tipo name", pokemon.tipo);

  return async function (dispatch) {
    try {
      // let pokemonios = pokemon;

      console.log("ordenado ++ ", ordenado, "tipo name", pokemon.tipo.name);
     // dispatch({ type: "LOADINGON" });
      dispatch({ type: "ORDENAR_POR_TIPO", payload: tiporecibido });
     /// dispatch({ type: "LOADINGOFF" });
    } catch (error) {
      console.log(error, "EROOR", ordenado);
      dispatch({ type: "MODAL_MOSTRAR_ERROR" });
    }
  };
}

export function PokemonesOrdenados(tipodeorden, pokerecibidos) {
  return {
    type: "DATOS_EN_ORDENAMIENTO",
    payload: tipodeorden,
    pokerecibidos: pokerecibidos,
  };
}

export function PokemonesOrdenadosFuerza(data) {
  return { type: "ORDEN_POR_FUERZA", payload: data };
}

export function PokemonesOrdenadosFuerzaMenos(data) {
  return { type: "ORDEN_POR_FUERZA_MENOS", payload: data };
}

export function PokemonesOrdenadosAZ(data) {
  return { type: "ORDENAR_A_Z", payload: data };
}
export function PokemonesOrdenadosZA(data) {
  return { type: "ORDENAR_Z_A", payload: data };
}

export function SeletMostrarTodos() {
  return { type: "MOSTRAR_TODOS_SELECT" };
}
export function Control(data) {
  return { type: "CONTROL", payload: data };
}

export function ActivarLoading() {
  return { type: "LOADINGON", loading: true };
}

export function DesactivarLoading() {
  return { type: "LOADINGOFF", loading: false };
}

export function ActionDetallesPokemonsPorId(id) {
  return async function (dispatch) {
    try {
      const Details = await axios("http://localhost:3001/pokemons/" + id);
      dispatch({ type: "DETALLE_DE_POKEMONS", payload: Details.data });
    } catch (error) {
      console.log(error);
      dispatch({ type: "MODAL_MOSTRAR_ERROR" });
    }
  };
}

// ----------------- crear pokemon en db -----------------//8
export function GuardarPokemon(pokemon) {
  return async function (dispatch) {
    try {
      // dispatch({ type: "LOADING", payload: 'Creando Pok??mon...' })
      const newPokemon = await axios.post(
        "http://localhost:3001/pokemons",
        pokemon
      );
      dispatch({
        type: "SAVE_POKEMON",
        payload: newPokemon.data,
        error: false,
      });
      console.log("error.message", newPokemon, newPokemon.data);
    } catch (error) {
      console.log(error.message);
      dispatch({ type: "SAVE_POKEMON", error: true });
    }
  };
}

export function ActionCerrarCard(payload) {
  return async function (dispatch) {
    try {
      dispatch({ type: "CERRARCARDBUSQUEDA", payload: true });
    } catch (error) {
      console.log(error);
    }
  };
}

export function ActionCerrarCardOrden(payload) {
  return async function (dispatch) {
    try {
      dispatch({ type: "CERRAR_CARD_ORDEN" });
    } catch (error) {
      console.log(error);
    }
  };
}

export function ActionCerrarModal(payload) {
  return async function (dispatch) {
    try {
      dispatch({ type: "MODAL_CERRAR", payload: true });
    } catch (error) {
      console.log(error);
    }
  };
}
// export const ActionTodosPokemons = () => {
// return (dispatch) => {
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
// };
// };

// export const ActionBuscaPokemonsPorName = (payload) => {
// return async function (dispatch) {
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
// };
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
// try {
//     const res = await axios.get(
//       "https://pokeapi.co/api/v2/pokemon"
//     );
//     console.log(res.data);
//     dispatch({
//       type: BUSCAR_POKEMONES,
//       payload: res.data,
//     });
// } catch (error) {
//     console.log(error);
// }
// };
