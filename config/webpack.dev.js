module.exports = {
  devtool: 'eval-source-map',
  output: {
    publicPath: '/',
    filename: '[name].bundle.js'
  },
  devServer: {
    historyApiFallback: true
  }
};
