const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: "development",
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        port: 3000
        hot: true,
        historyApiFallback: true,
        overlay: {
            warnings: true,
            errors: true
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});