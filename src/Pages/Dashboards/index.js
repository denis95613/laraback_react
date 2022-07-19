import React, { Fragment } from "react";
import { Route } from "react-router-dom";

// DASHBOARDS

import BasicDashboard from "./Basic/";

// Layout

import AppHeader from "../../Layout/AppHeader/";
import AppSidebar from "../../Layout/AppSidebar/";
import AppFooter from "../../Layout/AppFooter/";

const Dashboards = ({ match }) => (
  <Fragment>
    <AppHeader />
    <div className="app-main" style={{ paddingTop: "60px" }}>
      <div className="app-main__inner">
        <Route path={`${match.url}`} component={BasicDashboard} />
      </div>
      <AppFooter />
    </div>
  </Fragment>
);

export default Dashboards;
