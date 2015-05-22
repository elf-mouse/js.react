var TouchComponent = React.createClass({
  componentWillMount: function() {
    React.initializeTouchEvents(true);
  },
  handleTouchCancel: function(event) {
    console.info('onTouchCancel');
  },
  handleTouchEnd: function(event) {
    console.info('onTouchEnd');
  },
  handleTouchMove: function(event) {
    console.info('onTouchMove');
  },
  handleTouchStart: function(event) {
    console.info('onTouchStart');
  },
  render: function() {
    return (
      <div className="container"
           onTouchCancel={this.handleTouchCancel}
           onTouchEnd={this.handleTouchEnd}
           onTouchMove={this.handleTouchMove}
           onTouchStart={this.handleTouchStart}
           >
           Touch area
      </div>
    );
  }
});
