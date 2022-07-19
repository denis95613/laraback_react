import React from "react";
import { useSelector } from "react-redux";

const HealthBeauty = () => {
  const offerHealths = useSelector((state) => state.common.offerHealths);
  return (
    <div className="row">
      <div className="topoffer_card_main">
        {offerHealths.map((one, key) => {
          return (
            <div className="card" key={key}>
              <div className="topoffer_content">
                <div className="topoffer_img">
                  <img className="img-fluid" src={one.logoimage} alt="" />
                </div>
                <div className="money_back">
                  <h6>{one.dis}</h6>
                </div>
              </div>
              <div className="topoffer_title">
                <h6>
                  Flat 20% off on SSL certificates, SiteLock and CodeGuard
                </h6>
              </div>
              <div className="get_code">
                <div className="code">
                  <a className="coupon_code_btn" href="/">
                    <span className="getcode_text">GET CODE</span>
                    <span className="code_text">
                      <span className="main_code">HGI20GATOR</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HealthBeauty;
