import React, { useState } from "react";
import { Nav, NavItem, Button, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

export default function Navbar(props) {

  return (
      <div>
        <h2>Navigation</h2>
        <Nav vertical>
          <NavItem>
            <Link to='/user/create' onClick={props.createOn}>Sign Up A Comrade</Link>
          </NavItem>
          <NavItem>
            <Link to='/user/'>My Profile</Link>
          </NavItem>
          <NavItem>
            <Link to='/event/created'>My Events</Link>
          </NavItem>
            <br />
        </Nav>
        <Button color="primary" onClick={props.clickLogout}>Log Out</Button>
      </div>
  );
}
