import React, { useState } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

export const CustomerNavBar = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand href="/">
          Thorns and Roses | Greenbrier Garden Co.
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/flowers/">Flowers</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/cart">Shopping Cart</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/orders">Your Orders</NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/"
                onClick={() => {
                  localStorage.removeItem("greenbrier_user");
                }}
              >
                <strong>Logout</strong>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
