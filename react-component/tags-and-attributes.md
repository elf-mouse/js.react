## Supported Tags

### HTML Elements

```html
a abbr address area article aside audio b base bdi bdo big blockquote body br
button canvas caption cite code col colgroup data datalist dd del details dfn
dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5
h6 head header hr html i iframe img input ins kbd keygen label legend li link
main map mark menu menuitem meta meter nav noscript object ol optgroup option
output p param picture pre progress q rp rt ruby s samp script section select
small source span strong style sub summary sup table tbody td textarea tfoot th
thead time title tr track u ul var video wbr
```

### SVG elements

```svg
circle clipPath defs ellipse g line linearGradient mask path pattern polygon polyline
radialGradient rect stop svg text tspan
```

## Supported Attributes

React supports all `data-*` and `aria-*` attributes as well as every attribute in the following lists.

> __Note:__  
> All attributes are camel-cased and the attributes `class` and `for` are `className` and `htmlFor`, respectively, to match the DOM API specification.

### HTML Attributes

```html
accept acceptCharset accessKey action allowFullScreen allowTransparency alt
async autoComplete autoFocus autoPlay cellPadding cellSpacing charSet checked
classID className colSpan cols content contentEditable contextMenu controls
coords crossOrigin data dateTime defer dir disabled download draggable encType
form formAction formEncType formMethod formNoValidate formTarget frameBorder
headers height hidden high href hrefLang htmlFor httpEquiv icon id label lang
list loop low manifest marginHeight marginWidth max maxLength media mediaGroup
method min multiple muted name noValidate open optimum pattern placeholder
poster preload radioGroup readOnly rel required role rowSpan rows sandbox scope
scoped scrolling seamless selected shape size sizes span spellCheck src srcDoc
srcSet start step style tabIndex target title type useMap value width wmode
```

In addition, the following non-standard attributes are supported:

* `autoCapitalize` `autoCorrect` for Mobile Safari.
* `property` for [Open Graph](http://ogp.me/) meta tags.
* `itemProp` `itemScope` `itemType` `itemRef` `itemID` for [HTML5 microdata](http://schema.org/docs/gs.html).
* `unselectable` for Internet Explorer.

There is also the React-specific attribute `dangerouslySetInnerHTML`, used for directly inserting HTML strings into a component.

### SVG Attributes

```svg
clipPath cx cy d dx dy fill fillOpacity fontFamily fontSize fx fy
gradientTransform gradientUnits markerEnd markerMid markerStart offset opacity
patternContentUnits patternUnits points preserveAspectRatio r rx ry
spreadMethod stopColor stopOpacity stroke strokeDasharray strokeLinecap
strokeOpacity strokeWidth textAnchor transform version viewBox x1 x2 x y1 y2 y
```
