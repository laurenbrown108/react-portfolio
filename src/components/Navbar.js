import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function MyNav() {
    return (
        <>
            <header>
                <Navbar className="shadow pt-2 pb-2 navbar navbar-light">
                    <Navbar.Brand href="#"> Lauren Brown</Navbar.Brand>
                    <Nav className="ml-auto">

                        <Nav.Link href="/about">About</Nav.Link>


                        <Nav.Link href="/portfolio">Portfolio</Nav.Link>


                        <Nav.Link href="/contact">Contact</Nav.Link>

                    </Nav>


                </Navbar>

            </header>
        </>
    );
}

export default MyNav;