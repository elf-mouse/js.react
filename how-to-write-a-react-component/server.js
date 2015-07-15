var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
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

app.use(express.static('./'));

var server = app.listen(8080, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
