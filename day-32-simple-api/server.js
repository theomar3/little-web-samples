var express = require('express');
var app = express();

//sets up static file handling for this folder.
app.use(express.static('public'));
//so, a request to http://localhold:5001 will return a static file if it exists.

var count = 0;

//node sets up any url
app.get('/api/counter', function(req, res) {  //req = do a request; res = do a response

  res.send({ theCount: count});
});

//curl -X POST will test it in your terminal
app.post('/api/counter', function(req, res) {
  count += 1;
  res.sendStatus(204); //I'm not sending back any content
});


app.listen(5001, function() {
  console.log('listening on port 5001!');
});
