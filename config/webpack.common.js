const webpack = require('webpack');
const commonPaths = require('./common-paths');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  context: commonPaths.contextPath,
  entry: {
    main: './index'
  },
  output: {
    path: commonPaths.outputPath
  },
  resolve: {
    alias: {
      utils: commonPaths.utilsPath
    }
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.(jpe?g|\.png|gif|\.svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {limit: 10000, outputPath: commonPaths.outputPath}
          },
          {
            loader: 'image-webpack-loader',
            options: {bypassOnDebug: true}
          }
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        extractComments: false
      })
    ]
  },
  plugins: [
    new webpack.ProgressPlugin()
  ]
};
