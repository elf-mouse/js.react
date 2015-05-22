var MyComponent = React.createClass({
  render: function() {
    return <div>Hello</div>
  }
});

var element = React.createElement(MyComponent);
// OR using JSX:
// var element = <MyComponent />;

var component = React.render(element, document.getElementById('example'));
