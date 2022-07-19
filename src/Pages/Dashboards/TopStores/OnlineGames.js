import React from "react";
import { useSelector } from "react-redux";
import money_back from "../../../assets/images/money-back.png";
import { FaFireAlt } from "react-icons/fa";

const OnlineGames = () => {
  const storeOnlineGames = useSelector(
    (state) => state.common.storeOnlineGames
  );
  return (
    <div className="card_main">
      {storeOnlineGames.map((one, key) => {
        return (
          <div className="card1" key={key}>
            <div className="offer_content">
              <span>
                <FaFireAlt /> 2.0X
              </span>
              <div className="store_img">
                <img src={one.logoimage} alt="" />
              </div>
              <h5>{one.was} </h5>
              <div className="money_back">
                <img src={money_back} alt="" />
                <h6>{one.dis}</h6>
              </div>
            </div>
            <div className="hover_content">
              <a className="view_all" href="#">
                View All Banggood Offers
              </a>
              <p>Cashback boost expires by: 10/30/2022</p>
              <a className="shop_now" href="#">
                Shop Now
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OnlineGames;
