const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const pug = {
  entry: {
    index: `${__dirname}/src/index.pug`,
    about: `${__dirname}/src/about.pug`,
    portfolio: `${__dirname}/src/portfolio.pug`
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

const es = {
  entry: {
    index: `${__dirname}/src/js/index.js`
  },
  output: {
    path: `${__dirname}/dist/js/`,
    filename: "[name].js"
  }
}

module.exports = [
  pug,
  es
]