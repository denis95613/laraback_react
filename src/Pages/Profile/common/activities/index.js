import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import "../main.css";
import { commonActions } from "../../../../store/actions";
import Referral from "./referral";
import Bonus from "./bonus";
import Shopping from "./shopping";
import Clicks from "./clicks";

const Activities = () => {
  const dispatch = useDispatch();
  dispatch(commonActions.setProType(3));
  const [track, setTrack] = useState(1);
  return (
    <div className="main-overview">
      <Container>
        <div className="row main-content">
          <div className="account">
            <div>
              <div>
                <div>
                  <h1 className="heading mb-2">Cashback Activities</h1>
                </div>
                <p className="main-desc">
                  Keep track of your various cashback activities. We've robust
                  tracking for every click made for your shopping trips.
                </p>
                <div className="cb-activites-nav">
                  <a
                    className={track == 1 ? "active" : ""}
                    onClick={() => setTrack(1)}
                    style={{ cursor: "pointer" }}
                  >
                    Shopping
                  </a>
                  <a
                    className={track == 2 ? "active" : ""}
                    onClick={() => setTrack(2)}
                    style={{ cursor: "pointer" }}
                  >
                    Referral
                  </a>
                  <a
                    className={track == 3 ? "active" : ""}
                    onClick={() => setTrack(3)}
                    style={{ cursor: "pointer" }}
                  >
                    Bonus
                  </a>
                  <a
                    className={track == 4 ? "active" : ""}
                    onClick={() => setTrack(4)}
                    style={{ cursor: "pointer" }}
                  >
                    Clicks
                  </a>
                </div>
                {track == 1 && <Shopping />}
                {track == 2 && <Referral />}
                {track == 3 && <Bonus />}
                {track == 4 && <Clicks />}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Activities;
