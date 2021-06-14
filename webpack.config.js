const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// MAIN PROCESS
module.exports = {
  mode: 'development',
  entry: './client/electron.js',
  target: 'electron-main',
  module: {
    rules: [{
      test: /\.js$/,
      include: /client/,
      exclude: /node_modules/,
    }]
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  }
};    