import React from "react";
import "../main.css";

const Join = () => {
  return (
    <div
      id="uncontrolled-tab-example-tabpane-referral"
      aria-labelledby="uncontrolled-tab-example-tab-referral"
      role="tabpanel"
      aria-hidden="false"
      className="fade tab-pane active show"
    >
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
            <table role="table" className="user-table table table-borderless">
              <thead>
                <tr role="row">
                  <th
                    className="user-th"
                    colSpan="1"
                    role="columnheader"
                    title="Toggle SortBy"
                    style={{ cursor: "pointer" }}
                  >
                    Joining Date
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
                    Name<span></span>
                  </th>
                  <th
                    className="user-th"
                    colSpan="1"
                    role="columnheader"
                    title="Toggle SortBy"
                    style={{ cursor: "pointer" }}
                  >
                    Email<span></span>
                  </th>
                  <th
                    className="user-th"
                    colSpan="1"
                    role="columnheader"
                    title="Toggle SortBy"
                    style={{ cursor: "pointer" }}
                  >
                    Earning<span></span>
                  </th>
                </tr>
              </thead>
              <tbody role="rowgroup">
                <tr role="row">
                  <td role="cell">03/30/2022</td>
                  <td role="cell">
                    <div>referuser </div>
                  </td>
                  <td role="cell">referuser@gmail.com</td>
                  <td role="cell">$0.00</td>
                </tr>
              </tbody>
            </table>
            <div className="pagination">
              <div className="row justify-content-between align-items-center">
                <div className="col-12 col-sm-2 mb-3 mb-sm-0 d-flex align-items-center">
                  <label className="me-2 mb-0 form-label">Show</label>
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
  );
};

export default Join;
