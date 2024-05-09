const version = new Date().getTime();
module.exports = {
  publicPath: "./",
  outputDir: "dist",
  assetsDir: "static",

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true,
      includeLocales: false,
      enableBridge: true
    }
  },


  devServer: {
    port: 8084,
    https: false,
    hotOnly: true, //是否开启热更新
    open: true, //配置自动启动浏览器

  },
  css: {
    sourceMap: false,
    extract: {
      filename: `static/css/[name].${version}.css`,
      chunkFilename: `static/css/[name].${version}.css`,
    }

  },
  configureWebpack: {
    output: {
      filename: `static/js/[name].${version}.js`,
      chunkFilename: `static/js/[name].${version}.js`
    },
  }









};
