const path = require('path')
var PrerenderSPAPlugin = require('prerender-spa-plugin') // Here

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'dist'),
        // Required - Routes to render.
        routes: [ '/', '/signup' ],
      })
    ]
   },
}
