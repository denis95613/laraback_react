import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import "../main.css";
import { commonActions } from "../../../../store/actions";
import Profile from "./profile";
import Password from "./password";

const Setting = () => {
  const dispatch = useDispatch();
  dispatch(commonActions.setProType(8));
  const [isProfile, setIsProfile] = useState(true);
  return (
    <div className="main-overview">
      <Container>
        <div className="row main-content">
          <div className="account">
            <div>
              <h1 className="heading mb-2">Account Settings</h1>
            </div>
            <p className="main-desc">Manage your account related settings.</p>
            <div role="alert" className="fade alert show">
              <p className="mb-0"></p>
            </div>
            <div className="cb-activites-nav">
              <a
                className={isProfile ? "active" : ""}
                role="button"
                onClick={() => setIsProfile(true)}
              >
                Edit Profile
              </a>
              <a
                className={!isProfile ? "active" : ""}
                role="button"
                onClick={() => setIsProfile(false)}
              >
                Change Password
              </a>
            </div>
            {isProfile ? <Profile /> : <Password />}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Setting;
