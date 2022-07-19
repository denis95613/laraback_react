import React, { Fragment, useState } from "react";

import { Button, Input, InputGroup, InputGroupText, Modal } from "reactstrap";

import fLogoWhite from "../../assets/utils/images/lara/f_logo_white.png";
import gLogo from "../../assets/utils/images/lara/g-logo.png";
import appleLogo from "../../assets/utils/images/lara/apple-logo.svg";
import LoginModal from "./loginModal";

const Login = () => {
  const [show, setShow] = useState(false);
  const [isSign, setIsSign] = useState(false);
  const [isForget, setIsForget] = useState(false);
  const onRefer = () => {};

  return (
    <Fragment>
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
            <Input placeholder="eamil" />
            <InputGroupText>
              <span>
                <i className="pe-7s-mail" style={{ width: "24px" }}></i>
              </span>
            </InputGroupText>
          </InputGroup>
          <InputGroup style={{ marginTop: "10px" }}>
            <Input placeholder="password" type="password" />
            <InputGroupText>
              <span>
                <i className="pe-7s-key" style={{ width: "24px" }}></i>
              </span>
            </InputGroupText>
          </InputGroup>
          <div
            className="d-flex justify-content-between flex-wrap"
            style={{ marginTop: "12px" }}
          >
            <div className="form-check mb-1 d-flex">
              <input
                id="registerForm-agree-privacy"
                className="form-check-input me-2"
                type="checkbox"
                required=""
                name="privacy_policy"
              />
              <label className="form-check-label">
                I Agree to{" "}
                <a
                  href="https://laraback.enactweb.com/privacy-policy"
                  className="text-purple"
                  target="_blank"
                >
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  href="https://laraback.enactweb.com/terms-of-use"
                  className="text-purple"
                  target="_blank"
                >
                  Terms of Use
                </a>{" "}
              </label>
            </div>
          </div>
          <div className="lb-refer-link-refer">
            <a onClick={onRefer}>Did someone refer you?</a>
          </div>
          <input
            type="hidden"
            data-target="registerForm"
            name="g-recaptcha-id"
            value="0"
          />
          <div
            id="recaptcha"
            className="g-recaptcha"
            data-sitekey="6Lc4AuEaAAAAAA-DK5lYzHm11hr8jer_PWZpuMHc"
            data-callback="onSubmit"
            data-size="invisible"
          >
            <div
              className="grecaptcha-badge"
              data-style="bottomright"
              style={{
                width: "256px",
                height: "60px",
                display: "block",
                transition: "right 0.3s ease 0s",
                position: "fixed",
                bottom: "14px",
                right: "-186px",
                boxShadow: "gray 0px 0px 5px",
                borderRadius: "2px; overflow",
                hidden: "true",
              }}
            >
              <div className="grecaptcha-error"></div>
              <textarea
                id="g-recaptcha-response"
                name="g-recaptcha-response"
                className="g-recaptcha-response"
                style={{
                  width: "250px",
                  height: "40px",
                  border: "1px solid rgb(193, 193, 193)",
                  margin: "10px 25px",
                  padding: "0px",
                  resize: "none",
                  display: "none",
                }}
              ></textarea>
            </div>
          </div>
          <Button
            color="primary"
            style={{ backgroundColor: "#6426d2", width: "100%" }}
          >
            Join me
          </Button>
        </form>
      </div>
      <div className="form-bottom">
        <p className="existing-user">
          Existing User
          <a
            className="text-orange ms-2"
            data-bs-toggle="modal"
            href="https://laraback.enactweb.com/#"
            data-bs-dismiss="modal"
            data-bs-target="#signinModal"
            onClick={() => setShow(true)}
          >
            Sign In
          </a>
        </p>
        <div>
          <p className="text-center text-medium-grey lb-terms">
            Joining &amp; Referral Bonus Terms Apply*
          </p>
        </div>
      </div>
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

export default Login;
