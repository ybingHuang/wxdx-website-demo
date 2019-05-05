module.exports = {
  outputDir: 'dist',
  productionSourceMap: false,
  parallel: require('os').cpus().length > 1,

  configureWebpack: config => {
    // 入口文件
    config.entry.app = ['@babel/polyfill', './src/main.js'];
  },

  chainWebpack: config => {
    config.module
      .rule('i18n')
      .resourceQuery(/blockType=i18n/)
      .type('javascript/auto')
      .use('i18n')
      .loader('@kazupon/vue-i18n-loader')
      .end();

      config.merge({
          resolve: {
              alias: {
                  '@com': './src/components',
                  '@img': './src/assets/images'
              }
          }
      });
  },

  devServer: {
    open: true,
    host: '127.0.0.1',
    port: 1089,
    https: false,
    hotOnly: false,
    // proxy: null,
    proxy: {
      '/api': {
        // localhost
        target: 'http://127.0.0.1:8090/',
        secure: false,
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/' // rewrite path
        }
      }
    },
    before: app => {}
  }
};
