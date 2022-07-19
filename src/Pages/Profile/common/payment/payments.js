import React, { useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import "../main.css";
import Gift from "./gift";
import Upi from "./upi";
import Bank from "./bank";
import Paypal from "./paypal";
import Paytm from "./paytm";

const Payments = () => {
  const [activeTab, setActiveTab] = useState("1");
  return (
    <div className="row">
      <div className="col-md-6 mx-auto">
        <div className="user-card">
          <div className="user-card-body">
            <div className="cb-card-head border-bottom">
              <div className="cb-card-head-left d-flex align-items-center w-75">
                <div className="cb-icon-wrapper">
                  <img src="images/user-cb-icon.png" />
                </div>
                <h4>
                  <small>Available For Payment</small>
                </h4>
              </div>
              <div className="cb-card-head-right">
                <h4 className="fw-semi-bold text-purple">$221.00</h4>
              </div>
            </div>
            <ul className="list-unstyled earning-list mb-0">
              <li>
                <p className="earning-label">Cashback</p>
                <p>$221.00</p>
              </li>
              <li>
                <p className="earning-label">Reward</p>
                <p>$0.00</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <h2 className="user-page-title">Your Payment Mode</h2>
      <div className="payment-wrapper">
        <div className="user-card">
          <div className="user-card-body">
            <div className="row">
              <div className="col-md-3 text-center">
                <div className="mb-2">
                  <img
                    src="images/paytm-logo-small.jpg"
                    className="payment-logo img-fluid"
                  />
                </div>
                <p>AMIT RANJAN</p>
                <div className="d-flex justify-content-around">
                  <img src="images/pay-transfer.svg" />
                  <span>6 hours</span>
                </div>
              </div>
              <div className="col-md-6">
                <div className="pb-2 mb-3 border-bottom">
                  <div className="d-flex justify-content-around justify-content-md-between">
                    <div className="mb-3 text-center text-md-start">
                      <p className="fw-medium text-dark">AMIT RANJAN</p>
                      <span>8540937234</span>
                    </div>
                    <div className="text-center text-md-start">
                      <p>Minimum Payout</p>
                      <span>$11.00</span>
                    </div>
                  </div>
                  <div className="mb-2 text-center text-md-start">
                    <span className="text-dark fw-medium">
                      Paytm Registered Email ID :{" "}
                    </span>{" "}
                    Amitranjanp52@gmail.com{" "}
                  </div>
                </div>
                <div role="alert" className="fade alert alert-warning show">
                  <p className="mb-0">
                    Your previous request is in process, please raise a new
                    request later.
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="avail-payout">
                  <p className="text-dark">Available Payout</p>
                  <div className="mb-2">
                    <span className="text-success me-3">
                      <i className="fa fa-check me-1"></i>
                      Cashback
                    </span>
                    <span className="text-success">
                      <i className="fa fa-check me-1"></i>
                      Reward
                    </span>
                  </div>
                  <p>$221.00</p>
                </div>
              </div>
              <button
                type="button"
                className="btn-danger rounded mt-3 w-25 ms-auto"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="paymrnt-mode-tab">
        <h2 className="user-page-title">Add New Payment Mode</h2>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={activeTab == "1" ? "active" : ""}
              onClick={() => setActiveTab("1")}
            >
              Gift Voucher
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab == "2" ? "active" : ""}
              onClick={() => setActiveTab("2")}
            >
              UPI Payment
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab == "3" ? "active" : ""}
              onClick={() => setActiveTab("3")}
            >
              Bank Transfer
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab == "4" ? "active" : ""}
              onClick={() => setActiveTab("4")}
            >
              Paypal
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab == "5" ? "active" : ""}
              onClick={() => setActiveTab("5")}
            >
              Paytm Wallet
            </NavLink>
          </NavItem>
        </Nav>
        <div>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Gift />
            </TabPane>
            <TabPane tabId="2">
              <Upi />
            </TabPane>
            <TabPane tabId="3">
              <Bank />
            </TabPane>
            <TabPane tabId="4">
              <Paypal />
            </TabPane>
            <TabPane tabId="5">
              <Paytm />
            </TabPane>
          </TabContent>
        </div>
      </div>
    </div>
  );
};

export default Payments;
