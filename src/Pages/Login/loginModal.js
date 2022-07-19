import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button, Input, InputGroup, InputGroupText, Modal } from "reactstrap";
import { userActions } from "../../store/actions";
import fLogoWhite from "../../assets/utils/images/lara/f_logo_white.png";
import gLogo from "../../assets/utils/images/lara/g-logo.png";
import appleLogo from "../../assets/utils/images/lara/apple-logo.svg";
import formGit from "../../assets/utils/images/lara/form-gift.svg";

const LoginModal = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [isSign, setIsSign] = useState(props.isSign);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onRefer = () => {};

  const onLogin = () => {
    props.setShow(false);
    if (email && password) {
      // dispatch(userActions.login(email, password, from));
      dispatch(userActions.login(email, password));
    }
  };

  return (
    <div className="main-content-form d-guest">
      <div className="get-cashback-btn">
        {isSign ? (
          <div className="text-center">Sign in</div>
        ) : (
          <>
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
          </>
        )}
      </div>
      <div className="other-login-btns">
        <a
          href="https://laraback.enactweb.com/social-auth/facebook"
          className="facebook-login-btn"
        >
          {/* <!-- <i className="fab fa-facebook"></i> --> */}
          <div className="fb-logo" style={{ paddingLeft: "10px" }}>
            <img src={fLogoWhite} width={25} alt="facebook.png" />
            <span className="s-login-text">Sign in with Facebook</span>
          </div>
        </a>
        <a
          href="https://laraback.enactweb.com/social-auth/google"
          className="google-login-btn"
        >
          <div className="google-logo" style={{ paddingLeft: "10px" }}>
            <img src={gLogo} width={25} alt="g-logo" />
            <span className="s-login-text">Sign in with Google</span>
          </div>
        </a>
        <a
          href="https://laraback.enactweb.com/social-auth/apple"
          className="apple-login-btn"
        >
          <div className="apple-logo" style={{ paddingLeft: "10px" }}>
            <img src={appleLogo} width={25} alt="apple-logo" />{" "}
            <span className="s-login-text">Sign in with Apple</span>
          </div>
          {/* <!-- <i className="fab fa-apple"></i> --> */}
        </a>
      </div>
      <div
        className="post-note px-1 border-bottom-grey"
        style={{ marginTop: "20px", marginBottom: "20px" }}
      >
        We'll never post anything without your permission
      </div>
      <div className="home-page-form-container">
        <form
          action="https://laraback.enactweb.com/do-signup"
          method="POST"
          className="home-page-form"
          id="registerForm"
          data-submit-ready="true"
        >
          <InputGroup>
            <Input
              placeholder="eamil"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputGroupText>
              <span>
                <i className="pe-7s-mail" style={{ width: "24px" }}></i>
              </span>
            </InputGroupText>
          </InputGroup>
          <InputGroup style={{ marginTop: "10px" }}>
            <Input
              placeholder="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
            <InputGroupText>
              <span>
                <i className="pe-7s-key" style={{ width: "24px" }}></i>
              </span>
            </InputGroupText>
          </InputGroup>
          <div
            className="d-flex justify-content-between flex-wrap"
            style={{ marginTop: "15px", marginBottom: "17px" }}
          >
            <div className="form-check mb-1 d-flex">
              <input
                id="registerForm-agree-privacy"
                className="form-check-input me-2"
                type="checkbox"
                required=""
                name="privacy_policy"
              />
              <label className="form-check-label">Remember Me</label>
            </div>
            <a
              className="cus-text"
              style={{ cursor: "pointer" }}
              onClick={() => {
                props.setShow(false);
                props.setIsForget(true);
              }}
            >
              Forget Password?
            </a>
          </div>
          <Button
            color="primary"
            style={{ backgroundColor: "#6426d2", width: "100%" }}
            onClick={onLogin}
          >
            {isSign ? "Sign In" : "Join Now"}
          </Button>
        </form>
      </div>
      <div className="form-bottom" style={{ marginTop: "25px" }}>
        <p className="existing-user">
          {isSign ? "Not Member" : "Exsiting User"}
          <a
            className="text-orange ms-2"
            data-bs-toggle="modal"
            href="https://laraback.enactweb.com/#"
            data-bs-dismiss="modal"
            data-bs-target="#signinModal"
            onClick={() => setIsSign(!isSign)}
          >
            {isSign ? "Join Now" : "Sign In"}
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
