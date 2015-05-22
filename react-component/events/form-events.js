var fromHandle = {
  fromChange: function(event) {
    console.info('form onChange');
  },
  fromInput: function(event) {
    console.info('form onInput');
  },
  fromSubmit: function(event) {
    alert('form onSubmit');
  }
};

var FormComponent = React.createClass({
  mixins: [fromHandle],
  getInitialState: function() {
    return {value: 'Hello!'};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value.substr(0, 140)});
    console.log(event.target.value);
  },
  render: function() {
    var value = this.state.value;
    return (
      <div>
        <form action="/" onChange={this.fromChange} onInput={this.fromInput} onSubmit={this.fromSubmit}>
          <fieldset>
            <legend>My Form</legend>
            <p><input type="text" value="value: Hello!" /></p>
            <p><input type="text" value={value} onChange={this.handleChange} /></p>
            <p><input type="text" defaultValue="defaultValue: Hello!" /></p>
            <p><button type="submit">Submit</button></p>
          </fieldset>
        </form>
        <AdvancedFormComponent />
      </div>
    );
  }
});

var AdvancedFormComponent = React.createClass({
  getInitialState: function() {
    return {
      option: 'B',
      options: ['B', 'C']
    };
  },
  singleHandleChange: function(event) {
    this.setState({
      option: event.target.value
    });
  },
  multipleHandleChange: function(event) {
    var options = this.state.options;
    var value = event.target.value;
    var index = options.indexOf(value);
    if (index === -1) {
      options.push(value);
    } else {
      options.splice(index, 1);
    }
    this.setState({
      options: options
    });
  },
  render: function() {
    return (
      <div>
        <p><textarea name="description" value="This is a description." /></p>
        <p>
          <select value={this.state.option} onChange={this.singleHandleChange}>
            <option value="A">Apple</option>
            <option value="B">Banana</option>
            <option value="C">Cranberry</option>
          </select>
        </p>
        <p>
          <select multiple={true} value={this.state.options} onChange={this.multipleHandleChange}>
            <option value="A">Apple</option>
            <option value="B">Banana</option>
            <option value="C">Cranberry</option>
          </select>
        </p>
      </div>
    );
  }
});
