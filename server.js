var express = require('express'); // Now we have aceess the express entire API

// Create our app
var app = express(); // call express library as a function
const PORT= process.env.PORT || 3000; // process.env.PORT is for heroku and 3000 is the port for local host

app.use(function (req, res, next) { // express middleware
  if (req.headers['x-forwarded-proto'] === 'http') {
    next();
  } else {
    res.redirect('http://' + req.hostname + req.url);
  }
});

app.use(express.static('public')); // tell which folders we wanna serve

app.listen(port, function () {
  console.log('Express server is up on port ' + PORT);
});
