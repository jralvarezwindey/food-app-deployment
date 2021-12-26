const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
  sequelize.define('Recipe', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    score: {
      type: DataTypes.REAL,
    },
    healthScore: {
      type: DataTypes.REAL,
    },
    instructions: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
    },
 });
};
