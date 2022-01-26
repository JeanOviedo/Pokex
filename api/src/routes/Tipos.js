const express = require("express");
const { Tipos } = require("../db");
const router = express.Router();
const axios = require("axios");
router.use(express.json());

// GET - TRAER LOS TIPOS DESDE API y SE GUARDAN EN DB SI NO EXISTEN (si no existen)
router.get("/", async (req, res, next) => {
  try {
    let tipoCant = await Tipos.count(); //cuenta los tipos de pokemon que hay en la tabla tipos
    // si no hay tipos en la tabla tipos entonces se obtienen los tipos de pokemons de la API
    if (tipoCant === 0) {
      let tipos = await axios.get(`https://pokeapi.co/api/v2/type`);
      let tiposApi = tipos.data.results; // poner los tipos de pokemon de la api en un array

      // si no es null o undefined o "" entonces guardo los tipos de pokemon en la tabla tipos
      if (tiposApi) {
        tiposApi = tiposApi.map((t) => {
          return {
            id: t.id,
            name: t.name,
          };
        });
      }

      await Tipos.bulkCreate(tiposApi);
      res.send(tiposApi.map((p) => p.name));
    } else {
      // Si la cantidad es distinta de 0 entonces se obtienen los tipos de pokemon de la tabla tipos

      let tiposBD = await Tipos.findAll();
      let tiposEnBaseDatos = tiposBD.map((e) => {
        return {
          id: e.id,
          name: e.name,
        };
      });
      res.send(tiposEnBaseDatos);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
