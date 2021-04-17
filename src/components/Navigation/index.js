import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Navbar = (props) => {
  return (
    <div>
      <Nav>
        <NavItem>
          <NavLink href="#">About Me</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Portfolio</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Resume</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">Contact</NavLink>
        </NavItem>
      </Nav>
      <hr />
    </div>
  );
}

export default Navbar;