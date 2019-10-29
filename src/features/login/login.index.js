import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { Container, Grid, Paper, Button } from "@material-ui/core";
import LoginService from "./login.service.js";
import Log from "../../common/logging/log.js";
import Home from "../home/home.index.js";
import { Redirect } from "react-router-dom";
import { showLoader, hideLoader } from "../../common/loader/loader.actions";
import { setTitle } from "../../common/custom_tool_bar/customtoolbar.actions";
import { connect } from "react-redux";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      isLoggedIn: false,
      title: "Login"
    };
    this.service = new LoginService();
  }

  onComponentDidMount() {
    // this.props.dispatch(setTitle("Login"));
  }

  showLoader = () => {
    this.props.dispatch(showLoader());
  };
  hideLoader = () => {
    this.props.dispatch(hideLoader());
  };

  onLoginClicked = () => {
    this.showLoader();
    const payload = {
      username: this.state.username,
      password: this.state.password
    };

    this.setState({ isLoggedIn: true });
    // this.service.performLogin(payload).then(
    //   success => {
    //     this.hideLoader();
    //     Log.info("login successfull");
    //     this.setState({ isLoggedIn: true });
    //   },
    //   error => {
    //     this.hideLoader();
    //     Log.info("login failed" + error);
    //   }
    // );
  };

  onUsernameEntered = event => {
    this.setState({ username: event.target.value });
  };

  onPasswordEntered = event => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <>
        {this.state.isLoggedIn ? (
          <Redirect to="/home" />
        ) : (
          <div>
            <Paper>
              <Grid style={{ margin: 10 }}>
                <TextField
                  variant="outlined"
                  xs={6}
                  required
                  id="tfUsername"
                  label="Username"
                  name="username"
                  type="text"
                  onChange={this.onUsernameEntered}
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid style={{ margin: 10 }}>
                <TextField
                  xs={6}
                  required
                  id="tfPassword"
                  label="Password"
                  name="password"
                  type="password"
                  onChange={this.onPasswordEntered}
                  fullWidth
                  variant="outlined"
                  margin="normal"
                />
              </Grid>
              <Button
                style={{ margin: 10 }}
                xs={6}
                id="btnSubmit"
                variant="contained"
                color="primary"
                onClick={this.onLoginClicked}
              >
                Login
              </Button>
            </Paper>
          </div>
        )}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    loader: state.loader
  };
}
// export default Login;
export default connect(mapStateToProps)(Login);
