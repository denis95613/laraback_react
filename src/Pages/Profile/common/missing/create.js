import React from "react";
import "../main.css";

const CreateClaim = () => {
  return (
    <div id="example-collapse-text">
      <div className="user-card mb-3">
        <div className="user-card-body">
          <div className="claim-cont col-md-10 mx-auto">
            <p className="form-title text-center">Create Claim</p>
            <p>
              <small></small>
            </p>
            <form className="">
              <div className="row">
                <div className="col-sm-6 mb-3">
                  <label className="form-label">Store </label>
                  <select className="form-select" as="select">
                    <option value="8">Banggood</option>
                    <option value="80">Shutterstock</option>
                    <option value="244">Hostgator.in -</option>
                    <option value="15">Aliexpress IN</option>
                    <option value="1">Teamo - Revshare</option>
                    <option value="116">Samsung IN</option>
                    <option value="26">Cleartrip IN</option>
                    <option value="4">Lightinthebox</option>
                    <option value="51">TVC-mall</option>
                    <option value="25">Citibank Credit Card IN</option>
                  </select>
                </div>
                <div className="col-sm-6 mb-3">
                  <label className="form-label">Shopping Trip </label>
                  <select className="form-select" as="select">
                    <option value="32156">June 27, 2022 6:29 PM</option>
                    <option value="32157">June 27, 2022 6:29 PM</option>
                    <option value="32191">June 28, 2022 7:59 PM</option>
                    <option value="32192">June 28, 2022 7:59 PM</option>
                    <option value="32316">July 3, 2022 9:13 PM</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 mb-3">
                  <label className="form-label">Ordering Platform</label>
                  <select className="form-select" as="select">
                    <option value="website">website</option>
                    <option value="mobile">mobile</option>
                    <option value="ios">ios</option>
                    <option value="android">android</option>
                  </select>
                </div>
                <div className="col-sm-6 mb-3">
                  <label className="form-label">Order ID</label>
                  <input
                    placeholder="Ordering ID"
                    type="text"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 mb-3">
                  <label className="form-label"> Currency</label>
                  <div className="input-group">
                    <select className="form-select">
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                      <option value="INR">INR</option>
                    </select>
                    <input
                      placeholder="Amount"
                      type="number"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-sm-6 mb-3">
                  <label className="form-label">Purchase Date</label>
                  <div className="react-datepicker-wrapper">
                    <div className="react-datepicker__input-container">
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 mb-3">
                <label className="form-label">Receipt</label>
                <input
                  className="form-control"
                  accept="application/pdf,image/gif,image/png,image/jpg,image/jpeg,image/bmp,image/png"
                  type="file"
                  placeholder="Receipt"
                />
                <p>
                  Maximum file size allowed 5mb . Accepted format-
                  jpeg,jpg,png,pdf
                </p>
              </div>
              <div className="row">
                <div className="col-md-12 mb-3">
                  <textarea
                    rows="3"
                    placeholder="Additional Information"
                    className="form-control"
                  ></textarea>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="alert alert-secondary" role="alert">
                    <p className="fw-bold text-dark">IMPORTANT NOTE:</p>
                    <div className="shareEarn-terms">
                      <ul>
                        <li>
                          <small>
                            Please wait for the 3 days from transaction date
                            before raising the missing cashback claim.
                          </small>
                        </li>
                        <li>
                          <small>
                            Missing cashback claim is not allowed for
                            transaction older than 15 days.
                          </small>
                        </li>
                        <li>
                          <small>
                            Few stores doesn't allow the missing claim, please
                            check the respective store page for more details.
                          </small>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row text-end">
                <div className="col-md-12">
                  <button type="submit" className="btn md-btn">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateClaim;
