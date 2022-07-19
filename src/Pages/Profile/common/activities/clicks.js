import React, { useState } from "react";
import "../main.css";

const Clicks = () => {
  const list = [
    {
      date: "07/10/2022 6:05:28 PM",
      clickId: "iEjdqdnOn3",
      store: "ClearTrip",
      status: "Clicked",
    },
    {
      date: "07/10/2022 6:05:09 PM",
      clickId: "KTzTJsIOCA",
      store: "Hostgator.in",
      status: "Clicked",
    },
    {
      date: "07/09/2022 8:28:41 PM",
      clickId: "TrsFPRzoyL",
      store: "Lightinthebox",
      status: "Clicked",
    },
    {
      date: "07/09/20228:28:31 PM",
      clickId: "qNNqYdqtvq",
      store: "Lightinthebox",
      status: "Clicked",
    },
    {
      date: "07/09/2022 8:28:22 PM",
      clickId: "oIRdZmpbqZ",
      store: "Lightinthebox",
      status: "Clicked",
    },
    {
      date: "07/09/2022 8:28:08 PM",
      clickId: "aZ3c35NwYM",
      store: "Dx",
      status: "Clicked",
    },
    {
      date: "07/09/2022 8:27:55 PM",
      clickId: "YSZCfS6h7s",
      store: "Shutterstock",
      status: "Clicked",
    },
    {
      date: "07/06/2022 3:12:40 PM",
      clickId: "jOgo14iNSD",
      store: "Shutterstock",
      status: "Clicked",
    },
    {
      date: "07/05/2022 1:09:57 PM",
      clickId: "0mIbHZdIJ8",
      store: "Lightinthebox",
      status: "Clicked",
    },
    {
      date: "07/04/2022 9:28:22 PM",
      clickId: "mFZkBpqTrg",
      store: "Citibank Credit Card IN",
      status: "Clicked",
    },
    {
      date: "07/04/2022 9:26:18 PM",
      clickId: "r2PSFxdZNR",
      store: "TVC-mall",
      status: "Clicked",
    },
    {
      date: "07/04/2022 9:00:14 AM",
      clickId: "KaH2zlh6uT",
      store: "Lightinthebox",
      status: "Clicked",
    },
    {
      date: "07/03/2022 9:13:59 PM",
      clickId: "Barpa0HMbq",
      store: "Banggood",
      status: "Clicked",
    },
    {
      date: "07/01/2022 6:09:58 PM",
      clickId: "ineDzUDlDu",
      store: "Cleartrip IN",
      status: "Clicked",
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
                  <option value="202206">June-2022</option>
                  <option value="202207">July-2022</option>
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
                    Trip Date
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
                      one.status.indexOf(searchTxt) > -1
                  )
                  .map((one, key) => (
                    <tr role="row" key={key}>
                      <td role="cell">
                        <div>
                          <span>{one.date}</span>
                        </div>
                      </td>
                      <td role="cell">{one.clickId}</td>
                      <td role="cell">{one.clickId}</td>
                      <td role="cell">
                        <span>
                          <i className="text-success fas fa-check-circle"></i>
                        </span>
                      </td>
                      <td role="cell">{one.status}</td>
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

export default Clicks;
