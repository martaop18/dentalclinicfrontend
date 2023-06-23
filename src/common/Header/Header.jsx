import React from 'react';
import "./Header.css";
//ADDING BOOTSTRAP NAVBAR

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



export const Header = ()=>{


    return (
        <div className="headerDesign">

<Navbar bg="light" data-bs-theme="light">
        <Container >
          <Navbar.Brand className='dentalName' href="#home">LIBERTY DENTAL</Navbar.Brand>
          <Nav className="navLinks">
            <Nav.Link href="#aboutUs">About us</Nav.Link>
            <Nav.Link href="#treatments">Treatments</Nav.Link>
            <Nav.Link href="#register">Register</Nav.Link>
            <Nav.Link href="#login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>





           
        </div>
    )
}