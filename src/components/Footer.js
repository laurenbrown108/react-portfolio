import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';



function Footer() {
    return (
        <>
            <footer>
            <Nav className="shadow navbar fixed-bottom navbar-light">
                <Container className="container">
                    <Row className="row mx-auto">
                            <a className="col icons" href="https://linkedin.com/in/lauren-brown-4290a458/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin square fa"></i></a>
                            <a className="col icons" href="https://github.com/laurenbrown108" target="_blank" rel="noreferrer"><i className="fa fa-github square fa"></i></a>
                            <a className="col icons" href="mailto:laurenbrown108@gmail.com" target="_blank" rel="noreferrer"><i className="fa fa-envelope-square"></i></a>
                    </Row>
                </Container>
            </Nav>
            </footer>
        </>
    );
}

export default Footer;