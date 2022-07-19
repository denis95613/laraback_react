import React from "react";
import bonus from "../../../assets/images/bonus.svg";
import "./BonusMessage.css";

const index = () => {
  return (
    <div className="bonus_main d-flex align-items-center justify-content-between">
      <div className="bonus_detail d-flex align-items-center">
        <img src={bonus} alt="bonus" />
        <div className="ms-3">
          <h2 className="mb-1">
            Join LarabackPRO Now and
            <span className="text-orange"> Get a $50.00 Bonus</span> Today!
          </h2>
          <h6 className="mb-0">
            The best deals, sales, coupons & more than 10,000 offers you can
            find here.
          </h6>
        </div>
      </div>
      <div className="bonus_detail text-center">
        <button>Join Now</button>
        <p className="mb-0">
          Existing User
          <a href="/" className="text-orange ms-2">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default index;
