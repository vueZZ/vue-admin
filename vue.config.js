module.exports = {
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.scss` 这个文件
        data: `@import "@/styles/variables.scss";`
      }
    }
  },
  devServer: {
    open: false,
    // host: 'seller.aizhuanshangcheng.com',
    port: 8080,
    https: false,
    hotOnly: true,
    hot: true,
    inline: false,
    // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
    // proxy: null, // string | Object
    proxy: {
      '/api': {
        target: 'http://yapi.demo.qunar.com/mock/16616/admin',
        pathRewrite: {'^/api' : ''},
        changeOrigin: true
      }
    }
  }
}