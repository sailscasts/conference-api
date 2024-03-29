const PRODUCTION_CONFIG = require('./production')
module.exports = Object.assign({}, PRODUCTION_CONFIG, {
  custom: {
    baseUrl: 'https://conference-api-staging.onrender.com',
  },
  datastores: {
    default: {
      adapter: 'sails-postgresql',
      url: process.env.DATABASE_URL,
      ssl: true,
    },
  },
})
