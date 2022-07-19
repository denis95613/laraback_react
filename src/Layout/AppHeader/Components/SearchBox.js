import React, { Fragment } from "react";

import cx from "classnames";
import { Input, InputGroup, InputGroupText } from "reactstrap";

const SearchBox = () => {
  return (
    <Fragment>
      <InputGroup className="nav-search">
          <Input placeholder="Search" className="nav-search-inp" />
          <InputGroupText className="nav-search-btn">
          <span>
            <i className="pe-7s-search"></i>
          </span>
        </InputGroupText>
      </InputGroup>
    </Fragment>
  );
};

export default SearchBox;
