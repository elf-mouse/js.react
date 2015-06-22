import React from 'react';

export class Header extends React.Component {
  render() {
    return <h1>Header</h1>;
  }
}

export class Browse extends React.Component {
  render() {
    return (
      <div>
        <h3>This is the Browse View</h3>
        <p>First url param: {this.props.params[0] || 'none'}</p>
          Go to: <a href='#about'>About</a>
      </div>
    );
  }
}

export class About extends React.Component {
 render() {
    return (
      <div>
        <h3>This is the About View</h3>
        Go to:
        <ul>
          <li><a href='#browse'>browse</a></li>
          <li><a href='#browse/item123'>browse/item123</a></li>
        </ul>
     </div>
    );
  }
}

export class Error404 extends React.Component {
 render() {
    return (
      <div>
        <h3>This is the 404 Error View</h3>
        Go to: <a href='#browse'>Browse</a>
     </div>
    );
  }
}

