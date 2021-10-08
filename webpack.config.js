//引入一个包
const path  = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js",
    // 告诉webpack不使用箭头函数
    environment: {
      arrowFunction: false
    }
  },
  mode: 'development',
  // 指定webpack要打包时要使用的模块
  module: {
    rules: [
      {
        test: /\.ts$/,
        //要使用loader
        use: [
          //配置babel
          {
            //指定加载器
            loader: "babel-loader",
            options: {
              //设置预定义的环境
              presets: [
                [
                  // 指定环境的插件
                  "@babel/preset-env",
                  // 配置信息
                  {
                    // 要兼容的目标浏览器
                    targets: {
                      "chrome": "58",
                      "ie": "11"
                    },
                    //指定的corejs版本
                    "corejs": "3",
                    // 使用corejs的方式 "usage" 表示按需加载
                    "useBuiltIns": "usage"
                  }
                ]
              ]
            }
          },
          'ts-loader'
        ],
        exclude: /node_modeles/
      },
      // less文件的处理
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          // 引入postcss 作用是让css做浏览器适配
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      browsers: "last 2 versions"
                    }
                  ]
                ]
              }
            }
          },
          "less-loader"
        ]
      }
      
    ]
  },
  // 配置HtmlWebpackPlugin

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new CleanWebpackPlugin()
  ],

  //设置引用模块
  resolve: {
    extensions: ['.ts', '.js']
  }
}