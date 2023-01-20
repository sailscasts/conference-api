require('dotenv').config()
const PRODUCTION_CONFIG = require('./production')
module.exports = Object.assign({}, PRODUCTION_CONFIG, {
  custom: {
    baseUrl: 'https://conference-api-staging.onrender.com',
  },
})
