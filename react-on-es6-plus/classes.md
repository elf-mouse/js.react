## Classes

```js
class Photo extends React.Component {
  render() {
    return <img alt={this.props.caption} src={this.props.src} />;
  }
}
```

```js
// The ES5 way
var Photo = React.createClass({
  handleDoubleTap: function(e) { … },
  render: function() { … },
});

// The ES6+ way
class Photo extends React.Component {
  handleDoubleTap(e) { … }
  render() { … }
}
```

```js
// The ES5 way
var EmbedModal = React.createClass({
  componentWillMount: function() { … },
});

// The ES6+ way
class EmbedModal extends React.Component {
  constructor(props) {
    super(props);
    // Operations usually carried out in componentWillMount go here
  }
}
```
