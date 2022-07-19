import React from "react";
import { useSelector } from "react-redux";

const Featured = () => {
  const dealFeatures = useSelector((state) => state.common.dealFeatures);
  return (
    <div className="card_main featured_deal">
      {dealFeatures.map((one, key) => {
        return (
          <div className="card-deal" key={key}>
            <div className="card-titles d-flex align-items-center justify-content-between">
              <img src={one.logoimage} alt="" style={{ width: "100px" }} />
              <span>{one.label}</span>
            </div>
            <img
              src={one.logoProfile}
              alt=""
              style={{ height: "130px" }}
              className="my-4"
            />
            <h6 className="mb-2">{one.dis}</h6>
            <div className="d-flex justify-content-between">
              <h2 className="mb-0 text-dark-grey">{one.wasAmt}</h2>
              <h4>{one.currentAmt}</h4>
            </div>
            <div className="hover_content d-flex align-content-center justify-content-center flex-column text-center px-4">
              <a className="view_all" href="/">
                {one.linkProduct}
              </a>
              <a href="/" className="view_title">
                {one.linkView}
              </a>
              <div>
                <a className="shop_now" href="/">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Featured;
