var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function () {
//     // Using es6 destructuring again to pull both varables off of the prop
//     var {temp, location} = this.props;
//     return (
//       <h3>It's {temp} celsius in {location}.</h3>
//     );
//   }
// });


//var WeatherMessage = (props) =>
var WeatherMessage = ({temp, location}) => {
  return (
    <h3>It's {temp} celsius in {location}.</h3>
  );
};

module.exports = WeatherMessage;
