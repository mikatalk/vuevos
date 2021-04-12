module.exports = {
  publicPath: process.env.NODE_ENV === 'production' 
  ? 'https://www.vuevos.com/'
  : `/`,
  filenameHashing: false
}
