
## Overview, and Tooling
I bootstrapped this project with [Create React App](https://github.com/facebook/create-react-app) and structured it using [Rails-Style-Structure](https://www.learnhowtoprogram.com/react/advanced-topics/react-and-redux-design-patterns). 

For centralized state management, I utilized [Redux](https://redux.js.org/), using [Redux-Thunk](https://github.com/reduxjs/redux-thunk) middleware for my async action creators, and [React-Redux Connect](https://react-redux.js.org/) to connect my containers to the redux store.

For testing, I utilized Jest and created both unit tests and [snapshot tests](https://jestjs.io/docs/en/snapshot-testing). For rendering my snapshot tests, I utilized shallow rendering.

To be candid, I did very little styling but utilized [styled-components](https://www.styled-components.com/) to add some styling to the page. I aimed to focus on architecture, tooling, and pattern consistency.

## Steps to Install And Run

### `yarn install`
*To Install add dependencies needed to run the application*

### `yarn start`
*To start the application in a browser via port 3000*

### Worth Noting:
The YouTubeAPI key exists in a config file in the src folder. This may need to be updated with a new API key if the API reaches its quota.


## Available Scripts

 

In the project directory, you can run:

  

### `yarn start`

  

Runs the app in the development mode.<br  />

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

  

The page will reload if you make edits.<br  />

You will also see any lint errors in the console.

  

### `yarn test`

  

Launches the test runner in the interactive watch mode.<br  />

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

  
  ### `yarn test:debug`
This is a script I added to easily debug jest tests by inspecting them via chrome.

See [this](https://jestjs.io/docs/en/troubleshooting) documentation for for more information.


 
### `yarn build`

  

Builds the app for production to the `build` folder.<br  />

It correctly bundles React in production mode and optimizes the build for the best performance.

  

The build is minified and the filenames include the hashes.<br  />

Your app is ready to be deployed!

  

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

  

### `yarn eject`

  

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

  

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

  

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point, you’re on your own.

  

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However, we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

  

## Learn More

  

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

  

To learn React, check out the [React documentation](https://reactjs.org/).

  

### Code Splitting

  

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

  

### Analyzing the Bundle Size

  

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

  

### Making a Progressive Web App

  

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

  

### Advanced Configuration

  

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

  

### Deployment

  

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

  

### `yarn build` fails to minify

  

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify