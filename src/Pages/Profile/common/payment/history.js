import React, { useState } from "react";
import "../main.css";

const History = () => {
  const list = [
    {
      date: "05/04/2022",
      id: "0024f72bba",
      accountType: "UPI Payment",
      paymentAccount: "8932967780@ybl",
      amount: "$89.00",
      status: "Created",
    },
  ];
  const [searchTxt, setSearchTxt] = useState("");

  return (
    <div>
      <div className="user-card">
        <div className="user-card-body">
          <div className="row">
            <div className="col-md-3 col-sm-8 mb-3">
              <span>
                <input
                  name="searchTxt"
                  value={searchTxt}
                  onChange={(e) => setSearchTxt(e.target.value)}
                  className="form-control table-search-input"
                  placeholder="Search records"
                />
              </span>
            </div>
            <div className="col-md-6 col-sm-8 mb-3"></div>
            <div className="col-md-3 col-sm-8 mb-3">
              <div className="input-group user-month-drpdown">
                <select className="form-select" as="select">
                  <option value="202203">March-2022</option>
                  <option value="202204">April-2022</option>
                  <option value="202205">May-2022</option>
                </select>
              </div>
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
                    Date
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
                    Withdrawal Id<span></span>
                  </th>
                  <th
                    className="user-th"
                    colSpan="1"
                    role="columnheader"
                    title="Toggle SortBy"
                    style={{ cursor: "pointer" }}
                  >
                    Account Type<span></span>
                  </th>
                  <th
                    className="user-th"
                    colSpan="1"
                    role="columnheader"
                    title="Toggle SortBy"
                    style={{ cursor: "pointer" }}
                  >
                    Payment Account<span></span>
                  </th>
                  <th className="user-th" colSpan="1" role="columnheader">
                    Amount<span></span>
                  </th>
                  <th className="user-th" colSpan="1" role="columnheader">
                    Status<span></span>
                  </th>
                </tr>
              </thead>
              <tbody role="rowgroup">
                {list
                  .filter(
                    (one) =>
                      one.id.indexOf(searchTxt) > -1 ||
                      one.accountType.indexOf(searchTxt) > -1 ||
                      one.paymentAccount.indexOf(searchTxt) > -1 ||
                      one.status.indexOf(searchTxt) > -1
                  )
                  .map((one, key) => (
                    <tr role="row" key={key}>
                      <td role="cell">
                        <div className="2022-05-04T10:39:39.000000Z-label">
                          {one.date}
                        </div>
                      </td>
                      <td role="cell">{one.id}</td>
                      <td role="cell">{one.accountType}</td>
                      <td role="cell">{one.paymentAccount}</td>
                      <td role="cell">
                        <div className="fw-medium">{one.amount}</div>
                      </td>
                      <td role="cell">
                        <div>
                          <div className="created-label">{one.status}</div>
                          <div>
                            <a role="button" className="link-primary ms-2">
                              Resend Email
                            </a>
                            <div className="email-v-pending alert alert-warning">
                              Pending for email verification
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
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

export default History;
