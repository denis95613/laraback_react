import { Route, Redirect } from "react-router-dom";
import React, { Suspense, lazy, Fragment } from "react";
import { ToastContainer } from "react-toastify";

const Dashboards = lazy(() => import("../../Pages/Dashboards"));
const Login = lazy(() => import("../../Pages/Login"));
const Register = lazy(() => import("../../Pages/Register"));
const AllStores = lazy(() => import("../../Pages/AllStores"));
const Profile = lazy(() => import("../../Pages/Profile"));

const AppMain = () => {
  return (
    <Fragment>
      {/* Login */}
      <Suspense
        fallback={
          <div className="loader-container">
            <div className="loader-container-inner">
              <h6 className="mt-5">
                Please wait while we load all the Tables examples
                <small>
                  Because this is a demonstration we load at once all the Tables
                  examples. This wouldn't happen in a real live app!
                </small>
              </h6>
            </div>
          </div>
        }
      >
        <Route path="/login" component={Login} />
      </Suspense>
      {/* Register */}
      <Suspense
        fallback={
          <div className="loader-container">
            <div className="loader-container-inner">
              <h6 className="mt-5">
                Please wait while we load all the Tables examples
                <small>
                  Because this is a demonstration we load at once all the Tables
                  examples. This wouldn't happen in a real live app!
                </small>
              </h6>
            </div>
          </div>
        }
      >
        <Route path="/register" component={Register} />
      </Suspense>
      {/* Dashboards */}
      <Suspense
        fallback={
          <div className="loader-container">
            <div className="loader-container-inner">
              <h6 className="mt-3">
                Please wait while we load all the Dashboards examples
                <small>
                  Because this is a demonstration, we load at once all the
                  Dashboards examples. This wouldn't happen in a real live app!
                </small>
              </h6>
            </div>
          </div>
        }
      >
        <Route path="/dashboard" component={Dashboards} />
      </Suspense>
      {/* All Stores */}
      <Suspense
        fallback={
          <div className="loader-container">
            <div className="loader-container-inner">
              <h6 className="mt-5">
                Please wait while we load all the Tables examples
                <small>
                  Because this is a demonstration we load at once all the Tables
                  examples. This wouldn't happen in a real live app!
                </small>
              </h6>
            </div>
          </div>
        }
      >
        <Route path="/all-stores" component={AllStores} />
      </Suspense>
      {/* Profile */}
      <Suspense
        fallback={
          <div className="loader-container">
            <div className="loader-container-inner">
              <h6 className="mt-3">
                Please wait while we load all the Dashboards examples
                <small>
                  Because this is a demonstration, we load at once all the
                  Dashboards examples. This wouldn't happen in a real live app!
                </small>
              </h6>
            </div>
          </div>
        }
      >
        <Route path="/user/" component={Profile} />
      </Suspense>
      <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
      <ToastContainer />
    </Fragment>
  );
};

export default AppMain;
