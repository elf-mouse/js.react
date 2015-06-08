var Item = React.createClass({
  handleClick: function() {
    this.props.changeTab(this.props.tabIndex);
  },
  render: function() {
    var className = 'item item-' + this.props.tabIndex;
    if (this.props.active) {
      className += ' active';
    }
    return (
      <li className={className} onClick={this.handleClick}>
        {this.props.name}
      </li>
    );
  }
});

var Tab = React.createClass({
  getInitialState: function() {
    return {
      activeTabIndex: 0
    }
  },
  changeTab: function(tabIndex) {
    this.setState({
      activeTabIndex: tabIndex
    });
  },
  getItems: function() {
    var activeTabIndex = this.state.activeTabIndex;
    var changeTab = this.changeTab;
    return this.props.list.map(function(value, key) {
      return <Item key={key}
                   name={value}
                   tabIndex={key}
                   active={key===activeTabIndex}
                   changeTab={changeTab}/>
    });
  },
  render: function() {
    return (
      <ul className="list">
        {this.getItems()}
      </ul>
    );
  }
});

var data = ['menu1', 'menu2', 'menu3'];
React.render(<Tab list={data} />, document.getElementById('example'));
