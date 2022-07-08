// 引入一个包
const path = require('path')
// 引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin')
// 引入clean插件
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

// webpack 中的配置信息都应该写在module.exports中
module.exports = {
  mode: 'development',
  // 入口文件
  entry: './src/index.ts',

  // 指定打包文件所在的目录
  output: {
    path: path.resolve(__dirname, 'dist'),
    // 打包后文件的名字
    filename: 'bundle.js',
    // 告诉webpack不适用箭头函数
    environment: {
      arrowFunction: false,
      const: false
    }
  },
  // 指定webpack打包时需要使用的模块
  module: {
    // 指定要加载的规则
    rules:[
      {
        // test 指定的是规则生效的文件
        test: /\.ts$/,
        // 要使用的loader
        use: [
          // 配置babel
          {
            // 指定加载器
            loader: "babel-loader",
            // 设置babel
            options: {
              // 设置预定义的环境
              presets: [
                [
                  // 指定环境的插件
                  "@babel/preset-env",
                  // 配置信息
                  {
                    // 要兼容的目标浏览器
                    targets: {
                      "chrome":"88",
                      'ie': "11"
                    },
                    // 指定corejs的版本
                    "corejs": "3",
                    // 使用corejs的方式，usage表示按需加载
                    "useBuiltIns": "usage"
                  }
                ]
              ]
            }
          },
          'ts-loader'
        ],
        // 要排除的文件
        exclude: /node_modules/
      },
      // 设置less
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          // 'less-loader'
          // 引入postcss,进行兼容性处理
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      browsers: "last 2 version" 
                    }
                  ]
                ]
              }
            }
          },
          'less-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    // 打包html 的模板
    new HTMLWebpackPlugin({
      // 指定了html的打包后的模板
      template: './src/index.html'
    }),
  ],
  // 用来设置引用模块
  resolve: {
    extensions: ['.ts', '.js']
  }
}