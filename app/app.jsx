var React = require('react');
var ReactDOM = require('react-dom');
//This is exactly the same below, creating new variable Route = require('react-router').Route;
var {Route, Router, IndexRoute, hashHistory} = require('react-router');// all the properties we wanna pull off
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

// var obj = {
//   name: 'Top'
// };
// If I wanna pull out the name, I can use destructuring like this.
//var {name} = obj; // This creates a new variable called name and sets it to equal to whatever obj.name equals to.

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      <IndexRoute component={Weather}/>

    </Route>
  </Router>,
  document.getElementById('app')
);
