import React, { useState } from 'react';
import "./Header.css";

import { useNavigate } from 'react-router-dom';
//ADDING BOOTSTRAP NAVBAR

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';



export const Header = ()=>{

  const [token, setToken] = useState("");

     const navigate = useNavigate();

    return (
        <div className="headerDesign">
{token !== "" 

? (
 <div>login options.....</div>
)
:(
  <div className="navBarLinks">
    <div className="navLinks">
      <div onClick={()=>navigate("/home")}>LIBERTY</div>
      <div onClick={()=>navigate("/aboutus")}>About us</div>
      <div onClick={()=>navigate("/treatments")}>Treatments</div>


    </div>
  </div>
)
}
{/* <Navbar bg="light" data-bs-theme="light">
        <Container >
          <Navbar.Brand className='dentalName' href="#home">LIBERTY DENTAL</Navbar.Brand>
          <Nav className="navLinks">
            <Nav.Link href="#aboutUs">About us</Nav.Link>
            <Nav.Link href="#treatments">Treatments</Nav.Link>
            <Nav.Link href="#register">Register</Nav.Link>
            <Nav.Link href="#login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}





           
        </div>
    )
}