// vue.config.js
module.exports = {
  // options...
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: '@import "@/assets/scss/_global.scss";'
      }
    }
  }
}
