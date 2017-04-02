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
var WeatherMessage = ({temp, location, pressure, humidity, wind_speed, geo_corrds_lon, geo_corrds_lat}) => {
  return (
    <div>
      <h3 className="text-center">It's {temp} celsius in {location}.</h3>
      <h5 className="text-center">Pressure: {pressure} hpa</h5>
      <h5 className="text-center">Humidity: {humidity} %</h5>
      <h5 className="text-center">Geo coords: [{geo_corrds_lat}, {geo_corrds_lon}]</h5>
    </div>
  );
};

module.exports = WeatherMessage;
