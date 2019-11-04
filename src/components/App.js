import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import Home from "../containers/Home";

export class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;