import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';
import Navlogo from '../assets/img/logo/dionelshoplogo.png';
import {NavLink} from 'react-router-dom';
export default function NavBar() {
  return (

    <Navbar bg="light" expand="lg">
    <Container>
    <NavLink className="navbar-brand" to='/'><Navbar.Brand><img className='navbarLogo' src={Navlogo} /></Navbar.Brand></NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" style={{justifyContent:'space-around'}}>
        <Nav style={{gap:'32px'}}>
          <Nav.Link href="/"><h4 className='h4Navbar'>Home</h4></Nav.Link>
          <Nav.Link href="#link"><h4 className='h4Navbar'>Link</h4></Nav.Link>
          <NavDropdown className='h4Navbar' as='h4' title="Products" id="basic-nav-dropdown">
          <NavLink className='navbarCategory' to='/category/gloves'><NavDropdown.Item href="#action/3.1">Gloves</NavDropdown.Item></NavLink>
          <NavLink className='navbarCategory' to='/category/bags'><NavDropdown.Item href="#action/3.2">Bags</NavDropdown.Item></NavLink>
          <NavLink className='navbarCategory' to='/category/padsykickshields'><NavDropdown.Item href="#action/3.3">Pads/Kickshields</NavDropdown.Item></NavLink>
          <NavLink className='navbarCategory' to='/category/protections'><NavDropdown.Item href="#action/3.4">Protections</NavDropdown.Item></NavLink>
          <NavLink className='navbarCategory' to='/category/accessories'><NavDropdown.Item href="#action/3.5">Accessories</NavDropdown.Item></NavLink>
          <NavLink className='navbarCategory' to='/'><NavDropdown.Item href="#action/3.6"><NavDropdown.Divider />All our products</NavDropdown.Item></NavLink>
          </NavDropdown>
          <Nav.Link className='navbarCategory' href='/contact'><h4 className='h4Navbar'>Contact</h4></Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <NavLink className='navbarCategory' to='/cart' style={{display:'flex', alignItems:'center'}}><CartWidget></CartWidget></NavLink>
    </Container>
  </Navbar>
  )
}
