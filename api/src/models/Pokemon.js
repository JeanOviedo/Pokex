const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("pokemon", {
    id: { // EL id es un campo de tipo UUID para no tener colisiones con los id de la api
      type: DataTypes.INTEGER,
      //
      primaryKey: true,
      allowNull: false,
    },
    
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vida: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fuerza: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    defensa: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    velocidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    altura: {
      //altura
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    peso: {
      //peso
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipo: {
      type: DataTypes.JSON,
      allowNull: false,
      
    },
    

    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  });
};
