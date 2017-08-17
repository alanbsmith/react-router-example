const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    './src/index'
  ],
  module: {
    rules: [
      { test: /\.js?$/, use: ['babel-loader'], exclude: /node_modules/ },
      { test: /\.s?css$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
    ]
  },
  resolve: {
    extensions: ['.js','.scss']
  },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: 'cheap-eval-source-map',
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    hot: true,
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
