## Low-level API: `ReactTransitionGroup`

* `componentWillAppear(callback)`
* `componentDidAppear()`
* `componentWillEnter(callback)`
* `componentDidEnter()`
* `componentWillLeave(callback)`
* `componentDidLeave()`

### Rendering a Different Component

By default `ReactTransitionGroup` renders as a `span`. You can change this behavior by providing a `component` prop. For example, here's how you would render a `<ul>`:

```javascript
<ReactTransitionGroup component="ul" className="animated-list">
  ...
</ReactTransitionGroup>
```
