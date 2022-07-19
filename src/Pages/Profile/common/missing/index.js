import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import "../main.css";
import { commonActions } from "../../../../store/actions";
import CreateClaim from "./create";
import ClaimList from "./list";

const Missing = () => {
  const dispatch = useDispatch();
  dispatch(commonActions.setProType(4));
  const [isCreate, setIsCreate] = useState(false);
  return (
    <div className="main-overview">
      <Container>
        <div className="row main-content">
          <div className="account">
            <div>
              <h1 className="heading mb-2">Missing Cashback Claim</h1>
            </div>
            <div>
              <p className="main-desc">
                Is your cashback missing? Raise a claim here and we shall do our
                best to track it.
              </p>
              <div className="text-end mb-3">
                <button
                  aria-controls="example-collapse-text"
                  aria-expanded="false"
                  type="button"
                  className="btn"
                  onClick={() => setIsCreate(!isCreate)}
                >
                  Create Claim
                </button>
              </div>
              {isCreate && <CreateClaim />}
              <div role="alert" className="fade alert show">
                <p className="mb-0"></p>
              </div>
              <ClaimList />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Missing;
