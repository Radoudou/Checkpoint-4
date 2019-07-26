'use strict';
module.exports = (sequelize, DataTypes) => {
  const Performance = sequelize.define('Performance', {
    cover: DataTypes.STRING,
    title: DataTypes.STRING,
    describe: DataTypes.STRING
  }, {});
  Performance.associate = function(models) {
    // associations can be defined here
  };
  return Performance;
};