var Example = React.createClass({
  getInitialState: function () {
    return {
      test: true
    };
  },
  onClick: function(ev) {
    ev.persist();
    console.log('ev before: ', ev);
    console.log('ev.currentTarget before: ', ev.currentTarget);
    console.log('ev.target before: ', ev.target);
    this.setState( { test : false }, function () {
      console.log('ev after: ', ev); // ev.persist();
      console.log('ev.currentTarget after: ', ev.currentTarget);
    });
  },
  render: function() {
    return (<div onClick={this.onClick}>Click Me</div>);
  }
});

React.render(<Example />, document.body);
