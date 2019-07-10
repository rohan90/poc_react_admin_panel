import React, { Component } from "react";
import MiniDrawer from "./admin.drawer.index";
import CustomerDashboard from "../../customers/customer.index";
import FacilityDashboard from "../../facilities/facility.index";
import { Route } from "react-router-dom";
class AdminHome extends Component {
  state = {};

  render() {
    const { match } = this.props;
    return (
      <>
        <MiniDrawer {...this.props}>
          hello
          <Route
            path={`${match.url}/admin/customer`}
            component={CustomerDashboard}
          />
          <Route
            path={`${match.url}/admin/facility`}
            component={FacilityDashboard}
          />
          what
        </MiniDrawer>
        />
        {/* <Route
          path={`${match.url}/admin/customer`}
          component={CustomerDashboard}
        />
        <Route
          path={`${match.url}/admin/facility`}
          component={FacilityDashboard}
        /> */}
      </>
    );
  }
}

export default AdminHome;
