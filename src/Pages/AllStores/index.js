import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import RegularTables from "./RegularTables";
import AppHeader from "../../Layout/AppHeader/";
import AppFooter from "../../Layout/AppFooter/";

const AllStores = ({ match }) => (
  <Fragment>
    <AppHeader />
    <div className="app-main">
      <div className="app-main__inner">
        <Route path={`${match.url}`} component={RegularTables} />
      </div>
      <AppFooter />
    </div>
  </Fragment>
);

export default AllStores;
