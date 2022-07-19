import React from "react";
import "../main.css";

const CreateClaim = () => {
  return (
    <div>
      <div className="missing-table-wrapper">
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
                      Claim Date
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
                      Claim ID<span></span>
                    </th>
                    <th
                      className="user-th"
                      colSpan="1"
                      role="columnheader"
                      title="Toggle SortBy"
                      style={{ cursor: "pointer" }}
                    >
                      Shopping Trip Date<span></span>
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
                      Order ID<span></span>
                    </th>
                    <th className="user-th" colSpan="1" role="columnheader">
                      Order Amount<span></span>
                    </th>
                    <th className="user-th" colSpan="1" role="columnheader">
                      Status<span></span>
                    </th>
                  </tr>
                </thead>
                <tbody role="rowgroup">
                  <tr role="row">
                    <td role="cell">05/24/2022</td>
                    <td role="cell">#89</td>
                    <td role="cell">05/11/2022</td>
                    <td role="cell">Hostgator.in -</td>
                    <td role="cell">3214</td>
                    <td role="cell">
                      <div>55.00 EUR</div>
                    </td>
                    <td role="cell">
                      <div>
                        <div className="answered-label">
                          Answered
                          <span className="ms-1" data-tooltip="06/06/2022">
                            <i className="fas fa-info-circle"></i>
                          </span>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr role="row">
                    <td role="cell">03/29/2022</td>
                    <td role="cell">#87</td>
                    <td role="cell">03/24/2022</td>
                    <td role="cell">Banggood</td>
                    <td role="cell">oid78</td>
                    <td role="cell">
                      <div>300.00 USD</div>
                    </td>
                    <td role="cell">
                      <div>
                        <div className="open-label">Open</div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row justify-content-between missing-table-pagination">
            <div className="col-lg-2 d-flex align-items-center">
              <label className="me-2 mb-0 form-label">Show</label>
              <select className="form-select border-1">
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
  );
};

export default CreateClaim;
