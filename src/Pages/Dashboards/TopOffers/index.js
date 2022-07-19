import React, { useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import Latest from "./Latest";
import HealthBeauty from "./HealthBeauty";
import Fashion from "./Fashion";

const TopOffer = () => {
  const [activeTab, setActiveTab] = useState("1");
  return (
    <div className="menu_store">
      <div className="row mx-0 justify-content-between top_menu">
        <div className="col-lg- 5 col-md-3">
          <h2 className="top_store">Top Offers</h2>
        </div>
        <div className="col-lg-3 col-md-5">
          <Nav tabs>
            <NavItem>
              <NavLink
                className={activeTab == "1" ? "active" : ""}
                onClick={() => setActiveTab("1")}
              >
                Latest
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={activeTab == "2" ? "active" : ""}
                onClick={() => setActiveTab("2")}
              >
                Health & Beauty
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
      <div style={{ marginTop: "20px" }}>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Latest />
          </TabPane>
          <TabPane tabId="2">
            <HealthBeauty />
          </TabPane>
          <TabPane tabId="3">
            <Fashion />
          </TabPane>
        </TabContent>
      </div>
    </div>
  );
};

export default TopOffer;
