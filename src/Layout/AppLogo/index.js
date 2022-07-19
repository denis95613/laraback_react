import React, { Fragment, useState } from "react";
import logo from "../../assets/utils/images/logo.png";

const HeaderLogo = (props) => {
  return (
    <Fragment>
      <div style={{ paddingLeft: "20px" }}>
        <img width={200} src={logo} alt="" />
      </div>
    </Fragment>
  );
};

export default HeaderLogo;
