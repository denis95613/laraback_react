import React, { Fragment } from "react";

const AppFooter = () => {
  return (
    <Fragment>
      <div className="app-footer text-center p-2 text-white">
        <div className="app-footer-text">
          The email will be received on larabackpro@givmail.com{" "}
          <a href="https://mailtrap.io" target="_blank">
            https://mailtrap.io
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default AppFooter;
