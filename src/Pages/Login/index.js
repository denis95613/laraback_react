import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { Row, Col } from "reactstrap";

import LoginPage from "./login";
import Logo from "../../Layout/AppLogo";
import AppHeader from "../../Layout/AppHeader/";
import AppSidebar from "../../Layout/AppSidebar/";
import AppFooter from "../../Layout/AppFooter/";
import formGit from "../../assets/utils/images/lara/form-gift.svg";

const Login = ({ match }) => (
  <Fragment>
    <div style={{ width: "100%", background: "#fdf8f3" }}>
      <div
        style={{
          paddingTop: "30px",
          paddingBottom: "15px",
          textAlign: "center",
        }}
      >
        <Logo />
      </div>
      <Row>
        <Col sm={4}></Col>
        <Col sm={4}>
          <div className="main-content-form d-guest">
            <div className="get-cashback-btn">
              <div className="me-2">
                <img
                  className="lozad"
                  src={formGit}
                  alt="Gift"
                  data-loaded="true"
                />
              </div>
              <div className="text-center">
                Sign up &amp; get{" "}
                <span style={{ color: "rebeccapurple" }}>$50.00 </span> Today
              </div>
            </div>
            <Route path={`${match.url}`} component={LoginPage} />
          </div>
        </Col>
        <Col sm={4}></Col>
      </Row>
    </div>
  </Fragment>
);

export default Login;
