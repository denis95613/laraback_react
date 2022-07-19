import React, { useState } from "react";
import "../main.css";

const Shopping = () => {
  const list = [
    {
      date: "05/22/2022",
      clickId: "xIAxslHNcJ",
      store: "Lightinthebox",
      orderAmount: "1200.00 USD",
      cashbackAmount: "$5,600.00",
      status: "pending",
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
            <div className="col-md-3 col-sm-5 mb-3">
              <div className="input-group user-month-drpdown">
                <select className="form-select" as="select">
                  <option value="202203">March-2022</option>
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
                    Click ID<span></span>
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
                  <th className="user-th" colSpan="1" role="columnheader">
                    Order Amount<span></span>
                  </th>
                  <th className="user-th" colSpan="1" role="columnheader">
                    Cashback Amount<span></span>
                  </th>
                  <th
                    className="user-th"
                    colSpan="1"
                    role="columnheader"
                    title="Toggle SortBy"
                    style={{ cursor: "pointer" }}
                  >
                    Status<span></span>
                  </th>
                </tr>
              </thead>
              <tbody role="rowgroup">
                {list
                  .filter(
                    (one) =>
                      one.clickId.indexOf(searchTxt) > -1 ||
                      one.store.indexOf(searchTxt) > -1 ||
                      one.orderAmount.indexOf(searchTxt) > -1 ||
                      one.cashbackAmount.indexOf(searchTxt) > -1 ||
                      one.status.indexOf(searchTxt) > -1
                  )
                  .map((one, key) => (
                    <tr role="row" key={key}>
                      <td role="cell">{one.date}</td>
                      <td role="cell">{one.clickId}</td>
                      <td role="cell">{one.store}</td>
                      <td role="cell">
                        <div>{one.orderAmount}</div>
                      </td>
                      <td role="cell">
                        <div>
                          <div className="fw-medium">{one.cashbackAmount} </div>
                          <div className="cb_type">Cashback</div>
                        </div>
                      </td>
                      <td role="cell">
                        <div>
                          <div className="pending-label">
                            {one.status}
                            <span
                              className="ms-1"
                              data-tooltip="Confirmed By: 08/21/2022"
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

export default Shopping;
