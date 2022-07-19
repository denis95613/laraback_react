import React, { Fragment, useState } from "react";
import { connect } from "react-redux";

import { Slider } from "react-burgers";

import cx from "classnames";

import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button } from "reactstrap";

import {
  setEnableMobileMenu,
  setEnableMobileMenuSmall,
} from "../../reducers/ThemeOptions";

const AppMobileMenu = (props) => {
  const [active, setActive] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [activeSecondaryMenuMobile, setActiveSecondaryMenuMobile] =
    useState(false);
  const [openLeft, setOpenLeft] = useState(false);
  const [openRight, setOpenRight] = useState(false);
  const [relativeWidth, setRelativeWidth] = useState(false);
  const [width, setWidth] = useState(280);
  const [noTouchOpen, setNoTouchOpen] = useState(false);
  const [noTouchClose, setNoTouchClose] = useState(false);

  const toggleMobileSidebar = () => {
    let { enableMobileMenu, setEnableMobileMenu } = props;
    setEnableMobileMenu(!enableMobileMenu);
  };

  const toggleMobileSmall = () => {
    let { enableMobileMenuSmall, setEnableMobileMenuSmall } = props;
    setEnableMobileMenuSmall(!enableMobileMenuSmall);
  };

  let { enableMobileMenu } = props;

  return (
    <Fragment>
      <div className="app-header__mobile-menu">
        <div onClick={toggleMobileSidebar}>
          <Slider
            active={enableMobileMenu}
            type="elastic"
            onClick={() => setActiveMobile(!activeMobile)}
          />
        </div>
      </div>
      <div className="app-header__menu">
        <span onClick={toggleMobileSmall}>
          <Button
            size="sm"
            className={cx("btn-icon btn-icon-only", {
              active: activeSecondaryMenuMobile,
            })}
            color="primary"
            onClick={() =>
              setActiveSecondaryMenuMobile(!activeSecondaryMenuMobile)
            }
          >
            <div className="btn-icon-wrapper">
              <FontAwesomeIcon icon={faEllipsisV} />
            </div>
          </Button>
        </span>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  closedSmallerSidebar: state.ThemeOptions.closedSmallerSidebar,
  enableMobileMenu: state.ThemeOptions.enableMobileMenu,
  enableMobileMenuSmall: state.ThemeOptions.enableMobileMenuSmall,
});

const mapDispatchToProps = (dispatch) => ({
  setEnableMobileMenu: (enable) => dispatch(setEnableMobileMenu(enable)),
  setEnableMobileMenuSmall: (enable) =>
    dispatch(setEnableMobileMenuSmall(enable)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppMobileMenu);
