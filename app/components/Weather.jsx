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
      isLoading: true,//set isLoading to true when things get started (when someone starts to search)
      errorMessage: undefined// clear error message in the beginning
    });

    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (e) {
      that.setState({
        isLoading: false,
        errorMessage: e.message // javascript error obj, and e.message is where we can find the message to display
      });
    });
  },
  render: function () {
    //Use es6 destructuring in order to pull both variables off of the state
    var {isLoading, temp, location, errorMessage} = this.state;
    // pass  these down into Weather Message as prop

    function renderMessage () { // calling jsx function
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location){
          return <WeatherMessage temp={temp} location={location}/>;
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
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
