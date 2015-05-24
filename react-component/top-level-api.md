# Top-Level API

```javascript
class Component

ReactClass createClass(object specification)

ReactElement createElement(
  string/ReactClass type,
  [object props],
  [children ...]
)

ReactElement cloneElement(
  ReactElement element,
  [object props],
  [children ...]
)

factoryFunction createFactory(
  string/ReactClass type
)

ReactComponent render(
  ReactElement element,
  DOMElement container,
  [function callback]
)

boolean unmountComponentAtNode(DOMElement container)

string renderToString(ReactElement element)

string renderToStaticMarkup(ReactElement element)

boolean isValidElement(* object)

DOMElement findDOMNode(ReactComponent component)

React.DOM
React.PropTypes

initializeTouchEvents(boolean shouldUseTouch)

// React.Children

object React.Children.map(object children, function fn [, object context])

React.Children.forEach(object children, function fn [, object context])

number React.Children.count(object children)

object React.Children.only(object children)
```
