var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false // no reason to show loading message
    }
  },
  handleSearch: function (location) { // pass location to the weather form
    var that = this; // access the this keyword

    this.setState({isLoading: true}); //set isLoading to true when things get started (when someone starts to search)

    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (errorMessage) {
      that.setState({isLoading: false});
        alert(errorMessage);
    });
  },
  render: function () {
    //Use es6 destructuring in order to pull both variables off of the state
    var {isLoading, temp, location} = this.state;
    // pass  these down into Weather Message as prop

    function renderMessage () { // calling jsx function
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location){
          return <WeatherMessage temp={temp} location={location}/>;
      }
    }
    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
