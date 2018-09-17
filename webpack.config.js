const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtracTextPlugin = require('extract-text-webpack-plugin');
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
  module: {
    rules: [
        {
          test: /\.jade$/,
          loader: 'jade-loader',
        },
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        },
        // {
        //     test: /\.(png|jpg|gif)$/,
        //     loader: 'url-loader?limit=8192&name=./static/img/[hash].[ext]',
        // },
        // {
        //     // 专供iconfont方案使用的，后面会带一串时间戳，需要特别匹配到
        //     test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
        //     loader: 'file?name=./static/fonts/[name].[ext]',
        // },
    ]
    },
  plugins: [
      new HtmlWebpackPlugin({
          filename: 'index.html',
          template: 'src/templates/index/index.jade',
          chunks: [],//需要引入哪些js就添加哪些
          hash: true,
          minify: true
      }),
      new ExtracTextPlugin('style.css'),
  ],
  
};
