const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: {
      'app': [
          './src/js/a.js',
          './src/js/b.js'
      ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  plugins: [
      new HtmlWebpackPlugin({
          filename: 'index.html',
          template: 'src/templates/index.jade',
      })
  ],
  module: {
    rules: [
        {
          test: /\.jade$/,
          loader: 'jade-loader'
        }
    ]
},
};
