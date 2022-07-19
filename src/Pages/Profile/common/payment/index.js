import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import "../main.css";
import { commonActions } from "../../../../store/actions";
import Payments from "./payments";
import History from "./history";

const Payment = () => {
  const dispatch = useDispatch();
  dispatch(commonActions.setProType(2));
  const [isPay, setIsPay] = useState(true);
  return (
    <div className="main-overview">
      <Container>
        <div className="row main-content">
          <div className="account">
            <div>
              <h1 className="heading mb-2">Cashback Payment</h1>
            </div>
            <p>
              Request for the cashback payment once reached to the minimum
              withdrawable confirmed amount.
            </p>
            <div className="cb-activites-nav">
              <a
                className={isPay ? "active" : ""}
                onClick={() => setIsPay(true)}
                style={{ cursor: "pointer" }}
              >
                Payments
              </a>
              <a
                className={!isPay ? "active" : ""}
                onClick={() => setIsPay(false)}
                style={{ cursor: "pointer" }}
              >
                History
              </a>
            </div>
            {isPay ? <Payments /> : <History />}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Payment;
