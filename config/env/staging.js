require('dotenv').config()
module.exports = {
  models: {
    migrate: 'safe',
  },
  datastores: {
    default: {
      adapter: 'sails-postgresql',
      url: process.env.DATABASE_URL,
      ssl: true,
    },
  },
}
