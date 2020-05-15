const path = require('path')
const polyfill = []

const umd = {
  entry: polyfill.concat(['./src/index.js']),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
    library: 'royplayer-logger',
    libraryTarget: 'umd'
  },
  mode: 'production',
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader'
    }, {
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            minimize: true
          }
        },
        'postcss-loader',
        'sass-loader'
      ]
    }]
  },
  externals: {
    royplayer: 'Player'
  },
  optimization: {
    minimize: true
  }
}

const client = {
  entry: polyfill.concat(['./src/index.js']),
  output: {
    path: path.resolve(__dirname, './browser'),
    filename: 'royplayer-logger.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader'
    }, {
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            minimize: true
          }
        },
        'postcss-loader',
        'sass-loader'
      ]
    }]
  },
  externals: {
    royplayer: 'royplayer'
  },
  mode: 'production',
  optimization: {
    minimize: true
  }
}

module.exports = [umd, client]
