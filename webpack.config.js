const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const glob = require('glob')

const pug = {
  entry: {
    index: `${__dirname}/src/index.pug`,
    portfolio: `${__dirname}/src/portfolio.pug`,
    photo: `${__dirname}/src/photo.pug`
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

const image = {
  context: __dirname + '/src/image/',
  entry: {
    jpg: glob.sync(`${__dirname}/src/image/**/*.jpg`),
    png: glob.sync(`${__dirname}/src/image/**/*.png`)
  },
  output: {
    path: `${__dirname}/dist/image/`,
    filename: "[name]"
  },
  module: {
    loaders: [
      {
        test: /\.(jpg|png)$/,
        loaders: 'file-loader?name=[path][name].[ext]'
      }
    ]
  }
}

const sass = {
  context: __dirname + '/src/',
  entry: {
    index: `${__dirname}/src/sass/index.sass`,
    font:`${__dirname}/src/sass/font.js`
  },
  output: {
    path: `${__dirname}/dist/style/`,
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?-url!sass-loader' })
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader?name=[name].[ext]&limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader?name=[name].[ext]&limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader?name=[name].[ext]&limit=10000&mimetype=application/octet-stream"
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader?name=[name].[ext]&limit=10000&mimetype=image/svg+xml"
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new ExtractTextPlugin('[name].css')
  ]
}

module.exports = [
  pug,
  es,
  image,
  sass
]