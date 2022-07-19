import React, { Fragment } from "react";
import {
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const Menu = () => {
  return (
    <Fragment>
      <UncontrolledButtonDropdown>
        <DropdownToggle
          caret
          outline
          className="semiBold-14 hover-link hover-link-bottom"
          color="link"
          style={{ background: "rgb(250 251 252)", color: "black" }}
        >
          Offers
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
      <UncontrolledButtonDropdown>
        <DropdownToggle
          caret
          outline
          className=" semiBold-14 hover-link hover-link-bottom"
          color="link"
          style={{ background: "rgb(250 251 252)", color: "black" }}
        >
          Explore
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
      <UncontrolledButtonDropdown>
        <DropdownToggle
          outline
          className="semiBold-14 hover-link hover-link-bottom"
          color="link"
          style={{ background: "rgb(250 251 252)", color: "black" }}
        >
          Contact Us
        </DropdownToggle>
      </UncontrolledButtonDropdown>
    </Fragment>
  );
};

export default Menu;
