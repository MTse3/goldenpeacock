var express = require('express');
var app = express();

var app = require('express')();
var port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/app'));

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.use(function(req, res) {
  res.status(404).send('could not find file')
});

app.listen(process.env.PORT || 3000, function() {
  console.log('server started on port ' + port);
})
