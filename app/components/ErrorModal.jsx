var React = require('react');

var ErrorModal = React.createClass({
  getDefaultProps: function () {
    return {
      title: 'Error'
    };
  },
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  // When the new message comes down, it's gonna get put into the dom and then inside of the componentDidMount.
  // We open up the modal and customize message and title, and let it show to the user
  // componentDidMount gets called immediately after the DOM has been updated
  componentDidMount: function () {
    var modal = new Foundation.Reveal($('#error-modal')); // new instance of our modal
    modal.open();
  },
  render: function () {
    var {title, message} = this.props;
    return (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">
            Okay
          </button>
        </p>
      </div>
    );
  }
});

module.exports = ErrorModal;
