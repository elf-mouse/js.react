import React from 'react';
import {Header, Browse, About, Error404 } from './components/SampleComponents';

export default class App extends React.Component {

  render() {

    switch(this.props.route) {
      case "browse":
        return (
          <div>
            <Header />
            <Browse params={this.props.params} />
          </div>
      );
      case "about":
        return (
          <div>
            <Header />
            <About />
          </div>
      );

      default:
        return (
          <div>
            <Header />
            <Error404 />
          </div>
      );
    }
  }
}

