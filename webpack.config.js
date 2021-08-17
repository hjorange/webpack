const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/main.js", // 入口
    output: { 
        path: path.join(__dirname, "dist"), // 出口路径
        filename: "bundle.js" // 出口文件名
    },
    plugins: [
      new HtmlWebpackPlugin({
          template: './public/index.html' // 以此为基准生成打包后html文件
      })
  ],
  module: { 
    rules: [ // loader的规则
      {
        test: /\.css$/, // 匹配所有的css文件
        // use数组里从右向左运行
        // 先用 css-loader 让webpack能够识别 css 文件的内容并打包
        // 再用 style-loader 将样式, 把css插入到dom中
        use: [ "style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        // 使用less-loader, 让webpack处理less文件, 内置还会用less翻译less代码成css内容
          use: [ "style-loader", "css-loader", 'less-loader']
      }
    ]
}
}