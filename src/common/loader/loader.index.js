import React, { Component } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { connect } from "react-redux";

class Loader extends Component {
  render() {
    var visible = this.props.loader;
    if (visible) return <LinearProgress />;
    return <div />;
  }
}

function mapStateToProps(state) {
  return {
    loader: state.loader
  };
}

export default connect(mapStateToProps)(Loader);
