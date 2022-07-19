import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Row } from "reactstrap";
import Login from "../../Login/login";
import Desc from "../desc";
import formGit from "../../../assets/utils/images/lara/form-gift.svg";
import Store from "../Stores/index";
import TopStore from "../TopStores/index";
import CashbackStore from "../CashbackStore/index";
import TopOffers from "../TopOffers/index";
import TopDeals from "../TopDeals/index";
import CategoriesByDeals from "../CategoriesByDeals/index";
import CategoriesByStore from "../CategoriesByStore/index";
import CategoriesByCoupon from "../CategoriesByCoupon/index";
import Advertisement from "../Advertisement/index";
import BonusMessage from "../BonusMessage/index";
import Newsletter from "../Newsletter/index";

const Dashboard = () => {
  const user = useSelector((state) => state.authentication.user);
  const [show, setShow] = useState(false);
  const onSave = () => {
    setShow(false);
  };

  return (
    <div className="content_slider">
      {!user && (
        <Row className="cashback_main g-0 mb-5">
          <div className="wp-block-column" style={{ flexBasis: "65%" }}>
            <Desc />
          </div>
          <div className="wp-block-column" style={{ flexBasis: "35%" }}>
            <div style={{ paddingLeft: "55px" }}>
              <div className="col">
                <div className="main-content-form d-guest">
                  <div className="get-cashback-btn">
                    <div className="me-2">
                      <img
                        className="lozad"
                        src={formGit}
                        alt="Gift"
                        data-loaded="true"
                      />
                    </div>
                    <div className="text-center">
                      Sign up &amp; get{" "}
                      <span style={{ color: "rebeccapurple" }}>$50.00 </span>{" "}
                      Today
                    </div>
                  </div>
                  <Login />
                </div>
              </div>
            </div>
          </div>
        </Row>
      )}
      <Store />
      <TopStore />
      <CashbackStore />
      <TopOffers />
      <TopDeals />
      <CategoriesByDeals />
      <CategoriesByStore />
      <CategoriesByCoupon />
      <Advertisement />
      <BonusMessage />
      <Newsletter />
    </div>
  );
};

export default Dashboard;
