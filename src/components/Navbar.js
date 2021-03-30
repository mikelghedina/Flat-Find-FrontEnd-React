import React from 'react';
import Nav from 'react-bootstrap/Navbar'
import Navbar from "react-bootstrap/Navbar";
import NavLink from "react-bootstrap/NavLink";
import logo from '../logo.png'

const navbar  = () =>{

    return(
        <React.Fragment>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">
                    <img src={logo} alt="logo" width="60px"/>
                </Navbar.Brand>
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
