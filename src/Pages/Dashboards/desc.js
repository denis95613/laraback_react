import React from "react";

import browseWindowIcon from "../../assets/utils/images/lara/browse-window-icon.svg";
import shopWindowIcon from "../../assets/utils/images/lara/shop-window-icon.svg";
import earnWindowIcon from "../../assets/utils/images/lara/earn-window-icon.svg";
import withdrawWindowIcon from "../../assets/utils/images/lara/withdraw-window-icon.svg";

const Desc = () => {
  return (
    <div>
      <div
        className="lb-main-content-title-container"
        style={{ paddingLeft: "20px", paddingTop: "120px" }}
      >
        <h1 className="text-orange">
          Get up to 10% Cashback at over 2,500 stores
        </h1>
        <p>1620 Free Coupon Codes &amp; Discount Deals added this week</p>
      </div>
      <div className="hiw-container">
        <div className="hiw-title text-center">
          <h2
            className="sm-heading fw-regular"
            style={{ fontWeight: "400", fontSize: "20px" }}
          >
            How It Works?
          </h2>
        </div>
        <div className="text-center">
          <p className="text-dark-grey">
            Earning cashback is as easy as 1-2-3-4…
          </p>
        </div>
        <ul className="hiw-ul">
          <li className="hiw-li">
            <div className="hiw-img">
              <img
                src={browseWindowIcon}
                data-src="https://procash.enactweb.com/img/blocks/browse-window-icon.svg"
                alt="Browse"
                className="lozad lazyload img-fluid"
                data-loaded="true"
              />
            </div>
            <div className="hiw-info">
              <div className="hiw-block-title">
                <span> 01. </span>Browse
              </div>
              <div className="hiw-desc">
                Browse CashBack and choose from thousands of stores
              </div>
            </div>
          </li>
          <li className="hiw-li">
            <div className="hiw-img">
              <img
                src={shopWindowIcon}
                data-src="https://procash.enactweb.com/img/blocks/shop-window-icon.svg"
                alt="Shop"
                className="lozad lazyload img-fluid"
                data-loaded="true"
              />
            </div>
            <div className="hiw-info">
              <div className="hiw-block-title">
                <span> 02. </span>Shop
              </div>
              <div className="hiw-desc">
                Follow the link to your favorite store or deal and purchase as
                normal
              </div>
            </div>
          </li>
          <li className="hiw-li">
            <div className="hiw-img">
              <img
                src={earnWindowIcon}
                data-src="https://procash.enactweb.com/img/blocks/earn-window-icon.svg"
                alt="Earn"
                className="lozad lazyload img-fluid"
                data-loaded="true"
              />
            </div>
            <div className="hiw-info">
              <div className="hiw-block-title">
                <span> 03. </span>Earn
              </div>
              <div className="hiw-desc">Cash Back is added to your account</div>
            </div>
          </li>
          <li className="hiw-li">
            <div className="hiw-img">
              <img
                src={withdrawWindowIcon}
                data-src="https://procash.enactweb.com/img/blocks/withdraw-window-icon.svg"
                alt="Withdraw"
                className="lozad lazyload img-fluid"
                data-loaded="true"
              />
            </div>
            <div className="hiw-info">
              <div className="hiw-block-title">
                <span> 04. </span>Withdraw
              </div>
              <div className="hiw-desc">
                Request payment and get paid via bank transfer, PayPal or gift
                voucher.
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Desc;
