import React from 'react';
// import examples from '../examples.json'
import PortfolioCard from '../components/Cards';
import Row from 'react-bootstrap/Row';
// import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'

function Portfolio() {
    return (
        <>
            <Container className="py-5 mb-5">
                    <h1> PORTFOLIO </h1>
                    <Row>
                        <PortfolioCard />
                    </Row>
            </Container>
           
        </>
    )
}

export default Portfolio;