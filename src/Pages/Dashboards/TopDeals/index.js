import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import Featured from "./Featured";
import Fashion from "./Fashion";
import Electronics from "./Electronics";
import { FaLongArrowAltRight } from "react-icons/fa";
import "./TopDeals.css";

const TopDeal = () => {
  const [activeTab, setActiveTab] = useState("1");
  return (
    <div className="menu_store">
      <div className="row mx-0 justify-content-between top_menu">
        <div className="col-lg- 5 col-md-3 p-0">
          <h2 className="top_store">Top Deals</h2>
        </div>
        <div className="col-lg-3 col-md-5">
          <Nav tabs>
            <NavItem>
              <NavLink
                className={activeTab == "1" ? "active" : ""}
                onClick={() => setActiveTab("1")}
              >
                Featured
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={activeTab == "2" ? "active" : ""}
                onClick={() => setActiveTab("2")}
              >
                Electronics
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={activeTab == "3" ? "active" : ""}
                onClick={() => setActiveTab("3")}
              >
                Fashion
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </div>
      <p className="text-dark-grey">
        Grab the best deals of the day from popular stores along with the
        cashback.
      </p>
      <div style={{ marginTop: "20px" }}>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Featured />
          </TabPane>
          <TabPane tabId="2">
            <Fashion />
          </TabPane>
          <TabPane tabId="3">
            <Electronics />
          </TabPane>
        </TabContent>
      </div>
      <div className="row mx-0">
        <div className="col-12 p-0">
          <div className="view-more-btn">
            <span className="d-block">
              <Link to="/all-stores">View More Clothing & Footwear Stores</Link>
              <FaLongArrowAltRight className="ms-2" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopDeal;
