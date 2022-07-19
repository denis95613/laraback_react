import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import Handpicked from "./Handpicked";
import Books from "./Books";
import Deposits from "./Deposits";
import { FaLongArrowAltRight } from "react-icons/fa";

const Cashback = () => {
  const [activeTab, setActiveTab] = useState("1");
  return (
    <div className="menu_store">
      <div className="row mx-0 justify-content-between top_menu">
        <div className="col-lg- 5 col-md-3">
          <h2 className="top_store">Boosted Cashback Stores</h2>
        </div>
        <div className="col-lg-3 col-md-5">
          <Nav tabs>
            <NavItem>
              <NavLink
                className={activeTab == "1" ? "active" : ""}
                onClick={() => setActiveTab("1")}
              >
                Handpicked
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={activeTab == "2" ? "active" : ""}
                onClick={() => setActiveTab("2")}
              >
                Books
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={activeTab == "3" ? "active" : ""}
                onClick={() => setActiveTab("3")}
              >
                Deposits
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </div>
      <p className="text-dark-grey">
        You can visit any of these stores and earn real cashback
      </p>
      <div style={{ marginTop: "20px" }}>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Handpicked />
          </TabPane>
          <TabPane tabId="2">
            <Books />
          </TabPane>
          <TabPane tabId="3">
            <Deposits />
          </TabPane>
        </TabContent>
      </div>
      <div className="row mx-0">
        <div className="col-12">
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

export default Cashback;
