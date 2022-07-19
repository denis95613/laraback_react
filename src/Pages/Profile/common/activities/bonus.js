import React, { useState } from "react";
import "../main.css";

const Bonus = () => {
  const list = [
    {
      date: "03/09/2022",
      type: "Joining Bonus",
      amount: "$50.00",
      status: "Pending",
    },
    {
      date: "08/12/2021",
      type: "Bonus",
      amount: "$270.00",
      status: "Pending",
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
                    Type<span></span>
                  </th>
                  <th
                    className="user-th"
                    colSpan="1"
                    role="columnheader"
                    title="Toggle SortBy"
                    style={{ cursor: "pointer" }}
                  >
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
                      one.type.indexOf(searchTxt) > -1 ||
                      one.amount.indexOf(searchTxt) > -1 ||
                      one.status.indexOf(searchTxt) > -1
                  )
                  .map((one, key) => (
                    <tr role="row" key={key}>
                      <td role="cell">{one.date}</td>
                      <td role="cell">{one.type}</td>
                      <td role="cell">
                        <div className="fw-medium">{one.amount}</div>
                      </td>
                      <td role="cell">
                        <div>
                          <div className="pending-label">
                            {one.status}
                            <span
                              className="ms-1"
                              data-tooltip="Confirmed By: 07/10/2022"
                            >
                              <i className="fas fa-info-circle"></i>
                            </span>
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

export default Bonus;
