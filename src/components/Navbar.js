import React from 'react';
import Nav from 'react-bootstrap/Navbar'
import Navbar from "react-bootstrap/Navbar";
import NavLink from "react-bootstrap/NavLink";
import logo from '../logo.png'
import './Navbar.css'

const navbar  = () =>{
    
    return(
        <React.Fragment>
            <Navbar collapseOnSelect expand="lg">
                <Navbar.Brand href="/">
                    <img src={logo} alt='logo' className='logo'/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto navbar">
                        <NavLink href="/research">Research</NavLink>
                        <NavLink href="/AboutUs">About Us</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    );     
    
}

export default navbar;
