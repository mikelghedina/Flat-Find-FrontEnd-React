import React from 'react';
import Nav from 'react-bootstrap/Navbar'
import Navbar from "react-bootstrap/Navbar";
import NavLink from "react-bootstrap/NavLink";

const navbar  = () =>{
    
    return(
        <React.Fragment>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                {/* <img scr="src/logo.png" className="logo"/> */}
                {/* <Navbar.Brand href="/">Flat Find</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink href="/research">Research</NavLink>
                        <NavLink href="/AboutUs">About Us</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    );     
    
}

export default navbar;
