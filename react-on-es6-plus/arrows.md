## Arrow functions

```js
// Autobinding, brought to you by React.createClass
var PostInfo = React.createClass({
  handleOptionsButtonClick: function(e) {
    // Here, 'this' refers to the component instance.
    this.setState({showOptionsModal: true});
  },
});
```

```js
// Manually bind, wherever you need to
class PostInfo extends React.Component {
  constructor(props) {
    super(props);
    // Manually bind this method to the component instance...
    this.handleOptionsButtonClick = this.handleOptionsButtonClick.bind(this);
  }
  handleOptionsButtonClick(e) {
    // ...to ensure that 'this' refers to the component instance here.
    this.setState({showOptionsModal: true});
  }
}
```
