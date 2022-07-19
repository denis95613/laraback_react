import React from "react";
import { useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import "../main.css";
import { commonActions } from "../../../../store/actions";

const Favorities = () => {
  const dispatch = useDispatch();
  dispatch(commonActions.setProType(7));
  return (
    <div className="main-overview">
      <Container>
        <div className="row main-content">
          <div className="account">
            <div>
              <div>
                <div>
                  <h1 className="heading mb-2">Favorites</h1>
                </div>
                <p className="main-desc">
                  All your favorite stores are listed here so that you can
                  quickly access them.
                </p>
                <div className="user-fav-wrapper">
                  <div className="user-fav-card">
                    <a href="https://laraback.enactweb.com/store/lightinthebox">
                      <img
                        src="images/lightinthebox.jpg"
                        className="d-block mx-auto mb-3"
                      />
                    </a>
                    <a
                      href="https://laraback.enactweb.com/store/lightinthebox"
                      className="d-block mb-2 fw-medium text-dark"
                    >
                      Lightinthebox
                    </a>
                    <p className="st-cb">Up to 9.60% Cashback</p>
                    <div>
                      <a
                        href="https://laraback.enactweb.com/out/store/4/"
                        className="btn md-btn"
                        target="_blank"
                      >
                        Shop Now
                      </a>
                    </div>
                    <a role="button" className="delete-fav-icon">
                      <i className="far fa-trash-alt fa-lg"></i>
                    </a>
                  </div>
                  <div className="user-fav-card">
                    <a href="https://laraback.enactweb.com/store/dx">
                      <img
                        src="images/dx.jpg"
                        className="d-block mx-auto mb-3"
                      />
                    </a>
                    <a
                      href="https://laraback.enactweb.com/store/dx"
                      className="d-block mb-2 fw-medium text-dark"
                    >
                      Dx
                    </a>
                    <p className="st-cb">Up to $80.00 Cashback</p>
                    <div>
                      <a
                        href="https://laraback.enactweb.com/out/store/6/"
                        className="btn md-btn"
                        target="_blank"
                      >
                        Shop Now
                      </a>
                    </div>
                    <a role="button" className="delete-fav-icon">
                      <i className="far fa-trash-alt fa-lg"></i>
                    </a>
                  </div>
                  <div className="user-fav-card">
                    <a href="https://laraback.enactweb.com/store/jetradar-int">
                      <img
                        src="images/jetradar-int.jpg"
                        className="d-block mx-auto mb-3"
                      />
                    </a>
                    <a
                      href="https://laraback.enactweb.com/store/jetradar-int"
                      className="d-block mb-2 fw-medium text-dark"
                    >
                      JetRadar INT
                    </a>
                    <p className="st-cb">Flat 43.04% Cashback</p>
                    <div>
                      <a
                        href="https://laraback.enactweb.com/out/store/9/"
                        className="btn md-btn"
                        target="_blank"
                      >
                        Shop Now
                      </a>
                    </div>
                    <a role="button" className="delete-fav-icon">
                      <i className="far fa-trash-alt fa-lg"></i>
                    </a>
                  </div>
                  <div className="user-fav-card">
                    <a href="https://laraback.enactweb.com/store/pososhok-many-geos">
                      <img
                        src="images/pososhok-many-geos.jpg"
                        className="d-block mx-auto mb-3"
                      />
                    </a>
                    <a
                      href="https://laraback.enactweb.com/store/pososhok-many-geos"
                      className="d-block mb-2 fw-medium text-dark"
                    >
                      Pososhok Many GEOs
                    </a>
                    <p className="st-cb">Up to 10.40% Cashback</p>
                    <div>
                      <a
                        href="https://laraback.enactweb.com/out/store/12/"
                        className="btn md-btn"
                        target="_blank"
                      >
                        Shop Now
                      </a>
                    </div>
                    <a role="button" className="delete-fav-icon">
                      <i className="far fa-trash-alt fa-lg"></i>
                    </a>
                  </div>
                  <div className="user-fav-card">
                    <a href="https://laraback.enactweb.com/store/agoda">
                      <img
                        src="images/agoda.png"
                        className="d-block mx-auto mb-3"
                      />
                    </a>
                    <a
                      href="https://laraback.enactweb.com/store/agoda"
                      className="d-block mb-2 fw-medium text-dark"
                    >
                      Agoda
                    </a>
                    <p className="st-cb">Flat 4.80% Cashback</p>
                    <div>
                      <a
                        href="https://laraback.enactweb.com/out/store/13/"
                        className="btn md-btn"
                        target="_blank"
                      >
                        Shop Now
                      </a>
                    </div>
                    <a role="button" className="delete-fav-icon">
                      <i className="far fa-trash-alt fa-lg"></i>
                    </a>
                  </div>
                  <div className="user-fav-card">
                    <a href="https://laraback.enactweb.com/store/everbuyingnet-int">
                      <img
                        src="images/everbuyingnet-int.jpg"
                        className="d-block mx-auto mb-3"
                      />
                    </a>
                    <a
                      href="https://laraback.enactweb.com/store/everbuyingnet-int"
                      className="d-block mb-2 fw-medium text-dark"
                    >
                      Everbuying.net INT
                    </a>
                    <p className="st-cb">Flat 6.40% Cashback</p>
                    <div>
                      <a
                        href="https://laraback.enactweb.com/out/store/17/"
                        className="btn md-btn"
                        target="_blank"
                      >
                        Shop Now
                      </a>
                    </div>
                    <a role="button" className="delete-fav-icon">
                      <i className="far fa-trash-alt fa-lg"></i>
                    </a>
                  </div>
                  <div className="user-fav-card">
                    <a href="https://laraback.enactweb.com/store/shutterstock">
                      <img
                        src="images/shutterstock.jpg"
                        className="d-block mx-auto mb-3"
                      />
                    </a>
                    <a
                      href="https://laraback.enactweb.com/store/shutterstock"
                      className="d-block mb-2 fw-medium text-dark"
                    >
                      Shutterstock
                    </a>
                    <p className="st-cb">Up to 3.38% Cashback</p>
                    <div>
                      <a
                        href="https://laraback.enactweb.com/out/store/80/"
                        className="btn md-btn"
                        target="_blank"
                      >
                        Shop Now
                      </a>
                    </div>
                    <a role="button" className="delete-fav-icon">
                      <i className="far fa-trash-alt fa-lg"></i>
                    </a>
                  </div>
                </div>
                <div>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Favorities;
