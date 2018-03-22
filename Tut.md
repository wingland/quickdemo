
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



## 2. Introduce React for web app development

To start easily with [react](https://reactjs.org/docs) on parcel. We simply install React following  doc [Add Add React to an Existing Application](https://reactjs.org/docs/add-react-to-an-existing-app.html). We will not use create-react-app, though it is powerful, but is based on webpack.

```
npm install --save react react-dom
```

There is no need to introduce `babel`, as parcel covers it already. We can write ES6 with React now.

Change our code in [index.js](./src/index.js) to react render function in [example](https://reactjs.org/docs/add-react-to-an-existing-app.html#hello-world-with-es6-and-jsx).


```javascript
ReactDOM.render(
  (<React.Fragment>
    <h1>My App</h1>
    <p>{sayHello('jesse')}</p>
  </React.Fragment>
  ),
  document.getElementById('root')
);
```

The above code is rough, and we definitely need to modularize our web code. React components allows us to separate our web pages into different parts.
And we use ES6 class syntax to improve the way we wrote React compoents.
For details, please go to [React components & props](https://reactjs.org/docs/components-and-props.html).

Let's make a structure, and we want to first provide a welcome component.

I read a very good [article](https://hackernoon.com/the-100-correct-way-to-structure-a-react-app-or-why-theres-no-such-thing-3ede534ef1ed) for some thoughts on the structuring of a React App. But in current case, this is fair simple.

You could use some React snippets extensions on your IDE to speed up the setup of your components.

e.g. VS Code Extensions:

1. https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets
1. https://marketplace.visualstudio.com/items?itemName=EQuimper.react-native-react-redux-snippets-for-es6-es7-version-standard


```
src
├── components
│   ├── app.js
│   └── welcome.js
├── index.html
└── index.js

1 directory, 4 files
```

The structure looks like above. we put React components inside components, where we can still nest the child components as needed

The `index.js` as the entry will render App from `./components/app.js`, which contains a child component called `Welcome`:


A welcome component is like below:

```js
import React, { Component } from 'react';
import { sayHello } from '../../my-module/module-a';

class Welcome extends Component {
  state = {
    welcome: ''
  }

  componentDidMount(){
    this.setState({
      welcome: sayHello('Jesse')
    });
  }
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>My App</h1>
        <p>{this.state.welcome}</p>
      </div>
    );
  }
}

export default Welcome;
```
We import our `module-a` like before.

Note that this does not work now, since `state = {} ` is using [ES7 property intializer syntax](https://reactjs.org/blog/2015/01/27/react-v0.13.0-beta-1.html#es7-property-initializers), which is similar like the variable member in Java, but not supported in standard ES6. And the default babel config from parcel does not provide that ES7+ syntax by default.

To fix it, we need this babel plugin [transform-class-properties](http://babeljs.io/docs/plugins/transform-class-properties/)


```
npm install --save-dev babel-preset-env
npm install --save-dev babel-preset-react
```

 Add `.babelrc` file in root dir.

```
{
  "plugins": ["transform-class-properties"]
}
```
