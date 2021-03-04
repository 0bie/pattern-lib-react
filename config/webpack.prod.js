const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const {WebpackManifestPlugin} = require('webpack-manifest-plugin');

module.exports = {
  output: {
    filename: '[name].[chunkhash:8].js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /react|react-dom/,
        sideEffects: false
      }
    ]
  },
  optimization: {
    nodeEnv: 'production',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: /react/,
          enforce: true
        }
      }
    }
  },
  plugins: [
    new WebpackManifestPlugin(),
    new TerserPlugin({
      parallel: true,
      extractComments: false
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
};
