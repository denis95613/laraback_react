import React from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import "./main.css";
import {
  FaBox,
  FaWallet,
  FaChartBar,
  FaHandHoldingUsd,
  FaUserFriends,
  FaRegPaperPlane,
  FaHeart,
  FaUsersCog,
} from "react-icons/fa";

const Probar = () => {
  const proType = useSelector((state) => state.common.proType);
  return (
    <div className="main-overview">
      <Container>
        <div className="user-sidebar">
          <div className="user-welcome">
            <p>Welcome!</p>
            <h2>demo user</h2>
            <h4 className="mb-0">
              Joined On<b>03/09/2022</b>
            </h4>
          </div>
          <div className="user-menu">
            <ul className="main-user">
              <li>
                <a
                  href="#/user/overview"
                  className={proType === 1 ? "active" : ""}
                >
                  <FaBox />
                  Overview
                </a>
              </li>
              <li>
                <a
                  href="#/user/payment"
                  className={proType === 2 ? "active" : ""}
                >
                  <FaWallet />
                  Cashback Payment
                </a>
              </li>
              <li>
                <a
                  href="#/user/activities"
                  className={proType === 3 ? "active" : ""}
                >
                  <FaChartBar />
                  Cashback Activities
                </a>
              </li>
              <li>
                <a
                  href="#/user/missing"
                  className={proType === 4 ? "active" : ""}
                >
                  <FaHandHoldingUsd />
                  Missing Cashback Claim
                </a>
              </li>
              <li>
                <a
                  href="#/user/refer"
                  className={proType === 5 ? "active" : ""}
                >
                  <FaUserFriends />
                  Refer & Earn
                </a>
              </li>
              <li>
                <a
                  href="#/user/share"
                  className={proType === 6 ? "active" : ""}
                >
                  <FaRegPaperPlane />
                  Share & Earn
                </a>
              </li>
              <li>
                <a
                  href="#/user/favorities"
                  className={proType === 7 ? "active" : ""}
                >
                  <FaHeart />
                  Favorites
                </a>
              </li>
              <li>
                <a
                  href="#/user/setting"
                  className={proType === 8 ? "active" : ""}
                >
                  <FaUsersCog />
                  Account Settings
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Probar;
