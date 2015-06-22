import React from 'react';
import hasher from 'hasher';

import App from './App';

class Router extends React.Component {

  constructor() { super();
    hasher.init();
    this.state = {
      hashInfo: {
        route: '',
        params: []
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    hasher.changed.add(this.handleChange);
    hasher.initialized.add(this.handleChange);
  }

  getHashInfo() {
    let hash = hasher.getHash();
    let parts = hash.split('/');
    return {
       route: parts.shift(),
       params: parts
    };
  }

  render () {
    return (
      <App
        route={this.state.hashInfo.route}
        params={this.state.hashInfo.params}
      />
    );
  }

  handleChange() {
    this.setState({
      hashInfo: this.getHashInfo()
    });
  }
}

React.render(
    <Router />,
    document.getElementById('app')
);

