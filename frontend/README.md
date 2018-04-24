
# Intro
STOM...


# Build

## Dev Build
`npm install` // first time checkout

`npm start`
Dev build launches [http://localhost:3000]
Runs the app in the development mode.<br>
The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Prod Build
docker build
`npm run build`
Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.<br>

## Build Structure
For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>


# Test

## `npm test`
Launches the test runner in the interactive watch mode.<br>
