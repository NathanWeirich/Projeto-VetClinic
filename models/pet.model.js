const { DataTypes } = require("sequelize");
const db = require("../config/database");
const Tutor = require("./tutor.model");

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
Tutor.hasMany(Pet);

module.exports = Pet;
