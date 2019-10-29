import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Login from "./features/login/login.index";
import Home from "./features/home/home.index";
import NotFound from "./common/404/404NotFound.index";
import { Provider } from "react-redux";
import store from "./App.store";
import Loader from "./common/loader/loader.index";
import { Container } from "@material-ui/core";
import CustomToolbar from "./common/custom_tool_bar/customtoolbar.index";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Loader />
        {/* <CustomToolbar title="Portal" /> */}
        <BrowserRouter>
          <Redirect exact from="/" to="/login" />
          <Switch>
            <Route
              {...this.props}
              path="/login"
              render={props => <Login {...this.props} />}
            />
            <Route
              {...this.props}
              path="/home"
              render={props => <Home {...this.props} />}
            />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
