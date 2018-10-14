const merge = require("webpack-merge");
const WorkboxPlugin = require("workbox-webpack-plugin");
const common = require("./webpack.common.js");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: "production",
  optimization: {
    minimizer: [new UglifyJsPlugin()],
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,
        vendor: {
          name: "vendor-1",
          chunks: "all",
          test: /[\\/]node_modules[\\/](react|react-.+|apollo-.+|ramda|formik|react-router-dom|styled-components|lodash|amazon-cognito-identity-js|styled-system)[\\/]/,
          priority: 20
        },
        vendor2: {
          name: "vendor-2",
          chunks: "all",
          test: /[\\/]node_modules[\\/]()[\\/]/,
          priority: 20
        },
        common: {
          name: "common",
          minChunks: 2,
          chunks: "async",
          priority: 10,
          reuseExistingChunk: true,
          enforce: true
        }
      }
    }
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true
    })
    // new BundleAnalyzerPlugin()
    // new CompressionPlugin({
    //   filename: "[path]"
    // })
  ]
});
