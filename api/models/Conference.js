/**
 * Conference.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'conferences',
  attributes: {
    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    name: {
      type: 'string',
      required: true,
      minLength: 5,
    },
    city: {
      type: 'string',
    },
    country: {
      type: 'string',
      required: true,
    },
    type: {
      type: 'string',
      isIn: ['online', 'in-person', 'online & in-person'],
      defaultsTo: 'in-person',
    },
    date: {
      type: 'string',
    },
    location: {
      type: 'string',
      required: true,
    },
    cfpUrl: {
      columnName: 'cfp_url',
      type: 'string',
      isURL: true,
      allowNull: true,
    },
    twitterUrl: {
      columnName: 'twitter_url',
      type: 'string',
      isURL: true,
      allowNull: true,
    },
    website: {
      type: 'string',
      isURL: true,
    },
    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝
    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
  },
}
