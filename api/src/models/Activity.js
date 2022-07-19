const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    // name: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
     name: {
        type: DataTypes.STRING
     },
     dificulty: {
        type: DataTypes.INTEGER,
        validate: {
            min: 1,
            max: 5
        }
     },
     duration: {
        type: DataTypes.TIME,
        get() {
            const valor = this.getDataValue('duration');
            return valor ? `${valor} hs` : null 
        }
     },
     season: {
        type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera')
     }

  });
};
