import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

const Navigation = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Navbar>
        <NavbarBrand to="/">SLAMpartments</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink to="/components/apartmentindex">Listings</NavLink>
            </NavItem>
            {!logged_in && (
              <>
                <NavItem>
                  <a href={sign_in_route}>Sign In</a>
                </NavItem>
                <NavItem>
                  <a href={new_user_route}>Create an Account</a>
                </NavItem>
              </>
            )}

            {logged_in && (
              <>
                <NavItem>
                  <a href={sign_out_route}>Sign Out</a>
                </NavItem>
                <NavItem>
                  <NavLink to="/components/myapartments">My Apartments</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/components/apartmentnew">Add a listing</NavLink>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;
