import React from "react";
import banner from "../../../assets/images/banner.png";
import bannerShare from "../../../assets/images/bannerShare.png";
import bannerEarn from "../../../assets/images/bannerEarn.png";

const index = () => {
  return (
    <div className="advertise_main row">
      <div className="col-md-4 text-center">
        <img src={bannerEarn} alt="banner" />
      </div>
      <div className="col-md-4 text-center">
        <img src={banner} alt="banner" />
      </div>
      <div className="col-md-4 text-center">
        <img src={bannerShare} alt="banner" />
      </div>
    </div>
  );
};

export default index;
