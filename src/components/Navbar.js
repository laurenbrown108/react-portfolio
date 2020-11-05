import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function MyNav() {
    return (
        <>
            <header>
                <Navbar collapseOnSelect expand="lg" className="shadow pt-2 pb-2 navbar bg-light navbar-light">
                    <Navbar.Brand className="name" href="/about"> LAUREN BROWN</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto navlink">

                            <Nav.Link href="/about">ABOUT</Nav.Link>

                            <Nav.Link href="/portfolio">PORTFOLIO</Nav.Link>


                        </Nav>
                    </Navbar.Collapse>

                </Navbar>

            </header>
        </>
    );
}

export default MyNav;