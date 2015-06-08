class Item extends React.Component {
  handleClick() {
    this.props.changeTab(this.props.tabIndex);
  }

  render() {
    let className = 'item item-' + this.props.tabIndex;
    if (this.props.active) {
      className += ' active';
    }
    return (
      <li className={className} onClick={this.handleClick.bind(this)}>
        {this.props.name}
      </li>
    );
  }
}

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activeTabIndex: 0};
  }

  changeTab(tabIndex) {
    this.setState({
      activeTabIndex: tabIndex
    });
  }

  getItems() {
    let activeTabIndex = this.state.activeTabIndex;
    let changeTab = this.changeTab.bind(this);
    return this.props.list.map((value, key) => {
      return <Item key={key}
                   name={value}
                   tabIndex={key}
                   active={key===activeTabIndex}
                   changeTab={changeTab}/>
    });
  }

  render() {
    return (
      <ul className="list">
        {this.getItems()}
      </ul>
    );
  }
}

var data = ['menu1', 'menu2', 'menu3'];
React.render(<Tab list={data}/>, document.getElementById('example'));
