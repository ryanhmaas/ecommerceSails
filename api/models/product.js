/**
* Product.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  autoPK: true,
  attributes: {
    sku: {
      type: 'string',
      unique: true,
      required: true
    },
    price: {
      type: 'decimal',
      required: true
    },
    quantity_available: {
      type: 'integer',
      required: true
    },
    name: {
      type: 'string',
      required: true
    },
    description: {
      type: 'text'
    }

  }
};
