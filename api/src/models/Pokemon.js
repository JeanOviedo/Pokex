const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("pokemon", {
    id: { 
      type: DataTypes.INTEGER,
      //
      primaryKey: true,
      allowNull: false,
    },
    
    nombre: {
      type: DataTypes.STRING,
      defaultValue: 0,
    },
    vida: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    fuerza: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    defensa: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    velocidad: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    altura: {
      //altura
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    peso: {
      //peso
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },

    img: {
      type: DataTypes.STRING,
      defaultValue: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/60.svg",
    },
    tipo: {
      type: DataTypes.JSON,
      defaultValue: 0,
      
    },
    

    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  });
};
