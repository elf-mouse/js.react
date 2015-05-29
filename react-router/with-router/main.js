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
        <a href="#inbox/message/Jkei3c32">Jkei3c32</a>
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
  /*getInitialState: function() {
    return {
      message: ''
    };
  },*/
  componentDidMount: function () {
    // from the path `/inbox/messages/:id`
    console.log(this.context.router.getCurrentParams());
    var id = this.props.params.id;
    console.log(this.props.params);
    //fetchMessage(id, function (err, message) {
      //this.setState({ message: message });
    //})
  },
  render: function () {
    console.log(this.context.router.getCurrentParams());
    return <h3>Message</h3>;
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
        <RouteHandler {...this.props}/>
      </div>
    )
  }
});

// declare our routes and their hierarchy
var routes = (
  <Route path="/" handler={App}>
    <DefaultRoute handler={Home}/>
    <Route path="about" handler={About}/>
    <Route path="about/company" handler={Company}/>
    <Route path="/inbox" handler={Inbox}>
      <Route name="message" path="/message/:id" handler={Message}/>
      <Redirect from="/messages/:id" to="message"/>
      /*<Route path="/archive/messages/:id" handler={Message}/>*/
    </Route>
    <NotFoundRoute handler={NotFound}/>
  </Route>
);

Router.run(routes, Router.HashLocation, (Root, state) => {
  var params = state.params;
  React.render(<Root params={params}/>, document.body);
});
