var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false // no reason to show loading message
    }
  },
  handleSearch: function (location) { // pass location to the weather form
    var that = this; // access the this keyword

    this.setState({
      isLoading: true, //set isLoading to true when things get started (when someone starts to search)
      errorMessage: undefined, // clear error message in the beginning
      location: undefined, // if we didn't do this. the data will be lingering around and might sit around for quite some time and could cause unexpected results.
      temp: undefined,
      pressure: undefined,
      humidity: undefined,
      wind_speed: undefined,
      geo_corrds_lon: undefined,
      geo_corrds_lat: undefined
    });

      openWeatherMap.getTemp(location).then(function (weather) {
      that.setState({
        location: location,
        temp: weather[0],
        pressure: weather[1],
        humidity: weather[2],
        wind_speed: weather[3],
        geo_corrds_lon: weather[4],
        geo_corrds_lat: weather[5],
        isLoading: false
      });
    }, function (e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message // javascript error obj, and e.message is where we can find the message to display
      });
    });
  },
  componentDidMount: function () {
    var location = this.props.location.query.location; // we have the location in the url so that's the propery we wanna pull off of the query obj.
    // search trigger
    if (location && location.length > 0) {
      this.handleSearch(location);
      // location query string will be removed after the weather has been successfully searched for.
      window.location.hash = '#/';
    }
  },
  // React router's gonna automatically update the props of weather.jsx when the URL changed.
  componentWillReceiveProps: function (newProps) {
    var location = newProps.location.query.location; // we have the location in the url so that's the propery we wanna pull off of the query obj.
    // search trigger
    if (location && location.length > 0) {
      this.handleSearch(location);
      // location query string will be removed after the weather has been successfully searched for.
      window.location.hash = '#/';
    }
  },
  render: function () {
    //Use es6 destructuring in order to pull both variables off of the state
    var {isLoading, temp, pressure, humidity, wind_speed, geo_corrds_lon, geo_corrds_lat, location, errorMessage} = this.state;
    // pass  these down into Weather Message as prop

    function renderMessage () { // calling jsx function
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location){
          return <WeatherMessage temp={temp} pressure={pressure} location={location} humidity={humidity} wind_speed={wind_speed} geo_corrds_lon={geo_corrds_lon} geo_corrds_lat={geo_corrds_lat}/>;
      }
    }

    function renderError () {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        );
      }
    }
    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
