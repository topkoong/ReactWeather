var React = require('react');

var WeatherForm = React.createClass({
  //Everytime the form is submitted, onFormSubmit function's gonna get called.
  onFormSubmit: function (e) { // e = event obj
    e.preventDefault();

    //Pull the value off of location
    var location = this.refs.location.value; // If the input field has the text Syracuse inside of it, we're gonna Syracuse set as location variable.
    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  //Add ref to our input field so we can fetch it
  render: function () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="location"></input>
          <button className="button expanded hollow">Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
