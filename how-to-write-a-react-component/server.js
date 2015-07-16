var express = require('express');
var app = express();
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

app.get('/bundle.js', function(req, res) {
  res.redirect('//localhost:9090/build/bundle.js');
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/build/index.html');
});

app.use(express.static(__dirname + '/build/'));

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  noInfo: true,
  hot: true
}).listen(9090, 'localhost', function(err, result) {
  if (err) {
    console.log(err);
  }
});

var server = app.listen(8080, function() {
  console.log('Listening at http://localhost:%s', server.address().port);
});

var dogs = [{
  name: 'Tom',
  age: 4,
  isHungry: true
}, {
  name: 'Jerry',
  age: 3,
  isHungry: false
}];

app.get('/api/v1/dog', function(req, res) {
  res.send(dogs[0]);
});

app.put('/api/v1/dog', function(req, res) {
  var min = 0;
  var max = 1;
  var x = Math.floor(Math.random() * (max - min + 1)) + min;
  res.send(dogs[x]);
});
