## Destructuring & spread attributes

```js
class AutoloadingPostsGrid extends React.Component {
  render() {
    var {
      className,
      ...others,  // contains all properties of this.props except for className
    } = this.props;
    return (
      <div className={className}>
        <PostsGrid {...others} />
        <button onClick={this.handleLoadMoreClick}>Load more</button>
      </div>
    );
  }
}
```

We can combine JSX spread attributes with regular attributes too, taking advantage of a simple precedence rule to implement overrides and defaults. This element will acquire the `className` “override” even if there exists a `className` property in `this.props`:

```js
<div {...this.props} className="override">
  …
</div>
```

This element will regularly have the `className` “base” unless there exists a `className` property in `this.props` to override it:

```js
<div className="base" {...this.props}>
  …
</div>
```
