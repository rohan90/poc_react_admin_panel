import React, { Component } from "react";
import MiniDrawer from "./admin.drawer.index";
import CustomerDashboard from "../../customers/customer.index";
import FacilityDashboard from "../../facilities/facility.index";
import { Route } from "react-router-dom";
import { PageContainer } from "./admin.style";
class AdminHome extends Component {
  state = {};

  render() {
    const { match } = this.props;
    return (
      <>
        <MiniDrawer {...this.props} />
        <PageContainer isExpanded={this.props.isExpanded} align>
          <Route
            path={`${match.url}/admin/customers`}
            component={CustomerDashboard}
          />
          <Route
            path={`${match.url}/admin/facilities`}
            component={FacilityDashboard}
          />
        </PageContainer>
      </>
    );
  }
}

export default AdminHome;
