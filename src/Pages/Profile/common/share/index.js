import React from "react";
import { useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import "../main.css";
import { commonActions } from "../../../../store/actions";

const Share = () => {
  const dispatch = useDispatch();
  dispatch(commonActions.setProType(6));
  return (
    <div className="main-overview">
      <Container>
        <div className="row main-content">
          <div className="account">
            <div>
              <div>
                <div>
                  <h1 className="heading mb-2">Share &amp; Earn</h1>
                </div>
                <p className="main-desc">
                  With our unique share &amp; earn program, you can create
                  earning links and share with your friends &amp; family to earn
                  the real income.
                </p>
                <div className="member-share-earn">
                  <div>
                    <div className="user-card">
                      <div className="user-card-body">
                        <div className="create-share-link mb-4">
                          <div className="user-form-head justify-content-center">
                            <div
                              className="user-form-icon"
                              style={{
                                boxShadow: "0 5px 15px rgb(0 0 0 / 15%)",
                              }}
                            >
                              <img src="images/share-icon.svg" width={30} />
                            </div>
                            <div className="form-title text-center mb-3">
                              Create your own links and earn money when others
                              shop
                            </div>
                          </div>
                          <div className="head-offer-desc col-md-10 mx-auto">
                            <form className="">
                              <div className="row">
                                <div className="col-lg-6 col-md-12">
                                  <label className="form-label">
                                    Offer title
                                  </label>
                                  <input
                                    placeholder="Enter offer title"
                                    type="text"
                                    className="form-control"
                                  />
                                  <div className="input-bottom-text mt-2">
                                    <small>
                                      Enter the meaningful title so that your
                                      friend knows the offers details.
                                    </small>
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                  <label className="form-label">
                                    Offer Link
                                  </label>
                                  <div className="input-group">
                                    <input
                                      placeholder="Enter offer link"
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                  <div className="input-bottom-text mt-2">
                                    <small>
                                      Enter clear link, no referral and
                                      customized links
                                    </small>
                                  </div>
                                </div>
                                <div className="form-submit-btn mt-3 text-center">
                                  <button type="submit" className="btn md-btn">
                                    Create Link
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div className="form-title text-center mb-3">
                          How Share &amp; Earn Works
                        </div>
                        <div className="member-share-hiw">
                          <div className="list-items">
                            <div>
                              <h5>How It Work</h5>
                              <p>Earning cashback is as easy as 1-2-3-4...</p>
                              <ul>
                                <li>
                                  <div className="item-count">1</div>
                                  <div className="item-desc">
                                    Find a deal from any of our partner stores.
                                  </div>
                                </li>
                                <li>
                                  <div className="item-count">2</div>
                                  <div className="item-desc">
                                    Create a sharable link from share &amp; earn
                                    page
                                  </div>
                                </li>
                                <li>
                                  <div className="item-count">3</div>
                                  <div className="item-desc">
                                    Share with your friends &amp; family and on
                                    social media
                                  </div>
                                </li>
                                <li>
                                  <div className="item-count">4</div>
                                  <div className="item-desc">
                                    Earn real cashback and track the activities
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <p
                          className="text-dark-grey text-center collapse-link mt-3"
                          data-bs-toggle="collapse"
                          href="#learn-shareEarn"
                          role="button"
                          aria-expanded="false"
                          aria-controls="learn-shareEarn"
                        >
                          <small>
                            See terms{" "}
                            <i className="fas text-dark-grey fa-chevron-down fa-sm"></i>
                          </small>
                        </p>
                        <div className="collapse" id="learn-shareEarn">
                          <div className="alert alert-secondary">
                            <div className="shareEarn-terms">
                              <ul>
                                <li>
                                  The following is a non-exhaustive list of
                                  activities that are not permitted and that
                                  will disqualify you from earning through the
                                  Share &amp; Earn program.
                                </li>
                                <li>
                                  Bulk email distribution, submission or
                                  distribution to strangers, or any other
                                  promotion that would constitute or appear to
                                  constitute unsolicited commercial email or
                                  "spam".
                                </li>
                                <li>
                                  Posting your referral link on any page that is
                                  not owned and controlled by you, including,
                                  but not limited to, any merchant Facebook or
                                  forum page.
                                </li>
                                <li>
                                  bidding on any keywords containing our branded
                                  or common misspellings thereof.
                                </li>
                                <li>
                                  placement of our logos or mention of our
                                  trademarks or tradenames in any ad text,
                                  extensions or banner ads
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="share-table-wrapper">
                    <div className="user-card">
                      <div className="user-card-body">
                        <div className="row">
                          <div className="col-md-3 col-sm-8 mb-3">
                            <span>
                              <input
                                className="form-control table-search-input"
                                placeholder="Search records"
                              />
                            </span>
                          </div>
                        </div>
                        <div className="table-responsive-md">
                          <table
                            role="table"
                            className="user-table table table-borderless"
                          >
                            <thead>
                              <tr role="row">
                                <th
                                  className="user-th"
                                  colSpan="1"
                                  role="columnheader"
                                  title="Toggle SortBy"
                                  style={{ cursor: "pointer" }}
                                >
                                  Created
                                  <span>
                                    <i className="fas fa-sort-amount-up ms-3"></i>
                                  </span>
                                </th>
                                <th
                                  className="user-th"
                                  colSpan="1"
                                  role="columnheader"
                                  title="Toggle SortBy"
                                  style={{ cursor: "pointer" }}
                                >
                                  Offer Link<span></span>
                                </th>
                                <th
                                  className="user-th"
                                  colSpan="1"
                                  role="columnheader"
                                  title="Toggle SortBy"
                                  style={{ cursor: "pointer" }}
                                >
                                  Store<span></span>
                                </th>
                                <th
                                  className="user-th"
                                  colSpan="1"
                                  role="columnheader"
                                  title="Toggle SortBy"
                                  style={{ cursor: "pointer" }}
                                >
                                  Cashback<span></span>
                                </th>
                                <th
                                  className="user-th"
                                  colSpan="1"
                                  role="columnheader"
                                  title="Toggle SortBy"
                                  style={{ cursor: "pointer" }}
                                >
                                  Earnings<span></span>
                                </th>
                                <th
                                  className="user-th"
                                  colSpan="1"
                                  role="columnheader"
                                  title="Toggle SortBy"
                                  style={{ cursor: "pointer" }}
                                >
                                  Clicks<span></span>
                                </th>
                              </tr>
                            </thead>
                            <tbody role="rowgroup">
                              <tr role="row">
                                <td role="cell">
                                  <span>05/31/2022</span>
                                </td>
                                <td role="cell">
                                  <div>
                                    <div>Oferta Teste</div>
                                    https://laraback.enactweb.com/l/btZ0VybZLm
                                    <small
                                      className="d-block text-primary fw-medium"
                                      role="button"
                                    >
                                      <i className="far fa-copy"></i>{" "}
                                      <span id="text-95">Copy Link</span>
                                    </small>
                                  </div>
                                </td>
                                <td role="cell">Banggood</td>
                                <td role="cell">
                                  <span>
                                    <i className="text-success fas fa-check-circle"></i>
                                  </span>
                                </td>
                                <td role="cell">
                                  <span>$0.00 </span>
                                </td>
                                <td role="cell">5</td>
                              </tr>
                              <tr role="row">
                                <td role="cell">
                                  <span>05/23/2022</span>
                                </td>
                                <td role="cell">
                                  <div>
                                    <div>TEST</div>
                                    https://laraback.enactweb.com/l/V2I7PtSCgb
                                    <small
                                      className="d-block text-primary fw-medium"
                                      role="button"
                                    >
                                      <i className="far fa-copy"></i>{" "}
                                      <span id="text_95">Copy Link</span>
                                    </small>
                                  </div>
                                </td>
                                <td role="cell">Aliexpress IN</td>
                                <td role="cell">
                                  <span>
                                    <i className="text-success fas fa-check-circle"></i>
                                  </span>
                                </td>
                                <td role="cell">
                                  <span>$0.00 </span>
                                </td>
                                <td role="cell">1</td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="pagination">
                            <div className="row justify-content-between align-items-center">
                              <div className="col-12 col-sm-2 mb-3 mb-sm-0 d-flex align-items-center">
                                <label className="me-2 mb-0 form-label">
                                  Show
                                </label>
                                <select className="form-select border-1 w-auto">
                                  <option value="25">25</option>
                                  <option value="50">50</option>
                                  <option value="100">100</option>
                                  <option value="250">250</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default Share;
