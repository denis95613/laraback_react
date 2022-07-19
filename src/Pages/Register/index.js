import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import RegularTables from "./RegularTables";
import AppHeader from "../../Layout/AppHeader/";
import AppSidebar from "../../Layout/AppSidebar/";
import AppFooter from "../../Layout/AppFooter/";

const Register = ({ match }) => (
  <Fragment>
    <AppHeader />
    <div className="app-main">
      <AppSidebar />
      <div className="app-main__outer">
        <div className="app-main__inner">
          <Route path={`${match.url}`} component={RegularTables} />
        </div>
        <AppFooter />
      </div>
    </div>
  </Fragment>
);

export default Register;
