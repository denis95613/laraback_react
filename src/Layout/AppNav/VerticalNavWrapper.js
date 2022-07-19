import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";

import MetisMenu from "react-metismenu";

import { MainNav, ComponentsNav } from "./NavItems";

const Nav = (props) => {
  return (
    <Fragment>
      <h5 className="app-sidebar__heading">Menu</h5>
      <MetisMenu
        content={MainNav}
        activeLinkFromLocation
        className="vertical-nav-menu"
        iconNamePrefix=""
        classNameStateIcon="pe-7s-angle-down"
      />
      <h5 className="app-sidebar__heading">UI Components</h5>
      <MetisMenu
        content={ComponentsNav}
        activeLinkFromLocation
        className="vertical-nav-menu"
        iconNamePrefix=""
        classNameStateIcon="pe-7s-angle-down"
      />
    </Fragment>
  );
};

export default withRouter(Nav);
