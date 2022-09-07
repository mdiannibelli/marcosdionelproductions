import React, {useState, useEffect} from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from "./CartWidget";
import {NavLink} from 'react-router-dom';
export default function NavBar() {
  return (

    <Navbar bg="light" expand="lg">
    <Container>
    <NavLink className="navbar-brand" to='/'><Navbar.Brand>Dionel Shop</Navbar.Brand></NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Products" id="basic-nav-dropdown">
          <NavLink className='navbarCategory' to='/category/gloves'><NavDropdown.Item href="#action/3.1">Gloves</NavDropdown.Item></NavLink>
          <NavLink className='navbarCategory' to='/category/bags'><NavDropdown.Item href="#action/3.2">Bags</NavDropdown.Item></NavLink>
          <NavLink className='navbarCategory' to='/category/padsykickshields'><NavDropdown.Item href="#action/3.3">Pads/Kickshields</NavDropdown.Item></NavLink>
          <NavLink className='navbarCategory' to='/category/protections'><NavDropdown.Item href="#action/3.4">Protections</NavDropdown.Item></NavLink>
          <NavLink className='navbarCategory' to='/category/accessories'><NavDropdown.Item href="#action/3.5">Accessories</NavDropdown.Item></NavLink>
          <NavLink className='navbarCategory' to='/'><NavDropdown.Item href="#action/3.6"><NavDropdown.Divider />All our products</NavDropdown.Item></NavLink>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    <CartWidget></CartWidget>
    </Container>
  </Navbar>
  )
}
