var FocusComponent = React.createClass({
  getInitialState: function() {
    return {
      userInput: 'focus'
    };
  },
  handleFocus: function(event) {
    console.info('onFocus');
    this.setState({
      userInput: 'oo'
    });
  },
  handleBlur: function(event) {
    console.info('onBlur');
    this.setState({
      userInput: 'xx'
    });
  },
  render: function() {
    return (
      <div>
        <input value={this.state.userInput} onFocus={this.handleFocus} onBlur={this.handleBlur} readOnly />
      </div>
    );
  }
});
