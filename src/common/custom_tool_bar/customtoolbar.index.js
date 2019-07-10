import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import Log from "../logging/log";

class CustomToolbar extends Component {
  state = { title: null };
  render() {
    Log.info(this.state);
    var title = this.state.title == null ? this.props.title : this.state.title;
    return (
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

function mapStateToProps(state) {
  if (!state.title) {
    return { title: "Portal" };
  } else return { title: state.title };
}
export default connect(mapStateToProps)(CustomToolbar);
