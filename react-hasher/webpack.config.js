module.exports = {
  entry: "./app/Router.js",
  output: {
    path: './public',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, loaders: ['jsx', 'babel'], exclude: /node_modules/}
    ]
  }
};

