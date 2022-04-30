const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './public/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html'
    })
  ]
}