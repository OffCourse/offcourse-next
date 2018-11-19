const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js"
  },
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[name].[contenthash].js",
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
        use: [{ loader: "json-loader" }, { loader: "yaml-loader" }]
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
    new CopyWebpackPlugin([{ from: "src/assets/fonts", to: "fonts/" }]),
    new HtmlWebPackPlugin({
      title: "Offcourse",
      baseHref: "/",
      filename: "index.html",
      googleAnalytics: {
        trackingId: "UA-113174828-1",
        pageViewOnLoad: true
      },
      inject: false,
      links: [
        {
          rel: "preload",
          as: "font",
          crossorigin: true,
          href: "fonts/NGB.woff"
        },
        {
          rel: "preload",
          as: "font",
          crossorigin: true,
          href: "fonts/NGN.woff"
        }
      ],
      mobile: true,
      template: require("html-webpack-template"),
      appMountIds: ["main", "navbar", "backdrop", "sidebar", "overlay"]
    }),
    new WebpackPwaManifest({
      name: "Offcourse",
      short_name: "Offcourse",
      display: "fullscreen",
      description: "Open Source Platform for Crowdlearning",
      background_color: "#658f7b",
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
