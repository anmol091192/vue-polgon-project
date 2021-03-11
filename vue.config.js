const path = require('path')
var PrerenderSpaPlugin = require('prerender-spa-plugin') // Here

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: config => {
    if (process.env.NODE_ENV !== 'production') return
 
    return {
      plugins: [
        new PrerenderSpaPlugin(
          // Absolute path to compiled SPA
          path.resolve(__dirname, 'dist'),
          // List of routes to prerender
          [ '/', '/signup'],
          {
            postProcessHtml: function (context) {
              var titles = {
                '/': 'Home page',
                '/signup': 'Signup Page'
              }
              return context.html.replace(
                /<title>[^<]*<\/title>/i,
                '<title>' + titles[context.route] + '</title>'
              )
            }
          }
        ),
      ]
    }
  }
}
