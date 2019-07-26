'use strict';
module.exports = (sequelize, DataTypes) => {
  const Gallery = sequelize.define('Gallery', {
    link: DataTypes.STRING,
    title: DataTypes.STRING,
    describe: DataTypes.STRING
  }, {});
  Gallery.associate = function(models) {
    // associations can be defined here
  };
  return Gallery;
};