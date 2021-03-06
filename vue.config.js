const path = require('path')
const components = require('./compontents.json');

const baseConfig = {
  // 扩展 webpack 配置
  chainWebpack: config => {
    // @ 默认指向 src 目录，这里要改成 examples
    // 另外也可以新增一个 ~ 指向 packages
    config.resolve.alias
      .set('@', path.resolve('examples'))
      .set('~', path.resolve('packages'))

    // 把 packages 和 examples 加入编译，因为新增的文件默认是不被 webpack 处理的
    config.module
      .rule('js')
      .include.add(/packages/).end()
      .include.add(/examples/).end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
  },
  css: {
    extract: false,
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        additionalData: `@import "~/style/var.scss";`
      }
    },
  }
}
const devConfig = {
  // 修改 pages 入口
  pages: {
    index: {
      entry: 'examples/main.js', // 入口
      template: 'public/index.html', // 模板
      filename: 'index.html' // 输出文件
    }
  },
  publicPath: './',
  outputDir: 'docs',
  ...baseConfig

}
const buildConfig = {
  configureWebpack: {
    entry: components,
    output: {
      filename: '[name].js',
      // libraryTarget: 'commonjs2'
    },
  },
  outputDir: path.resolve(process.cwd(), './lib'),
  productionSourceMap: false,
  ...baseConfig,
}
module.exports = process.env.NODE_ENV === 'development' ? devConfig : buildConfig;