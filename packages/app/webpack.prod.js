const merge = require("webpack-merge");
const WorkboxPlugin = require("workbox-webpack-plugin");
const common = require("./webpack.common.js");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  optimization: {
    minimizer: [new UglifyJsPlugin()],
    splitChunks: {
      chunks: "all"
    }
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true
    })
    // new CompressionPlugin({
    //   filename: "[path]"
    // })
  ]
});
