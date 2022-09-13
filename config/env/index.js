const HOST = process.env.HOST
const PORT = process.env.PORT
const NODE_ENV = process.env.NODE_ENV
const NODE_APP_URL = process.env.NODE_APP_URL
const NODE_APP_URL_ORIGINS = process.env.NODE_APP_URL_ORIGINS

module.exports = {
  HOST: HOST,
  PORT: PORT,
  NODE_ENV: NODE_ENV,
  NODE_APP_URL: NODE_APP_URL,
  NODE_APP_URL_ORIGINS: NODE_APP_URL_ORIGINS,
  isProductionMode: NODE_ENV === 'production',
  isDevelopmentMode: NODE_ENV === 'development',
}
