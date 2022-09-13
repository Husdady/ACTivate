'use strict'

const helmet = require('helmet')
const { isProductionMode } = require('config/env')

module.exports = (app) => {
  app.use(
    helmet({
      contentSecurityPolicy: isProductionMode
    })
  )
}
