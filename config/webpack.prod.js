const webpack = require('webpack');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

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
    occurrenceOrder: true,
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
    new ManifestPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new UglifyJsWebpackPlugin({
      sourceMap: true
    }),
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|html|css)$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
};
