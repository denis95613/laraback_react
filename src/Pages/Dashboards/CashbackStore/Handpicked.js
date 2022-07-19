import React from "react";
import { useSelector } from "react-redux";
import money_back from "../../../assets/images/money-back.png";
import { FaFireAlt } from "react-icons/fa";

const Handpicked = () => {
  const cashbackHands = useSelector((state) => state.common.cashbackHands);
  return (
    <div className="card_main">
      {cashbackHands.map((index, key) => {
        return (
          <div className="card1" key={key}>
            <div className="offer_content">
              <span>
                <FaFireAlt /> 2.0X
              </span>
              <div className="store_img">
                <img src={index.logoimage} alt="" />
              </div>
              <h5>{index.was} </h5>
              <div className="money_back">
                <img src={money_back} alt="" />
                <h6>{index.dis}</h6>
              </div>
            </div>
            <div className="hover_content">
              <a className="view_all" href="/">
                View All banggood Offers
              </a>
              <p>Cashback boost expires by: 10/30/2022</p>
              <a className="shop_now" href="/">
                Shop Now
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Handpicked;
