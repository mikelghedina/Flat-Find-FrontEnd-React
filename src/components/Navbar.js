import React from 'react';
import Nav from 'react-bootstrap/Navbar'
import Navbar from "react-bootstrap/Navbar";
import NavLink from "react-bootstrap/NavLink";
import logo from '../logo.png'
import bcn from '../bcn2-01.png'
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
                        <NavLink href="/research">Empezar</NavLink>
                        <NavLink href="/AboutUs">Contacto</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <img src={bcn} alt='bcn' className='bcn'/>
        </React.Fragment>
    );     
    
}

export default navbar;
