const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const glob = require('glob')

const pug = {
  entry: {
    index: `${__dirname}/src/index.pug`,
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
          use: [
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
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            ['env', {'modules': false}]
          ]
        }
      }]
    }]
  }
}

const image = {
  context: __dirname + '/src/image/',
  entry: {
    jpg: glob.sync(`${__dirname}/src/image/**/*.jpg`),
    png: glob.sync(`${__dirname}/src/image/**/*.png`),
    ico: glob.sync(`${__dirname}/src/image/**/*.ico`)
  },
  output: {
    path: `${__dirname}/dist/image/`,
    filename: "[name]"
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|ico)$/,
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
    rules: [
      {
        test: /\.sass$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        use: 'file-loader?name=[name].[ext]&limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        use: "file-loader?name=[name].[ext]&limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: "file-loader?name=[name].[ext]&limit=10000&mimetype=application/octet-stream"
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: "file-loader?name=[name].[ext]&limit=10000&mimetype=image/svg+xml"
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