import React from "react";
import { useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import "../main.css";
import { commonActions } from "../../../../store/actions";
import chart1 from "../../../../assets/images/chart1.png";
import chart2 from "../../../../assets/images/chart2.png";

const Overview = () => {
  const dispatch = useDispatch();
  dispatch(commonActions.setProType(1));
  return (
    <div className="main-overview">
      <Container>
        <div className="row main-content">
          <div className="account">
            <h1>Welcome to your Cashback Account.</h1>
            <p>
              Stay up-to-date with all your Cashback Account information,
              Favorites, daily Hot Deals and notifications about Cash Back
              activity, special bonus offers and more.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <div className="user-card">
                  <div className="card-head">
                    <div className="loan">
                      <div className="loan-img">
                        <img
                          src="https://laraback.enactweb.com/ui/images/user-cb-icon.png"
                          alt=""
                        />
                      </div>
                      <h4>Cashback</h4>
                    </div>
                    <div className="loan-price">
                      <h4>$6,040.00</h4>
                      <p>Total Earned</p>
                    </div>
                  </div>
                  <div className="earning-list">
                    <div>
                      <p>Pending</p>
                      <p>$5,600.00</p>
                    </div>
                    <div>
                      <p>available</p>
                      <p>$221.00</p>
                    </div>
                    <div>
                      <p>Paid</p>
                      <p>$219.00</p>
                    </div>
                  </div>
                  <div className="chart">
                    <img src="https://i.stack.imgur.com/EV7US.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="user-card">
                  <div className="card-head">
                    <div className="loan">
                      <div className="loan-img">
                        <img
                          src="https://laraback.enactweb.com/ui/images/cb-reward-icon.png"
                          alt=""
                        />
                      </div>
                      <h4>Reward</h4>
                    </div>
                    <div className="loan-price">
                      <h4>$82.00</h4>
                      <p>Total Earned</p>
                    </div>
                  </div>
                  <div className="earning-list">
                    <div>
                      <p>Pending</p>
                      <p>$82.00</p>
                    </div>
                    <div>
                      <p>available</p>
                      <p>$0.00</p>
                    </div>
                    <div>
                      <p>Paid</p>
                      <p>$0.00</p>
                    </div>
                  </div>
                  <div className="chart adjust-w">
                    <img
                      src="https://www.drupal.org/files/project-images/halfdonut.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="reward-earn">
                  <div className="head">
                    <div className="head-sub">
                      <img
                        src="https://laraback.enactweb.com/ui/images/cb-reward.png"
                        alt=""
                      />
                    </div>
                    <div className="head-txt">
                      <h4>Cashback & Reward Earning</h4>
                      <h6>View month wise cashback & bonus earning</h6>
                    </div>
                  </div>
                  <div className="chart-img">
                    <img src={chart1} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-12 mt-4">
                <div className="reward-earn">
                  <div className="head">
                    <div className="head-sub">
                      <img
                        src="https://laraback.enactweb.com/ui/images/shopping-trip.png"
                        alt=""
                      />
                    </div>
                    <div className="head-txt">
                      <h4>Shopping Trips</h4>
                      <h6>View daily clicks for last 30 days</h6>
                    </div>
                  </div>
                  <div className="chart-img">
                    <img src={chart2} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Overview;
