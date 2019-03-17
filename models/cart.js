'use strict';
const Product = require('../models').Product;

module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define('Cart', {
    user_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    amount: DataTypes.INTEGER
  }, {});
  Cart.associate = function(models) {

  };

  // Cart.hasOne(Product);

  return Cart;
};