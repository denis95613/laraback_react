import React from "react";
import "../main.css";

const EditPassword = () => {
  return (
    <div>
      <form className="">
        <div className="row">
          <div className="col-md-12 mb-4">
            <div className="user-card h-100">
              <div className="user-card-body">
                <div className="user-form-head">
                  <div className="user-form-icon">
                    <img src="images/change-pwd.svg" />
                  </div>
                  <div>
                    <p className="form-title mb-0">Change Password</p>
                    <span className="text-dark-grey fw-medium">
                      Manage Password
                    </span>
                  </div>
                </div>
                <form className="">
                  <div className="row">
                    <div className="mb-3 col-md-4">
                      <label className="form-label">Current Password</label>
                      <input
                        placeholder="Enter Current Password"
                        type="password"
                        className="form-control"
                      />
                    </div>
                    <div className="mb-3 col-md-4">
                      <label className="form-label">New Password</label>
                      <input
                        placeholder="Enter New Password"
                        type="password"
                        className="form-control"
                      />
                    </div>
                    <div className="mb-3 col-md-4">
                      <label className="form-label">Confirm Password</label>
                      <input
                        placeholder="Enter Confirm Password"
                        type="password"
                        className="form-control"
                      />
                    </div>
                    <div className="form-submit-btn text-center">
                      <button type="submit" className="btn col-md-6">
                        Change Password
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditPassword;
