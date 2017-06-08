let webpack = require('webpack');
let HtmlWebPackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: "./app.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  module:{
    rules:[
      {
        test:/\.json$/,
        use:'json-loader'
      },
      {
        test: /\.txt$/,
        use: 'raw-loader'
      },
      {
        test: /\.csv$/,
        use: 'dsv-loader'
      },
      {
        test: /\.gz$/,
        enforce: 'pre',
        use: 'gzip-loader'
      },
      {
        test: /\.scss$/,
        use:[{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader", // compiles Sass to CSS
          options: {
            includePaths: ["src/scss","src/styles"]
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin(
      {
        inject:'head',
        cache:true,
        hash:true
      }
    ),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery' })
  ]
};