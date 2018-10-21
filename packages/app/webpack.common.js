const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");

module.exports = {
  entry: {
    index: "./src/index.js"
  },
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[name].[hash].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: "graphql-tag/loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.yaml$/,
        loader: "yaml"
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "react-svg-loader",
            options: {
              jsx: true // true outputs JSX tags
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebPackPlugin({
      title: "Offcourse",
      baseHref: "/",
      filename: "index.html",
      headHtmlSnippet:
        "<link rel=“preload” href=“https://app.offcourse.io/fonts/NGB.woff” as=“font”><link rel=“preload” href=“https://app.offcourse.io/fonts/NGN.woff” as=“font”>",
      inject: false,
      mobile: true,
      template: require("html-webpack-template"),
      appMountId: "root"
    }),
    new WebpackPwaManifest({
      name: "Offcourse",
      short_name: "Offcourse",
      display: "fullscreen",
      description: "Open Source Platform for Crowdlearning",
      background_color: "#75C7B3",
      icons: [
        {
          src: path.resolve("src/assets/logo.png"),
          sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
        },
        {
          src: path.resolve("src/assets/logo.png"),
          size: "1024x1024" // you can also use the specifications pattern
        }
      ]
    })
  ]
};
