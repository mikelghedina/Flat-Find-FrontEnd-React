import React from 'react';
import Nav from 'react-bootstrap/Navbar'
import Navbar from "react-bootstrap/Navbar";
import NavLink from "react-bootstrap/NavLink";

const navbar  = () =>{

    return(
        <React.Fragment>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Logo</Navbar.Brand>
                <Nav className="mr-auto">
                <NavLink href="/research">Research</NavLink>
                <NavLink href="/aboutus">About us</NavLink>
                </Nav>
            </Navbar>
        </React.Fragment>
    );     
    
}

export default navbar;
