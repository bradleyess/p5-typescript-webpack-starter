const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: { main: "./src/index.ts" },
  resolve: { extensions: [".tsx", ".ts", ".js"] },

  // Development
  devtool: "inline-source-map",
  devServer: { contentBase: "./bin", hot: true },

  // Modules
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: path.resolve(__dirname, "src"),
        loader: "babel-loader",
      },
    ],
  },

  output: {
    filename: "[name].index.js",
    path: path.resolve(__dirname, "bin"),
  },
  plugins: [new HtmlWebpackPlugin()],
}
