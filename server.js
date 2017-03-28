var express = require('express'); // Now we have aceess the express entire API

// Create our app
var app = express(); // call express library as a function

app.use(express.static('public')); // tell which folders we wanna serve

app.listen(3000, function () {
  console.log('Express server is up on port 3000');
})
