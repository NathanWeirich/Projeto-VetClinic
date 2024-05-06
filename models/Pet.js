const { DataTypes } = require("sequelize");

const db = require("../db/conn");

const Tutor = require("./Tutor");

const Pet = db.define("Pet", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  species: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  carry: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  weight: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  date_of_birth: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

Pet.belongsTo(Tutor);

module.exports = Pet;
