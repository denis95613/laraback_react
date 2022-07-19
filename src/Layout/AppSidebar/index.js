import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import cx from "classnames";

import Nav from "../AppNav/VerticalNavWrapper";

import { CSSTransition, TransitionGroup } from "react-transition-group";

import PerfectScrollbar from "react-perfect-scrollbar";
import HeaderLogo from "../AppLogo";

import { setEnableMobileMenu } from "../../store/reducers/ThemeOptions";

const AppSidebar = (props) => {
  const toggleMobileSidebar = () => {
    let { enableMobileMenu, setEnableMobileMenu } = props;
    setEnableMobileMenu(!enableMobileMenu);
  };

  let {
    backgroundColor,
    enableBackgroundImage,
    enableSidebarShadow,
    backgroundImage,
    backgroundImageOpacity,
  } = props;

  return (
    <Fragment>
      <div
        className="sidebar-mobile-overlay"
        onClick={this.toggleMobileSidebar}
      />
      <TransitionGroup>
        <CSSTransition
          component="div"
          className={cx("app-sidebar", backgroundColor, {
            "sidebar-shadow": enableSidebarShadow,
          })}
          appear={true}
          timeout={1500}
          enter={false}
          exit={false}
        >
          <div>
            <HeaderLogo />
            <PerfectScrollbar>
              <div className="app-sidebar__inner">
                <Nav />
              </div>
            </PerfectScrollbar>
            <div
              className={cx("app-sidebar-bg", backgroundImageOpacity)}
              style={{
                backgroundImage: enableBackgroundImage
                  ? "url(" + backgroundImage + ")"
                  : null,
              }}
            ></div>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  enableBackgroundImage: state.ThemeOptions.enableBackgroundImage,
  enableSidebarShadow: state.ThemeOptions.enableSidebarShadow,
  enableMobileMenu: state.ThemeOptions.enableMobileMenu,
  backgroundColor: state.ThemeOptions.backgroundColor,
  backgroundImage: state.ThemeOptions.backgroundImage,
  backgroundImageOpacity: state.ThemeOptions.backgroundImageOpacity,
});

const mapDispatchToProps = (dispatch) => ({
  setEnableMobileMenu: (enable) => dispatch(setEnableMobileMenu(enable)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppSidebar);
