const express = require('express');
const app = express();
const lorem = require('lorem-ipsum');



app.get('/lorem', function(req, res){
  res.send(lorem({count: 3, units: 'paragraphs', format: 'HTML'}));
});

app.get('/lorem/:number', function(req, res){
  res.send(lorem({count: req.params.number, units: 'paragraphs', format: 'HTML'}));
});



app.listen(3000, function(){
  console.log('Express app listening for connections');
});
