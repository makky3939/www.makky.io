const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const pug = {
  entry: {
    index: `${__dirname}/src/index.pug`
  },
  output: {
    path: `${__dirname}/dist/`,
    filename: "[name].html"
  },
  module: {
    rules: [
      {
        test: /\.pug/,
        loaders: ExtractTextPlugin.extract({
          loader: [
            'html-loader',
            'pug-html-loader'
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].html'
    })
  ]
}

module.exports = [
  pug
]