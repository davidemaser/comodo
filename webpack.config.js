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
      }
    ],
    loaders:[
      {
        test: /\.csv$/,
        loader: 'dsv-loader'
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