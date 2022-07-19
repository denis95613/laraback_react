import React, { Fragment } from "react";
import {
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { FaGlobe } from "react-icons/fa";

const Lang = () => {
  return (
    <Fragment>
      <FaGlobe />
      <UncontrolledButtonDropdown>
        <DropdownToggle
          caret
          outline
          className="ps-1 me-5 semiBold-14 hover-link hover-link-bottom"
          color="link"
          style={{ background: "rgb(250 251 252)", color: "black" }}
        >
          English
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Menus</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem>Actions</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Dividers</DropdownItem>
        </DropdownMenu>
      </UncontrolledButtonDropdown>
    </Fragment>
  );
};

export default Lang;
