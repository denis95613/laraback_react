import React from "react";
import "../main.css";

const EditProfile = () => {
  return (
    <div>
      <form className="">
        <div className="row">
          <div className="col-md-12 mb-4">
            <div className="user-card h-100">
              <div className="user-card-body">
                <div className="user-form-head">
                  <div className="user-form-icon">
                    <img src="images/edit-profile.svg" />
                  </div>
                  <div>
                    <p className="form-title mb-0">Edit Profile</p>
                    <span className="text-dark-grey fw-medium">
                      Manage your profile information.
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="mb-3 col-sm-6">
                    <label className="form-label">First Name*</label>
                    <input
                      required=""
                      placeholder="Enter First Name"
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3 col-sm-6">
                    <label className="form-label">Last Name*</label>
                    <input
                      required=""
                      placeholder="Enter Last Name"
                      type="text"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="mb-3 col-sm-6">
                    <label className="form-label"> Birth Date</label>
                    <div className="react-datepicker-wrapper">
                      <div className="react-datepicker__input-container">
                        <input
                          type="text"
                          placeholder="Birth Date"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-3 col-sm-6">
                    <label className="form-label">Anniversary Date</label>
                    <div className="react-datepicker-wrapper">
                      <div className="react-datepicker__input-container">
                        <input
                          type="text"
                          placeholder="Anniversary Date"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-3 col-sm-6">
                    <label className="form-label">Gender</label>
                    <select className="form-select" as="select">
                      <option hidden="" value="">
                        {" "}
                        Please Select{" "}
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="mb-3 col-sm-6">
                    <label className="form-label">Marital Status</label>
                    <select className="form-select" as="select">
                      <option hidden="" value="">
                        Please Select{" "}
                      </option>
                      <option value="married">Married</option>
                      <option value="single">Single</option>
                    </select>
                  </div>
                  <div className="mb-3 col-sm-6">
                    <label className="form-label">Occupation</label>
                    <input
                      placeholder="Occupation"
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3 col-sm-6">
                    <label className="form-label">Address</label>
                    <input
                      placeholder="Address"
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3 col-sm-6">
                    <label className="form-label">City</label>
                    <input
                      placeholder="City"
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3 col-sm-6">
                    <label className="form-label">State</label>
                    <input
                      placeholder="State"
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3 col-sm-6">
                    <label className="form-label">Country</label>
                    <select className="form-select" as="select">
                      <option disabled="" value="">
                        Country
                      </option>
                    </select>
                  </div>
                  <div className="mb-3 col-sm-6">
                    <label className="form-label">Pincode</label>
                    <input
                      placeholder="Pincode"
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3 col-sm-12">
                    <label className="form-label">Bio</label>
                    <textarea
                      rows="3"
                      placeholder="Bio"
                      type="text"
                      className="form-control"
                    ></textarea>
                  </div>
                </div>
                <div className="row">
                  <div className="form-submit-btn text-center">
                    <button type="button" className="btn col-md-6 mx-auto">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="user-card h-100">
              <div className="user-card-body">
                <div className="user-form-head">
                  <div className="user-form-icon">
                    <img src="images/edit-profile.svg" />
                  </div>
                  <div>
                    <p className="form-title mb-0">Choose Language</p>
                    <span className="text-dark-grey fw-medium">
                      Manage your profile information.
                    </span>
                  </div>
                </div>
                <div className="col-lg-8 col-md-10 mx-auto">
                  <div className="mb-3">
                    <label className="form-label">Choose Language</label>
                    <select className="form-select" as="select">
                      <option hidden="" value="">
                        Please Select{" "}
                      </option>
                      <option value="en">English</option>
                      <option value="fr">Français</option>
                    </select>
                  </div>
                  <div className="form-submit-btn">
                    <button type="submit" className="btn btn-block">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="user-card h-100">
              <div className="user-card-body">
                <div className="user-form-head">
                  <div className="user-form-icon">
                    <img src="images/link-email.svg" />
                  </div>
                  <div>
                    <p className="form-title mb-0">
                      Email / Link Mobile Number
                    </p>
                    <span className="text-dark-grey fw-medium">
                      To change your email address please contact us.
                    </span>
                  </div>
                </div>
                <div className="col-lg-8 col-md-10 mx-auto">
                  <div className="mb-3 input-icon-wrapper">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Email"
                      // readOnly={true}
                    />
                    <div className="input-icon">
                      <i className="fas fa-check-circle text-success fa-lg"></i>
                    </div>{" "}
                  </div>
                </div>
                <div className="col-md-61 mb-41">
                  <div className="user-card1 h-1001">
                    <div className="user-card-body1">
                      <div className="col-lg-8 col-md-10 mx-auto">
                        <div className="mb-3 input-icon-wrapper">
                          <input
                            className="form-control"
                            type="text"
                            // readOnly={true}
                          />{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
