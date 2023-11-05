# Code-Splitting-React

Bundling is great, but as your app grows, your bundle will grow too. Especially if you are including large third-party libraries. You need to keep an eye on the code you are including in your bundle so that you don’t accidentally make it so large that your app takes a long time to load.
Code-Splitting is a feature supported by bundlers like Webpack, Rollup and Browserify (via factor-bundle) which can create multiple bundles that can be dynamically loaded at runtime.
Code splitting consists of separating the code into several packages or components that can be loaded on demand or in parallel. This means that they are not loaded until they are needed.
The page still loads the same amount of code, but the difference is because the page may not execute all the code it loads.

## Benefits of code splitting

The speed at which a website loads and displays content becomes faster.
The interaction time improves.
The percentage of users who abandon the web page without interacting with it decreases.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
