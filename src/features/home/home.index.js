import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { ROLE_ADMIN } from "../../constants/role.constants";
import NotFound from "../../common/404/404NotFound.index";
import AdminHome from "./admin/admin.index";

class Home extends Component {
  state = { role: "ADMIN" };
  render() {
    var role = this.state.role;
    var page;
    switch (role) {
      case ROLE_ADMIN:
        page = <AdminHome {...this.props}/>;
        break;
      default:
        page = <NotFound />;
        break;
    }
    return page;
  }
}

export default withRouter(Home);
