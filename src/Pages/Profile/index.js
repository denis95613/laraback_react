import React, { Fragment, useState } from "react";
import { Route } from "react-router-dom";
import AppHeader from "../../Layout/AppHeader";
import Probar from "./common/probar";
import Overview from "./common/overview";
import Payment from "./common/payment";
import Activities from "./common/activities";
import Missing from "./common/missing";
import Refer from "./common/refer";
import Share from "./common/share";
import Favorities from "./common/favorities";
import Setting from "./common/setting";

const Profile = ({ match }) => {
  return (
    <Fragment>
      <AppHeader />
      <div className="app-main">
        <div className="app-main__inner">
          <div className="row main-content">
            <div className="col-lg-3">
              <Probar />
            </div>
            <div className="col-lg-9">
              <Route path={`${match.url}/overview`} component={Overview} />
              <Route path={`${match.url}/payment`} component={Payment} />
              <Route path={`${match.url}/activities`} component={Activities} />
              <Route path={`${match.url}/missing`} component={Missing} />
              <Route path={`${match.url}/refer`} component={Refer} />
              <Route path={`${match.url}/share`} component={Share} />
              <Route path={`${match.url}/favorities`} component={Favorities} />
              <Route path={`${match.url}/setting`} component={Setting} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
