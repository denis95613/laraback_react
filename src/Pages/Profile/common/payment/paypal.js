import React from "react";
import "../main.css";

const Paypal = () => {
  return (
    <div className="head-offer-desc user-card">
      <div className="user-card-body">
        <form className="">
          <div className="row justify-content-md-center py-4">
            <div className="col-md-12">
              <p className="form-title text-center">Paypal</p>
            </div>
            <div className="mb-2 text-center">
              <span className="text-success me-3">
                <i className="fa fa-check me-1"></i>
                Cashback
              </span>
              <span className="text-success">
                <i className="fa fa-check me-1"></i>
                Reward
              </span>
            </div>
            <div className="col-lg-4 col-sm-6 mb-3 mb-sm-0">
              <label className="form-label">Name</label>
              <input
                placeholder="Name Placeholder"
                type="text"
                className="form-control"
              />
            </div>
            <div className="col-lg-4 col-sm-6 mb-3 mb-sm-0">
              <label className="form-label">PayPal Email ID</label>
              <input
                placeholder="PayPal Email ID"
                type="email"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-submit-btn text-center col-lg-3 mx-auto">
            <button type="submit" className="btn btn-block">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Paypal;
