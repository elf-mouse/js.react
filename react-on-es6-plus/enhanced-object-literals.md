## Dynamic property names & template strings

```js
var Form = React.createClass({
  onChange: function(inputName, e) {
    var stateToSet = {};
    stateToSet[inputName + 'Value'] = e.target.value;
    this.setState(stateToSet);
  },
});
```

```js
class Form extends React.Component {
  onChange(inputName, e) {
    this.setState({
      [`${inputName}Value`]: e.target.value,
    });
  }
}
```
