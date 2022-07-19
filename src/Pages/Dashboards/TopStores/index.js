import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import { FaLongArrowAltRight } from "react-icons/fa";
import Cardimage from "./Cardimage";
import Clothing from "./Clothing";
import OnlineGames from "./OnlineGames";

const TopStore = () => {
  const [activeTab, setActiveTab] = useState("1");
  return (
    <div className="menu_store">
      <div className="row mx-0 justify-content-between top_menu">
        <div className="col-lg-2 col-md-3">
          <h2 className="top_store">Top Stores</h2>
        </div>
        <div className="col-lg-4 col-md-6">
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
                Clothing & Footwear
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={activeTab == "3" ? "active" : ""}
                onClick={() => setActiveTab("3")}
              >
                Online Games
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Cardimage />
          </TabPane>
          <TabPane tabId="2">
            <Clothing />
          </TabPane>
          <TabPane tabId="3">
            <OnlineGames />
          </TabPane>
        </TabContent>
      </div>
      <div className="view-more-btn">
        <span className="d-block">
          <Link to="/all-stores">View More Clothing & Footwear Stores</Link>
          <FaLongArrowAltRight className="ms-2" />
        </span>
      </div>
    </div>
  );
};

export default TopStore;
