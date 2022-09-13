'use strict'

const cors = require('cors')
const { isProductionMode, NODE_APP_URL_ORIGINS } = require('config/env')

module.exports = (app) => {
  let origin = '*'

  if (isProductionMode) {
    origin = NODE_APP_URL_ORIGINS.split(',').map((item) => item.trim())
  }

  const corsOptions = {
    origin: origin,
    credentials: true,
    methods: ['GET', 'OPTIONS'],
  }

  app.use(cors(corsOptions)) // Use cors options
}
