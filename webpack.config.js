var webpack = require('webpack');

module.exports = {
  entry: ['./front_end/main'],
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {
        test: /\.sass$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
  watch: true
};