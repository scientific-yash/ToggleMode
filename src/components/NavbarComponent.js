import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/product">Products</Nav.Link>
        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
      </Nav>

      {/* Sign In button on the right */}
      <Nav>
        <Nav.Link as={Link} to="/signin">Sign In</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavbarComponent;
