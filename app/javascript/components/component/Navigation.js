import React, { useState } from 'react';
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
} from 'reactstrap';




const Navigation = () => {
const [isOpen, setIsOpen] = useState(false);

const toggle = () => setIsOpen(!isOpen);
  return (
    <>
    <Navbar >
        <NavbarBrand href="/">Apartments</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Listings</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Sign In</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Sign Out</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">My Apartments</NavLink>
            </NavItem>
            </Nav>
        </Collapse>
      </Navbar>
    
    </>
  )
}

export default Navigation