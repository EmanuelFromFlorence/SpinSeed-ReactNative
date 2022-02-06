# SpinSeed

## Quick Start

### 1. Run `yarn install`

This will install both run-time project dependencies and developer tools listed
in [package.json](package.json) file.

### 2. Run `yarn start`

Runs the app in the development mode.

Open http://localhost:3000 to view it in the browser. Whenever you modify any of the source files inside the `/src` folder,
the module bundler ([Webpack](http://webpack.github.io/)) will recompile the
app on the fly and refresh all the connected browsers.

### 3. Run `yarn build`

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

## Docker

1. Build an image `docker build -t sofia-react .`
2. Run a container `docker run -p 3000:3000 -d sofia-react`
3. Now you can open the app in a web-browser `http://localhost:3000`

## Support

For any additional information please go to our [**support forum**](https://flatlogic.com/forum) and raise your questions or feedback provide there. We highly appreciate your participation!
