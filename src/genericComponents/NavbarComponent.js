import React from "react"
import {NavLink} from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap"

export default function NavbarComponent() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand className="ml-2">Carap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink to="/home" className="nav-item nav-link" role="button">Home</NavLink>
                    <NavLink to="/vehicles" className="nav-item nav-link" role="button">Vehicles</NavLink>
                    <NavLink to="/albums" className="nav-item nav-link" role="button">Albums</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};
