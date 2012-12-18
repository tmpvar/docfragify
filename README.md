#docfragify

browserify + html -> document fragments

## Usage

first install docfragify in your project `npm install docfragify`

then include it in your browserify command line

`browserify /path/to/entry.js -p docfragify`

now, you can require `.html` files and the resulting document fragment will be returned to you

## example

span.html

```html
<span>I'm a fragment!</span>
```

entry.js

```javascript

var content = require('./span.html');

document.body.appendChild(content);

```