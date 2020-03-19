
module.exports = {
  // 项目部署的基础路径
  pages: {
    index: {
      // page 的入口
      entry: 'examples/main.js',
      // 模板来源
      //template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    // subpage: 'src/subpage/main.js'
  },
  // 指定子路径。比如，如果你的应用部署在
  // https://www.foobar.com/public/
  // 那么将这个值改为 `/public/`
  // publicPath: process.env.NODE_ENV === 'production' ? '/public/' : '/',
  // 将构建好的文件输出到哪里
  outputDir: 'dist',

  //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  //assetsDir:'static',

  //编译名称是否显示hash值
  filenameHashing:false,
  
  // 是否在保存的时候使用 `eslint-loader` 进行检查。
  // 有效的值：`ture` | `false` | `"error"`
  // 当设置为 `"error"` 时，检查出的错误会触发编译失败。
  lintOnSave: false,

  // 使用带有浏览器内编译器的完整构建版本
  // 查阅 https://cn.vuejs.org/v2/guide/installation.html#运行时-编译器-vs-只包含运行时
 // compiler: false,
  runtimeCompiler: false, //关键点在这
  // 调整内部的 webpack 配置。
  // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/webpack.md
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
        .add('/packages/')
        .end()
      .use('babel')
        .loader('babel-loader')
        .tap(options => {
          // 修改它的选项...
          return options
        })
  },
  configureWebpack: () => {},

  // vue-loader 选项
  // 查阅 https://vue-loader.vuejs.org/zh-cn/options.html
 // vueLoader: {},

  // 是否为生产环境构建生成 source map？
  productionSourceMap: false,

  // CSS 相关选项
  // css: {
  //     // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)
  //     extract: false,
  //     // 是否开启 CSS source map？
  //     sourceMap: false,
  //     // 为预处理器的 loader 传递自定义选项。比如传递给
  //     // sass-loader 时，使用 `{ sass: { ... } }`。
  //     loaderOptions: {},
  //     // 为所有的 CSS 及其预处理文件开启 CSS Modules。
  //     // 这个选项不会影响 `*.vue` 文件。
  //     requireModuleExtension: false
  // },


  // PWA 插件的选项。
  // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli-plugin-pwa/README.md
  pwa: {},

  // 配置 webpack-dev-server 行为。
  devServer: {
      open: true,
      host: '192.168.3.106',
      // host: '172.20.10.3',
      // host: '192.168.1.7',
      port: 8089,
      https: false,
      hotOnly: false,
      overlay: {
          warnings: false,
          errors: false
      },
      // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/cli-service.md#配置代理
      proxy: {
        '/api': {
          /* 目标代理服务器地址 */
          // target: 'http://192.168.2.236:5050',
          target: 'http://192.168.2.241:5050',
          // target: 'http://223.93.170.82:24188',
          // target: 'http://223.93.170.82:9999',
          // target: 'http://223.93.170.82:23650',
          /* 允许跨域 */
          changeOrigin: true,
          secure: false
        },
      }, // string | Object
      before: app => {
          // `app` 是一个 express 实例
      }
  },

  // 三方插件的选项
  pluginOptions: {
      // ...
  }
}

