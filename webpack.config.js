const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./public/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  plugins: [
    new HTMLWebpackPlugin({
      filename: "index.html",
      template: "./public/index.html",
    }),
  ],
};
