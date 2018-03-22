
## 1. Getting Started from a very simple CommonJS module

[module-a.js](./my-module/module-a.js)

This returns a string to say hello.

a. [demo.js](./demo.js) calls the function through require, node demo works as expected.

b. To use the module in web. We utilize the [parcel](https://parceljs.org/getting_started.html) bundle tool, that will transform commonjs/ES6 modules into the browser-compatible bundle codes.

Follow the [Getting Started of Parcel](https://parceljs.org/getting_started.html), we build the simple web page and related stuff in `src` directory:

[index.js](./src/index.js) provides the entry js file to the web, which uses require (common js) or import (ES6module) to import the function in lucia-module, both will be working with the help of parcel.


Let's add parcel into our package.json as dependency so we do not need to install it globally.

```
npm install parcel-bundler --save
```

Add scripts
```json
{
  "dev": "parcel src/index.html",
  "build": "parcel build src/index.html"
}
```


