const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  //入口文件的路径
  entry: './src/index.tsx',
  output: {
    //打包的输出路径
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  //添加需要解析的文件格式
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "哼，决战吧ts",
      template: './index.html'
    })
  ],
  module: {
    rules: [{
      test: /\.js$/,
      include: [path.resolve(__dirname, 'src')],
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-react'],
        plugins: ['@babel/plugin-proposal-class-properties']
      }
    },
    {
      test: /\.tsx?$/,
      use: ['ts-loader']
    }]
  },
  devServer: {
    contentBase: "./dist",
    hot: true,
    port: 8080,
    host: "0.0.0.0",
    disableHostCheck: true,
    historyApiFallback: true,
    // proxy: {
    //   "/api": {
    //     target: " http://localhost:8081",
    //     changeOrigin: true,
    //     pathRewrite: { "^/api": "" }
    //   }
    // }
  },
  // 启用sourceMap
  devtool: "source-map",
}