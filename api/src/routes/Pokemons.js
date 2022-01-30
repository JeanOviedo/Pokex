const express = require("express");
const router = express.Router();
const axios = require("axios");
const {Pokemon, Tipos, pokemon_tipos} = require("../db");
// const {v4: uuidv4} = require('uuid');

// peticion info de api pokemon
const getPokemonsAPI = async () => {
    try { // Sacando la la info de la API
        let apiURL = (await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=60")).data.results;
        console.log(apiURL, "apiurl");
        let pokeApi = [];

        for (let i = 0; i < apiURL.length; i++) { // Dependiendo del tamaño  de los datos PUCHEAMOS
            pokeApi.push(axios.get(apiURL[i].url));
            console.log("++++apiURL.length", apiURL.length, "***", apiURL[i].url);
        }
        let getPokemonsAPI_MAP = (await Promise.all(pokeApi)).map((p) => {
            return {
                id: p.data.id,
                nombre: p.data.name,
                tipo: p.data.types.map((t) => t.type),
                vida: p.data.stats[0].base_stat,
                fuerza: p.data.stats[1].base_stat,
                defensa: p.data.stats[2].base_stat,
                velocidad: p.data.stats[5].base_stat,
                altura: p.data.height,
                peso: p.data.weight,
                img: p.data.sprites.other.dream_world.front_default
            };
        });
        console.log(getPokemonsAPI_MAP, "getPokemonsAPI_MAP");
        return getPokemonsAPI_MAP;
    } catch (err) {
        console.log(err);
    }
};

// Traer datos de la base de datos modelo TIPOS
const getPokemonsDB = async () => {
    try { // retorno
        return await Pokemon.findAll({
            include: { // incluyo la lista Tipos
                model: Tipos,
                attributes: ["nombre"], 
                // mediante - comprobacion de atributos
                through: {
                    attributes: []
                }
            }
        });
    } catch (err) {
        return [];
    }
};

// Concatenar info de la BD y API
const getAll = async () => {
    const NewgetPokemonsAPI = await getPokemonsAPI();
    const NewgetPokemonsLocal = await getPokemonsDB();
    console.log(NewgetPokemonsAPI, NewgetPokemonsLocal);
    const allInfo = NewgetPokemonsAPI.concat(NewgetPokemonsLocal);
    return allInfo;
};

// PARA RELACIONAR LAS TABLAS DE ID POKEMON Y ID DE TYPE
router.post("/:pokemonId/type/:typeId", async (req, res, next) => {
    try {
        const {pokemonId, typeId} = req.params; // destructuring de datos que me pasan por parametros
        const pokemon = await Pokemon.findByPk(pokemonId); // busco el pokemon por id
        await pokemon.addType(typeId); // agrego el tipo al pokemon usando mixin de secualize
        res.status(201).send(pokemon);
    } catch (error) {
        next(error);
    }
});

router.get("/:id", async (req, res, next) => {
    const {id} = req.params;
    let pokeId;

    if (id.length > 6) {
        try {
            const resDb = await Pokemon.findByPk(id, {include: Tipos});
            pokeId = {
                id: resDb.id,
                nombre: resDb.name,
                tipo: resDb.types.map((t) => t),
                vida: resDb.life,
                uerza: resDb.attack,
                defensa: resDb.defense,
                velocidad: resDb.speed,
                altura: resDb.height,
                peso: resDb.weight,
                img: resDb.image
            };
            res.json(pokeId);
        } catch (error) {
            res.status(404).send({msg: "ID Pokemon not found"});
        }
    } else {
        try {
            const Poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            pokeId = {
                id: Poke.data.id,
                nombre: Poke.data.name,
                tipo: Poke.data.types.map((t) => t.type),
                vida: Poke.data.stats[0].base_stat,
                fuerza: Poke.data.stats[1].base_stat,
                defensa: Poke.data.stats[2].base_stat,
                velocidad: Poke.data.stats[5].base_stat,
                altura: Poke.data.height,
                peso: Poke.data.weight,
                img: Poke.data.sprites.other.dream_world.front_default
            };

            res.status(200).send(pokeId);
        } catch (err) {
            res.status(404).send({msg: "ID Pokemon not found"});
        }
    }
});

router.get("/", async (req, res) => {
    const {nombre} = req.query;
    try {
        if (nombre) {
            const pokeBd = await Pokemon.findAll({
                where: {
                    nombre: nombre
                },
                include: {
                    model: Tipos
                }
            });
            if (pokeBd != 0) {
                let respBd = pokeBd.map((p) => {
                    return {
                        id: p.id,
                        nombre: p.name,
                        tipo: p.types.map((t) => t),
                        vida: p.hp,
                        fuerza: p.attack,
                        defensa: p.defense,
                        velocidad: p.speed,
                        altura: p.height,
                        peso: p.weight,
                        img: p.image
                    };
                });

                res.status(200).send(respBd);
            } else {
                const pokeApi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
                let respApi = [{
                        id: pokeApi.data.id,
                        nombre: pokeApi.data.name,
                        tipo: pokeApi.data.types.map((t) => t.type),
                        vida: pokeApi.data.stats[0].base_stat,
                        fuerza: pokeApi.data.stats[1].base_stat,
                        defensa: pokeApi.data.stats[2].base_stat,
                        velocidad: pokeApi.data.stats[5].base_stat,
                        altura: pokeApi.data.height,
                        peso: pokeApi.data.weight,
                        img: pokeApi.data.sprites.other.dream_world.front_default
                    },];

                res.status(200).send(respApi);
            }
        } else {
            try {
                const allPoke = await getAll();
                res.json(allPoke);
            } catch (error) {


                


                next(error);
            }
        }
    } catch (error) {

        res.status(404).send({msg: "Error al conectar API o no encontrado"});
    }
});

// * GUARDAR POKEMONES A DB
router.post("/", async (req, res, next) => {
    try {
        const {
            nombre,
            vida,
            fuerza,
            defensa,
            velocidad,
            altura,
            peso,
            img,
            tipo
        } = req.body;
        // console.log(name)
        const newPokemon = await Pokemon.create({
            nombre: nombre.toLowerCase(),
            tipo,
            vida,
            fuerza,
            defensa,
            velocidad,
            altura,
            peso,
            img
        });

        await newPokemon.setTypes(type);
        res.send(newPokemon);
    } catch (error) {
        res.send(error.message);
    }
});

module.exports = router;
