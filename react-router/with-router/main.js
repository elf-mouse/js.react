//var Router = require('react-router');
var Router = ReactRouter;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;
var Redirect = Router.Redirect;

var About = React.createClass({
  render: function () {
    return (
      <div>
        <h2>About</h2>
        <a href="#/about/company">Company</a>
      </div>
    );
  }
});

var Company = React.createClass({
  render: function () {
    return <h3>Company</h3>;
  }
});

var Inbox = React.createClass({
  render: function () {
    return (
      <div>
        <h2>Inbox</h2>
        <ul>
          <li><a href="#inbox/messages/hello">Hello</a></li>
          <li><a href="#inbox/messages/world">World</a></li>
        </ul>
        <RouteHandler/>
      </div>
    )
  }
});

var Home = React.createClass({
  render: function () {
    return <h2>Home</h2>;
  }
});

var Message = React.createClass({
  componentDidMount: function () {
    // from the path `/inbox/messages/:id`
    var id = this.props.params.id;
    console.log(id);
    //fetchMessage(id, function (err, message) {
      //this.setState({ message: message });
    //})
  },
  render: function () {
    return <h3>Message: {this.props.params.id}</h3>;
  }
});

var NotFound = React.createClass({
  render: function () {
    return <h2>NotFound</h2>;
  }
});

var App = React.createClass({
  render () {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#inbox">Inbox</a></li>
          <li><a href="#about">About</a></li>
        </ul>
        <RouteHandler/>
      </div>
    )
  }
});

// declare our routes and their hierarchy
var routes = (
  <Route handler={App}>
    <DefaultRoute handler={Home}/>
    <Route path="about" handler={About}/>
    <Route path="about/company" handler={Company}/>
    <Route path="inbox" handler={Inbox}>
      <Route name="message" path=":messageId" handler={Message}/>
      <Route path="messages/:id" handler={Message}/>
      <Route path="/archive/messages/:id" handler={Message}/>
    </Route>
    <NotFoundRoute handler={NotFound}/>
  </Route>
);

Router.run(routes, Router.HashLocation, (Root, state) => {
  React.render(<Root/>, document.body);
});
