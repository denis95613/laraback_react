import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import cx from "classnames";

import {
  Button,
  Row,
  Col,
  Modal,
  Input,
  InputGroup,
  InputGroupText,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
} from "reactstrap";
import {
  FaBox,
  FaWallet,
  FaChartBar,
  FaHandHoldingUsd,
  FaUserFriends,
  FaRegPaperPlane,
  FaHeart,
  FaUsersCog,
} from "react-icons/fa";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { userActions } from "../../store/actions";
import HeaderLogo from "../AppLogo";
import SearchBox from "./Components/SearchBox";
import Menu from "./Components/Menu";
import Lang from "./Components/Lang";
import LoginModal from "../../Pages/Login/loginModal";

const Header = (props) => {
  const dispatch = useDispatch();
  let { headerBackgroundColor, enableHeaderShadow } = props;
  const [show, setShow] = useState(false);
  const [isSign, setIsSign] = useState(false);
  const [isForget, setIsForget] = useState(false);
  const [isProfile, setIsProfile] = useState(false);
  const user = useSelector((state) => state.authentication.user);

  const onMouseOver = () => setIsProfile(true);
  const onMouseLeave = () => setIsProfile(false);
  const onLogout = () => {
    window.location.href = "#/dashboard";
    dispatch(userActions.logout());
  };

  return (
    <Fragment>
      <TransitionGroup>
        <CSSTransition
          component="div"
          className={cx("app-header", headerBackgroundColor, {
            "header-shadow": enableHeaderShadow,
          })}
          appear={true}
          timeout={1500}
          enter={false}
          exit={false}
        >
          <Row>
            <Col md="2" style={{ paddingLeft: "10px" }}>
              <HeaderLogo />
            </Col>
            <Col md="3">
              <Menu />
            </Col>
            <Col md="4">
              <div className="app-header-left">
                <SearchBox />
              </div>
            </Col>
            <Col md="3" className="nav-right-btn">
              <Lang />
              {user ? (
                <Dropdown
                  className="d-inline-block"
                  onMouseOver={onMouseOver}
                  onMouseLeave={onMouseLeave}
                  isOpen={isProfile}
                  toggle={() => setIsProfile(false)}
                >
                  <DropdownToggle
                    caret
                    color="link"
                    className="semiBold-14 hover-link hover-link-bottom me-2"
                    style={{ background: "rgb(250 251 252)", color: "black" }}
                  >
                    {user.username + "  "}
                    <span style={{ fontSize: "16px", color: "#6426d2" }}>
                      $5,903.00
                    </span>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      {/* <Link to="/user/overview"> */}
                      <FaBox width={25} />
                      <span
                        className="drop-down-text"
                        onClick={() => {
                          window.location.href = "#/user/overview";
                        }}
                      >
                        Overview
                      </span>
                      {/* </Link> */}
                    </DropdownItem>
                    <DropdownItem>
                      <FaWallet />
                      <span
                        className="drop-down-text"
                        onClick={() => {
                          window.location.href = "#/user/payment";
                        }}
                      >
                        Cashback Payment
                      </span>
                    </DropdownItem>
                    <DropdownItem>
                      <FaChartBar />
                      <span
                        className="drop-down-text"
                        onClick={() => {
                          window.location.href = "#/user/activities";
                        }}
                      >
                        Cashback Activities
                      </span>
                    </DropdownItem>
                    <DropdownItem>
                      <FaHandHoldingUsd />
                      <span
                        className="drop-down-text"
                        onClick={() => {
                          window.location.href = "#/user/missing";
                        }}
                      >
                        Missing Cashback Claim
                      </span>
                    </DropdownItem>
                    <DropdownItem>
                      <FaUserFriends />
                      <span
                        className="drop-down-text"
                        onClick={() => {
                          window.location.href = "#/user/refer";
                        }}
                      >
                        Refer{" & "}Earn
                      </span>
                    </DropdownItem>
                    <DropdownItem>
                      <FaRegPaperPlane />
                      <span
                        className="drop-down-text"
                        onClick={() => {
                          window.location.href = "#/user/share";
                        }}
                      >
                        Share{" & "}Earn
                      </span>
                    </DropdownItem>
                    <DropdownItem>
                      <FaHeart />
                      <span
                        className="drop-down-text"
                        onClick={() => {
                          window.location.href = "#/user/favorities";
                        }}
                      >
                        Favorities
                      </span>
                    </DropdownItem>
                    <DropdownItem>
                      <FaUsersCog />
                      <span
                        className="drop-down-text"
                        onClick={() => {
                          window.location.href = "#/user/setting";
                        }}
                      >
                        Account Settings
                      </span>
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={onLogout}>Logout</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              ) : (
                <>
                  <Button
                    className="me-2 semiBold-14 hover-link"
                    color="black"
                    onClick={() => {
                      setShow(true);
                      setIsSign(true);
                    }}
                  >
                    Sign In
                  </Button>
                  <Button
                    className="me-2"
                    color="primary"
                    style={{ backgroundColor: "#6426d2" }}
                    onClick={() => {
                      setShow(true);
                      setIsSign(false);
                    }}
                  >
                    <span>
                      <i
                        className="lnr-plus-circle"
                        style={{
                          width: "24px",
                          paddingLeft: "6px",
                          paddingRight: "6px",
                          fontWeight: "900",
                        }}
                      ></i>
                      Join Us
                    </span>
                  </Button>
                </>
              )}
            </Col>
          </Row>
        </CSSTransition>
      </TransitionGroup>
      <Modal
        contentClassName="login-modal"
        isOpen={show}
        toggle={() => setShow(false)}
      >
        <LoginModal
          isSign={isSign}
          setShow={setShow}
          setIsForget={setIsForget}
        />
      </Modal>
      <Modal
        contentClassName="login-modal"
        isOpen={isForget}
        toggle={() => setIsForget(false)}
      >
        <div className="main-content-form d-guest">
          <div className="get-cashback-btn">
            <div className="text-center">Forget Password!</div>
          </div>
          <div style={{ width: "100%", borderBottom: "1px solid #d3c7c7" }}>
            <span className="s-login-text" style={{ textAlign: "center" }}>
              Enter your email address and we will send you the instructions to
              reset your password
            </span>
          </div>
          <div style={{ width: "80%", marginLeft: "20px", marginTop: "20px" }}>
            <InputGroup>
              <Input placeholder="eamil" />
              <InputGroupText>
                <span>
                  <i className="pe-7s-mail" style={{ width: "24px" }}></i>
                </span>
              </InputGroupText>
            </InputGroup>
            <Button
              color="primary"
              style={{
                marginTop: "15px",
                backgroundColor: "#6426d2",
                width: "100%",
              }}
            >
              Send Password Reset Link
            </Button>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
};

export default Header;
