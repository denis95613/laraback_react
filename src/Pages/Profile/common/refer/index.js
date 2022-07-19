import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import Container from "react-bootstrap/Container";
import "../main.css";
import { commonActions } from "../../../../store/actions";
import Join from "./join";
import Invite from "./invite";

const Refer = () => {
  const dispatch = useDispatch();
  dispatch(commonActions.setProType(5));
  const [activeTab, setActiveTab] = useState("1");
  return (
    <div className="main-overview">
      <Container>
        <div className="row main-content">
          <div className="account">
            <div>
              <h1 className="heading mb-2">Refer &amp; Earn</h1>
            </div>
            <p className="main-desc">
              Spread the joy of savings and earning real cashback with your
              friends and family and earn real bonus.
            </p>
            <div>
              <div className="user-card">
                <div className="user-card-body">
                  <div className="row">
                    <div className="col-lg-8 mx-auto">
                      <div className="user-form-head justify-content-center">
                        <div className="user-form-icon">
                          <img src="images/share-sm-icon.svg" width={30} />
                        </div>
                        <div>
                          <p className="form-title mb-0">Refer &amp; Earn</p>
                        </div>
                      </div>
                      <div>
                        <div className="p-3 rounded border mb-4">
                          <ul className="list-unstyled list-dash mb-0">
                            <li>
                              <small>
                                <span className="text-purple fw-medium">
                                  {" "}
                                  27% Referral Reward{" "}
                                </span>{" "}
                                for all the transactions your friend makes .{" "}
                              </small>
                            </li>
                            <li>
                              <small>
                                {" "}
                                When any one joins using your referral link, you
                                will earn{" "}
                                <span className="text-purple fw-medium">
                                  {" "}
                                  $32.00 Referral Bonus*
                                </span>
                              </small>
                            </li>
                            <li>
                              <small>
                                {" "}
                                Any friend joins our platform will earn
                                <span className="text-purple fw-medium">
                                  {" "}
                                  $100.00 Joining Bonus*
                                </span>
                              </small>
                            </li>
                          </ul>
                        </div>
                        <div className="mb-5">
                          <div className="form-title mb-0 text-center mb-3">
                            Your unique referral link
                          </div>
                          <div className="input-group">
                            <input
                              // readonly="true"
                              placeholder="https://laraback.enactweb.com/signup?referral=USERLAMU"
                              type="text"
                              className="form-control"
                            />
                            <div>
                              <button
                                className="btn lb-copy-btn h-100"
                                type="btn"
                                id="copy_button_referral"
                              >
                                Copy Link
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row invite-row justify-content-center mb-5">
                    <div className="col-md-6 email-invite-col position-relative pe-md-5">
                      <div className="user-form-head">
                        <div className="user-form-icon">
                          <img src="images/link-email.svg" />
                        </div>
                        <div>
                          <p className="form-title mb-0">Invite by Email</p>
                        </div>
                      </div>
                      <form className="">
                        <div className="input-group">
                          <textarea
                            rows="1"
                            placeholder="Enter Email"
                            type="text"
                            className="form-control"
                          ></textarea>
                          <div>
                            <div className="form-submit-btn h-100">
                              <button type="submit" className="btn h-100">
                                Invite
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                      <div className="input-bottom-text my-1">
                        <small>
                          Enter multiple email IDs separated by comma.
                        </small>
                      </div>
                    </div>
                    <div className="col-md-5 ps-md-5">
                      <div className="user-form-head">
                        <div className="user-form-icon">
                          <img src="images/share-icon.svg" width={30} />
                        </div>
                        <div>
                          <p className="form-title mb-0">
                            {" "}
                            Share with social media
                          </p>
                        </div>
                      </div>
                      <ul className="member-social-btns mt-2">
                        <li className="facebook">
                          <a
                            href="https://www.facebook.com/sharer.php?u=https://laraback.enactweb.com/signup?referral=USERLAMU"
                            target="_blank"
                          >
                            <i className="pcbi-facebook"></i>
                          </a>
                        </li>
                        <li className="twitter">
                          <a
                            href="https://twitter.com/intent/tweet?url=https://laraback.enactweb.com/signup?referral=USERLAMU"
                            target="_blank"
                          >
                            <i className="pcbi-twitter"></i>
                          </a>
                        </li>
                        <li className="whatsapp">
                          <a
                            href="https://api.whatsapp.com/send?text=https://laraback.enactweb.com/signup?referral=USERLAMU"
                            target="_blank"
                          >
                            <i className="pcbi-whatsapp"></i>
                          </a>
                        </li>
                        <li className="telegram">
                          <a
                            href="https://telegram.me/share/url?url=https://laraback.enactweb.com/signup?referral=USERLAMU"
                            target="_blank"
                          >
                            <i className="pcbi-telegram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="form-title mb-0 text-center mb-3">
                    How Refer &amp; Earn Works
                  </div>
                  <div className="member-share-hiw">
                    <div className="list-items">
                      <div>
                        <h5>Refer &amp; Earn</h5>
                        <p>Learn how to earn with referral program</p>
                        <ul>
                          <li>
                            <div className="item-count">1</div>
                            <div className="item-desc">
                              Invite a friend by an email, social media or
                              WhatsApp.
                            </div>
                          </li>
                          <li>
                            <div className="item-count">2</div>
                            <div className="item-desc">
                              Your Friend Joins us using referral code and
                              complete verification.
                            </div>
                          </li>
                          <li>
                            <div className="item-count">3</div>
                            <div className="item-desc">
                              Shop Online via our website and earn cashback.
                            </div>
                          </li>
                          <li>
                            <div className="item-count">4</div>
                            <div className="item-desc">
                              You get Rs. 25 referral bonus and your friend gets
                              Rs. 50 joining bonus.
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <p
                    className="text-dark-grey text-center collapse-link ms-5 ps-5 mt-3"
                    data-bs-toggle="collapse"
                    href="#reff-terms"
                    role="button"
                    aria-expanded="false"
                    aria-controls="reff-terms"
                  >
                    <small>
                      See Terms{" "}
                      <i className="fas text-dark-grey fa-chevron-down fa-sm"></i>
                    </small>
                  </p>
                  <div className="collapse" id="reff-terms">
                    <div className="p-3 rounded border mb-4">
                      <p className="fw-bold text-dark mb-1">
                        {" "}
                        Eligibility Terms
                      </p>
                      <ul className="list-unstyled list-dash mb-0">
                        <li>
                          <small>
                            {" "}
                            Referral bonus gets confirmed when confirmed
                            cashback worth $565.00 earned within 93 days
                          </small>
                        </li>
                        <li>
                          <small>
                            {" "}
                            Joining bonus gets confirmed when confirmed cashback
                            worth $400.00 earned within 120 days.
                          </small>
                        </li>
                        <li>
                          <small>
                            {" "}
                            Your referral bonus gets confirmed only when your
                            referred friend bonus confirms.
                          </small>
                        </li>
                        <li>
                          <small>
                            {" "}
                            The status for the referral earning is directly
                            linked to your friend's transactions status.
                          </small>
                        </li>
                      </ul>
                    </div>
                    <div className="alert alert-secondary" role="alert">
                      <p className="fw-bold text-dark mb-1"> Referral Terms</p>
                      <div className="shareEarn-terms">
                        <ul>
                          <li>
                            You must be a registered member to participate in
                            the Referral Program.
                          </li>
                          <li>
                            Make a qualifying amount in purchases within
                            stipulated duration from joining us.
                          </li>
                          <li>
                            Your purchases must have CONFIRMED cashback amount
                            worth US$150 to be eligible to get the joining bonus
                            confirmed.
                          </li>
                          <li>
                            All the users who is referred by you must use the
                            referral code during signup, failing which the
                            referral will be disqualified.
                          </li>
                          <li>
                            Referral to yourself won't help, so please abstain.
                          </li>
                          <li>Referral bonus never expires.</li>
                          <li>
                            The following is a non-exhaustive list of activities
                            that are not permitted and that will disqualify you
                            from earning Bonuses through the Referral Program:
                            (i) self-referral; (ii) creating fake accounts,
                            blogs, web pages, profiles, websites, links or
                            messages; (iii) any bulk email distribution,
                            submission or distribution to strangers, or any
                            other promotion that would constitute or appear to
                            constitute unsolicited commercial email or "spam";
                            (iv) posting your referral link on any page that is
                            not owned and controlled by you, including, but not
                            limited to, any merchant Facebook or forum page; (v)
                            placement of our logos or mention of our trademarks
                            or trade-names in any ad text, extensions or banner
                            ads; (vi) paid advertising for the purpose of
                            generating traffic directly to your referral link;
                            (vii) misleading or attempting to mislead anyone in
                            connection with the Referral Program, including, but
                            not limited to, misrepresenting your relationship
                            with us or posing as our representative in an
                            official capacity; and (viii) taking any action or
                            making any content that is disparaging or defamatory
                            to us. Multiple accounts created with the same name,
                            address, email address or other identifying feature
                            may be flagged as fraudulent referrals.
                          </li>
                          <li>
                            We reserve the right to suspend or terminate the
                            Referral Program or to change these Referral Program
                            Terms at any time and for any reason in our sole
                            discretion.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="paymrnt-mode-tab">
                <h2 className="user-page-title">Your Referral Activities</h2>
                <div style={{ marginTop: "20px" }}>
                  <Nav tabs>
                    <NavItem>
                      <NavLink
                        className={activeTab == "1" ? "active" : ""}
                        onClick={() => setActiveTab("1")}
                      >
                        Joined
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={activeTab == "2" ? "active" : ""}
                        onClick={() => setActiveTab("2")}
                      >
                        Invited
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
                <div>
                  <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                      <Join />
                    </TabPane>
                    <TabPane tabId="2">
                      <Invite />
                    </TabPane>
                  </TabContent>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Refer;
