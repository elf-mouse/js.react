var path = require('path'),
  webpack = require('webpack');

module.exports = {
  entry: './js/app.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader'
    }]
  },
  resolve: {
    root: [
      path.join(__dirname, 'bower_components')
    ]
  },
  plugins: [
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
    )
  ]
};
